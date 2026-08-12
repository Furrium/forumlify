// PUT /api/users/[id]  (更新资料), PUT /api/users/[id]/role (改角色)
import pool from '@/lib/db';
import { getUser, isSuperAdmin, requireAdmin } from '@/lib/auth';

export async function PUT(req, { params }) {
  const { id } = await params;
  const user = getUser(req);
  if (!user) {
    return Response.json({ error: '请先登录' }, { status: 401 });
  }

  const body = await req.json();
  const { username, bio, signature, role } = body;

  // 改角色：仅管理员
  if (role !== undefined) {
    const forbidden = await requireAdmin(user);
    if (forbidden) return forbidden;
    if (!['user', 'admin'].includes(role)) {
      return Response.json({ error: '无效的角色' }, { status: 400 });
    }
    if (id === user.id) {
      return Response.json({ error: '不能修改自己的角色' }, { status: 400 });
    }
    // 超级管理员不能被降级（兼容旧的角色更新入口）
    if (role !== 'admin' && await isSuperAdmin(id)) {
      return Response.json({ error: '不能降级超级管理员' }, { status: 403 });
    }
    try {
      await pool.query('UPDATE users SET role = $1 WHERE id = $2', [role, id]);
      return Response.json({ success: true });
    } catch {
      return Response.json({ error: '服务器错误' }, { status: 500 });
    }
  }

  // 更新资料：仅本人
  if (id !== user.id) {
    return Response.json({ error: '无权限修改他人资料' }, { status: 403 });
  }
  try {
    await pool.query('UPDATE users SET username = $1, bio = $2, signature = $3 WHERE id = $4', [username, bio || '', signature || '', id]);
    return Response.json({ success: true });
  } catch (err) {
    if (err.code === '23505') {
      return Response.json({ error: '用户名已被占用' }, { status: 400 });
    }
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}
