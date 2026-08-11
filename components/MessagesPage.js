'use client';

// 消息页：通知列表（回复/删除/举报处理/系统）
import { useEffect, useState } from 'react';
import { API } from '@/lib/api';
import { useApp } from './AppProvider';
import { Icon } from './Icons';

const TYPE_MAP = { reply: 'message', post_deleted: 'trash', report_handled: 'shield', system: 'megaphone' };

export default function MessagesPage() {
  const { currentUser } = useApp();
  const [notifications, setNotifications] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currentUser) return;
    API.getNotifications()
      .then((data) => {
        setNotifications(data || []);
        setError(null);
        API.markAllNotificationsRead().catch(() => {});
      })
      .catch((e) => { setError(e.message); setNotifications([]); });
  }, [currentUser]);

  if (!currentUser) {
    return <div className="page-slide active" style={{ textAlign: 'center', color: '#94a3b8', padding: '40px 0' }}>请先登录</div>;
  }

  return (
    <div className="page-slide active">
      <div className="page-header" style={{ maxWidth: 700, margin: '0 auto', width: '100%' }}>
        <h2><Icon name="message" size={20} /> 消息</h2>
      </div>
      <div style={{ maxWidth: 700, margin: '0 auto', width: '100%' }}>
        {error ? (
          <div style={{ textAlign: 'center', color: '#ef4444', padding: 20 }}>加载失败：{error}</div>
        ) : notifications === null ? (
          <div style={{ textAlign: 'center', color: '#94a3b8', padding: '40px 0' }}>加载中...</div>
        ) : notifications.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#94a3b8', padding: '60px 0' }}>
            <Icon name="message" size={48} />
            <p style={{ fontSize: 16 }}>暂无消息</p>
            <p style={{ fontSize: 13 }}>当有人回复你的帖子或处理你的举报时，会在这里通知你</p>
          </div>
        ) : (
          notifications.map((n) => {
            const icon = TYPE_MAP[n.type] || 'pin';
            const time = n.created_at ? new Date(n.created_at).toLocaleString('zh-CN') : '';
            return (
              <div key={n.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 16px', borderBottom: '1px solid var(--border-light)', background: 'var(--surface)', borderRadius: 6, marginBottom: 6 }}>
                <span style={{ color: 'var(--text-secondary)', paddingTop: 2 }}><Icon name={icon} size={20} /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{n.title}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 2 }}>{n.content}</div>
                  {n.link && <a href={n.link} style={{ color: 'var(--primary)', fontSize: 13, textDecoration: 'none', marginTop: 4, display: 'inline-block' }}>查看详情 →</a>}
                  <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 4 }}>{time}</div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
