// PostgreSQL 连接池单例 (Route Handlers 共享)
// - 传统部署：常规连接池
// - Serverless（Vercel 等）：每个函数实例复用全局池，限制最大连接数
import { Pool } from 'pg';

const isServerless = !!process.env.VERCEL || !!process.env.AWS_LAMBDA_FUNCTION_NAME || !!process.env.CF_PAGES;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://forumlify:123456@localhost:5432/forumlify',
  ...(isServerless
    ? {
        max: 1,            // serverless 实例通常单并发
        idleTimeoutMillis: 5000,
        connectionTimeoutMillis: 10000,
        maxUses: 7500,     // 定期轮换连接，避免陈旧连接
      }
    : {}),
});

// 开发热重载时避免连接池泄漏
if (process.env.NODE_ENV !== 'production' && !globalThis.__forumlifyPool) {
  globalThis.__forumlifyPool = pool;
}

export default isServerless ? pool : (globalThis.__forumlifyPool || pool);
