// ============================================================
//  Forumlify 后端服务
//  一个文件搞定所有 API + 文件服务
// ============================================================

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

// 服务端配置（config.js，浏览器端加载同名文件但不影响服务端）
const CONFIG = require('./config');

// 监听端口：环境变量 PORT 优先，其次 config.js 的 SERVER_PORT，最后默认 3000
const PORT = process.env.PORT || CONFIG.SERVER_PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'forumlify-secret-key-change-me-in-production';

// ============================================================
//  数据库
// ============================================================
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://forumlify:123456@localhost:5432/forumlify',
});

// ============================================================
//  中间件
// ============================================================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 确保上传目录存在
if (!fs.existsSync('uploads')) fs.mkdirSync('uploads');
app.use('/uploads', express.static('uploads'));

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

// 注册 - 第一个用户自动成为管理员
app.post('/api/auth/register', async (req, res) => {
  const { email, password, username } = req.body;

  if (!email || !password || !username) {
    return res.status(400).json({ error: '请填写完整信息' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: '密码至少6位' });
  }

  try {
    const countResult = await pool.query('SELECT COUNT(*) FROM users');
    const isFirstUser = parseInt(countResult.rows[0].count) === 0;

    const hash = await bcrypt.hash(password, 10);
    const avatar = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username) + '&background=6366f1&color=fff&size=64';
    const role = isFirstUser ? 'admin' : 'user';

    const r = await pool.query(
      `INSERT INTO users (email, password_hash, username, avatar_url, role)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, username, avatar_url, role, created_at`,
      [email, hash, username, avatar, role]
    );

    res.json({
      user: r.rows[0],
      message: isFirstUser ? '🎉 你是第一个用户，已自动设为管理员！' : '注册成功'
    });
  } catch (err) {
    if (err.code === '23505') {
      res.status(400).json({ error: '邮箱或用户名已被注册' });
    } else {
      res.status(500).json({ error: '注册失败，请稍后重试' });
    }
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
      'SELECT id, username, avatar_url, bio, role, created_at FROM users WHERE id = $1',
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
//  用户管理
// ============================================================

// 获取用户信息（支持按用户名查询）
app.get('/api/users', auth, admin, async (req, res) => {
  try {
    let query = 'SELECT id, username, avatar_url, bio, role, created_at FROM users';
    const params = [];

    if (req.query.username) {
      query += ' WHERE username = $1';
      params.push(req.query.username);
    }

    query += ' ORDER BY created_at DESC';
    const r = await pool.query(query, params);
    res.json(r.rows);
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

// 更新用户资料
app.put('/api/users/:id', auth, async (req, res) => {
  const { username, bio } = req.body;
  const userId = req.params.id;

  if (userId !== req.user.id) {
    return res.status(403).json({ error: '无权限修改他人资料' });
  }

  try {
    await pool.query('UPDATE users SET username = $1, bio = $2 WHERE id = $3', [username, bio || '', userId]);
    res.json({ success: true });
  } catch (err) {
    if (err.code === '23505') {
      res.status(400).json({ error: '用户名已被占用' });
    } else {
      res.status(500).json({ error: '服务器错误' });
    }
  }
});

// ============================================================
//  帖子接口（含分页）
// ============================================================

// 获取帖子列表（支持分页和用户筛选）
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
        (SELECT COUNT(*) FROM replies WHERE post_id = p.id) as reply_count
      FROM posts p
      JOIN users u ON p.user_id = u.id
    `;
    const params = [];

    if (req.query.user_id) {
      query += ' WHERE p.user_id = $1';
      params.push(req.query.user_id);
    }

    // 获取总数
    let countQuery = `
      SELECT COUNT(*) as total FROM posts p
    `;
    if (req.query.user_id) {
      countQuery += ' WHERE p.user_id = $1';
    }
    const countResult = await pool.query(countQuery, req.query.user_id ? [req.query.user_id] : []);
    const total = parseInt(countResult.rows[0]?.total || 0);

    query += ` ORDER BY ${sort} DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
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
      `SELECT p.*, u.username, u.avatar_url
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

// 删除帖子
app.delete('/api/posts/:id', auth, async (req, res) => {
  try {
    const post = await pool.query('SELECT user_id FROM posts WHERE id = $1', [req.params.id]);
    if (post.rows.length === 0) {
      return res.status(404).json({ error: '帖子不存在' });
    }

    const user = await pool.query('SELECT role FROM users WHERE id = $1', [req.user.id]);
    if (post.rows[0].user_id !== req.user.id && user.rows[0]?.role !== 'admin') {
      return res.status(403).json({ error: '无权限删除此帖子' });
    }

    await pool.query('DELETE FROM posts WHERE id = $1', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: '删除失败，请稍后重试' });
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
    const existing = await pool.query(
      'SELECT id FROM reports WHERE post_id = $1 AND reporter_id = $2 AND status = $3',
      [post_id, req.user.id, 'pending']
    );
    if (existing.rows.length > 0) {
      return res.status(400).json({ error: '你已经举报过此帖子，请等待处理' });
    }

    await pool.query(
      `INSERT INTO reports (post_id, reporter_id, reason)
       VALUES ($1, $2, $3)`,
      [post_id, req.user.id, reason]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: '举报失败，请稍后重试' });
  }
});

// 处理举报（管理员）
app.put('/api/reports/:id', auth, admin, async (req, res) => {
  const { status, note } = req.body;

  if (!['pending', 'approved', 'rejected'].includes(status)) {
    return res.status(400).json({ error: '无效的状态' });
  }

  try {
    await pool.query(
      `UPDATE reports
       SET status = $1, handled_at = NOW(), handler_id = $2, handler_note = $3
       WHERE id = $4`,
      [status, req.user.id, note || '', req.params.id]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: '操作失败，请稍后重试' });
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
      online: Math.floor(Math.random() * 20) + 5,
    });
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// ============================================================
//  事件日志
// ============================================================

// 获取事件日志（管理员）
app.get('/api/event-logs', auth, admin, async (req, res) => {
  try {
    const r = await pool.query(
      `SELECT el.*, u.username
       FROM event_logs el
       LEFT JOIN users u ON el.user_id = u.id
       ORDER BY el.created_at DESC
       LIMIT 100`
    );
    res.json(r.rows);
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 记录事件
app.post('/api/event-logs', auth, async (req, res) => {
  const { action } = req.body;
  try {
    await pool.query(
      `INSERT INTO event_logs (user_id, action, ip)
       VALUES ($1, $2, $3)`,
      [req.user.id, action, req.ip || '0.0.0.0']
    );
    res.json({ success: true });
  } catch (err) {
    res.json({ success: true });
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
  if (other_user_id === req.user.id) {
    return res.status(400).json({ error: '不能与自己私信' });
  }

  try {
    const userCheck = await pool.query('SELECT id FROM users WHERE id = $1', [other_user_id]);
    if (userCheck.rows.length === 0) {
      return res.status(404).json({ error: '用户不存在' });
    }

    const existing = await pool.query(`
      SELECT id FROM conversations
      WHERE (user1_id = $1 AND user2_id = $2) OR (user1_id = $2 AND user2_id = $1)
    `, [req.user.id, other_user_id]);

    if (existing.rows.length > 0) {
      return res.json({ id: existing.rows[0].id });
    }

    const r = await pool.query(`
      INSERT INTO conversations (user1_id, user2_id)
      VALUES ($1, $2)
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
    await pool.query(`
      UPDATE messages SET is_read = true
      WHERE id = $1 AND sender_id != $2
    `, [req.params.id, req.user.id]);
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
      'SELECT id, name, title, sort_order FROM custom_pages WHERE enabled = true ORDER BY sort_order'
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
      'SELECT id, name, title, content, sort_order, enabled, created_at, updated_at FROM custom_pages ORDER BY sort_order'
    );
    res.json(r.rows);
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 创建自定义页面（管理员）
app.post('/api/admin/custom-pages', auth, admin, async (req, res) => {
  const { name, title, content, sort_order } = req.body;
  if (!name || !title || !content) {
    return res.status(400).json({ error: '请填写完整信息' });
  }
  if (!/^[a-zA-Z0-9\-_]+$/.test(name)) {
    return res.status(400).json({ error: '页面名称只允许字母、数字、短横线和下划线' });
  }
  try {
    const r = await pool.query(
      `INSERT INTO custom_pages (name, title, content, sort_order)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [name, title, content, sort_order || 0]
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
  const { title, content, sort_order, enabled } = req.body;
  const id = req.params.id;
  try {
    const r = await pool.query(
      `UPDATE custom_pages
       SET title = $1, content = $2, sort_order = $3, enabled = $4, updated_at = NOW()
       WHERE id = $5
       RETURNING *`,
      [title, content, sort_order || 0, enabled, id]
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
//  托管前端文件
// ============================================================

app.use(express.static('.'));

app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, 'index.html'));
  }
});

// ============================================================
//  启动服务器
// ============================================================

app.listen(PORT, '0.0.0.0', () => {
  console.log('========================================');
  console.log('  🌊 Forumlify 已启动');
  console.log('  📡 http://localhost:' + PORT);
  console.log('  📡 API: http://localhost:' + PORT + '/api');
  console.log('========================================');
});
