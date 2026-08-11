// ============================================================
//  🌓 主题切换
// ============================================================

function getTheme() {
  return localStorage.getItem('forumlify-theme') || 'light';
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('forumlify-theme', theme);
  updateThemeUI(theme);
}

function toggleTheme(e) {
  if (e) { e.preventDefault();
    e.stopPropagation(); }
  const current = getTheme();
  const next = current === 'light' ? 'dark' : 'light';
  setTheme(next);
}

function updateThemeUI(theme) {
  const icon = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');
  if (!icon) return;

  // 确保 t 函数存在，否则用默认文字
  const translate = typeof t === 'function' ? t : function(key) { return key; };

  if (theme === 'dark') {
    icon.innerHTML =
      `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
    if (label) label.textContent = translate('亮色模式');
  } else {
    icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
    if (label) label.textContent = translate('暗色模式');
  }
}

function applyTheme() {
  const theme = getTheme();
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeUI(theme);
}

// 确保 DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  applyTheme();
});
