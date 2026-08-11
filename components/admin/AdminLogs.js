'use client';

// 管理后台 - 事件日志
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { API } from '@/lib/api';

export default function AdminLogs() {
  const { t, i18n } = useTranslation();
  const [logs, setLogs] = useState(null);
  const [error, setError] = useState(null);

  const load = () => {
    API.getEventLogs()
      .then((data) => { setLogs(data || []); setError(null); })
      .catch((e) => { setError(e.message); setLogs([]); });
  };

  useEffect(load, []);

  if (error) return <div style={{ textAlign: 'center', color: '#ef4444', padding: 20 }}>{t('admin.common.loadFailed', { msg: error })}</div>;
  if (!logs) return <div style={{ textAlign: 'center', color: '#94a3b8', padding: 20 }}><span className="spinner-sm" />{t('admin.common.loading')}</div>;
  if (logs.length === 0) return <div style={{ textAlign: 'center', color: '#94a3b8', padding: 40 }}>{t('admin.log.empty')}</div>;

  const dateLocale = i18n.resolvedLanguage === 'en' ? 'en-US' : 'zh-CN';

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
      <thead>
        <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
          <th>{t('admin.log.time')}</th><th>{t('admin.log.user')}</th><th>{t('admin.log.action')}</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((l) => (
          <tr key={l.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
            <td style={{ padding: '6px 0' }}>{new Date(l.created_at).toLocaleString(dateLocale)}</td>
            <td style={{ padding: '6px 0' }}>{l.username || t('admin.log.system')}</td>
            <td style={{ padding: '6px 0' }}>{l.action}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
