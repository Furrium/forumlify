'use client';

// 主页客户端组件：SPA 视图调度 (feed/post/new/admin/settings/messages)
import { useState } from 'react';
import AppProvider, { useApp } from '@/components/AppProvider';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Feed from '@/components/Feed';
import PostDetail from '@/components/PostDetail';
import NewPost from '@/components/NewPost';
import AdminPage from '@/components/AdminPage';
import SettingsPage from '@/components/SettingsPage';
import UserProfile from '@/components/UserProfile';
import CustomPage from '@/components/CustomPage';
import MessagesPage from '@/components/MessagesPage';
import ChatManager from '@/components/chat/ChatManager';
import Modals from '@/components/Modals';
import LoadingScreen from '@/components/LoadingScreen';

function HomeInner() {
  const { view, currentPostId, currentPostPreview, currentUsername, currentUserPreview, currentUserPostsPreview, currentPageName, ready, forumName, forumNameLoaded } = useApp();
  const [modal, setModal] = useState(null); // null | login | register | report
  const [reportPostId, setReportPostId] = useState(null);

  const openModal = (m) => setModal(m);
  const openReport = (postId) => { setReportPostId(postId); setModal('report'); };

  // 初始化未完成：显示全屏加载页，避免未加载完的界面闪烁
  if (!ready) {
    return <LoadingScreen forumName={forumName} forumNameLoaded={forumNameLoaded} />;
  }

  return (
    <div className="app-fade-in">
      <Navbar onOpenModal={openModal} />
      <ChatManager />
      <div id="app" style={{ display: view === 'feed' ? undefined : 'none' }}>
        <Sidebar />
        <Feed onOpenModal={openModal} onReport={openReport} />
      </div>

      {/* 独立页面 */}
      <div style={{ display: view !== 'feed' ? 'block' : 'none' }}>
        {view === 'post' && currentPostId && <PostDetail postId={currentPostId} initialPost={currentPostPreview} />}
        {view === 'user' && currentUsername && <UserProfile username={currentUsername} initialUser={currentUserPreview} initialPosts={currentUserPostsPreview} />}
        {view === 'custom' && currentPageName && <CustomPage pageName={currentPageName} />}
        {view === 'new' && <NewPost />}
        {view === 'admin' && <AdminPage />}
        {view === 'settings' && <SettingsPage />}
        {view === 'messages' && <MessagesPage />}
      </div>

      <Modals modal={modal} onClose={() => setModal(null)} reportPostId={reportPostId} />
    </div>
  );
}

export default function HomeClient({ cachedName = '' }) {
  return (
    <AppProvider cachedName={cachedName}>
      <HomeInner />
    </AppProvider>
  );
}
