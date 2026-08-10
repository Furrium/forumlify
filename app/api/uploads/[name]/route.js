// GET /api/uploads/[name] — 提供上传的图片文件（本地存储模式）
// (next.config.js 中 rewrites 把 /uploads/* 指向这里，URL 保持 /uploads/... 不变)
// S3 模式下走 S3_PUBLIC_URL 直接访问，此路由不生效（rewrite 仍指向但返回 404 前可跳过）
import path from 'path';
import { getObject, STORAGE_TYPE } from '@/lib/storage';

export const runtime = 'nodejs';

const MIME = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
};

export async function GET(req, { params }) {
  const name = params.name;
  // 防止路径穿越
  if (!/^[\w-]+\.\w+$/.test(name)) {
    return new Response('Not Found', { status: 404 });
  }
  // S3 模式下文件不在本地，由 S3_PUBLIC_URL 提供
  if (STORAGE_TYPE === 's3') {
    return new Response('Not Found', { status: 404 });
  }
  try {
    const data = await getObject(name);
    if (!data) return new Response('Not Found', { status: 404 });
    const ext = path.extname(name).toLowerCase();
    return new Response(new Uint8Array(data), {
      headers: { 'Content-Type': MIME[ext] || 'application/octet-stream' },
    });
  } catch {
    return new Response('Not Found', { status: 404 });
  }
}
