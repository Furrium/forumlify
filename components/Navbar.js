'use client';

// 导航栏：论坛名、自定义页面链接、登录/注册、私信、用户菜单、主题切换
import { useState, useEffect } from 'react';
import { useApp } from './AppProvider';
import { Icon } from './Icons';
import { API } from '@/lib/api';
import { DMButton } from './chat/ChatManager';

export default function Navbar({ onOpenModal }) {
  const { currentUser, forumName, theme, toggleTheme, navigate, openCustomPage, logout } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const [customPages, setCustomPages] = useState([]);

  useEffect(() => {
    API.getCustomPages().then(setCustomPages).catch(() => {});
  }, []);

  // 点击菜单外部关闭下拉（检查目标是否在菜单/头像内，避免 React 合成事件与原生监听冲突）
  useEffect(() => {
    const closeMenu = (e) => {
      const menu = document.getElementById('userDropdown');
      const avatarEl = document.getElementById('userDropdown')?.querySelector('.avatar');
      if (menu && menu.contains(e.target)) return;
      if (avatarEl && avatarEl.contains(e.target)) return;
      setMenuOpen(false);
    };
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  const avatarSrc = currentUser?.avatar_url ||
    'https://ui-avatars.com/api/?name=' + encodeURIComponent(currentUser?.username || 'U') +
    '&background=6366f1&color=fff';

  const goPage = (page) => {
    if (page === 'admin' && currentUser?.role !== 'admin') {
      alert('无权限访问');
      return;
    }
    setMenuOpen(false);
    navigate(page);
  };

  const openMessages = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    // 消息页 = 通知列表（与原版一致），私信走导航栏 ✉️ 按钮
    navigate('messages');
  };

  return (
    <nav id="navbar">
      <div className="nav-left">
        <span className="forum-name" onClick={() => navigate('feed')} style={{ cursor: 'pointer' }}>
          {forumName}
        </span>
        <span id="customNavLinks" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginLeft: 16 }}>
          {customPages.map((p) => (
            <a
              key={p.id}
              href="#"
              className="custom-page-nav-link"
              data-custom={p.name}
              onClick={(e) => { e.preventDefault(); openCustomPage(p.name); }}
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 14, padding: '4px 10px', borderRadius: 4, transition: 'color 0.15s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              {p.title}
            </a>
          ))}
        </span>
      </div>
      <div className="nav-right">
        <DMButton />
        <div id="userMenu">
          {!currentUser ? (
            <div id="authButtons">
              <button className="btn-ghost" onClick={() => onOpenModal('login')}>登录</button>
              <button className="btn-primary" onClick={() => onOpenModal('register')}>注册</button>
            </div>
          ) : (
            <div id="userDropdown" style={{ display: 'block' }}>
              <img
                className="avatar"
                src={avatarSrc}
                alt="avatar"
                onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
              />
              {menuOpen && (
                <div className="dropdown-menu show" onClick={(e) => e.stopPropagation()}>
                  <a href="#" onClick={openMessages}>
                    <Icon name="message" /> 消息
                  </a>
                  <a href="#" onClick={(e) => { e.preventDefault(); goPage('settings'); }}>
                    <Icon name="settings" /> 设置
                  </a>
                  {currentUser.role === 'admin' && (
                    <a href="#" onClick={(e) => { e.preventDefault(); goPage('admin'); }}>
                      <Icon name="shieldAlert" /> 管理后台
                    </a>
                  )}
                  <hr />
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleTheme();
                      setMenuOpen(false);
                    }}
                  >
                    <Icon name={theme === 'dark' ? 'sun' : 'moon'} /> {theme === 'dark' ? '亮色模式' : '暗色模式'}
                  </a>
                  <hr />
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (confirm('确定要退出吗？')) {
                        setMenuOpen(false);
                        logout();
                      }
                    }}
                  >
                    <Icon name="logout" /> 退出
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
