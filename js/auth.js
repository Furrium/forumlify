// ============================================================
//  🔐 认证
// ============================================================

// 登录事件绑定
document.getElementById('loginBtn').addEventListener('click', () => {
  document.getElementById('loginModal').classList.add('active');
});

document.getElementById('loginSubmit').addEventListener('click', async () => {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  if (!email || !password) { alert('请填写完整信息'); return; }
  try {
    const result = await API.login(email, password);
    document.getElementById('loginModal').classList.remove('active');
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
    if (result.user) {
      currentUser = result.user;
      API.logEvent('login').catch(() => {});
      renderNav();
      if (currentPage === 'admin' && currentUser.role !== 'admin') {
        switchPage('feed');
      } else if (currentPage === 'feed') {
        renderFeed();
        renderStats();
      }
    }
  } catch (err) {
    alert('登录失败：' + err.message);
  }
});

// 注册事件绑定
document.getElementById('registerBtn').addEventListener('click', () => {
  refreshCaptcha('reg');
  document.getElementById('registerModal').classList.add('active');
});

document.getElementById('registerSubmit').addEventListener('click', async () => {
  const username = document.getElementById('regUsername').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;
  const captchaInput = document.getElementById('regCaptchaInput').value.trim();
  const captchaAnswer = parseInt(document.getElementById('regCaptchaInput').dataset.answer);
  if (!username || !email || !password) { alert('请填写完整信息'); return; }
  if (password.length < 6) { alert('密码至少6位'); return; }
  if (parseInt(captchaInput) !== captchaAnswer) { alert('验证码错误，请重新计算'); refreshCaptcha('reg'); return; }
  try {
    await API.register(email, password, username);
    document.getElementById('registerModal').classList.remove('active');
    document.getElementById('regUsername').value = '';
    document.getElementById('regEmail').value = '';
    document.getElementById('regPassword').value = '';
    document.getElementById('regCaptchaInput').value = '';
    alert('注册成功！请登录');

    const result = await API.login(email, password);
    if (result.user) {
      currentUser = result.user;
      API.logEvent('register').catch(() => {});
      renderNav();
      if (currentPage === 'admin' && currentUser.role !== 'admin') {
        switchPage('feed');
      } else if (currentPage === 'feed') {
        renderFeed();
        renderStats();
      }
    }
  } catch (err) {
    alert('注册失败：' + err.message);
  }
});

document.getElementById('regCaptchaQuestion').addEventListener('click', function() {
  refreshCaptcha('reg');
});

// 退出
document.getElementById('logoutBtn').addEventListener('click', async () => {
  if (!confirm('确定要退出吗？')) return;
  await API.logout();
  currentUser = null;
  renderNav();
  document.querySelectorAll('.page-slide').forEach(el => el.classList.remove('active'));
  switchPage('feed');
});