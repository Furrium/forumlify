# ============================================================
#  Forumlify (Next.js) 生产镜像 — standalone 模式
# ============================================================

# ---- 构建阶段 ----
FROM node:20-alpine AS builder
WORKDIR /app
ENV DOCKER=1

# 用 bun 装依赖（bun.lock 最新；npm 会读旧的 package-lock.json → react 18 → 构建失败）
RUN npm i -g bun

# 先装依赖（利用缓存）
COPY package.json bun.lock* package-lock.json* ./
RUN bun install

# 复制源码并构建
COPY . .
RUN bun run build

# ---- 运行阶段 ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# standalone 输出（含 server.js 与最小 node_modules）
COPY --from=builder /app/.next/standalone ./
# 静态资源
COPY --from=builder /app/.next/static ./.next/static

# 上传目录
RUN mkdir -p /app/uploads

EXPOSE 3000
CMD ["node", "server.js"]
