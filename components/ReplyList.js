'use client';

// 回复列表 + 发表回复表单
import { useEffect, useState, useCallback } from 'react';
import { API, generateCaptcha } from '@/lib/api';
import { useApp } from './AppProvider';
import { Icon } from './Icons';
import { renderMarkdown } from '@/lib/markdown';
import CaptchaImage from './CaptchaImage';

function avatar(username) {
  return 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username || '匿名用户') +
    '&background=6366f1&color=fff&size=64';
}

export default function ReplyList({ postId, onRefresh }) {
  const { currentUser, openUser } = useApp();
  const [replies, setReplies] = useState([]);
  const [content, setContent] = useState('');
  const [captcha, setCaptcha] = useState(null);
  const [captchaInput, setCaptchaInput] = useState('');

  const load = useCallback(async () => {
    try {
      const data = await API.getReplies(postId);
      setReplies(data || []);
    } catch { setReplies([]); }
  }, [postId]);

  useEffect(() => { load(); }, [load]);
  useEffect(() => { setCaptcha(generateCaptcha()); }, [postId]);

  const handleSubmit = async () => {
    if (!currentUser) { alert('请先登录'); return; }
    if (!content.trim()) { alert('请填写回复内容'); return; }
    if (!captcha || parseInt(captchaInput) !== captcha.answer) {
      alert('验证码错误，请重新计算');
      setCaptcha(generateCaptcha());
      setCaptchaInput('');
      return;
    }
    try {
      await API.createReply(postId, content.trim());
      API.logEvent('create_reply').catch(() => {});
      setContent('');
      setCaptchaInput('');
      setCaptcha(generateCaptcha());
      load();
      onRefresh();
    } catch (err) {
      alert('回复失败：' + err.message);
    }
  };

  const handleDelete = async (replyId) => {
    if (!confirm('确定要删除这条回复吗？')) return;
    try {
      await API.deleteReply(replyId);
      load();
    } catch (err) {
      alert('删除失败：' + err.message);
    }
  };

  return (
    <>
      <div style={{ marginTop: 20, fontSize: 14, color: '#64748b' }}>
        <Icon name="message" size={14} /> {replies.length} 条回复
      </div>
      <div style={{ marginTop: 12 }}>
        {replies.length === 0 ? (
          <div style={{ color: '#94a3b8', padding: '20px 0', textAlign: 'center' }}>还没有回复，快来抢沙发吧 🛋️</div>
        ) : (
          replies.map((r) => {
            const rTime = r.created_at ? new Date(r.created_at).toLocaleString('zh-CN') : '';
            return (
              <div key={r.id} className="reply-item">
                <div className="reply-header">
                  <img src={avatar(r.username)} className="reply-avatar" alt="" />
                  <span
                    className="reply-username"
                    style={{ cursor: 'pointer', color: 'var(--primary)' }}
                    onClick={() => openUser(r.username)}
                  >
                    {r.username || '匿名用户'}
                  </span>
                  <span className="reply-time">{rTime}</span>
                  {currentUser && (currentUser.id === r.user_id || currentUser.role === 'admin') && (
                    <button className="btn-sm btn-danger reply-delete-btn" onClick={() => handleDelete(r.id)}>
                      <Icon name="trash" size={12} /> 删除
                    </button>
                  )}
                </div>
                <div className="reply-content" dangerouslySetInnerHTML={{ __html: renderMarkdown(r.content) }} />
              </div>
            );
          })
        )}
      </div>

      <div id="replyArea" style={{ marginTop: 24, borderTop: '1px solid var(--border)', paddingTop: 20 }}>
        <h3 style={{ fontSize: 16, marginBottom: 12 }}><Icon name="message" size={16} /> 发表回复</h3>
        <textarea
          rows={3}
          placeholder="写下你的回复..."
          style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 14, fontFamily: 'inherit', resize: 'vertical', background: 'var(--bg)', color: 'var(--text)' }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) handleSubmit(); }}
        />
        <div className="captcha-row" style={{ margin: '10px 0', display: 'flex', alignItems: 'center', gap: 10 }}>
          {captcha ? (
            <CaptchaImage captcha={captcha} onRefresh={() => { setCaptcha(generateCaptcha()); setCaptchaInput(''); }} />
          ) : (
            <span style={{ color: 'var(--text-light)' }}>验证码加载中...</span>
          )}
          <input
            type="text"
            placeholder="答案"
            style={{ width: 80, padding: '8px 12px', border: '1px solid #e2e8f0', borderRadius: 4 }}
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
          />
        </div>
        <button className="btn-primary" style={{ padding: '8px 24px' }} onClick={handleSubmit}>提交回复</button>
      </div>
    </>
  );
}
