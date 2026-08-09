// 测试辅助工具
import pg from 'pg';

// 从 DATABASE_URL 或默认连接串读取（与测试库保持一致）
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://forumlify:123456@localhost:5433/forumlify',
});

// 把指定用户提升为管理员（绕过"第一个用户才 admin"的限制，保证每个测试文件可独立获得 admin）
export async function makeAdmin(email) {
  await pool.query('UPDATE users SET role = $1 WHERE email = $2', ['admin', email]);
  await pool.end();
}

// 清理测试数据（可选）
export async function cleanup(emails) {
  for (const email of emails) {
    await pool.query('DELETE FROM users WHERE email = $1', [email]);
  }
  await pool.end();
}
