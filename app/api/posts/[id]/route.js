// GET /api/posts/[id], DELETE /api/posts/[id]
import pool from '@/lib/db';
import { getUser } from '@/lib/auth';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function invalidId() {
  return Response.json({ error: '帖子不存在' }, { status: 404 });
}

export async function GET(req, { params }) {
  if (!UUID_RE.test(params.id)) return invalidId();
  try {
    const r = await pool.query(
      `SELECT p.*, u.username, u.avatar_url
       FROM posts p
       JOIN users u ON p.user_id = u.id
       WHERE p.id = $1`,
      [params.id]
    );
    if (r.rows.length === 0) {
      return invalidId();
    }
    return Response.json(r.rows[0]);
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  if (!UUID_RE.test(params.id)) return invalidId();
  const user = getUser(req);
  if (!user) {
    return Response.json({ error: '请先登录' }, { status: 401 });
  }
  try {
    const post = await pool.query('SELECT user_id FROM posts WHERE id = $1', [params.id]);
    if (post.rows.length === 0) {
      return invalidId();
    }
    const u = await pool.query('SELECT role FROM users WHERE id = $1', [user.id]);
    if (post.rows[0].user_id !== user.id && u.rows[0]?.role !== 'admin') {
      return Response.json({ error: '无权限删除此帖子' }, { status: 403 });
    }
    await pool.query('DELETE FROM posts WHERE id = $1', [params.id]);
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: '删除失败，请稍后重试' }, { status: 500 });
  }
}
