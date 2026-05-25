# Contributing to the Hopper Specification

## Core Rule

**Document what the compiler and build system actually do.** The specification describes the reference implementation's behavior. Do not specify behavior that has not been implemented unless it is explicitly marked with the "Not yet implemented" marker.

---

## Rules

### 1. Verify against the source before writing

Before documenting a language feature, verify that the grammar accepts it and that the code generator emits correct IR for it. The authoritative sources are:

- Grammar: `seed/compiler/grammar/`
- Code generator: `seed/compiler/src/`
- Build system: `seed/build_system/`

If a feature is in the grammar but the code generator does not implement it, it is unimplemented and must be marked as such.

### 2. Mark unimplemented features clearly

Use this blockquote format for anything specified but not yet implemented:

> Not yet implemented.

Place it immediately after the description of the unimplemented feature, before the next heading.

### 3. Use RFC 2119 normative language

In normative sections (00–10), use MUST, MUST NOT, SHALL, SHALL NOT, SHOULD, SHOULD NOT, and MAY as defined in `00-foundations/0.6-normative-language.md`. Do not use these terms in rationale documents.

### 4. Match existing structure and heading style

- Top-level headings are `#` (document title only)
- Section headings are `##`
- Subsection headings are `###`
- Code blocks use triple backticks with a language tag (`hopper`, `json`, `bash`)
- Tables use the standard Markdown pipe format with a header separator row

### 5. Do not invent syntax

Write only syntax that the grammar accepts. Check `seed/compiler/grammar/` before documenting any syntax construct. If you are proposing a grammar change, open a discussion rather than writing spec text for it.

### 6. Non-normative content goes in rationale

Design intent, trade-off discussions, and historical context belong in `11-rationale/`, not in normative sections. Normative sections describe behavior; rationale documents explain why.

---

## Submitting Changes

Spec changes should be reviewed against the reference implementation before merging. A spec change that documents unimplemented behavior must include the "Not yet implemented" marker. A spec change that documents incorrect behavior is a bug in the spec and should be fixed before merging.