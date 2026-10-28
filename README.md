# RootZe — Global New Energy Battery & EV Distribution

Official bilingual (English / 中文) promotional landing page for **RootZe**, a premier global distributor of new energy traction batteries, ESS energy storage cabinets, and electric vehicles.

Designed for high-conversion B2B export and wholesale inquiries, with instant zero-refresh language switching and seamless deployment to **GitHub Pages**.

---

## 🌟 Key Features

* **Dual-Core Business Showcase**:
  * **Core Batteries & ESS (Priority)**: Tier-1 Prismatic LFP & NMC cells, Commercial & Industrial (C&I) liquid/air-cooled storage cabinets (100kWh–2MWh), and residential stackable/wall-mount home ESS.
  * **Electric Vehicles Distribution**: Export wholesale channels for pure electric passenger sedans/SUVs and commercial delivery vans/trucks.
* **Instant Bilingual Switching (i18n)**:
  * Client-side native JavaScript translation engine with symmetric English & Chinese dictionaries.
  * Zero page reload on toggle; automatically remembers visitor preference via `localStorage`.
* **Zero Backend Overhead**:
  * Pure static website (HTML5, Bootstrap 4, AOS animations, Owl Carousel, Vanilla JS).
  * Direct WhatsApp business integration + smart mailto quotation generator.
* **100% GitHub Pages Ready**:
  * Strict relative asset paths (`./css/`, `./js/`, `./images/`).
  * `.nojekyll` configuration file included to ensure seamless asset delivery.

---

## 🚀 Live Deployment to GitHub Pages

Deploying this website takes less than 1 minute:

1. Push this repository to your GitHub account:
   ```bash
   git push origin main
   ```
2. In your GitHub repository:
   * Go to **Settings** → **Pages** (under Code and automation).
   * Under **Build and deployment**:
     * **Source**: Select `Deploy from a branch`.
     * **Branch**: Select `main` (or your default branch) and folder `/ (root)`.
   * Click **Save**.
3. Within 1–2 minutes, your website will be live worldwide at:
   `https://<your-username>.github.io/<repo-name>/` (or your custom domain).

---

## 💻 Local Development & Preview

You can preview the website locally using any static web server:

### Option A: Python 3
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Option B: Node.js (npx)
```bash
npx serve .
```

---

## 🧪 Automated Testing & Verification

The project includes an automated test suite verifying static assets, semantic structure, bilingual dictionary symmetry, and GitHub Pages readiness:

```bash
node --test tests/*.test.mjs
```

### Verified Checks:
- `tests/assets.test.mjs`: Scaffolding integrity (`.nojekyll`, CSS, JS, fonts, images).
- `tests/i18n.test.mjs`: Complete EN/ZH key symmetry and translation validity.
- `tests/structure.test.mjs`: All section anchors, relative asset resolution, and data-i18n bindings.
- `tests/interactions.test.mjs`: Modal spec database, WhatsApp direct links, and mailto handlers.
- `tests/full-audit.test.mjs`: End-to-end GitHub Pages deployment readiness.

---

## 📂 Project Structure

```text
landingpage/
├── index.html                  # Main responsive single-page landing site
├── .nojekyll                   # GitHub Pages Jekyll bypass flag
├── README.md                   # Project documentation & deployment guide
├── css/
│   ├── bootstrap.min.css       # Responsive grid system
│   ├── style.css               # Modern automotive visual framework
│   ├── rootze.css              # RootZe brand styling, badges, modals, i18n switcher
│   └── ...                     # Animation and icon stylesheets
├── js/
│   ├── i18n.js                 # Bilingual translation dictionary & dynamic switcher
│   ├── main.js                 # Smooth scroll, spec modal lookup, counter, contact form
│   └── ...                     # Bootstrap, jQuery, waypoints, AOS plugins
├── images/                     # Vehicle, battery, and layout assets
├── fonts/                      # Font icon assets (Flaticon, Icomoon, Ionicons)
├── tests/                      # Automated node:test test suites
└── docs/
    └── superpowers/            # Specifications and implementation plans
```

---

## 📞 Business & Distribution Contact

* **Brand**: RootZe New Energy
* **Email**: [sales@rootze.com](mailto:sales@rootze.com)
* **Direct WhatsApp**: Available via floating widget on live site
