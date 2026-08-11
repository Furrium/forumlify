// ============================================================
//  🧠 服务器验证的一次性验证码
// ============================================================

const CAPTCHA_CONTEXTS = {
  reg: 'registration',
  post: 'post',
  reply: 'reply'
};

const CAPTCHA_ELEMENTS = {
  reg: ['regCaptchaQuestion', 'regCaptchaInput'],
  post: ['postCaptchaQuestion', 'postCaptchaInput'],
  reply: ['replyCaptchaQuestion', 'replyCaptchaInput']
};

async function refreshCaptcha(type) {
  const context = CAPTCHA_CONTEXTS[type];
  const elementIds = CAPTCHA_ELEMENTS[type];
  if (!context || !elementIds) return;

  const question = document.getElementById(elementIds[0]);
  const input = document.getElementById(elementIds[1]);
  if (!question || !input) return;

  const row = question.closest('.captcha-row');
  input.value = '';
  input.dataset.challengeId = '';
  input.dataset.captchaEnabled = 'true';
  input.disabled = true;
  question.textContent = '加载验证码...';
  if (row) row.style.display = '';

  try {
    const challenge = await API.getCaptcha(context);
    if (challenge.enabled === false) {
      input.dataset.captchaEnabled = 'false';
      if (row) row.style.display = 'none';
      return;
    }

    input.dataset.challengeId = challenge.id;
    question.textContent = challenge.question;
    input.disabled = false;
  } catch (error) {
    question.textContent = '验证码加载失败，点击重试';
    input.disabled = true;
  }
}

function getCaptchaSubmission(type) {
  const elementIds = CAPTCHA_ELEMENTS[type];
  if (!elementIds) return null;

  const input = document.getElementById(elementIds[1]);
  if (!input || input.dataset.captchaEnabled === 'false') return {};

  const id = input.dataset.challengeId;
  const answer = input.value.trim();
  if (!id || !answer) return null;
  return { id, answer };
}
