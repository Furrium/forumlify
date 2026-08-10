'use client';

// 管理后台 - 自定义页面编辑器（modal）
import { useState } from 'react';
import { API } from '@/lib/api';

export default function CustomPageEditor({ page, onClose, onSaved }) {
  const isEdit = !!page;
  const [name, setName] = useState(page?.name || '');
  const [title, setTitle] = useState(page?.title || '');
  const [content, setContent] = useState(page?.content || '');
  const [enabled, setEnabled] = useState(page?.enabled !== false);

  const handleSave = async () => {
    if (!name.trim()) { alert('请输入页面名称'); return; }
    if (!title.trim()) { alert('请输入导航栏显示名称'); return; }
    if (!content.trim()) { alert('请输入页面内容'); return; }
    if (!/^[a-zA-Z0-9\-_]+$/.test(name.trim())) {
      alert('页面名称只允许字母、数字、短横线和下划线');
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
      alert('保存失败：' + err.message);
    }
  };

  return (
    <div className="modal active" style={{ display: 'flex' }} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-content" style={{ maxWidth: 600, maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
        <span className="close" style={{ position: 'absolute', top: 12, right: 16, fontSize: 24, cursor: 'pointer', color: 'var(--text-light)' }} onClick={onClose}>&times;</span>
        <h2 style={{ marginBottom: 16 }}>{isEdit ? '✏️ 编辑页面' : '📄 添加页面'}</h2>
        <div style={{ marginBottom: 12 }}>
          <label style={{ fontWeight: 600, fontSize: 14, display: 'block', marginBottom: 4 }}>页面名称</label>
          <input
            type="text"
            value={name}
            readOnly={isEdit}
            placeholder="about (用于 URL: ?custom=about)"
            style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 14, background: isEdit ? 'var(--border-light)' : 'var(--bg)', color: 'var(--text)' }}
            onChange={(e) => setName(e.target.value)}
          />
          {isEdit
            ? <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 2 }}>⚠️ 名称不可修改</div>
            : <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 2 }}>只允许字母、数字、短横线和下划线</div>}
        </div>
        <div style={{ marginBottom: 12 }}>
          <label style={{ fontWeight: 600, fontSize: 14, display: 'block', marginBottom: 4 }}>导航栏显示名称</label>
          <input
            type="text"
            value={title}
            placeholder="关于我们"
            style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 14, background: 'var(--bg)', color: 'var(--text)' }}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label style={{ fontWeight: 600, fontSize: 14, display: 'block', marginBottom: 4 }}>状态</label>
          <select
            value={String(enabled)}
            style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 14, background: 'var(--bg)', color: 'var(--text)' }}
            onChange={(e) => setEnabled(e.target.value === 'true')}
          >
            <option value="true">启用</option>
            <option value="false">禁用</option>
          </select>
        </div>
        <div style={{ marginBottom: 12 }}>
          <label style={{ fontWeight: 600, fontSize: 14, display: 'block', marginBottom: 4 }}>页面内容（HTML + CSS + JS）</label>
          <textarea
            rows={12}
            value={content}
            style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 13, fontFamily: 'monospace', background: 'var(--bg)', color: 'var(--text)', resize: 'vertical' }}
            onChange={(e) => setContent(e.target.value)}
          />
          <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 2 }}>支持 HTML、CSS（&lt;style&gt;）、JS（&lt;script&gt;），内容会在独立的沙盒中渲染</div>
        </div>
        <button className="btn-primary" style={{ padding: '10px 24px', width: '100%' }} onClick={handleSave}>保存</button>
      </div>
    </div>
  );
}
