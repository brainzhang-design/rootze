import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

test('Web3Forms form fields and script integration', () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

  // Verify form has Web3Forms access_key, honeypot, and named inputs
  assert.match(html, /name="access_key"/, 'Form must contain access_key input');
  assert.match(html, /name="botcheck"/, 'Form must contain botcheck spam prevention');
  assert.match(html, /name="name"/, 'Form must contain named input "name"');
  assert.match(html, /name="company"/, 'Form must contain named input "company"');
  assert.match(html, /name="contact"/, 'Form must contain named input "contact"');
  assert.match(html, /name="category"/, 'Form must contain named input "category"');
  assert.match(html, /name="quantity"/, 'Form must contain named input "quantity"');
  assert.match(html, /name="message"/, 'Form must contain named input "message"');

  // Verify main.js integrates web3forms submit endpoint
  const mainJs = fs.readFileSync(path.join(root, 'js/main.js'), 'utf8');
  assert.match(mainJs, /api\.web3forms\.com\/submit/, 'main.js must submit to api.web3forms.com/submit');

  // Verify i18n keys for sending state and direct delivery success
  const i18nJs = fs.readFileSync(path.join(root, 'js/i18n.js'), 'utf8');
  assert.match(i18nJs, /contact\.btn_sending/, 'i18n must contain contact.btn_sending');
  assert.match(i18nJs, /contact\.sent_direct_title/, 'i18n must contain contact.sent_direct_title');
  assert.match(i18nJs, /contact\.sent_direct_desc/, 'i18n must contain contact.sent_direct_desc');
});
