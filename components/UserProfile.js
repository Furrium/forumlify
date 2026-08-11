'use client';

// 用户主页：资料卡 + 该用户的帖子列表
import { useEffect, useState, useCallback } from 'react';
import { API } from '@/lib/api';
import { useApp } from './AppProvider';
import { Icon } from './Icons';
import { useOpenPrivateChat } from './chat/ChatManager';

function avatar(username, size = 128) {
  return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username || 'U') +
    '&background=6366f1&color=fff&size=' + size;
}

export default function UserProfile({ username }) {
  const { currentUser, openPost } = useApp();
  const openPrivateChat = useOpenPrivateChat();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setError(null);
    try {
      const u = await API.getUserProfile(username);
      if (u.error || !u.id) {
        setError(u.error || '用户不存在');
        return;
      }
      setUser(u);
      const result = await API.getPosts('latest', u.id);
      setPosts(result.data || []);
    } catch (err) {
      setError(err.message || '加载失败');
    }
  }, [username]);

  useEffect(() => { load(); }, [load]);

  if (error) {
    return (
      <div className="page-slide active">
        <div style={{ textAlign: 'center', color: '#ef4444', padding: '40px 0' }}>加载失败：{error}</div>
      </div>
    );
  }
  if (!user) {
    return <div style={{ textAlign: 'center', color: '#94a3b8', padding: '40px 0' }}><span className="spinner-sm" />加载中...</div>;
  }

  return (
    <div className="page-slide active">
      <div className="page-header" style={{ maxWidth: 700, margin: '0 auto', width: '100%' }}>
        <h2><Icon name="users" size={20} /> 用户主页</h2>
      </div>
      <div style={{ maxWidth: 700, margin: '0 auto', width: '100%' }}>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, padding: 32, textAlign: 'center' }}>
          <img src={user.avatar_url || avatar(user.username)} style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--primary)' }} alt="" />
          <h2 style={{ margin: '16px 0 4px', fontSize: 24 }}>{user.username}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>{user.bio || '这个人很懒，什么都没写'}</p>
          {currentUser && currentUser.id !== user.id && (
            <button
              className="btn-primary"
              style={{ marginTop: 12, padding: '8px 20px' }}
              onClick={() => openPrivateChat(user.id, user.username)}
            >
              <Icon name="message" size={14} /> 发私信
            </button>
          )}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginTop: 16, fontSize: 14, color: 'var(--text-secondary)', flexWrap: 'wrap' }}>
            <span><Icon name="calendar" size={14} /> 加入于 {user.created_at ? new Date(user.created_at).toLocaleDateString('zh-CN') : '未知'}</span>
            <span><Icon name="file" size={14} /> 发了 {posts.length} 个帖子</span>
            {user.role === 'admin' && <span style={{ color: 'var(--primary)', fontWeight: 600 }}><Icon name="shield" size={14} /> 管理员</span>}
          </div>
        </div>
        <h3 style={{ margin: '24px 0 16px', fontSize: 18 }}><Icon name="file" size={18} /> 发布的帖子</h3>
        {posts.length === 0 ? (
          <div style={{ color: '#94a3b8', padding: '20px 0', textAlign: 'center' }}>还没有发帖</div>
        ) : (
          posts.map((p) => {
            const time = p.created_at ? new Date(p.created_at).toLocaleString('zh-CN') : '';
            return (
              <div key={p.id} className="post-card" style={{ cursor: 'pointer' }} onClick={(e) => openPost(p.id, e.currentTarget, p)}>
                <div className="post-title" style={{ fontSize: 16, fontWeight: 600 }}>{p.title || '无标题'}</div>
                <div className="post-content" style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
                  {(p.content || '').substring(0, 100)}{(p.content || '').length > 100 ? '...' : ''}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 8 }}>{time}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
