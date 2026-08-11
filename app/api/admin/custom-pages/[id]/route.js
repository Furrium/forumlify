// PUT /api/admin/custom-pages/[id], DELETE /api/admin/custom-pages/[id]
import pool from '@/lib/db';
import { getUser, requireAdmin } from '@/lib/auth';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function PUT(req, { params }) {
  const user = getUser(req);
  if (!user) return Response.json({ error: '请先登录' }, { status: 401 });
  const forbidden = await requireAdmin(user);
  if (forbidden) return forbidden;
  if (!UUID_RE.test((await params).id)) {
    return Response.json({ error: '页面不存在' }, { status: 404 });
  }

  const { title, content, enabled } = await req.json();
  try {
    const r = await pool.query(
      `UPDATE custom_pages
       SET title = $1, content = $2, enabled = $3, updated_at = NOW()
       WHERE id = $4
       RETURNING *`,
      [title, content, enabled, (await params).id]
    );
    if (r.rows.length === 0) {
      return Response.json({ error: '页面不存在' }, { status: 404 });
    }
    return Response.json(r.rows[0]);
  } catch {
    return Response.json({ error: '更新失败，请稍后重试' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const user = getUser(req);
  if (!user) return Response.json({ error: '请先登录' }, { status: 401 });
  const forbidden = await requireAdmin(user);
  if (forbidden) return forbidden;
  if (!UUID_RE.test((await params).id)) {
    return Response.json({ error: '页面不存在' }, { status: 404 });
  }
  try {
    await pool.query('DELETE FROM custom_pages WHERE id = $1', [(await params).id]);
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: '删除失败，请稍后重试' }, { status: 500 });
  }
}
