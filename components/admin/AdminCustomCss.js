'use client';

// 管理后台 - 自定义 CSS（上传 style.css 覆盖默认样式）
import { useState, useRef } from 'react';
import { API } from '@/lib/api';

export default function AdminCustomCss() {
  const [status, setStatus] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [pendingFile, setPendingFile] = useState(null); // 待确认的 CSS 文件
  const fileInputRef = useRef(null);

  const handleFile = async (file) => {
    if (!file) return;
    if (file.name !== 'style.css') {
      setStatus({ ok: false, msg: '❌ 文件名必须是 style.css' });
      return;
    }
    if (file.size > 1024 * 1024) {
      setStatus({ ok: false, msg: '❌ CSS 文件不能超过 1MB' });
      return;
    }
    // 上传前警告确认（与原版一致）
    setPendingFile(file);
  };

  const doUpload = async () => {
    try {
      await API.uploadCustomCss(pendingFile);
      setStatus({ ok: true, msg: '✅ 自定义 CSS 已生效（刷新页面后应用）' });
      const link = document.getElementById('custom-css-link');
      if (link) link.href = '/api/custom-css?t=' + Date.now();
    } catch (err) {
      setStatus({ ok: false, msg: '❌ ' + err.message });
    } finally {
      setPendingFile(null);
    }
  };

  const handleDelete = async () => {
    if (!confirm('确定要删除自定义 CSS 吗？')) return;
    try {
      await API.deleteCustomCss();
      setStatus({ ok: true, msg: '✅ 已删除自定义 CSS' });
      const link = document.getElementById('custom-css-link');
      if (link) link.remove();
    } catch (err) {
      setStatus({ ok: false, msg: '❌ ' + err.message });
    }
  };

  return (
    <>
      <h3 style={{ marginBottom: 16 }}>🎨 自定义 CSS</h3>
      <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 12 }}>
        上传一个 <code>style.css</code> 文件覆盖默认样式（支持 CSS 变量、暗色模式等）。
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
          {dragOver ? '松开上传' : '📄 点击或拖拽上传 style.css'}
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
        <div style={{ fontSize: 13, marginTop: 8, color: status.ok ? '#22c55e' : '#ef4444' }}>{status.msg}</div>
      )}
      <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
        <button className="btn-primary" style={{ padding: '8px 20px' }} onClick={() => fileInputRef.current?.click()}>💾 保存 CSS</button>
        <button className="btn-secondary" style={{ padding: '8px 20px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface)', cursor: 'pointer', color: 'var(--text)' }} onClick={handleDelete}>🗑️ 删除自定义 CSS</button>
      </div>

      {/* 上传前警告确认 */}
      {pendingFile && (
        <div className="modal active" style={{ display: 'flex' }} onClick={() => setPendingFile(null)}>
          <div className="modal-content" style={{ maxWidth: 420 }} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginBottom: 12 }}>⚠️ 警告</h2>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 16 }}>
              若上传的 <strong>style.css</strong> 存在问题，将导致整个论坛界面样式错乱，甚至无法正常使用。
            </p>
            <p style={{ fontSize: 13, color: 'var(--text-light)', marginBottom: 20 }}>
              请确保 CSS 文件是完整的、经过测试的版本。如出现问题，可点击「删除自定义 CSS」恢复默认样式。
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn-primary" style={{ padding: '8px 24px' }} onClick={doUpload}>我了解，继续上传</button>
              <button className="btn-secondary" style={{ padding: '8px 24px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface)', cursor: 'pointer', color: 'var(--text)' }} onClick={() => setPendingFile(null)}>取消</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
