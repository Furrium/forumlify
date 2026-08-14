import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function flatten(value, prefix = '', result = new Map()) {
  for (const [key, child] of Object.entries(value)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (child && typeof child === 'object' && !Array.isArray(child)) {
      flatten(child, fullKey, result);
    } else {
      result.set(fullKey, child);
    }
  }
  return result;
}

async function readLocale(name) {
  const source = await readFile(path.join(projectRoot, 'locales', `${name}.json`), 'utf8');
  return flatten(JSON.parse(source));
}

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(target);
    return /\.(?:css|js|jsx|json|ts|tsx)$/.test(entry.name) ? [target] : [];
  }));
  return nested.flat();
}

test('Chinese and English locales expose the same non-empty keys', async () => {
  const [zh, en] = await Promise.all([readLocale('zh'), readLocale('en')]);
  assert.deepEqual([...zh.keys()].sort(), [...en.keys()].sort());

  for (const [locale, values] of [['zh', zh], ['en', en]]) {
    for (const [key, value] of values) {
      assert.equal(typeof value, 'string', `${locale}.${key} must be a string`);
      assert.notEqual(value.trim(), '', `${locale}.${key} must not be empty`);
    }
  }
});

test('statically referenced translation keys exist in both locales', async () => {
  const [zh, en] = await Promise.all([readLocale('zh'), readLocale('en')]);
  const files = await sourceFiles(path.join(projectRoot, 'components'));
  const referenced = new Set();

  for (const file of files) {
    const source = await readFile(file, 'utf8');
    for (const match of source.matchAll(/\bt\(\s*['"]([^'"]+)['"]/g)) {
      referenced.add(match[1]);
    }
  }

  const missing = [...referenced].filter((key) => !zh.has(key) || !en.has(key)).sort();
  assert.deepEqual(missing, []);
});

test('runtime UI contains no emoji except the approved chat greeting', async () => {
  const roots = ['app', 'components', 'locales'].map((name) => path.join(projectRoot, name));
  const files = (await Promise.all(roots.map(sourceFiles))).flat();
  const occurrences = [];

  for (const file of files) {
    const source = await readFile(file, 'utf8');
    for (const match of source.matchAll(/\p{Extended_Pictographic}/gu)) {
      occurrences.push({
        file: path.relative(projectRoot, file),
        emoji: match[0],
      });
    }
  }

  assert.deepEqual(occurrences, [
    { file: 'components/chat/ChatWindow.js', emoji: '👋' },
  ]);
});

test('runtime UI does not call native alert or confirm dialogs', async () => {
  const roots = ['app', 'components', 'lib'].map((name) => path.join(projectRoot, name));
  const files = (await Promise.all(roots.map(sourceFiles))).flat();
  const calls = [];

  for (const file of files) {
    const source = await readFile(file, 'utf8');
    if (/\b(?:window\.)?(?:alert|confirm)\s*\(/.test(source)) {
      calls.push(path.relative(projectRoot, file));
    }
  }

  assert.deepEqual(calls, []);
});

test('every statically named Icon has an SVG path', async () => {
  const componentsRoot = path.join(projectRoot, 'components');
  const files = await sourceFiles(componentsRoot);
  const iconSource = await readFile(path.join(componentsRoot, 'Icons.js'), 'utf8');
  const definitions = new Set([...iconSource.matchAll(/^\s{2}(\w+): \(/gm)].map((match) => match[1]));
  const usages = new Set();

  for (const file of files) {
    const source = await readFile(file, 'utf8');
    for (const match of source.matchAll(/<Icon\s+[^>]*name="([A-Za-z0-9]+)"/g)) {
      usages.add(match[1]);
    }
  }

  assert.deepEqual([...usages].filter((name) => !definitions.has(name)).sort(), []);
});
