# ============================================================
#  Forumlify (Next.js) 生产镜像 — standalone 模式
# ============================================================

# ---- 构建阶段 ----
FROM node:18-alpine AS builder
WORKDIR /app
ENV DOCKER=1

# 先装依赖（利用缓存）
COPY package.json package-lock.json* bun.lock* ./
RUN npm install

# 复制源码并构建
COPY . .
RUN npm run build

# ---- 运行阶段 ----
FROM node:18-alpine AS runner
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
