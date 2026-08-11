'use client';

// i18n 配置：i18next + react-i18next
// - 模块顶层无条件 init（SSR Node 与客户端都执行）：SSR 输出用默认 zh，
//   与客户端初始语言一致 → 无 hydration mismatch
// - initI18n() 在客户端按 localStorage/浏览器语言切换；SSR 时 no-op
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh from '@/locales/zh.json';
import en from '@/locales/en.json';

i18n.use(initReactI18next).init({
  resources: {
    zh: { translation: zh },
    en: { translation: en },
  },
  lng: 'zh',
  fallbackLng: 'zh',
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
  // 同步初始化：SSR 渲染时 t() 立即返回翻译（否则返回 key → hydration mismatch）
  initImmediate: false,
});

// 客户端初始化：按 localStorage / 浏览器语言切换（SSR 阶段 no-op）
export function initI18n() {
  if (typeof window === 'undefined') return i18n;
  try {
    const saved = localStorage.getItem('forumlify-lang');
    const nav = (navigator.language || 'zh').toLowerCase();
    const lng = saved || (nav.startsWith('en') ? 'en' : 'zh');
    if (i18n.language !== lng) i18n.changeLanguage(lng);
  } catch (e) {}
  return i18n;
}

// 切换语言（保存到 localStorage）
export function setAppLanguage(lng) {
  if (typeof window !== 'undefined') localStorage.setItem('forumlify-lang', lng);
  return i18n.changeLanguage(lng);
}
