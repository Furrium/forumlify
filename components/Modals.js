'use client';

// 登录/注册/举报 模态框
import { useState, useEffect } from 'react';
import { API, generateCaptcha } from '@/lib/api';
import { useApp } from './AppProvider';
import { Icon } from './Icons';
import CaptchaImage from './CaptchaImage';

export default function Modals({ modal, onClose, reportPostId }) {
  const { login, register, currentUser, refresh } = useApp();

  // 登录表单
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // 注册表单
  const [regUsername, setRegUsername] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regCaptcha, setRegCaptcha] = useState(null);
  const [regCaptchaInput, setRegCaptchaInput] = useState('');

  // 举报表单
  const [reportReason, setReportReason] = useState('spam');

  useEffect(() => {
    if (modal === 'register') setRegCaptcha(generateCaptcha());
  }, [modal]);

  if (!modal) return null;

  const close = (e) => {
    if (e && e.target !== e.currentTarget) return;
    onClose();
  };

  const handleLogin = async () => {
    if (!loginEmail.trim() || !loginPassword) { alert('请填写完整信息'); return; }
    try {
      const result = await login(loginEmail.trim(), loginPassword);
      if (result.user) {
        onClose();
        setLoginEmail('');
        setLoginPassword('');
        refresh();
      }
    } catch (err) {
      alert('登录失败：' + err.message);
    }
  };

  const handleRegister = async () => {
    if (!regUsername.trim() || !regEmail.trim() || !regPassword) { alert('请填写完整信息'); return; }
    if (regPassword.length < 6) { alert('密码至少6位'); return; }
    if (!regCaptcha || parseInt(regCaptchaInput) !== regCaptcha.answer) {
      alert('验证码错误，请重新计算');
      setRegCaptcha(generateCaptcha());
      setRegCaptchaInput('');
      return;
    }
    try {
      await register(regEmail.trim(), regPassword, regUsername.trim());
      onClose();
      setRegUsername('');
      setRegEmail('');
      setRegPassword('');
      setRegCaptchaInput('');
      alert('注册成功！');
      refresh();
    } catch (err) {
      alert('注册失败：' + err.message);
    }
  };

  const handleReport = async () => {
    if (!reportPostId) return;
    try {
      await API.createReport(reportPostId, reportReason);
      onClose();
      alert('举报已提交，管理员将尽快处理');
    } catch (err) {
      alert('举报失败：' + err.message);
    }
  };

  return (
    <>
      {modal === 'login' && (
        <div className="modal active" onClick={close}>
          <div className="modal-content">
            <span className="close" onClick={onClose}><Icon name="close" size={20} /></span>
            <h2 style={{ marginBottom: 16 }}>登录</h2>
            <input type="email" placeholder="邮箱" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
            <input type="password" placeholder="密码" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleLogin(); }} />
            <button className="btn-primary" style={{ width: '100%' }} onClick={handleLogin}>登录</button>
          </div>
        </div>
      )}

      {modal === 'register' && (
        <div className="modal active" onClick={close}>
          <div className="modal-content">
            <span className="close" onClick={onClose}><Icon name="close" size={20} /></span>
            <h2 style={{ marginBottom: 16 }}>注册</h2>
            <input type="text" placeholder="用户名" value={regUsername} onChange={(e) => setRegUsername(e.target.value)} />
            <input type="email" placeholder="邮箱" value={regEmail} onChange={(e) => setRegEmail(e.target.value)} />
            <input type="password" placeholder="密码（至少6位）" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} />
            <div className="captcha-row" style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '12px 0' }}>
              {regCaptcha ? (
                <CaptchaImage captcha={regCaptcha} onRefresh={() => { setRegCaptcha(generateCaptcha()); setRegCaptchaInput(''); }} />
              ) : (
                <span style={{ color: 'var(--text-light)' }}>验证码加载中...</span>
              )}
              <input type="text" placeholder="答案" style={{ width: 80, background: 'var(--bg)', color: 'var(--text)', border: '1px solid var(--border)', padding: '8px 12px', borderRadius: 4 }} value={regCaptchaInput} onChange={(e) => setRegCaptchaInput(e.target.value)} />
            </div>
            <button className="btn-primary" style={{ width: '100%' }} onClick={handleRegister}>注册</button>
          </div>
        </div>
      )}

      {modal === 'report' && currentUser && (
        <div className="modal active" onClick={close}>
          <div className="modal-content">
            <span className="close" onClick={onClose}><Icon name="close" size={20} /></span>
            <h2 style={{ marginBottom: 16 }}><Icon name="shieldAlert" size={20} /> 举报帖子</h2>
            <p style={{ fontSize: 14, color: '#64748b', marginBottom: 12 }}>请选择举报原因：</p>
            <select
              style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, marginBottom: 16, background: 'var(--bg)', color: 'var(--text)' }}
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
            >
              <option value="spam">垃圾广告</option>
              <option value="abuse">人身攻击</option>
              <option value="illegal">违法内容</option>
              <option value="nsfw">不适当内容</option>
              <option value="other">其他</option>
            </select>
            <button className="btn-primary" style={{ width: '100%' }} onClick={handleReport}>提交举报</button>
          </div>
        </div>
      )}
    </>
  );
}
