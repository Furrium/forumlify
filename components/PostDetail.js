'use client';

// 帖子详情页
import { useEffect, useState, useCallback } from 'react';
import { API } from '@/lib/api';
import { useApp } from './AppProvider';
import ReplyList from './ReplyList';

function avatar(username) {
  return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username || '匿名用户') +
    '&background=6366f1&color=fff&size=64';
}

export default function PostDetail({ postId }) {
  const { currentUser, navigate, refreshKey } = useApp();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setError(null);
    try {
      const data = await API.getPost(postId);
      setPost(data);
    } catch (err) {
      setError(err.message);
    }
  }, [postId, refreshKey]);

  useEffect(() => { load(); }, [load]);

  if (error) {
    return (
      <div className="page-slide active" style={{ padding: '40px 0', textAlign: 'center', color: '#ef4444' }}>
        加载失败：{error}
      </div>
    );
  }
  if (!post) {
    return <div style={{ textAlign: 'center', color: '#94a3b8', padding: '40px 0' }}>加载中...</div>;
  }

  const time = post.created_at ? new Date(post.created_at).toLocaleString('zh-CN') : '';
  const canDelete = currentUser && currentUser.id === post.user_id;

  const handleDelete = async () => {
    if (!confirm('确定要删除这条帖子吗？')) return;
    try {
      await API.deletePost(postId);
      alert('删除成功');
      navigate('feed');
    } catch (err) {
      alert('删除失败：' + err.message);
    }
  };

  return (
    <div className="page-slide active">
      <div className="page-header" style={{ maxWidth: 700, margin: '0 auto', width: '100%' }}>
        <h2>{post.title || '帖子详情'}</h2>
      </div>
      <div id="postDetailContent" style={{ maxWidth: 700, margin: '0 auto', width: '100%' }}>
        <div className="post-detail-card">
          <div className="post-header">
            <img src={avatar(post.username)} className="post-avatar" alt="" />
            <span className="post-username">{post.username || '匿名用户'}</span>
            <span className="post-time">{time}</span>
            {canDelete && (
              <button className="btn-sm btn-danger" onClick={handleDelete}>删除</button>
            )}
          </div>
          <div className="post-title" style={{ fontSize: 20, fontWeight: 700, margin: '8px 0 12px' }}>
            {post.title || '无标题'}
          </div>
          <div className="post-content" style={{ fontSize: 16, lineHeight: 1.8 }}>
            {(post.content || '').split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}
          </div>
          {post.images && post.images.length > 0 && (
            <div className="post-images">
              {post.images.map((img, i) => <img key={i} src={img} className="post-image" alt="" />)}
            </div>
          )}
        </div>
        <ReplyList postId={postId} onRefresh={load} />
      </div>
    </div>
  );
}
