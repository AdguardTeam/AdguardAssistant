# AdGuard Assistant

AdGuard Assistant is a userscript that helps you manage filtering right from the browser. With its aid you are able to manually block any element, whitelist or report the page, or see the website's security report — all without having to leave the current page.

## How to report an issue?

GitHub can be used to report a bug or to submit a feature request. To do so, go to [this page](https://github.com/AdguardTeam/AdguardAssistant/issues) and click the *New issue* button.

## Our plans

To see the 'big picture', to watch current progress and to get an idea of approximate dates for upcoming AdGuard Assistant releases, see this page: https://github.com/AdguardTeam/AdguardAssistant/milestones

## Releases

You can find all AdGuard Assistant releases here: https://github.com/AdguardTeam/AdguardAssistant/releases

## Development

> Make sure you have installed [Node.js] v22 or later
> and [pnpm] v10 or later.

### Install dependencies

```bash
pnpm install
```

### Build

| Command           | Output Dir    |
|-------------------|---------------|
| `pnpm dev`        | build/dev     |
| `pnpm beta`       | build/beta    |
| `pnpm release`    | build/release |

Each command builds next files inside directory:

- `assistant.meta.js` — meta information for userscript;
- `assistant.user.js` — userscript code;
- `assistant.js` — code for embedding in another projects, it has functionality
  for selection of DOM nodes and rules building,
- `build.txt` — bamboo environment variables.

## Usage

### Installation

#### pnpm

```bash
pnpm add @adguard/assistant
```

#### NPM

```bash
npm install @adguard/assistant
```

### Usage of module

```js
import { adguardAssistant } from '@adguard/assistant'
adguardAssistant().start(null, callback);
```

### Usage of embedded version

Embedded version can be run as:

```js
adguardAssistant().start(null, callback);
```

Callback returns a rule string.

## Todo

- write tests
