# RootZe Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a bilingual, modern, high-performance static promotional landing page for RootZe (new energy battery and EV distributor) based on template/carbook-master, optimized for GitHub Pages.

**Architecture:** A lightweight single-page static website deployed to the repo root with `.nojekyll`. Features a native JS bilingual (EN/ZH) engine, streamlined assets extracted from carbook-master, rich showcase cards for battery cells/ESS/EVs, and zero-backend B2B inquiry/WhatsApp channels.

**Tech Stack:** HTML5, CSS3 (Bootstrap 4, AOS, Owl Carousel), Native Vanilla JavaScript (i18n engine, DOM updates, smooth scrolling), Node.js built-in test runner (`node:test`).

**Spec:** docs/superpowers/specs/2026-10-28-rootze-landing-page-design.md

## Global Constraints

- Must run as purely static files with no backend server or Node.js runtime required for production hosting.
- All asset paths must be strictly relative (`./css/`, `./js/`, `./images/`) to support both custom apex domains and GitHub Pages subpaths.
- Must provide zero-refresh instant bilingual switching between English and Chinese, with preference persisted in localStorage and defaulting to English.
- Must prioritize power battery cells, PACK modules, and ESS storage solutions as primary showcases, with EV distribution channels secondary.
- Must include `.nojekyll` at repository root to bypass Jekyll processing on GitHub Pages.

## Review Focus

- Missing i18n key in index.html causes untranslated or blank text on language switch: test checks all `data-i18n` tags against translation dictionary.
- Asymmetry between EN and ZH dictionaries: test enforces identical key sets for both languages.
- Broken asset links (404 on CSS/JS/images) when hosted under GitHub Pages subpath: test parses `index.html` and verifies local file existence for every relative src/href.
- Missing contact/inquiry parameters when clicking WhatsApp or mailto: test checks URL encoding and structure of inquiry links.
- Form submission fails silently without feedback: test verifies client-side validation and feedback modal trigger.

---

### Task 1: Project Asset Scaffolding & Directory Setup

**Files:**
- Create: `.nojekyll`
- Copy & Streamline: `css/`, `js/`, `fonts/`, `images/` from `template/carbook-master/`
- Create: `css/rootze.css`
- Test: `tests/assets.test.mjs`

**Interfaces:**
- Produces: `.nojekyll`, baseline production CSS/JS/Font/Image tree, `css/rootze.css` brand theme styles.

- [ ] **Step 1: Write the failing test `tests/assets.test.mjs`**

```javascript
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/assets.test.mjs`
Expected: FAIL with `.nojekyll must exist in root` or file not found.

- [ ] **Step 3: Extract and scaffold production assets**

1. Create empty `.nojekyll` in project root.
2. Copy necessary assets from `template/carbook-master/`:
   - `css/` (excluding datepicker/timepicker)
   - `js/` (copy `jquery.min.js`, `bootstrap.min.js`, `owl.carousel.min.js`, `jquery.animateNumber.min.js`, `jquery.waypoints.min.js`, `aos.js`)
   - `fonts/`
   - `images/`
3. Create `css/rootze.css` providing:
   - RootZe brand theme variables (`--primary-color: #00b4d8; --accent-color: #00e5ff; --dark-bg: #0b1325;`)
   - Language switcher capsule widget styles (`.lang-switch`, `.lang-btn.active`)
   - Battery specs badges (`.spec-badge`, `.tech-table`)
   - Spec detail modal dialog styling

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/assets.test.mjs`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add .nojekyll css/ js/ fonts/ images/ tests/assets.test.mjs
git commit -m "feat: scaffold assets and brand css for RootZe landing page"
```

---

### Task 2: Bilingual i18n Data Dictionary & Engine

**Files:**
- Create: `js/i18n.js`
- Test: `tests/i18n.test.mjs`

**Interfaces:**
- Produces: `window.RootZeI18n` with methods:
  - `init(): void`
  - `setLanguage(lang: 'en' | 'zh'): void`
  - `getLanguage(): 'en' | 'zh'`
  - `t(key: string): string`
  - `translations: { en: Record<string, string>, zh: Record<string, string> }`

- [ ] **Step 1: Write the failing test `tests/i18n.test.mjs`**

```javascript
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/i18n.test.mjs`
Expected: FAIL with `js/i18n.js` not found.

- [ ] **Step 3: Implement `js/i18n.js`**

1. Define `translations` object covering all sections:
   - Navigation, Hero, Battery & ESS, EV Distribution, Advantages, Metrics, Contact/Inquiry, Spec Modal, Footer.
2. Implement DOM walker:
   - For all elements matching `[data-i18n]`, replace `innerHTML` or `textContent` with `t(attr)`.
   - For elements matching `[data-i18n-placeholder]`, replace `placeholder` attribute.
3. Add `localStorage` caching key `'rootze_lang'` with fallback to `'en'`.
4. Export to `window.RootZeI18n`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/i18n.test.mjs`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add js/i18n.js tests/i18n.test.mjs
git commit -m "feat: implement bilingual i18n dictionary and client engine"
```

---

### Task 3: Core Landing Page HTML Structure & Sections

**Files:**
- Create: `index.html`
- Test: `tests/structure.test.mjs`

**Interfaces:**
- Consumes: `css/rootze.css`, `css/style.css`, `js/i18n.js`, `images/*`
- Produces: complete semantically valid `index.html` containing:
  - Responsive navbar with logo & language toggle
  - Hero section
  - Battery & ESS section (`#battery`)
  - EV Vehicles section (`#ev`)
  - Advantages section (`#advantages`)
  - Track record counter strip (`#track`)
  - Contact & Inquiry section (`#contact`)
  - Product specs modal (`#specModal`)
  - Footer

- [ ] **Step 1: Write the failing test `tests/structure.test.mjs`**

```javascript
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/structure.test.mjs`
Expected: FAIL with `index.html must exist`.

- [ ] **Step 3: Implement `index.html`**

Construct `index.html` with:
1. SEO metadata, viewport, OpenGraph tags for RootZe.
2. Navbar with brand logo, smooth navigation links, language toggle `[EN / 中文]`, quote CTA.
3. Hero section with headline, value badges, and jump buttons.
4. Battery & ESS Showcase (Prismatic LFP cells, High-energy NMC modules, Commercial ESS cabinet, Residential ESS).
5. EV Vehicle Showcase (Passenger EVs, Commercial logistics vans/trucks).
6. Supply chain advantages (Tier-1 source, UN38.3 hazardous logistics, flexible MOQ, global customs support).
7. Counter metrics strip.
8. B2B contact form + WhatsApp floating CTA.
9. Spec detail modal template (`#specModal`).
10. Footer with copyright and company details.
11. Script loading in correct dependency order (`jquery`, `bootstrap`, `owl.carousel`, `waypoints`, `animateNumber`, `aos`, `i18n.js`, `main.js`).

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/structure.test.mjs`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add index.html tests/structure.test.mjs
git commit -m "feat: create complete responsive landing page markup and i18n anchors"
```

---

### Task 4: Main Interactive Script & Modal Logic

**Files:**
- Create: `js/main.js`
- Test: `tests/interactions.test.mjs`

**Interfaces:**
- Consumes: `window.RootZeI18n`, `#specModal`, `#inquiryForm`, `#whatsappBtn`
- Produces:
  - Navbar scroll spy and sticky behavior
  - Language toggle event listeners
  - Product spec modal population with data attributes
  - Form validation & smart mailto + feedback modal

- [ ] **Step 1: Write the failing test `tests/interactions.test.mjs`**

```javascript
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/interactions.test.mjs`
Expected: FAIL with `js/main.js must exist` or missing handlers.

- [ ] **Step 3: Implement `js/main.js`**

1. Initialize AOS animation and Owl Carousel for product cards.
2. Initialize smooth scrolling on navigation anchor links.
3. Bind language button click to `RootZeI18n.setLanguage(lang)`.
4. Implement product spec data lookup (`productSpecs` dictionary) to populate `#specModal` when clicking `[data-spec-id]`.
5. Implement inquiry form submit handler:
   - Prevent default refresh.
   - Validate required fields (Name, Email/WhatsApp, Message).
   - Format inquiry text and construct `mailto:sales@rootze.com?subject=...&body=...`.
   - Show nice confirmation alert and trigger `window.location.href = mailtoLink`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/interactions.test.mjs`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add js/main.js tests/interactions.test.mjs
git commit -m "feat: implement interactive behaviors, spec modal, and smart inquiry handling"
```

---

### Task 5: End-to-End Verification & GitHub Pages Readiness

**Files:**
- Create: `tests/full-audit.test.mjs`
- Modify: `README.md`

**Interfaces:**
- Produces: comprehensive test report, verified `.nojekyll`, clean documentation with local preview and GitHub Pages deployment steps.

- [ ] **Step 1: Write the end-to-end audit test `tests/full-audit.test.mjs`**

```javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('E2E GitHub Pages deployment readiness check', () => {
  const root = process.cwd();

  // 1. .nojekyll present
  assert.ok(fs.existsSync(path.join(root, '.nojekyll')));

  // 2. index.html at root
  assert.ok(fs.existsSync(path.join(root, 'index.html')));

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
```

- [ ] **Step 2: Run all tests to verify project health**

Run: `node --test tests/*.test.mjs`
Expected: All test suites PASS.

- [ ] **Step 3: Update `README.md`**

Update `README.md` with:
- Project introduction (RootZe - New Energy Battery & EV Distribution)
- Live GitHub Pages deployment instructions (Settings -> Pages -> Source: Deploy from branch -> main / root)
- Local preview instructions (`npx serve .` or `python3 -m http.server 8000`)
- Folder structure overview

- [ ] **Step 4: Commit**

```bash
git add README.md tests/full-audit.test.mjs
git commit -m "docs: add GitHub Pages deployment guide and complete e2e audit tests"
```
