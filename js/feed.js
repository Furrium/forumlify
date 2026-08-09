// ============================================================
//  📋 帖子列表
// ============================================================

let currentSort = 'latest';

function renderFeed() {
  const container = document.getElementById('postList');
  container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:40px 0;">加载中...</div>';
  API.getPosts(currentSort).then(posts => {
    if (!posts || posts.length === 0) {
      container.innerHTML =
        '<div style="text-align:center;color:#94a3b8;padding:60px 0;">✨ 还没有帖子，快来发布第一条吧！</div>';
      return;
    }
    let html = '';
    posts.forEach(p => {
      const username = p.username || '匿名用户';
      const avatar = p.avatar_url ||
        'https://ui-avatars.com/api/?name=' + encodeURIComponent(username) +
        '&background=6366f1&color=fff&size=64';
      const time = p.created_at ? new Date(p.created_at).toLocaleString('zh-CN') : '';
      let imagesHtml = '';
      if (p.images && p.images.length > 0) {
        imagesHtml = '<div class="post-images">';
        p.images.forEach(img => {
          imagesHtml += '<img src="' + img + '" class="post-image" />';
        });
        imagesHtml += '</div>';
      }
      const replyCount = p.reply_count || 0;
      html += `
        <div class="post-card" data-postid="${p.id}" style="cursor:pointer;">
          <div class="post-header">
            <img src="${avatar}" class="post-avatar" />
            <span class="post-username" style="cursor:pointer;color:var(--primary);" onclick="event.stopPropagation();switchPage('user','${username}')">${username}</span>
            <span class="post-time">${time}</span>
          </div>
          <div class="post-title">${p.title || '无标题'}</div>
          <div class="post-content">${(p.content || '').replace(/\n/g, '<br>')}</div>
          ${imagesHtml}
          <div class="post-actions">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              ${replyCount}
            </span>
            <button class="action-report" data-postid="${p.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
              举报
            </button>
            ${currentUser && currentUser.id === p.user_id ? `<button class="action-delete" data-postid="${p.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              删除
            </button>` : ''}
          </div>
        </div>
      `;
    });
    container.innerHTML = html;

    container.querySelectorAll('.post-card').forEach(card => {
      card.addEventListener('click', function(e) {
        if (e.target.closest('button')) return;
        const postId = this.dataset.postid;
        switchToPost(postId);
      });
    });

    container.querySelectorAll('.action-report').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (!currentUser) { alert('请先登录'); return; }
        reportTargetPostId = this.dataset.postid;
        document.getElementById('reportModal').classList.add('active');
      });
    });
    container.querySelectorAll('.action-delete').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (confirm('确定要删除这条帖子吗？')) {
          API.deletePost(this.dataset.postid).then(() => {
            renderFeed();
            renderStats();
          }).catch(err => alert('删除失败：' + err.message));
        }
      });
    });
  }).catch(err => {
    container.innerHTML = '<div style="text-align:center;color:#ef4444;padding:40px 0;">加载失败：' + err.message +
      '</div>';
  });
}

function renderStats() {
  API.getStats().then(stats => {
    document.getElementById('statTopics').textContent = stats.topics || 0;
    document.getElementById('statPosts').textContent = stats.posts || 0;
    document.getElementById('statUsers').textContent = stats.users || 0;
    document.getElementById('statOnline').textContent = stats.online || 0;
  }).catch(() => {});
}

function renderLinks() {
  API.getLinks().then(links => {
    const ul = document.getElementById('friendlyLinks');
    if (!links || links.length === 0) {
      ul.innerHTML = '<li style="color:#94a3b8;font-size:13px;">暂无链接</li>';
      return;
    }
    let html = '';
    links.forEach(l => {
      html += '<li><a href="' + l.url + '" target="_blank">' + l.title + '</a></li>';
    });
    ul.innerHTML = html;
  }).catch(() => {});
}

// 排序切换
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    currentSort = this.dataset.sort;
    if (currentPage === 'feed') {
      renderFeed();
    }
  });
});
