'use client';

// 管理后台 - 友情链接管理
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { API } from '@/lib/api';
import { Icon } from '../Icons';
import { useToast } from '../Toast';

export default function AdminLinks() {
  const { t } = useTranslation();
  const { toast, confirmAction } = useToast();
  const [links, setLinks] = useState([]);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const load = () => { API.getLinks().then(setLinks).catch(() => {}); };
  useEffect(load, []);

  const handleAdd = async () => {
    if (!title.trim() || !url.trim()) { toast(t('admin.link.incomplete'), 'warning'); return; }
    try {
      await API.addLink(title.trim(), url.trim());
      setTitle('');
      setUrl('');
      load();
    } catch (err) {
      toast(t('admin.link.addFailed', { msg: err.message }), 'error');
    }
  };

  const handleDelete = async (id) => {
    if (!await confirmAction(t('admin.link.confirmDelete'))) return;
    try {
      await API.deleteLink(id);
      load();
    } catch (err) {
      toast(t('admin.common.deleteFailed', { msg: err.message }), 'error');
    }
  };

  return (
    <>
      <div style={{ marginBottom: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <input
          type="text" placeholder={t('admin.link.namePlaceholder')}
          style={{ flex: 1, minWidth: 120, padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg)', color: 'var(--text)' }}
          value={title} onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="url" placeholder={t('admin.link.urlPlaceholder')}
          style={{ flex: 2, minWidth: 160, padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg)', color: 'var(--text)' }}
          value={url} onChange={(e) => setUrl(e.target.value)}
        />
        <button className="btn-primary" style={{ padding: '8px 16px' }} onClick={handleAdd}>{t('admin.link.add')}</button>
      </div>
      <div id="linkList">
        {links.length === 0 ? (
          <div style={{ color: '#94a3b8', fontSize: 13 }}>{t('admin.link.empty')}</div>
        ) : (
          links.map((l) => (
            <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #f1f5f9' }}>
              <span><a href={l.url} target="_blank" rel="noreferrer" style={{ color: '#6366f1', textDecoration: 'none' }}>{l.title}</a></span>
              <button className="btn-sm btn-danger" onClick={() => handleDelete(l.id)}>
                <Icon name="trash" size={12} /> {t('admin.common.delete')}
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}
