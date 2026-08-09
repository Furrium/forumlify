// 全局布局
import './globals.css';

export const metadata = {
  title: 'Forumlify',
  description: 'Forumlify - 简洁优雅的现代社区系统',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
