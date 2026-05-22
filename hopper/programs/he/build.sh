#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
OUT="${1:-/tmp/he}"

# Compile Hopper → LLVM IR, deduplicating extern declarations from multiple modules
node "$REPO_ROOT/seed/compiler/hopperc.js" "$SCRIPT_DIR/src/main.hop" | \
  awk '/^declare / { if (!seen[$0]++) print; next } { print }' | \
  clang -x ir -o "$OUT" -

echo "Built: $OUT"
