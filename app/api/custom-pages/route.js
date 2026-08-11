// GET /api/custom-pages — 公开页面列表
import pool from '@/lib/db';
import { jsonWithEtag } from '@/lib/http-cache';

export async function GET(req) {
  try {
    const r = await pool.query(
      'SELECT id, name, title FROM custom_pages WHERE enabled = true ORDER BY created_at'
    );
    return jsonWithEtag(req, r.rows);
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}
