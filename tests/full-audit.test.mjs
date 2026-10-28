import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('E2E GitHub Pages deployment readiness check', () => {
  const root = process.cwd();

  // 1. .nojekyll present
  assert.ok(fs.existsSync(path.join(root, '.nojekyll')), '.nojekyll must exist in root');

  // 2. index.html at root
  assert.ok(fs.existsSync(path.join(root, 'index.html')), 'index.html must exist at root');

  // 3. .gitignore does not ignore css, js, images, or index.html
  if (fs.existsSync(path.join(root, '.gitignore'))) {
    const gitignore = fs.readFileSync(path.join(root, '.gitignore'), 'utf8');
    assert.ok(!/^(?:index\.html|css|js|images)$/m.test(gitignore), 'Core site assets must not be gitignored');
  }

  // 4. Verify no broken local files referenced anywhere in index.html
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const links = [...html.matchAll(/(?:src|href)="([^"#?]+)(?:[#?][^"]*)?"/g)].map(m => m[1]);
  for (const l of links) {
    if (l.startsWith('http') || l.startsWith('mailto:')) continue;
    assert.ok(fs.existsSync(path.join(root, l)), `Resource missing: ${l}`);
  }
});
