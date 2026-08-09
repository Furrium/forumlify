// ============================================================
//  API 请求封装
// ============================================================
let token = localStorage.getItem('forumlify-token') || null;

function apiFetch(path, options = {}) {
  const url = CONFIG.API_BASE_URL + path;
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {})
  };
  if (token) {
    headers['Authorization'] = 'Bearer ' + token;
  }
  return fetch(url, {
    ...options,
    headers
  }).then(res => res.json());
}

const API = {
  // ============================================================
  //  认证
  // ============================================================
  async login(email, password) {
    const data = await apiFetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    if (data.error) throw new Error(data.error);
    if (data.token) {
      token = data.token;
      localStorage.setItem('forumlify-token', token);
    }
    return data;
  },

  async register(email, password, username) {
    const data = await apiFetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, username })
    });
    if (data.error) throw new Error(data.error);
    return data;
  },

  async logout() {
    token = null;
    localStorage.removeItem('forumlify-token');
    currentUser = null;
  },

  async getMe() {
    const data = await apiFetch('/auth/me');
    if (data.error) throw new Error(data.error);
    return data;
  },

  // ============================================================
  //  帖子（含分页）
  // ============================================================
  async getPosts(sort, page = 1, limit = 20) {
    const data = await apiFetch('/posts?sort=' + (sort || 'latest') + '&page=' + page + '&limit=' + limit);
    if (data.error) throw new Error(data.error);
    return data;
  },

  async getPost(postId) {
    const data = await apiFetch('/posts/' + postId);
    if (data.error) throw new Error(data.error);
    return data;
  },

  async createPost(title, content, images) {
    const data = await apiFetch('/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content, images: images || [] })
    });
    if (data.error) throw new Error(data.error);
    return data;
  },

  async deletePost(postId) {
    const data = await apiFetch('/posts/' + postId, { method: 'DELETE' });
    if (data.error) throw new Error(data.error);
    return data;
  },

  // ============================================================
  //  回复
  // ============================================================
  async getReplies(postId) {
    const data = await apiFetch('/posts/' + postId + '/replies');
    if (data.error) throw new Error(data.error);
    return data || [];
  },

  async createReply(postId, content) {
    const data = await apiFetch('/posts/' + postId + '/replies', {
      method: 'POST',
      body: JSON.stringify({ content })
    });
    if (data.error) throw new Error(data.error);
    return data;
  },

  async deleteReply(replyId) {
    const data = await apiFetch('/replies/' + replyId, { method: 'DELETE' });
    if (data.error) throw new Error(data.error);
    return data;
  },

  // ============================================================
  //  用户管理
  // ============================================================
  async getUsers() {
    const data = await apiFetch('/users');
    if (data.error) throw new Error(data.error);
    return data || [];
  },

  async updateUserRole(userId, role) {
    const data = await apiFetch('/users/' + userId + '/role', {
      method: 'PUT',
      body: JSON.stringify({ role })
    });
    if (data.error) throw new Error(data.error);
    return data;
  },

  // ============================================================
  //  举报
  // ============================================================
  async getReports() {
    const data = await apiFetch('/reports');
    if (data.error) throw new Error(data.error);
    return data || [];
  },

  async createReport(postId, reason) {
    const data = await apiFetch('/reports', {
      method: 'POST',
      body: JSON.stringify({ post_id: postId, reason })
    });
    if (data.error) throw new Error(data.error);
    return data;
  },

  async updateReport(reportId, status, note) {
    const data = await apiFetch('/reports/' + reportId, {
      method: 'PUT',
      body: JSON.stringify({ status, note })
    });
    if (data.error) throw new Error(data.error);
    return data;
  },

  // ============================================================
  //  统计
  // ============================================================
  async getStats() {
    const data = await apiFetch('/stats');
    if (data.error) throw new Error(data.error);
    return data;
  },

  // ============================================================
  //  友情链接
  // ============================================================
  async getLinks() {
    const data = await apiFetch('/links');
    if (data.error) throw new Error(data.error);
    return data || [];
  },

  async addLink(title, url) {
    const data = await apiFetch('/links', {
      method: 'POST',
      body: JSON.stringify({ title, url })
    });
    if (data.error) throw new Error(data.error);
    return data;
  },

  async deleteLink(id) {
    const data = await apiFetch('/links/' + id, { method: 'DELETE' });
    if (data.error) throw new Error(data.error);
    return data;
  },

  // ============================================================
  //  事件日志
  // ============================================================
  async getEventLogs() {
    const data = await apiFetch('/event-logs');
    if (data.error) throw new Error(data.error);
    return data || [];
  },

  async logEvent(action) {
    try {
      await apiFetch('/event-logs', {
        method: 'POST',
        body: JSON.stringify({ action })
      });
    } catch (e) { /* 静默失败 */ }
  },

  // ============================================================
  //  论坛设置
  // ============================================================
  async getSettings() {
    const data = await apiFetch('/settings');
    if (data.error) throw new Error(data.error);
    return data;
  },

  async updateSettings(forum_name) {
    const data = await apiFetch('/settings', {
      method: 'PUT',
      body: JSON.stringify({ forum_name })
    });
    if (data.error) throw new Error(data.error);
    return data;
  },

  // ============================================================
  //  私信
  // ============================================================
  async getConversations() {
    const data = await apiFetch('/conversations');
    if (data.error) throw new Error(data.error);
    return data || [];
  },

  async getOrCreateConversation(other_user_id) {
    const data = await apiFetch('/conversations', {
      method: 'POST',
      body: JSON.stringify({ other_user_id })
    });
    if (data.error) throw new Error(data.error);
    return data;
  },

  async getMessages(conversationId) {
    const data = await apiFetch('/conversations/' + conversationId + '/messages');
    if (data.error) throw new Error(data.error);
    return data || [];
  },

  async sendMessage(conversationId, content) {
    const data = await apiFetch('/conversations/' + conversationId + '/messages', {
      method: 'POST',
      body: JSON.stringify({ content })
    });
    if (data.error) throw new Error(data.error);
    return data;
  },

  async markMessageRead(messageId) {
    const data = await apiFetch('/messages/' + messageId + '/read', {
      method: 'PUT'
    });
    if (data.error) throw new Error(data.error);
    return data;
  },

  // ============================================================
  //  自定义页面
  // ============================================================

  async getCustomPages() {
    const data = await apiFetch('/custom-pages');
    if (data.error) throw new Error(data.error);
    return data || [];
  },

  async getCustomPage(name) {
    const data = await apiFetch('/custom-pages/' + encodeURIComponent(name));
    if (data.error) throw new Error(data.error);
    return data;
  },

  async getAdminCustomPages() {
    const data = await apiFetch('/admin/custom-pages');
    if (data.error) throw new Error(data.error);
    return data || [];
  },

  async createCustomPage(name, title, content) {
    const data = await apiFetch('/admin/custom-pages', {
      method: 'POST',
      body: JSON.stringify({ name, title, content })
    });
    if (data.error) throw new Error(data.error);
    return data;
  },

  async updateCustomPage(id, title, content, enabled) {
    const data = await apiFetch('/admin/custom-pages/' + id, {
      method: 'PUT',
      body: JSON.stringify({ title, content, enabled })
    });
    if (data.error) throw new Error(data.error);
    return data;
  },

  async deleteCustomPage(id) {
    const data = await apiFetch('/admin/custom-pages/' + id, { method: 'DELETE' });
    if (data.error) throw new Error(data.error);
    return data;
  }
};
