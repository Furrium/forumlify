// GET /api/captcha — 服务端验证码挑战（HMAC 签名答案，防前端绕过）
import { generateCaptchaChallenge } from '@/lib/captcha';

export async function GET() {
  const ch = generateCaptchaChallenge();
  return Response.json({ id: ch.id, text: ch.text, sig: ch.sig });
}
