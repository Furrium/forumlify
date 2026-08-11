// 服务端验证码：一次性算术挑战，答案签名用 HMAC（对齐上游 ac4af62）
// - GET /api/captcha 返回 { id, text, sig }；sig = HMAC(secret, `${id}:${answer}`)
// - 前端提交 captcha_id + captcha_answer + sig
// - 服务端用提交的答案重算 HMAC 与 sig 比对（防绕过/重放，防前端读答案）
import crypto from 'crypto';

function secret() {
  // CAPTCHA_SECRET 可单独配置；默认回退 JWT_SECRET
  return process.env.CAPTCHA_SECRET || process.env.JWT_SECRET || 'forumlify';
}

// 生成挑战：返回 { id, text, answer, sig }；sig 用于校验答案
export function generateCaptchaChallenge() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  const id = crypto.randomUUID();
  const answer = a + b;
  const sig = crypto
    .createHmac('sha256', secret())
    .update(`${id}:${answer}`)
    .digest('hex');
  return { id, text: `${a} + ${b} = ?`, answer, sig };
}

// 验证：提交的答案重算签名与 sig 比对（长度固定，timingSafeEqual 安全）
export function verifyCaptcha(id, answer, sig) {
  if (!id || answer === undefined || answer === null || answer === '' || !sig) return false;
  const n = typeof answer === 'number' ? answer : parseInt(answer, 10);
  if (Number.isNaN(n)) return false;
  const expected = crypto
    .createHmac('sha256', secret())
    .update(`${id}:${n}`)
    .digest('hex');
  const a = Buffer.from(expected, 'hex');
  const b = Buffer.from(String(sig), 'hex');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
