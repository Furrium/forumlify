// POST /api/auth/recovery-codes/generate — 生成 10 个恢复码
import bcrypt from 'bcryptjs';
import pool from '@/lib/db';
import { getUser } from '@/lib/auth';

function generateRecoveryCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 20; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
    if (i === 4 || i === 9 || i === 14) code += '-';
  }
  return code;
}

export async function POST(req) {
  const user = getUser(req);
  if (!user) return Response.json({ error: '请先登录' }, { status: 401 });
  try {
    await pool.query('DELETE FROM recovery_codes WHERE user_id = $1', [user.id]);
    const codes = [];
    for (let i = 0; i < 10; i++) {
      const code = generateRecoveryCode();
      codes.push(code);
      const hash = await bcrypt.hash(code, 10);
      await pool.query(
        'INSERT INTO recovery_codes (user_id, code_hash) VALUES ($1, $2)',
        [user.id, hash]
      );
    }
    return Response.json({ success: true, codes });
  } catch {
    return Response.json({ error: '生成失败，请稍后重试' }, { status: 500 });
  }
}
