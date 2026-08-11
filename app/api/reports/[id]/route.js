// PUT /api/reports/[id]
import pool from '@/lib/db';
import { getUser, requireAdmin } from '@/lib/auth';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function PUT(req, { params }) {
  if (!UUID_RE.test((await params).id)) {
    return Response.json({ error: '操作失败，请稍后重试' }, { status: 404 });
  }
  const user = getUser(req);
  if (!user) {
    return Response.json({ error: '请先登录' }, { status: 401 });
  }
  const forbidden = await requireAdmin(user);
  if (forbidden) return forbidden;

  const { status, note } = await req.json();
  if (!['pending', 'approved', 'rejected'].includes(status)) {
    return Response.json({ error: '无效的状态' }, { status: 400 });
  }
  try {
    await pool.query(
      `UPDATE reports
       SET status = $1, handled_at = NOW(), handler_id = $2, handler_note = $3
       WHERE id = $4`,
      [status, user.id, note || '', (await params).id]
    );
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: '操作失败，请稍后重试' }, { status: 500 });
  }
}
