'use client';

// 帖子详情页
import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { API, uploadImage } from '@/lib/api';
import { useApp } from './AppProvider';
import ReplyList from './ReplyList';
import Sidebar from './Sidebar';
import { Icon } from './Icons';
import ImageViewer from './ImageViewer';
import { renderMarkdown } from '@/lib/markdown';
import { useToast } from './Toast';
import { useTranslation } from 'react-i18next';

function avatar(username) {
  return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username || '匿名用户') +
    '&background=6366f1&color=fff&size=64';
}

export default function PostDetail({ postId, initialPost = null }) {
  const { currentUser, navigate, openUser, refreshKey } = useApp();
  const { t, i18n } = useTranslation();
  const { toast, confirmAction } = useToast();
  const [post, setPost] = useState(initialPost);
  const [error, setError] = useState(null);
  const [viewerSrc, setViewerSrc] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editImages, setEditImages] = useState([]);
  const [editUploading, setEditUploading] = useState(false);
  const editImageInputRef = useRef(null);
  // 评论抽屉：帖子加载完成后自动展开（动画完整播放）
  const [repliesOpen, setRepliesOpen] = useState(false);
  useEffect(() => {
    if (post && !repliesOpen) {
      // 延迟到帖子内容渲染后，让抽屉动画平滑播放
      const t = setTimeout(() => setRepliesOpen(true), 60);
      return () => clearTimeout(t);
    }
  }, [post]);

  const load = useCallback(async () => {
    setError(null);
    try {
      const data = await API.getPost(postId);
      setPost(data);
    } catch (err) {
      setError(err.message);
    }
  }, [postId, refreshKey]);

  const initialRefreshKey = useRef(refreshKey);
  useEffect(() => {
    if (initialPost?.id === postId && refreshKey === initialRefreshKey.current) return;
    load();
  }, [initialPost?.id, load, postId, refreshKey]);
  const renderedContent = useMemo(() => renderMarkdown(post?.content), [post?.content]);
  const renderedSignature = useMemo(() => renderMarkdown(post?.signature), [post?.signature]);

  if (error) {
    return (
      <div id="pagePost" className="page-slide active" style={{ padding: '40px 0', textAlign: 'center', color: '#ef4444' }}>
        加载失败：{error}
      </div>
    );
  }
  if (!post) {
    return <div id="pagePost" className="page-slide active" style={{ textAlign: 'center', color: '#94a3b8' }}><span className="spinner-sm" />加载中...</div>;
  }

  const time = post.created_at ? new Date(post.created_at).toLocaleString('zh-CN') : '';
  // 作者本人 或 管理员 可删除/编辑
  const canDelete = currentUser && (currentUser.id === post.user_id || currentUser.role === 'admin');
  const canEdit = currentUser && currentUser.id === post.user_id;

  const handleDelete = async () => {
    if (!await confirmAction('确定要删除这条帖子吗？')) return;
    try {
      await API.deletePost(postId);
      toast('删除成功', 'success');
      navigate('feed');
    } catch (err) {
      toast('删除失败：' + err.message, 'error');
    }
  };

  const handleTogglePin = async () => {
    if (!await confirmAction('确定要' + (post.is_pinned ? '取消' : '') + '置顶吗？', { danger: false })) return;
    try {
      await API.togglePinPost(postId);
      load();
    } catch (err) {
      toast('操作失败：' + err.message, 'error');
    }
  };

  const handleEdit = () => {
    setEditTitle(post.title || '');
    setEditContent(post.content || '');
    setEditImages(post.images || []);
    setEditing(true);
  };

  const handleSaveEdit = async () => {
    if (!editContent.trim()) { toast('请填写内容', 'warning'); return; }
    try {
      await API.updatePost(postId, editTitle.trim() || '无标题', editContent.trim(), editImages);
      setEditing(false);
      load();
    } catch (err) {
      toast('编辑失败：' + err.message, 'error');
    }
  };

  // 编辑时上传新图片
  const handleEditUpload = async (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) { toast('请选择图片文件', 'warning'); return; }
    if (file.size > 5 * 1024 * 1024) { toast('图片不能超过 5MB', 'warning'); return; }
    setEditUploading(true);
    try {
      const url = await uploadImage(file);
      setEditImages((prev) => [...prev, url]);
    } catch (err) {
      toast('上传失败：' + err.message, 'error');
    } finally {
      setEditUploading(false);
    }
  };

  // 编辑时删除图片
  const handleEditRemoveImage = (url) => {
    setEditImages((prev) => prev.filter((u) => u !== url));
  };

  return (
    <div id="pagePost" className="page-slide active">
      <div className="page-header post-page-header">
        <button className="back-btn" onClick={() => navigate('feed')}>
          <Icon name="back" size={16} /> 返回
        </button>
        <h2>{post.title || '帖子详情'}</h2>
      </div>
      <div className="post-page-layout">
        <Sidebar id="postSidebar" />
        <div id="postDetailContent" className="post-page-main">
          <div className="post-detail-card">
            <div className="post-header">
              <img src={post.avatar_url || avatar(post.username)} className="post-avatar" alt="" />
              <span
                className="post-username"
                style={{ cursor: 'pointer', color: 'var(--primary)' }}
                onClick={() => openUser(post.username)}
              >
                {post.username || '匿名用户'}
              </span>
              <span className="post-time">{time}</span>
              {post.edited_at && (
                <span className="post-edited-state" style={{ fontSize: 12, color: 'var(--text-light)', marginLeft: 8 }}>
                  <span className="post-edited-label">{t('feed.deleted')}</span>
                  <span className="post-edited-detail">
                    {' '}{new Date(post.edited_at).toLocaleString(i18n.language === 'en' ? 'en-US' : 'zh-CN')}
                  </span>
                </span>
              )}
              {post.is_pinned && (
                <span className="post-pin-state" style={{ fontSize: 12, color: 'var(--primary)', marginLeft: 8, display: 'inline-flex', alignItems: 'center', gap: 3 }}><Icon name="pin" size={12} /> 置顶</span>
              )}
              <div className="post-detail-controls" style={{ display: 'flex', gap: 4, marginLeft: 'auto' }}>
                {currentUser && currentUser.role === 'admin' && (
                  <button className="btn-sm btn-secondary" style={{ padding: '4px 10px' }} onClick={handleTogglePin}>
                    <Icon name="pin" size={12} /> {post.is_pinned ? '取消置顶' : '置顶'}
                  </button>
                )}
                {canEdit && (
                  <button className="btn-sm btn-secondary" style={{ padding: '4px 10px' }} onClick={handleEdit}>
                    <Icon name="edit" size={12} /> 编辑
                  </button>
                )}
                {canDelete && (
                  <button className="btn-sm btn-danger" style={{ padding: '4px 10px' }} onClick={handleDelete}>
                    <Icon name="trash" size={14} /> 删除
                  </button>
                )}
              </div>
            </div>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: renderedContent }} />
            {post.images && post.images.length > 0 && (
              <div className="post-images">
                {post.images.map((img, i) => (
                  <img key={i} src={img} className="post-image" alt="" style={{ cursor: 'pointer' }} onClick={() => setViewerSrc(img)} />
                ))}
              </div>
            )}
            {post.signature && (
              <div className="post-detail-signature" style={{ marginTop: 16, paddingTop: 12, borderTop: '1px solid var(--border-light)', fontSize: 12, color: 'var(--text-secondary)' }} dangerouslySetInnerHTML={{ __html: renderedSignature }} />
            )}
          </div>
          <div style={{ maxWidth: 700, margin: '0 auto', width: '100%', marginTop: 16 }}>
            {/* 评论抽屉：帖子加载完成后自动展开 */}
            <div className={'replies-drawer' + (repliesOpen ? ' open' : '')}>
              <div className="replies-drawer-inner">
                <ReplyList postId={postId} onRefresh={load} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 编辑帖子 modal */}
      {editing && (
        <div className="modal active" style={{ display: 'flex' }} onClick={(e) => { if (e.target === e.currentTarget) setEditing(false); }}>
          <div className="modal-content" style={{ maxWidth: 600, position: 'relative' }}>
            <span className="close" style={{ position: 'absolute', top: 12, right: 16, cursor: 'pointer', color: 'var(--text-light)' }} onClick={() => setEditing(false)}><Icon name="close" size={20} /></span>
            <h2 style={{ marginBottom: 16 }}><Icon name="edit" size={20} /> 编辑帖子</h2>
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
            {/* 图片管理：查看/删除已有图片 + 上传新图片 */}
            {editImages.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                {editImages.map((img, i) => (
                  <div key={img + i} style={{ position: 'relative' }}>
                    <img src={img} alt="" style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 6, border: '1px solid var(--border)' }} />
                    <button
                      type="button"
                      title="删除图片"
                      onClick={() => handleEditRemoveImage(img)}
                      style={{ position: 'absolute', top: -6, right: -6, width: 20, height: 20, borderRadius: '50%', background: '#ef4444', color: '#fff', border: 'none', cursor: 'pointer', lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    ><Icon name="close" size={12} /></button>
                  </div>
                ))}
              </div>
            )}
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <button type="button" className="btn-secondary" style={{ padding: '8px 16px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface)', cursor: 'pointer', color: 'var(--text)' }} onClick={() => editImageInputRef.current?.click()}>
                {editUploading ? '上传中...' : <><Icon name="camera" size={14} /> 上传图片</>}
              </button>
              <input type="file" ref={editImageInputRef} accept="image/*" multiple style={{ display: 'none' }} onChange={(e) => { const files = e.target.files; if (files && files.length > 0) { [...files].forEach((f) => handleEditUpload(f)); e.target.value = ''; } }} />
            </div>
            <button className="btn-primary" style={{ padding: '10px 32px', fontSize: 15, marginTop: 12, width: '100%' }} onClick={handleSaveEdit}>保存</button>
          </div>
        </div>
      )}

      {/* 图片查看器 */}
      {viewerSrc && <ImageViewer src={viewerSrc} onClose={() => setViewerSrc(null)} />}
    </div>
  );
}
