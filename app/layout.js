// 全局布局
import './globals.css';
import CustomCssLoader from '@/components/CustomCssLoader';

export const metadata = {
  // 初始标题由客户端 AppProvider 接管（加载时轮换 Loading.，完成后显示论坛名）
  title: 'Loading...',
  description: 'Forumlify - 简洁优雅的现代社区系统',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <CustomCssLoader />
        {children}
      </body>
    </html>
  );
}
