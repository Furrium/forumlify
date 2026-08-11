import { test } from 'node:test';
import assert from 'node:assert/strict';
import { jsonWithEtag } from '../lib/http-cache.js';

test('jsonWithEtag returns a cacheable JSON response', async () => {
  const req = new Request('https://example.test/api/posts');
  const res = await jsonWithEtag(req, { data: ['post'] });

  assert.equal(res.status, 200);
  assert.equal(res.headers.get('cache-control'), 'public, max-age=0, must-revalidate');
  assert.match(res.headers.get('etag'), /^"[0-9a-f]{64}"$/);
  assert.deepEqual(await res.json(), { data: ['post'] });
});

test('jsonWithEtag returns 304 when the validator matches', async () => {
  const initial = await jsonWithEtag(
    new Request('https://example.test/api/posts'),
    { data: ['post'] }
  );
  const etag = initial.headers.get('etag');
  const conditional = await jsonWithEtag(
    new Request('https://example.test/api/posts', {
      headers: { 'If-None-Match': `W/${etag}` },
    }),
    { data: ['post'] }
  );

  assert.equal(conditional.status, 304);
  assert.equal(conditional.headers.get('etag'), etag);
  assert.equal(await conditional.text(), '');
});

test('jsonWithEtag returns new content when the validator is stale', async () => {
  const req = new Request('https://example.test/api/posts', {
    headers: { 'If-None-Match': '"stale"' },
  });
  const res = await jsonWithEtag(req, { data: ['updated'] });

  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), { data: ['updated'] });
});
