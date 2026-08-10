'use client';

// 全屏加载页：初始化未完成时显示转圈，加载完成后淡出
// 注意：不显示论坛名——初始化时论坛名可能尚未从服务器加载，
// 显示默认名会造成"Forumlify 一闪而过"的体验问题。
export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-inner">
        <div className="loading-logo" aria-hidden="true">🌊</div>
        <div className="loading-spinner" />
        <div className="loading-sub">加载中...</div>
      </div>
    </div>
  );
}
