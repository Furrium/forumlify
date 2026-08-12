// JWT 认证工具 (Route Handlers 共享)
import jwt from 'jsonwebtoken';
import pool from './db';

const JWT_SECRET = process.env.JWT_SECRET || 'forumlify-secret-key-change-me-in-production';

export { JWT_SECRET };

// 从 Next.js Request 提取 Bearer token，解析并返回用户 payload
export function getUser(req) {
  const auth = req.headers.get('authorization') || '';
  const token = auth.split(' ')[1];
  if (!token) return null;
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

// 认证中间件：未登录返回 401
export async function requireAuth(req) {
  const user = getUser(req);
  if (!user) {
    return { user: null, error: Response.json({ error: '请先登录' }, { status: 401 }) };
  }
  return { user, error: null };
}

// 管理员校验：非管理员返回 403
export async function requireAdmin(user) {
  if (!user) return Response.json({ error: '请先登录' }, { status: 401 });
  try {
    const r = await pool.query('SELECT role FROM users WHERE id = $1', [user.id]);
    if (r.rows[0]?.role !== 'admin') {
      return Response.json({ error: '需要管理员权限' }, { status: 403 });
    }
    return null;
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}

// 超级管理员 = 当前最早注册的管理员。与管理用户列表中的标记保持一致。
export async function getSuperAdminId() {
  const r = await pool.query(
    `SELECT id
     FROM users
     WHERE role = 'admin'
     ORDER BY created_at ASC, id ASC
     LIMIT 1`
  );
  return r.rows[0]?.id || null;
}

export async function isSuperAdmin(userId) {
  return !!userId && (await getSuperAdminId()) === userId;
}
