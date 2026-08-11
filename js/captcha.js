// ============================================================
//  🧠 验证码
// ============================================================

function generateCaptcha() {
  let a = Math.floor(Math.random() * 9) + 1;
  let b = Math.floor(Math.random() * 9) + 1;
  let op = ['+', '-'][Math.floor(Math.random() * 2)];
  if (op === '-' && a < b) { let t = a;
    a = b;
    b = t; }
  let answer = op === '+' ? a + b : a - b;
  return { question: a + ' ' + op + ' ' + b + ' = ?', answer: answer };
}

function refreshCaptcha(type) {
  let q = generateCaptcha();
  if (type === 'reg') {
    document.getElementById('regCaptchaQuestion').textContent = q.question;
    document.getElementById('regCaptchaInput').dataset.answer = q.answer;
  } else if (type === 'post') {
    document.getElementById('postCaptchaQuestion').textContent = q.question;
    document.getElementById('postCaptchaInput').dataset.answer = q.answer;
  } else if (type === 'reply') {
    document.getElementById('replyCaptchaQuestion').textContent = q.question;
    document.getElementById('replyCaptchaInput').dataset.answer = q.answer;
  }
}
