'use client';

// 帖子详情页
import { useEffect, useState, useCallback } from 'react';
import { API } from '@/lib/api';
import { useApp } from './AppProvider';
import ReplyList from './ReplyList';
import { Icon } from './Icons';
import ImageViewer from './ImageViewer';

function avatar(username) {
  return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username || '匿名用户') +
    '&background=6366f1&color=fff&size=64';
}

export default function PostDetail({ postId }) {
  const { currentUser, navigate, openUser, refreshKey } = useApp();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [viewerSrc, setViewerSrc] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

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
      <div id="pagePost" className="page-slide active" style={{ padding: '40px 0', textAlign: 'center', color: '#ef4444' }}>
        加载失败：{error}
      </div>
    );
  }
  if (!post) {
    return <div style={{ textAlign: 'center', color: '#94a3b8', padding: '40px 0' }}>加载中...</div>;
  }

  const time = post.created_at ? new Date(post.created_at).toLocaleString('zh-CN') : '';
  const canDelete = currentUser && currentUser.id === post.user_id;
  const canEdit = currentUser && currentUser.id === post.user_id;

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

  const handleTogglePin = async () => {
    if (!confirm('确定要' + (post.is_pinned ? '取消' : '') + '置顶吗？')) return;
    try {
      await API.togglePinPost(postId);
      load();
    } catch (err) {
      alert('操作失败：' + err.message);
    }
  };

  const handleEdit = () => {
    setEditTitle(post.title || '');
    setEditContent(post.content || '');
    setEditing(true);
  };

  const handleSaveEdit = async () => {
    if (!editContent.trim()) { alert('请填写内容'); return; }
    try {
      await API.updatePost(postId, editTitle.trim() || '无标题', editContent.trim());
      setEditing(false);
      load();
    } catch (err) {
      alert('编辑失败：' + err.message);
    }
  };

  return (
    <div id="pagePost" className="page-slide active">
      <div className="page-header" style={{ maxWidth: 700, margin: '0 auto', width: '100%' }}>
        <h2>{post.title || '帖子详情'}</h2>
      </div>
      <div id="postDetailContent" style={{ maxWidth: 700, margin: '0 auto', width: '100%' }}>
        <div className="post-detail-card">
          <div className="post-header">
            <img src={avatar(post.username)} className="post-avatar" alt="" />
            <span
              className="post-username"
              style={{ cursor: 'pointer', color: 'var(--primary)' }}
              onClick={() => openUser(post.username)}
            >
              {post.username || '匿名用户'}
            </span>
            <span className="post-time">{time}</span>
            {post.edited_at && (
              <span style={{ fontSize: 12, color: 'var(--text-light)', marginLeft: 8 }}>
                （已编辑 {new Date(post.edited_at).toLocaleString('zh-CN')}）
              </span>
            )}
            {post.is_pinned && (
              <span style={{ fontSize: 12, color: 'var(--primary)', marginLeft: 8 }}>📌 置顶</span>
            )}
            <div style={{ display: 'flex', gap: 4, marginLeft: 'auto' }}>
              {currentUser && currentUser.role === 'admin' && (
                <button className="btn-sm btn-secondary" style={{ padding: '4px 10px' }} onClick={handleTogglePin}>
                  {post.is_pinned ? '📌 取消置顶' : '📌 置顶'}
                </button>
              )}
              {canDelete && (
                <button className="btn-sm btn-secondary" style={{ padding: '4px 10px' }} onClick={handleEdit}>
                  ✏️ 编辑
                </button>
              )}
              {canDelete && (
                <button className="btn-sm btn-danger" style={{ padding: '4px 10px' }} onClick={handleDelete}>
                  <Icon name="trash" size={14} /> 删除
                </button>
              )}
            </div>
          </div>
          <div className="post-content" style={{ fontSize: 16, lineHeight: 1.8 }}>
            {(post.content || '').split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}
          </div>
          {post.images && post.images.length > 0 && (
            <div className="post-images">
              {post.images.map((img, i) => (
                <img key={i} src={img} className="post-image" alt="" style={{ cursor: 'pointer' }} onClick={() => setViewerSrc(img)} />
              ))}
            </div>
          )}
          {post.signature && (
            <div style={{ marginTop: 16, paddingTop: 12, borderTop: '1px solid var(--border-light)', fontSize: 12, color: 'var(--text-secondary)' }}>
              {post.signature}
            </div>
          )}
        </div>
        <ReplyList postId={postId} onRefresh={load} />
      </div>

      {/* 编辑帖子 modal */}
      {editing && (
        <div className="modal active" style={{ display: 'flex' }} onClick={(e) => { if (e.target === e.currentTarget) setEditing(false); }}>
          <div className="modal-content" style={{ maxWidth: 600, position: 'relative' }}>
            <span className="close" style={{ position: 'absolute', top: 12, right: 16, fontSize: 24, cursor: 'pointer', color: 'var(--text-light)' }} onClick={() => setEditing(false)}>&times;</span>
            <h2 style={{ marginBottom: 16 }}>✏️ 编辑帖子</h2>
            <input
              type="text"
              placeholder="标题"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border)', borderRadius: 6, fontSize: 15, fontWeight: 600, marginBottom: 12, background: 'var(--bg)', color: 'var(--text)' }}
            />
            <textarea
              rows={6}
              placeholder="说点什么..."
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              style={{ width: '100%', padding: 12, border: '1px solid var(--border)', borderRadius: 6, fontSize: 15, fontFamily: 'inherit', resize: 'vertical', background: 'var(--bg)', color: 'var(--text)' }}
            />
            <button className="btn-primary" style={{ padding: '10px 32px', fontSize: 15, marginTop: 8 }} onClick={handleSaveEdit}>保存</button>
          </div>
        </div>
      )}

      {/* 图片查看器 */}
      {viewerSrc && <ImageViewer src={viewerSrc} onClose={() => setViewerSrc(null)} />}
    </div>
  );
}
