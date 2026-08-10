// GET /api/conversations/[id]/messages, POST /api/conversations/[id]/messages
import pool from '@/lib/db';
import { getUser } from '@/lib/auth';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function GET(req, { params }) {
  const user = getUser(req);
  if (!user) {
    return Response.json({ error: '请先登录' }, { status: 401 });
  }
  if (!UUID_RE.test(params.id)) {
    return Response.json({ error: '无权限访问此会话' }, { status: 403 });
  }
  try {
    const check = await pool.query(`
      SELECT id FROM conversations
      WHERE id = $1 AND (user1_id = $2 OR user2_id = $2)
    `, [params.id, user.id]);
    if (check.rows.length === 0) {
      return Response.json({ error: '无权限访问此会话' }, { status: 403 });
    }
    const r = await pool.query(`
      SELECT
        m.*,
        u.username as sender_username,
        u.avatar_url as sender_avatar_url
      FROM messages m
      JOIN users u ON m.sender_id = u.id
      WHERE m.conversation_id = $1
      ORDER BY m.created_at ASC
    `, [params.id]);
    await pool.query(`
      UPDATE messages SET is_read = true
      WHERE conversation_id = $1 AND sender_id != $2 AND is_read = false
    `, [params.id, user.id]);
    return Response.json(r.rows);
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}

export async function POST(req, { params }) {
  const user = getUser(req);
  if (!user) {
    return Response.json({ error: '请先登录' }, { status: 401 });
  }
  if (!UUID_RE.test(params.id)) {
    return Response.json({ error: '无权限访问此会话' }, { status: 403 });
  }
  const { content } = await req.json();
  if (!content || content.trim().length === 0) {
    return Response.json({ error: '请填写消息内容' }, { status: 400 });
  }
  try {
    const check = await pool.query(`
      SELECT id FROM conversations
      WHERE id = $1 AND (user1_id = $2 OR user2_id = $2)
    `, [params.id, user.id]);
    if (check.rows.length === 0) {
      return Response.json({ error: '无权限访问此会话' }, { status: 403 });
    }
    const r = await pool.query(`
      INSERT INTO messages (conversation_id, sender_id, content)
      VALUES ($1, $2, $3)
      RETURNING *
    `, [params.id, user.id, content]);
    await pool.query('UPDATE conversations SET last_message_at = NOW() WHERE id = $1', [params.id]);
    const userInfo = await pool.query('SELECT username, avatar_url FROM users WHERE id = $1', [user.id]);
    return Response.json({
      ...r.rows[0],
      sender_username: userInfo.rows[0].username,
      sender_avatar_url: userInfo.rows[0].avatar_url,
    });
  } catch {
    return Response.json({ error: '发送失败，请稍后重试' }, { status: 500 });
  }
}
