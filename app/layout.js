// 全局布局
import './globals.css';
import CustomCssLoader from '@/components/CustomCssLoader';
import { ToastProvider } from '@/components/Toast';
import I18nInit from '@/components/I18nInit';

export const metadata = {
  // 初始标题由客户端 AppProvider 接管（加载时轮换 Loading.，完成后显示论坛名）
  title: 'Loading...',
  description: 'Forumlify - 简洁优雅的现代社区系统',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
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
          <I18nInit />
          <CustomCssLoader />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
