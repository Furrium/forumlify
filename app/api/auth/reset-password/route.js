// POST /api/auth/reset-password — 用恢复码重置密码（公开）
import bcrypt from 'bcrypt';
import pool from '@/lib/db';

export async function POST(req) {
  const { email, recoveryCode, newPassword } = await req.json();
  if (!email || !recoveryCode || !newPassword) {
    return Response.json({ error: '请填写完整信息' }, { status: 400 });
  }
  if (newPassword.length < 6) {
    return Response.json({ error: '密码至少6位' }, { status: 400 });
  }
  try {
    const user = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
    if (user.rows.length === 0) {
      return Response.json({ error: '用户不存在' }, { status: 404 });
    }
    const codes = await pool.query(
      'SELECT id, code_hash FROM recovery_codes WHERE user_id = $1 AND is_used = false',
      [user.rows[0].id]
    );
    let matched = false;
    let matchedId = null;
    for (const row of codes.rows) {
      const valid = await bcrypt.compare(recoveryCode, row.code_hash);
      if (valid) { matched = true; matchedId = row.id; break; }
    }
    if (!matched) {
      return Response.json({ error: '恢复码无效或已使用' }, { status: 400 });
    }
    await pool.query('UPDATE recovery_codes SET is_used = true WHERE id = $1', [matchedId]);
    const hash = await bcrypt.hash(newPassword, 10);
    await pool.query('UPDATE users SET password_hash = $1 WHERE id = $2', [hash, user.rows[0].id]);
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: '重置失败，请稍后重试' }, { status: 500 });
  }
}
