#!/usr/bin/env bash

set -Eeuo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

if docker compose version >/dev/null 2>&1; then
    compose=(docker compose)
elif command -v docker-compose >/dev/null 2>&1; then
    compose=(docker-compose)
else
    echo "Docker Compose is required (docker compose or docker-compose)." >&2
    exit 1
fi

echo "Pulling the latest Forumlify image..."
"${compose[@]}" pull app

echo "Applying the latest image to the Forumlify app container..."
"${compose[@]}" up -d --no-deps app

echo "Forumlify is now running with the latest image."
"${compose[@]}" ps app
