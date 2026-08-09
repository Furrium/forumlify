'use client';

// 管理后台：5 个 tab
import { useState } from 'react';
import AdminReports from './admin/AdminReports';
import AdminUsers from './admin/AdminUsers';
import AdminLogs from './admin/AdminLogs';
import AdminLinks from './admin/AdminLinks';
import AdminForumSettings from './admin/AdminForumSettings';

const TABS = [
  { key: 'reports', label: '举报' },
  { key: 'users', label: '用户' },
  { key: 'logs', label: '日志' },
  { key: 'links', label: '友链' },
  { key: 'settings', label: '论坛设置' },
];

export default function AdminPage() {
  const [tab, setTab] = useState('reports');

  return (
    <div className="page-slide active">
      <div className="page-header" style={{ maxWidth: 900, margin: '0 auto', width: '100%' }}>
        <h2>管理后台</h2>
      </div>
      <div className="admin-tabs" style={{ maxWidth: 900, margin: '0 auto', width: '100%' }}>
        {TABS.map((t) => (
          <button
            key={t.key}
            className={'admin-tab' + (tab === t.key ? ' active' : '')}
            onClick={() => setTab(t.key)}
          >
            {t.label}
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
