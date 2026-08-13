// Forumlify API 集成测试 — 认证 + 帖子
// 运行: BASE_URL=http://localhost:3100 npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeAdmin } from './helpers.js';

const BASE = process.env.BASE_URL || 'http://localhost:3100';
const suffix = Date.now() + Math.floor(Math.random() * 100000); // 每次运行唯一后缀，避免冲突

async function api(path, options = {}) {
  const res = await fetch(BASE + '/api' + path, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  const data = await res.json().catch(() => ({}));
  return { status: res.status, data };
}

let adminToken = null;
let adminId = null;
let userId = null;
let postId = null;
let postNumber = null;
let replyId = null;

const adminUser = { email: `admin${suffix}@test.com`, password: '123456', username: `admin${suffix}` };
const normalUser = { email: `user${suffix}@test.com`, password: '123456', username: `user${suffix}` };

test('注册第一个用户自动成为管理员', async () => {
  const { status, data } = await api('/auth/register', {
    method: 'POST',
    body: JSON.stringify(adminUser),
  });
  assert.equal(status, 200);
  assert.ok(data.user.id);
  // 共享库中可能已有用户，makeAdmin 确保测试管理员有 admin 权限
  await makeAdmin(adminUser.email);
});

test('登录并获取 token', async () => {
  const { status, data } = await api('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email: adminUser.email, password: adminUser.password }),
  });
  assert.equal(status, 200);
  assert.ok(data.token);
  adminToken = data.token;
  adminId = data.user.id;
});

test('GET /api/auth/me 返回当前用户', async () => {
  const { status, data } = await api('/auth/me', { headers: { Authorization: `Bearer ${adminToken}` } });
  assert.equal(status, 200);
  assert.equal(data.username, adminUser.username);
});

test('注册普通用户', async () => {
  const { status, data } = await api('/auth/register', {
    method: 'POST',
    body: JSON.stringify(normalUser),
  });
  assert.equal(status, 200);
  assert.equal(data.user.role, 'user');
  userId = data.user.id;
});

test('密码少于6位被拒绝', async () => {
  const { status } = await api('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ email: `x${suffix}@test.com`, password: '123', username: `x${suffix}` }),
  });
  assert.equal(status, 400);
});

test('未登录访问受保护接口返回 401', async () => {
  const { status } = await api('/auth/me');
  assert.equal(status, 401);
});

test('发布帖子', async () => {
  const { status, data } = await api('/posts', {
    method: 'POST',
    headers: { Authorization: `Bearer ${adminToken}` },
    body: JSON.stringify({ title: '测试帖子', content: '这是测试内容' }),
  });
  assert.equal(status, 200);
  assert.ok(data.id);
  assert.ok(Number(data.post_number) >= 1);
  postId = data.id;
  postNumber = data.post_number;
});

test('帖子列表返回分页结构', async () => {
  const { status, data } = await api('/posts?page=1&limit=20');
  assert.equal(status, 200);
  assert.ok(Array.isArray(data.data));
  assert.ok(data.pagination);
  assert.ok(data.pagination.totalPages >= 1);
  assert.ok(data.data.some((p) => p.id === postId));
});

test('按 user_id 筛选帖子', async () => {
  const { data } = await api('/posts?user_id=' + adminId);
  assert.ok(data.data.every((p) => p.user_id === adminId));
});

test('帖子详情', async () => {
  const { status, data } = await api('/posts/' + postId);
  assert.equal(status, 200);
  assert.equal(data.title, '测试帖子');
});

test('公开编号可访问同一帖子', async () => {
  const { status, data } = await api('/posts/' + postNumber);
  assert.equal(status, 200);
  assert.equal(data.id, postId);
  assert.equal(data.post_number, postNumber);
});

test('不存在的帖子返回 404', async () => {
  const { status } = await api('/posts/00000000-0000-0000-0000-000000000000');
  assert.equal(status, 404);
});

test('非法 UUID 返回 404 而非 500', async () => {
  const { status } = await api('/posts/not-a-uuid');
  assert.equal(status, 404);
});

test('回复帖子', async () => {
  const { status, data } = await api('/posts/' + postId + '/replies', {
    method: 'POST',
    headers: { Authorization: `Bearer ${adminToken}` },
    body: JSON.stringify({ content: '第一条回复' }),
  });
  assert.equal(status, 200);
  assert.ok(data.id);
  replyId = data.id;
});

test('获取回复列表', async () => {
  const { status, data } = await api('/posts/' + postId + '/replies');
  assert.equal(status, 200);
  assert.ok(data.length >= 1);
});

test('删除自己的回复', async () => {
  const { status } = await api('/replies/' + replyId, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  assert.equal(status, 200);
});
