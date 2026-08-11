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
        {/* 首帧前同步主题，避免深色模式闪白（FOUC）：手动设置优先，否则跟随系统 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              try {
                var t = localStorage.getItem('forumlify-theme');
                if (!t) {
                  t = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
                }
                document.documentElement.setAttribute('data-theme', t);
              } catch (e) {}
              // 论坛名：有缓存立即写入 <title>（第二次访问首帧即显示），无缓存保持 Loading...
              try {
                var n = localStorage.getItem('forumlify-forum-name');
                if (n) document.title = n;
              } catch (e) {}
            })();`,
          }}
        />
      </head>
      <body>
        <ToastProvider>
          <CustomCssLoader />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
