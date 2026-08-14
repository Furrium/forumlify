import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sniffImage } from '../lib/image-type.js';

test('image signatures are detected without trusting file extensions', () => {
  assert.deepEqual(
    sniffImage(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0, 0, 0])),
    { ext: '.png', mime: 'image/png' }
  );
  assert.equal(sniffImage(Buffer.from('not an image')), null);
});

test('ICO signatures are accepted only for favicon uploads', () => {
  const ico = Buffer.from([0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x10, 0x10, 0, 0, 0, 0]);
  assert.equal(sniffImage(ico), null);
  assert.deepEqual(sniffImage(ico, { allowIcon: true }), { ext: '.ico', mime: 'image/x-icon' });
});
