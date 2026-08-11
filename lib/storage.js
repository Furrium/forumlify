// 存储抽象层：Cloudflare R2 binding（Workers）→ S3 兼容对象存储 → 本地磁盘
// - Cloudflare Workers：优先用 R2 binding（wrangler.jsonc 声明 FORUMLIFY_BUCKET），无需 S3 密钥
// - 其他平台（Vercel / 裸机）：S3_* 环境变量走 S3 兼容 API；无 S3 配置则本地磁盘 uploads/
import { AwsClient } from 'aws4fetch';

const S3_ENDPOINT = process.env.S3_ENDPOINT;
const S3_BUCKET = process.env.S3_BUCKET;
const S3_REGION = process.env.S3_REGION || 'auto';
const S3_ACCESS_KEY = process.env.S3_ACCESS_KEY_ID || process.env.S3_ACCESS_KEY;
const S3_SECRET_KEY = process.env.S3_SECRET_ACCESS_KEY || process.env.S3_SECRET_KEY;
const S3_PUBLIC_URL = process.env.S3_PUBLIC_URL; // 公开访问前缀，如 https://cdn.example.com

// 存储模式：r2-binding > s3 > local
export const STORAGE_TYPE = isR2BindingAvailable()
  ? 'r2'
  : (S3_ENDPOINT && S3_BUCKET && S3_ACCESS_KEY ? 's3' : 'local');

const aws = STORAGE_TYPE === 's3'
  ? new AwsClient({ accessKeyId: S3_ACCESS_KEY, secretAccessKey: S3_SECRET_KEY, region: S3_REGION, service: 's3' })
  : null;

function isR2BindingAvailable() {
  // 仅在 Cloudflare Workers 运行时（OpenNext 注入 globalThis.__OPENNEXT_CLOUDFLARE__）检查 binding
  try {
    const ctx = globalThis.__OPENNEXT_CLOUDFLARE__;
    return !!(ctx && ctx.env && ctx.env.FORUMLIFY_BUCKET);
  } catch {
    return false;
  }
}

// 获取 R2 binding（Workers 上通过 getCloudflareContext 读取 env）
async function getR2Bucket() {
  const { getCloudflareContext } = await import('@opennextjs/cloudflare');
  const ctx = await getCloudflareContext({ async: true });
  return ctx.env.FORUMLIFY_BUCKET;
}

function objectUrl(name) {
  return `${S3_ENDPOINT}/${S3_BUCKET}/${name}`;
}

// 保存对象 → 返回公开 URL（R2 binding 用 S3_PUBLIC_URL 或 workers.dev 路径；S3 用 S3_PUBLIC_URL 前缀；本地用 /uploads/）
export async function saveObject(name, buffer, contentType) {
  if (STORAGE_TYPE === 'r2') {
    const bucket = await getR2Bucket();
    await bucket.put(name, new Uint8Array(buffer), { httpMetadata: { contentType: contentType || 'application/octet-stream' } });
    return { url: publicUrl(name) };
  }
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
  return { url: publicUrl(name) };
}

// 生成公开 URL：优先 S3_PUBLIC_URL（自定义公开域名），否则 S3 endpoint 路径式
function publicUrl(name) {
  if (S3_PUBLIC_URL) {
    const base = S3_PUBLIC_URL.replace(/\/$/, '');
    return `${base}/${name}`;
  }
  if (S3_ENDPOINT) {
    const base = S3_ENDPOINT.replace(/\/$/, '');
    return `${base}/${S3_BUCKET}/${name}`;
  }
  return '/uploads/' + name;
}

// 读取对象 → Buffer 或 null
export async function getObject(name) {
  if (STORAGE_TYPE === 'r2') {
    const bucket = await getR2Bucket();
    const obj = await bucket.get(name);
    if (!obj) return null;
    return Buffer.from(await obj.arrayBuffer());
  }
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
  if (STORAGE_TYPE === 'r2') {
    const bucket = await getR2Bucket();
    await bucket.delete(name);
    return;
  }
  if (STORAGE_TYPE === 'local') {
    const { unlink } = await import('fs/promises');
    const path = await import('path');
    try { await unlink(path.join(process.cwd(), 'uploads', name)); } catch { /* ignore */ }
    return;
  }
  await aws.fetch(objectUrl(name), { method: 'DELETE' });
}
