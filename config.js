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

  // 可选：服务端监听端口（仅服务端读取，浏览器端忽略）
  // 优先顺序：环境变量 PORT > 此处配置 > 默认 3000
  // 设为 null 则使用环境变量或默认值
  SERVER_PORT: null,
};

// ===== 不要修改下面 =====
if (typeof module !== 'undefined' && module.exports) module.exports = CONFIG;
