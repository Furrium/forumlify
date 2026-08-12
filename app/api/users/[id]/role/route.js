// PUT /api/users/[id]/role (admin 改角色)
import pool from '@/lib/db';
import { getUser, isSuperAdmin, requireAdmin } from '@/lib/auth';

export async function PUT(req, { params }) {
  const { id } = await params;
  const user = getUser(req);
  if (!user) {
    return Response.json({ error: '请先登录' }, { status: 401 });
  }
  const forbidden = await requireAdmin(user);
  if (forbidden) return forbidden;

  const { role } = await req.json();
  if (!['user', 'admin'].includes(role)) {
    return Response.json({ error: '无效的角色' }, { status: 400 });
  }
  if (id === user.id) {
    return Response.json({ error: '不能修改自己的角色' }, { status: 400 });
  }
  try {
    if (role !== 'admin' && await isSuperAdmin(id)) {
      return Response.json({ error: '不能降级超级管理员' }, { status: 403 });
    }
    await pool.query('UPDATE users SET role = $1 WHERE id = $2', [role, id]);
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}
