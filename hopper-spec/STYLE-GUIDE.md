# Specification Style Guide

This guide defines the writing conventions for the Hopper specification. Follow these conventions when writing or editing spec text so that the document reads consistently across sections.

---

## Normative Language

In normative sections (00–10), use RFC 2119 terms as defined in `00-foundations/0.6-normative-language.md`:

- **MUST** / **MUST NOT** — absolute requirements and prohibitions
- **SHALL** / **SHALL NOT** — equivalent to MUST / MUST NOT
- **SHOULD** / **SHOULD NOT** — strong recommendations
- **MAY** — optional behavior

Do not use these terms in rationale documents (`11-rationale/`). Rationale documents are explanatory prose, not requirements.

---

## Headings

- `#` — document title only (one per file)
- `##` — top-level section within a document
- `###` — subsection
- `####` — use sparingly; prefer restructuring over deep nesting

Do not skip heading levels.

---

## Code Examples

All Hopper source examples use triple-backtick code blocks with the `hopper` language tag:

````
```hopper
entry main {
    write(1, "hello\n", 6)
}
```
````

JSON examples use `json`. Shell examples use `bash`. Use language tags consistently — an untagged code block is a style error.

---

## Tables

Use tables for reference data: type tables, keyword lists, operator precedence, error codes. Use prose for explanations. Do not put multi-sentence explanations inside table cells.

Table format:

```
| Column A | Column B | Column C |
|----------|----------|----------|
| value    | value    | value    |
```

Include a header separator row on every table.

---

## Unimplemented Features

Mark features that are specified but not yet implemented in the reference implementation with:

> Not yet implemented.

Place this blockquote immediately after the description of the unimplemented feature. Do not bury it at the end of a section.

---

## Prose Style

- Write in present tense: "the compiler emits", not "the compiler will emit"
- Use active voice: "the build system copies the module", not "the module is copied by the build system"
- Prefer short sentences. One idea per sentence.
- Do not use "we" — write "the compiler", "the build system", "the implementation", or "the programmer"
- Use "the programmer" not "the developer" or "the user"
- Avoid hedging language ("may potentially", "could possibly") in normative text — use MUST/SHOULD/MAY precisely

---

## Cross-References

Cross-references to other spec sections use relative file paths:

```
See `00-foundations/0.5-terminology.md` for term definitions.
```

Cross-references to rationale documents remind the reader that rationale is non-normative:

```
The rationale for this decision is in `11-rationale/memory.md`.
```