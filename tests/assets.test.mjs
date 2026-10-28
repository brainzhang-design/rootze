import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('required static scaffolding and assets exist', () => {
  const root = process.cwd();
  assert.ok(fs.existsSync(path.join(root, '.nojekyll')), '.nojekyll must exist in root');
  assert.ok(fs.existsSync(path.join(root, 'css/bootstrap.min.css')), 'bootstrap.min.css must exist');
  assert.ok(fs.existsSync(path.join(root, 'css/style.css')), 'style.css must exist');
  assert.ok(fs.existsSync(path.join(root, 'css/rootze.css')), 'rootze.css must exist');
  assert.ok(fs.existsSync(path.join(root, 'js/jquery.min.js')), 'jquery.min.js must exist');
  assert.ok(fs.existsSync(path.join(root, 'js/bootstrap.min.js')), 'bootstrap.min.js must exist');
  assert.ok(fs.existsSync(path.join(root, 'fonts')), 'fonts directory must exist');
  assert.ok(fs.existsSync(path.join(root, 'images')), 'images directory must exist');
});
