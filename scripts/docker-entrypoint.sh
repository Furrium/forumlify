#!/bin/sh
set -eu

node scripts/migrate.js
exec node server.js