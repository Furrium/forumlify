'use client';

// 回复列表 + 发表回复表单
// 支持树形子回复链折叠：每条回复的子回复 >3 条时折叠，点击"继续此消息串"进入独立链视图
import { useEffect, useState, useCallback, useRef } from 'react';
import { API } from '@/lib/api';
import { useApp } from './AppProvider';
import { Icon } from './Icons';
import { renderMarkdown } from '@/lib/markdown';
import CaptchaImage from './CaptchaImage';
import { useToast } from './Toast';

function avatar(username) {
  return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username || '匿名用户') +
    '&background=6366f1&color=fff&size=64';
}

// 渲染单条回复（树形，带子回复折叠）
function ReplyItem({ r, children, onStartReply, onDelete, currentUser, openUser, onShowChain, chainParentId }) {
  const rTime = r.created_at ? new Date(r.created_at).toLocaleString('zh-CN') : '';
  const childList = children[r.id] || [];
  // 子回复折叠：最多显示 3 条，超出的折叠显示"继续此消息串"
  const [showAll, setShowAll] = useState(false);
  const visibleChildren = chainParentId || showAll ? childList : childList.slice(0, 3);
  const hiddenCount = childList.length - visibleChildren.length;

  return (
    <div key={r.id} className="reply-item" data-username={r.username} data-reply-id={r.id}>
      <div className="reply-header">
        <img src={r.avatar_url || avatar(r.username)} className="reply-avatar" alt="" />
        <span className="reply-username" style={{ cursor: 'pointer', color: 'var(--primary)' }} onClick={() => openUser(r.username)}>
          {r.username || '匿名用户'}
        </span>
        <span className="reply-time">{rTime}</span>
        <button className="reply-btn" onClick={() => onStartReply(r.id)} title="回复">
          <Icon name="reply" size={13} />
        </button>
        {currentUser && (currentUser.id === r.user_id || currentUser.role === 'admin') && (
          <button className="btn-sm btn-danger reply-delete-btn" onClick={() => onDelete(r.id)}>
            <Icon name="trash" size={12} /> 删除
          </button>
        )}
      </div>
      <div className="reply-content" dangerouslySetInnerHTML={{ __html: renderMarkdown(r.content) }} />
      {/* 子回复列表 */}
      {visibleChildren.map((child) => (
        <ReplyItem
          key={child.id}
          r={child}
          children={children}
          onStartReply={onStartReply}
          onDelete={onDelete}
          currentUser={currentUser}
          openUser={openUser}
          onShowChain={onShowChain}
          chainParentId={chainParentId}
        />
      ))}
      {/* 子回复折叠按钮 */}
      {hiddenCount > 0 && !chainParentId && (
        <button className="reply-show-more" onClick={() => onShowChain(r.id)}>
          <Icon name="chevronDown" size={13} /> 继续此消息串（还有 {hiddenCount} 条回复）
        </button>
      )}
    </div>
  );
}

export default function ReplyList({ postId, onRefresh, chainParentId, onBack }) {
  const { currentUser, openUser } = useApp();
  const { toast, confirmAction } = useToast();
  const [replies, setReplies] = useState([]);
  const [content, setContent] = useState('');
  const [captcha, setCaptcha] = useState(null);
  const [captchaInput, setCaptchaInput] = useState('');
  const [replyTo, setReplyTo] = useState(null);
  const replyAreaRef = useRef(null);
  const replyInputRef = useRef(null);

  const startReply = (replyId) => {
    setReplyTo(replyId);
    setTimeout(() => {
      replyAreaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      replyInputRef.current?.focus();
    }, 120);
  };

  const load = useCallback(async () => {
    try {
      const data = await API.getReplies(postId);
      setReplies(data || []);
    } catch { setReplies([]); }
  }, [postId]);

  useEffect(() => { load(); }, [load]);
  useEffect(() => { API.getCaptcha().then((c) => setCaptcha(c)).catch(() => {}); }, [postId]);

  const handleSubmit = async () => {
    if (!currentUser) { toast('请先登录', 'warning'); return; }
    if (!content.trim()) { toast('请填写回复内容', 'warning'); return; }
    if (!captcha || !captchaInput.trim()) { toast('请填写验证码', 'warning'); return; }
    try {
      await API.createReply(postId, content.trim(), { id: captcha.id, answer: captchaInput.trim(), sig: captcha.sig }, replyTo);
      API.logEvent('create_reply').catch(() => {});
      setContent('');
      setCaptchaInput('');
      setReplyTo(null);
      API.getCaptcha().then((c) => setCaptcha(c)).catch(() => {});
      load();
      onRefresh();
    } catch (err) {
      toast('回复失败：' + err.message, 'error');
      API.getCaptcha().then((c) => setCaptcha(c)).catch(() => {});
      setCaptchaInput('');
    }
  };

  const handleDelete = async (replyId) => {
    if (!await confirmAction('确定要删除这条回复吗？')) return;
    try {
      await API.deleteReply(replyId);
      load();
    } catch (err) {
      toast('删除失败：' + err.message, 'error');
    }
  };

  // 构建回复树（reply_id → children）
  const children = {};
  replies.forEach((r) => {
    const pid = r.reply_to_id || '__root__';
    if (!children[pid]) children[pid] = [];
    children[pid].push(r);
  });
  // 根回复（无 reply_to 或回复目标不在当前回复列表）
  const rootReplies = (children['__root__'] || []).concat(
    replies.filter((r) => r.reply_to_id && !replies.find((x) => x.id === r.reply_to_id))
  );

  const replyToObj = replyTo ? replies.find((x) => x.id === replyTo) : null;

  return (
    <>
      {chainParentId && onBack && (
        <div className="reply-chain-header">
          <button className="btn-sm" onClick={() => onBack(null)}>
            <Icon name="arrowLeft" size={14} /> 返回所有回复
          </button>
          <span style={{ fontSize: 13, color: 'var(--text-light)' }}>回复链</span>
        </div>
      )}
      <div className="post-reply-count" style={{ marginTop: chainParentId ? 12 : 20, fontSize: 14, color: '#64748b' }}>
        <Icon name="message" size={14} /> {replies.length} 条回复
      </div>
      <div style={{ marginTop: 12 }}>
        {replies.length === 0 ? (
          <div style={{ color: '#94a3b8', padding: '20px 0', textAlign: 'center' }}><Icon name="message" size={16} /> 还没有回复，快来发表第一条回复吧</div>
        ) : chainParentId ? (
          // 链视图：显示指定回复 + 所有子回复（递归展开）
          (() => {
            const chainRoot = replies.find((r) => r.id === chainParentId);
            if (!chainRoot) return null;
            return (
              <ReplyItem
                r={chainRoot}
                children={children}
                onStartReply={startReply}
                onDelete={handleDelete}
                currentUser={currentUser}
                openUser={openUser}
                onShowChain={onBack}
                chainParentId={true}
              />
            );
          })()
        ) : (
          // 普通视图：显示根回复，每条回复的子回复最多 3 条
          rootReplies.map((r) => (
            <ReplyItem
              key={r.id}
              r={r}
              children={children}
              onStartReply={startReply}
              onDelete={handleDelete}
              currentUser={currentUser}
              openUser={openUser}
              onShowChain={onBack}
              chainParentId={false}
            />
          ))
        )}
      </div>

      <div id="replyArea" ref={replyAreaRef} style={{ marginTop: 24, borderTop: '1px solid var(--border)', paddingTop: 20 }}>
        <h3 style={{ fontSize: 16, marginBottom: 12 }}><Icon name="message" size={16} /> 发表回复</h3>
        {replyTo && replyToObj && (
          <div className="reply-preview-bar">
            <Icon name="reply" size={13} />
            <span>回复</span>
            <strong>@{replyToObj.username}</strong>
            <button className="reply-preview-cancel" onClick={() => setReplyTo(null)}>取消</button>
          </div>
        )}
        <textarea
          ref={replyInputRef}
          rows={3}
          placeholder="写下你的回复..."
          style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 14, fontFamily: 'inherit', resize: 'vertical', background: 'var(--bg)', color: 'var(--text)' }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) handleSubmit(); }}
        />
        <div className="captcha-row" style={{ margin: '10px 0', display: 'flex', alignItems: 'center', gap: 10 }}>
          {captcha ? (
            <CaptchaImage captcha={captcha} onRefresh={() => { API.getCaptcha().then((c) => setCaptcha(c)).catch(() => {}); setCaptchaInput(''); }} />
          ) : (
            <span style={{ color: 'var(--text-light)' }}>验证码加载中...</span>
          )}
          <input
            type="text"
            placeholder="答案"
            style={{ width: 80, padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg)', color: 'var(--text)', outline: 'none' }}
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
          />
        </div>
        <button className="btn-primary" style={{ padding: '8px 24px' }} onClick={handleSubmit}>提交回复</button>
      </div>
    </>
  );
}