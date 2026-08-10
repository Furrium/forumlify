// GET /api/auth/recovery-codes/count — 剩余恢复码数量
import pool from '@/lib/db';
import { getUser } from '@/lib/auth';

export async function GET(req) {
  const user = getUser(req);
  if (!user) return Response.json({ error: '请先登录' }, { status: 401 });
  try {
    const r = await pool.query(
      'SELECT COUNT(*) FROM recovery_codes WHERE user_id = $1 AND is_used = false',
      [user.id]
    );
    return Response.json({ count: parseInt(r.rows[0].count) || 0 });
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}
