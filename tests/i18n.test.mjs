import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

test('i18n engine has symmetric keys and exports RootZeI18n', () => {
  const code = fs.readFileSync(path.join(process.cwd(), 'js/i18n.js'), 'utf8');
  const sandbox = { window: {}, localStorage: { getItem: () => null, setItem: () => {} }, document: {} };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);

  const i18n = sandbox.RootZeI18n;
  assert.ok(i18n, 'RootZeI18n must be attached to window');
  assert.ok(i18n.translations.en, 'translations.en must exist');
  assert.ok(i18n.translations.zh, 'translations.zh must exist');

  const enKeys = Object.keys(i18n.translations.en).sort();
  const zhKeys = Object.keys(i18n.translations.zh).sort();
  assert.deepEqual(enKeys, zhKeys, 'EN and ZH translation keys must be completely symmetric');

  // Verify critical keys
  const requiredKeys = [
    'brand.name', 'brand.tagline',
    'nav.home', 'nav.battery', 'nav.ev', 'nav.advantages', 'nav.track', 'nav.contact', 'nav.quote',
    'hero.title', 'hero.subtitle', 'hero.cta_battery', 'hero.cta_contact',
    'battery.title', 'battery.subtitle',
    'ev.title', 'ev.subtitle',
    'adv.title',
    'contact.title', 'contact.send'
  ];
  for (const k of requiredKeys) {
    assert.ok(i18n.translations.en[k], `Missing EN key: ${k}`);
    assert.ok(i18n.translations.zh[k], `Missing ZH key: ${k}`);
  }
});
