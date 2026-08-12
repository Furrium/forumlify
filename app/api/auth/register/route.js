// POST /api/auth/register
import bcrypt from 'bcryptjs';
import pool from '@/lib/db';
import { verifyCaptcha } from '@/lib/captcha';
import { logAudit } from '@/lib/audit';

export async function POST(req) {
  const { email, password, username, captcha_id, captcha_answer, captcha_sig } = await req.json();
  if (!email || !password || !username) {
    return Response.json({ error: '请填写完整信息' }, { status: 400 });
  }
  if (password.length < 6) {
    return Response.json({ error: '密码至少6位' }, { status: 400 });
  }
  // 服务端验证码校验（ENABLE_CAPTCHA 关闭时跳过）
  if (process.env.ENABLE_CAPTCHA !== 'false' && !verifyCaptcha(captcha_id, captcha_answer, captcha_sig)) {
    return Response.json({ error: '验证码错误，请重新计算' }, { status: 400 });
  }
  try {
    const countResult = await pool.query('SELECT COUNT(*) FROM users');
    const isFirstUser = parseInt(countResult.rows[0].count) === 0;

    const hash = await bcrypt.hash(password, 10);
    const avatar = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username) + '&background=6366f1&color=fff&size=64';
    const role = isFirstUser ? 'admin' : 'user';

    const r = await pool.query(
      `INSERT INTO users (email, password_hash, username, avatar_url, role)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, username, avatar_url, role, created_at`,
      [email, hash, username, avatar, role]
    );

    // 服务端审计：注册成功
    await logAudit(req, 'register', r.rows[0].id);
    return Response.json({
      user: r.rows[0],
      message: isFirstUser ? '你是第一个用户，已自动设为管理员！' : '注册成功',
    });
  } catch (err) {
    if (err.code === '23505') {
      return Response.json({ error: '邮箱或用户名已被注册' }, { status: 400 });
    }
    return Response.json({ error: '注册失败，请稍后重试' }, { status: 500 });
  }
}
