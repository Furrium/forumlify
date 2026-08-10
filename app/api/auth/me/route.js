// GET /api/auth/me
import pool from '@/lib/db';
import { getUser } from '@/lib/auth';

export async function GET(req) {
  const user = getUser(req);
  if (!user) {
    return Response.json({ error: '请先登录' }, { status: 401 });
  }
  try {
    const r = await pool.query(
      'SELECT id, username, avatar_url, bio, signature, role, created_at FROM users WHERE id = $1',
      [user.id]
    );
    if (!r.rows[0]) {
      return Response.json({ error: '用户不存在' }, { status: 404 });
    }
    return Response.json(r.rows[0]);
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}
