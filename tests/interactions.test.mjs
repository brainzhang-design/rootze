import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('main.js exists and exports event listeners and spec products database', () => {
  const mainJsPath = path.join(process.cwd(), 'js/main.js');
  assert.ok(fs.existsSync(mainJsPath), 'js/main.js must exist');
  const code = fs.readFileSync(mainJsPath, 'utf8');

  // Verify critical handlers exist in main.js
  assert.match(code, /RootZeI18n/, 'main.js must coordinate with RootZeI18n');
  assert.match(code, /specModal/, 'main.js must handle specModal trigger');
  assert.match(code, /mailto:/, 'main.js must support mailto fallback for inquiry form');
  assert.match(code, /wa\.me/, 'main.js must support WhatsApp direct link');
});
