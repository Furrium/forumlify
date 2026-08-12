'use client';

// 全屏加载页：初始化未完成时显示转圈，加载完成后淡出
// 论坛名：容器由 React 渲染（SSR 即有），内联脚本在 DOMContentLoaded 时
// 填充缓存名 → 首帧显示；suppressHydrationWarning 让 React 跳过该元素
// 的文本检查（保留脚本填入的内容），hydrate 后由 AppProvider 状态接管。
export default function LoadingScreen({ forumName, forumNameLoaded }) {
  return (
    <div className="loading-screen">
      <div className="loading-inner">
        <div className="loading-spinner" />
        <div className={'loading-title' + (forumNameLoaded ? ' loading-title-appear' : '')} id="loadingTitle" suppressHydrationWarning>
          {forumNameLoaded && forumName}
        </div>
        <div className="loading-sub">加载中...</div>
      </div>
    </div>
  );
}
