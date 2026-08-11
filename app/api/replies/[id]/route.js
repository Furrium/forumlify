// DELETE /api/replies/[id]
import pool from '@/lib/db';
import { getUser } from '@/lib/auth';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function DELETE(req, { params }) {
  if (!UUID_RE.test((await params).id)) {
    return Response.json({ error: '回复不存在' }, { status: 404 });
  }
  const user = getUser(req);
  if (!user) {
    return Response.json({ error: '请先登录' }, { status: 401 });
  }
  try {
    const reply = await pool.query('SELECT user_id FROM replies WHERE id = $1', [(await params).id]);
    if (reply.rows.length === 0) {
      return Response.json({ error: '回复不存在' }, { status: 404 });
    }
    const u = await pool.query('SELECT role FROM users WHERE id = $1', [user.id]);
    if (reply.rows[0].user_id !== user.id && u.rows[0]?.role !== 'admin') {
      return Response.json({ error: '无权限删除此回复' }, { status: 403 });
    }
    await pool.query('DELETE FROM replies WHERE id = $1', [(await params).id]);
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: '删除失败，请稍后重试' }, { status: 500 });
  }
}
