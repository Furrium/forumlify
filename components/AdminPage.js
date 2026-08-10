'use client';

// 管理后台：侧边栏布局（对齐上游 main 分支）
import { useState } from 'react';
import { Icon } from './Icons';
import AdminReports from './admin/AdminReports';
import AdminUsers from './admin/AdminUsers';
import AdminLogs from './admin/AdminLogs';
import AdminLinks from './admin/AdminLinks';
import AdminForumSettings from './admin/AdminForumSettings';
import AdminCustomPages from './admin/AdminCustomPages';
import AdminCustomCss from './admin/AdminCustomCss';

const NAV = [
  { key: 'reports', label: '举报', icon: 'shieldAlert' },
  { key: 'users', label: '用户', icon: 'users' },
  { key: 'logs', label: '日志', icon: 'file' },
  { key: 'links', label: '友链', icon: 'link' },
  { key: 'settings', label: '论坛设置', icon: 'settings' },
  { key: 'custom', label: '自定义页面', icon: 'file' },
  { key: 'css', label: '自定义CSS', icon: 'file' },
];

export default function AdminPage() {
  const [tab, setTab] = useState('reports');

  return (
    <div className="page-slide active">
      <div className="page-header" style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <h2><Icon name="shieldAlert" size={20} /> 管理后台</h2>
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
                {n.label}
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
