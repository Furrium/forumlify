// ============================================================
//  🚀 主入口
// ============================================================

let currentUser = null;
let currentPage = 'feed';
let currentPageNum = 1;

function renderNav() {
  const authBtns = document.getElementById('authButtons');
  const userDropdown = document.getElementById('userDropdown');
  if (currentUser) {
    authBtns.style.display = 'none';
    userDropdown.style.display = 'block';
    document.getElementById('avatarImg').src = currentUser.avatar_url ||
      'https://ui-avatars.com/api/?name=U&background=6366f1&color=fff';
    document.getElementById('adminEntry').style.display = currentUser.role === 'admin' ? 'block' : 'none';
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

  if (page === 'user' && param) {
    url.searchParams.set('user', param);
    url.searchParams.delete('page');
    url.searchParams.delete('post');
    window.history.pushState({ page: 'user', username: param }, '', url);
    showUserPage(param);
    return;
  }

  if (page === 'post' && param) {
    url.searchParams.set('post', param);
    url.searchParams.delete('page');
    url.searchParams.delete('user');
    window.history.pushState({ page: 'post', postId: param }, '', url);
    showPostPage(param);
    return;
  }

  if (page === 'custom' && param) {
    url.searchParams.set('custom', param);
    url.searchParams.delete('page');
    url.searchParams.delete('post');
    url.searchParams.delete('user');
    window.history.pushState({ page: 'custom', custom: param }, '', url);
    showCustomPage(param);
    return;
  }

  if (page === 'feed') {
    url.searchParams.delete('page');
    url.searchParams.delete('post');
    url.searchParams.delete('user');
    url.searchParams.delete('custom');
  } else {
    url.searchParams.set('page', page);
    url.searchParams.delete('post');
    url.searchParams.delete('user');
    url.searchParams.delete('custom');
  }
  window.history.pushState({ page: page }, '', url);

  document.getElementById('app').style.display = 'none';
  document.querySelectorAll('.page-slide').forEach(el => {
    el.classList.remove('active', 'slide-out');
  });

  const customContainer = document.getElementById('customPageContainer');
  if (customContainer) {
    customContainer.classList.remove('active');
    customContainer.style.display = 'none';
  }

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
      document.getElementById('fileInput').value = '';
      document.getElementById('postCaptchaInput').value = '';
      refreshCaptcha('post');
      const dropText = document.getElementById('dropZoneText');
      if (dropText) dropText.textContent = '点击或拖拽上传图片';
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
  } catch (e) {}
}

function openMessageList() {
  document.getElementById('messageListModal').classList.add('active');
  renderMessageList();
}

function closeMessageList() {
  document.getElementById('messageListModal').classList.remove('active');
  if (messagePollInterval) {
    clearInterval(messagePollInterval);
    messagePollInterval = null;
  }
}

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

function closeChat() {
  document.getElementById('chatModal').classList.remove('active');
  if (messagePollInterval) {
    clearInterval(messagePollInterval);
    messagePollInterval = null;
  }
  currentConversationId = null;
  currentChatUserId = null;
  currentChatUsername = null;
  updateUnreadBadge();
}

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

async function sendMessage() {
  const input = document.getElementById('chatInput');
  const content = input.value.trim();
  if (!content || !currentConversationId) return;

  try {
    await API.sendMessage(currentConversationId, content);
    input.value = '';
    renderMessages(currentConversationId);
    updateUnreadBadge();
    if (document.getElementById('messageListModal').classList.contains('active')) {
      renderMessageList();
    }
  } catch (err) {
    alert('发送失败：' + err.message);
  }
}

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

// ============================================================
//  📸 图片上传（拖拽上传）
// ============================================================

function handleImageFiles(files) {
  const preview = document.getElementById('imagePreview');
  if (!preview) return;
  for (let file of files) {
    if (!file.type.startsWith('image/')) continue;
    if (file.size > 5 * 1024 * 1024) {
      alert('图片 ' + file.name + ' 超过 5MB，请压缩后上传');
      continue;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.cssText = 'width:80px;height:80px;object-fit:cover;border-radius:4px;border:1px solid var(--border);';
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
  const fileInput = document.getElementById('fileInput');
  if (fileInput) fileInput.value = '';
}

// ============================================================
//  📄 自定义页面导航
// ============================================================

let customPagesNav = [];

async function loadCustomPagesNav() {
  try {
    const pages = await API.getCustomPages();
    customPagesNav = pages;
    renderCustomPagesNav();
  } catch (e) {
    customPagesNav = [];
  }
}

function renderCustomPagesNav() {
  const container = document.getElementById('customNavLinks');
  if (!container) return;
  container.innerHTML = '';

  customPagesNav.forEach(page => {
    const link = document.createElement('a');
    link.href = '#';
    link.dataset.custom = page.name;
    link.textContent = page.title;
    link.style.cssText = 'color:var(--text-secondary);text-decoration:none;font-size:14px;padding:4px 10px;border-radius:4px;transition:color 0.15s;';
    link.addEventListener('mouseenter', function() {
      this.style.color = 'var(--text)';
    });
    link.addEventListener('mouseleave', function() {
      this.style.color = 'var(--text-secondary)';
    });
    link.addEventListener('click', function(e) {
      e.preventDefault();
      switchPage('custom', page.name);
    });
    container.appendChild(link);
  });
}

// ============================================================
//  📄 自定义页面渲染
// ============================================================

function showCustomPage(pageName) {
  document.getElementById('app').style.display = 'none';
  document.querySelectorAll('.page-slide').forEach(el => {
    el.classList.remove('active', 'slide-out');
  });

  let container = document.getElementById('customPageContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'customPageContainer';
    container.className = 'page-slide';
    container.style.cssText = 'display:none;position:fixed;inset:0;background:var(--bg);z-index:50;padding:84px 32px 40px;overflow-y:auto;transition:background 0.2s;';
    document.body.appendChild(container);
  }

  container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:40px 0;">加载中...</div>';
  container.classList.add('active');
  container.style.display = 'block';
  currentPage = 'custom';

  API.getCustomPage(pageName).then(page => {
    const iframe = document.createElement('iframe');
    iframe.style.cssText = 'width:100%;min-height:70vh;border:none;border-radius:8px;background:var(--surface);';
    iframe.sandbox = 'allow-scripts allow-modals allow-same-origin';
    iframe.srcdoc = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            padding: 24px;
            background: var(--bg, #f6f8fc);
            color: var(--text, #0a0e1a);
          }
          @media (prefers-color-scheme: dark) {
            body { background: #0f1117; color: #e8edf5; }
          }
        </style>
        ${page.content}
      </head>
      <body></body>
      </html>
    `;
    container.innerHTML = '';
    container.appendChild(iframe);

    document.querySelectorAll('.custom-page-nav-link').forEach(el => {
      el.style.color = el.dataset.custom === pageName ? 'var(--primary)' : 'var(--text-secondary)';
    });
  }).catch(err => {
    container.innerHTML = '<div style="text-align:center;color:#ef4444;padding:40px 0;">页面加载失败：' + err.message + '</div>';
  });
}

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
  await loadCustomPagesNav();
  renderStats();
  renderLinks();

  const urlParams = new URLSearchParams(window.location.search);
  const postParam = urlParams.get('post');
  const pageParam = urlParams.get('page');
  const userParam = urlParams.get('user');
  const postPageParam = urlParams.get('postpage');
  const customParam = urlParams.get('custom');

  if (postPageParam) {
    currentPageNum = parseInt(postPageParam) || 1;
  }

  if (customParam) {
    showCustomPage(customParam);
  } else if (userParam) {
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

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleTheme(e);
      document.getElementById('dropdownMenu').classList.remove('show');
    });
  }

  document.getElementById('avatarImg').addEventListener('click', function(e) {
    e.stopPropagation();
    document.getElementById('dropdownMenu').classList.toggle('show');
  });
  document.addEventListener('click', function() {
    document.getElementById('dropdownMenu').classList.remove('show');
  });

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

  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      switchPage('feed');
    });
  });

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

  document.getElementById('forumName').addEventListener('click', function() {
    switchPage('feed');
  });

  document.getElementById('fab').addEventListener('click', () => {
    if (!currentUser) { alert('请先登录'); return; }
    switchPage('new');
  });

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
    if (parseInt(captchaInput) !== captchaAnswer) { alert('验证码错误，请重新计算'); refreshCaptcha('post'); return; }
    const images = [];
    document.querySelectorAll('#imagePreview img').forEach(img => {
      images.push(img.src);
    });
    try {
      await API.createPost(title, content, images);
      API.logEvent('create_post').catch(() => {});
      alert('发布成功！');
      switchPage('feed');
      renderFeed();
      renderStats();
    } catch (err) {
      alert('发布失败：' + err.message);
    }
  });

  document.getElementById('postCaptchaQuestion').addEventListener('click', function() {
    refreshCaptcha('post');
  });
  document.getElementById('regCaptchaQuestion').addEventListener('click', function() {
    refreshCaptcha('reg');
  });

  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput');
  const dropZoneText = document.getElementById('dropZoneText');

  if (dropZone && fileInput) {
    dropZone.addEventListener('click', function() {
      fileInput.click();
    });

    fileInput.addEventListener('change', function() {
      handleImageFiles(this.files);
    });

    dropZone.addEventListener('dragover', function(e) {
      e.preventDefault();
      this.style.borderColor = 'var(--primary)';
      this.style.background = 'var(--primary-bg)';
      if (dropZoneText) dropZoneText.textContent = '松开上传';
    });

    dropZone.addEventListener('dragleave', function(e) {
      e.preventDefault();
      this.style.borderColor = 'var(--border)';
      this.style.background = 'var(--bg)';
      if (dropZoneText) dropZoneText.textContent = '点击或拖拽上传图片';
    });

    dropZone.addEventListener('drop', function(e) {
      e.preventDefault();
      this.style.borderColor = 'var(--border)';
      this.style.background = 'var(--bg)';
      if (dropZoneText) dropZoneText.textContent = '点击或拖拽上传图片';
      handleImageFiles(e.dataTransfer.files);
    });
  }

  document.getElementById('reportSubmit').addEventListener('click', async () => {
    if (!reportTargetPostId) return;
    const reason = document.getElementById('reportReason').value;
    try {
      await API.createReport(reportTargetPostId, reason);
      document.getElementById('reportModal').classList.remove('active');
      alert('举报已提交，管理员将尽快处理');
      reportTargetPostId = null;
    } catch (err) {
      alert('举报失败：' + err.message);
    }
  });

  document.querySelectorAll('.modal .close').forEach(btn => {
    btn.addEventListener('click', function() {
      document.getElementById(this.dataset.modal).classList.remove('active');
    });
  });
  document.querySelectorAll('.modal').forEach(m => {
    m.addEventListener('click', function(e) {
      if (e.target === this) this.classList.remove('active');
    });
  });

  window.addEventListener('popstate', function(e) {
    const state = e.state || {};
    const page = state.page || 'feed';
    const postId = state.postId || null;
    const username = state.username || null;
    const custom = state.custom || null;
    if (postId) {
      showPostPage(postId);
    } else if (username) {
      showUserPage(username);
    } else if (custom) {
      showCustomPage(custom);
    } else {
      switchPage(page);
    }
  });

  const messageBtn = document.getElementById('messageBtn');
  if (messageBtn) {
    const newBtn = messageBtn.cloneNode(true);
    messageBtn.parentNode.replaceChild(newBtn, messageBtn);
    newBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (!currentUser) { alert('请先登录'); return; }
      openMessageList();
    });
  }

  const closeMessageListBtn = document.querySelector('#messageListModal .close');
  if (closeMessageListBtn) {
    closeMessageListBtn.addEventListener('click', closeMessageList);
  }

  const closeChatBtn = document.querySelector('#chatModal .close');
  if (closeChatBtn) {
    closeChatBtn.addEventListener('click', closeChat);
  }

  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
    chatInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
      }
    });
  }

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
}

document.addEventListener('DOMContentLoaded', init);
