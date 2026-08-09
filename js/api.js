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
