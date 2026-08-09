// ============================================================
//  ⚙️  Forumlify 配置文件
//  自托管版本
// ============================================================

const CONFIG = {
  // ===== 必填 =====
  

  API_BASE_URL: '/api',

  // ===== 可选 =====

  // 论坛名称（显示在左上角）
  FORUM_NAME: 'Forumlify',

  // 是否开启发帖/注册的人机验证（10以内加减法）
  ENABLE_CAPTCHA: true,
};

// ===== 不要修改下面 =====
if (typeof module !== 'undefined' && module.exports) module.exports = CONFIG;
