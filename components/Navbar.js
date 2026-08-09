'use client';

// 导航栏：论坛名、登录/注册按钮、用户下拉菜单、主题切换
import { useState } from 'react';
import { useApp } from './AppProvider';
import { Icon } from './Icons';

export default function Navbar({ onOpenModal }) {
  const { currentUser, forumName, theme, toggleTheme, navigate, logout } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);

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
    // 打开私信列表（ChatManager 监听）
    window.dispatchEvent(new CustomEvent('forumlify-open-messages'));
  };

  return (
    <nav id="navbar">
      <div className="nav-left">
        <span className="forum-name" onClick={() => navigate('feed')} style={{ cursor: 'pointer' }}>
          {forumName}
        </span>
      </div>
      <div className="nav-right">
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
