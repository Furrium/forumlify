'use client';

// 管理后台 - 论坛设置
import { useEffect, useState } from 'react';
import { API } from '@/lib/api';
import { useApp } from '../AppProvider';
import { Icon } from '../Icons';

export default function AdminForumSettings() {
  const { updateForumName } = useApp();
  // 初始为空：收到服务器返回的论坛名后才显示，避免默认名一闪而过
  const [name, setName] = useState('');
  const [result, setResult] = useState(null); // {ok, msg}

  useEffect(() => {
    API.getSettings()
      .then((data) => { if (data.forum_name) setName(data.forum_name); })
      .catch(() => {});
  }, []);

  const handleSave = async () => {
    if (!name.trim()) { alert('请输入论坛名称'); return; }
    try {
      await API.updateSettings(name.trim());
      updateForumName(name.trim());
      setResult({ ok: true, msg: '✅ 保存成功！' });
    } catch {
      setResult({ ok: false, msg: '❌ 保存失败' });
    }
  };

  return (
    <>
      <h3 style={{ marginBottom: 16 }}><Icon name="settings" size={16} /> 论坛设置</h3>
      <div style={{ maxWidth: 400 }}>
        <label style={{ fontWeight: 600, fontSize: 14, display: 'block', marginBottom: 6 }}>论坛名称</label>
        <input
          type="text"
          style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--border)', borderRadius: 6, fontSize: 15, marginBottom: 12, fontFamily: 'inherit', background: 'var(--bg)', color: 'var(--text)' }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn-primary" style={{ padding: '10px 24px' }} onClick={handleSave}>保存</button>
        {result && (
          <span style={{ marginLeft: 12, fontSize: 14, color: result.ok ? '#22c55e' : '#ef4444' }}>{result.msg}</span>
        )}
      </div>
    </>
  );
}
