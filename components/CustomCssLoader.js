'use client';

// 加载自定义 CSS（管理员上传的 style.css，覆盖默认样式）
import { useEffect } from 'react';

export default function CustomCssLoader() {
  useEffect(() => {
    // 尝试加载 /api/custom-css；404 表示未设置，静默跳过
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/api/custom-css';
    link.id = 'custom-css-link';
    document.head.appendChild(link);
  }, []);

  return null;
}
