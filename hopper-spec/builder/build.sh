#!/usr/bin/env bash
set -euo pipefail

SPEC_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BUILDER="$SPEC_ROOT/builder"

# Map directory → subtitle for per-section PDFs
declare -A SECTION_TITLES=(
  ["00-foundations"]="Section 0: Foundations"
  ["01-language"]="Section 1: Language"
  ["02-workspace"]="Section 2: Workspace"
  ["03-build"]="Section 3: Build System"
  ["04-packages"]="Section 4: Packages"
  ["05-runtime"]="Section 5: Runtime"
  ["06-stdlib"]="Section 6: Standard Library"
  ["07-abi"]="Section 7: ABI"
  ["08-tooling"]="Section 8: Tooling"
  ["09-conformance"]="Section 9: Conformance"
  ["10-appendices"]="Section 10: Appendices"
  ["11-rationale"]="Section 11: Rationale"
)

build_section() {
  local dir="$1"
  local name
  name="$(basename "$dir")"
  local subtitle="${SECTION_TITLES[$name]:-$name}"
  local out="$BUILDER/hopper-spec-${name}.pdf"

  local files
  files=$(find "$dir" -name "*.md" | sort)
  if [[ -z "$files" ]]; then
    echo "  skip $name (no .md files)"
    return
  fi

  echo "  → $out"
  # shellcheck disable=SC2086
  pandoc $files \
    --metadata-file="$BUILDER/metadata.yaml" \
    --metadata="subtitle:$subtitle" \
    --pdf-engine=xelatex \
    --toc \
    --toc-depth=3 \
    --number-sections \
    --highlight-style=tango \
    -o "$out"
}

build_full() {
  local out="$BUILDER/hopper-spec-full.pdf"
  local files
  files=$(find "$SPEC_ROOT" -path "$BUILDER" -prune -o -name "*.md" -print | sort)

  echo "  → $out"
  # shellcheck disable=SC2086
  pandoc $files \
    --metadata-file="$BUILDER/metadata.yaml" \
    --metadata="subtitle:Full Specification" \
    --pdf-engine=xelatex \
    --toc \
    --toc-depth=3 \
    --number-sections \
    --highlight-style=tango \
    -o "$out"
}

MODE="${1:-all}"

case "$MODE" in
  full)
    echo "Building full spec PDF..."
    build_full
    ;;
  section)
    # build a single named section: ./build.sh section 01-language
    DIR="$SPEC_ROOT/${2:?usage: build.sh section <dir-name>}"
    echo "Building section PDF for $2..."
    build_section "$DIR"
    ;;
  all)
    echo "Building per-section PDFs..."
    for dir in "$SPEC_ROOT"/[0-9][0-9]-*/; do
      [[ -d "$dir" ]] && build_section "$dir"
    done
    echo "Building full spec PDF..."
    build_full
    ;;
  *)
    echo "Usage: build.sh [all|full|section <name>]"
    echo "  all              — build every section PDF + full combined PDF (default)"
    echo "  full             — build full combined PDF only"
    echo "  section <name>   — build one section, e.g. section 01-language"
    exit 1
    ;;
esac

echo "Done."
