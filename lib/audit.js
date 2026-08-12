// 服务端审计日志（对齐上游 PR #22：审计日志服务端拥有，不可伪造）
// 用法：await logAudit(req, action)
import pool from '@/lib/db';

// 从请求提取客户端 IP（支持 X-Forwarded-For / CF 头）
function clientIp(req) {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim().slice(0, 45);
  const cf = req.headers.get('cf-connecting-ip');
  if (cf) return cf.slice(0, 45);
  return null;
}

// 记录一条审计日志（写入失败不影响主流程，静默忽略）
export async function logAudit(req, action, userId = null) {
  try {
    if (userId) {
      await pool.query(
        `INSERT INTO event_logs (user_id, action, ip) VALUES ($1, $2, $3)`,
        [userId, String(action).slice(0, 50), clientIp(req)]
      );
    } else {
      await pool.query(
        `INSERT INTO event_logs (action, ip) VALUES ($1, $2)`,
        [String(action).slice(0, 50), clientIp(req)]
      );
    }
  } catch {
    // 审计失败不应阻断主流程
  }
}
