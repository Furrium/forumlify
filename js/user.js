// ============================================================
//  👤 用户主页
// ============================================================

async function renderUserProfile(username) {
  const container = document.getElementById('userProfileContent');
  container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:40px 0;">加载中...</div>';

  try {
    // 1. 获取用户信息（通过 username 参数）
    const users = await apiFetch('/users?username=' + encodeURIComponent(username));
    const user = users && users.length > 0 ? users[0] : null;

    if (!user) {
      container.innerHTML = '<div style="text-align:center;color:#ef4444;padding:40px 0;">用户不存在</div>';
      return;
    }

    document.getElementById('userPageTitle').textContent = '👤 ' + user.username;

    // 2. 获取该用户的帖子（通过 user_id 筛选）
    const posts = await apiFetch('/posts?user_id=' + user.id);

    const avatar = user.avatar_url || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.username) + '&background=6366f1&color=fff&size=128';

    let html = `
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:32px;text-align:center;">
        <img src="${avatar}" style="width:96px;height:96px;border-radius:50%;object-fit:cover;border:3px solid var(--primary);" />
        <h2 style="margin:16px 0 4px;font-size:24px;">${user.username}</h2>
        <p style="color:var(--text-secondary);font-size:14px;">${user.bio || '这个人很懒，什么都没写'}</p>
        <div style="display:flex;justify-content:center;gap:32px;margin-top:16px;font-size:14px;color:var(--text-secondary);flex-wrap:wrap;">
          <span>📅 加入于 ${user.created_at ? new Date(user.created_at).toLocaleDateString('zh-CN') : '未知'}</span>
          <span>📝 发了 ${posts.length} 个帖子</span>
          ${user.role === 'admin' ? '<span style="color:var(--primary);font-weight:600;">🛡️ 管理员</span>' : ''}
        </div>
      </div>
      <h3 style="margin:24px 0 16px;font-size:18px;">📝 发布的帖子</h3>
    `;

    if (posts.length === 0) {
      html += '<div style="color:#94a3b8;padding:20px 0;text-align:center;">还没有发帖</div>';
    } else {
      posts.forEach(p => {
        const time = p.created_at ? new Date(p.created_at).toLocaleString('zh-CN') : '';
        html += `
          <div class="post-card" style="cursor:pointer;" onclick="switchToPost('${p.id}')">
            <div class="post-title" style="font-size:16px;font-weight:600;">${p.title || '无标题'}</div>
            <div class="post-content" style="font-size:14px;color:var(--text-secondary);">${(p.content || '').substring(0, 100)}${(p.content || '').length > 100 ? '...' : ''}</div>
            <div style="font-size:12px;color:var(--text-light);margin-top:8px;">${time}</div>
          </div>
        `;
      });
    }

    container.innerHTML = html;

  } catch (err) {
    container.innerHTML = '<div style="text-align:center;color:#ef4444;padding:40px 0;">加载失败：' + err.message + '</div>';
  }
}

function showUserPage(username) {
  document.getElementById('app').style.display = 'none';
  document.querySelectorAll('.page-slide').forEach(el => {
    el.classList.remove('active', 'slide-out');
  });
  const el = document.getElementById('pageUser');
  el.classList.add('active');
  el.style.animation = 'none';
  void el.offsetHeight;
  el.style.animation = '';
  currentPage = 'user';
  renderUserProfile(username);
}
