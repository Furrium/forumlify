// ============================================================
//  🛡️ 管理后台
// ============================================================

function renderAdminReports() {
  const container = document.getElementById('adminContent');
  container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:20px 0;">加载中...</div>';
  API.getReports().then(reports => {
    if (!reports || reports.length === 0) {
      container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:40px 0;">✅ 暂无举报</div>';
      return;
    }
    let html = '';
    const statusMap = { pending: '⏳ 待处理', approved: '✅ 已删除', rejected: '❌ 已驳回' };
    reports.forEach(r => {
      const postTitle = r.post_title || '无标题';
      html += `
        <div class="report-item">
          <div><strong>${r.reporter_name || '匿名'}</strong> 举报了帖子</div>
          <div style="font-size:13px;color:#64748b;margin:4px 0;">原因：${r.reason}</div>
          <div style="font-size:13px;color:#64748b;margin:4px 0;">帖子：${postTitle} — ${(r.post_content || '').substring(0, 30)}${(r.post_content || '').length > 30 ? '...' : ''}</div>
          <div style="font-size:13px;font-weight:600;">状态：${statusMap[r.status] || r.status}</div>
          ${r.handler_name ? `<div style="font-size:12px;color:#94a3b8;">处理人：${r.handler_name}${r.handler_note ? ' (' + r.handler_note + ')' : ''}</div>` : ''}
          ${r.status === 'pending' ? `
            <div class="report-actions">
              <button class="btn-sm btn-danger" data-reportid="${r.id}" data-action="approve">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                删除帖子
              </button>
              <button class="btn-sm btn-secondary" data-reportid="${r.id}" data-action="reject">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                驳回举报
              </button>
            </div>
          ` : ''}
        </div>
      `;
    });
    container.innerHTML = html;
    container.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', function() {
        const id = this.dataset.reportid;
        const action = this.dataset.action;
        const status = action === 'approve' ? 'approved' : 'rejected';
        const note = action === 'approve' ? '已删除违规帖子' : '举报不成立';
        if (action === 'approve' && !confirm('确定要删除该帖子并标记举报为已处理吗？')) return;
        API.updateReport(id, status, note).then(() => {
          if (action === 'approve') {
            const report = reports.find(r => r.id === id);
            if (report && report.post_id) {
              API.deletePost(report.post_id).catch(() => {});
            }
          }
          renderAdminReports();
        }).catch(err => alert('操作失败：' + err.message));
      });
    });
  }).catch(() => {
    container.innerHTML = '<div style="text-align:center;color:#ef4444;padding:20px 0;">加载失败</div>';
  });
}

function renderAdminUsers() {
  const container = document.getElementById('adminContent');
  container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:20px 0;">加载中...</div>';
  API.getUsers().then(users => {
    let html = `
      <div style="margin-bottom:12px;font-size:13px;color:#94a3b8;">
        共 <strong>${users.length}</strong> 位用户
      </div>
      <div style="overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <thead>
            <tr style="text-align:left;border-bottom:2px solid #e2e8f0;">
              <th style="padding:10px 12px;">用户</th>
              <th style="padding:10px 12px;">角色</th>
              <th style="padding:10px 12px;">注册时间</th>
              <th style="padding:10px 12px;text-align:center;">操作</th>
            </tr>
          </thead>
          <tbody>
    `;
    users.forEach(u => {
      const isAdmin = u.role === 'admin';
      const isCurrentUser = currentUser && currentUser.id === u.id;
      html += `
        <tr style="border-bottom:1px solid #f1f5f9;${isCurrentUser ? 'background:var(--primary-bg);' : ''}">
          <td style="padding:10px 12px;">
            <div style="display:flex;align-items:center;gap:8px;">
              <img src="${u.avatar_url || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(u.username) + '&background=6366f1&color=fff&size=64'}" 
                   style="width:28px;height:28px;border-radius:50%;object-fit:cover;" />
              <span style="font-weight:500;">${u.username}</span>
              ${isCurrentUser ? '<span style="font-size:11px;color:#94a3b8;background:#eef2ff;padding:1px 8px;border-radius:4px;">你</span>' : ''}
            </div>
          </td>
          <td style="padding:10px 12px;">
            <span style="display:inline-block;padding:2px 10px;border-radius:4px;font-size:12px;font-weight:500;${isAdmin ? 'background:#6366f1;color:#fff;' : 'background:#e2e8f0;color:#64748b;'}">
              ${isAdmin ? '管理员' : '普通用户'}
            </span>
          </td>
          <td style="padding:10px 12px;color:#94a3b8;font-size:13px;">${u.created_at ? new Date(u.created_at).toLocaleDateString('zh-CN') : '—'}</td>
          <td style="padding:10px 12px;text-align:center;">
            ${isCurrentUser ? 
              '<span style="font-size:12px;color:#94a3b8;">不可操作自己</span>' :
              (isAdmin ? 
                `<button class="btn-sm btn-secondary" data-userid="${u.id}" data-role="user" style="padding:4px 12px;">设为普通用户</button>` :
                `<button class="btn-sm btn-primary" data-userid="${u.id}" data-role="admin" style="padding:4px 12px;background:#6366f1;color:#fff;border:none;border-radius:4px;cursor:pointer;">设为管理员</button>`
              )
            }
          </td>
        </tr>
      `;
    });
    html += '</tbody></table></div>';
    container.innerHTML = html;

    container.querySelectorAll('[data-role]').forEach(btn => {
      btn.addEventListener('click', function() {
        const userId = this.dataset.userid;
        const role = this.dataset.role;
        const roleName = role === 'admin' ? '管理员' : '普通用户';
        if (!confirm(`确定要将该用户设为「${roleName}」吗？`)) return;
        API.updateUserRole(userId, role).then(() => {
          renderAdminUsers();
        }).catch(err => alert('操作失败：' + err.message));
      });
    });
  }).catch(() => {
    container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:40px 0;">加载失败</div>';
  });
}

function renderAdminLogs() {
  const container = document.getElementById('adminContent');
  container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:20px 0;">加载中...</div>';
  API.getEventLogs().then(logs => {
    if (!logs || logs.length === 0) {
      container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:40px 0;">暂无日志</div>';
      return;
    }
    let html =
      '<table style="width:100%;border-collapse:collapse;font-size:13px;"><thead><tr style="text-align:left;border-bottom:1px solid #e2e8f0;"><th>时间</th><th>用户</th><th>操作</th></tr></thead><tbody>';
    logs.forEach(l => {
      html += `
        <tr style="border-bottom:1px solid #f1f5f9;">
          <td style="padding:6px 0;">${new Date(l.created_at).toLocaleString('zh-CN')}</td>
          <td style="padding:6px 0;">${l.username || '系统'}</td>
          <td style="padding:6px 0;">${l.action}</td>
        </tr>
      `;
    });
    html += '</tbody></table>';
    container.innerHTML = html;
  }).catch(() => {
    container.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:40px 0;">加载失败</div>';
  });
}

function renderAdminLinks() {
  const container = document.getElementById('adminContent');
  container.innerHTML = `
    <div style="margin-bottom:16px;display:flex;gap:8px;flex-wrap:wrap;">
      <input type="text" id="newLinkTitle" placeholder="链接名称" style="flex:1;min-width:120px;padding:8px 12px;border:1px solid #e2e8f0;border-radius:4px;" />
      <input type="url" id="newLinkUrl" placeholder="链接地址" style="flex:2;min-width:160px;padding:8px 12px;border:1px solid #e2e8f0;border-radius:4px;" />
      <button id="addLinkBtn" class="btn-primary" style="padding:8px 16px;">添加</button>
    </div>
    <div id="linkList"></div>
  `;

  function loadLinks() {
    API.getLinks().then(links => {
      const ul = document.getElementById('linkList');
      if (!links || links.length === 0) {
        ul.innerHTML = '<div style="color:#94a3b8;font-size:13px;">暂无友情链接</div>';
        return;
      }
      let html = '';
      links.forEach(l => {
        html += `
          <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #f1f5f9;">
            <span><a href="${l.url}" target="_blank" style="color:#6366f1;text-decoration:none;">${l.title}</a></span>
            <button class="btn-sm btn-danger" data-linkid="${l.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              删除
            </button>
          </div>
        `;
      });
      ul.innerHTML = html;
      ul.querySelectorAll('[data-linkid]').forEach(btn => {
        btn.addEventListener('click', function() {
          if (!confirm('确定删除该链接吗？')) return;
          API.deleteLink(this.dataset.linkid).then(() => {
            loadLinks();
          }).catch(err => alert('删除失败：' + err.message));
        });
      });
    }).catch(() => {});
  }
  loadLinks();
  document.getElementById('addLinkBtn').addEventListener('click', function() {
    const title = document.getElementById('newLinkTitle').value.trim();
    const url = document.getElementById('newLinkUrl').value.trim();
    if (!title || !url) { alert('请填写完整信息'); return; }
    API.addLink(title, url).then(() => {
      document.getElementById('newLinkTitle').value = '';
      document.getElementById('newLinkUrl').value = '';
      loadLinks();
    }).catch(err => alert('添加失败：' + err.message));
  });
}

function renderAdminSettings() {
  const container = document.getElementById('adminContent');
  container.innerHTML = `
    <h3 style="margin-bottom:16px;">⚙️ 论坛设置</h3>
    <div style="max-width:400px;margin:0 auto;width:100%;">
      <label style="font-weight:600;font-size:14px;display:block;margin-bottom:6px;">论坛名称</label>
      <input type="text" id="settingsForumName" style="width:100%;padding:10px 14px;border:1.5px solid #e2e8f0;border-radius:6px;font-size:15px;margin-bottom:12px;font-family:inherit;background:var(--bg);color:var(--text);" />
      <button id="settingsForumSave" class="btn-primary" style="padding:10px 24px;">保存</button>
      <span id="settingsResult" style="margin-left:12px;font-size:14px;"></span>
    </div>
  `;

  API.getSettings().then(data => {
    document.getElementById('settingsForumName').value = data.forum_name || 'Forumlify';
  }).catch(() => {});

  document.getElementById('settingsForumSave').addEventListener('click', async () => {
    const name = document.getElementById('settingsForumName').value.trim();
    if (!name) { alert('请输入论坛名称'); return; }
    try {
      await API.updateSettings(name);
      document.getElementById('settingsResult').textContent = '✅ 保存成功！';
      document.getElementById('settingsResult').style.color = '#22c55e';
      document.getElementById('forumName').textContent = name;
      document.title = name;
      const titleEl = document.getElementById('pageTitle');
      if (titleEl) titleEl.textContent = name;
    } catch (err) {
      document.getElementById('settingsResult').textContent = '❌ 保存失败';
      document.getElementById('settingsResult').style.color = '#ef4444';
    }
  });
}

// 管理后台Tab切换
document.querySelectorAll('.admin-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    const tabMap = {
      reports: renderAdminReports,
      users: renderAdminUsers,
      logs: renderAdminLogs,
      links: renderAdminLinks,
      settings: renderAdminSettings
    };
    if (tabMap[this.dataset.tab]) tabMap[this.dataset.tab]();
  });
});