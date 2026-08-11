'use client';

// 管理后台 - 举报处理
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { API } from '@/lib/api';
import { Icon } from '../Icons';
import { useToast } from '../Toast';

export default function AdminReports() {
  const { t } = useTranslation();
  const { toast, confirmAction } = useToast();
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
    const note = action === 'approve' ? t('admin.report.approvedNote') : t('admin.report.rejectedNote');
    if (action === 'approve' && !await confirmAction(t('admin.report.confirmApprove'))) return;
    try {
      await API.updateReport(r.id, status, note);
      if (action === 'approve' && r.post_id) {
        API.deletePost(r.post_id).catch(() => {});
      }
      load();
    } catch (err) {
      toast(t('admin.common.operationFailed', { msg: err.message }), 'error');
    }
  };

  if (error) return <div style={{ textAlign: 'center', color: '#ef4444', padding: 20 }}>{t('admin.common.loadFailed', { msg: error })}</div>;
  if (!reports) return <div style={{ textAlign: 'center', color: '#94a3b8', padding: 20 }}><span className="spinner-sm" />{t('admin.common.loading')}</div>;
  if (reports.length === 0) return <div style={{ textAlign: 'center', color: '#94a3b8', padding: 40 }}><Icon name="success" size={16} /> {t('admin.report.empty')}</div>;

  const statusLabels = {
    pending: t('admin.report.statusPending'),
    approved: t('admin.report.statusApproved'),
    rejected: t('admin.report.statusRejected'),
  };
  const statusIcons = { pending: 'pending', approved: 'success', rejected: 'error' };

  return reports.map((r) => (
    <div key={r.id} className="report-item">
      <div>{t('admin.report.reportedPost', { name: r.reporter_name || t('admin.report.anonymous') })}</div>
      <div style={{ fontSize: 13, color: '#64748b', margin: '4px 0' }}>{t('admin.report.reason', { reason: r.reason })}</div>
      <div style={{ fontSize: 13, color: '#64748b', margin: '4px 0' }}>
        {t('admin.report.post', {
          title: r.post_title || t('admin.report.untitled'),
          content: (r.post_content || '').substring(0, 30) + ((r.post_content || '').length > 30 ? '...' : ''),
        })}
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
        {statusIcons[r.status] && <Icon name={statusIcons[r.status]} size={13} />} {t('admin.common.status')}: {statusLabels[r.status] || r.status}
      </div>
      {r.handler_name && (
        <div style={{ fontSize: 12, color: '#94a3b8' }}>
          {t('admin.report.handler', { name: r.handler_name })}{r.handler_note ? ' (' + r.handler_note + ')' : ''}
        </div>
      )}
      {r.status === 'pending' && (
        <div className="report-actions">
          <button className="btn-sm btn-danger" onClick={() => handleAction(r, 'approve')}>
            <Icon name="trash" size={12} /> {t('admin.report.deletePost')}
          </button>
          <button className="btn-sm btn-secondary" onClick={() => handleAction(r, 'reject')}>
            <Icon name="close" size={12} /> {t('admin.report.reject')}
          </button>
        </div>
      )}
    </div>
  ));
}
