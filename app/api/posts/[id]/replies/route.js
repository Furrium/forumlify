// GET /api/posts/[id]/replies, POST /api/posts/[id]/replies
import pool from '@/lib/db';
import { getUser } from '@/lib/auth';
import { jsonWithEtag } from '@/lib/http-cache';
import { verifyCaptcha } from '@/lib/captcha';

export async function GET(req, { params }) {
  try {
    const r = await pool.query(
      `SELECT r.*, u.username, u.avatar_url,
              ru.username AS reply_to_username
       FROM replies r
       JOIN users u ON r.user_id = u.id
       LEFT JOIN replies rt ON r.reply_to_id = rt.id
       LEFT JOIN users ru ON rt.user_id = ru.id
       WHERE r.post_id = $1
       ORDER BY r.created_at ASC`,
      [(await params).id]
    );
    return jsonWithEtag(req, r.rows);
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}

export async function POST(req, { params }) {
  const user = getUser(req);
  if (!user) {
    return Response.json({ error: '请先登录' }, { status: 401 });
  }
  const { content, captcha_id, captcha_answer, captcha_sig, reply_to_id } = await req.json();
  if (!content || content.trim().length === 0) {
    return Response.json({ error: '请填写回复内容' }, { status: 400 });
  }
  // 服务端验证码校验（ENABLE_CAPTCHA 关闭时跳过）
  if (process.env.ENABLE_CAPTCHA !== 'false' && !verifyCaptcha(captcha_id, captcha_answer, captcha_sig)) {
    return Response.json({ error: '验证码错误，请重新计算' }, { status: 400 });
  }
  try {
    const r = await pool.query(
      `INSERT INTO replies (post_id, user_id, content, reply_to_id)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [(await params).id, user.id, content, reply_to_id || null]
    );
    await pool.query('UPDATE posts SET updated_at = NOW() WHERE id = $1', [(await params).id]);
    return Response.json(r.rows[0]);
  } catch {
    return Response.json({ error: '回复失败，请稍后重试' }, { status: 500 });
  }
}
