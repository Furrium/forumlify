// 全局布局
import './globals.css';
import CustomCssLoader from '@/components/CustomCssLoader';
import { ToastProvider } from '@/components/Toast';

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
          document.addEventListener('DOMContentLoaded', function () {
            try {
              var n2 = localStorage.getItem('forumlify-forum-name');
              if (n2) {
                var el = document.getElementById('loadingTitle');
                if (el && !el.textContent) { el.textContent = n2; document.title = n2; }
              }
            } catch (e) {}
          });
        })();` }} />
        <ToastProvider>
          <CustomCssLoader />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
