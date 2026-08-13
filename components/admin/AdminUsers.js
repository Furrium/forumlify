'use client';

// 管理后台 - 用户管理
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { API } from '@/lib/api';
import { useApp } from '../AppProvider';
import { useToast } from '../Toast';

export default function AdminUsers() {
  const { currentUser } = useApp();
  const { t, i18n } = useTranslation();
  const { toast, confirmAction } = useToast();
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  const load = () => {
    API.getUsers()
      .then((data) => { setUsers(data || []); setError(null); })
      .catch((e) => { setError(e.message); setUsers([]); });
  };

  useEffect(load, []);

  const handleRole = async (u, role) => {
    const roleName = role === 'admin' ? t('admin.user.roleAdmin') : t('admin.user.roleUser');
    if (!await confirmAction(t('admin.user.confirmRole', { role: roleName }), { danger: false })) return;
    try {
      await API.updateUserRole(u.id, role);
      load();
    } catch (err) {
      toast(t('admin.common.operationFailed', { msg: err.message }), 'error');
    }
  };

  if (error) return <div style={{ textAlign: 'center', color: '#ef4444', padding: 20 }}>{t('admin.common.loadFailed', { msg: error })}</div>;
  if (!users) return <div style={{ textAlign: 'center', color: '#94a3b8', padding: 20 }}><span className="spinner-sm" />{t('admin.common.loading')}</div>;

  const dateLocale = i18n.resolvedLanguage === 'en' ? 'en-US' : 'zh-CN';

  return (
    <>
      <div style={{ marginBottom: 12, fontSize: 13, color: '#94a3b8' }}>{t('admin.user.count', { count: users.length })}</div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '2px solid var(--border)' }}>
              <th style={{ padding: '10px 12px' }}>{t('admin.user.user')}</th>
              <th style={{ padding: '10px 12px' }}>{t('admin.user.role')}</th>
              <th style={{ padding: '10px 12px' }}>{t('admin.user.registeredAt')}</th>
              <th style={{ padding: '10px 12px', textAlign: 'center' }}>{t('admin.common.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => {
              const isAdmin = u.role === 'admin';
              const isCurrent = currentUser && currentUser.id === u.id;
              return (
                <tr key={u.id} data-username={u.username || ''} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '10px 12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <img
                        src={u.avatar_url || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(u.username) + '&background=6366f1&color=fff&size=64'}
                        className="admin-user-avatar"
                        style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover' }}
                        alt=""
                      />
                      <span className="admin-user-name" style={{ fontWeight: 500 }}>{u.username}</span>
                      {isCurrent && <span style={{ fontSize: 11, color: '#94a3b8', background: '#eef2ff', padding: '1px 8px', borderRadius: 4 }}>{t('admin.user.you')}</span>}
                    </div>
                  </td>
                  <td style={{ padding: '10px 12px' }}>
                    <span style={{
                      display: 'inline-block', padding: '2px 10px', borderRadius: 4, fontSize: 12, fontWeight: 500,
                      ...(isAdmin ? { background: '#6366f1', color: '#fff' } : { background: 'var(--border)', color: 'var(--text-secondary)' }),
                    }}>
                      {isAdmin ? (u.is_super ? t('admin.user.roleSuper') : t('admin.user.roleAdmin')) : t('admin.user.roleUser')}
                    </span>
                  </td>
                  <td style={{ padding: '10px 12px', color: '#94a3b8', fontSize: 13 }}>
                    {u.created_at ? new Date(u.created_at).toLocaleDateString(dateLocale) : '—'}
                  </td>
                  <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                    {u.is_super ? (
                      <span style={{ fontSize: 12, color: '#94a3b8' }}>{t('admin.user.cannotSuper')}</span>
                    ) : isCurrent ? (
                      <span style={{ fontSize: 12, color: '#94a3b8' }}>{t('admin.user.cannotSelf')}</span>
                    ) : isAdmin ? (
                      <button className="btn-sm btn-secondary" style={{ padding: '4px 12px' }} onClick={() => handleRole(u, 'user')}>{t('admin.user.makeUser')}</button>
                    ) : (
                      <button className="btn-sm btn-primary" style={{ padding: '4px 12px', background: '#6366f1', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }} onClick={() => handleRole(u, 'admin')}>{t('admin.user.makeAdmin')}</button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
