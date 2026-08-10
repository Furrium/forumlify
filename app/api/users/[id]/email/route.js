// PUT /api/users/[id]/email — 修改邮箱（需密码验证）
import bcrypt from 'bcrypt';
import pool from '@/lib/db';
import { getUser } from '@/lib/auth';

export async function PUT(req, { params }) {
  const user = getUser(req);
  if (!user) return Response.json({ error: '请先登录' }, { status: 401 });
  if (params.id !== user.id) {
    return Response.json({ error: '无权限' }, { status: 403 });
  }
  const { password, newEmail } = await req.json();
  if (!password || !newEmail) {
    return Response.json({ error: '请填写完整信息' }, { status: 400 });
  }
  try {
    const u = await pool.query('SELECT password_hash FROM users WHERE id = $1', [params.id]);
    if (u.rows.length === 0) {
      return Response.json({ error: '用户不存在' }, { status: 404 });
    }
    const valid = await bcrypt.compare(password, u.rows[0].password_hash);
    if (!valid) {
      return Response.json({ error: '密码错误' }, { status: 400 });
    }
    const existing = await pool.query('SELECT id FROM users WHERE email = $1 AND id != $2', [newEmail, params.id]);
    if (existing.rows.length > 0) {
      return Response.json({ error: '邮箱已被占用' }, { status: 400 });
    }
    await pool.query('UPDATE users SET email = $1 WHERE id = $2', [newEmail, params.id]);
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: '修改失败，请稍后重试' }, { status: 500 });
  }
}
