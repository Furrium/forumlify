# Forumlify 🌊

> 一个简洁、优雅的现代社区系统。5 分钟 Docker 一键部署。

## ✨ 特性

- 🎨 精致简约的界面设计，支持亮色/暗色模式
- ⚡️ 轻量快速，无需复杂配置
- 🔐 自带用户认证（JWT）
- 📝 发帖、回复、举报、管理后台
- 🐳 Docker 一键部署
- 🌓 暗色/亮色模式切换

## 🚀 快速开始

### Docker 部署（推荐）

```bash
git clone https://github.com/furrium/forumlify.git
cd forumlify
docker-compose up -d
```

应用默认运行在 `http://localhost:3003`。

---
目前本应用已支持部署在Cloudflare Pages/Vercel，请在[这个分支](https://github.com/Furrium/forumlify/tree/next)拉取

---
以下内容添加自NodeLoc @Lezi-fun的PR

---

### 从源码构建

> 适合二次开发、自定义部署或不想用 Docker 的场景。

#### 环境要求

- Node.js 18+
- PostgreSQL 13+（`schema.sql` 使用了内置的 `gen_random_uuid()`）

#### 步骤

1. **克隆并安装依赖**

```bash
git clone https://github.com/furrium/forumlify.git
cd forumlify
npm install
```

2. **准备数据库**（以本机 PostgreSQL 为例）

```bash
# 创建数据库和用户（与 docker-compose.yml 默认一致）
psql -U postgres -c "CREATE USER forumlify WITH PASSWORD '123456';"
psql -U postgres -c "CREATE DATABASE forumlify OWNER forumlify;"
# 导入表结构
psql -U forumlify -d forumlify -f schema.sql
```

3. **配置环境变量**（可选，均有默认值）

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `DATABASE_URL` | `postgresql://forumlify:123456@localhost:5432/forumlify` | PostgreSQL 连接串 |
| `PORT` | `3000` | HTTP 监听端口 |
| `JWT_SECRET` | `forumlify-secret-key-change-me-in-production` | JWT 签名密钥，**生产环境务必修改** |

```bash
# 例如：
export DATABASE_URL=postgresql://forumlify:123456@localhost:5432/forumlify
export JWT_SECRET=your-own-secret-key
```

4. **启动**

```bash
npm start
```

应用运行在 `http://localhost:3000`，API 在 `http://localhost:3000/api`。

#### 前端配置

前端页面为 `index.html`，相关行为可在 `config.js` 中调整：

| 配置项 | 默认值 | 说明 |
|--------|--------|------|
| `FORUM_NAME` | `Forumlify` | 论坛名称（左上角显示） |
| `ENABLE_CAPTCHA` | `true` | 发帖/注册的人机验证（10 以内加减法） |
| `SERVER_PORT` | `null` | 可选：服务端监听端口（仅服务端读取，浏览器端忽略）。优先级：环境变量 `PORT` > `SERVER_PORT` > 默认 `3000`。设为 `null` 时使用环境变量或默认值 |

#### 上传目录

帖子图片默认保存在 `uploads/` 目录（Docker 部署时通过 volume 挂载到 `/app/uploads`），源码部署时请确保该目录有写入权限：

```bash
mkdir -p uploads && chmod 755 uploads
```
