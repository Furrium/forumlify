// GET /api/admin/custom-pages, POST /api/admin/custom-pages — 管理 CRUD
import pool from '@/lib/db';
import { getUser, requireAdmin } from '@/lib/auth';

export async function GET(req) {
  const user = getUser(req);
  const forbidden = await requireAdmin(user);
  if (forbidden) return forbidden;
  try {
    const r = await pool.query(
      'SELECT id, name, title, content, enabled, created_at, updated_at FROM custom_pages ORDER BY created_at'
    );
    return Response.json(r.rows);
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}

export async function POST(req) {
  const user = getUser(req);
  if (!user) return Response.json({ error: '请先登录' }, { status: 401 });
  const forbidden = await requireAdmin(user);
  if (forbidden) return forbidden;

  const { name, title, content } = await req.json();
  if (!name || !title || !content) {
    return Response.json({ error: '请填写完整信息' }, { status: 400 });
  }
  if (!/^[a-zA-Z0-9\-_]+$/.test(name)) {
    return Response.json({ error: '页面名称只允许字母、数字、短横线和下划线' }, { status: 400 });
  }
  try {
    const r = await pool.query(
      `INSERT INTO custom_pages (name, title, content)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [name, title, content]
    );
    return Response.json(r.rows[0]);
  } catch (err) {
    if (err.code === '23505') {
      return Response.json({ error: '页面名称已存在' }, { status: 400 });
    }
    return Response.json({ error: '创建失败，请稍后重试' }, { status: 500 });
  }
}
