// GET /api/event-logs, POST /api/event-logs
import pool from '@/lib/db';
import { getUser, requireAdmin } from '@/lib/auth';

export async function GET(req) {
  const user = getUser(req);
  if (!user) {
    return Response.json({ error: '请先登录' }, { status: 401 });
  }
  const forbidden = await requireAdmin(user);
  if (forbidden) return forbidden;
  try {
    const r = await pool.query(
      `SELECT el.*, u.username
       FROM event_logs el
       LEFT JOIN users u ON el.user_id = u.id
       ORDER BY el.created_at DESC
       LIMIT 100`
    );
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
  const { action } = await req.json();
  try {
    await pool.query(
      `INSERT INTO event_logs (user_id, action, ip)
       VALUES ($1, $2, $3)`,
      [user.id, action, req.headers.get('x-forwarded-for') || '0.0.0.0']
    );
    return Response.json({ success: true });
  } catch {
    return Response.json({ success: true });
  }
}
