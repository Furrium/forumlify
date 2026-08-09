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

  // 9. 验证码刷新
  document.getElementById('postCaptchaQuestion').addEventListener('click', function() {
    refreshCaptcha('post');
  });

  // 10. 图片上传预览
  document.getElementById('imageUpload').addEventListener('change', function() {
    const preview = document.getElementById('imagePreview');
    preview.innerHTML = '';
    for (let file of this.files) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.cssText = 'width:80px;height:80px;object-fit:cover;border-radius:4px;border:1px solid #e2e8f0;';
        preview.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });

  // 11. 举报提交
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

  // 12. 模态框关闭
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

  // 13. 浏览器前进后退
  window.addEventListener('popstate', function(e) {
    const state = e.state || {};
    const page = state.page || 'feed';
    const postId = state.postId || null;
    const username = state.username || null;
    if (postId) {
      showPostPage(postId);
    } else if (username) {
      showUserPage(username);
    } else {
      switchPage(page);
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
