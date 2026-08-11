// GET /api/posts/[id]/replies, POST /api/posts/[id]/replies
import pool from '@/lib/db';
import { getUser } from '@/lib/auth';

export async function GET(req, { params }) {
  try {
    const r = await pool.query(
      `SELECT r.*, u.username, u.avatar_url
       FROM replies r
       JOIN users u ON r.user_id = u.id
       WHERE r.post_id = $1
       ORDER BY r.created_at ASC`,
      [(await params).id]
    );
    return Response.json(r.rows);
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}

export async function POST(req, { params }) {
  const user = getUser(req);
  if (!user) {
    return Response.json({ error: '请先登录' }, { status: 401 });
  }
  const { content } = await req.json();
  if (!content || content.trim().length === 0) {
    return Response.json({ error: '请填写回复内容' }, { status: 400 });
  }
  try {
    const r = await pool.query(
      `INSERT INTO replies (post_id, user_id, content)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [(await params).id, user.id, content]
    );
    await pool.query('UPDATE posts SET updated_at = NOW() WHERE id = $1', [(await params).id]);
    return Response.json(r.rows[0]);
  } catch {
    return Response.json({ error: '回复失败，请稍后重试' }, { status: 500 });
  }
}
