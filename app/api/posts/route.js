// GET /api/posts, POST /api/posts — 支持 ?sort= & ?user_id= & 分页
import pool from '@/lib/db';
import { getUser } from '@/lib/auth';
import { jsonWithEtag } from '@/lib/http-cache';

// 避免 GET 被静态优化导致写方法 405（动态接口，不能缓存）
export const dynamic = 'force-dynamic';


export async function GET(req) {
  const url = new URL(req.url);
  const sort = url.searchParams.get('sort') === 'hot' ? 'updated_at' : 'created_at';
  const userId = url.searchParams.get('user_id');
  const page = parseInt(url.searchParams.get('page')) || 1;
  const limit = parseInt(url.searchParams.get('limit')) || 20;
  const offset = (page - 1) * limit;

  try {
    const params = [];
    let where = '';
    if (userId) {
      where = ' WHERE p.user_id = $1';
      (await params).push(userId);
    }

    const countResult = await pool.query(`SELECT COUNT(*) as total FROM posts p${where}`, params);
    const total = parseInt(countResult.rows[0]?.total || 0);

    const r = await pool.query(`
      SELECT
        p.*,
        u.username,
        u.avatar_url,
        u.signature,
        (SELECT COUNT(*) FROM replies WHERE post_id = p.id) as reply_count
      FROM posts p
      JOIN users u ON p.user_id = u.id
      ${where}
      ORDER BY is_pinned DESC, pinned_at DESC NULLS LAST, ${sort} DESC
      LIMIT $${(await params).length + 1} OFFSET $${(await params).length + 2}
    `, [...params, limit, offset]);

    return jsonWithEtag(req, {
      data: r.rows,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}

export async function POST(req) {
  const user = getUser(req);
  if (!user) {
    return Response.json({ error: '请先登录' }, { status: 401 });
  }
  const { title, content, images } = await req.json();
  if (!content || content.trim().length === 0) {
    return Response.json({ error: '请填写内容' }, { status: 400 });
  }
  try {
    const r = await pool.query(
      `INSERT INTO posts (user_id, title, content, images)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [user.id, title || '无标题', content, images || []]
    );
    return Response.json(r.rows[0]);
  } catch {
    return Response.json({ error: '发布失败，请稍后重试' }, { status: 500 });
  }
}
