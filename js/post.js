// ============================================================
//  📄 帖子详情 + 回复
// ============================================================

let currentPostId = null;
let reportTargetPostId = null;

function switchToPost(postId) {
  const url = new URL(window.location);
  url.searchParams.set('post', postId);
  url.searchParams.delete('page');
  window.history.pushState({ page: 'post', postId: postId }, '', url);
  showPostPage(postId);
}

function showPostPage(postId) {
  document.getElementById('app').style.display = 'none';
  document.querySelectorAll('.page-slide').forEach(el => {
    el.classList.remove('active', 'slide-out');
  });
  const el = document.getElementById('pagePost');
  el.classList.add('active');
  el.style.animation = 'none';
  void el.offsetHeight;
  el.style.animation = '';
  currentPage = 'post';
  renderPostDetail(postId);
}

async function renderPostDetail(postId) {
  const container = document.getElementById('postDetailContent');
  const replyArea = document.getElementById('replyArea');
  container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:40px 0;">加载中...</div>';
  replyArea.style.display = 'none';

  try {
    const post = await API.getPost(postId);
    const replies = await API.getReplies(postId);

    document.getElementById('postDetailTitle').textContent = post.title || '帖子详情';

    const username = post.username || '匿名用户';
    const avatar = post.avatar_url ||
      'https://ui-avatars.com/api/?name=' + encodeURIComponent(username) +
      '&background=6366f1&color=fff&size=64';
    const time = post.created_at ? new Date(post.created_at).toLocaleString('zh-CN') : '';

    let imagesHtml = '';
    if (post.images && post.images.length > 0) {
      imagesHtml = '<div class="post-images">';
      post.images.forEach(img => {
        imagesHtml += '<img src="' + img + '" class="post-image" />';
      });
      imagesHtml += '</div>';
    }

    // Markdown 渲染（安全处理）
    let renderedContent = post.content || '';
    try {
      if (typeof marked !== 'undefined' && marked.parse) {
        renderedContent = marked.parse(renderedContent);
      } else {
        renderedContent = renderedContent.replace(/\n/g, '<br>');
      }
    } catch (e) {
      renderedContent = renderedContent.replace(/\n/g, '<br>');
    }

    let html = `
      <div class="post-detail-card">
        <div class="post-header">
          <img src="${avatar}" class="post-avatar" />
          <span class="post-username" style="cursor:pointer;color:var(--primary);" onclick="switchPage('user','${username}')">${username}</span>
          <span class="post-time">${time}</span>
          ${post.edited_at ? `<span style="font-size:12px;color:var(--text-light);margin-left:8px;">（已编辑 ${new Date(post.edited_at).toLocaleString('zh-CN')}）</span>` : ''}
          <div style="display:flex;gap:4px;margin-left:auto;">
            ${currentUser && currentUser.id === post.user_id ? `<button class="btn-sm btn-secondary" id="editPostBtn" data-postid="${post.id}" style="padding:4px 10px;">✏️ 编辑</button>` : ''}
            ${currentUser && currentUser.id === post.user_id ? `<button class="btn-sm btn-danger" id="detailDeleteBtn" data-postid="${post.id}" style="padding:4px 10px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              删除
            </button>` : ''}
          </div>
        </div>
        <div class="post-content" style="font-size:16px;line-height:1.8;">${renderedContent}</div>
        ${imagesHtml}
      </div>
      <div style="margin-top:20px;font-size:14px;color:#64748b;">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        ${replies.length} 条回复
      </div>
      <div style="margin-top:12px;" id="repliesList">
    `;

    if (replies.length === 0) {
      html += '<div style="color:#94a3b8;padding:20px 0;text-align:center;">还没有回复，快来抢沙发吧 🛋️</div>';
    } else {
      replies.forEach(r => {
        const rUsername = r.username || '匿名用户';
        const rAvatar = r.avatar_url ||
          'https://ui-avatars.com/api/?name=' + encodeURIComponent(rUsername) +
          '&background=6366f1&color=fff&size=64';
        const rTime = r.created_at ? new Date(r.created_at).toLocaleString('zh-CN') : '';
        html += `
          <div class="reply-item" data-replyid="${r.id}">
            <div class="reply-header">
              <img src="${rAvatar}" class="reply-avatar" />
              <span class="reply-username" style="cursor:pointer;color:var(--primary);" onclick="switchPage('user','${rUsername}')">${rUsername}</span>
              <span class="reply-time">${rTime}</span>
              ${currentUser && currentUser.id === r.user_id ? `<button class="btn-sm btn-danger reply-delete-btn" data-replyid="${r.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                删除
              </button>` : ''}
            </div>
            <div class="reply-content">${(r.content || '').replace(/\n/g, '<br>')}</div>
          </div>
        `;
      });
    }

    html += '</div>';
    container.innerHTML = html;

    replyArea.style.display = 'block';
    document.getElementById('replyContent').value = '';
    document.getElementById('replyCaptchaInput').value = '';
    refreshCaptcha('reply');

    // 编辑按钮
    const editBtn = document.getElementById('editPostBtn');
    if (editBtn) {
      editBtn.addEventListener('click', function() {
        const postId = this.dataset.postid;
        const currentTitle = post.title || '';
        const currentContent = post.content || '';
        openEditModal(postId, currentTitle, currentContent);
      });
    }

    const deleteBtn = document.getElementById('detailDeleteBtn');
    if (deleteBtn) {
      deleteBtn.addEventListener('click', function() {
        if (confirm('确定要删除这条帖子吗？')) {
          API.deletePost(postId).then(() => {
            alert('删除成功');
            switchPage('feed');
            renderFeed();
            renderStats();
          }).catch(err => alert('删除失败：' + err.message));
        }
      });
    }

    document.querySelectorAll('.reply-delete-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const replyId = this.dataset.replyid;
        if (confirm('确定要删除这条回复吗？')) {
          API.deleteReply(replyId).then(() => {
            renderPostDetail(postId);
          }).catch(err => alert('删除失败：' + err.message));
        }
      });
    });

    const replySubmit = document.getElementById('replySubmit');
    const newReplySubmit = replySubmit.cloneNode(true);
    replySubmit.parentNode.replaceChild(newReplySubmit, replySubmit);
    newReplySubmit.addEventListener('click', async function() {
      await handleReplySubmit(postId);
    });

    const replyInput = document.getElementById('replyContent');
    replyInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        handleReplySubmit(postId);
      }
    });

    currentPostId = postId;

  } catch (err) {
    container.innerHTML = '<div style="text-align:center;color:#ef4444;padding:40px 0;">加载失败：' + err.message +
      '</div>';
    replyArea.style.display = 'none';
  }
}

async function handleReplySubmit(postId) {
  if (!currentUser) { alert('请先登录'); return; }
  const content = document.getElementById('replyContent').value.trim();
  const captchaInput = document.getElementById('replyCaptchaInput').value.trim();
  const captchaAnswer = parseInt(document.getElementById('replyCaptchaInput').dataset.answer);
  if (!content) { alert('请填写回复内容'); return; }
  if (parseInt(captchaInput) !== captchaAnswer) { alert('验证码错误，请重新计算'); refreshCaptcha('reply'); return; }
  try {
    await API.createReply(postId, content);
    API.logEvent('create_reply').catch(() => {});
    renderPostDetail(postId);
    if (currentPage === 'feed') {
      renderFeed();
    }
    renderStats();
  } catch (err) {
    alert('回复失败：' + err.message);
  }
}
