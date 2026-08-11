'use client';

// 管理后台 - 自定义 CSS（上传 style.css 覆盖默认样式）
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { API } from '@/lib/api';
import { Icon } from '../Icons';
import { useToast } from '../Toast';

export default function AdminCustomCss() {
  const { t } = useTranslation();
  const { confirmAction } = useToast();
  const [status, setStatus] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [pendingFile, setPendingFile] = useState(null); // 待确认的 CSS 文件
  const fileInputRef = useRef(null);

  const handleFile = async (file) => {
    if (!file) return;
    if (file.name !== 'style.css') {
      setStatus({ ok: false, msg: t('admin.css.filenameInvalid') });
      return;
    }
    if (file.size > 1024 * 1024) {
      setStatus({ ok: false, msg: t('admin.css.sizeInvalid') });
      return;
    }
    // 上传前警告确认（与原版一致）
    setPendingFile(file);
  };

  const doUpload = async () => {
    try {
      await API.uploadCustomCss(pendingFile);
      setStatus({ ok: true, msg: t('admin.css.active') });
      const link = document.getElementById('custom-css-link');
      if (link) link.href = '/api/custom-css?t=' + Date.now();
    } catch (err) {
      setStatus({ ok: false, msg: err.message });
    } finally {
      setPendingFile(null);
    }
  };

  const handleDelete = async () => {
    if (!await confirmAction(t('admin.css.confirmDelete'))) return;
    try {
      await API.deleteCustomCss();
      setStatus({ ok: true, msg: t('admin.css.deleted') });
      const link = document.getElementById('custom-css-link');
      if (link) link.remove();
    } catch (err) {
      setStatus({ ok: false, msg: err.message });
    }
  };

  return (
    <>
      <h3 style={{ marginBottom: 16 }}><Icon name="code" size={16} /> {t('admin.css.title')}</h3>
      <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 12 }}>
        {t('admin.css.description')}
      </p>
      <div
        style={{
          border: '2px dashed ' + (dragOver ? 'var(--primary)' : 'var(--border)'),
          borderRadius: 8, padding: 32, textAlign: 'center', cursor: 'pointer',
          transition: 'all 0.3s', background: dragOver ? 'var(--primary-bg)' : 'var(--bg)',
        }}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => { e.preventDefault(); setDragOver(false); if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]); }}
      >
        <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
          <Icon name="upload" size={14} /> {dragOver ? t('admin.css.releaseUpload') : t('admin.css.uploadHint')}
        </span>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        accept=".css"
        style={{ display: 'none' }}
        onChange={(e) => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }}
      />
      {status && (
        <div style={{ fontSize: 13, marginTop: 8, color: status.ok ? '#22c55e' : '#ef4444', display: 'flex', alignItems: 'center', gap: 5 }}><Icon name={status.ok ? 'success' : 'error'} size={14} /> {status.msg}</div>
      )}
      <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
        <button className="btn-primary" style={{ padding: '8px 20px' }} onClick={() => fileInputRef.current?.click()}><Icon name="save" size={14} /> {t('admin.css.save')}</button>
        <button className="btn-secondary" style={{ padding: '8px 20px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface)', cursor: 'pointer', color: 'var(--text)' }} onClick={handleDelete}><Icon name="trash" size={14} /> {t('admin.css.delete')}</button>
      </div>

      {/* 上传前警告确认 */}
      {pendingFile && (
        <div className="modal active" style={{ display: 'flex' }} onClick={() => setPendingFile(null)}>
          <div className="modal-content" style={{ maxWidth: 420 }} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginBottom: 12 }}><Icon name="warning" size={20} /> {t('admin.css.warningTitle')}</h2>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 16 }}>
              {t('admin.css.warningBody')}
            </p>
            <p style={{ fontSize: 13, color: 'var(--text-light)', marginBottom: 20 }}>
              {t('admin.css.warningHelp')}
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn-primary" style={{ padding: '8px 24px' }} onClick={doUpload}><Icon name="upload" size={14} /> {t('admin.css.continueUpload')}</button>
              <button className="btn-secondary" style={{ padding: '8px 24px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface)', cursor: 'pointer', color: 'var(--text)' }} onClick={() => setPendingFile(null)}>{t('admin.common.cancel')}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
