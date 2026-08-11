'use client';

// 管理后台 - 论坛设置
import { useEffect, useState } from 'react';
import { API } from '@/lib/api';
import { useApp } from '../AppProvider';
import { Icon } from '../Icons';
import { useTranslation } from 'react-i18next';
import { useToast } from '../Toast';

export default function AdminForumSettings() {
  const { updateForumName } = useApp();
  const { t } = useTranslation();
  const { toast } = useToast();
  // 初始为空：收到服务器返回的论坛名后才显示，避免默认名一闪而过
  const [name, setName] = useState('');
  const [result, setResult] = useState(null); // {ok, msg}

  useEffect(() => {
    API.getSettings()
      .then((data) => { if (data.forum_name) setName(data.forum_name); })
      .catch(() => {});
  }, []);

  const handleSave = async () => {
    if (!name.trim()) { toast(t('admin.forum.nameRequired'), 'warning'); return; }
    try {
      await API.updateSettings(name.trim());
      updateForumName(name.trim());
      setResult({ ok: true, msg: t('admin.forum.saved') });
    } catch {
      setResult({ ok: false, msg: t('admin.forum.saveFailed') });
    }
  };

  return (
    <>
      <h3 style={{ marginBottom: 16 }}><Icon name="settings" size={16} /> {t('admin.forum.title')}</h3>
      <div style={{ maxWidth: 400 }}>
        <label style={{ fontWeight: 600, fontSize: 14, display: 'block', marginBottom: 6 }}>{t('admin.forum.nameLabel')}</label>
        <input
          type="text"
          style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--border)', borderRadius: 6, fontSize: 15, marginBottom: 12, fontFamily: 'inherit', background: 'var(--bg)', color: 'var(--text)' }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn-primary" style={{ padding: '10px 24px' }} onClick={handleSave}><Icon name="save" size={14} /> {t('admin.forum.save')}</button>
        {result && (
          <span style={{ marginLeft: 12, fontSize: 14, color: result.ok ? '#22c55e' : '#ef4444' }}><Icon name={result.ok ? 'success' : 'error'} size={14} /> {result.msg}</span>
        )}
      </div>
    </>
  );
}
