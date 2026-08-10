// GET /api/custom-pages/[name] — 公开单个页面
import pool from '@/lib/db';

export async function GET(req, { params }) {
  try {
    const r = await pool.query(
      'SELECT id, name, title, content FROM custom_pages WHERE name = $1 AND enabled = true',
      [params.name]
    );
    if (r.rows.length === 0) {
      return Response.json({ error: '页面不存在' }, { status: 404 });
    }
    return Response.json(r.rows[0]);
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}
