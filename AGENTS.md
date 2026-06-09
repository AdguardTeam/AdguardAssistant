# AGENTS.md

## Table of Contents

- [Project Overview](#project-overview)
- [Technical Context](#technical-context)
- [Project Structure](#project-structure)
- [Build And Test Commands](#build-and-test-commands)
- [Contribution Instructions](#contribution-instructions)
- [Code Guidelines](#code-guidelines)
  - [System Design](#system-design)
  - [Architecture](#architecture)
  - [Code Quality](#code-quality)
  - [Testing](#testing)
  - [Dependency Management](#dependency-management)
  - [Configuration \& Documentation](#configuration--documentation)
  - [Markdown Formatting](#markdown-formatting)
  - [Other](#other)
- [Resources](#resources)

## Project Overview

AdGuard Assistant is a userscript that helps users manage content filtering
directly from the browser. It enables manual element blocking, page
whitelisting, security report viewing, and filter management — all without
leaving the current page. The assistant is published as an npm package
(`@adguard/assistant`) and embedded in AdGuard browser extensions.

## Technical Context

- **Language/Version**: JavaScript (ES modules, transpiled via Babel), Node.js
  ≥ 22
- **Package Manager**: pnpm v10
- **Primary Dependencies**: None (zero runtime dependencies). Build-time
  dependencies include Webpack 5, Babel, LESS.
- **Bundler**: Webpack 5 (three configs: userscript, UMD, self-context)
- **Storage**: `GM_setValue`/`GM_getValue` (userscript mode),
  `localStorage`-based fallback (embedded mode)
- **Testing**: QUnit + Puppeteer
- **Target Platform**: Browser (userscript via Tampermonkey/Greasemonkey,
  embedded via `<script>` tag in browser extensions)
- **Project Type**: Single-package repository
- **Constraints**: Embedded build must be lightweight; self-context build must
  expose `adguardAssistant` as a global variable on `self`

## Project Structure

```text
├── .eslintrc                   # ESLint config (airbnb-base)
├── .twosky.json                # Locale translation platform config
├── babel.config.js             # Babel configuration
├── CHANGELOG.md                # Version history
├── Dockerfile                  # Multi-stage CI Docker build
├── package.json                # Dependencies and scripts
├── pnpm-lock.yaml              # Locked dependency versions
├── pnpm-workspace.yaml         # pnpm workspace definition
├── README.md                   # Project overview and development guide
├── bamboo-specs/               # CI/CD pipeline definitions (Bamboo)
│   ├── build-beta.yaml
│   ├── build-release.yaml
│   └── tests.yaml
├── build/                      # Build output (dev/beta/release per channel)
├── dist/                       # NPM publish output (UMD + self modules)
├── locales/                    # i18n translation files (40+ languages)
│   └── index.js                # Locale aggregator
├── scripts/
│   ├── build/                  # Webpack configs (common, user, UMD, self)
│   └── locales/                # Locale download/upload/validation helpers
├── src/                        # Application source
│   ├── index.js                # Module entry (exports adguardAssistant)
│   ├── index.user.js           # Userscript entry (self-executing)
│   ├── main.js                 # Core wiring (selects mobile vs desktop)
│   ├── embedded.js             # Embedded mode entry (for extensions)
│   ├── ioc.js                  # Dependency injection container
│   ├── protectedApi.js         # Safe browser API wrappers
│   ├── settings.js             # User settings manager
│   ├── runSheduler.js          # Document-end lifecycle handler
│   ├── button.js               # Floating assistant button
│   ├── iframe.js               # Desktop iframe controller
│   ├── iframe.mobile.js        # Mobile popup controller
│   ├── adguard-selector.js     # DOM element picker
│   ├── adguard-rules-constructor.js  # Filter rule builder
│   ├── slider-widget.js        # Slider widget
│   ├── localization.js         # i18n message lookup
│   ├── wot.js                  # Web of Trust integration
│   ├── log.js                  # Logger
│   ├── event.js                # Custom event emitter
│   ├── helpers.js              # Shared helpers (mobile detection)
│   ├── gm.js / gm-empty.js     # Greasemonkey API wrappers
│   ├── inline-resources.js     # Inlined HTML templates & CSS
│   ├── upgradeHelper.js        # Version migration logic
│   ├── controllers/            # Menu/slider controllers
│   ├── libs/                   # Vendored libs (css.escape)
│   ├── styles/                 # LESS stylesheets
│   ├── templates/              # HTML templates (hbs, raw)
│   └── utils/                  # DOM, UI, validation utilities
├── tests/                      # QUnit + Puppeteer integration tests
└── types/                      # TypeScript type declarations
    └── assistant.d.ts
```

## Build And Test Commands

### Setup

```bash
pnpm install                   # Install dependencies
```

### Build

| Command           | Channel  | Output Dir     | Output Files                                   |
|-------------------|----------|----------------|------------------------------------------------|
| `pnpm dev`        | DEV      | `build/dev`    | `assistant.user.js`, `assistant.js`, `self.assistant.js` |
| `pnpm beta`       | BETA     | `build/beta`   | `assistant.user.js`, `assistant.js`, `self.assistant.js` |
| `pnpm release`    | RELEASE  | `build/release`| `assistant.user.js`, `assistant.js`, `self.assistant.js` |

Each build command runs three Webpack configs:
1. **userscript** (`webpack.user.config.js`) — produces `assistant.user.js`
2. **UMD** (`webpack.umd.config.js`) — produces `dist/assistant.js`
3. **self-context** (`webpack.self.config.js`) — produces
   `dist/self.assistant.js`

### Test

```bash
pnpm test                      # Run QUnit tests via Puppeteer
```

> Tests bundle the source with `tests/webpack.test.config.js`, then launch
> Puppeteer to run QUnit assertions against a real browser page.

### Lint

```bash
pnpm lint                      # ESLint on src/ and tests/
```

### Other

```bash
pnpm locales:download          # Download translations from Twosky
pnpm locales:upload            # Upload translations to Twosky
pnpm locales:validate-required # Validate minimum required keys per locale
pnpm increment                 # Bump patch version (no git tag)
```

## Contribution Instructions

- You MUST verify your changes pass linting:

  ```bash
  pnpm lint
  ```

- You MUST update the unit tests for changed code.

- You MUST run the full test suite to verify nothing is broken:

  ```bash
  pnpm test
  ```

- When making changes to the project structure (adding, removing, or
  reorganizing files), ensure the Project Structure section in `AGENTS.md` is
  updated and remains valid.

- If the prompt essentially asks you to refactor or improve existing code,
  check if you can phrase it as a code guideline. If it's possible, add it to
  the relevant Code Guidelines section in `AGENTS.md`.

- After completing the task you MUST verify that the code you've written
  follows the Code Guidelines in this file.

- Even when your task is to write or update a document (e.g., a plan, PRD, or
  any Markdown file) rather than code, you MUST still run `pnpm lint` to
  verify Markdown formatting (if ESLint includes Markdown rules).

## Code Guidelines

### System Design

Design for a browser userscript embedded in extensions:

- The userscript runs in the context of the host web page — avoid polluting
  the global namespace. Use IIFEs and the `self` context sparingly.
- Keep the bundle small — the script is injected into every page. Avoid
  large dependencies and prefer vendored minimal polyfills (e.g.,
  `css.escape`).
- Separate concerns: DOM manipulation (`utils/`), UI controllers
  (`controllers/`), business logic (`adguard-selector.js`,
  `adguard-rules-constructor.js`), and integration (`gm.js`, `wot.js`).
- Handle both userscript and embedded runtimes — the `gm.js` module provides
  Greasemonkey API wrappers; `gm-empty.js` is a stub for embedded mode.
  Use `protectedApi.js` to safely access browser APIs that may be restricted.
- Support both desktop and mobile layouts — the `iframe.js` and
  `iframe.mobile.js` modules provide different UI implementations selected
  at runtime based on the user agent.
- React to page lifecycle events asynchronously via `runSheduler.js`; never
  block the page load by running heavy work synchronously.

### Architecture

Design principles:

- **Separation of Concerns** — DOM utilities, UI controllers, selector logic,
  and extension integration live in separate modules.
- **Single Responsibility Principle** — each module handles one aspect of the
  system (e.g., `button.js` only manages the floating button, `selector.js`
  only manages element selection).
- **Dependency Direction** — dependencies flow from entry points through
  controllers down to utilities; no circular dependencies.
- **Explicit Boundaries** — the `ioc.js` container is the single point of
  dependency registration and resolution.
- **Data Flow Clarity** — settings flow from `settings.js` → controllers;
  user actions flow from controllers → `adguard-rules-constructor.js` →
  callback.
- **Minimize Coupling, Maximize Cohesion** — modules interact through the
  IOC container and custom events (`event.js`), not direct imports.
- **Keep It Boring** — the codebase uses plain constructor functions and
  module patterns, not complex abstractions.

Layered architecture:

```text
Entry Points (index.js, index.user.js, embedded.js)
     ↓
Core Wiring (main.js)
     ↓
Services (ioc.js, settings.js, protectedApi.js, localization.js, wot.js, gm.js)
     ↓
UI Layer (button.js, iframe.js / iframe.mobile.js)
     ↓
Controllers (mainMenuController.js, selectorMenuController.js,
             sliderMenuController.js, settingsMenuController.js,
             blockPreviewController.js, sliderMenuControllerMobile.js)
     ↓
Domain Logic (adguard-selector.js, adguard-rules-constructor.js, slider-widget.js)
     ↓
Utilities (utils/dom-utils.js, utils/ui-utils.js, utils/common-utils.js,
          utils/ui-validation-utils.js)
```

Each layer may call layers below it. No layer may depend on a layer above it.

**Known exclusions** (to be fixed):

- `iframe.js` and `iframe.mobile.js` contain both view management and
  controller initialization, blurring the line between the UI layer and
  controllers.
- `settings.js` mixes constants, state management, and persistence logic in
  one module.

### Code Quality

- **Documentation**: JSDoc is required for constructor functions and public
  methods. Use `@returns`, `@param`, and `@constructor` tags.
- **Linting**: ESLint with `airbnb-base` config. Code MUST pass `pnpm lint`.
- **No console.log**: Use the custom `log.js` module (`log.debug`,
  `log.error`, `log.warn`, `log.info`) instead of `console.*`. The ESLint
  `no-console: error` rule enforces this.
- **Line length**: 120 characters maximum (ESLint `max-len` rule).
- **Indentation**: 4 spaces, with `SwitchCase: 1`.
- **No default exports**: Prefer named exports. The `import/prefer-default-export`
  rule is disabled.
- **Arrow body style**: No enforced preference (`arrow-body-style` disabled).
- **File naming**: `kebab-case` for module files (e.g., `adguard-selector.js`,
  `dom-utils.js`). `camelCase` for directory names.
- **Error handling**: Use try/catch in async callbacks and log errors with
  `log.error`. Do not silently swallow errors.
- **Global variables**: Userscript globals (`GM_*`, `AdguardSettings`,
  `DEBUG`, `WotData`) are declared in `/* global */` comments. Do not add
  new implicit globals.

### Testing

- **Framework**: QUnit with Puppeteer for browser-based integration tests.
- **File placement**: Test files live in `tests/`. The entry point is
  `tests/index.test.js`, which imports test modules.
- **Naming**: Test modules use `.test.js` suffix.
- **Structure**: Use `QUnit.module` for grouping and `QUnit.test` for
  individual assertions.
- **Running**: `pnpm test` bundles source with `tests/webpack.test.config.js`
  and runs assertions in a headless Chromium via Puppeteer.
- **Verification**: Tests MUST pass before submitting changes.

### Dependency Management

- **Pin all dependency versions explicitly** — exact versions in
  `package.json`, locked by `pnpm-lock.yaml`.
- **Prefer vanilla solutions** — this project already has zero runtime
  dependencies. Keep it that way.
- **Reputable sources only** — dependencies MUST come from well-established,
  actively maintained projects.
- **Avoid unpopular libraries** — do NOT add niche or obscure packages with
  limited community adoption.
- **Minimize dependency count** — each new dependency increases bundle size
  and maintenance burden. Justify every addition.
- **Use the latest stable version** — when adding a new dependency,
  explicitly check the npm registry for the latest stable release and use it.

**Rationale**: The assistant is injected into every page; bundle size
directly impacts user experience. Fewer dependencies mean a smaller,
faster script.

**Known exclusions**:

- Dev dependencies use `^` ranges (e.g., `"webpack": "^5.105.1"`). This is
  acceptable for build tools but should be tightened over time.

### Configuration & Documentation

- **Channel environment**: Build behavior is controlled by the `CHANNEL_ENV`
  environment variable (`DEV`, `BETA`, or `RELEASE`), set by the build
  scripts (`pnpm dev`, `pnpm beta`, `pnpm release`).
- **Locales**: Translations are managed via `.twosky.json` and the
  `LOCALES` environment variable. Dictionaries are committed in `locales/`.
- **Browser settings**: The `AdguardSettings` global object (injected by the
  embedding extension) provides locale, nonce, and other configuration at
  runtime.
- **Documentation to update**: When changing public API (exports from
  `index.js`), update `types/assistant.d.ts`. When changing behavior, update
  `CHANGELOG.md` under the `Unreleased` section.
- **Secrets**: Do NOT hardcode API keys, tokens, or other secrets. Use
  environment variables or the embedding extension's `AdguardSettings`.

### Markdown Formatting

All Markdown files MUST follow these formatting rules:

- **Line length**: Keep lines at most 80 characters, but don't overwrap the
  lines artificially short just to hit the limit, keep them close to 80
  characters where possible. This is not a hard lint gate, but SHOULD be
  followed for readability. Lines inside fenced code blocks are exempt from
  this limit.
- **Unordered lists**: Use dashes (`-`) for bullet points. Indent nested
  list items by 4 spaces.
- **Continuation lines**: When a list item wraps to the next line, align the
  continuation with the first character of the item text, not the list
  marker.
- **Emphasis**: Use asterisks (`*`) for emphasis (`*italic*`, `**bold**`).
  Do NOT use underscores.
- **Headings**: Duplicate heading names are allowed only among sibling
  headings (same parent level).
- **Inline HTML**: Avoid raw HTML in Markdown. The only allowed elements are
  `<a>`, `<p>`, `<details>`, `<summary>`, and `<img>`.
- **Trailing spaces**: Do NOT leave trailing whitespace on any line.
- **Bare URLs**: Bare URLs are permitted and do not need to be wrapped in
  angle brackets.
- **Table formatting**: Align table columns with padding when the table fits
  within 80 characters. If the table exceeds 80 characters, use a compact
  format with single spaces only.

  ```markdown
  | Col1 | Col2 |
  | --- | --- |
  | Value1 | Value2 |
  ```

**Rationale**: Uniform Markdown formatting improves readability for both
humans and AI agents that consume project documentation.

### Other

- **Copyright header**: Every source file must include the GPL-3.0 copyright
  header.
- **Commit conventions**: Keep commits focused and atomic. Reference JIRA
  issue IDs (e.g., `AG-53878`) when applicable.
- **CI/CD**: Builds run in Bamboo with multi-stage Docker builds. See
  `Dockerfile` and `bamboo-specs/` for pipeline definitions.
- **Versioning**: Follow semantic versioning. The `pnpm increment` script
  bumps the patch version.

## Resources

- [README.md](./README.md) — Project overview, development setup, and usage
  instructions
- [CHANGELOG.md](./CHANGELOG.md) — Version history
