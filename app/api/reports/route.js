// GET /api/reports, POST /api/reports
import pool from '@/lib/db';
import { getUser, requireAdmin } from '@/lib/auth';

export async function GET(req) {
  const user = getUser(req);
  const forbidden = await requireAdmin(user);
  if (forbidden) return forbidden;
  try {
    const r = await pool.query(`
      SELECT
        r.*,
        reporter.username as reporter_name,
        handler.username as handler_name,
        p.title as post_title,
        p.content as post_content
      FROM reports r
      JOIN users reporter ON r.reporter_id = reporter.id
      LEFT JOIN users handler ON r.handler_id = handler.id
      LEFT JOIN posts p ON r.post_id = p.id
      ORDER BY r.created_at DESC
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
  const { post_id, reason } = await req.json();
  if (!post_id || !reason) {
    return Response.json({ error: '请填写完整信息' }, { status: 400 });
  }
  try {
    const existing = await pool.query(
      'SELECT id FROM reports WHERE post_id = $1 AND reporter_id = $2 AND status = $3',
      [post_id, user.id, 'pending']
    );
    if (existing.rows.length > 0) {
      return Response.json({ error: '你已经举报过此帖子，请等待处理' }, { status: 400 });
    }
    await pool.query(
      `INSERT INTO reports (post_id, reporter_id, reason)
       VALUES ($1, $2, $3)`,
      [post_id, user.id, reason]
    );
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: '举报失败，请稍后重试' }, { status: 500 });
  }
}
