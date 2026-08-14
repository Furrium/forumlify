import pool from '@/lib/db';
import { randomUUID } from 'crypto';
import { getUser, requireAdmin } from '@/lib/auth';
import { sniffImage } from '@/lib/image-type';
import { deleteObject, saveObject } from '@/lib/storage';

export const runtime = 'nodejs';

const MAX_SIZE = 5 * 1024 * 1024;

export async function POST(req) {
  const user = getUser(req);
  const forbidden = await requireAdmin(user);
  if (forbidden) return forbidden;

  const form = await req.formData();
  const file = form.get('file');
  if (!file || typeof file === 'string') {
    return Response.json({ error: '请选择图标文件' }, { status: 400 });
  }
  if (file.size > MAX_SIZE) {
    return Response.json({ error: '图标大小不能超过 5MB' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const image = sniffImage(buffer, { allowIcon: true });
  if (!image) {
    return Response.json({ error: '仅支持 PNG、JPEG、GIF、WebP 或 ICO 图标' }, { status: 400 });
  }

  const objectName = `forumlify-favicon-${randomUUID()}${image.ext}`;
  let oldObject = '';
  try {
    const { url } = await saveObject(objectName, buffer, image.mime);
    let client = null;
    let committed = false;
    let version = '';

    try {
      client = await pool.connect();
      await client.query('BEGIN');
      await client.query(
        `INSERT INTO settings (key, value) VALUES ('favicon_object', '')
         ON CONFLICT (key) DO NOTHING`
      );
      const current = await client.query(
        "SELECT value FROM settings WHERE key = 'favicon_object' FOR UPDATE"
      );
      oldObject = current.rows[0]?.value || '';
      version = Date.now().toString();
      await client.query(
        `INSERT INTO settings (key, value) VALUES ($1, $2), ($3, $4), ($5, $6)
         ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW()`,
        ['favicon_url', url, 'favicon_version', version, 'favicon_object', objectName]
      );
      await client.query('COMMIT');
      committed = true;
    } catch (error) {
      if (client) await client.query('ROLLBACK').catch(() => {});
      if (!committed) await deleteObject(objectName).catch(() => {});
      throw error;
    } finally {
      client?.release();
    }

    if (oldObject && /^forumlify-favicon-[\w-]+\.(?:png|jpg|gif|webp|ico)$/.test(oldObject)) {
      await deleteObject(oldObject).catch(() => {});
    }

    return Response.json({ favicon_url: url, favicon_version: version });
  } catch {
    return Response.json({ error: '上传失败，请稍后重试' }, { status: 500 });
  }
}
