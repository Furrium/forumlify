// GET /api/custom-css — 公开获取自定义 CSS
import { readFile } from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const cssPath = path.join(process.cwd(), 'uploads', 'custom', 'style.css');
    const css = await readFile(cssPath, 'utf-8');
    return new Response(css, { headers: { 'Content-Type': 'text/css' } });
  } catch {
    return new Response('', { status: 404 });
  }
}
