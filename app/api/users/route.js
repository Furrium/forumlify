// GET /api/users (admin) — 支持 ?username= 按用户名查询
import pool from '@/lib/db';
import { getUser, requireAdmin } from '@/lib/auth';

export async function GET(req) {
  const user = getUser(req);
  const forbidden = await requireAdmin(user);
  if (forbidden) return forbidden;

  const url = new URL(req.url);
  const username = url.searchParams.get('username');

  try {
    let query = 'SELECT id, username, avatar_url, bio, role, created_at FROM users';
    const params = [];
    if (username) {
      query += ' WHERE username = $1';
      params.push(username);
    }
    query += ' ORDER BY created_at DESC';
    const r = await pool.query(query, params);
    return Response.json(r.rows);
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}
