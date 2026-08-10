# 测试

Forumlify 使用 Node.js 内置的 `node:test` 测试框架（零额外依赖）。

## 前置条件

测试需要一个可用的 PostgreSQL 数据库和运行中的服务实例。

```bash
# 1. 启动测试数据库（PostgreSQL 15）
docker run -d --name forumlify-test \
  -e POSTGRES_USER=forumlify -e POSTGRES_PASSWORD=123456 -e POSTGRES_DB=forumlify \
  -p 5433:5432 postgres:15

# 2. 导入表结构
docker exec -i forumlify-test psql -U forumlify -d forumlify < schema.sql

# 3. 构建并启动服务（测试端口 3100）
DATABASE_URL='postgresql://forumlify:123456@localhost:5433/forumlify' \
JWT_SECRET=test-secret PORT=3100 npm run build && npm start
```

## 运行测试

```bash
# 默认连 http://localhost:3100
npm test

# 指定服务地址
BASE_URL=http://localhost:3200 npm test
```

## 覆盖范围

- `api.test.js` — 认证（注册/登录/me）、帖子（创建/列表/分页/删除）、回复、举报、友链、统计、私信、权限（401/403/404）
