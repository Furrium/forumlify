'use client';

// 私信 - 会话列表
import { useEffect, useState } from 'react';
import { API } from '@/lib/api';

function avatar(username) {
  return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username || 'U') +
    '&background=6366f1&color=fff&size=64';
}

export default function ConversationList({ onOpenChat, onClose }) {
  const [conversations, setConversations] = useState(null);

  const load = () => {
    API.getConversations()
      .then((data) => setConversations(data || []))
      .catch(() => setConversations([]));
  };

  useEffect(load, []);

  return (
    <div className="modal active" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-content" style={{ display: 'flex', flexDirection: 'column', maxHeight: '70vh', padding: 0, overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: 18, margin: 0 }}>✉️ 私信</h2>
          <span className="close" onClick={onClose} style={{ fontSize: 24, cursor: 'pointer', color: 'var(--text-light)', lineHeight: 1 }}>&times;</span>
        </div>
        <div id="messageListContent" style={{ flex: 1, overflowY: 'auto', padding: 0 }}>
          {conversations === null ? (
            <div style={{ textAlign: 'center', color: '#94a3b8', padding: '40px 0' }}>加载中...</div>
          ) : conversations.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#94a3b8', padding: '40px 0' }}>暂无私信</div>
          ) : (
            conversations.map((c) => {
              const unread = c.unread_count || 0;
              const lastMsg = c.last_message || '暂无消息';
              const time = c.last_message_time ? new Date(c.last_message_time).toLocaleString('zh-CN') : '';
              return (
                <div
                  key={c.id}
                  className="message-list-item"
                  style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderBottom: '1px solid var(--border)', cursor: 'pointer', transition: 'background 0.15s' }}
                  onClick={() => onOpenChat(c.id, c.other_user_id, c.other_username)}
                >
                  <img src={c.other_avatar_url || avatar(c.other_username)} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} alt="" />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 600 }}>{c.other_username}</span>
                      <span style={{ fontSize: 12, color: 'var(--text-light)' }}>{time}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 13, color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 200 }}>{lastMsg}</span>
                      {unread > 0 && (
                        <span style={{ background: '#ef4444', color: '#fff', borderRadius: '50%', padding: '2px 8px', fontSize: 11, fontWeight: 600 }}>{unread}</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
