'use client';

// 管理后台 - 友情链接管理
import { useEffect, useState } from 'react';
import { API } from '@/lib/api';
import { Icon } from '../Icons';

export default function AdminLinks() {
  const [links, setLinks] = useState([]);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const load = () => { API.getLinks().then(setLinks).catch(() => {}); };
  useEffect(load, []);

  const handleAdd = async () => {
    if (!title.trim() || !url.trim()) { alert('请填写完整信息'); return; }
    try {
      await API.addLink(title.trim(), url.trim());
      setTitle('');
      setUrl('');
      load();
    } catch (err) {
      alert('添加失败：' + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('确定删除该链接吗？')) return;
    try {
      await API.deleteLink(id);
      load();
    } catch (err) {
      alert('删除失败：' + err.message);
    }
  };

  return (
    <>
      <div style={{ marginBottom: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <input
          type="text" placeholder="链接名称"
          style={{ flex: 1, minWidth: 120, padding: '8px 12px', border: '1px solid #e2e8f0', borderRadius: 4 }}
          value={title} onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="url" placeholder="链接地址"
          style={{ flex: 2, minWidth: 160, padding: '8px 12px', border: '1px solid #e2e8f0', borderRadius: 4 }}
          value={url} onChange={(e) => setUrl(e.target.value)}
        />
        <button className="btn-primary" style={{ padding: '8px 16px' }} onClick={handleAdd}>添加</button>
      </div>
      <div id="linkList">
        {links.length === 0 ? (
          <div style={{ color: '#94a3b8', fontSize: 13 }}>暂无友情链接</div>
        ) : (
          links.map((l) => (
            <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #f1f5f9' }}>
              <span><a href={l.url} target="_blank" rel="noreferrer" style={{ color: '#6366f1', textDecoration: 'none' }}>{l.title}</a></span>
              <button className="btn-sm btn-danger" onClick={() => handleDelete(l.id)}>
                <Icon name="trash" size={12} /> 删除
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}
