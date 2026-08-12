// POST /api/auth/login
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '@/lib/db';
import { JWT_SECRET } from '@/lib/auth';
import { logAudit } from '@/lib/audit';

export async function POST(req) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return Response.json({ error: '请填写邮箱和密码' }, { status: 400 });
  }
  try {
    const r = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = r.rows[0];
    if (!user) {
      return Response.json({ error: '邮箱或密码错误' }, { status: 401 });
    }
    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
      return Response.json({ error: '邮箱或密码错误' }, { status: 401 });
    }
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    // 服务端审计：登录成功
    await logAudit(req, 'login', user.id);
    return Response.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        avatar_url: user.avatar_url,
        bio: user.bio,
        role: user.role,
      },
    });
  } catch {
    return Response.json({ error: '登录失败，请稍后重试' }, { status: 500 });
  }
}
