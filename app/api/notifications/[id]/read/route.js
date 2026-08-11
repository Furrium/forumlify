// PUT /api/notifications/[id]/read — 标记单条已读
import pool from '@/lib/db';
import { getUser } from '@/lib/auth';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function PUT(req, { params }) {
  const user = getUser(req);
  if (!user) return Response.json({ error: '请先登录' }, { status: 401 });
  if (!UUID_RE.test((await params).id)) {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
  try {
    await pool.query(
      'UPDATE notifications SET is_read = true WHERE id = $1 AND user_id = $2',
      [(await params).id, user.id]
    );
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}
