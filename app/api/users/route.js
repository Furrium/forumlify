// GET /api/users (admin) — 支持 ?username= 按用户名查询
import pool from '@/lib/db';
import { getUser, getSuperAdminId, requireAdmin } from '@/lib/auth';

export async function GET(req) {
  const user = getUser(req);
  const forbidden = await requireAdmin(user);
  if (forbidden) return forbidden;

  const url = new URL(req.url);
  const username = url.searchParams.get('username');

  try {
    // 超级管理员 = 最早注册的 admin（对齐迁移：无 admin 时自动提升最早注册用户）
    const superAdminId = await getSuperAdminId();

    let query = 'SELECT id, username, avatar_url, bio, role, created_at FROM users';
    const params = [];
    if (username) {
      query += ' WHERE username = $1';
      (await params).push(username);
    }
    query += ' ORDER BY created_at DESC';
    const r = await pool.query(query, params);
    // 标记超级管理员（前端显示"超级管理员"）
    const rows = r.rows.map((u) => ({ ...u, is_super: u.id === superAdminId }));
    return Response.json(rows);
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}
