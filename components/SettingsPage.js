'use client';

// 个人设置页
import { useState } from 'react';
import { API } from '@/lib/api';
import { useApp } from './AppProvider';
import { Icon } from './Icons';

export default function SettingsPage() {
  const { currentUser, setCurrentUser } = useApp();
  const [username, setUsername] = useState(currentUser?.username || '');
  const [bio, setBio] = useState(currentUser?.bio || '');

  const handleSave = async () => {
    if (!currentUser) { alert('请先登录'); return; }
    if (!username.trim()) { alert('用户名不能为空'); return; }
    try {
      const data = await API.updateProfile(currentUser.id, username.trim(), bio.trim());
      if (data.error) throw new Error(data.error);
      setCurrentUser({ ...currentUser, username: username.trim(), bio: bio.trim() });
      alert('保存成功！');
    } catch (err) {
      alert('保存失败：' + err.message);
    }
  };

  return (
    <div className="page-slide active">
      <div className="page-header" style={{ maxWidth: 400, margin: '0 auto', width: '100%' }}>
        <h2><Icon name="settings" size={20} /> 设置</h2>
      </div>
      <div style={{ maxWidth: 400, margin: '0 auto', width: '100%' }}>
        <label style={{ fontWeight: 600, fontSize: 14 }}>用户名</label>
        <input
          type="text"
          style={{ width: '100%', padding: '8px 12px', border: '1px solid #e2e8f0', borderRadius: 4, margin: '6px 0 12px' }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label style={{ fontWeight: 600, fontSize: 14 }}>个人简介</label>
        <textarea
          rows={3}
          style={{ width: '100%', padding: '8px 12px', border: '1px solid #e2e8f0', borderRadius: 4, margin: '6px 0 12px' }}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button className="btn-primary" onClick={handleSave}>保存设置</button>
      </div>
    </div>
  );
}
