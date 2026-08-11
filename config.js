// ============================================================
//  ⚙️  Forumlify 配置文件
//  自托管版本 —— 修改下面 API 地址即可
// ============================================================

const CONFIG = {
 
  API_BASE_URL: '/api',

  // 论坛名称（显示在界面左上角和网站title）
  FORUM_NAME: 'Forumlify',

  // 是否开启发帖/注册的人机验证（简单的加减法）
  ENABLE_CAPTCHA: true,

  // 服务端监听端口（仅服务端读取，浏览器端忽略）
  // 优先级：环境变量 PORT > SERVER_PORT > 默认 3000
  SERVER_PORT: null,
};

// ===== 不要修改下面 =====
if (typeof module !== 'undefined' && module.exports) module.exports = CONFIG;
