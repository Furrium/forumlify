'use client';

// 个人设置页：侧边栏布局 + 上下滑动平滑切换
// - 三个面板纵向排列在滚动容器里，scroll-snap 每次滑动对齐一个面板
// - 点侧边栏导航 → 平滑滚动到对应面板；滚动结束 → 自动更新导航高亮
import { useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from './Icons';
import SettingsProfile from './SettingsProfile';
import AccountSecurity from './AccountSecurity';
import RecoveryCodes from './RecoveryCodes';

const NAV = [
  { key: 'profile', labelKey: 'settings.profile', icon: 'user' },
  { key: 'security', labelKey: 'settings.security', icon: 'shieldAlert' },
  { key: 'recovery', labelKey: 'settings.recovery', icon: 'lock' },
];

export default function SettingsPage() {
  const { t } = useTranslation();
  const [tab, setTab] = useState('profile');
  const scrollRef = useRef(null);
  const scrollTicking = useRef(false);

  // 滚动结束（或对齐后）更新高亮
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || scrollTicking.current) return;
    scrollTicking.current = true;
    requestAnimationFrame(() => {
      scrollTicking.current = false;
      const idx = Math.round(el.scrollTop / el.clientHeight);
      const key = NAV[Math.min(Math.max(idx, 0), NAV.length - 1)]?.key;
      if (key) setTab(key);
    });
  }, []);

  // 点击导航 → 平滑滚动到对应面板
  const goTo = (key, e) => {
    if (e) e.preventDefault();
    setTab(key);
    const el = scrollRef.current;
    if (!el) return;
    const idx = NAV.findIndex((n) => n.key === key);
    el.scrollTo({ top: idx * el.clientHeight, behavior: 'smooth' });
  };

  return (
    <div className="page-slide active">
      <div className="page-header" style={{ width: '100%' }}>
        <h2><Icon name="settings" size={20} /> {t('settings.title')}</h2>
      </div>
      <div className="settings-layout" style={{ width: '100%', display: 'flex', gap: 28, alignItems: 'flex-start' }}>
        <aside className="settings-sidebar" style={{ width: 200, flexShrink: 0 }}>
          <nav className="settings-nav">
            {NAV.map((n) => (
              <a
                key={n.key}
                href="#"
                className={'settings-nav-item' + (tab === n.key ? ' active' : '')}
                data-settings-tab={n.key}
                onClick={(e) => goTo(n.key, e)}
              >
                <span className="nav-icon"><Icon name={n.icon} size={18} /></span>
                {t(n.labelKey)}
              </a>
            ))}
          </nav>
        </aside>
        <main className="settings-content" id="settingsContent" style={{ overflow: 'hidden', padding: 0 }}>
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            style={{
              height: '70vh',
              overflowY: 'auto',
              scrollSnapType: 'y mandatory',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div style={{ scrollSnapAlign: 'start', minHeight: '100%', padding: '20px 24px' }} data-panel="profile">
              <SettingsProfile />
            </div>
            <div style={{ scrollSnapAlign: 'start', minHeight: '100%', padding: '20px 24px', borderTop: '1px solid var(--glass-border)' }} data-panel="security">
              <AccountSecurity />
            </div>
            <div style={{ scrollSnapAlign: 'start', minHeight: '100%', padding: '20px 24px', borderTop: '1px solid var(--glass-border)' }} data-panel="recovery">
              <RecoveryCodes />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
