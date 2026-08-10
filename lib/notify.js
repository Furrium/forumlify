// 通知工具（供各 Route Handler 调用）
import pool from './db';

// 创建通知（内部函数，静默失败不影响主流程）
export async function createNotification(userId, type, title, content, link = null) {
  try {
    await pool.query(
      'INSERT INTO notifications (user_id, type, title, content, link) VALUES ($1, $2, $3, $4, $5)',
      [userId, type, title, content, link]
    );
  } catch {
    // 静默失败
  }
}
