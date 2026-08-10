// POST /api/upload — 图片上传 (multipart/form-data)
import path from 'path';
import { getUser } from '@/lib/auth';
import { saveObject } from '@/lib/storage';

const ALLOWED = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
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
  if (!ALLOWED.includes(file.type)) {
    return Response.json({ error: '不支持的图片格式' }, { status: 400 });
  }
  if (file.size > MAX_SIZE) {
    return Response.json({ error: '图片大小不能超过 5MB' }, { status: 400 });
  }

  try {
    const ext = path.extname(file.name) || '.png';
    const name = Date.now() + '-' + Math.round(Math.random() * 10000) + ext;
    const buffer = Buffer.from(await file.arrayBuffer());
    const { url } = await saveObject(name, buffer, file.type);
    return Response.json({ url });
  } catch {
    return Response.json({ error: '上传失败，请稍后重试' }, { status: 500 });
  }
}
