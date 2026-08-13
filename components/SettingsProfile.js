'use client';

// 设置 - 个人资料（头像 + 用户名/简介/签名 + 语言）
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { API, uploadImage } from '@/lib/api';
import { useApp } from './AppProvider';
import { setAppLanguage } from '@/lib/i18n';
import { Icon } from './Icons';
import { useToast } from './Toast';

export default function SettingsProfile() {
  const { currentUser, setCurrentUser } = useApp();
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const [username, setUsername] = useState(currentUser?.username || '');
  const [bio, setBio] = useState(currentUser?.bio || '');
  const [signature, setSignature] = useState(currentUser?.signature || '');
  const [avatarUrl, setAvatarUrl] = useState(currentUser?.avatar_url || '');
  const [avatarStatus, setAvatarStatus] = useState(null);
  const avatarInputRef = useRef(null);

  const handleAvatar = async (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) { setAvatarStatus({ ok: false, msg: t('settings.avatarFileRequired') }); return; }
    if (file.size > 5 * 1024 * 1024) { setAvatarStatus({ ok: false, msg: t('settings.avatarTooLarge') }); return; }
    try {
      const url = await uploadImage(file);
      await API.updateAvatar(currentUser.id, url);
      setAvatarUrl(url);
      setCurrentUser({ ...currentUser, avatar_url: url });
      setAvatarStatus({ ok: true, msg: t('settings.avatarUpdated') });
    } catch (err) {
      setAvatarStatus({ ok: false, msg: err.message });
    }
  };

  const handleSave = async () => {
    if (!currentUser) { toast(t('settings.pleaseLogin'), 'warning'); return; }
    if (!username.trim()) { toast(t('settings.usernameRequired'), 'warning'); return; }
    try {
      const data = await API.updateProfile(currentUser.id, username.trim(), bio.trim(), signature.trim());
      if (data.error) throw new Error(data.error);
      setCurrentUser({ ...currentUser, username: username.trim(), bio: bio.trim(), signature: signature.trim() });
      toast(t('settings.saved'), 'success');
    } catch (err) {
      toast(t('settings.saveFailed', { msg: err.message }), 'error');
    }
  };

  const avatarSrc = avatarUrl ||
    'https://ui-avatars.com/api/?name=' + encodeURIComponent(currentUser?.username || 'U') + '&background=6366f1&color=fff&size=128';

  return (
    <div>
      {/* 头像 */}
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img className="settings-profile-avatar" src={avatarSrc} style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--primary)' }} alt="" />
          <button
            style={{ position: 'absolute', bottom: 0, right: 0, background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(99,102,241,0.4)' }}
            onClick={() => avatarInputRef.current?.click()}
            aria-label={t('settings.changeAvatar')}
            title={t('settings.changeAvatar')}
          >
            <Icon name="camera" size={16} />
          </button>
        </div>
        <input type="file" ref={avatarInputRef} accept="image/*" style={{ display: 'none' }} onChange={(e) => { if (e.target.files?.[0]) handleAvatar(e.target.files[0]); }} />
        <h2 className="settings-profile-name" style={{ margin: '12px 0 4px', fontSize: 14, fontWeight: 600, color: 'var(--primary)' }}>{currentUser?.username}</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>{bio || t('user.bioEmpty')}</p>
        {avatarStatus && (
          <div style={{ fontSize: 13, marginTop: 8, color: avatarStatus.ok ? '#22c55e' : '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}><Icon name={avatarStatus.ok ? 'success' : 'error'} size={14} /> {avatarStatus.msg}</div>
        )}
      </div>

      {/* 基本资料 */}
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, padding: 20 }}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 600, fontSize: 14, display: 'block', marginBottom: 4 }}>{t('settings.username')}</label>
          <input type="text" value={username} style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 14, background: 'var(--bg)', color: 'var(--text)' }} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 600, fontSize: 14, display: 'block', marginBottom: 4 }}>{t('settings.bio')}</label>
          <textarea rows={3} value={bio} style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 14, background: 'var(--bg)', color: 'var(--text)', resize: 'vertical' }} onChange={(e) => setBio(e.target.value)} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 600, fontSize: 14, display: 'block', marginBottom: 4 }}>{t('settings.signature')} <span style={{ color: 'var(--text-light)', fontWeight: 400 }}>({t('settings.signatureHint')})</span></label>
          <textarea rows={2} value={signature} placeholder={t('settings.signaturePlaceholder')} style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 14, background: 'var(--bg)', color: 'var(--text)', resize: 'vertical', fontFamily: 'inherit' }} onChange={(e) => setSignature(e.target.value)} />
        </div>
        <button className="btn-primary" style={{ width: '100%', padding: 10 }} onClick={handleSave}>{t('settings.save')}</button>
      </div>

      {/* 语言设置 */}
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, padding: 20, marginTop: 16 }}>
        <label style={{ fontWeight: 600, fontSize: 14, display: 'block', marginBottom: 8 }}>{t('settings.language')}</label>
        <div className="feed-header-left language-toggle" style={{ display: 'inline-flex' }}>
          <button
            className={'tab' + (i18n.language.startsWith('zh') ? ' active' : '')}
            aria-pressed={i18n.language.startsWith('zh')}
            onClick={() => setAppLanguage('zh')}
          >
            {t('settings.languageZh')}
          </button>
          <button
            className={'tab' + (i18n.language.startsWith('en') ? ' active' : '')}
            aria-pressed={i18n.language.startsWith('en')}
            onClick={() => setAppLanguage('en')}
          >
            {t('settings.languageEn')}
          </button>
        </div>
      </div>
    </div>
  );
}
