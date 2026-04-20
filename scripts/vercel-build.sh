#!/usr/bin/env bash
# Vercel build entrypoint. Goal: connect the Neon DB and everything else
# "just works" — no extra env vars, no manual seed.
#
# 1. Alias Neon's DATABASE_URL_NON_POOLING → DATABASE_MIGRATE_URL for Prisma.
# 2. Ensure JWT_ACCESS_SECRET has a value (derived from POSTGRES_URL if unset,
#    so previews of the same DB get the same token signing key).
# 3. Run Prisma migrations against the connected DB.
# 4. Seed the ktech demo tenant (idempotent — upserts all rows).
# 5. Build the web app.
set -euo pipefail

: "${DATABASE_URL:?DATABASE_URL is not set. Connect a Neon (or Postgres) database to this Vercel project.}"

export DATABASE_MIGRATE_URL="${DATABASE_MIGRATE_URL:-${DATABASE_URL_NON_POOLING:-$DATABASE_URL}}"

if [ -z "${JWT_ACCESS_SECRET:-}" ]; then
  export JWT_ACCESS_SECRET="$(printf '%s' "$DATABASE_URL" | shasum -a 256 | awk '{print $1}')"
  echo "vercel-build: JWT_ACCESS_SECRET not set — derived a deterministic secret from DATABASE_URL."
fi

SCHEMA="apps/api/prisma/schema.prisma"

echo "vercel-build: prisma migrate deploy"
pnpm exec prisma migrate deploy --schema "$SCHEMA"

echo "vercel-build: prisma generate"
pnpm exec prisma generate --schema "$SCHEMA"

echo "vercel-build: seed ktech tenant"
pnpm --filter @brain/api seed

echo "vercel-build: building web app"
pnpm -C apps/web build
