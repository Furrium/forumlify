'use client';

// 管理后台：5 个 tab
import { useState } from 'react';
import { Icon } from './Icons';
import AdminReports from './admin/AdminReports';
import AdminUsers from './admin/AdminUsers';
import AdminLogs from './admin/AdminLogs';
import AdminLinks from './admin/AdminLinks';
import AdminForumSettings from './admin/AdminForumSettings';

const TABS = [
  { key: 'reports', label: '举报', icon: 'shieldAlert' },
  { key: 'users', label: '用户', icon: 'users' },
  { key: 'logs', label: '日志', icon: 'file' },
  { key: 'links', label: '友链', icon: 'link' },
  { key: 'settings', label: '论坛设置', icon: 'settings' },
];

export default function AdminPage() {
  const [tab, setTab] = useState('reports');

  return (
    <div className="page-slide active">
      <div className="page-header" style={{ maxWidth: 900, margin: '0 auto', width: '100%' }}>
        <h2><Icon name="shieldAlert" size={20} /> 管理后台</h2>
      </div>
      <div className="admin-tabs" style={{ maxWidth: 900, margin: '0 auto', width: '100%' }}>
        {TABS.map((t) => (
          <button
            key={t.key}
            className={'admin-tab' + (tab === t.key ? ' active' : '')}
            onClick={() => setTab(t.key)}
          >
            <Icon name={t.icon} size={14} /> {t.label}
          </button>
        ))}
      </div>
      <div id="adminContent" style={{ maxWidth: 900, margin: '0 auto', width: '100%' }}>
        {tab === 'reports' && <AdminReports />}
        {tab === 'users' && <AdminUsers />}
        {tab === 'logs' && <AdminLogs />}
        {tab === 'links' && <AdminLinks />}
        {tab === 'settings' && <AdminForumSettings />}
      </div>
    </div>
  );
}
