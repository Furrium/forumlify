'use client';

// i18n 配置：i18next + react-i18next
// - initI18n(lng?)：可传入初始语言（SSR 从 cookie/浏览器偏好推导），
//   无传入时按 localStorage > 浏览器语言 > zh 自动选择
// - 顶层模块加载时不 init（由 I18nInit 在客户端 useEffect 调用），
//   保证 SSR/客户端首次渲染语言一致 → 无 hydration mismatch
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh from '@/locales/zh.json';
import en from '@/locales/en.json';

let initialized = false;

export function initI18n(lng) {
  if (initialized) {
    // 已初始化：如果外部给了不同语言（如路由跳转后 cookie 变化）则切换
    if (lng && i18n.language !== lng) i18n.changeLanguage(lng);
    return i18n;
  }
  initialized = true;
  if (!lng && typeof window !== 'undefined') {
    const saved = localStorage.getItem('forumlify-lang');
    const nav = (navigator.language || 'zh').toLowerCase();
    lng = saved || (nav.startsWith('en') ? 'en' : 'zh');
  }
  i18n.use(initReactI18next).init({
    resources: {
      zh: { translation: zh },
      en: { translation: en },
    },
    lng: lng || 'zh',
    fallbackLng: 'zh',
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    initImmediate: false,
  });
  return i18n;
}

// 切换语言（保存到 localStorage + cookie，SSR 首帧即用正确语言）
export function setAppLanguage(lng) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('forumlify-lang', lng);
    document.cookie = 'forumlify-lang=' + lng + '; path=/; max-age=31536000';
  }
  return i18n.changeLanguage(lng);
}
