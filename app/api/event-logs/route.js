// GET /api/event-logs, POST /api/event-logs
import pool from '@/lib/db';
import { getUser, requireAdmin } from '@/lib/auth';

// 避免 GET 被静态优化导致写方法 405（动态接口，不能缓存）
export const dynamic = 'force-dynamic';


export async function GET(req) {
  const user = getUser(req);
  if (!user) {
    return Response.json({ error: '请先登录' }, { status: 401 });
  }
  const forbidden = await requireAdmin(user);
  if (forbidden) return forbidden;
  try {
    const r = await pool.query(
      `SELECT el.*, u.username
       FROM event_logs el
       LEFT JOIN users u ON el.user_id = u.id
       ORDER BY el.created_at DESC
       LIMIT 100`
    );
    return Response.json(r.rows);
  } catch {
    return Response.json({ error: '服务器错误' }, { status: 500 });
  }
}

// 审计日志由服务端在关键操作后记录（对齐上游 PR #22）——
// 客户端上报端点已移除，防止伪造审计记录
