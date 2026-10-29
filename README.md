# Digital Education & Safety Foundation - Progressive Web App (PWA) Template

[![Deploy PWA to GitHub Pages](https://github.com/digitaledsafety/template-pwa/actions/workflows/deploy.yml/badge.svg)](https://github.com/digitaledsafety/template-pwa/actions/workflows/deploy.yml)

A minimal, secure, and modern Progressive Web App (PWA) starter template created and maintained by the **Digital Education & Safety Foundation**.

This template provides a zero-dependency baseline meeting modern web and Android Chrome installation criteria, including offline capability via Service Worker, strict Content Security Policy (CSP), and automated Playwright test suites.

## Features

- 📱 **Modern PWA Compliance**: Meets modern web install criteria including maskable icons, rich screenshots with form factors, and installable web manifest.
- ⚡ **Offline Support**: Cache-first Service Worker (`sw.js`) that safely isolates network fetch requests and handles offline mode gracefully.
- 🔒 **Security First**: Strict Content Security Policy (`default-src 'self'`) forbidding inline scripts and untrusted external sources.
- 🧪 **Automated Testing**: Integrated Playwright test suite verifying Service Worker lifecycle, Web Manifest structure, CSP compliance, and offline functionality.
- 🚀 **CI/CD Automation**: Automated testing and single-command deployment to GitHub Pages via GitHub Actions.

## Getting Started

### Prerequisites

- Node.js (v22 or higher recommended)
- npm (v10 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/digitaledsafety/template-pwa.git
   cd template-pwa
   ```

2. Install dependencies and Playwright browser binaries:
   ```bash
   npm install
   npx playwright install chromium
   ```

### Local Development

Start a local web server to host the PWA:

```bash
npx serve .
```

Navigate to `http://localhost:3000` in your web browser.

## Testing

Run the Playwright test suite locally:

```bash
npm test
```

Or execute Playwright directly:

```bash
npx playwright test
```

## Project Structure

```
template-pwa/
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD deployment workflow
├── tests/
│   └── pwa.spec.js           # Playwright E2E and PWA compliance tests
├── app.js                    # Application logic & SW registration
├── index.html                # Main HTML entrypoint with strict CSP
├── manifest.json             # Web App Manifest definition
├── style.css                 # Application styles
├── sw.js                     # Service worker caching engine
└── package.json              # Project dependencies and scripts
```

## License

This project is licensed under the [ISC License](LICENSE).

<script type="module" src="https://digitaledsafety.github.io/badge/src/define.js"></script>
<attribution-badge prefix="Created by" label="functions.io" logo="https://functions.io/images/favicon.png" href="https://functions.io"></attribution-badge>
