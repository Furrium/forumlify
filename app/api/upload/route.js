// POST /api/upload — 图片上传 (multipart/form-data)
// 安全：校验文件 magic bytes（不信任客户端 MIME/文件名），服务器生成 UUID 文件名
import path from 'path';
import { randomUUID } from 'crypto';
import { getUser } from '@/lib/auth';
import { saveObject } from '@/lib/storage';

const MAX_SIZE = 5 * 1024 * 1024;

// 从文件头字节嗅探真实图片类型（JPEG/PNG/GIF/WebP），拒绝伪造内容
function sniffImage(buf) {
  if (buf.length < 12) return null;
  // JPEG: FF D8 FF
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return { ext: '.jpg', mime: 'image/jpeg' };
  // PNG: 89 50 4E 47 0D 0A 1A 0A
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47 && buf[4] === 0x0d && buf[5] === 0x0a && buf[6] === 0x1a && buf[7] === 0x0a) return { ext: '.png', mime: 'image/png' };
  // GIF: "GIF8"
  if (buf[0] === 0x47 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x38) return { ext: '.gif', mime: 'image/gif' };
  // WebP: "RIFF" .... "WEBP"
  if (buf[0] === 0x52 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x46 && buf[8] === 0x57 && buf[9] === 0x45 && buf[10] === 0x42 && buf[11] === 0x50) return { ext: '.webp', mime: 'image/webp' };
  return null;
}

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
