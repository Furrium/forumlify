// GET /api/users/profile/:username — 用户公开信息（无需登录，用于用户主页）
import pool from '@/lib/db';

export async function GET(req, { params }) {
  const { username } = await params;
  if (!username) {
    return Response.json({ error: '缺少用户名' }, { status: 400 });
  }
  try {
    const r = await pool.query(
      'SELECT id, username, avatar_url, bio, role, signature, created_at FROM users WHERE username = $1',
      [username]
    );
    if (r.rows.length === 0) {
      return Response.json({ error: '用户不存在' }, { status: 404 });
    }
    return Response.json(r.rows[0]);
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}
