# DEPLOYMENT.md

Production deployment reference for AdGuard Assistant artifacts.

## Table Of Contents

- [Deployment Model](#deployment-model)
- [Release Channels](#release-channels)
- [Deployment Artifacts](#deployment-artifacts)
- [Environment Variables](#environment-variables)
- [Infrastructure Dependencies](#infrastructure-dependencies)
- [External Integrations](#external-integrations)
- [Re-running A Release](#re-running-a-release)
- [Rolling Back A Bad Release](#rolling-back-a-bad-release)
- [Error Reporting](#error-reporting)
- [Security Notes](#security-notes)
- [Related Documentation](#related-documentation)

## Deployment Model

The assistant has no long-running production server. Production consists of
static userscript files published to `userscripts.adtidy.org`, the
`@adguard/assistant` package on npmjs, and the `dist/` embedded builds
committed to this repository.

Deployment is handled by GitHub Actions:

1. **Prepare release** (`prepare-release.yml`, manual) — opens a
   `release-bump/*` PR that finalizes the `[Unreleased]` CHANGELOG.md section
   for the entered tag.
2. **Publish release** (`publish-release.yml`) — runs when the release PR is
   merged (or manually with a `ref` input). It tags the merge commit from
   CHANGELOG.md, injects the version into `package.json`, builds and tests in
   Docker, then deploys according to the tag:

| Job                  | Beta tag (`v4.4.14-beta.0`)                        | Stable tag (`v4.4.14`)                                      |
| -------------------- | -------------------------------------------------- | ----------------------------------------------------------- |
| `deploy-static`      | module `adguard-assistant-beta`, env `beta-static` | module `adguard-assistant-release`, env `production-static` |
| `deploy-npm`         | skipped                                            | publishes `assistant.tgz` to npm (`latest`), env `npm`      |
| `mirror-and-release` | prerelease = `true`                                | prerelease = `false`                                        |
| `commit-dist`        | skipped                                            | commits `dist/` to `master`                                 |

The job inputs (module names, environments, npm tags) are authoritative in
[`publish-release.yml`](./.github/workflows/publish-release.yml); the table
above summarizes the current wiring. The two channels are mutually exclusive:
a beta tag never touches the release channel or npm, and a stable tag never
touches the beta channel.

Deployment jobs are approval-gated: the `beta-static`, `production-static`,
and `npm` environments carry required reviewers (the extensions team), so a
release pauses at each gate until it is approved. This replaces the manual
trigger of the legacy Bamboo deployment projects for `userscripts.adtidy.org`
and `npmjs`. The environments and their reviewers are managed as code in
`terraform-github` (see `team_extensions.tf` in
https://github.com/AdGuardSoftwareLimited/terraform-github).

GitHub Releases are created **only** on the public mirror
(`AdguardTeam/AdguardAssistant`) by the `mirror-and-release` job, which also
mirrors the repo (including the tag) before creating the release. Separately,
`mirror.yml` mirrors every push to `master` (including the automated
`deploy: update dist …` commits and release-bump merges) to the public repo.

## Release Channels

- **Beta**: the `adguard-assistant-beta` Deployer module, served from
  `userscripts.adtidy.org` under the beta path.
- **Release**: the `adguard-assistant-release` Deployer module, served from
  `userscripts.adtidy.org` under the release path; the npm package is
  published as `@adguard/assistant`.

The exact URL templates are defined in
[`scripts/build/meta.settings.js`](./scripts/build/meta.settings.js) and
rendered into the userscript metadata by `scripts/build/meta.template.js` at
build time — change the paths there (then release) rather than editing this
document. With the current settings the URLs take the shape
`https://userscripts.adtidy.org/<channel>/assistant/<version>/assistant.user.js`
and `...assistant.meta.js`. The dev-channel distribution via GitHub Pages
(`https://AdguardTeam.github.io/AdguardAssistant/...`) is unchanged by this
pipeline and not part of releases.

## Deployment Artifacts

- `assistant.user.js` — the userscript (metadata + bundled runtime).
- `assistant.meta.js` — userscript metadata for update checks.
- `assistant.tgz` — the npm package (stable tags only).
- `dist/assistant.js`, `dist/self.assistant.js`, `dist/assistant.d.ts` —
  embedded builds committed back to `master` by the `commit-dist` job
  (stable tags only, message `deploy: update dist v<version>`).

GitHub Releases on the public mirror attach `assistant.user.js` and
`assistant.meta.js` (both channels), plus `assistant.tgz` on stable tags.
The embeddable builds (`dist/…`) are not release assets — they are consumed
from the committed `dist/` directory and npm. (The previous
tag-based release workflow attached `dist/assistant.js` and
`dist/self.assistant.js` instead.)

The release version is parsed from `CHANGELOG.md` by
`tag-from-changelog.yml` and injected into `package.json` at build time with
`npm pkg set`; the stamped `package.json` is never committed.

## Environment Variables

- `CHANNEL_ENV`
    - Required: yes for builds.
    - Used by: `scripts/build/*.config.js` (set by the `dev`/`beta`/`release`
      pnpm scripts).
    - Purpose: selects the build channel (metadata URLs, minification).
    - Example: `RELEASE`.
- `LOCALES`
    - Required: only for locale sync.
    - Used by: `scripts/locales/locales.js`. Not used by deployed runtime.
    - Example: `DOWNLOAD`.
- `TEST_RUN_ID`
    - Required: no.
    - Used by: `Dockerfile` build args in CI to bust the Docker layer cache
      for the lint/test layer.

No runtime environment variables are required after artifacts are published.
The userscript runs entirely in the browser page context.

## Infrastructure Dependencies

- **Static artifact hosting**: `userscripts.adtidy.org` serves beta and
  release userscript files. The URL paths are configured in
  `scripts/build/meta.settings.js`; the Deployer module-to-directory mapping
  is authoritative in the Deployer service.
- **Deployer service**: `deploy-to-static.yml` uploads the `userscript`
  artifact to the `adguard-assistant-beta` / `adguard-assistant-release`
  Deployer modules (`deployer-module` inputs in `publish-release.yml`).
- **npm registry**: `deploy-to-npm.yml` publishes `assistant.tgz` with OIDC
  trusted publishing (`--access public --tag latest`).
- **Public mirror**: `AdguardTeam/AdguardAssistant` receives mirrored code,
  tags, and GitHub Releases; its workflows are disabled by the mirror job.
- **Runners**: all jobs run on self-hosted `team-extensions` runners; builds
  run inside the multi-stage `Dockerfile`. The base image tags are
  authoritative in the `Dockerfile` (`FROM` lines) — keep them in sync with
  the lockfile.

### Prerequisites For The First Release

The following must exist before the first `publish-release.yml` run; they are
not creatable from this repository and a missing piece fails mid-release,
after the userscript is already deployed:

- **GitHub environments** `beta-static`, `production-static`, and `npm` with
  required reviewers (the extensions team), managed as code in
  `terraform-github` (`team_extensions.tf`). A missing environment is not an
  error: GitHub auto-creates the environment on first reference with no
  protection rules, and deploys silently skip approval — this is exactly what
  happened on the first publish run (AG-58377).
- **npm OIDC trusted publisher** entry for `@adguard/assistant` so
  `deploy-to-npm.yml` can publish without a token.
- **Octopass grant** covering the mirror target
  (`AdguardTeam/AdguardAssistant`) — without it the first mirror push after
  merge fails with `no grant covers repository …`.
- **Deployer module mapping** — verified during the GitHub Actions migration:
  `adguard-assistant-beta` / `adguard-assistant-release` are the same module
  names the legacy Bamboo pipeline deployed through
  (`deploy.sh adguard-assistant-*` in `bamboo-deploy-publisher`), and the live
  `https://userscripts.adtidy.org/{beta,release}/assistant/4.3/assistant.meta.js`
  endpoints resolve and advertise exactly the paths from
  `scripts/build/meta.settings.js`. If the Deployer config for these modules
  ever changes, existing installs silently stop updating — verify after the
  first release by checking the `@version` in the live metadata.

## External Integrations

- **Twosky translation API**: `scripts/locales/locales.js` uses
  `https://twosky.int.agrd.dev` (configured in `.twosky.json`). Not part of
  the release pipeline beyond the `locales:validate-required` build step.
- **Userscript update mechanism**: userscript hosts read `@downloadURL` and
  `@updateURL` from the generated metadata (values from
  `scripts/build/meta.settings.js`).
- **Slack**: success/failure notifications are posted to
  `#adguard-extension-vcs`.

## Re-running A Release

- **Failed publish pipeline**: Actions → *Publish release* → *Run workflow*
  and set `ref` to the release tag (e.g. `v4.4.14`; the tag job force-retags
  it) or leave empty to publish from `master`. The `resolve` job accepts
  `master` and `vX.Y.Z[-beta[.N]]` refs only — commit SHAs are rejected, so
  use the tag, not the merge commit SHA. Re-running is idempotent **only for
  the tag step** (the tag job force-retags): a full re-run after a
  `commit-dist`-only failure re-executes `deploy-npm`, which fails with
  `EPUBLISHCONFLICT` once the version exists (the release actually shipped —
  a red run with a misleading failure notification). Prefer re-running
  individual failed jobs from the run page, within the artifact retention
  window (release-run artifacts are kept for 1 day).
- **Do NOT re-run Prepare release for an existing tag**: `create-release-pr`
  re-patches the CHANGELOG, which is not idempotent (AG-55717) and can
  corrupt `CHANGELOG.md`. Use a different tag or revert the CHANGELOG
  changes manually first.
- **Only the `dist/` commit-back failed**: the release itself is already
  published (userscript, npm, GitHub Release). Re-run the `commit-dist` job
  from the run page (`protected-push` no-ops when there is nothing to
  commit). As a last resort, build locally with the release version stamped
  and commit `dist/` manually with the message
  `deploy: update dist v<version>`.
- **Old tag-based path is gone**: pushing a `v*` tag manually builds and
  releases nothing. The only release path is prepare → merge → publish.
- **Deploy jobs are approval-gated**: re-running `deploy-static` or
  `deploy-npm` (or re-dispatching *Publish release*) starts a fresh
  deployment, which again waits for a reviewer in `beta-static`,
  `production-static`, or `npm` before it runs.

## Rolling Back A Bad Release

- **Userscript channel**: re-run the previous release's `deploy-static` job
  from the previous run page (within the artifact retention window), or
  re-dispatch *Publish release* with the previous tag as `ref` — note that
  this force-moves the newer tag to the older commit.
- **npm**: `npm deprecate @adguard/assistant@<bad-version> "…"` and publish a
  fixed version if needed.
- **GitHub Release**: edit or unpublish the release on the public mirror
  (`AdguardTeam/AdguardAssistant`).

## Error Reporting

No Sentry/Bugsnag-style runtime reporting exists; artifacts are static files.
Pipeline failures are reported to Slack (`#adguard-extension-vcs`) by the
`notify-failure` and `notify-tag-failure` jobs of `publish-release.yml`.

## Security Notes

- No secrets are stored in this repository. Authentication uses short-lived
  Octopass/OIDC tokens (`id-token: write`) minted per job: mirror pushes,
  PR creation, `protected-push`, Deployer upload, and npm trusted publishing.
- Local credential files (`.npmrc`, `.env*`) are excluded from the Docker
  build context (`.dockerignore`) so they cannot be baked into image layers.
- `commit-dist` pushes with `--force-with-lease`, refusing to clobber a
  concurrent push to `master`.
- `ci.yml` runs on `pull_request` on self-hosted runners; the repository is
  private and forks are not expected.

## Related Documentation

- [README.md](./README.md) — Project overview and usage
- [DEVELOPMENT.md](./DEVELOPMENT.md) — Local setup, build, and test
- [AGENTS.md](./AGENTS.md) — Code guidelines and contribution rules
- [CHANGELOG.md](./CHANGELOG.md) — Version history (drives release tags)
