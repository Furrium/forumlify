'use client';

// 主页：SPA 视图调度 (feed/post/new/admin/settings/messages)
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

function HomeInner() {
  const { view, currentPostId, currentUsername, currentPageName } = useApp();
  const [modal, setModal] = useState(null); // null | login | register | report
  const [reportPostId, setReportPostId] = useState(null);

  const openModal = (m) => setModal(m);
  const openReport = (postId) => { setReportPostId(postId); setModal('report'); };

  return (
    <>
      <Navbar onOpenModal={openModal} />
      <ChatManager />

      <div id="app" style={{ display: view === 'feed' ? 'flex' : 'none' }}>
        <Sidebar />
        <Feed onOpenModal={openModal} onReport={openReport} />
      </div>

      {/* 独立页面 */}
      <div style={{ display: view !== 'feed' ? 'block' : 'none' }}>
        {view === 'post' && currentPostId && <PostDetail postId={currentPostId} />}
        {view === 'user' && currentUsername && <UserProfile username={currentUsername} />}
        {view === 'custom' && currentPageName && <CustomPage pageName={currentPageName} />}
        {view === 'new' && <NewPost />}
        {view === 'admin' && <AdminPage />}
        {view === 'settings' && <SettingsPage />}
        {view === 'messages' && <MessagesPage />}
      </div>

      <Modals modal={modal} onClose={() => setModal(null)} reportPostId={reportPostId} />
    </>
  );
}

export default function Home() {
  return (
    <AppProvider>
      <HomeInner />
    </AppProvider>
  );
}
