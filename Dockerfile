# Keep the puppeteer version in pnpm-lock.yaml in sync with the puppeteer-runner
# image tag so the pre-installed Chrome matches and npx puppeteer browsers
# install becomes a no-op.
FROM adguard/puppeteer-runner:22.21.1--24.35.0--0 AS base-puppeteer
FROM adguard/node-ssh:22.22--0 AS base

WORKDIR /assistant

ENV npm_config_store_dir=/pnpm-store

# ============================================================================
# Stage: deps
# Install dependencies, cached until package.json/pnpm-lock.yaml changes
# NOTE: puppeteer requires postinstall (downloads Chrome), so we use
# a puppeteer-runner base for the test stage only.
# ============================================================================
FROM base AS deps

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,target=/pnpm-store,id=assistant-pnpm \
    pnpm install \
        --frozen-lockfile \
        --prefer-offline \
        --ignore-scripts

# ============================================================================
# Stage: source-deps
# ============================================================================
FROM deps AS source-deps

COPY . /assistant

# ============================================================================
# Stage: test
# Runs lint + dev build + puppeteer tests
# Uses puppeteer-runner image which has Chrome pre-installed
# ============================================================================
FROM base-puppeteer AS test-base

WORKDIR /assistant

ENV npm_config_store_dir=/pnpm-store

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,target=/pnpm-store,id=assistant-pnpm \
    pnpm install \
        --frozen-lockfile \
        --prefer-offline && \
    npx puppeteer browsers install chrome

FROM test-base AS test

COPY . /assistant

ARG TEST_RUN_ID=""

RUN --mount=type=cache,target=/pnpm-store,id=assistant-pnpm \
    echo "${TEST_RUN_ID}" > /tmp/.test-run-id && \
    pnpm lint && \
    pnpm dev && \
    pnpm test && \
    mkdir -p /out/artifacts && \
    cp build/dev/assistant.meta.js /out/artifacts/ && \
    cp build/dev/assistant.js /out/artifacts/ && \
    cp build/dev/assistant.user.js /out/artifacts/

FROM scratch AS test-output
COPY --from=test /out/artifacts/assistant.meta.js /assistant.meta.js
COPY --from=test /out/artifacts/assistant.js /assistant.js
COPY --from=test /out/artifacts/assistant.user.js /assistant.user.js

# ============================================================================
# Stage: build-beta
# Runs lint + locales check + beta build
# Output: assistant.meta.js + assistant.user.js
# ============================================================================
FROM source-deps AS build-beta

ARG TEST_RUN_ID=""

RUN --mount=type=cache,target=/pnpm-store,id=assistant-pnpm \
    echo "${TEST_RUN_ID}" > /tmp/.test-run-id && \
    pnpm lint && \
    pnpm locales:validate-required && \
    pnpm beta && \
    mkdir -p /out/artifacts && \
    cp build/beta/assistant.meta.js /out/artifacts/ && \
    cp build/beta/assistant.user.js /out/artifacts/

FROM scratch AS build-beta-output
COPY --from=build-beta /out/artifacts/assistant.meta.js /assistant.meta.js
COPY --from=build-beta /out/artifacts/assistant.user.js /assistant.user.js

# ============================================================================
# Stage: build-release
# Runs lint + locales check + release build + pnpm pack
# (`pnpm release` regenerates the git-ignored dist/ that goes into the
# npm tarball)
# Output: assistant.meta.js + assistant.user.js + assistant.tgz
# ============================================================================
FROM source-deps AS build-release

ARG TEST_RUN_ID=""

# The packed tarball is the only artifact npm consumers ever see. This stage
# is the single place `pnpm pack` runs (CI test builds don't), so verify the
# tarball contents here: fail the build if any contract file (README.md,
# dist/assistant.js, dist/assistant.d.ts, dist/self.assistant.js, LICENSE) is
# missing or if private build assets or Docker context files leak in.
RUN --mount=type=cache,target=/pnpm-store,id=assistant-pnpm \
    echo "${TEST_RUN_ID}" > /tmp/.test-run-id && \
    pnpm lint && \
    pnpm locales:validate-required && \
    pnpm release && \
    pnpm pack --out assistant.tgz && \
    tar -tzf assistant.tgz > /tmp/pack-contents && \
    grep -q '^package/README.md$' /tmp/pack-contents && \
    grep -q '^package/dist/assistant.js$' /tmp/pack-contents && \
    grep -q '^package/dist/assistant.d.ts$' /tmp/pack-contents && \
    grep -q '^package/dist/self.assistant.js$' /tmp/pack-contents && \
    grep -q '^package/LICENSE$' /tmp/pack-contents && \
    ! grep -q '^package/private/' /tmp/pack-contents && \
    ! grep -q '^package/.dockerignore$' /tmp/pack-contents && \
    mkdir -p /out/artifacts && \
    cp build/release/assistant.meta.js /out/artifacts/ && \
    cp build/release/assistant.user.js /out/artifacts/ && \
    cp assistant.tgz /out/artifacts/

FROM scratch AS build-output
COPY --from=build-release /out/artifacts/assistant.meta.js /assistant.meta.js
COPY --from=build-release /out/artifacts/assistant.user.js /assistant.user.js
COPY --from=build-release /out/artifacts/assistant.tgz /assistant.tgz
