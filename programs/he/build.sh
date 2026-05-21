#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
OUT="${1:-/tmp/he}"

# Compile Hopper → LLVM IR, deduplicating extern declarations from multiple modules
node "$REPO_ROOT/kindling/hopperc.js" "$SCRIPT_DIR/src/main.hop" --target host \
  | awk '/^declare / { if (!seen[$0]++) print; next } { print }' \
  > /tmp/he.ll

# Link with C helper for termios/ioctl
clang -o "$OUT" /tmp/he.ll "$SCRIPT_DIR/modules/posix/termios_helper.c"

echo "Built: $OUT"
