// ============================================================
//  ⚙️  Forumlify 配置文件
//  自托管版本 —— 修改下面 API 地址即可
// ============================================================

const CONFIG = {
  // 后端 API 地址
  // - Docker 部署：http://backend:3000/api
  // - 本地开发：http://localhost:3000/api
  // - 生产环境：https://你的域名/api
  API_BASE_URL: '/api',

  // 论坛名称（显示在左上角）
  FORUM_NAME: 'Forumlify',

  // 是否开启发帖/注册的人机验证（10以内加减法）
  ENABLE_CAPTCHA: true,

  // 服务端监听端口（仅服务端读取，浏览器端忽略）
  // 优先级：环境变量 PORT > SERVER_PORT > 默认 3000
  SERVER_PORT: null,
};

// ===== 不要修改下面 =====
if (typeof module !== 'undefined' && module.exports) module.exports = CONFIG;
