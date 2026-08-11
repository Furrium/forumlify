'use client';

// 管理后台 - 自定义页面管理（列表）
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { API } from '@/lib/api';
import CustomPageEditor from './CustomPageEditor';
import { Icon } from '../Icons';
import { useToast } from '../Toast';

export default function AdminCustomPages() {
  const { t } = useTranslation();
  const { toast, confirmAction } = useToast();
  const [pages, setPages] = useState(null);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(null); // null | 'new' | page对象

  const load = () => {
    API.adminGetCustomPages()
      .then((data) => { setPages(data || []); setError(null); })
      .catch((e) => { setError(e.message); setPages([]); });
  };

  useEffect(load, []);

  const handleDelete = async (p) => {
    if (!await confirmAction(t('admin.page.confirmDelete'))) return;
    try {
      await API.adminDeleteCustomPage(p.id);
      load();
    } catch (err) {
      toast(t('admin.common.deleteFailed', { msg: err.message }), 'error');
    }
  };

  if (error) return <div style={{ textAlign: 'center', color: '#ef4444', padding: 20 }}>{t('admin.common.loadFailed', { msg: error })}</div>;

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h3 style={{ margin: 0 }}><Icon name="file" size={16} /> {t('admin.page.title')}</h3>
        <button className="btn-primary" style={{ padding: '8px 16px' }} onClick={() => setEditing('new')}><Icon name="plus" size={14} /> {t('admin.page.add')}</button>
      </div>
      <div id="customPageList">
        {pages === null ? (
          <div style={{ textAlign: 'center', color: '#94a3b8', padding: 20 }}><span className="spinner-sm" />{t('admin.common.loading')}</div>
        ) : pages.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#94a3b8', padding: 20 }}>{t('admin.page.empty')}</div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: '2px solid var(--border)' }}>
                  <th style={{ padding: '8px 12px' }}>{t('admin.page.name')}</th>
                  <th style={{ padding: '8px 12px' }}>{t('admin.page.columnTitle')}</th>
                  <th style={{ padding: '8px 12px' }}>{t('admin.page.url')}</th>
                  <th style={{ padding: '8px 12px' }}>{t('admin.common.status')}</th>
                  <th style={{ padding: '8px 12px', textAlign: 'center' }}>{t('admin.common.actions')}</th>
                </tr>
              </thead>
              <tbody>
                {pages.map((p) => (
                  <tr key={p.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '8px 12px' }}><code style={{ background: 'var(--bg)', padding: '2px 6px', borderRadius: 4, fontSize: 12 }}>{p.name}</code></td>
                    <td style={{ padding: '8px 12px' }}>{p.title}</td>
                    <td style={{ padding: '8px 12px' }}><code style={{ background: 'var(--bg)', padding: '2px 6px', borderRadius: 4, fontSize: 12 }}>?custom={p.name}</code></td>
                    <td style={{ padding: '8px 12px' }}>
                      <span style={{ color: p.enabled ? '#22c55e' : '#ef4444', display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name={p.enabled ? 'success' : 'error'} size={13} /> {p.enabled ? t('admin.common.enabled') : t('admin.common.disabled')}</span>
                    </td>
                    <td style={{ padding: '8px 12px', textAlign: 'center', display: 'flex', gap: 6, justifyContent: 'center' }}>
                      <button className="btn-sm btn-secondary" title={t('admin.page.edit')} aria-label={t('admin.page.edit')} onClick={() => setEditing(p)}><Icon name="edit" size={13} /></button>
                      <button className="btn-sm btn-danger" title={t('admin.page.delete')} aria-label={t('admin.page.delete')} onClick={() => handleDelete(p)}><Icon name="trash" size={13} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {editing && (
        <CustomPageEditor
          page={editing === 'new' ? null : editing}
          onClose={() => setEditing(null)}
          onSaved={() => { setEditing(null); load(); }}
        />
      )}
    </>
  );
}
