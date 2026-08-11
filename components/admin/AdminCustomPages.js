'use client';

// 管理后台 - 自定义页面管理（列表）
import { useEffect, useState } from 'react';
import { API } from '@/lib/api';
import CustomPageEditor from './CustomPageEditor';

export default function AdminCustomPages() {
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
    if (!confirm('确定要删除这个页面吗？')) return;
    try {
      await API.adminDeleteCustomPage(p.id);
      load();
    } catch (err) {
      alert('删除失败：' + err.message);
    }
  };

  if (error) return <div style={{ textAlign: 'center', color: '#ef4444', padding: 20 }}>加载失败：{error}</div>;

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h3 style={{ margin: 0 }}>📄 自定义页面</h3>
        <button className="btn-primary" style={{ padding: '8px 16px' }} onClick={() => setEditing('new')}>➕ 添加页面</button>
      </div>
      <div id="customPageList">
        {pages === null ? (
          <div style={{ textAlign: 'center', color: '#94a3b8', padding: 20 }}><span className="spinner-sm" />加载中...</div>
        ) : pages.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#94a3b8', padding: 20 }}>暂无自定义页面</div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: '2px solid var(--border)' }}>
                  <th style={{ padding: '8px 12px' }}>名称</th>
                  <th style={{ padding: '8px 12px' }}>标题</th>
                  <th style={{ padding: '8px 12px' }}>URL</th>
                  <th style={{ padding: '8px 12px' }}>状态</th>
                  <th style={{ padding: '8px 12px', textAlign: 'center' }}>操作</th>
                </tr>
              </thead>
              <tbody>
                {pages.map((p) => (
                  <tr key={p.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '8px 12px' }}><code style={{ background: 'var(--bg)', padding: '2px 6px', borderRadius: 4, fontSize: 12 }}>{p.name}</code></td>
                    <td style={{ padding: '8px 12px' }}>{p.title}</td>
                    <td style={{ padding: '8px 12px' }}><code style={{ background: 'var(--bg)', padding: '2px 6px', borderRadius: 4, fontSize: 12 }}>?custom={p.name}</code></td>
                    <td style={{ padding: '8px 12px' }}>
                      <span style={{ color: p.enabled ? '#22c55e' : '#ef4444' }}>{p.enabled ? '✅ 启用' : '❌ 禁用'}</span>
                    </td>
                    <td style={{ padding: '8px 12px', textAlign: 'center', display: 'flex', gap: 6, justifyContent: 'center' }}>
                      <button className="btn-sm btn-secondary" onClick={() => setEditing(p)}>✏️</button>
                      <button className="btn-sm btn-danger" onClick={() => handleDelete(p)}>🗑️</button>
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
