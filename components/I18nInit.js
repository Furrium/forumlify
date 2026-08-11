'use client';

// i18n 客户端初始化（挂在 layout，hydrate 后执行）
import { useEffect } from 'react';
import { initI18n } from '@/lib/i18n';

export default function I18nInit() {
  useEffect(() => {
    initI18n();
  }, []);
  return null;
}
