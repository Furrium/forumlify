// 回复表兼容层：存量数据库不会因 CREATE TABLE IF NOT EXISTS 自动获得新列。
// 仅读取现有结构，不在用户请求中执行 DDL；旧库降级到
// reply_to_username 或不记录回复目标，避免读取和普通回复整体失败。
import pool from '@/lib/db';

const REPLY_COLUMNS_SQL = `
  SELECT attname AS column_name
  FROM pg_attribute
  WHERE attrelid = to_regclass('replies')
    AND attnum > 0
    AND NOT attisdropped
    AND attname IN ('reply_to_id', 'reply_to_username')
`;

async function inspectReplyColumns() {
  const result = await pool.query(REPLY_COLUMNS_SQL);
  const columns = new Set(result.rows.map((row) => row.column_name));
  return {
    replyToId: columns.has('reply_to_id'),
    replyToUsername: columns.has('reply_to_username'),
  };
}

export function getReplySchemaCapabilities() {
  if (!globalThis.__forumlifyReplySchemaPromise) {
    globalThis.__forumlifyReplySchemaPromise = inspectReplyColumns().catch((error) => {
      globalThis.__forumlifyReplySchemaPromise = null;
      throw error;
    });
  }
  return globalThis.__forumlifyReplySchemaPromise;
}
