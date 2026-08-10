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

---

> 以下内容添加自 NodeLoc @Lezi-fun 的 PR（从源码构建与配置说明）

---

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

## ☁️ Serverless 部署（Vercel / Cloudflare Pages）

Forumlify 的 Next.js 版本天然支持 serverless 部署。与传统部署相比需要处理三件事：

1. **数据库**：使用外部 PostgreSQL（Neon / Supabase / RDS 等），设置 `DATABASE_URL` 环境变量。连接池会自动适配 serverless（单连接 + 定期轮换）。
2. **文件上传**：serverless 无持久磁盘，需要 S3 兼容对象存储（Cloudflare R2 / AWS S3 / MinIO）。设置以下环境变量后，上传自动切换到对象存储：
   - `S3_ENDPOINT` — 如 `https://xxx.r2.cloudflarestorage.com`
   - `S3_BUCKET` — 存储桶名
   - `S3_REGION` — 区域（R2 用 `auto`）
   - `S3_ACCESS_KEY_ID` / `S3_SECRET_ACCESS_KEY`
   - `S3_PUBLIC_URL` — 公开访问前缀，如 `https://cdn.example.com`（图片 URL 将指向这里）
3. **密码哈希**：已使用 `bcryptjs`（纯 JS），无原生编译依赖，各平台均可直接构建。

### Vercel 部署

```bash
# 本地预览
vercel dev

# 部署（首次会要求登录并配置环境变量）
vercel
```

在 Vercel 项目设置中配置环境变量：`DATABASE_URL`、`JWT_SECRET`，以及（可选）`S3_*`。

### Cloudflare Pages 部署

```bash
# 构建命令：npm run build
# 输出目录：.vercel/output（需安装 @cloudflare/next-on-pages）
npx @cloudflare/next-on-pages
```

> 提示：`next.config.js` 中的 `output: 'standalone'` 仅在设置了 `DOCKER=1` 环境变量时启用，serverless 平台会自动跳过。

## 🔄 与 main 分支（Express 版）的对比

本分支（`next`）基于上游 `main` 的 Express 单文件架构全面重构为 Next.js 14（App Router）。两者功能一致，实现方式不同：

| 维度 | main 分支（Express） | next 分支（Next.js 14） |
|------|---------------------|------------------------|
| **前端** | 单个 1488 行 `index.html` + `js/` 原生 JS 模块（手写 DOM 操作） | React 18 组件（`components/`），状态由 `AppProvider` 管理 |
| **后端** | 单个 1000+ 行 `server.js`（Express 路由） | 36 个 Route Handlers（`app/api/**/route.js`），每个接口独立文件 |
| **模板渲染** | `innerHTML` 字符串拼接 + `onclick` 事件绑定 | JSX 声明式渲染 + React 事件 |
| **图片上传** | multer + `uploads/` 本地目录 | 存储抽象层（`lib/storage.js`）：本地磁盘 或 S3 兼容对象存储（serverless） |
| **密码哈希** | `bcrypt`（原生编译） | `bcryptjs`（纯 JS，serverless 友好） |
| **数据库** | 共享同一套 PostgreSQL schema | **同一 `schema.sql`，与 main 完全兼容**（已实测互操作） |
| **部署** | Docker 或裸机 `node server.js` | Docker / 裸机 / **Vercel / Cloudflare Pages（serverless）** |
| **性能** | Express 同步渲染 | Next.js 增量静态生成 + 流式渲染 |
| **API 路径** | `/api/*` | `/api/*`（路径一致，前端兼容） |

### 数据库兼容性

两个分支使用**完全相同的 `schema.sql`**，共用同一个数据库实例（已验证：main 的 Express 代码与 next 的 Next.js 代码可同时连接同一 PostgreSQL 库，表结构、数据互不冲突）。

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
