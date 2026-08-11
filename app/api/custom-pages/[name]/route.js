// GET /api/custom-pages/[name] — 公开单个页面
import pool from '@/lib/db';
import { jsonWithEtag } from '@/lib/http-cache';

export async function GET(req, { params }) {
  try {
    const r = await pool.query(
      'SELECT id, name, title, content FROM custom_pages WHERE name = $1 AND enabled = true',
      [(await params).name]
    );
    if (r.rows.length === 0) {
      return Response.json({ error: '页面不存在' }, { status: 404 });
    }
    return jsonWithEtag(req, r.rows[0]);
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}
