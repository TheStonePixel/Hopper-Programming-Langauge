#!/usr/bin/env bash
set -euo pipefail

SPEC_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BUILDER="$SPEC_ROOT/builder"
OUT="${1:-$BUILDER/hopper-language-spec.pdf}"

echo "Collecting spec files..."
FILES=$(find "$SPEC_ROOT/01-language" -name "*.md" | sort)

echo "Generating PDF → $OUT"
pandoc $FILES \
  --metadata-file="$BUILDER/metadata.yaml" \
  --pdf-engine=xelatex \
  --toc \
  --toc-depth=3 \
  --number-sections \
  --highlight-style=tango \
  -o "$OUT"

echo "Done: $OUT"
