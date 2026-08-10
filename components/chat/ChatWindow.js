'use client';

// 私信 - 聊天窗口（3 秒轮询新消息）
import { useEffect, useState, useRef, useCallback } from 'react';
import { API } from '@/lib/api';
import { useApp } from '../AppProvider';

function avatar(username) {
  return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username || 'U') +
    '&background=6366f1&color=fff&size=64';
}

export default function ChatWindow({ conversationId, otherUserId, otherUsername, onClose, onRefreshList }) {
  const { currentUser } = useApp();
  const [messages, setMessages] = useState(null);
  const [content, setContent] = useState('');
  const containerRef = useRef(null);

  const load = useCallback(async (silent = false) => {
    if (!silent) setMessages(null);
    try {
      const data = await API.getMessages(conversationId);
      setMessages(data || []);
    } catch {
      if (!silent) setMessages([]);
    }
  }, [conversationId]);

  useEffect(() => { load(); }, [load]);

  // 3 秒轮询
  useEffect(() => {
    const t = setInterval(() => load(true), 3000);
    return () => clearInterval(t);
  }, [load]);

  // 自动滚动到底部
  useEffect(() => {
    if (containerRef.current) containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages]);

  const send = async () => {
    if (!content.trim()) return;
    try {
      await API.sendMessage(conversationId, content.trim());
      setContent('');
      load();
      onRefreshList();
    } catch (err) {
      alert('发送失败：' + err.message);
    }
  };

  return (
    <div className="modal active" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-content" style={{ display: 'flex', flexDirection: 'column', maxHeight: '70vh', padding: 0, overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
          <span id="chatTitle" style={{ fontWeight: 600, fontSize: 16 }}>{otherUsername}</span>
          <span className="close" onClick={onClose} style={{ fontSize: 24, cursor: 'pointer', color: 'var(--text-light)', lineHeight: 1 }}>&times;</span>
        </div>
        <div id="chatMessages" ref={containerRef} style={{ flex: 1, overflowY: 'auto', padding: 16, minHeight: 300, maxHeight: 400 }}>
          {messages === null ? (
            <div style={{ textAlign: 'center', color: '#94a3b8', padding: '40px 0' }}>加载中...</div>
          ) : messages.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#94a3b8', padding: '40px 0' }}>还没有消息，打个招呼吧 👋</div>
          ) : (
            messages.map((m) => {
              const isMine = m.sender_id === currentUser?.id;
              const time = m.created_at ? new Date(m.created_at).toLocaleString('zh-CN') : '';
              return (
                <div key={m.id} style={{ display: 'flex', justifyContent: isMine ? 'flex-end' : 'flex-start', marginBottom: 12 }}>
                  {!isMine && (
                    <img src={m.sender_avatar_url || avatar(m.sender_username)} style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', marginRight: 8, flexShrink: 0 }} alt="" />
                  )}
                  <div style={{ maxWidth: '70%' }}>
                    <div style={{
                      background: isMine ? 'var(--primary)' : 'var(--surface)',
                      color: isMine ? '#fff' : 'var(--text)',
                      padding: '10px 14px', borderRadius: 12,
                      border: isMine ? 'none' : '1px solid var(--border)',
                      wordBreak: 'break-word',
                    }}>
                      {m.content}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--text-light)', marginTop: 4, textAlign: isMine ? 'right' : 'left' }}>
                      {time} {isMine ? (m.is_read ? '✓✓' : '✓') : ''}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div style={{ display: 'flex', gap: 8, padding: '12px 16px', borderTop: '1px solid var(--border)' }}>
          <input
            type="text"
            id="chatInput"
            placeholder="输入消息..."
            style={{ flex: 1, padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 6, fontSize: 14, background: 'var(--bg)', color: 'var(--text)', outline: 'none' }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') send(); }}
          />
          <button className="btn-primary" style={{ padding: '8px 16px' }} onClick={send}>发送</button>
        </div>
      </div>
    </div>
  );
}
