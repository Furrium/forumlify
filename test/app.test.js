const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const bcrypt = require('bcryptjs');
const multerPackage = require('multer/package.json');
const { app, pool } = require('../server');

test.after(async () => {
  await pool.end();
});

test('serves the forum frontend', async () => {
  const response = await request(app).get('/').expect(200);
  assert.match(response.headers['content-type'], /^text\/html/);
  assert.match(response.text, /Forumlify/);
});

test('unknown API route responds with JSON 404 instead of hanging', async () => {
  const response = await request(app)
    .get('/api/definitely-unknown')
    .timeout({ response: 1000, deadline: 2000 })
    .expect(404);

  assert.deepEqual(response.body, { error: '接口不存在' });
});

test('registration validates required fields before database access', async () => {
  const response = await request(app)
    .post('/api/auth/register')
    .send({ email: '', password: '', username: '' })
    .expect(400);

  assert.equal(response.body.error, '请填写完整信息');
});

test('login validates required fields before database access', async () => {
  const response = await request(app)
    .post('/api/auth/login')
    .send({ email: '', password: '' })
    .expect(400);

  assert.equal(response.body.error, '请填写邮箱和密码');
});

test('protected routes reject unauthenticated requests', async () => {
  const response = await request(app)
    .post('/api/posts')
    .send({ title: 'test', content: 'test' })
    .expect(401);

  assert.equal(response.body.error, '请先登录');
});

test('bcryptjs hashes and verifies passwords without native install scripts', async () => {
  const hash = await bcrypt.hash('correct horse battery staple', 4);
  assert.equal(await bcrypt.compare('correct horse battery staple', hash), true);
  assert.equal(await bcrypt.compare('wrong password', hash), false);
});

test('Multer is on the patched 2.2 release line', () => {
  assert.match(multerPackage.version, /^2\.2\./);
});
