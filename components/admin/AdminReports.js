'use client';

// 管理后台 - 举报处理
import { useEffect, useState } from 'react';
import { API } from '@/lib/api';

const STATUS = { pending: '⏳ 待处理', approved: '✅ 已删除', rejected: '❌ 已驳回' };

export default function AdminReports() {
  const [reports, setReports] = useState(null);
  const [error, setError] = useState(null);

  const load = () => {
    API.getReports()
      .then((data) => { setReports(data || []); setError(null); })
      .catch((e) => { setError(e.message); setReports([]); });
  };

  useEffect(load, []);

  const handleAction = async (r, action) => {
    const status = action === 'approve' ? 'approved' : 'rejected';
    const note = action === 'approve' ? '已删除违规帖子' : '举报不成立';
    if (action === 'approve' && !confirm('确定要删除该帖子并标记举报为已处理吗？')) return;
    try {
      await API.updateReport(r.id, status, note);
      if (action === 'approve' && r.post_id) {
        API.deletePost(r.post_id).catch(() => {});
      }
      load();
    } catch (err) {
      alert('操作失败：' + err.message);
    }
  };

  if (error) return <div style={{ textAlign: 'center', color: '#ef4444', padding: 20 }}>加载失败：{error}</div>;
  if (!reports) return <div style={{ textAlign: 'center', color: '#94a3b8', padding: 20 }}>加载中...</div>;
  if (reports.length === 0) return <div style={{ textAlign: 'center', color: '#94a3b8', padding: 40 }}>✅ 暂无举报</div>;

  return reports.map((r) => (
    <div key={r.id} className="report-item">
      <div><strong>{r.reporter_name || '匿名'}</strong> 举报了帖子</div>
      <div style={{ fontSize: 13, color: '#64748b', margin: '4px 0' }}>原因：{r.reason}</div>
      <div style={{ fontSize: 13, color: '#64748b', margin: '4px 0' }}>
        帖子：{r.post_title || '无标题'} — {(r.post_content || '').substring(0, 30)}
        {(r.post_content || '').length > 30 ? '...' : ''}
      </div>
      <div style={{ fontSize: 13, fontWeight: 600 }}>状态：{STATUS[r.status] || r.status}</div>
      {r.handler_name && (
        <div style={{ fontSize: 12, color: '#94a3b8' }}>
          处理人：{r.handler_name}{r.handler_note ? ' (' + r.handler_note + ')' : ''}
        </div>
      )}
      {r.status === 'pending' && (
        <div className="report-actions">
          <button className="btn-sm btn-danger" onClick={() => handleAction(r, 'approve')}>删除帖子</button>
          <button className="btn-sm btn-secondary" onClick={() => handleAction(r, 'reject')}>驳回举报</button>
        </div>
      )}
    </div>
  ));
}
