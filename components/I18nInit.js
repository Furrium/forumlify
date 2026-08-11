'use client';

// i18n 客户端 Provider：在 children 渲染前同步初始化 i18n
// - lng 由 Server Component（layout）从 cookie / Accept-Language 推导传入
// - 同步 init（initImmediate:false）→ SSR 与客户端首次渲染语言一致，无 hydration mismatch
import { initI18n } from '@/lib/i18n';

export default function I18nProvider({ lng, children }) {
  // 函数体在 children 渲染前执行：useTranslation 组件拿到已初始化的 i18n
  initI18n(lng);
  return <>{children}</>;
}
