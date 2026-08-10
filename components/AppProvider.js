'use client';

// 全局状态 Provider：用户、主题、论坛名、当前视图（feed/post/new/admin/...）
import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { API, getTheme, setToken, getToken } from '@/lib/api';

const AppContext = createContext(null);

export function useApp() {
  return useContext(AppContext);
}

export default function AppProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  // 初始化时先用 localStorage 缓存的论坛名，避免闪烁（默认名 → 正确名）
  const [forumName, setForumName] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('forumlify-forum-name') || 'Forumlify';
    }
    return 'Forumlify';
  });
  const [theme, setThemeState] = useState('light');
  const [view, setView] = useState('feed'); // feed | post | new | admin | settings | messages | user | custom
  const [currentPostId, setCurrentPostId] = useState(null);
  const [currentUsername, setCurrentUsername] = useState(null);
  const [currentPageName, setCurrentPageName] = useState(null);
  const [sort, setSort] = useState('latest');
  const [refreshKey, setRefreshKey] = useState(0);
  const [ready, setReady] = useState(false); // 初始加载完成标记（控制加载页/淡入）
  const loadedRef = useRef(false);

  const refresh = useCallback(() => setRefreshKey((k) => k + 1), []);

  // 主题
  useEffect(() => {
    const t = getTheme();
    setThemeState(t);
    document.documentElement.setAttribute('data-theme', t);
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

  // 初始化：恢复登录、加载论坛名
  useEffect(() => {
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
        }
      } catch { /* 用默认名 */ }
      // 无论成功失败，初始化完成即标记 ready（结束加载页，淡入页面）
      setReady(true);
    }
    init();
  }, []);

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
    window.history.pushState({ page }, '', url);
    setView(page);
    setCurrentPostId(null);
    refresh();
  }, [refresh]);

  const openPost = useCallback((postId) => {
    const url = new URL(window.location);
    url.searchParams.set('post', postId);
    url.searchParams.delete('page');
    url.searchParams.delete('user');
    window.history.pushState({ page: 'post', postId }, '', url);
    setView('post');
    setCurrentPostId(postId);
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
      } else if (state.username) {
        setView('user');
        setCurrentUsername(state.username);
      } else if (state.pageName) {
        setView('custom');
        setCurrentPageName(state.pageName);
      } else {
        setView(state.page || 'feed');
        setCurrentPostId(null);
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

  const register = useCallback(async (email, password, username) => {
    const result = await API.register(email, password, username);
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
  }, []);

  const value = {
    currentUser, setCurrentUser,
    forumName, updateForumName,
    theme, toggleTheme,
    view, navigate,
    currentPostId, openPost,
    currentUsername, openUser,
    currentPageName, openCustomPage,
    sort, setSort,
    refreshKey, refresh,
    ready,
    login, register, logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
