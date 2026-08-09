'use client';

// 信息流：帖子列表 + 排序 tab + 发布新帖按钮
import { useEffect, useState, useCallback } from 'react';
import { API } from '@/lib/api';
import { useApp } from './AppProvider';
import { Icon } from './Icons';

function avatar(username) {
  return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username || '匿名用户') +
    '&background=6366f1&color=fff&size=64';
}

export default function Feed({ onOpenModal, onReport }) {
  const { currentUser, sort, setSort, openPost, openUser, navigate, refreshKey } = useApp();
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setPosts(null);
    setError(null);
    try {
      const data = await API.getPosts(sort);
      setPosts(data || []);
    } catch (err) {
      setError(err.message);
      setPosts([]);
    }
  }, [sort, refreshKey]);

  useEffect(() => { load(); }, [load]);

  const handleDelete = async (postId) => {
    if (!confirm('确定要删除这条帖子吗？')) return;
    try {
      await API.deletePost(postId);
      load();
    } catch (err) {
      alert('删除失败：' + err.message);
    }
  };

  return (
    <main id="feed">
      <div className="feed-header">
        <div className="feed-header-left">
          <button className={'tab' + (sort === 'latest' ? ' active' : '')} onClick={() => setSort('latest')}>最新发布</button>
          <button className={'tab' + (sort === 'hot' ? ' active' : '')} onClick={() => setSort('hot')}>最新回复</button>
        </div>
        <button
          className="btn-primary fab-btn"
          onClick={() => {
            if (!currentUser) { alert('请先登录'); return; }
            navigate('new');
          }}
        >
          <Icon name="plus" /> 发布新帖
        </button>
      </div>
      <div id="postList">
        {posts === null ? (
          <div style={{ textAlign: 'center', color: '#94a3b8', padding: '40px 0' }}>加载中...</div>
        ) : error ? (
          <div style={{ textAlign: 'center', color: '#ef4444', padding: '40px 0' }}>加载失败：{error}</div>
        ) : posts.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#94a3b8', padding: '60px 0' }}>✨ 还没有帖子，快来发布第一条吧！</div>
        ) : (
          posts.map((p) => {
            const time = p.created_at ? new Date(p.created_at).toLocaleString('zh-CN') : '';
            return (
              <div key={p.id} className="post-card" style={{ cursor: 'pointer' }}
                onClick={() => openPost(p.id)}>
                <div className="post-header">
                  <img src={avatar(p.username)} className="post-avatar" alt="" />
                  <span
                    className="post-username"
                    style={{ cursor: 'pointer', color: 'var(--primary)' }}
                    onClick={(e) => { e.stopPropagation(); openUser(p.username); }}
                  >
                    {p.username || '匿名用户'}
                  </span>
                  <span className="post-time">{time}</span>
                </div>
                <div className="post-title">{p.title || '无标题'}</div>
                <div className="post-content">{(p.content || '').split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}</div>
                {p.images && p.images.length > 0 && (
                  <div className="post-images">
                    {p.images.map((img, i) => <img key={i} src={img} className="post-image" alt="" />)}
                  </div>
                )}
                <div className="post-actions">
                  <span>
                    <Icon name="message" size={14} /> {p.reply_count || 0}
                  </span>
                  <button className="action-report" onClick={(e) => {
                    e.stopPropagation();
                    if (!currentUser) { alert('请先登录'); return; }
                    onReport(p.id);
                  }}>
                    <Icon name="flag" size={14} /> 举报
                  </button>
                  {currentUser && currentUser.id === p.user_id && (
                    <button className="action-delete" onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(p.id);
                    }}>
                      <Icon name="trash" size={14} /> 删除
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
}
