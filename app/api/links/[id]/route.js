// DELETE /api/links/[id]
import pool from '@/lib/db';
import { getUser, requireAdmin } from '@/lib/auth';

export async function DELETE(req, { params }) {
  const user = getUser(req);
  if (!user) {
    return Response.json({ error: '请先登录' }, { status: 401 });
  }
  const forbidden = await requireAdmin(user);
  if (forbidden) return forbidden;
  try {
    await pool.query('DELETE FROM friendly_links WHERE id = $1', [(await params).id]);
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: '删除失败，请稍后重试' }, { status: 500 });
  }
}
