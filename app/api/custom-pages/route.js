// GET /api/custom-pages — 公开页面列表
import pool from '@/lib/db';

export async function GET() {
  try {
    const r = await pool.query(
      'SELECT id, name, title FROM custom_pages WHERE enabled = true ORDER BY created_at'
    );
    return Response.json(r.rows);
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}
