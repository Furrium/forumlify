'use client';

// 恢复码管理：查看 + 重新生成
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { API } from '@/lib/api';

export default function RecoveryCodes() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(null); // null | {codes, isNew}

  const loadCount = () => {
    API.getRecoveryCodeCount().then((d) => setCount(d.count || 0)).catch(() => {});
  };
  useEffect(loadCount, []);

  const regenerate = async () => {
    if (!confirm(t('recovery.confirmRegenerate'))) return;
    try {
      const d = await API.generateRecoveryCodes();
      setModal({ codes: d.codes || [], isNew: true });
      loadCount();
    } catch (err) {
      alert(t('recovery.genFailed', { msg: err.message }));
    }
  };

  const view = async () => {
    try {
      // 生成后直接展示；若已有恢复码则重新生成展示（与原版一致：查看即生成新码）
      const d = await API.generateRecoveryCodes();
      setModal({ codes: d.codes || [], isNew: false });
      loadCount();
    } catch (err) {
      alert(t('recovery.fetchFailed', { msg: err.message }));
    }
  };

  return (
    <div style={{ marginTop: 16, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, padding: 20 }}>
      <h3 style={{ fontSize: 16, marginBottom: 8 }}>🔑 {t('recovery.title')}</h3>
      <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 12 }}>{t('recovery.desc')}</p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button className="btn-secondary" style={{ padding: '8px 16px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface)', cursor: 'pointer', color: 'var(--text)' }} onClick={view}>📋 {t('recovery.view')}</button>
        <button className="btn-secondary" style={{ padding: '8px 16px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface)', cursor: 'pointer', color: 'var(--text)' }} onClick={regenerate}>🔄 {t('recovery.regenerate')}</button>
      </div>
      <div id="recoveryCodesStatus" style={{ fontSize: 13, color: 'var(--text-light)', marginTop: 8 }}>{t('recovery.remaining', { count })}</div>

      {modal && (
        <div className="modal active" style={{ display: 'flex' }} onClick={(e) => { if (e.target === e.currentTarget) setModal(null); }}>
          <div className="modal-content" style={{ maxWidth: 480, position: 'relative' }}>
            <span className="close" style={{ position: 'absolute', top: 12, right: 16, fontSize: 24, cursor: 'pointer', color: 'var(--text-light)' }} onClick={() => setModal(null)}>&times;</span>
            <h2 style={{ marginBottom: 12 }}>{modal.isNew ? t('recovery.newCodes') : t('recovery.title')}</h2>
            <p style={{ fontSize: 13, color: '#ef4444', marginBottom: 12 }}>{t('recovery.saveWarning')}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {modal.codes.map((c, i) => (
                <code key={i} style={{ background: 'var(--bg)', padding: '8px 12px', borderRadius: 6, fontSize: 13, textAlign: 'center', userSelect: 'all' }}>{c}</code>
              ))}
            </div>
            <button className="btn-primary" style={{ width: '100%', padding: 10, marginTop: 16 }} onClick={() => setModal(null)}>{t('recovery.saved')}</button>
          </div>
        </div>
      )}
    </div>
  );
}
