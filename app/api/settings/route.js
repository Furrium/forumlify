// GET /api/settings, PUT /api/settings
import pool from '@/lib/db';
import { getUser, requireAdmin } from '@/lib/auth';

export async function GET() {
  try {
    const r = await pool.query('SELECT key, value FROM settings');
    const settings = {};
    r.rows.forEach((row) => { settings[row.key] = row.value; });
    return Response.json(settings);
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}

export async function PUT(req) {
  const user = getUser(req);
  const forbidden = await requireAdmin(user);
  if (forbidden) return forbidden;

  const { forum_name } = await req.json();
  if (!forum_name || forum_name.trim().length === 0) {
    return Response.json({ error: '论坛名称不能为空' }, { status: 400 });
  }
  try {
    await pool.query(
      `INSERT INTO settings (key, value) VALUES ($1, $2)
       ON CONFLICT (key) DO UPDATE SET value = $2, updated_at = NOW()`,
      ['forum_name', forum_name.trim()]
    );
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: '更新失败，请稍后重试' }, { status: 500 });
  }
}
