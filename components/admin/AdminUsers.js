'use client';

// 管理后台 - 用户管理
import { useEffect, useState } from 'react';
import { API } from '@/lib/api';
import { useApp } from '../AppProvider';

export default function AdminUsers() {
  const { currentUser } = useApp();
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  const load = () => {
    API.getUsers()
      .then((data) => { setUsers(data || []); setError(null); })
      .catch((e) => { setError(e.message); setUsers([]); });
  };

  useEffect(load, []);

  const handleRole = async (u, role) => {
    const roleName = role === 'admin' ? '管理员' : '普通用户';
    if (!confirm(`确定要将该用户设为「${roleName}」吗？`)) return;
    try {
      await API.updateUserRole(u.id, role);
      load();
    } catch (err) {
      alert('操作失败：' + err.message);
    }
  };

  if (error) return <div style={{ textAlign: 'center', color: '#ef4444', padding: 20 }}>加载失败：{error}</div>;
  if (!users) return <div style={{ textAlign: 'center', color: '#94a3b8', padding: 20 }}>加载中...</div>;

  return (
    <>
      <div style={{ marginBottom: 12, fontSize: 13, color: '#94a3b8' }}>共 <strong>{users.length}</strong> 位用户</div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>
              <th style={{ padding: '10px 12px' }}>用户</th>
              <th style={{ padding: '10px 12px' }}>角色</th>
              <th style={{ padding: '10px 12px' }}>注册时间</th>
              <th style={{ padding: '10px 12px', textAlign: 'center' }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => {
              const isAdmin = u.role === 'admin';
              const isCurrent = currentUser && currentUser.id === u.id;
              return (
                <tr key={u.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '10px 12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <img
                        src={u.avatar_url || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(u.username) + '&background=6366f1&color=fff&size=64'}
                        style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover' }}
                        alt=""
                      />
                      <span style={{ fontWeight: 500 }}>{u.username}</span>
                      {isCurrent && <span style={{ fontSize: 11, color: '#94a3b8', background: '#eef2ff', padding: '1px 8px', borderRadius: 4 }}>你</span>}
                    </div>
                  </td>
                  <td style={{ padding: '10px 12px' }}>
                    <span style={{
                      display: 'inline-block', padding: '2px 10px', borderRadius: 4, fontSize: 12, fontWeight: 500,
                      ...(isAdmin ? { background: '#6366f1', color: '#fff' } : { background: '#e2e8f0', color: '#64748b' }),
                    }}>
                      {isAdmin ? '管理员' : '普通用户'}
                    </span>
                  </td>
                  <td style={{ padding: '10px 12px', color: '#94a3b8', fontSize: 13 }}>
                    {u.created_at ? new Date(u.created_at).toLocaleDateString('zh-CN') : '—'}
                  </td>
                  <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                    {isCurrent ? (
                      <span style={{ fontSize: 12, color: '#94a3b8' }}>不可操作自己</span>
                    ) : isAdmin ? (
                      <button className="btn-sm btn-secondary" style={{ padding: '4px 12px' }} onClick={() => handleRole(u, 'user')}>设为普通用户</button>
                    ) : (
                      <button className="btn-sm btn-primary" style={{ padding: '4px 12px', background: '#6366f1', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }} onClick={() => handleRole(u, 'admin')}>设为管理员</button>
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
