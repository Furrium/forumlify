'use client';

// 全屏加载页：初始化未完成时显示转圈，加载完成后淡出
export default function LoadingScreen({ forumName }) {
  return (
    <div className="loading-screen">
      <div className="loading-inner">
        <div className="loading-spinner" />
        <div className="loading-title">{forumName || 'Forumlify'}</div>
        <div className="loading-sub">加载中...</div>
      </div>
    </div>
  );
}
