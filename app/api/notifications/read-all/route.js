// PUT /api/notifications/read-all — 全部标记已读
import pool from '@/lib/db';
import { getUser } from '@/lib/auth';

export async function PUT(req) {
  const user = getUser(req);
  if (!user) return Response.json({ error: '请先登录' }, { status: 401 });
  try {
    await pool.query('UPDATE notifications SET is_read = true WHERE user_id = $1', [user.id]);
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}
