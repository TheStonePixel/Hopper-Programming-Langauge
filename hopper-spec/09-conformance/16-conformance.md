# 16 Conformance

## 16.0 Purpose

This section establishes what it means for a Hopper implementation to conform to this
specification. The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
"SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to
be interpreted as described in RFC 2119.

## 16.1 Reference Implementation

The current reference implementation is the seed compiler located at
`seed/compiler/hopperc.js` (entry: `seed/compiler/src/codegenLLVM.js`), invoked through
the build system at `seed/build_system/hopper`. All normative behavior described in this
specification without a "Not yet implemented." marker reflects the behavior of this
reference implementation.

Where the reference implementation and this specification conflict, the specification is
authoritative for features that are explicitly marked normative. For features still under
active development, the reference implementation is authoritative until the specification
is updated.

## 16.2 Scope of Conformance

Conformance applies to:

1. **Compilers** — programs that translate Hopper source files into machine code or an
   intermediate representation.
2. **Build systems** — programs that orchestrate compilation, linking, and installation
   of Hopper projects.
3. **Standard library modules** — modules published to the Hopper module registry that
   programs MAY install via `hopper install`.

This specification does not define conformance requirements for editors, formatters,
language servers, or documentation generators, though such tools SHOULD be consistent
with the grammar and semantics described herein.

## 16.3 Normative vs. Informative

Sections of this specification that describe required behavior are normative. Sections
introduced with phrases such as "For example", "Note:", or "Rationale:" are informative
and do not impose requirements.

Features marked "**Not yet implemented.**" describe planned behavior. These sections are
informative. A conforming implementation MAY choose not to implement them, but MUST NOT
implement them in a manner that conflicts with the description once the feature is
stabilized.

## 16.4 Structure of This Section

- §16.1 — Compliance levels
- §16.2 — Required behavior
- §16.3 — Implementation-defined behavior
- §16.4 — Unspecified behavior
- §16.5 — Deprecated features
- §16.6 — Feature gates
