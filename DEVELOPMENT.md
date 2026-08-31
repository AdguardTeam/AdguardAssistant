# AdGuard Assistant — Development Guide

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
    - [Clone the repository](#clone-the-repository)
    - [Install dependencies](#install-dependencies)
    - [Build the project](#build-the-project)
    - [Run tests](#run-tests)
    - [Run linting](#run-linting)
- [Project Overview](#project-overview)
- [Development Workflow](#development-workflow)
    - [Branching model](#branching-model)
    - [Code style](#code-style)
    - [Making changes](#making-changes)
    - [Commit message convention](#commit-message-convention)
    - [Testing in a real browser extension](#testing-in-a-real-browser-extension)
- [Common Tasks](#common-tasks)
    - [Updating translations](#updating-translations)
    - [Versioning and releases](#versioning-and-releases)
    - [Running in Docker](#running-in-docker)
- [Troubleshooting](#troubleshooting)
- [Additional Resources](#additional-resources)

## Prerequisites

Before you start, make sure you have the following tools installed:

| Tool     | Version         | How to check |
| -------- | --------------- | ------------ |
| Node.js  | 22.12 or later  | `node -v`    |
| pnpm     | >=10.33.4 <11   | `pnpm -v`    |

The assistant has **zero runtime dependencies**. All dependencies are
build-time only — Webpack 5, Babel, LESS, and testing tools (QUnit +
Puppeteer).

## Getting Started

### Clone the repository

```bash
git clone git@github.com:AdGuardSoftwareLimited/ext-assistant.git
cd ext-assistant
```

### Install dependencies

```bash
pnpm install
```

> **Note**: pnpm 10 does not run dependency build scripts by default, so
> Puppeteer's `postinstall` (which downloads a Chromium binary) is skipped.
> When running tests locally, you must install Chrome separately — see
> [Run tests](#run-tests) below.

### Build the project

Three build channels are available:

| Command        | Channel   | Output Directory  |
| -------------- | --------- | ----------------- |
| `pnpm dev`     | DEV       | `build/dev/`      |
| `pnpm beta`    | BETA      | `build/beta/`     |
| `pnpm release` | RELEASE   | `build/release/`  |

Each command runs three Webpack builds in sequence:

1. **Userscript build** (`webpack.user.config.js`)
   — produces `assistant.user.js` (self-contained userscript for
   Tampermonkey/Greasemonkey).

2. **UMD build** (`webpack.umd.config.js`)
   — produces `assistant.js` in the output directory (also copied to `dist/`
   for NPM publishing).

3. **Self-context build** (`webpack.self.config.js`)
   — produces `self.assistant.js` which exposes `adguardAssistant` as a
   global variable on `self`, for environments that do not support UMD
   (see AG-22653).

**Build output files** (per channel directory):

| File                | Build Type | Purpose                                   |
| ------------------- | ---------- | ----------------------------------------- |
| `assistant.user.js` | userscript | Self-executing userscript                 |
| `assistant.meta.js` | userscript | Userscript metadata (version, update URL) |
| `assistant.js`      | UMD        | Embeddable module (NPM package)           |
| `self.assistant.js` | self       | Global-variable module for `self`         |

> For DEV builds, the UMD (`assistant.js`) and self (`self.assistant.js`)
> builds are also written to `build/dev/`; they are copied to `dist/` only
> for RELEASE builds (for NPM publish).

### Run tests

Tests use QUnit and run in a headless Chromium via Puppeteer.

```bash
pnpm test
```

This command:

1. Bundles the test suite with `tests/webpack.test.config.js` → `tests/dist/`
2. Launches Puppeteer to load the test page and run QUnit assertions

**Chrome/Chromium requirement**: Puppeteer needs a Chrome/Chromium binary.
If you see `Could not find Chrome`, install it with:

```bash
npx puppeteer browsers install chrome
```

The test suite is minimal — it verifies the assistant does not cause errors
when loaded on a page. Test files live in `tests/` and use a `.test.js`
suffix.

### Run linting

```bash
pnpm lint
```

`pnpm lint` runs ESLint on `src/` and `tests/` (the `airbnb-base` preset)
and markdownlint on all Markdown files. There is no auto-fix command — fix
lint issues manually. The detailed code style is documented in
[AGENTS.md — Code Quality](./AGENTS.md#code-quality).

## Project Overview

The assistant is a browser userscript that is also published as an NPM
package (`@adguard/assistant`) and embedded in AdGuard browser extensions.
Learn more in [README.md](./README.md). Code guidelines and architecture
details are in [AGENTS.md](./AGENTS.md).

### How it works

1. **Userscript mode** — executed via Tampermonkey/Greasemonkey. Uses
   `GM_setValue`/`GM_getValue` for storage and Greasemonkey APIs for
   integration with the AdGuard extension.

2. **Embedded mode** — injected as a `<script>` tag by the browser extension.
   Uses `localStorage` fallback for storage. The extension provides
   `AdguardSettings` (locale, nonce, etc.) as a global variable.

At runtime, the assistant detects mobile vs. desktop via the user agent and
initializes the appropriate UI controller (`iframe.js` or `iframe.mobile.js`).

See `src/main.js` for the desktop/mobile wiring and `src/embedded.js` for
the embedded entry point.

## Development Workflow

### Branching model

- Branch from `master`
- Name branches with the JIRA issue ID: `fix/AG-XXXXX` or `feature/AG-XXXXX`
- Target `master` with pull requests
- Keep commits focused and atomic

### Code style

Adheres to the [Airbnb JavaScript style guide] via ESLint. See
[AGENTS.md — Code Guidelines](./AGENTS.md#code-guidelines) for the full
conventions.

[Airbnb JavaScript style guide]: https://github.com/airbnb/javascript

### Making changes

1. Create a branch from `master`:

   ```bash
   git checkout master
   git pull
   git checkout -b fix/AG-XXXXX
   ```

2. Make your changes in `src/`. Build outputs in `dist/` and `build/` are
   **generated** — do not edit them directly.

3. Before committing, run:

   ```bash
   pnpm lint
   pnpm test
   ```

4. Update [CHANGELOG.md](./CHANGELOG.md) under the `Unreleased` section if
   the change is user-facing. Do NOT touch the changelog for changes that
   only affect CI or tests (workflows, test code, tooling) — those never
   get a changelog entry.

5. If public API changes (exports from `src/index.js`), update
   `types/assistant.d.ts`.

### Commit message convention

Every commit message MUST start with the ticket number (`AG-XXX`) so it
auto-links with the task tracker, followed by a short description in the
present tense:

```text
AG-XXX <short description in present tense>
```

Examples:

- `AG-55716 Add reusable publish-release workflow`
- `AG-4321 Fix redirect after login`
- `AG-99 Update dependencies`

Automated commits that CI creates on its own (for example, the CHANGELOG
finalization in the release-* PRs, which has no ticket number) use a
[Conventional Commits] prefix such as `docs:` — e.g.
`docs: finalize changelog for release`.

[Conventional Commits]: https://www.conventionalcommits.org/en/v1.0.0/

### Testing in a real browser extension

To test the assistant inside the AdGuard Browser Extension:

1. Build the assistant:

   ```bash
   cd ext-assistant
   pnpm dev        # or pnpm beta / pnpm release
   ```

2. Build the browser extension with the updated assistant:

   ```bash
   cd browser-extension
   rm -rf build
   pnpm dev chrome-mv3   # or another browser target
   ```

3. Load the unpacked extension from `browser-extension/build/dev/chrome-mv3/`
   in Chrome/Edge/etc.

4. Verify the assistant version in the built output:

   ```bash
   grep -o "AdGuard Assistant - v[0-9.]*" \
     browser-extension/build/dev/chrome-mv3/pages/assistant-inject.js
   ```

## Common Tasks

### Updating translations

Translations are managed via [Twosky](https://twosky.int.agrd.dev) and stored
in `locales/`. Each language has its own subdirectory with a `messages.json`
file. 40+ languages are supported.

```bash
pnpm locales:download          # Download latest translations from Twosky
pnpm locales:upload            # Upload local changes to Twosky
pnpm locales:validate-required # Verify all locales have the required keys
```

Configuration is in `.twosky.json` (project ID, base locale, language list).

### Versioning and releases

`package.json` has **no `version` field** — versions are managed entirely by
the release automation:

- CI (`ci.yml`) stamps a next-patch `-dev` version derived from CHANGELOG.md
  into `package.json` before building, via the shared `set-dev-version`
  action. To reproduce a CI build locally, run
  `npm pkg set version="4.4.14-dev"` first and restore the file with
  `git checkout -- package.json` afterwards.
- Releases are prepared with the **Prepare release** workflow
  (`prepare-release.yml`, manual `tag` input), which opens a `release-bump/*`
  PR finalizing CHANGELOG.md, and published by merging that PR
  (`publish-release.yml` parses the tag from CHANGELOG.md and injects the
  version at build time).

Never add a `version` field by hand. See [DEPLOYMENT.md](./DEPLOYMENT.md) for
the full release process.

### Running in Docker

A multi-stage `Dockerfile` is used for CI. To run the full CI pipeline
locally:

```bash
# Lint + dev build + tests (matches the CI workflow), artifacts in output/
docker build \
  --file Dockerfile \
  --progress plain \
  --build-arg TEST_RUN_ID="$(date +%s)" \
  --target test-output \
  --output type=local,dest=output \
  .
```

To build release artifacts exactly as the publish pipeline does:

```bash
# package.json has no version field — stamp one first (restore afterwards
# with `git checkout -- package.json`)
npm pkg set version="4.4.14-dev"

docker build \
  --file Dockerfile \
  --progress plain \
  --build-arg TEST_RUN_ID="$(date +%s)" \
  --target build-output \
  --output type=local,dest=output \
  .
```

Available output targets: `test-output`, `build-beta-output`, and
`build-output` (release build).

## Troubleshooting

### `Could not find Chrome` when running tests

Puppeteer cannot find a local Chromium binary. Install it:

```bash
npx puppeteer browsers install chrome
```

If you prefer to use your system Chrome, set the `PUPPETEER_EXECUTABLE_PATH`
environment variable:

```bash
export PUPPETEER_EXECUTABLE_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
pnpm test
```

### `pnpm: command not found`

Install pnpm globally:

```bash
npm install -g pnpm@10
```

Or enable it via Corepack (built into Node.js ≥ 16.9):

```bash
corepack enable pnpm
corepack prepare pnpm@10 --activate
```

### `ERR_OSSL_EVP_UNSUPPORTED` on newer Node.js versions

If you see OpenSSL errors during build, ensure you're using Node.js 22.x.
The project is tested against Node.js 22 and may not work with older
versions.

## Additional Resources

- [README.md](./README.md) — Project overview, usage, and installation
- [AGENTS.md](./AGENTS.md) — Code guidelines and architecture for
  contributors and AI agents
- [DEPLOYMENT.md](./DEPLOYMENT.md) — Release channels and the GitHub Actions
  deployment pipeline
- [CHANGELOG.md](./CHANGELOG.md) — Version history
- [AdGuard Browser Extension](https://github.com/AdguardTeam/AdguardBrowserExtension)
  — The extension that embeds this assistant
