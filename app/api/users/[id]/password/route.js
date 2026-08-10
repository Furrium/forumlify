// PUT /api/users/[id]/password — 修改密码
import bcrypt from 'bcrypt';
import pool from '@/lib/db';
import { getUser } from '@/lib/auth';

export async function PUT(req, { params }) {
  const user = getUser(req);
  if (!user) return Response.json({ error: '请先登录' }, { status: 401 });
  if (params.id !== user.id) {
    return Response.json({ error: '无权限' }, { status: 403 });
  }
  const { oldPassword, newPassword } = await req.json();
  if (!oldPassword || !newPassword) {
    return Response.json({ error: '请填写完整信息' }, { status: 400 });
  }
  if (newPassword.length < 6) {
    return Response.json({ error: '新密码至少6位' }, { status: 400 });
  }
  try {
    const u = await pool.query('SELECT password_hash FROM users WHERE id = $1', [params.id]);
    if (u.rows.length === 0) {
      return Response.json({ error: '用户不存在' }, { status: 404 });
    }
    const valid = await bcrypt.compare(oldPassword, u.rows[0].password_hash);
    if (!valid) {
      return Response.json({ error: '当前密码错误' }, { status: 400 });
    }
    const hash = await bcrypt.hash(newPassword, 10);
    await pool.query('UPDATE users SET password_hash = $1 WHERE id = $2', [hash, params.id]);
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: '修改失败，请稍后重试' }, { status: 500 });
  }
}
