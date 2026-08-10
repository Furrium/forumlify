'use client';

// 信息流：帖子列表 + 排序 tab + 发布新帖按钮
import { useEffect, useState, useCallback } from 'react';
import { API } from '@/lib/api';
import { useApp } from './AppProvider';
import { Icon } from './Icons';
import ImageViewer from './ImageViewer';
import { renderMarkdown } from '@/lib/markdown';

function avatar(username) {
  return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username || '匿名用户') +
    '&background=6366f1&color=fff&size=64';
}

export default function Feed({ onOpenModal, onReport }) {
  const { currentUser, sort, setSort, openPost, openUser, navigate, refreshKey } = useApp();
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [viewerSrc, setViewerSrc] = useState(null);
  const PAGE_SIZE = 20;

  const load = useCallback(async (targetPage) => {
    setPosts(null);
    setError(null);
    try {
      const result = await API.getPosts(sort, null, targetPage, PAGE_SIZE);
      setPosts(result.data || []);
      setTotalPages(result.pagination?.totalPages || 1);
      setPage(result.pagination?.page || 1);
    } catch (err) {
      setError(err.message);
      setPosts([]);
    }
  }, [sort, refreshKey]);

  useEffect(() => { load(page); }, [load]);

  // 排序切换时回第一页
  useEffect(() => { setPage(1); }, [sort]);

  const handleDelete = async (postId) => {
    if (!confirm('确定要删除这条帖子吗？')) return;
    try {
      await API.deletePost(postId);
      load(page);
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
                {p.is_pinned && (
                  <div style={{ fontSize: 12, color: 'var(--primary)', fontWeight: 600, marginBottom: 4 }}>📌 置顶</div>
                )}
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
                  {p.edited_at && (
                    <span style={{ fontSize: 11, color: 'var(--text-light)', marginLeft: 6 }}>（已编辑）</span>
                  )}
                </div>
                <div className="post-title">{p.title || '无标题'}</div>
                <div className="post-content" dangerouslySetInnerHTML={{ __html: renderMarkdown(p.content) }} />
                {p.images && p.images.length > 0 && (
                  <div className="post-images">
                    {p.images.map((img, i) => (
                      <img key={i} src={img} className="post-image" alt="" style={{ cursor: 'pointer' }} onClick={(e) => { e.stopPropagation(); setViewerSrc(img); }} />
                    ))}
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
      {totalPages > 1 && posts && posts.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6, padding: '16px 0', marginTop: 8, borderTop: '1px solid var(--border)', flexWrap: 'wrap' }}>
          <button
            className="page-btn"
            disabled={page <= 1}
            onClick={() => load(page - 1)}
            style={{ padding: '6px 12px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface)', color: 'var(--text)', cursor: page <= 1 ? 'not-allowed' : 'pointer', fontSize: 13, opacity: page <= 1 ? 0.4 : 1 }}
          >
            &laquo;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((i) => (
            <button
              key={i}
              className="page-btn"
              disabled={i === page}
              onClick={() => load(i)}
              style={{
                padding: '6px 10px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 13, minWidth: 32, textAlign: 'center',
                background: i === page ? 'var(--primary)' : 'var(--surface)',
                color: i === page ? '#fff' : 'var(--text)',
                cursor: i === page ? 'default' : 'pointer',
                borderColor: i === page ? 'var(--primary)' : 'var(--border)',
              }}
            >
              {i}
            </button>
          ))}
          <button
            className="page-btn"
            disabled={page >= totalPages}
            onClick={() => load(page + 1)}
            style={{ padding: '6px 12px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface)', color: 'var(--text)', cursor: page >= totalPages ? 'not-allowed' : 'pointer', fontSize: 13, opacity: page >= totalPages ? 0.4 : 1 }}
          >
            &raquo;
            </button>
            </div>
            )}
            {viewerSrc && <ImageViewer src={viewerSrc} onClose={() => setViewerSrc(null)} />}
            </main>
            );
            }
