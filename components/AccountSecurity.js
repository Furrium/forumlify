'use client';

// 账户安全：修改密码 + 修改邮箱
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { API } from '@/lib/api';
import { useApp } from './AppProvider';

export default function AccountSecurity() {
  const { currentUser } = useApp();
  const { t } = useTranslation();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [pwStatus, setPwStatus] = useState(null);
  const [emailPassword, setEmailPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState(null);

  const changePassword = async () => {
    if (!oldPassword || !newPassword) { alert(t('security.fillAll')); return; }
    if (newPassword.length < 6) { alert(t('security.pwMin')); return; }
    try {
      await API.updatePassword(currentUser.id, oldPassword, newPassword);
      setPwStatus({ ok: true, msg: t('security.pwChanged') });
      setOldPassword('');
      setNewPassword('');
    } catch (err) {
      setPwStatus({ ok: false, msg: '❌ ' + err.message });
    }
  };

  const changeEmail = async () => {
    if (!emailPassword || !newEmail) { alert(t('security.fillAll')); return; }
    try {
      await API.updateEmail(currentUser.id, emailPassword, newEmail);
      setEmailStatus({ ok: true, msg: t('security.emailChanged') });
      setEmailPassword('');
      setNewEmail('');
    } catch (err) {
      setEmailStatus({ ok: false, msg: '❌ ' + err.message });
    }
  };

  return (
    <div style={{ marginTop: 16, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, padding: 20 }}>
      <h3 style={{ fontSize: 16, marginBottom: 12 }}>🔒 {t('security.title')}</h3>

      <div style={{ marginBottom: 12 }}>
        <label style={{ fontWeight: 600, fontSize: 13, display: 'block', marginBottom: 4 }}>{t('security.currentPw')}</label>
        <input type="password" value={oldPassword} style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 14, background: 'var(--bg)', color: 'var(--text)' }} onChange={(e) => setOldPassword(e.target.value)} />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label style={{ fontWeight: 600, fontSize: 13, display: 'block', marginBottom: 4 }}>{t('security.newPw')}</label>
        <input type="password" value={newPassword} style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 14, background: 'var(--bg)', color: 'var(--text)' }} onChange={(e) => setNewPassword(e.target.value)} />
      </div>
      <button className="btn-secondary" style={{ padding: '8px 16px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface)', cursor: 'pointer', color: 'var(--text)' }} onClick={changePassword}>{t('security.changePw')}</button>
      {pwStatus && <div style={{ fontSize: 13, marginTop: 6, color: pwStatus.ok ? '#22c55e' : '#ef4444' }}>{pwStatus.msg}</div>}

      <div style={{ borderTop: '1px solid var(--border)', margin: '16px 0' }}></div>

      <div style={{ marginBottom: 12 }}>
        <label style={{ fontWeight: 600, fontSize: 13, display: 'block', marginBottom: 4 }}>{t('security.currentPwVerify')}</label>
        <input type="password" value={emailPassword} style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 14, background: 'var(--bg)', color: 'var(--text)' }} onChange={(e) => setEmailPassword(e.target.value)} />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label style={{ fontWeight: 600, fontSize: 13, display: 'block', marginBottom: 4 }}>{t('security.newEmail')}</label>
        <input type="email" value={newEmail} style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 14, background: 'var(--bg)', color: 'var(--text)' }} onChange={(e) => setNewEmail(e.target.value)} />
      </div>
      <button className="btn-secondary" style={{ padding: '8px 16px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface)', cursor: 'pointer', color: 'var(--text)' }} onClick={changeEmail}>{t('security.changeEmail')}</button>
      {emailStatus && <div style={{ fontSize: 13, marginTop: 6, color: emailStatus.ok ? '#22c55e' : '#ef4444' }}>{emailStatus.msg}</div>}
    </div>
  );
}
