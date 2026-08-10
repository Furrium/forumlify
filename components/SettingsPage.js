'use client';

// 个人设置页：侧边栏布局（个人资料 / 安全设置 / 恢复码）
import { useState } from 'react';
import { Icon } from './Icons';
import SettingsProfile from './SettingsProfile';
import AccountSecurity from './AccountSecurity';
import RecoveryCodes from './RecoveryCodes';

const NAV = [
  { key: 'profile', label: '个人资料', icon: 'user' },
  { key: 'security', label: '安全设置', icon: 'shieldAlert' },
  { key: 'recovery', label: '恢复码', icon: 'lock' },
];

export default function SettingsPage() {
  const [tab, setTab] = useState('profile');

  return (
    <div className="page-slide active">
      <div className="page-header" style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <h2><Icon name="settings" size={20} /> 设置</h2>
      </div>
      <div className="settings-layout" style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'flex', gap: 28, alignItems: 'flex-start' }}>
        <aside className="settings-sidebar" style={{ width: 200, flexShrink: 0 }}>
          <nav className="settings-nav">
            {NAV.map((n) => (
              <a
                key={n.key}
                href="#"
                className={'settings-nav-item' + (tab === n.key ? ' active' : '')}
                data-settings-tab={n.key}
                onClick={(e) => { e.preventDefault(); setTab(n.key); }}
              >
                <span className="nav-icon"><Icon name={n.icon} size={18} /></span>
                {n.label}
              </a>
            ))}
          </nav>
        </aside>
        <main className="settings-content" id="settingsContent">
          {tab === 'profile' && <SettingsProfile />}
          {tab === 'security' && <AccountSecurity />}
          {tab === 'recovery' && <RecoveryCodes />}
        </main>
      </div>
    </div>
  );
}
