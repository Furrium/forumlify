// Forumlify API 集成测试 — 私信系统
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

async function register(email, username) {
  await api('/auth/register', { method: 'POST', body: JSON.stringify({ email, password: '123456', username }) });
  const { data } = await api('/auth/login', { method: 'POST', body: JSON.stringify({ email, password: '123456' }) });
  return data.token;
}

let tokenA, tokenB, tokenC, idB, convId;

test('私信: 注册三个用户', async () => {
  tokenA = await register(`ma${suffix}@test.com`, `ma${suffix}`);
  tokenB = await register(`mb${suffix}@test.com`, `mb${suffix}`);
  tokenC = await register(`mc${suffix}@test.com`, `mc${suffix}`);
  // /api/users 是 admin 接口，保证 A 是 admin 以便查询用户 id
  await makeAdmin(`ma${suffix}@test.com`);
  assert.ok(tokenA && tokenB && tokenC);
});

test('私信: 找到用户 B 的 id', async () => {
  const { data } = await api('/users', { headers: { Authorization: `Bearer ${tokenA}` } });
  idB = data.find((u) => u.username === `mb${suffix}`).id;
  assert.ok(idB);
});

test('私信: 创建会话', async () => {
  const { status, data } = await api('/conversations', {
    method: 'POST',
    headers: { Authorization: `Bearer ${tokenA}` },
    body: JSON.stringify({ other_user_id: idB }),
  });
  assert.equal(status, 200);
  assert.ok(data.id);
  convId = data.id;
});

test('私信: 同一对用户复用会话', async () => {
  const { data } = await api('/conversations', {
    method: 'POST',
    headers: { Authorization: `Bearer ${tokenA}` },
    body: JSON.stringify({ other_user_id: idB }),
  });
  assert.equal(data.id, convId);
});

test('私信: 不能与自己私信', async () => {
  const me = await api('/auth/me', { headers: { Authorization: `Bearer ${tokenA}` } });
  const { status } = await api('/conversations', {
    method: 'POST',
    headers: { Authorization: `Bearer ${tokenA}` },
    body: JSON.stringify({ other_user_id: me.data.id }),
  });
  assert.equal(status, 400);
});

test('私信: A 发送消息给 B', async () => {
  const { status, data } = await api('/conversations/' + convId + '/messages', {
    method: 'POST',
    headers: { Authorization: `Bearer ${tokenA}` },
    body: JSON.stringify({ content: '你好 B' }),
  });
  assert.equal(status, 200);
  assert.equal(data.content, '你好 B');
});

test('私信: B 看到未读消息', async () => {
  const { data } = await api('/conversations', { headers: { Authorization: `Bearer ${tokenB}` } });
  const conv = data.find((c) => c.id === convId);
  assert.ok(conv);
  assert.equal(parseInt(conv.unread_count), 1);
  assert.equal(conv.last_message, '你好 B');
});

test('私信: B 读取消息后标记已读', async () => {
  await api('/conversations/' + convId + '/messages', { headers: { Authorization: `Bearer ${tokenB}` } });
  const { data } = await api('/conversations', { headers: { Authorization: `Bearer ${tokenB}` } });
  assert.equal(parseInt(data.find((c) => c.id === convId).unread_count), 0);
});

test('私信: B 回复 A', async () => {
  const { status } = await api('/conversations/' + convId + '/messages', {
    method: 'POST',
    headers: { Authorization: `Bearer ${tokenB}` },
    body: JSON.stringify({ content: '你好 A' }),
  });
  assert.equal(status, 200);
});

test('私信: 第三方 C 无权访问会话', async () => {
  const { status } = await api('/conversations/' + convId + '/messages', {
    headers: { Authorization: `Bearer ${tokenC}` },
  });
  assert.equal(status, 403);
});

test('私信: 未登录返回 401', async () => {
  const { status } = await api('/conversations');
  assert.equal(status, 401);
});
