// GET /api/stats
import pool from '@/lib/db';

export async function GET() {
  try {
    const [postsRes, usersRes] = await Promise.all([
      pool.query('SELECT COUNT(*) FROM posts'),
      pool.query('SELECT COUNT(*) FROM users'),
    ]);
    return Response.json({
      posts: parseInt(postsRes.rows[0].count) || 0,
      users: parseInt(usersRes.rows[0].count) || 0,
      topics: parseInt(postsRes.rows[0].count) || 0,
      online: Math.floor(Math.random() * 20) + 5,
    });
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}
