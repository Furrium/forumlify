'use client';

// 管理后台 - 自定义页面编辑器（modal）
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { API } from '@/lib/api';
import { Icon } from '../Icons';
import { useToast } from '../Toast';

export default function CustomPageEditor({ page, onClose, onSaved }) {
  const { t } = useTranslation();
  const { toast } = useToast();
  const isEdit = !!page;
  const [name, setName] = useState(page?.name || '');
  const [title, setTitle] = useState(page?.title || '');
  const [content, setContent] = useState(page?.content || '');
  const [enabled, setEnabled] = useState(page?.enabled !== false);

  const handleSave = async () => {
    if (!name.trim()) { toast(t('admin.page.nameRequired'), 'warning'); return; }
    if (!title.trim()) { toast(t('admin.page.titleRequired'), 'warning'); return; }
    if (!content.trim()) { toast(t('admin.page.contentRequired'), 'warning'); return; }
    if (!/^[a-zA-Z0-9\-_]+$/.test(name.trim())) {
      toast(t('admin.page.nameInvalid'), 'warning');
      return;
    }
    try {
      if (isEdit) {
        await API.adminUpdateCustomPage(page.id, title.trim(), content.trim(), enabled);
      } else {
        await API.adminCreateCustomPage(name.trim(), title.trim(), content.trim());
      }
      onSaved();
    } catch (err) {
      toast(t('admin.common.saveFailed', { msg: err.message }), 'error');
    }
  };

  return (
    <div className="modal active" style={{ display: 'flex' }} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-content" style={{ maxWidth: 600, maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
        <span className="close" style={{ position: 'absolute', top: 12, right: 16, cursor: 'pointer', color: 'var(--text-light)' }} onClick={onClose}><Icon name="close" size={20} /></span>
        <h2 style={{ marginBottom: 16 }}><Icon name={isEdit ? 'edit' : 'file'} size={20} /> {isEdit ? t('admin.page.editTitle') : t('admin.page.addTitle')}</h2>
        <div style={{ marginBottom: 12 }}>
          <label style={{ fontWeight: 600, fontSize: 14, display: 'block', marginBottom: 4 }}>{t('admin.page.nameLabel')}</label>
          <input
            type="text"
            value={name}
            readOnly={isEdit}
            placeholder={t('admin.page.namePlaceholder')}
            style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 14, background: isEdit ? 'var(--border-light)' : 'var(--bg)', color: 'var(--text)' }}
            onChange={(e) => setName(e.target.value)}
          />
          {isEdit
            ? <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 2 }}><Icon name="warning" size={12} /> {t('admin.page.nameLocked')}</div>
            : <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 2 }}>{t('admin.page.nameHint')}</div>}
        </div>
        <div style={{ marginBottom: 12 }}>
          <label style={{ fontWeight: 600, fontSize: 14, display: 'block', marginBottom: 4 }}>{t('admin.page.navTitleLabel')}</label>
          <input
            type="text"
            value={title}
            placeholder={t('admin.page.navTitlePlaceholder')}
            style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 14, background: 'var(--bg)', color: 'var(--text)' }}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label style={{ fontWeight: 600, fontSize: 14, display: 'block', marginBottom: 4 }}>{t('admin.common.status')}</label>
          <select
            value={String(enabled)}
            style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 14, background: 'var(--bg)', color: 'var(--text)' }}
            onChange={(e) => setEnabled(e.target.value === 'true')}
          >
            <option value="true">{t('admin.common.enabled')}</option>
            <option value="false">{t('admin.common.disabled')}</option>
          </select>
        </div>
        <div style={{ marginBottom: 12 }}>
          <label style={{ fontWeight: 600, fontSize: 14, display: 'block', marginBottom: 4 }}>{t('admin.page.contentLabel')}</label>
          <textarea
            rows={12}
            value={content}
            style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 13, fontFamily: 'monospace', background: 'var(--bg)', color: 'var(--text)', resize: 'vertical' }}
            onChange={(e) => setContent(e.target.value)}
          />
          <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 2 }}>{t('admin.page.contentHelp')}</div>
        </div>
        <button className="btn-primary" style={{ padding: '10px 24px', width: '100%' }} onClick={handleSave}>{t('admin.common.save')}</button>
      </div>
    </div>
  );
}
