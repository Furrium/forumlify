'use client';

// 管理后台：侧边栏布局（对齐上游 main 分支）
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from './Icons';
import AdminReports from './admin/AdminReports';
import AdminUsers from './admin/AdminUsers';
import AdminLogs from './admin/AdminLogs';
import AdminLinks from './admin/AdminLinks';
import AdminForumSettings from './admin/AdminForumSettings';
import AdminCustomPages from './admin/AdminCustomPages';
import AdminCustomCss from './admin/AdminCustomCss';

const NAV = [
  { key: 'reports', labelKey: 'admin.reports', icon: 'shieldAlert' },
  { key: 'users', labelKey: 'admin.users', icon: 'users' },
  { key: 'logs', labelKey: 'admin.logs', icon: 'file' },
  { key: 'links', labelKey: 'admin.links', icon: 'link' },
  { key: 'settings', labelKey: 'admin.forumSettings', icon: 'settings' },
  { key: 'custom', labelKey: 'admin.customPages', icon: 'file' },
  { key: 'css', labelKey: 'admin.customCss', icon: 'file' },
];

export default function AdminPage() {
  const { t } = useTranslation();
  const [tab, setTab] = useState('reports');

  return (
    <div className="page-slide active">
      <div className="page-header" style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <h2><Icon name="shieldAlert" size={20} /> {t('admin.title')}</h2>
      </div>
      <div className="admin-layout" style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <aside className="admin-sidebar">
          <nav className="admin-nav">
            {NAV.map((n) => (
              <a
                key={n.key}
                href="#"
                className={'admin-nav-item' + (tab === n.key ? ' active' : '')}
                data-tab={n.key}
                onClick={(e) => { e.preventDefault(); setTab(n.key); }}
              >
                <span className="nav-icon"><Icon name={n.icon} size={18} /></span>
                {t(n.labelKey)}
              </a>
            ))}
          </nav>
        </aside>
        <main className="admin-content" id="adminContent">
          {tab === 'reports' && <AdminReports />}
          {tab === 'users' && <AdminUsers />}
          {tab === 'logs' && <AdminLogs />}
          {tab === 'links' && <AdminLinks />}
          {tab === 'custom' && <AdminCustomPages />}
          {tab === 'css' && <AdminCustomCss />}
          {tab === 'settings' && <AdminForumSettings />}
        </main>
      </div>
    </div>
  );
}
