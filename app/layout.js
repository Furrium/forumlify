// 全局布局
import './globals.css';
import { cookies, headers } from 'next/headers';
import CustomCssLoader from '@/components/CustomCssLoader';
import { ToastProvider } from '@/components/Toast';
import I18nInit from '@/components/I18nInit';

export const metadata = {
  // 初始标题用默认论坛名（AppProvider 加载期轮换 Loading.，完成后覆盖为真实名）。
  // 注意：不能设 'Loading...' —— Next.js 客户端重渲染会重置 <title> 为 metadata 值，
  // 导致加载完成后标题又变回 "Loading..."。
  title: 'Forumlify',
  description: 'Forumlify - 简洁优雅的现代社区系统',
};

// cookies()/headers() 是动态 API：禁止静态优化
export const dynamic = 'force-dynamic';

export default async function RootLayout({ children }) {
  // 语言检测：用户配置 cookie 优先，否则按浏览器 Accept-Language
  let lng = 'zh';
  try {
    const cookieStore = await cookies();
    const saved = cookieStore.get('forumlify-lang')?.value;
    if (saved === 'en' || saved === 'zh') {
      lng = saved;
    } else {
      const hdrs = await headers();
      const accept = (hdrs.get('accept-language') || '').toLowerCase();
      if (accept.startsWith('en')) lng = 'en';
    }
  } catch (e) { /* 默认 zh */ }

  return (
    <html lang={lng === 'en' ? 'en' : 'zh-CN'} suppressHydrationWarning>
      <head>
      </head>
      <body>
        {/* 首帧初始化（主题防 FOUC + 论坛名首帧显示）：
            script 放 body 首个子元素（children 前），React 官方防 FOUC 模式 */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){
          try {
            var t = localStorage.getItem('forumlify-theme');
            if (!t) { t = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'; }
            document.documentElement.setAttribute('data-theme', t);
          } catch (e) {}
          try { var n = localStorage.getItem('forumlify-forum-name'); if (n) document.title = n; } catch (e) {}
          // 加载页论坛名不再由脚本注入 DOM——由 Server Component 读 cookie 首帧输出，
          // React 状态渲染，SSR/客户端一致，无 hydration mismatch
        })();` }} />
        <ToastProvider>
          <I18nInit lng={lng} />
          <CustomCssLoader />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
