// GET /api/links, POST /api/links
import pool from '@/lib/db';
import { getUser, requireAdmin } from '@/lib/auth';
import { jsonWithEtag } from '@/lib/http-cache';

// 避免 GET 被静态优化导致写方法 405（动态接口，不能缓存）
export const dynamic = 'force-dynamic';


export async function GET(req) {
  try {
    const r = await pool.query('SELECT * FROM friendly_links ORDER BY sort_order');
    return jsonWithEtag(req, r.rows);
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}

export async function POST(req) {
  const user = getUser(req);
  if (!user) {
    return Response.json({ error: '请先登录' }, { status: 401 });
  }
  const forbidden = await requireAdmin(user);
  if (forbidden) return forbidden;

  const { title, url } = await req.json();
  if (!title || !url) {
    return Response.json({ error: '请填写完整信息' }, { status: 400 });
  }
  try {
    const r = await pool.query(
      `INSERT INTO friendly_links (title, url)
       VALUES ($1, $2)
       RETURNING *`,
      [title, url]
    );
    return Response.json(r.rows[0]);
  } catch {
    return Response.json({ error: '添加失败，请稍后重试' }, { status: 500 });
  }
}
