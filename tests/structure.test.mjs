import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

test('index.html structure contains all sections, valid relative assets, and valid i18n keys', () => {
  const htmlPath = path.join(process.cwd(), 'index.html');
  assert.ok(fs.existsSync(htmlPath), 'index.html must exist');
  const html = fs.readFileSync(htmlPath, 'utf8');

  // Verify section anchors
  assert.match(html, /id="ftco-navbar"/, 'Navbar must exist');
  assert.match(html, /id="home"/, 'Home section must exist');
  assert.match(html, /id="battery"/, 'Battery & ESS section must exist');
  assert.match(html, /id="ev"/, 'EV section must exist');
  assert.match(html, /id="advantages"/, 'Advantages section must exist');
  assert.match(html, /id="track"/, 'Track metrics section must exist');
  assert.match(html, /id="contact"/, 'Contact section must exist');
  assert.match(html, /id="specModal"/, 'Product spec modal must exist');

  // Verify relative links (no absolute /css or http:// localhost)
  const hrefsAndSrcs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(m => m[1]);
  for (const link of hrefsAndSrcs) {
    if (link.startsWith('http') || link.startsWith('#') || link.startsWith('mailto:') || link.startsWith('https://wa.me')) {
      continue;
    }
    assert.ok(!link.startsWith('/'), `Link must be relative, found: ${link}`);
    const resolved = path.join(process.cwd(), link);
    assert.ok(fs.existsSync(resolved), `Linked asset does not exist: ${link}`);
  }

  // Verify all data-i18n keys in index.html exist in i18n dictionary
  const i18nCode = fs.readFileSync(path.join(process.cwd(), 'js/i18n.js'), 'utf8');
  const sandbox = { window: {}, localStorage: { getItem: () => null, setItem: () => {} } };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(i18nCode, sandbox);
  const translations = sandbox.RootZeI18n.translations.en;

  const i18nKeys = [...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]);
  assert.ok(i18nKeys.length > 20, 'index.html should have comprehensive data-i18n tags');
  for (const key of i18nKeys) {
    assert.ok(translations[key], `i18n key "${key}" found in index.html is missing in i18n.js`);
  }
});
