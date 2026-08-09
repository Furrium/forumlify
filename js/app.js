// ============================================================
//  🚀 主入口
// ============================================================

let currentUser = null;
let currentPage = 'feed';

function renderNav() {
  const authBtns = document.getElementById('authButtons');
  const userDropdown = document.getElementById('userDropdown');
  if (currentUser) {
    authBtns.style.display = 'none';
    userDropdown.style.display = 'block';
    document.getElementById('avatarImg').src = currentUser.avatar_url ||
      'https://ui-avatars.com/api/?name=U&background=6366f1&color=fff';
    document.getElementById('adminEntry').style.display = currentUser.role === 'admin' ? 'block' : 'none';
    // 更新未读消息数
    updateUnreadBadge();
  } else {
    authBtns.style.display = 'flex';
    userDropdown.style.display = 'none';
  }
}

async function loadForumName() {
  try {
    const data = await API.getSettings();
    const name = data.forum_name || CONFIG.FORUM_NAME || 'Forumlify';
    document.getElementById('forumName').textContent = name;
    document.title = name;
    const titleEl = document.getElementById('pageTitle');
    if (titleEl) titleEl.textContent = name;
  } catch (e) {
    const name = CONFIG.FORUM_NAME || 'Forumlify';
    document.getElementById('forumName').textContent = name;
    document.title = name;
    const titleEl = document.getElementById('pageTitle');
    if (titleEl) titleEl.textContent = name;
  }
}

function switchPage(page, param) {
  const url = new URL(window.location);

  // 用户主页跳转
  if (page === 'user' && param) {
    url.searchParams.set('user', param);
    url.searchParams.delete('page');
    url.searchParams.delete('post');
    window.history.pushState({ page: 'user', username: param }, '', url);
    showUserPage(param);
    return;
  }

  // 帖子详情跳转
  if (page === 'post' && param) {
    url.searchParams.set('post', param);
    url.searchParams.delete('page');
    url.searchParams.delete('user');
    window.history.pushState({ page: 'post', postId: param }, '', url);
    showPostPage(param);
    return;
  }

  // 其他页面（feed, settings, admin, new, messages）
  if (page === 'feed') {
    url.searchParams.delete('page');
    url.searchParams.delete('post');
    url.searchParams.delete('user');
  } else {
    url.searchParams.set('page', page);
    url.searchParams.delete('post');
    url.searchParams.delete('user');
  }
  window.history.pushState({ page: page }, '', url);

  document.getElementById('app').style.display = 'none';
  document.querySelectorAll('.page-slide').forEach(el => {
    el.classList.remove('active', 'slide-out');
  });

  if (page === 'feed') {
    document.getElementById('app').style.display = 'flex';
    currentPage = 'feed';
    renderFeed();
    renderStats();
    renderLinks();
    return;
  }

  const pageMap = {
    messages: 'pageMessages',
    settings: 'pageSettings',
    admin: 'pageAdmin',
    new: 'pageNew'
  };
  const el = document.getElementById(pageMap[page]);
  if (el) {
    el.classList.add('active');
    el.style.animation = 'none';
    void el.offsetHeight;
    el.style.animation = '';
    currentPage = page;

    if (page === 'admin') {
      document.querySelectorAll('.admin-tab').forEach((t, i) => {
        t.classList.toggle('active', i === 0);
      });
      renderAdminReports();
    }
    if (page === 'settings' && currentUser) {
      document.getElementById('settingsUsername').value = currentUser.username || '';
      document.getElementById('settingsBio').value = currentUser.bio || '';
    }
    if (page === 'new') {
      document.getElementById('postTitle').value = '';
      document.getElementById('postContent').value = '';
      document.getElementById('imagePreview').innerHTML = '';
      document.getElementById('imageUpload').value = '';
      document.getElementById('postCaptchaInput').value = '';
      refreshCaptcha('post');
    }
  }
}

// ============================================================
//  ✉️ 私信系统
// ============================================================

let currentChatUserId = null;
let currentChatUsername = null;
let currentConversationId = null;
let messagePollInterval = null;

// 更新未读消息数
async function updateUnreadBadge() {
  const badge = document.getElementById('messageBadge');
  if (!badge || !currentUser) return;
  try {
    const conversations = await API.getConversations();
    const totalUnread = conversations.reduce((sum, c) => sum + (c.unread_count || 0), 0);
    if (totalUnread > 0) {
      badge.style.display = 'inline-block';
      badge.textContent = totalUnread > 99 ? '99+' : totalUnread;
    } else {
      badge.style.display = 'none';
    }
  } catch (e) {
    // 静默失败
  }
}

// 打开私信列表
function openMessageList() {
  document.getElementById('messageListModal').classList.add('active');
  renderMessageList();
}

// 关闭私信列表
function closeMessageList() {
  document.getElementById('messageListModal').classList.remove('active');
  if (messagePollInterval) {
    clearInterval(messagePollInterval);
    messagePollInterval = null;
  }
}

// 渲染私信列表
async function renderMessageList() {
  const container = document.getElementById('messageListContent');
  container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:40px 0;">加载中...</div>';

  try {
    const conversations = await API.getConversations();
    if (conversations.length === 0) {
      container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:40px 0;">暂无私信</div>';
      return;
    }
    let html = '';
    conversations.forEach(c => {
      const unread = c.unread_count || 0;
      const lastMsg = c.last_message || '暂无消息';
      const time = c.last_message_time ? new Date(c.last_message_time).toLocaleString('zh-CN') : '';
      html += `
        <div class="message-list-item" style="display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid var(--border);cursor:pointer;transition:background 0.15s;" 
             onclick="openChat('${c.id}', '${c.other_user_id}', '${c.other_username}')">
          <img src="${c.other_avatar_url || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(c.other_username) + '&background=6366f1&color=fff&size=64'}" 
               style="width:40px;height:40px;border-radius:50%;object-fit:cover;" />
          <div style="flex:1;min-width:0;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-weight:600;">${c.other_username}</span>
              <span style="font-size:12px;color:var(--text-light);">${time}</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:13px;color:var(--text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:200px;">${lastMsg}</span>
              ${unread > 0 ? `<span style="background:#ef4444;color:#fff;border-radius:50%;padding:2px 8px;font-size:11px;font-weight:600;">${unread}</span>` : ''}
            </div>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;
  } catch (err) {
    container.innerHTML = '<div style="text-align:center;color:#ef4444;padding:20px 0;">加载失败</div>';
  }
}

// 打开聊天窗口
function openChat(conversationId, otherUserId, otherUsername) {
  currentConversationId = conversationId;
  currentChatUserId = otherUserId;
  currentChatUsername = otherUsername;

  document.getElementById('chatModal').classList.add('active');
  document.getElementById('chatTitle').textContent = otherUsername;

  renderMessages(conversationId);

  if (messagePollInterval) clearInterval(messagePollInterval);
  messagePollInterval = setInterval(() => {
    if (currentConversationId) {
      renderMessages(currentConversationId, true);
    }
  }, 3000);
}

// 关闭聊天窗口
function closeChat() {
  document.getElementById('chatModal').classList.remove('active');
  if (messagePollInterval) {
    clearInterval(messagePollInterval);
    messagePollInterval = null;
  }
  currentConversationId = null;
  currentChatUserId = null;
  currentChatUsername = null;
  // 刷新未读小红点
  updateUnreadBadge();
}

// 渲染消息
async function renderMessages(conversationId, silent = false) {
  const container = document.getElementById('chatMessages');
  if (!silent) {
    container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:40px 0;">加载中...</div>';
  }

  try {
    const messages = await API.getMessages(conversationId);
    if (messages.length === 0) {
      container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:40px 0;">还没有消息，打个招呼吧 👋</div>';
      return;
    }
    let html = '';
    messages.forEach(m => {
      const isMine = m.sender_id === currentUser.id;
      const time = m.created_at ? new Date(m.created_at).toLocaleString('zh-CN') : '';
      html += `
        <div style="display:flex;${isMine ? 'justify-content:flex-end;' : 'justify-content:flex-start;'} margin-bottom:12px;">
          ${!isMine ? `<img src="${m.sender_avatar_url || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(m.sender_username) + '&background=6366f1&color=fff&size=64'}" style="width:32px;height:32px;border-radius:50%;object-fit:cover;margin-right:8px;flex-shrink:0;" />` : ''}
          <div style="max-width:70%;">
            <div style="background:${isMine ? 'var(--primary)' : 'var(--surface)'};color:${isMine ? '#fff' : 'var(--text)'};padding:10px 14px;border-radius:12px;border:${isMine ? 'none' : '1px solid var(--border)'};word-break:break-word;">
              ${m.content}
            </div>
            <div style="font-size:11px;color:var(--text-light);margin-top:4px;${isMine ? 'text-align:right;' : ''}">
              ${time} ${isMine ? (m.is_read ? '✓✓' : '✓') : ''}
            </div>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;
    container.scrollTop = container.scrollHeight;
  } catch (err) {
    if (!silent) {
      container.innerHTML = '<div style="text-align:center;color:#ef4444;padding:20px 0;">加载失败</div>';
    }
  }
}

// 发送消息
async function sendMessage() {
  const input = document.getElementById('chatInput');
  const content = input.value.trim();
  if (!content || !currentConversationId) return;

  try {
    await API.sendMessage(currentConversationId, content);
    input.value = '';
    renderMessages(currentConversationId);
    // 刷新未读小红点
    updateUnreadBadge();
    // 更新私信列表（如果有）
    if (document.getElementById('messageListModal').classList.contains('active')) {
      renderMessageList();
    }
  } catch (err) {
    alert('发送失败：' + err.message);
  }
}

// 打开私信（从用户主页调用）
async function openPrivateChat(otherUserId, otherUsername) {
  try {
    const result = await API.getOrCreateConversation(otherUserId);
    currentConversationId = result.id;
    currentChatUserId = otherUserId;
    currentChatUsername = otherUsername;

    document.getElementById('chatModal').classList.add('active');
    document.getElementById('chatTitle').textContent = otherUsername;

    renderMessages(currentConversationId);

    if (messagePollInterval) clearInterval(messagePollInterval);
    messagePollInterval = setInterval(() => {
      if (currentConversationId) {
        renderMessages(currentConversationId, true);
      }
    }, 3000);
  } catch (err) {
    alert('打开私信失败：' + err.message);
  }
}

// 绑定私信按钮事件
document.addEventListener('DOMContentLoaded', function() {
  const messageBtn = document.getElementById('messageBtn');
  if (messageBtn) {
    messageBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (!currentUser) { alert('请先登录'); return; }
      openMessageList();
    });
  }

  // 私信列表关闭按钮
  const closeMessageListBtn = document.querySelector('#messageListModal .close');
  if (closeMessageListBtn) {
    closeMessageListBtn.addEventListener('click', closeMessageList);
  }

  // 聊天关闭按钮
  const closeChatBtn = document.querySelector('#chatModal .close');
  if (closeChatBtn) {
    closeChatBtn.addEventListener('click', closeChat);
  }

  // 聊天输入框 Enter 发送
  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
    chatInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
      }
    });
  }

  // 点击模态框背景关闭
  document.querySelectorAll('.modal').forEach(m => {
    m.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('active');
        if (this.id === 'messageListModal') {
          closeMessageList();
        }
        if (this.id === 'chatModal') {
          closeChat();
        }
      }
    });
  });
});

// ============================================================
//  🚀 初始化
// ============================================================
async function init() {
  applyTheme();

  document.getElementById('forumName').textContent = CONFIG.FORUM_NAME || 'Forumlify';

  refreshCaptcha('reg');
  refreshCaptcha('post');
  refreshCaptcha('reply');

  if (token) {
    try {
      const user = await API.getMe();
      currentUser = user;
      API.logEvent('login').catch(() => {});
    } catch (e) {
      token = null;
      localStorage.removeItem('forumlify-token');
    }
  }
  renderNav();
  await loadForumName();
  renderStats();
  renderLinks();

  const urlParams = new URLSearchParams(window.location.search);
  const postParam = urlParams.get('post');
  const pageParam = urlParams.get('page');
  const userParam = urlParams.get('user');

  if (userParam) {
    showUserPage(userParam);
  } else if (postParam) {
    showPostPage(postParam);
  } else if (pageParam && ['messages', 'settings', 'admin', 'new'].includes(pageParam)) {
    if (pageParam === 'admin' && currentUser?.role !== 'admin') {
      switchPage('feed');
    } else {
      switchPage(pageParam);
    }
  } else {
    switchPage('feed');
  }

  // ============================================================
  //  绑定所有事件
  // ============================================================

  // 1. 主题切换
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleTheme(e);
      document.getElementById('dropdownMenu').classList.remove('show');
    });
  }

  // 2. 头像下拉菜单
  document.getElementById('avatarImg').addEventListener('click', function(e) {
    e.stopPropagation();
    document.getElementById('dropdownMenu').classList.toggle('show');
  });
  document.addEventListener('click', function() {
    document.getElementById('dropdownMenu').classList.remove('show');
  });

  // 3. 导航菜单页面切换
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.dataset.page;
      if (page === 'admin' && currentUser?.role !== 'admin') {
        alert('无权限访问');
        return;
      }
      document.getElementById('dropdownMenu').classList.remove('show');
      switchPage(page);
    });
  });

  // 4. 返回按钮
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      switchPage('feed');
    });
  });

  // 5. 设置保存
  document.getElementById('settingsSave').addEventListener('click', async () => {
    if (!currentUser) { alert('请先登录'); return; }
    const username = document.getElementById('settingsUsername').value.trim();
    const bio = document.getElementById('settingsBio').value.trim();
    if (!username) { alert('用户名不能为空'); return; }
    try {
      const data = await apiFetch('/users/' + currentUser.id, {
        method: 'PUT',
        body: JSON.stringify({ username, bio })
      });
      if (data.error) throw new Error(data.error);
      currentUser.username = username;
      currentUser.bio = bio;
      alert('保存成功！');
      renderNav();
      if (currentPage === 'feed') {
        renderFeed();
      }
    } catch (err) {
      alert('保存失败：' + err.message);
    }
  });

  // 6. 点击论坛名回首页
  document.getElementById('forumName').addEventListener('click', function() {
    switchPage('feed');
  });

  // 7. 发帖按钮
  document.getElementById('fab').addEventListener('click', () => {
    if (!currentUser) { alert('请先登录'); return; }
    switchPage('new');
  });

  // 8. 发帖提交
  document.getElementById('postSubmit').addEventListener('click', async () => {
    if (!currentUser || !currentUser.id) {
      alert('请先登录');
      switchPage('feed');
      return;
    }
    const title = document.getElementById('postTitle').value.trim() || '无标题';
    const content = document.getElementById('postContent').value.trim();
    const captchaInput = document.getElementById('postCaptchaInput').value.trim();
    const captchaAnswer = parseInt(document.getElementById('postCaptchaInput').dataset.answer);
    if (!content) { alert('请填写内容'); return; }
    if (parseInt(captchaInput) !== captchaAnswer) { alert('
