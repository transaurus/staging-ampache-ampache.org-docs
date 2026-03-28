#!/usr/bin/env bash
set -euo pipefail

# Rebuild script for ampache/ampache.org-docs
# Runs on existing source tree (no clone). Installs deps, runs pre-build steps, builds.

# --- Node version ---
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
    . "$NVM_DIR/nvm.sh"
    nvm install 20
    nvm use 20
fi

# --- Dependencies ---
npm install --legacy-peer-deps

# --- Build ---
npx docusaurus build

echo "[DONE] Build complete."
