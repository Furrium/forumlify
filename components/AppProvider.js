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
  const [forumName, setForumName] = useState('Forumlify');
  const [theme, setThemeState] = useState('light');
  const [view, setView] = useState('feed'); // feed | post | new | admin | settings | messages
  const [currentPostId, setCurrentPostId] = useState(null);
  const [sort, setSort] = useState('latest');
  const [refreshKey, setRefreshKey] = useState(0);
  const loadedRef = useRef(false);

  const refresh = useCallback(() => setRefreshKey((k) => k + 1), []);

  // 主题
  useEffect(() => {
    const t = getTheme();
    setThemeState(t);
    document.documentElement.setAttribute('data-theme', t);
  }, []);

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
        if (s.forum_name) setForumName(s.forum_name);
      } catch { /* 用默认名 */ }
    }
    init();
  }, []);

  // 按 URL 参数初始化视图
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const postParam = params.get('post');
    const pageParam = params.get('page');
    if (postParam) {
      setView('post');
      setCurrentPostId(postParam);
    } else if (pageParam && ['messages', 'settings', 'admin', 'new'].includes(pageParam)) {
      setView(pageParam);
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
    window.history.pushState({ page: 'post', postId }, '', url);
    setView('post');
    setCurrentPostId(postId);
  }, []);

  // 浏览器前进后退
  useEffect(() => {
    const onPop = (e) => {
      const state = e.state || {};
      if (state.postId) {
        setView('post');
        setCurrentPostId(state.postId);
      } else {
        setView(state.page || 'feed');
        setCurrentPostId(null);
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
    document.title = name;
  }, []);

  const value = {
    currentUser, setCurrentUser,
    forumName, updateForumName,
    theme, toggleTheme,
    view, navigate,
    currentPostId, openPost,
    sort, setSort,
    refreshKey, refresh,
    login, register, logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
