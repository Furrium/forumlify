// PUT /api/posts/[id]/pin — 置顶/取消置顶（管理员）
import pool from '@/lib/db';
import { getUser, requireAdmin } from '@/lib/auth';
import { createNotification } from '@/lib/notify';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function PUT(req, { params }) {
  const user = getUser(req);
  if (!user) return Response.json({ error: '请先登录' }, { status: 401 });
  const forbidden = await requireAdmin(user);
  if (forbidden) return forbidden;
  if (!UUID_RE.test((await params).id)) {
    return Response.json({ error: '帖子不存在' }, { status: 404 });
  }

  try {
    const post = await pool.query('SELECT id, user_id FROM posts WHERE id = $1', [(await params).id]);
    if (post.rows.length === 0) {
      return Response.json({ error: '帖子不存在' }, { status: 404 });
    }
    const check = await pool.query('SELECT is_pinned FROM posts WHERE id = $1', [(await params).id]);
    const isPinned = check.rows[0].is_pinned;

    const r = await pool.query(
      `UPDATE posts SET is_pinned = $1, pinned_at = $2 WHERE id = $3 RETURNING *`,
      [!isPinned, !isPinned ? new Date().toISOString() : null, (await params).id]
    );

    await createNotification(
      post.rows[0].user_id,
      'system',
      isPinned ? '你的帖子已被取消置顶' : '你的帖子已被置顶',
      isPinned ? '管理员取消了你的帖子置顶' : '管理员把你的帖子置顶了',
      '/?post=' + (await params).id
    );

    return Response.json(r.rows[0]);
  } catch {
    return Response.json({ error: '操作失败，请稍后重试' }, { status: 500 });
  }
}
