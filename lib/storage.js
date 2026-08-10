// 存储抽象层：本地文件系统 或 S3 兼容对象存储（R2/MinIO/AWS S3）
// - 传统部署（Docker/裸机）：默认本地磁盘 uploads/，零配置
// - Serverless（Vercel/CF Workers）：设置 S3_* 环境变量，用 aws4fetch 走对象存储
//
// 需要额外安装: bun add aws4fetch （仅在启用 S3 时必需）

import { AwsClient } from 'aws4fetch';

const S3_ENDPOINT = process.env.S3_ENDPOINT;
const S3_BUCKET = process.env.S3_BUCKET;
const S3_REGION = process.env.S3_REGION || 'auto';
const S3_ACCESS_KEY = process.env.S3_ACCESS_KEY_ID || process.env.S3_ACCESS_KEY;
const S3_SECRET_KEY = process.env.S3_SECRET_ACCESS_KEY || process.env.S3_SECRET_KEY;
const S3_PUBLIC_URL = process.env.S3_PUBLIC_URL; // 公开访问前缀，如 https://cdn.example.com

export const STORAGE_TYPE = S3_ENDPOINT && S3_BUCKET && S3_ACCESS_KEY ? 's3' : 'local';

const aws = STORAGE_TYPE === 's3'
  ? new AwsClient({ accessKeyId: S3_ACCESS_KEY, secretAccessKey: S3_SECRET_KEY, region: S3_REGION, service: 's3' })
  : null;

function objectUrl(name) {
  return `${S3_ENDPOINT}/${S3_BUCKET}/${name}`;
}

// 保存对象 → 返回公开 URL（S3 用 S3_PUBLIC_URL 前缀，本地用 /uploads/）
export async function saveObject(name, buffer, contentType) {
  if (STORAGE_TYPE === 'local') {
    const { writeFile, mkdir } = await import('fs/promises');
    const path = await import('path');
    const dir = path.join(process.cwd(), 'uploads');
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, name), buffer);
    return { url: '/uploads/' + name };
  }
  await aws.fetch(objectUrl(name), {
    method: 'PUT',
    headers: { 'Content-Type': contentType || 'application/octet-stream' },
    body: new Uint8Array(buffer),
  });
  const base = (S3_PUBLIC_URL || S3_ENDPOINT).replace(/\/$/, '');
  return { url: `${base}/${S3_BUCKET}/${name}` };
}

// 读取对象 → Buffer 或 null
export async function getObject(name) {
  if (STORAGE_TYPE === 'local') {
    const { readFile } = await import('fs/promises');
    const path = await import('path');
    try {
      return await readFile(path.join(process.cwd(), 'uploads', name));
    } catch {
      return null;
    }
  }
  const res = await aws.fetch(objectUrl(name));
  if (!res.ok) return null;
  return Buffer.from(await res.arrayBuffer());
}

// 删除对象（可选）
export async function deleteObject(name) {
  if (STORAGE_TYPE === 'local') {
    const { unlink } = await import('fs/promises');
    const path = await import('path');
    try { await unlink(path.join(process.cwd(), 'uploads', name)); } catch { /* ignore */ }
    return;
  }
  await aws.fetch(objectUrl(name), { method: 'DELETE' });
}
