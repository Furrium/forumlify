// POST /api/upload — 图片上传 (multipart/form-data)
// 安全：校验文件 magic bytes（不信任客户端 MIME/文件名），服务器生成 UUID 文件名
import path from 'path';
import { randomUUID } from 'crypto';
import { getUser } from '@/lib/auth';
import { sniffImage } from '@/lib/image-type';
import { saveObject } from '@/lib/storage';

const MAX_SIZE = 5 * 1024 * 1024;

export const runtime = 'nodejs';

export async function POST(req) {
  const user = getUser(req);
  if (!user) {
    return Response.json({ error: '请先登录' }, { status: 401 });
  }

  const form = await req.formData();
  const file = form.get('file');
  if (!file || typeof file === 'string') {
    return Response.json({ error: '请选择图片' }, { status: 400 });
  }
  if (file.size > MAX_SIZE) {
    return Response.json({ error: '图片大小不能超过 5MB' }, { status: 400 });
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const sniff = sniffImage(buffer);
    if (!sniff) {
      return Response.json({ error: '不支持的图片格式' }, { status: 400 });
    }
    // 服务器生成 UUID 文件名 + 嗅探出的扩展名（不信任客户端文件名）
    const name = randomUUID() + sniff.ext;
    const { url } = await saveObject(name, buffer, sniff.mime);
    return Response.json({ url });
  } catch {
    return Response.json({ error: '上传失败，请稍后重试' }, { status: 500 });
  }
}
