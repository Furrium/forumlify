// POST /api/admin/custom-css, DELETE /api/admin/custom-css — 管理自定义 CSS
import { writeFile, mkdir, unlink } from 'fs/promises';
import path from 'path';
import pool from '@/lib/db';
import { getUser, requireAdmin } from '@/lib/auth';

export const runtime = 'nodejs';

// 上传 style.css（管理员）
export async function POST(req) {
  const user = getUser(req);
  if (!user) return Response.json({ error: '请先登录' }, { status: 401 });
  const forbidden = await requireAdmin(user);
  if (forbidden) return forbidden;

  const form = await req.formData();
  const file = form.get('file');
  if (!file || typeof file === 'string') {
    return Response.json({ error: '请选择文件' }, { status: 400 });
  }
  if (file.name !== 'style.css') {
    return Response.json({ error: '文件名必须是 style.css' }, { status: 400 });
  }
  if (file.size > 1024 * 1024) {
    return Response.json({ error: 'CSS 文件不能超过 1MB' }, { status: 400 });
  }

  try {
    const dir = path.join(process.cwd(), 'uploads', 'custom');
    await mkdir(dir, { recursive: true });
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(path.join(dir, 'style.css'), buffer);
    await pool.query(
      `INSERT INTO settings (key, value) VALUES ($1, $2)
       ON CONFLICT (key) DO UPDATE SET value = $2, updated_at = NOW()`,
      ['custom_css_enabled', 'true']
    );
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: '上传失败，请稍后重试' }, { status: 500 });
  }
}

// 删除自定义 CSS（管理员）
export async function DELETE(req) {
  const user = getUser(req);
  if (!user) return Response.json({ error: '请先登录' }, { status: 401 });
  const forbidden = await requireAdmin(user);
  if (forbidden) return forbidden;

  try {
    const cssPath = path.join(process.cwd(), 'uploads', 'custom', 'style.css');
    try { await unlink(cssPath); } catch { /* 不存在则忽略 */ }
    await pool.query(
      `INSERT INTO settings (key, value) VALUES ($1, $2)
       ON CONFLICT (key) DO UPDATE SET value = $2, updated_at = NOW()`,
      ['custom_css_enabled', 'false']
    );
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: '删除失败，请稍后重试' }, { status: 500 });
  }
}
