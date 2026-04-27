# TODO: sync puppeteer-runner image tag with the puppeteer version in pnpm-lock.yaml
# so the pre-installed Chrome matches and npx puppeteer browsers install becomes a no-op.
FROM adguard/puppeteer-runner:22.14--24.5--0 AS base-puppeteer
FROM adguard/node-ssh:22.17--0 AS base

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
COPY --from=test /out/ /

# ============================================================================
# Stage: build-beta
# Runs lint + locales check + beta build (no private repo needed)
# Output: build/beta/assistant.meta.js + assistant.user.js
# ============================================================================
FROM source-deps AS build-beta

ARG TEST_RUN_ID=""

RUN --mount=type=cache,target=/pnpm-store,id=assistant-pnpm \
    echo "${TEST_RUN_ID}" > /tmp/.test-run-id && \
    pnpm lint && \
    pnpm locales:validate-required && \
    pnpm beta && \
    mkdir -p /out/artifacts && \
    cp build/beta/build.txt /out/artifacts/ && \
    cp build/beta/assistant.meta.js /out/artifacts/ && \
    cp build/beta/assistant.user.js /out/artifacts/

FROM scratch AS build-beta-output
COPY --from=build-beta /out/ /

# ============================================================================
# Stage: build-release
# Runs lint + locales check + release build + pnpm pack
# Requires private repo (passed via --build-context private=private)
# Also commits dist/ back to repo (handled outside Docker in bamboo yaml)
# Output: build/release/ + assistant.tgz + modified/dist/
# ============================================================================
FROM source-deps AS build-release

COPY --from=private . /assistant/private

ARG TEST_RUN_ID=""

RUN --mount=type=cache,target=/pnpm-store,id=assistant-pnpm \
    echo "${TEST_RUN_ID}" > /tmp/.test-run-id && \
    pnpm lint && \
    pnpm locales:validate-required && \
    pnpm release && \
    pnpm pack --out assistant.tgz && \
    mkdir -p /out/artifacts /out/modified/dist && \
    cp build/release/build.txt /out/artifacts/ && \
    cp build/release/assistant.meta.js /out/artifacts/ && \
    cp build/release/assistant.user.js /out/artifacts/ && \
    cp assistant.tgz /out/artifacts/ && \
    cp -r dist/. /out/modified/dist/

FROM scratch AS build-release-output
COPY --from=build-release /out/ /
