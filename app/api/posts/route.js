// GET /api/posts, POST /api/posts
import pool from '@/lib/db';
import { getUser } from '@/lib/auth';

export async function GET(req) {
  const url = new URL(req.url);
  const sort = url.searchParams.get('sort') === 'hot' ? 'updated_at' : 'created_at';
  try {
    const r = await pool.query(`
      SELECT
        p.*,
        u.username,
        u.avatar_url,
        (SELECT COUNT(*) FROM replies WHERE post_id = p.id) as reply_count
      FROM posts p
      JOIN users u ON p.user_id = u.id
      ORDER BY ${sort} DESC
    `);
    return Response.json(r.rows);
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}

export async function POST(req) {
  const user = getUser(req);
  if (!user) {
    return Response.json({ error: '请先登录' }, { status: 401 });
  }
  const { title, content, images } = await req.json();
  if (!content || content.trim().length === 0) {
    return Response.json({ error: '请填写内容' }, { status: 400 });
  }
  try {
    const r = await pool.query(
      `INSERT INTO posts (user_id, title, content, images)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [user.id, title || '无标题', content, images || []]
    );
    return Response.json(r.rows[0]);
  } catch {
    return Response.json({ error: '发布失败，请稍后重试' }, { status: 500 });
  }
}
