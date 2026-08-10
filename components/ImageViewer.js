'use client';

// 图片查看器（点击帖子图片放大）
import { useEffect } from 'react';

export default function ImageViewer({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="modal active"
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', animation: 'fadeIn 0.2s ease-out',
      }}
      onClick={onClose}
    >
      <img
        src={src}
        alt=""
        style={{
          maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain',
          borderRadius: 8, boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          cursor: 'default', userSelect: 'none',
        }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
