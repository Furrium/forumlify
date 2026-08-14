// ============================================================
//  Forumlify 后端服务
//  一个文件搞定所有 API + 文件服务
// ============================================================

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { rateLimit } = require('express-rate-limit');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const app = express();

// 服务端配置（config.js，浏览器端加载同名文件但不影响服务端）
const CONFIG = require('./config');

// 监听端口：环境变量 PORT 优先，其次 config.js 的 SERVER_PORT，最后默认 3000
const PORT = process.env.PORT || CONFIG.SERVER_PORT || 3000;
const DEFAULT_JWT_SECRET = 'forumlify-secret-key-change-me-in-production';
const JWT_SECRET = process.env.JWT_SECRET || DEFAULT_JWT_SECRET;

if (process.env.NODE_ENV === 'production') {
  if (JWT_SECRET === DEFAULT_JWT_SECRET || JWT_SECRET.length < 32) {
    throw new Error('JWT_SECRET must contain at least 32 unique characters in production');
  }
  if (!process.env.DATABASE_URL && !process.env.PGHOST) {
    throw new Error('DATABASE_URL or PGHOST must be configured in production');
  }
}

// ============================================================
//  数据库
// ============================================================
const pool = new Pool(process.env.DATABASE_URL
  ? { connectionString: process.env.DATABASE_URL }
  : {
      host: process.env.PGHOST || 'localhost',
      port: Number(process.env.PGPORT || 5432),
      user: process.env.PGUSER || 'forumlify',
      password: process.env.PGPASSWORD || '123456',
      database: process.env.PGDATABASE || 'forumlify',
    });

// ============================================================
//  中间件
// ============================================================
app.disable('x-powered-by');
if (process.env.TRUST_PROXY === 'true') app.set('trust proxy', 1);

// The existing UI relies on inline styles/scripts and a CDN-hosted Markdown
// parser, so CSP is left for a dedicated frontend migration.
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}));

const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map(origin => origin.trim())
  .filter(Boolean);
if (allowedOrigins.length > 0) {
  app.use(cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error('Origin is not allowed by CORS'));
    },
  }));
}

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 300,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  handler: (req, res) => res.status(429).json({ error: '请求过于频繁，请稍后重试' }),
});
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  handler: (req, res) => res.status(429).json({ error: '尝试次数过多，请稍后重试' }),
});

app.use('/api', apiLimiter);
app.use(['/api/auth/login', '/api/auth/register', '/api/auth/reset-password'], authLimiter);
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

const AUDIT_ACTIONS = new Map([
  ['POST /api/auth/register', 'register'],
  ['POST /api/auth/login', 'login'],
  ['PUT /api/settings', 'update_settings'],
  ['PUT /api/users/:id/role', 'update_user_role'],
  ['PUT /api/users/:id', 'update_profile'],
  ['PUT /api/users/:id/avatar', 'update_avatar'],
  ['PUT /api/users/:id/password', 'change_password'],
  ['PUT /api/users/:id/email', 'change_email'],
  ['POST /api/posts', 'create_post'],
  ['PUT /api/posts/:id', 'update_post'],
  ['DELETE /api/posts/:id', 'delete_post'],
  ['PUT /api/posts/:id/pin', 'toggle_post_pin'],
  ['POST /api/posts/:id/replies', 'create_reply'],
  ['DELETE /api/replies/:id', 'delete_reply'],
  ['POST /api/reports', 'create_report'],
  ['PUT /api/reports/:id', 'handle_report'],
  ['POST /api/links', 'create_link'],
  ['DELETE /api/links/:id', 'delete_link'],
  ['POST /api/upload', 'upload_image'],
  ['POST /api/admin/custom-css', 'upload_custom_css'],
  ['DELETE /api/admin/custom-css', 'delete_custom_css'],
  ['POST /api/conversations', 'create_conversation'],
  ['POST /api/conversations/:id/messages', 'send_message'],
  ['POST /api/admin/custom-pages', 'create_custom_page'],
  ['PUT /api/admin/custom-pages/:id', 'update_custom_page'],
  ['DELETE /api/admin/custom-pages/:id', 'delete_custom_page'],
  ['POST /api/auth/recovery-codes/generate', 'rotate_recovery_codes'],
  ['POST /api/auth/reset-password', 'reset_password'],
]);

function auditMetadata(req) {
  const metadata = {};
  for (const [key, value] of Object.entries(req.params || {})) {
    if (typeof value === 'string' && value.length <= 100) metadata[key] = value;
  }
  for (const key of ['post_id', 'other_user_id', 'role', 'status']) {
    const value = req.body?.[key];
    if (typeof value === 'string' && value.length <= 100) metadata[key] = value;
  }
  return { ...metadata, ...(req.auditMetadata || {}) };
}

app.use((req, res, next) => {
  res.on('finish', () => {
    if (res.statusCode < 200 || res.statusCode >= 300 || !req.route?.path) return;
    const routePath = Array.isArray(req.route.path) ? req.route.path[0] : req.route.path;
    const action = AUDIT_ACTIONS.get(`${req.method} ${routePath}`);
    if (!action) return;

    const userId = req.auditUserId || req.user?.id || null;
    const ip = String(req.ip || req.socket?.remoteAddress || '').slice(0, 45);
    const userAgent = String(req.get('user-agent') || '').slice(0, 1000);
    pool.query(
      `INSERT INTO event_logs (user_id, action, ip, method, path, user_agent, metadata)
       VALUES ($1, $2, $3, $4, $5, $6, $7::jsonb)`,
      [userId, action, ip, req.method, req.originalUrl.slice(0, 2000), userAgent, JSON.stringify(auditMetadata(req))]
    ).catch(error => console.error('Failed to write audit log:', error));
  });
  next();
});

// 确保上传目录存在
if (!fs.existsSync('uploads')) fs.mkdirSync('uploads');
app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {
  dotfiles: 'deny',
  fallthrough: false,
  index: false,
}));

// ============================================================
//  认证中间件
// ============================================================
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: '请先登录' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: '登录已过期，请重新登录' });
  }
};

const admin = async (req, res, next) => {
  try {
    const r = await pool.query('SELECT role FROM users WHERE id = $1', [req.user.id]);
    if (r.rows[0]?.role !== 'admin') {
      return res.status(403).json({ error: '需要管理员权限' });
    }
    next();
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
};

// ============================================================
//  创建通知（内部函数）
// ============================================================
async function createNotification(userId, type, title, content, link = null) {
  try {
    await pool.query(
      'INSERT INTO notifications (user_id, type, title, content, link) VALUES ($1, $2, $3, $4, $5)',
      [userId, type, title, content, link]
    );
  } catch (err) {
    // 静默失败，不影响主流程
  }
}

// ============================================================
//  论坛设置接口
// ============================================================

// 获取论坛设置（公开）
app.get('/api/settings', async (req, res) => {
  try {
    const r = await pool.query('SELECT key, value FROM settings');
    const settings = {};
    r.rows.forEach(row => { settings[row.key] = row.value; });
    res.json(settings);
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 更新论坛设置（管理员）
app.put('/api/settings', auth, admin, async (req, res) => {
  const { forum_name } = req.body;
  if (!forum_name || forum_name.trim().length === 0) {
    return res.status(400).json({ error: '论坛名称不能为空' });
  }
  try {
    await pool.query(
      `INSERT INTO settings (key, value) VALUES ($1, $2)
       ON CONFLICT (key) DO UPDATE SET value = $2, updated_at = NOW()`,
      ['forum_name', forum_name.trim()]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: '更新失败，请稍后重试' });
  }
});

// ============================================================
//  认证接口
// ============================================================

function secureTokenMatch(provided, expected) {
  if (!provided || !expected) return false;
  const providedBuffer = Buffer.from(String(provided));
  const expectedBuffer = Buffer.from(String(expected));
  return providedBuffer.length === expectedBuffer.length &&
    crypto.timingSafeEqual(providedBuffer, expectedBuffer);
}

// 注册；管理员只能使用部署时配置的一次性引导令牌创建
app.post('/api/auth/register', async (req, res) => {
  const { email, password, username, bootstrap_token } = req.body;

  if (!email || !password || !username) {
    return res.status(400).json({ error: '请填写完整信息' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: '密码至少6位' });
  }

  const hash = await bcrypt.hash(password, 10);
  const avatar = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username) + '&background=6366f1&color=fff&size=64';
  let client;
  try {
    client = await pool.connect();
    await client.query('BEGIN');
    await client.query("SELECT pg_advisory_xact_lock(hashtext('forumlify-admin-bootstrap'))");
    const adminResult = await client.query("SELECT EXISTS(SELECT 1 FROM users WHERE role = 'admin') AS exists");
    const hasAdmin = adminResult.rows[0].exists;
    const requestedBootstrap = Boolean(bootstrap_token);
    const validBootstrap = secureTokenMatch(bootstrap_token, process.env.ADMIN_BOOTSTRAP_TOKEN);

    if (requestedBootstrap && !validBootstrap) {
      await client.query('ROLLBACK');
      return res.status(403).json({ error: '管理员初始化令牌无效' });
    }
    if (validBootstrap && hasAdmin) {
      await client.query('ROLLBACK');
      return res.status(409).json({ error: '管理员已初始化' });
    }

    const role = validBootstrap && !hasAdmin ? 'admin' : 'user';
    const r = await client.query(
      `INSERT INTO users (email, password_hash, username, avatar_url, role, signature)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, username, avatar_url, role, signature, created_at`,
      [email, hash, username, avatar, role, '']
    );
    await client.query('COMMIT');

    req.auditUserId = r.rows[0].id;
    req.auditMetadata = { role: r.rows[0].role };

    res.json({
      user: r.rows[0],
      message: role === 'admin' ? '管理员初始化成功' : '注册成功'
    });
  } catch (err) {
    if (client) await client.query('ROLLBACK').catch(() => {});
    if (err.code === '23505') {
      res.status(400).json({ error: '邮箱或用户名已被注册' });
    } else {
      res.status(500).json({ error: '注册失败，请稍后重试' });
    }
  } finally {
    if (client) client.release();
  }
});

// 登录
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: '请填写邮箱和密码' });
  }

  try {
    const r = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = r.rows[0];

    if (!user) {
      return res.status(401).json({ error: '邮箱或密码错误' });
    }

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
      return res.status(401).json({ error: '邮箱或密码错误' });
    }

    req.auditUserId = user.id;

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        avatar_url: user.avatar_url,
        bio: user.bio,
        role: user.role,
        signature: user.signature || '',
      }
    });
  } catch (err) {
    res.status(500).json({ error: '登录失败，请稍后重试' });
  }
});

// 获取当前用户信息
app.get('/api/auth/me', auth, async (req, res) => {
  try {
    const r = await pool.query(
      'SELECT id, username, avatar_url, bio, role, signature, created_at FROM users WHERE id = $1',
      [req.user.id]
    );
    if (!r.rows[0]) {
      return res.status(404).json({ error: '用户不存在' });
    }
    res.json(r.rows[0]);
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// ============================================================
//  用户管理（支持分页和搜索）
// ============================================================

// 获取用户列表（支持分页和按用户名搜索）- 管理员专用
app.get('/api/users', auth, admin, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;
    const search = req.query.search || '';

    let whereClause = '';
    const params = [];
    let paramIndex = 1;

    if (search.trim()) {
      whereClause = ' WHERE username ILIKE $' + paramIndex;
      params.push('%' + search.trim() + '%');
      paramIndex++;
    }

    // 查询总数
    const countQuery = 'SELECT COUNT(*) FROM users' + whereClause;
    const countResult = await pool.query(countQuery, params);
    const total = parseInt(countResult.rows[0].count);

    const query = `
      SELECT id, username, avatar_url, bio, role, signature, created_at
      FROM users
      ${whereClause}
      ORDER BY created_at DESC
      LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
    `;
    params.push(limit, offset);

    const r = await pool.query(query, params);

    res.json({
      data: r.rows,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// ============================================================
//  用户公开接口（无需登录）- 用于用户主页
// ============================================================

// 获取单个用户公开信息（无需登录）
app.get('/api/users/profile/:username', async (req, res) => {
  try {
    const r = await pool.query(
      'SELECT id, username, avatar_url, bio, role, signature, created_at FROM users WHERE username = $1',
      [req.params.username]
    );
    if (r.rows.length === 0) {
      return res.status(404).json({ error: '用户不存在' });
    }
    res.json(r.rows[0]);
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 修改用户角色（管理员）
app.put('/api/users/:id/role', auth, admin, async (req, res) => {
  const { role } = req.body;
  const userId = req.params.id;

  if (!['user', 'admin'].includes(role)) {
    return res.status(400).json({ error: '无效的角色' });
  }

  try {
    if (userId === req.user.id) {
      return res.status(400).json({ error: '不能修改自己的角色' });
    }

    await pool.query('UPDATE users SET role = $1 WHERE id = $2', [role, userId]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 更新用户资料（含签名）
app.put('/api/users/:id', auth, async (req, res) => {
  const { username, bio, signature } = req.body;
  const userId = req.params.id;

  if (userId !== req.user.id) {
    return res.status(403).json({ error: '无权限修改他人资料' });
  }

  try {
    await pool.query(
      'UPDATE users SET username = $1, bio = $2, signature = $3 WHERE id = $4',
      [username, bio || '', signature || '', userId]
    );
    res.json({ success: true });
  } catch (err) {
    if (err.code === '23505') {
      res.status(400).json({ error: '用户名已被占用' });
    } else {
      res.status(500).json({ error: '服务器错误' });
    }
  }
});

// 更新用户头像
app.put('/api/users/:id/avatar', auth, async (req, res) => {
  const { avatar_url } = req.body;
  const userId = req.params.id;

  if (userId !== req.user.id) {
    return res.status(403).json({ error: '无权限修改他人头像' });
  }

  if (!avatar_url) {
    return res.status(400).json({ error: '请提供头像地址' });
  }

  try {
    await pool.query('UPDATE users SET avatar_url = $1 WHERE id = $2', [avatar_url, userId]);
    res.json({ success: true, avatar_url });
  } catch (err) {
    res.status(500).json({ error: '更新失败，请稍后重试' });
  }
});

// ============================================================
//  修改密码和邮箱
// ============================================================

// 修改密码
app.put('/api/users/:id/password', auth, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const userId = req.params.id;

  if (userId !== req.user.id) {
    return res.status(403).json({ error: '无权限' });
  }
  if (!oldPassword || !newPassword) {
    return res.status(400).json({ error: '请填写完整信息' });
  }
  if (newPassword.length < 6) {
    return res.status(400).json({ error: '新密码至少6位' });
  }

  try {
    const user = await pool.query('SELECT password_hash FROM users WHERE id = $1', [userId]);
    if (user.rows.length === 0) {
      return res.status(404).json({ error: '用户不存在' });
    }

    const valid = await bcrypt.compare(oldPassword, user.rows[0].password_hash);
    if (!valid) {
      return res.status(400).json({ error: '当前密码错误' });
    }

    const hash = await bcrypt.hash(newPassword, 10);
    await pool.query('UPDATE users SET password_hash = $1 WHERE id = $2', [hash, userId]);

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: '修改失败，请稍后重试' });
  }
});

// 修改邮箱
app.put('/api/users/:id/email', auth, async (req, res) => {
  const { password, newEmail } = req.body;
  const userId = req.params.id;

  if (userId !== req.user.id) {
    return res.status(403).json({ error: '无权限' });
  }
  if (!password || !newEmail) {
    return res.status(400).json({ error: '请填写完整信息' });
  }

  try {
    const user = await pool.query('SELECT password_hash FROM users WHERE id = $1', [userId]);
    if (user.rows.length === 0) {
      return res.status(404).json({ error: '用户不存在' });
    }

    const valid = await bcrypt.compare(password, user.rows[0].password_hash);
    if (!valid) {
      return res.status(400).json({ error: '密码错误' });
    }

    const existing = await pool.query('SELECT id FROM users WHERE email = $1 AND id != $2', [newEmail, userId]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ error: '邮箱已被占用' });
    }

    await pool.query('UPDATE users SET email = $1 WHERE id = $2', [newEmail, userId]);

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: '修改失败，请稍后重试' });
  }
});

// ============================================================
//  帖子接口（含分页和置顶）
// ============================================================

// 获取帖子列表（支持分页和用户筛选，置顶优先）
app.get('/api/posts', async (req, res) => {
  const sort = req.query.sort === 'hot' ? 'updated_at' : 'created_at';
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const offset = (page - 1) * limit;

  try {
    let query = `
      SELECT
        p.*,
        u.username,
        u.avatar_url,
        u.signature,
        (SELECT COUNT(*) FROM replies WHERE post_id = p.id) as reply_count
      FROM posts p
      JOIN users u ON p.user_id = u.id
    `;
    const params = [];

    if (req.query.user_id) {
      query += ' WHERE p.user_id = $1';
      params.push(req.query.user_id);
    }

    let countQuery = `
      SELECT COUNT(*) as total FROM posts p
    `;
    if (req.query.user_id) {
      countQuery += ' WHERE p.user_id = $1';
    }
    const countResult = await pool.query(countQuery, req.query.user_id ? [req.query.user_id] : []);
    const total = parseInt(countResult.rows[0]?.total || 0);

    query += ` ORDER BY p.is_pinned DESC, p.pinned_at DESC NULLS LAST, ${sort} DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
    params.push(limit, offset);

    const r = await pool.query(query, params);
    res.json({
      data: r.rows,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 获取单个帖子
app.get('/api/posts/:id', async (req, res) => {
  try {
    const r = await pool.query(
      `SELECT p.*, u.username, u.avatar_url, u.signature
       FROM posts p
       JOIN users u ON p.user_id = u.id
       WHERE p.id = $1`,
      [req.params.id]
    );
    if (r.rows.length === 0) {
      return res.status(404).json({ error: '帖子不存在' });
    }
    res.json(r.rows[0]);
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 创建帖子
app.post('/api/posts', auth, async (req, res) => {
  const { title, content, images } = req.body;

  if (!content || content.trim().length === 0) {
    return res.status(400).json({ error: '请填写内容' });
  }

  try {
    const r = await pool.query(
      `INSERT INTO posts (user_id, title, content, images)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [req.user.id, title || '无标题', content, images || []]
    );
    res.json(r.rows[0]);
  } catch (err) {
    res.status(500).json({ error: '发布失败，请稍后重试' });
  }
});

// 编辑帖子
app.put('/api/posts/:id', auth, async (req, res) => {
  const { title, content } = req.body;
  const postId = req.params.id;

  if (!content || content.trim().length === 0) {
    return res.status(400).json({ error: '请填写内容' });
  }

  try {
    const post = await pool.query('SELECT user_id FROM posts WHERE id = $1', [postId]);
    if (post.rows.length === 0) {
      return res.status(404).json({ error: '帖子不存在' });
    }
    if (post.rows[0].user_id !== req.user.id) {
      return res.status(403).json({ error: '无权限编辑此帖子' });
    }

    const r = await pool.query(
      `UPDATE posts SET title = $1, content = $2, edited_at = NOW() WHERE id = $3 RETURNING *`,
      [title || '无标题', content, postId]
    );
    res.json(r.rows[0]);
  } catch (err) {
    res.status(500).json({ error: '编辑失败，请稍后重试' });
  }
});

// 删除帖子
app.delete('/api/posts/:id', auth, async (req, res) => {
  try {
    const post = await pool.query('SELECT user_id FROM posts WHERE id = $1', [req.params.id]);
    if (post.rows.length === 0) {
      return res.status(404).json({ error: '帖子不存在' });
    }

    const user = await pool.query('SELECT role FROM users WHERE id = $1', [req.user.id]);
    const isAdmin = user.rows[0]?.role === 'admin';
    const isAuthor = post.rows[0].user_id === req.user.id;

    if (!isAuthor && !isAdmin) {
      return res.status(403).json({ error: '无权限删除此帖子' });
    }

    if (!isAuthor && isAdmin) {
      await createNotification(
        post.rows[0].user_id,
        'post_deleted',
        '你的帖子已被删除',
        '管理员删除了你的帖子'
      );
    }

    await pool.query('DELETE FROM posts WHERE id = $1', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: '删除失败，请稍后重试' });
  }
});

// 置顶/取消置顶帖子（管理员）
app.put('/api/posts/:id/pin', auth, admin, async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await pool.query('SELECT id, user_id FROM posts WHERE id = $1', [postId]);
    if (post.rows.length === 0) {
      return res.status(404).json({ error: '帖子不存在' });
    }

    const check = await pool.query('SELECT is_pinned FROM posts WHERE id = $1', [postId]);
    const isPinned = check.rows[0].is_pinned;

    const r = await pool.query(
      `UPDATE posts SET is_pinned = $1, pinned_at = $2 WHERE id = $3 RETURNING *`,
      [!isPinned, !isPinned ? new Date().toISOString() : null, postId]
    );

    await createNotification(
      post.rows[0].user_id,
      'system',
      isPinned ? '你的帖子已被取消置顶' : '你的帖子已被置顶',
      isPinned ? '管理员取消了你的帖子置顶' : '管理员把你的帖子置顶了',
      '/?post=' + postId
    );

    res.json(r.rows[0]);
  } catch (err) {
    res.status(500).json({ error: '操作失败，请稍后重试' });
  }
});

// ============================================================
//  回复接口
// ============================================================

// 获取帖子回复列表
app.get('/api/posts/:id/replies', async (req, res) => {
  try {
    const r = await pool.query(
      `SELECT r.*, u.username, u.avatar_url
       FROM replies r
       JOIN users u ON r.user_id = u.id
       WHERE r.post_id = $1
       ORDER BY r.created_at ASC`,
      [req.params.id]
    );
    res.json(r.rows);
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 创建回复
app.post('/api/posts/:id/replies', auth, async (req, res) => {
  const { content } = req.body;

  if (!content || content.trim().length === 0) {
    return res.status(400).json({ error: '请填写回复内容' });
  }

  try {
    const r = await pool.query(
      `INSERT INTO replies (post_id, user_id, content)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [req.params.id, req.user.id, content]
    );
    await pool.query('UPDATE posts SET updated_at = NOW() WHERE id = $1', [req.params.id]);

    const postAuthor = await pool.query('SELECT user_id FROM posts WHERE id = $1', [req.params.id]);
    if (postAuthor.rows[0] && postAuthor.rows[0].user_id !== req.user.id) {
      await createNotification(
        postAuthor.rows[0].user_id,
        'reply',
        '有人回复了你的帖子',
        (content || '').substring(0, 100),
        '/?post=' + req.params.id
      );
    }

    res.json(r.rows[0]);
  } catch (err) {
    res.status(500).json({ error: '回复失败，请稍后重试' });
  }
});

// 删除回复
app.delete('/api/replies/:id', auth, async (req, res) => {
  try {
    const reply = await pool.query('SELECT user_id FROM replies WHERE id = $1', [req.params.id]);
    if (reply.rows.length === 0) {
      return res.status(404).json({ error: '回复不存在' });
    }

    const user = await pool.query('SELECT role FROM users WHERE id = $1', [req.user.id]);
    if (reply.rows[0].user_id !== req.user.id && user.rows[0]?.role !== 'admin') {
      return res.status(403).json({ error: '无权限删除此回复' });
    }

    await pool.query('DELETE FROM replies WHERE id = $1', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: '删除失败，请稍后重试' });
  }
});

// ============================================================
//  举报接口
// ============================================================

// 获取举报列表（管理员）
app.get('/api/reports', auth, admin, async (req, res) => {
  try {
    const r = await pool.query(`
      SELECT
        r.*,
        reporter.username as reporter_name,
        handler.username as handler_name,
        p.title as post_title,
        p.content as post_content
      FROM reports r
      JOIN users reporter ON r.reporter_id = reporter.id
      LEFT JOIN users handler ON r.handler_id = handler.id
      LEFT JOIN posts p ON r.post_id = p.id
      ORDER BY r.created_at DESC
    `);
    res.json(r.rows);
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 提交举报
app.post('/api/reports', auth, async (req, res) => {
  const { post_id, reason } = req.body;

  if (!post_id || !reason) {
    return res.status(400).json({ error: '请填写完整信息' });
  }

  try {
    await pool.query(
      `INSERT INTO reports (post_id, reporter_id, reason)
       VALUES ($1, $2, $3)`,
      [post_id, req.user.id, reason]
    );
    res.json({ success: true });
  } catch (err) {
    if (err.code === '23505') {
      return res.status(409).json({ error: '你已经举报过此帖子，请等待处理' });
    }
    res.status(500).json({ error: '举报失败，请稍后重试' });
  }
});

// 处理举报（管理员）
app.put('/api/reports/:id', auth, admin, async (req, res) => {
  const { status, note } = req.body;

  if (!['approved', 'rejected'].includes(status)) {
    return res.status(400).json({ error: '无效的状态' });
  }

  let client;
  try {
    client = await pool.connect();
    await client.query('BEGIN');
    const report = await client.query(
      'SELECT reporter_id, post_id, status FROM reports WHERE id = $1 FOR UPDATE',
      [req.params.id]
    );
    if (report.rows.length === 0) {
      await client.query('ROLLBACK');
      return res.status(404).json({ error: '举报不存在' });
    }
    if (report.rows[0].status !== 'pending') {
      await client.query('ROLLBACK');
      return res.status(409).json({ error: '该举报已处理' });
    }

    await client.query(
      `UPDATE reports
       SET status = $1, handled_at = NOW(), handler_id = $2, handler_note = $3
       WHERE id = $4`,
      [status, req.user.id, note || '', req.params.id]
    );

    if (status === 'approved' && report.rows[0].post_id) {
      await client.query('DELETE FROM posts WHERE id = $1', [report.rows[0].post_id]);
    }

    const statusText = status === 'approved' ? '已删除' : '已驳回';
    await client.query(
      `INSERT INTO notifications (user_id, type, title, content, link)
       VALUES ($1, $2, $3, $4, $5)`,
      [
        report.rows[0].reporter_id,
        'report_handled',
        '你的举报已被处理',
        `你举报的帖子已被管理员${statusText}`,
        status === 'rejected' && report.rows[0].post_id ? '/?post=' + report.rows[0].post_id : null,
      ]
    );

    await client.query('COMMIT');
    res.json({ success: true, post_deleted: status === 'approved' });
  } catch (err) {
    if (client) {
      try {
        await client.query('ROLLBACK');
      } catch (rollbackError) {
        console.error('回滚举报处理事务失败:', rollbackError);
      }
    }
    res.status(500).json({ error: '操作失败，请稍后重试' });
  } finally {
    if (client) client.release();
  }
});

// ============================================================
//  友情链接
// ============================================================

// 获取友情链接
app.get('/api/links', async (req, res) => {
  try {
    const r = await pool.query('SELECT * FROM friendly_links ORDER BY sort_order');
    res.json(r.rows);
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 添加友情链接（管理员）
app.post('/api/links', auth, admin, async (req, res) => {
  const { title, url } = req.body;

  if (!title || !url) {
    return res.status(400).json({ error: '请填写完整信息' });
  }

  try {
    const r = await pool.query(
      `INSERT INTO friendly_links (title, url)
       VALUES ($1, $2)
       RETURNING *`,
      [title, url]
    );
    res.json(r.rows[0]);
  } catch (err) {
    res.status(500).json({ error: '添加失败，请稍后重试' });
  }
});

// 删除友情链接（管理员）
app.delete('/api/links/:id', auth, admin, async (req, res) => {
  try {
    await pool.query('DELETE FROM friendly_links WHERE id = $1', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: '删除失败，请稍后重试' });
  }
});

// ============================================================
//  统计数据
// ============================================================

app.get('/api/stats', async (req, res) => {
  try {
    const [postsRes, usersRes] = await Promise.all([
      pool.query('SELECT COUNT(*) FROM posts'),
      pool.query('SELECT COUNT(*) FROM users'),
    ]);
    res.json({
      posts: parseInt(postsRes.rows[0].count) || 0,
      users: parseInt(usersRes.rows[0].count) || 0,
      topics: parseInt(postsRes.rows[0].count) || 0,
    });
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// ============================================================
//  事件日志（支持分页）
// ============================================================

// 获取事件日志（管理员）—— 支持分页
app.get('/api/event-logs', auth, admin, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;

    // 查询总数
    const countResult = await pool.query('SELECT COUNT(*) FROM event_logs');
    const total = parseInt(countResult.rows[0].count);

    const r = await pool.query(
      `SELECT el.*, u.username
       FROM event_logs el
       LEFT JOIN users u ON el.user_id = u.id
       ORDER BY el.created_at DESC
       LIMIT $1 OFFSET $2`,
      [limit, offset]
    );

    res.json({
      data: r.rows,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// ============================================================
//  图片上传
// ============================================================

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = Date.now() + '-' + Math.round(Math.random() * 10000) + ext;
    cb(null, name);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    cb(null, allowed.includes(file.mimetype));
  }
});

app.post('/api/upload', auth, upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: '请选择图片' });
  }
  res.json({ url: '/uploads/' + req.file.filename });
});

// ============================================================
//  自定义 CSS
// ============================================================

const CUSTOM_CSS_DIR = path.join(__dirname, 'uploads/custom');

// 确保目录存在
if (!fs.existsSync(CUSTOM_CSS_DIR)) fs.mkdirSync(CUSTOM_CSS_DIR, { recursive: true });

// 保存自定义 CSS（管理员）
const cssUpload = multer({ dest: 'uploads/temp/' });
app.post('/api/admin/custom-css', auth, admin, cssUpload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: '请选择文件' });
  }

  if (req.file.originalname !== 'style.css') {
    fs.unlinkSync(req.file.path);
    return res.status(400).json({ error: '文件名必须是 style.css' });
  }

  // 移动到最终位置
  const targetPath = path.join(CUSTOM_CSS_DIR, 'style.css');
  if (fs.existsSync(targetPath)) fs.unlinkSync(targetPath);
  fs.renameSync(req.file.path, targetPath);

  // 记录到设置表
  await pool.query(
    `INSERT INTO settings (key, value) VALUES ($1, $2)
     ON CONFLICT (key) DO UPDATE SET value = $2, updated_at = NOW()`,
    ['custom_css_enabled', 'true']
  );

  res.json({ success: true });
});

// 获取自定义 CSS（公开）
app.get('/api/custom-css', async (req, res) => {
  const cssPath = path.join(CUSTOM_CSS_DIR, 'style.css');
  if (fs.existsSync(cssPath)) {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(cssPath);
  } else {
    res.status(404).send('');
  }
});

// 删除自定义 CSS（管理员）
app.delete('/api/admin/custom-css', auth, admin, async (req, res) => {
  const cssPath = path.join(CUSTOM_CSS_DIR, 'style.css');
  if (fs.existsSync(cssPath)) {
    fs.unlinkSync(cssPath);
    await pool.query(
      `INSERT INTO settings (key, value) VALUES ($1, $2)
       ON CONFLICT (key) DO UPDATE SET value = $2, updated_at = NOW()`,
      ['custom_css_enabled', 'false']
    );
  }
  res.json({ success: true });
});

// ============================================================
//  私信系统
// ============================================================

// 获取会话列表
app.get('/api/conversations', auth, async (req, res) => {
  try {
    const r = await pool.query(`
      SELECT
        c.id,
        c.user1_id,
        c.user2_id,
        c.last_message_at,
        c.created_at,
        u.id as other_user_id,
        u.username as other_username,
        u.avatar_url as other_avatar_url,
        (SELECT COUNT(*) FROM messages WHERE conversation_id = c.id AND sender_id != $1 AND is_read = false) as unread_count,
        (SELECT content FROM messages WHERE conversation_id = c.id ORDER BY created_at DESC LIMIT 1) as last_message,
        (SELECT created_at FROM messages WHERE conversation_id = c.id ORDER BY created_at DESC LIMIT 1) as last_message_time
      FROM conversations c
      JOIN users u ON (u.id = c.user1_id OR u.id = c.user2_id) AND u.id != $1
      WHERE c.user1_id = $1 OR c.user2_id = $1
      ORDER BY c.last_message_at DESC
    `, [req.user.id]);
    res.json(r.rows);
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 获取或创建会话
app.post('/api/conversations', auth, async (req, res) => {
  const { other_user_id } = req.body;
  if (!other_user_id) {
    return res.status(400).json({ error: '缺少对方用户ID' });
  }
  if (String(other_user_id).toLowerCase() === String(req.user.id).toLowerCase()) {
    return res.status(400).json({ error: '不能与自己私信' });
  }

  try {
    const userCheck = await pool.query('SELECT id FROM users WHERE id = $1', [other_user_id]);
    if (userCheck.rows.length === 0) {
      return res.status(404).json({ error: '用户不存在' });
    }

    const r = await pool.query(`
      INSERT INTO conversations (user1_id, user2_id)
      SELECT LEAST($1::uuid, $2::uuid), GREATEST($1::uuid, $2::uuid)
      ON CONFLICT (user1_id, user2_id)
      DO UPDATE SET user1_id = EXCLUDED.user1_id
      RETURNING id
    `, [req.user.id, other_user_id]);

    res.json({ id: r.rows[0].id });
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 获取会话消息
app.get('/api/conversations/:id/messages', auth, async (req, res) => {
  const conversationId = req.params.id;

  try {
    const check = await pool.query(`
      SELECT id FROM conversations
      WHERE id = $1 AND (user1_id = $2 OR user2_id = $2)
    `, [conversationId, req.user.id]);

    if (check.rows.length === 0) {
      return res.status(403).json({ error: '无权限访问此会话' });
    }

    const r = await pool.query(`
      SELECT
        m.*,
        u.username as sender_username,
        u.avatar_url as sender_avatar_url
      FROM messages m
      JOIN users u ON m.sender_id = u.id
      WHERE m.conversation_id = $1
      ORDER BY m.created_at ASC
    `, [conversationId]);

    await pool.query(`
      UPDATE messages SET is_read = true
      WHERE conversation_id = $1 AND sender_id != $2 AND is_read = false
    `, [conversationId, req.user.id]);

    res.json(r.rows);
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 发送消息
app.post('/api/conversations/:id/messages', auth, async (req, res) => {
  const conversationId = req.params.id;
  const { content } = req.body;

  if (!content || content.trim().length === 0) {
    return res.status(400).json({ error: '请填写消息内容' });
  }

  try {
    const check = await pool.query(`
      SELECT id FROM conversations
      WHERE id = $1 AND (user1_id = $2 OR user2_id = $2)
    `, [conversationId, req.user.id]);

    if (check.rows.length === 0) {
      return res.status(403).json({ error: '无权限访问此会话' });
    }

    const r = await pool.query(`
      INSERT INTO messages (conversation_id, sender_id, content)
      VALUES ($1, $2, $3)
      RETURNING *
    `, [conversationId, req.user.id, content]);

    await pool.query(`
      UPDATE conversations SET last_message_at = NOW()
      WHERE id = $1
    `, [conversationId]);

    const userInfo = await pool.query(`
      SELECT username, avatar_url FROM users WHERE id = $1
    `, [req.user.id]);

    res.json({
      ...r.rows[0],
      sender_username: userInfo.rows[0].username,
      sender_avatar_url: userInfo.rows[0].avatar_url
    });
  } catch (err) {
    res.status(500).json({ error: '发送失败，请稍后重试' });
  }
});

// 标记消息已读
app.put('/api/messages/:id/read', auth, async (req, res) => {
  try {
    const result = await pool.query(`
      UPDATE messages AS m SET is_read = true
      FROM conversations AS c
      WHERE m.id = $1
        AND m.sender_id != $2
        AND c.id = m.conversation_id
        AND (c.user1_id = $2 OR c.user2_id = $2)
      RETURNING m.id
    `, [req.params.id, req.user.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: '消息不存在或无权限' });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// ============================================================
//  自定义页面
// ============================================================

// 获取所有自定义页面（公开，只返回启用且排序的）
app.get('/api/custom-pages', async (req, res) => {
  try {
    const r = await pool.query(
      'SELECT id, name, title FROM custom_pages WHERE enabled = true ORDER BY created_at'
    );
    res.json(r.rows);
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 获取单个自定义页面（公开）
app.get('/api/custom-pages/:name', async (req, res) => {
  try {
    const r = await pool.query(
      'SELECT id, name, title, content FROM custom_pages WHERE name = $1 AND enabled = true',
      [req.params.name]
    );
    if (r.rows.length === 0) {
      return res.status(404).json({ error: '页面不存在' });
    }
    res.json(r.rows[0]);
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 获取所有自定义页面（管理员，含禁用）
app.get('/api/admin/custom-pages', auth, admin, async (req, res) => {
  try {
    const r = await pool.query(
      'SELECT id, name, title, content, enabled, created_at, updated_at FROM custom_pages ORDER BY created_at'
    );
    res.json(r.rows);
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 创建自定义页面（管理员）
app.post('/api/admin/custom-pages', auth, admin, async (req, res) => {
  const { name, title, content } = req.body;
  if (!name || !title || !content) {
    return res.status(400).json({ error: '请填写完整信息' });
  }
  if (!/^[a-zA-Z0-9\-_]+$/.test(name)) {
    return res.status(400).json({ error: '页面名称只允许字母、数字、短横线和下划线' });
  }
  try {
    const r = await pool.query(
      `INSERT INTO custom_pages (name, title, content)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [name, title, content]
    );
    res.json(r.rows[0]);
  } catch (err) {
    if (err.code === '23505') {
      res.status(400).json({ error: '页面名称已存在' });
    } else {
      res.status(500).json({ error: '创建失败，请稍后重试' });
    }
  }
});

// 更新自定义页面（管理员）
app.put('/api/admin/custom-pages/:id', auth, admin, async (req, res) => {
  const { title, content, enabled } = req.body;
  const id = req.params.id;
  try {
    const r = await pool.query(
      `UPDATE custom_pages
       SET title = $1, content = $2, enabled = $3, updated_at = NOW()
       WHERE id = $4
       RETURNING *`,
      [title, content, enabled, id]
    );
    if (r.rows.length === 0) {
      return res.status(404).json({ error: '页面不存在' });
    }
    res.json(r.rows[0]);
  } catch (err) {
    res.status(500).json({ error: '更新失败，请稍后重试' });
  }
});

// 删除自定义页面（管理员）
app.delete('/api/admin/custom-pages/:id', auth, admin, async (req, res) => {
  try {
    await pool.query('DELETE FROM custom_pages WHERE id = $1', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: '删除失败，请稍后重试' });
  }
});

// ============================================================
//  通知系统
// ============================================================

// 获取我的通知列表
app.get('/api/notifications', auth, async (req, res) => {
  try {
    const r = await pool.query(
      'SELECT id, type, title, content, link, is_read, created_at FROM notifications WHERE user_id = $1 ORDER BY created_at DESC LIMIT 50',
      [req.user.id]
    );
    res.json(r.rows);
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 标记通知已读
app.put('/api/notifications/:id/read', auth, async (req, res) => {
  try {
    await pool.query(
      'UPDATE notifications SET is_read = true WHERE id = $1 AND user_id = $2',
      [req.params.id, req.user.id]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 标记所有通知已读
app.put('/api/notifications/read-all', auth, async (req, res) => {
  try {
    await pool.query(
      'UPDATE notifications SET is_read = true WHERE user_id = $1',
      [req.user.id]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// ============================================================
//  恢复码系统（密码重置）
// ============================================================

// 生成随机恢复码
function generateRecoveryCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 20; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
    if (i === 4 || i === 9 || i === 14) code += '-';
  }
  return code;
}

// 生成 10 个恢复码
app.post('/api/auth/recovery-codes/generate', auth, async (req, res) => {
  try {
    await pool.query('DELETE FROM recovery_codes WHERE user_id = $1', [req.user.id]);

    const codes = [];
    const codeHashes = [];
    for (let i = 0; i < 10; i++) {
      const code = generateRecoveryCode();
      codes.push(code);
      const hash = await bcrypt.hash(code, 10);
      codeHashes.push(hash);
    }

    for (const hash of codeHashes) {
      await pool.query(
        'INSERT INTO recovery_codes (user_id, code_hash) VALUES ($1, $2)',
        [req.user.id, hash]
      );
    }

    res.json({ codes });
  } catch (err) {
    res.status(500).json({ error: '生成恢复码失败' });
  }
});

// 获取当前可用的恢复码数量
app.get('/api/auth/recovery-codes/count', auth, async (req, res) => {
  try {
    const r = await pool.query(
      'SELECT COUNT(*) FROM recovery_codes WHERE user_id = $1 AND is_used = false',
      [req.user.id]
    );
    res.json({ count: parseInt(r.rows[0].count) });
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 重置密码（使用恢复码）
app.post('/api/auth/reset-password', async (req, res) => {
  const { email, recoveryCode, newPassword } = req.body;

  if (!email || !recoveryCode || !newPassword) {
    return res.status(400).json({ error: '请填写完整信息' });
  }
  if (newPassword.length < 6) {
    return res.status(400).json({ error: '密码至少6位' });
  }

  try {
    const user = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
    if (user.rows.length === 0) {
      return res.status(404).json({ error: '用户不存在' });
    }

    const codes = await pool.query(
      'SELECT id, code_hash FROM recovery_codes WHERE user_id = $1 AND is_used = false',
      [user.rows[0].id]
    );

    let matched = false;
    let matchedId = null;

    for (const row of codes.rows) {
      const valid = await bcrypt.compare(recoveryCode, row.code_hash);
      if (valid) {
        matched = true;
        matchedId = row.id;
        break;
      }
    }

    if (!matched) {
      return res.status(400).json({ error: '恢复码无效或已使用' });
    }

    await pool.query('UPDATE recovery_codes SET is_used = true WHERE id = $1', [matchedId]);

    const hash = await bcrypt.hash(newPassword, 10);
    await pool.query('UPDATE users SET password_hash = $1 WHERE id = $2', [hash, user.rows[0].id]);

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: '重置失败，请稍后重试' });
  }
});

// ============================================================
//  托管公开前端文件
// ============================================================

app.get('/health/live', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/health/ready', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ready' });
  } catch (error) {
    res.status(503).json({ status: 'not_ready' });
  }
});

app.use('/js', express.static(path.join(__dirname, 'js'), {
  dotfiles: 'deny',
  fallthrough: false,
  index: false,
}));
app.get('/style.css', (req, res) => res.sendFile(path.join(__dirname, 'style.css')));
app.get('/config.js', (req, res) => res.sendFile(path.join(__dirname, 'config.js')));

app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: '接口不存在' });
  }
  if (path.extname(req.path)) {
    return res.status(404).send('Not found');
  }
  return res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  if (err.type === 'entity.too.large') {
    return res.status(413).json({ error: '请求内容过大' });
  }
  if (err.message === 'Origin is not allowed by CORS') {
    return res.status(403).json({ error: '不允许的跨域来源' });
  }
  console.error(err);
  return res.status(500).json({ error: '服务器错误' });
});

// ============================================================
//  启动服务器
// ============================================================


let server = null;
let shuttingDown = false;

function startServer() {
  if (server) return server;

  server = app.listen(PORT, '0.0.0.0', () => {

    console.log('========================================');
    console.log('  🌊 Forumlify 已启动');
    console.log('  📡 http://localhost:' + PORT);
    console.log('  📡 API: http://localhost:' + PORT + '/api');
    console.log('========================================');
  });

  return server;
}

function shutdown(signal, { exitProcess = true } = {}) {
  if (shuttingDown) return Promise.resolve();
  shuttingDown = true;
  console.log(`${signal} received, shutting down gracefully`);

  return new Promise((resolve, reject) => {
    const forceExit = exitProcess
      ? setTimeout(() => process.exit(1), 10000)
      : null;
    if (forceExit) forceExit.unref();

    const finish = async error => {
      try {
        await pool.end();
        if (error) throw error;
        resolve();
      } catch (shutdownError) {
        reject(shutdownError);
      } finally {
        if (forceExit) clearTimeout(forceExit);
        server = null;
        shuttingDown = false;
      }
    };

    if (server) server.close(finish);
    else finish();
  }).finally(() => {
    if (exitProcess) process.exitCode = 0;
  });
}

if (require.main === module) {
  startServer();
  process.on('SIGTERM', () => {
    shutdown('SIGTERM').catch(error => {
      console.error('Graceful shutdown failed:', error);
      process.exitCode = 1;
    });
  });
  process.on('SIGINT', () => {
    shutdown('SIGINT').catch(error => {
      console.error('Graceful shutdown failed:', error);
      process.exitCode = 1;
    });
  });
}

module.exports = { app, pool, startServer, shutdown };
