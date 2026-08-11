// PUT /api/users/[id]/avatar — 修改头像
import pool from '@/lib/db';
import { getUser } from '@/lib/auth';

export async function PUT(req, { params }) {
  const user = getUser(req);
  if (!user) return Response.json({ error: '请先登录' }, { status: 401 });
  if ((await params).id !== user.id) {
    return Response.json({ error: '无权限修改他人头像' }, { status: 403 });
  }
  const { avatar_url } = await req.json();
  if (!avatar_url) {
    return Response.json({ error: '请提供头像地址' }, { status: 400 });
  }
  try {
    await pool.query('UPDATE users SET avatar_url = $1 WHERE id = $2', [avatar_url, (await params).id]);
    return Response.json({ success: true, avatar_url });
  } catch {
    return Response.json({ error: '更新失败，请稍后重试' }, { status: 500 });
  }
}
