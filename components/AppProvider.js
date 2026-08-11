'use client';

// 全局状态 Provider：用户、主题、论坛名、当前视图（feed/post/new/admin/...）
import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { flushSync } from 'react-dom';
import { API, getTheme, setToken, getToken } from '@/lib/api';

const AppContext = createContext(null);

const POST_TRANSITION_PARTS = [
  ['.post-avatar', 'post-avatar'],
  ['.post-username', 'post-author'],
  ['.post-title', 'post-heading'],
  ['.post-time', 'post-time'],
  ['.post-content', 'post-body'],
  ['.post-images', 'post-feed-media'],
  ['.post-pin-state', 'post-pin-state'],
  ['.post-edited-state', 'post-edited-state'],
  ['.post-actions', 'post-feed-actions'],
];

function namePostTransitionParts(card) {
  if (!card) return [];
  return POST_TRANSITION_PARTS.flatMap(([selector, name]) => {
    const element = card.querySelector(selector);
    if (!element) return [];
    element.style.viewTransitionName = name;
    return [element];
  });
}

function clearPostTransitionParts(elements) {
  elements.forEach((element) => {
    element.style.viewTransitionName = '';
  });
}

function waitForPostImages(container) {
  const images = Array.from(container?.querySelectorAll('img') || []);
  if (images.length === 0) return Promise.resolve();

  return new Promise((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      resolve();
    };
    const timeout = setTimeout(finish, 1200);
    Promise.all(images.map((image) => image.decode?.().catch(() => {}) || Promise.resolve())).then(finish);
  });
}

function stageSharedGeometry(transition, {
  name,
  duration,
  moveOffset,
  moveEasing = 'cubic-bezier(0.16, 1, 0.3, 1)',
  resizeEasing = 'cubic-bezier(0.4, 0, 0.2, 1)',
}) {
  transition.ready.then(() => {
    const groupAnimation = document.getAnimations().find(
      (animation) => animation.effect?.pseudoElement === `::view-transition-group(${name})`
    );
    const frames = groupAnimation?.effect?.getKeyframes();
    if (!groupAnimation || !frames || frames.length < 2) return;

    const start = frames[0];
    const end = frames[frames.length - 1];
    groupAnimation.effect.setKeyframes([
      {
        offset: 0,
        width: start.width,
        height: start.height,
        transform: start.transform,
        easing: moveEasing,
      },
      {
        offset: moveOffset,
        width: end.width,
        height: start.height,
        transform: end.transform,
        easing: resizeEasing,
      },
      {
        offset: 1,
        width: end.width,
        height: end.height,
        transform: end.transform,
      },
    ]);
    groupAnimation.effect.updateTiming({ duration, easing: 'linear', fill: 'both' });
  }).catch(() => {});
}

export function useApp() {
  return useContext(AppContext);
}

export default function AppProvider({ children, cachedName = '' }) {
  const [currentUser, setCurrentUser] = useState(null);
  // 论坛名初始值来自 cookie（SSR 首帧即输出，SSR/客户端一致 → 无 hydration mismatch）
  const [forumName, setForumName] = useState(cachedName || 'Forumlify');
  const [theme, setThemeState] = useState('light');
  const [view, setView] = useState('feed'); // feed | post | new | admin | settings | messages | user | custom
  const [currentPostId, setCurrentPostId] = useState(null);
  const [currentPostPreview, setCurrentPostPreview] = useState(null);
  const [currentUsername, setCurrentUsername] = useState(null);
  const [currentPageName, setCurrentPageName] = useState(null);
  const [sort, setSort] = useState('latest');
  const [refreshKey, setRefreshKey] = useState(0);
  const [ready, setReady] = useState(false); // 初始加载完成标记（控制加载页/淡入）
  // 有 cookie 缓存名即视为已加载（SSR/客户端一致）
  const [forumNameLoaded, setForumNameLoaded] = useState(!!cachedName);
  const loadedRef = useRef(false);

  const refresh = useCallback(() => setRefreshKey((k) => k + 1), []);

  // 论坛名写 cookie（SSR 可读 → 首帧输出，无需内联脚本注入 DOM）
  const syncForumNameCookie = useCallback((name) => {
    try {
      document.cookie = 'forumlify-name=' + encodeURIComponent(name) + '; path=/; max-age=31536000';
    } catch (e) {}
  }, []);

  // 主题
  useEffect(() => {
    const t = getTheme();
    setThemeState(t);
    document.documentElement.setAttribute('data-theme', t);
    // 系统主题变化时跟随（仅当用户未手动设置过）
    const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    if (mq && mq.addEventListener) {
      const onSysChange = () => {
        if (!localStorage.getItem('forumlify-theme')) {
          const next = mq.matches ? 'dark' : 'light';
          setThemeState(next);
          document.documentElement.setAttribute('data-theme', next);
        }
      };
      mq.addEventListener('change', onSysChange);
      return () => mq.removeEventListener('change', onSysChange);
    }
  }, []);

  // 论坛名变化时同步浏览器标题（覆盖初始化/数据库加载/改名三条路径）
  useEffect(() => {
    document.title = forumName;
    const titleEl = document.querySelector('title');
    if (titleEl) titleEl.textContent = forumName;
  }, [forumName]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('forumlify-theme', next);
      return next;
    });
  }, []);

  // 初始化：读取缓存论坛名（立即显示），恢复登录、加载服务器论坛名
  useEffect(() => {
    // 缓存论坛名（hydrate 后立即生效；SSR 首帧已由 cookie 输出）
    try {
      const cached = localStorage.getItem('forumlify-forum-name');
      if (cached) {
        setForumName(cached);
        setForumNameLoaded(true);
        syncForumNameCookie(cached);
      }
    } catch (e) {}

    if (loadedRef.current) return;
    loadedRef.current = true;

    async function init() {
      const token = getToken();
      if (token) {
        try {
          const user = await API.getMe();
          setCurrentUser(user);
          API.logEvent('login').catch(() => {});
        } catch {
          setToken(null);
        }
      }
      try {
        const s = await API.getSettings();
        if (s.forum_name) {
          setForumName(s.forum_name);
          localStorage.setItem('forumlify-forum-name', s.forum_name);
          syncForumNameCookie(s.forum_name);
        }
        // 先标记论坛名已收到（加载页原地淡入名字），稍后切换主页
        setForumNameLoaded(true);
        setTimeout(() => setReady(true), 650);
      } catch {
        setForumNameLoaded(true);
        setReady(true);
      }
    }
    init();
  }, []);

  // 页面标题：初始化中轮换 Loading. → Loading.. → Loading...，收到论坛名/完成后显示论坛名
  useEffect(() => {
    // 尚未收到论坛名且未完成初始化：轮换 Loading.
    if (!ready && !forumNameLoaded) {
      const seq = ['Loading.', 'Loading..', 'Loading...'];
      let i = 0;
      document.title = seq[0];
      const t = setInterval(() => {
        i = (i + 1) % seq.length;
        document.title = seq[i];
      }, 1000);
      return () => {
        clearInterval(t);
      };
    }
    // 已收到论坛名或初始化完成：标题显示论坛名（Next 重置 metadata 时也能恢复）
    document.title = forumName;
    const titleEl = document.querySelector('title');
    if (titleEl) titleEl.textContent = forumName;
  }, [ready, forumNameLoaded, forumName]);

  // 按 URL 参数初始化视图
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const postParam = params.get('post');
    const pageParam = params.get('page');
    const userParam = params.get('user');
    if (postParam) {
      setView('post');
      setCurrentPostId(postParam);
    } else if (userParam) {
      setView('user');
      setCurrentUsername(userParam);
    } else if (pageParam && ['messages', 'settings', 'admin', 'new'].includes(pageParam)) {
      setView(pageParam);
    } else if (pageParam) {
      // 未知 page 参数视为自定义页面
      setView('custom');
      setCurrentPageName(pageParam);
    }
  }, []);

  // 视图切换：同步 URL (pushState，模拟原 SPA 行为)
  const navigate = useCallback((page) => {
    const url = new URL(window.location);
    if (page === 'feed') {
      url.searchParams.delete('page');
      url.searchParams.delete('post');
    } else {
      url.searchParams.set('page', page);
      url.searchParams.delete('post');
    }
    const commitNavigation = (refreshFeed = true) => {
      window.history.pushState({ page }, '', url);
      setView(page);
      setCurrentPostId(null);
      setCurrentPostPreview(null);
      if (refreshFeed) refresh();
    };

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (page !== 'feed' || view === 'feed' || !document.startViewTransition || reduceMotion) {
      commitNavigation();
      return;
    }

    let targetCard = currentPostId
      ? Array.from(document.querySelectorAll('[data-post-id]')).find((element) => element.dataset.postId === String(currentPostId))
      : null;
    let targetParts = [];
    document.documentElement.classList.add('home-view-transition');
    if (targetCard) document.documentElement.classList.add('returning-home');

    const transition = document.startViewTransition(() => {
      flushSync(() => commitNavigation(false));
      targetCard = currentPostId
        ? Array.from(document.querySelectorAll('[data-post-id]')).find((element) => element.dataset.postId === String(currentPostId))
        : null;
      if (targetCard) targetCard.style.viewTransitionName = 'post-expand';
      targetParts = namePostTransitionParts(targetCard);
    });
    stageSharedGeometry(transition, { name: 'post-expand', duration: 480, moveOffset: 0.72 });
    stageSharedGeometry(transition, { name: 'post-body', duration: 480, moveOffset: 0.72 });
    const clearTargetNames = () => {
      if (targetCard) targetCard.style.viewTransitionName = '';
      clearPostTransitionParts(targetParts);
    };
    transition.ready.then(clearTargetNames, clearTargetNames);
    transition.finished.finally(() => {
      document.documentElement.classList.remove('home-view-transition', 'returning-home');
      refresh();
    });
  }, [currentPostId, refresh, view]);

  const openPost = useCallback((postId, sourceElement = null, preview = null) => {
    const url = new URL(window.location);
    url.searchParams.set('post', postId);
    url.searchParams.delete('page');
    url.searchParams.delete('user');
    const commitNavigation = () => {
      window.history.pushState({ page: 'post', postId }, '', url);
      setView('post');
      setCurrentPostId(postId);
      setCurrentPostPreview(preview);
    };

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!sourceElement || !document.startViewTransition || reduceMotion) {
      commitNavigation();
      return;
    }

    document.documentElement.classList.remove('post-transition-settled');
    sourceElement.style.viewTransitionName = 'post-expand';
    const sourceParts = namePostTransitionParts(sourceElement);
    document.documentElement.classList.add('post-view-transition');
    const transition = document.startViewTransition(async () => {
      flushSync(commitNavigation);
      await waitForPostImages(document.querySelector('#pagePost .post-detail-card'));
    });
    stageSharedGeometry(transition, {
      name: 'post-expand',
      duration: 960,
      moveOffset: 0.62,
      moveEasing: 'cubic-bezier(0.42, 0, 0.58, 1)',
      resizeEasing: 'cubic-bezier(0.42, 0, 0.58, 1)',
    });
    stageSharedGeometry(transition, { name: 'post-body', duration: 960, moveOffset: 0.62 });
    const clearSourceNames = () => {
      sourceElement.style.viewTransitionName = '';
      clearPostTransitionParts(sourceParts);
    };
    transition.ready.then(clearSourceNames, clearSourceNames);
    transition.finished.finally(() => {
      const root = document.documentElement;
      root.classList.remove('post-view-transition');
      root.classList.add('post-transition-settled');
      window.setTimeout(() => root.classList.remove('post-transition-settled'), 220);
    });
  }, []);

  const openUser = useCallback((username) => {
    const url = new URL(window.location);
    url.searchParams.set('user', username);
    url.searchParams.delete('page');
    url.searchParams.delete('post');
    window.history.pushState({ page: 'user', username }, '', url);
    setView('user');
    setCurrentUsername(username);
  }, []);

  const openCustomPage = useCallback((pageName) => {
    const url = new URL(window.location);
    url.searchParams.set('page', pageName);
    url.searchParams.delete('post');
    url.searchParams.delete('user');
    window.history.pushState({ page: 'custom', pageName }, '', url);
    setView('custom');
    setCurrentPageName(pageName);
  }, []);

  // 浏览器前进后退
  useEffect(() => {
    const onPop = (e) => {
      const state = e.state || {};
      if (state.postId) {
        setView('post');
        setCurrentPostId(state.postId);
        setCurrentPostPreview(null);
      } else if (state.username) {
        setView('user');
        setCurrentUsername(state.username);
      } else if (state.pageName) {
        setView('custom');
        setCurrentPageName(state.pageName);
      } else {
        setView(state.page || 'feed');
        setCurrentPostId(null);
        setCurrentPostPreview(null);
        setCurrentUsername(null);
        setCurrentPageName(null);
      }
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const login = useCallback(async (email, password) => {
    const result = await API.login(email, password);
    if (result.user) {
      setCurrentUser(result.user);
      API.logEvent('login').catch(() => {});
    }
    return result;
  }, []);

  const register = useCallback(async (email, password, username, captcha) => {
    const result = await API.register(email, password, username, captcha);
    const loginResult = await API.login(email, password);
    if (loginResult.user) {
      setCurrentUser(loginResult.user);
      API.logEvent('register').catch(() => {});
    }
    return result;
  }, []);

  const logout = useCallback(() => {
    API.logout();
    setCurrentUser(null);
    navigate('feed');
  }, [navigate]);

  const updateForumName = useCallback((name) => {
    setForumName(name);
    localStorage.setItem('forumlify-forum-name', name);
    syncForumNameCookie(name);
  }, [syncForumNameCookie]);

  const value = {
    currentUser, setCurrentUser,
    forumName, forumNameLoaded, updateForumName,
    theme, toggleTheme,
    view, navigate,
    currentPostId, currentPostPreview, openPost,
    currentUsername, openUser,
    currentPageName, openCustomPage,
    sort, setSort,
    refreshKey, refresh,
    ready,
    login, register, logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
