'use client';

// 全屏加载页：初始化未完成时显示转圈，加载完成后淡出
// - 未收到论坛名时：只显示 spinner，不显示名字/图标
// - 收到论坛名后：名字在原位置渐渐淡入出现
export default function LoadingScreen({ forumName, forumNameLoaded }) {
  return (
    <div className="loading-screen">
      <div className="loading-inner">
        <div className="loading-spinner" />
        {forumNameLoaded && forumName && (
          <div className="loading-title loading-title-appear">{forumName}</div>
        )}
        <div className="loading-sub">加载中...</div>
      </div>
    </div>
  );
}
