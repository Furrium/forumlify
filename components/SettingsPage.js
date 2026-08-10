'use client';

// 个人设置页：头像 + 基本资料 + 账户安全 + 恢复码
import { useState, useRef } from 'react';
import { API, uploadImage } from '@/lib/api';
import { useApp } from './AppProvider';
import { Icon } from './Icons';
import AccountSecurity from './AccountSecurity';
import RecoveryCodes from './RecoveryCodes';

export default function SettingsPage() {
  const { currentUser, setCurrentUser } = useApp();
  const [username, setUsername] = useState(currentUser?.username || '');
  const [bio, setBio] = useState(currentUser?.bio || '');
  const [signature, setSignature] = useState(currentUser?.signature || '');
  const [avatarUrl, setAvatarUrl] = useState(currentUser?.avatar_url || '');
  const [avatarStatus, setAvatarStatus] = useState(null);
  const avatarInputRef = useRef(null);

  const handleAvatar = async (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) { setAvatarStatus({ ok: false, msg: '❌ 请选择图片文件' }); return; }
    if (file.size > 5 * 1024 * 1024) { setAvatarStatus({ ok: false, msg: '❌ 图片不能超过 5MB' }); return; }
    try {
      const url = await uploadImage(file);
      await API.updateAvatar(currentUser.id, url);
      setAvatarUrl(url);
      setCurrentUser({ ...currentUser, avatar_url: url });
      setAvatarStatus({ ok: true, msg: '✅ 头像已更新' });
    } catch (err) {
      setAvatarStatus({ ok: false, msg: '❌ ' + err.message });
    }
  };

  const handleSave = async () => {
    if (!currentUser) { alert('请先登录'); return; }
    if (!username.trim()) { alert('用户名不能为空'); return; }
    try {
      const data = await API.updateProfile(currentUser.id, username.trim(), bio.trim(), signature.trim());
      if (data.error) throw new Error(data.error);
      setCurrentUser({ ...currentUser, username: username.trim(), bio: bio.trim(), signature: signature.trim() });
      alert('保存成功！');
    } catch (err) {
      alert('保存失败：' + err.message);
    }
  };

  const avatarSrc = avatarUrl ||
    'https://ui-avatars.com/api/?name=' + encodeURIComponent(currentUser?.username || 'U') + '&background=6366f1&color=fff&size=128';

  return (
    <div className="page-slide active">
      <div className="page-header" style={{ maxWidth: 500, margin: '0 auto', width: '100%' }}>
        <h2><Icon name="settings" size={20} /> 设置</h2>
      </div>
      <div style={{ maxWidth: 500, margin: '0 auto', width: '100%', padding: '20px 0' }}>
        {/* 头像 */}
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src={avatarSrc} style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--primary)' }} alt="" />
            <button
              style={{ position: 'absolute', bottom: 0, right: 0, background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(99,102,241,0.4)' }}
              onClick={() => avatarInputRef.current?.click()}
            >
              📷
            </button>
          </div>
          <input type="file" ref={avatarInputRef} accept="image/*" style={{ display: 'none' }} onChange={(e) => { if (e.target.files?.[0]) handleAvatar(e.target.files[0]); }} />
          <h2 style={{ margin: '12px 0 4px' }}>{currentUser?.username}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>{bio || '这个人很懒，什么都没写'}</p>
          {avatarStatus && (
            <div style={{ fontSize: 13, marginTop: 8, color: avatarStatus.ok ? '#22c55e' : '#ef4444' }}>{avatarStatus.msg}</div>
          )}
        </div>

        {/* 基本资料 */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, padding: 20 }}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontWeight: 600, fontSize: 14, display: 'block', marginBottom: 4 }}>用户名</label>
            <input type="text" value={username} style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 14, background: 'var(--bg)', color: 'var(--text)' }} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontWeight: 600, fontSize: 14, display: 'block', marginBottom: 4 }}>个人简介</label>
            <textarea rows={3} value={bio} style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 14, background: 'var(--bg)', color: 'var(--text)', resize: 'vertical' }} onChange={(e) => setBio(e.target.value)} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontWeight: 600, fontSize: 14, display: 'block', marginBottom: 4 }}>个性签名 <span style={{ color: 'var(--text-light)', fontWeight: 400 }}>（显示在每篇帖子底部，支持 Markdown）</span></label>
            <textarea rows={2} value={signature} placeholder="签名..." style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 14, background: 'var(--bg)', color: 'var(--text)', resize: 'vertical', fontFamily: 'inherit' }} onChange={(e) => setSignature(e.target.value)} />
          </div>
          <button className="btn-primary" style={{ width: '100%', padding: 10 }} onClick={handleSave}>保存设置</button>
        </div>

        <AccountSecurity />
        <RecoveryCodes />
      </div>
    </div>
  );
}
