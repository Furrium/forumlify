// Forumlify API 集成测试 — 管理后台 + 权限
// 运行: BASE_URL=http://localhost:3100 npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeAdmin } from './helpers.js';

const BASE = process.env.BASE_URL || 'http://localhost:3100';
const suffix = Date.now() + Math.floor(Math.random() * 100000);

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
let userToken = null;
let userId = null;
const adminUser = { email: `adm${suffix}@test.com`, password: '123456', username: `adm${suffix}` };
const normalUser = { email: `usr${suffix}@test.com`, password: '123456', username: `usr${suffix}` };

test('设置: 注册管理员 + 登录', async () => {
  await api('/auth/register', { method: 'POST', body: JSON.stringify(adminUser) });
  // 保证是 admin（即使库里已有其他用户）
  await makeAdmin(adminUser.email);
  const { data } = await api('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email: adminUser.email, password: adminUser.password }),
  });
  adminToken = data.token;
  assert.ok(adminToken);
});

test('设置: 注册普通用户 + 登录', async () => {
  await api('/auth/register', { method: 'POST', body: JSON.stringify(normalUser) });
  const { data } = await api('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email: normalUser.email, password: normalUser.password }),
  });
  userToken = data.token;
  userId = data.user.id;
});

test('普通用户访问管理接口返回 403', async () => {
  const { status } = await api('/users', { headers: { Authorization: `Bearer ${userToken}` } });
  assert.equal(status, 403);
});

test('管理员获取用户列表', async () => {
  const { status, data } = await api('/users', { headers: { Authorization: `Bearer ${adminToken}` } });
  assert.equal(status, 200);
  assert.ok(data.length >= 2);
});

test('按用户名查询用户', async () => {
  const { data } = await api('/users?username=' + normalUser.username, {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  assert.ok(data.length === 1);
  assert.equal(data[0].username, normalUser.username);
});

test('管理员不能修改自己的角色', async () => {
  const me = await api('/auth/me', { headers: { Authorization: `Bearer ${adminToken}` } });
  const { status } = await api('/users/' + me.data.id + '/role', {
    method: 'PUT',
    headers: { Authorization: `Bearer ${adminToken}` },
    body: JSON.stringify({ role: 'user' }),
  });
  assert.equal(status, 400);
});

test('管理员修改普通用户角色', async () => {
  const { status } = await api('/users/' + userId + '/role', {
    method: 'PUT',
    headers: { Authorization: `Bearer ${adminToken}` },
    body: JSON.stringify({ role: 'admin' }),
  });
  assert.equal(status, 200);
});

test('更新论坛名称', async () => {
  const { status } = await api('/settings', {
    method: 'PUT',
    headers: { Authorization: `Bearer ${adminToken}` },
    body: JSON.stringify({ forum_name: '测试论坛' }),
  });
  assert.equal(status, 200);
});

test('获取论坛设置', async () => {
  const { status, data } = await api('/settings');
  assert.equal(status, 200);
  assert.equal(data.forum_name, '测试论坛');
});

test('添加友情链接', async () => {
  const { status, data } = await api('/links', {
    method: 'POST',
    headers: { Authorization: `Bearer ${adminToken}` },
    body: JSON.stringify({ title: 'GitHub', url: 'https://github.com' }),
  });
  assert.equal(status, 200);
  assert.ok(data.id);
});

test('获取友情链接列表', async () => {
  const { status, data } = await api('/links');
  assert.equal(status, 200);
  assert.ok(data.length >= 1);
});

test('统计接口', async () => {
  const { status, data } = await api('/stats');
  assert.equal(status, 200);
  assert.ok(typeof data.posts === 'number');
  assert.ok(typeof data.users === 'number');
});

test('记录事件日志', async () => {
  const { status } = await api('/event-logs', {
    method: 'POST',
    headers: { Authorization: `Bearer ${adminToken}` },
    body: JSON.stringify({ action: 'test_action' }),
  });
  assert.equal(status, 200);
});

test('管理员查看事件日志', async () => {
  const { status, data } = await api('/event-logs', {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  assert.equal(status, 200);
  assert.ok(Array.isArray(data));
});
