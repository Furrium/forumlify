'use client';

// 全屏加载页：初始化未完成时显示转圈，加载完成后淡出
// - 名字容器用 dangerouslySetInnerHTML（空）：React 完全不管理其文本内容，
//   内联脚本（body 首个子元素，DOMContentLoaded）填入缓存名后不会被 React
//   检测/重写 → 无 hydration mismatch，加载圈不会重启，名字不会二次出现
export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-inner">
        <div className="loading-spinner" />
        <div className="loading-title loading-title-appear" id="loadingTitle" dangerouslySetInnerHTML={{ __html: '' }} />
        <div className="loading-sub">加载中...</div>
      </div>
    </div>
  );
}
