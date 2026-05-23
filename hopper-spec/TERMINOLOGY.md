# Terminology

This is a quick-reference index of terms that have specific meanings in this specification. Normative definitions are in `00-foundations/0.5-terminology.md`. The glossary with extended descriptions is in `10-appendices/appendix-h-glossary.md`.

---

## Quick Reference

| Term | Short Definition |
|------|-----------------|
| **Program** | A Hopper project of type `executable` with an entry point |
| **Library** | A Hopper project of type `library` with no entry point |
| **Module** | A single `.hop` source file; the unit of compilation |
| **Package** | A directory with a `hopper.json` manifest; the unit of distribution |
| **Interface** | A named set of function signatures declared with `interface` |
| **Implementation** | A class or free functions satisfying an interface contract |
| **Binding** | A `hopper.json` targets entry mapping an interface to an implementation |
| **Target** | A named build configuration in `hopper.json` (e.g., `host`) |
| **Entry point** | The `entry` declaration compiled to `main` in the output binary |
| **Inline assembly** | An `asm { }` block containing architecture-specific instructions |
| **Template function** | A function with a compile-time type parameter |
| **Conforming program** | A program that satisfies all normative requirements of this spec |
| **Conforming implementation** | A compiler and build system satisfying all normative requirements |
| **Undefined behavior** | A condition where this spec imposes no requirements on output |
| **Implementation-defined** | Behavior not specified here but required to be documented by the implementation |

---

For full definitions see `00-foundations/0.5-terminology.md`.

For extended glossary entries including examples see `10-appendices/appendix-h-glossary.md`.