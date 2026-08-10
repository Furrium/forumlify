'use client';

// 管理后台 - 事件日志
import { useEffect, useState } from 'react';
import { API } from '@/lib/api';

export default function AdminLogs() {
  const [logs, setLogs] = useState(null);
  const [error, setError] = useState(null);

  const load = () => {
    API.getEventLogs()
      .then((data) => { setLogs(data || []); setError(null); })
      .catch((e) => { setError(e.message); setLogs([]); });
  };

  useEffect(load, []);

  if (error) return <div style={{ textAlign: 'center', color: '#ef4444', padding: 20 }}>加载失败：{error}</div>;
  if (!logs) return <div style={{ textAlign: 'center', color: '#94a3b8', padding: 20 }}>加载中...</div>;
  if (logs.length === 0) return <div style={{ textAlign: 'center', color: '#94a3b8', padding: 40 }}>暂无日志</div>;

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
      <thead>
        <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
          <th>时间</th><th>用户</th><th>操作</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((l) => (
          <tr key={l.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
            <td style={{ padding: '6px 0' }}>{new Date(l.created_at).toLocaleString('zh-CN')}</td>
            <td style={{ padding: '6px 0' }}>{l.username || '系统'}</td>
            <td style={{ padding: '6px 0' }}>{l.action}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
