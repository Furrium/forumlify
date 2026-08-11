# Forumlify Next.js Edition🌊

> 一个简洁、优雅的现代社区系统。5 分钟 Docker 一键部署。

## ✨ 特性

- 🎨 精致简约的界面设计，支持亮色/暗色模式
- ⚡️ 基于 Next.js 16 (App Router) + React 19，前后端一体化
- 🔐 自带用户认证（JWT）
- 📝 发帖、回复、举报、管理后台
- 🐳 Docker 一键部署
- 🌓 暗色/亮色模式切换

## 🚀 快速开始

### Docker 部署（推荐）

```bash
# 本分支（next，Next.js 版）；如要部署 Express 版请 clone main 分支
git clone -b next https://github.com/furrium/forumlify.git
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

- Node.js 20.9+（Next.js 16 要求）
- PostgreSQL 13+（`schema.sql` 使用了内置的 `gen_random_uuid()`）

#### 步骤

1. **克隆并安装依赖**

```bash
# 克隆 next 分支（Next.js 版）；main 分支是 Express 版
git clone -b next https://github.com/furrium/forumlify.git
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

## ☁️ Serverless 部署（Vercel / Cloudflare Workers）

Forumlify 的 Next.js 版本天然支持 serverless 部署。与传统部署相比需要处理三件事：

1. **数据库**：使用外部 PostgreSQL（Neon / Supabase / RDS 等），设置 `DATABASE_URL` 环境变量。连接池会自动适配 serverless（单连接 + 定期轮换）。
2. **文件上传**：serverless 无持久磁盘，需要 S3 兼容对象存储（Cloudflare R2 / AWS S3 / MinIO）。设置 `S3_*` 环境变量后，上传自动切换到对象存储。
3. **密码哈希**：已使用 `bcryptjs`（纯 JS），无原生编译依赖，各平台均可直接构建。

### 环境变量说明

| 变量 | 必填 | 说明 |
|------|------|------|
| `DATABASE_URL` | ✅ 必须 | PostgreSQL 连接串，如 `postgresql://user:pass@host:5432/dbname`（可用 [Neon](https://neon.tech) / [Supabase](https://supabase.com) 免费实例） |
| `JWT_SECRET` | ✅ 必须 | JWT 签名密钥，任意长随机字符串（生产环境务必修改） |
| `S3_ENDPOINT` | 上传图片时 | S3 兼容端点，如 R2 的 `https://<account_id>.r2.cloudflarestorage.com` |
| `S3_BUCKET` | 上传图片时 | 存储桶名 |
| `S3_REGION` | 上传图片时 | 区域（R2 用 `auto`，AWS 用 `us-east-1` 等） |
| `S3_ACCESS_KEY_ID` | 上传图片时 | 对象存储 Access Key |
| `S3_SECRET_ACCESS_KEY` | 上传图片时 | 对象存储 Secret Key |
| `S3_PUBLIC_URL` | 上传图片时 | 公开访问前缀，如 `https://cdn.example.com`（图片 URL 将指向这里） |

> 只搭一个纯文字论坛、不上传图片的话，只需配置 `DATABASE_URL` 和 `JWT_SECRET` 两个变量。

### Vercel 部署（一键）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flezi-fun%2Fforumlify-deploy&env=DATABASE_URL,JWT_SECRET,S3_ENDPOINT,S3_BUCKET,S3_REGION,S3_ACCESS_KEY_ID,S3_SECRET_ACCESS_KEY,S3_PUBLIC_URL)

点击上方按钮，Vercel 会自动：
1. Fork 部署模板仓库（[lezi-fun/forumlify-deploy](https://github.com/lezi-fun/forumlify-deploy)，默认分支 `next`，即 Next.js 版，无需手动选分支）
2. 提示你填写环境变量（见上方表格，前两个必填，其余可跳过）
3. 自动完成构建并部署，完成后会给你一个 `https://xxx.vercel.app` 地址

也可以用 CLI 手动部署：

```bash
npm i -g vercel
vercel        # 首次会要求登录并配置环境变量
```

> 注意：不传图片的话 S3 变量可以留空；后续要传图时再到 Vercel 项目设置 → Environment Variables 补上即可，无需重新部署。

### Cloudflare Workers 部署（一键）

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https%3A%2F%2Fgithub.com%2Flezi-fun%2Fforumlify-deploy)

点击上方按钮，Cloudflare 会自动导入部署模板仓库（[lezi-fun/forumlify-deploy](https://github.com/lezi-fun/forumlify-deploy)，默认分支 `next`），在 Workers 面板确认后即完成部署。

#### 面板手动部署（Git 集成）

1. 打开 Cloudflare 控制台 → **Workers & Pages** → **Create** → **Connect to Git**
2. 选择 `lezi-fun/forumlify-deploy` 仓库（或你 fork 的副本），分支选 `next`
3. **构建设置**：
   - Build command: `npx opennextjs-cloudflare build --dangerouslyUseUnsupportedNextVersion`
   - 部署命令由 OpenNext 自动处理（`wrangler deploy`）
4. **环境变量**（Settings → Variables and Secrets，设为 **Secrets**）：按上方表格配置 `DATABASE_URL`、`JWT_SECRET`、`S3_*`
5. 保存并部署。完成后会得到 `https://<name>.<subdomain>.workers.dev` 地址

#### 命令行部署

```bash
# 需要 Node.js 20+，安装依赖后：
npx opennextjs-cloudflare build --dangerouslyUseUnsupportedNextVersion

# 部署前先配置 wrangler 认证（三选一）：
#   wrangler login                        # 浏览器登录
#   CLOUDFLARE_API_TOKEN=<token>          # API Token
#   CLOUDFLARE_API_KEY + CLOUDFLARE_API_EMAIL  # Global API Key
export CLOUDFLARE_ACCOUNT_ID=<account_id>

# 设置环境变量（Secret）
echo 'postgresql://...' | npx wrangler secret put DATABASE_URL
echo 'your-jwt-secret' | npx wrangler secret put JWT_SECRET
# ... 其余 S3_* 同理

npx opennextjs-cloudflare deploy
```

> 注意：OpenNext 使用 R2 增量缓存，首次部署前需创建缓存桶：
> `npx wrangler r2 bucket create forumlify-opennext-cache`
>
> `--dangerouslyUseUnsupportedNextVersion` 用于跳过 Next.js 主版本支持期检查（如仍在使用旧主版本时）。

> 提示：`next.config.js` 中的 `output: 'standalone'` 仅在设置了 `DOCKER=1` 环境变量时启用，serverless 平台会自动跳过。

## 🔄 与 main 分支（Express 版）的对比

本分支（`next`）基于上游 `main` 的 Express 单文件架构全面重构为 Next.js 16（App Router）。两者功能一致，实现方式不同：

| 维度 | main 分支（Express） | next 分支（Next.js 16） |
|------|---------------------|------------------------|
| **前端** | 单个 1488 行 `index.html` + `js/` 原生 JS 模块（手写 DOM 操作） | React 19 组件（`components/`），状态由 `AppProvider` 管理 |
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

- Next.js 16 (App Router) + React 19
- Express 风格 Route Handlers (Node.js Runtime)
- PostgreSQL + pg
- JWT 认证 + bcrypt 密码哈希
