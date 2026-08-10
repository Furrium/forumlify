// GET /api/notifications — 我的通知列表
import pool from '@/lib/db';
import { getUser } from '@/lib/auth';

export async function GET(req) {
  const user = getUser(req);
  if (!user) return Response.json({ error: '请先登录' }, { status: 401 });
  try {
    const r = await pool.query(
      'SELECT id, type, title, content, link, is_read, created_at FROM notifications WHERE user_id = $1 ORDER BY created_at DESC LIMIT 50',
      [user.id]
    );
    return Response.json(r.rows);
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}
