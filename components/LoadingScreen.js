'use client';

// 全屏加载页：初始化未完成时显示转圈，加载完成后淡出
// - 名字容器总是渲染（空）：layout.js 内联脚本会在 DOMContentLoaded（早于
//   React hydrate）时把缓存的论坛名填入，实现二次访问首帧即显示名字
// - 首次访问无缓存：由 React 在收到服务器论坛名后淡入显示
export default function LoadingScreen({ forumName, forumNameLoaded }) {
  return (
    <div className="loading-screen">
      <div className="loading-inner">
        <div className="loading-spinner" />
        {/* suppressHydrationWarning: 内联脚本会在 hydrate 前填入缓存名，
            避免 React 检测到文本不匹配而重写 DOM（名字二次出现/转圈重启） */}
        <div className="loading-title loading-title-appear" id="loadingTitle" suppressHydrationWarning>
          {forumNameLoaded && forumName}
        </div>
        <div className="loading-sub">加载中...</div>
      </div>
    </div>
  );
}
