'use client';

// 私信管理器：会话列表 modal + 聊天窗口 modal + 未读 badge
import { useState, useEffect, useCallback } from 'react';
import { API } from '@/lib/api';
import { useApp } from '../AppProvider';
import ConversationList from './ConversationList';
import ChatWindow from './ChatWindow';

// 私信按钮（含未读 badge），渲染在导航栏内
export function DMButton() {
  const { currentUser } = useApp();
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    if (!currentUser) { setUnread(0); return; }
    const update = () => {
      API.getConversations()
        .then((cs) => setUnread((cs || []).reduce((s, c) => s + (c.unread_count || 0), 0)))
        .catch(() => {});
    };
    update();
    const t = setInterval(update, 30000);
    return () => clearInterval(t);
  }, [currentUser]);

  return (
    <button
      className="nav-icon-btn"
      title="私信"
      style={{ position: 'relative', padding: '6px 8px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', borderRadius: 4, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
      onClick={() => window.dispatchEvent(new CustomEvent('forumlify-open-messages'))}
    >
      ✉️
      {unread > 0 && (
        <span style={{ position: 'absolute', top: -2, right: -2, background: '#ef4444', color: '#fff', borderRadius: '50%', padding: '2px 6px', fontSize: 10, fontWeight: 600, minWidth: 18, textAlign: 'center', lineHeight: 1.4 }}>
          {unread > 99 ? '99+' : unread}
        </span>
      )}
    </button>
  );
}

// 私信 modals 容器（会话列表 + 聊天窗口）
export default function ChatManager() {
  const [listOpen, setListOpen] = useState(false);
  const [chat, setChat] = useState(null); // {conversationId, otherUserId, otherUsername}
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshList = useCallback(() => setRefreshKey((k) => k + 1), []);

  // 监听事件：打开会话列表 / 打开聊天
  useEffect(() => {
    const handler = (e) => {
      setChat(e.detail);
      setListOpen(false);
    };
    const openList = () => setListOpen(true);
    window.addEventListener('forumlify-open-chat', handler);
    window.addEventListener('forumlify-open-messages', openList);
    return () => {
      window.removeEventListener('forumlify-open-chat', handler);
      window.removeEventListener('forumlify-open-messages', openList);
    };
  }, []);

  const openChat = (conversationId, otherUserId, otherUsername) => {
    setChat({ conversationId, otherUserId, otherUsername });
    setListOpen(false);
  };

  const closeChat = () => {
    setChat(null);
    refreshList();
  };

  return (
    <>
      {listOpen && (
        <ConversationList
          onOpenChat={openChat}
          onClose={() => setListOpen(false)}
        />
      )}
      {chat && (
        <ChatWindow
          conversationId={chat.conversationId}
          otherUserId={chat.otherUserId}
          otherUsername={chat.otherUsername}
          onClose={closeChat}
          onRefreshList={refreshList}
        />
      )}
    </>
  );
}

// 供其他组件调用的打开私信（通过自定义事件桥接）
export function useOpenPrivateChat() {
  const { currentUser } = useApp();
  const open = async (otherUserId, otherUsername) => {
    if (!currentUser) { alert('请先登录'); return; }
    try {
      const result = await API.getOrCreateConversation(otherUserId);
      window.dispatchEvent(new CustomEvent('forumlify-open-chat', {
        detail: { conversationId: result.id, otherUserId, otherUsername },
      }));
    } catch (err) {
      alert('打开私信失败：' + err.message);
    }
  };
  return open;
}
