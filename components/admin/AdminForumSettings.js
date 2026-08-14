'use client';

// 管理后台 - 论坛设置
import { useEffect, useRef, useState } from 'react';
import { API } from '@/lib/api';
import { applyFavicon } from '@/lib/favicon';
import { compressFavicon, DIRECT_IMAGE_LIMIT, MAX_IMAGE_SOURCE_SIZE } from '@/lib/compress-image';
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
  const [faviconUrl, setFaviconUrl] = useState('');
  const [faviconVersion, setFaviconVersion] = useState('');
  const [versionCommit, setVersionCommit] = useState('unknown');
  const [uploading, setUploading] = useState(false);
  const [uploadStage, setUploadStage] = useState('uploading');
  const [dragOver, setDragOver] = useState(false);
  const [result, setResult] = useState(null); // {ok, msg}
  const fileInputRef = useRef(null);

  useEffect(() => {
    API.getSettings()
      .then((data) => {
        if (data.forum_name) setName(data.forum_name);
        if (data.favicon_url) setFaviconUrl(data.favicon_url);
        if (data.favicon_version) setFaviconVersion(data.favicon_version);
        if (data.version_commit) setVersionCommit(data.version_commit);
      })
      .catch(() => {});
  }, []);

  const handleFavicon = async (file) => {
    if (!file || uploading) return;
    if (file.size > MAX_IMAGE_SOURCE_SIZE) {
      toast(t('admin.forum.faviconTooLarge'), 'warning');
      return;
    }
    const extension = file.name.split('.').pop()?.toLowerCase();
    const acceptedMime = ['image/png', 'image/jpeg', 'image/gif', 'image/webp', 'image/x-icon', 'image/vnd.microsoft.icon'].includes(file.type);
    if (!acceptedMime && extension !== 'ico') {
      toast(t('admin.forum.faviconInvalid'), 'warning');
      return;
    }

    setUploading(true);
    try {
      let uploadFile = file;
      if (file.size > DIRECT_IMAGE_LIMIT) {
        setUploadStage('compressing');
        try {
          uploadFile = await compressFavicon(file);
        } catch {
          toast(t('admin.forum.faviconCompressFailed'), 'error');
          return;
        }
      }
      setUploadStage('uploading');
      const data = await API.uploadFavicon(uploadFile);
      setFaviconUrl(data.favicon_url);
      setFaviconVersion(data.favicon_version);
      applyFavicon(data.favicon_url, data.favicon_version);
      toast(t('admin.forum.faviconSaved'), 'success');
    } catch (error) {
      toast(t('admin.forum.faviconSaveFailed', { msg: error.message }), 'error');
    } finally {
      setUploading(false);
      setUploadStage('uploading');
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const faviconSrc = faviconUrl
    ? `${faviconUrl}${faviconUrl.includes('?') ? '&' : '?'}v=${encodeURIComponent(faviconVersion)}`
    : '';

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
      <div className="admin-forum-settings">
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

        <div className="admin-forum-divider" />

        <label style={{ fontWeight: 600, fontSize: 14, display: 'block', marginBottom: 6 }}>{t('admin.forum.faviconLabel')}</label>
        <p className="admin-forum-hint">{t('admin.forum.faviconHint')}</p>
        <div className="admin-favicon-row">
          <div className="admin-favicon-preview" aria-label={t('admin.forum.faviconPreview')}>
            {faviconSrc ? <img src={faviconSrc} alt="" /> : <Icon name="image" size={24} />}
          </div>
          <button
            type="button"
            className={'admin-favicon-upload' + (dragOver ? ' drag-over' : '')}
            disabled={uploading}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(event) => { event.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(event) => {
              event.preventDefault();
              setDragOver(false);
              handleFavicon(event.dataTransfer.files?.[0]);
            }}
          >
            {!uploading && !dragOver && <Icon name="image" size={32} />}
            <span>{uploading ? t(`admin.forum.favicon${uploadStage === 'compressing' ? 'Compressing' : 'Uploading'}`) : (dragOver ? t('admin.forum.faviconDrop') : t('admin.forum.faviconUpload'))}</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".png,.jpg,.jpeg,.gif,.webp,.ico,image/png,image/jpeg,image/gif,image/webp,image/x-icon"
            hidden
            onChange={(event) => handleFavicon(event.target.files?.[0])}
          />
        </div>

        <div className="admin-forum-divider" />

        <div className="admin-version-row">
          <span className="admin-version-label"><Icon name="code" size={14} /> {t('admin.forum.versionLabel')}</span>
          <span className="admin-version-value">{versionCommit}</span>
        </div>
      </div>
    </>
  );
}
