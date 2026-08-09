// GET /api/users (admin)
import pool from '@/lib/db';
import { getUser, requireAdmin } from '@/lib/auth';

export async function GET(req) {
  const user = getUser(req);
  const forbidden = await requireAdmin(user);
  if (forbidden) return forbidden;
  try {
    const r = await pool.query(
      'SELECT id, username, avatar_url, bio, role, created_at FROM users ORDER BY created_at DESC'
    );
    return Response.json(r.rows);
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}
