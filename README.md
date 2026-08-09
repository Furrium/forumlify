# Forumlify 🌊

> 一个简洁、优雅的现代社区系统。5 分钟 Docker 一键部署。

## ✨ 特性

- 🎨 精致简约的界面设计，支持亮色/暗色模式
- ⚡️ 基于 Next.js 14 (App Router) + React 18，前后端一体化
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

应用默认运行在 `http://localhost:3000`（监听 `0.0.0.0`，局域网可访问）。

### 从源码构建

> 适合二次开发、自定义部署或不想用 Docker 的场景。

#### 环境要求

- Node.js 18.17+（Next.js 14 要求）
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
| `JWT_SECRET` | `forumlify-secret-key-change-me-in-production` | JWT 签名密钥，**生产环境务必修改** |

```bash
# 例如：
export DATABASE_URL=postgresql://forumlify:123456@localhost:5432/forumlify
export JWT_SECRET=your-own-secret-key
```

4. **构建并启动**

```bash
npm run build
npm start
```

应用运行在 `http://localhost:3000`，API 在 `http://localhost:3000/api`。

开发模式（热更新）：`npm run dev`。

#### 服务端配置

监听端口与地址可在 `config.js` 中调整（服务端读取，浏览器端忽略）：

| 配置项 | 默认值 | 说明 |
|--------|--------|------|
| `SERVER_PORT` | `null` | 可选：监听端口。优先级：环境变量 `PORT` > `SERVER_PORT` > 默认 `3000` |
| `SERVER_HOST` | `null` | 可选：监听地址。优先级：环境变量 `HOST` > `SERVER_HOST` > 默认 `0.0.0.0`（所有网卡）。设为 `127.0.0.1` 仅本机访问 |

#### 上传目录

帖子图片默认保存在 `uploads/` 目录（Docker 部署时通过 volume 挂载到 `/app/uploads`），源码部署时请确保该目录有写入权限：

```bash
mkdir -p uploads && chmod 755 uploads
```

## 🏗️ 项目结构

```
app/
  page.js              # 主页（SPA 视图调度）
  layout.js            # 全局布局
  globals.css          # 全局样式（含亮/暗主题）
  api/                 # Route Handlers（API 后端）
    auth/  posts/  replies/  users/  reports/  links/
    stats/  event-logs/  settings/  upload/  uploads/
components/
  AppProvider.js       # 全局状态（用户/主题/路由）
  Navbar.js  Feed.js  PostDetail.js  ReplyList.js
  NewPost.js  AdminPage.js  SettingsPage.js  Modals.js
lib/
  db.js                # PostgreSQL 连接池
  auth.js              # JWT 认证工具
  api.js               # 前端 API 封装
scripts/
  start.js             # 启动入口（读取 config.js 监听配置）
schema.sql             # 数据库表结构
config.js              # 服务端配置（端口/地址）
```

## 📚 技术栈

- Next.js 14 (App Router) + React 18
- Express 风格 Route Handlers (Node.js Runtime)
- PostgreSQL + pg
- JWT 认证 + bcrypt 密码哈希
