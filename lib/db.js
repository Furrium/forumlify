// PostgreSQL 连接池单例 (Route Handlers 共享)
import { Pool } from 'pg';

const globalPool = globalThis.__forumlifyPool || new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://forumlify:123456@localhost:5432/forumlify',
});

if (process.env.NODE_ENV !== 'production') {
  globalThis.__forumlifyPool = globalPool;
}

export default globalPool;
