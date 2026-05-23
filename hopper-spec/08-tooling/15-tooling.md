## Tooling

The Hopper tooling ecosystem is a unified set of tools for compiling, formatting, testing,
validating, and publishing Hopper programs. All tooling is invoked through a single entry point:
the `hopper` CLI, located at `seed/build_system/hopper`.

### Components

| Component | Location | Status |
|-----------|----------|--------|
| CLI / compiler driver | `seed/build_system/hopper` | Implemented |
| AST formatter | `seed/compiler/src/formatter.js` | Implemented |
| Project validator (`hopper fix`) | `seed/build_system/hopper` | Implemented |
| Sanitizer builds (`hopper check`) | `seed/build_system/hopper` | Implemented |
| Test runner (`hopper test`) | `seed/build_system/tools/test.js` | Implemented |
| VS Code extension | `seed/extensions/hopper-vscode/` | Implemented |
| Language server (LSP) | — | **Not yet implemented.** |
| Integrated debugger (`hopper debug`) | — | **Not yet implemented.** |
| Performance profiler (`hopper profile`) | — | **Not yet implemented.** |
| Standalone semantic linter | — | **Not yet implemented.** |

### Design Principles

**Single CLI surface.** Every supported toolchain operation MUST be performed through the
`hopper` CLI. Implementations MUST NOT invoke `hopperc.js`, `clang`, or `ld.lld` directly
from user code or project scripts. The CLI is the only stable contract between user code
and the underlying compiler infrastructure.

**One project shape.** Every Hopper project — whether an executable program or a library —
follows the same directory structure (see §10: Build System). Tooling depends on this shape
and MUST NOT accept projects that deviate from it without first running `hopper fix`.

**Proven by build.** Every change to a module or the build system MUST be verified by running
`hopper build` and observing a successful output. Tooling authors MUST NOT assume a change is
correct until a real build confirms it.

### CLI Installation

The CLI is not globally installed in a fresh checkout. It MUST be invoked as:

```
node seed/build_system/hopper <command> [args]
```

To install globally, run:

```
cd seed/build_system && npm install -g --force .
```

After installation, `hopper` is available on `PATH` and may be invoked directly.

### Cross-references

- §15.1 — Compiler Interface: full command reference and build profiles
- §15.2 — Language Server: VS Code extension capabilities and LSP status
- §15.3 — Formatting: `hopper fmt` and format-on-save integration
- §15.4 — Linting: `hopper fix` and `hopper check`
- §15.5 — Debugging: dev build debug info and sanitizer use
- §15.6 — Reflection: compile-time introspection commands
- §15.7 — Metadata: `hopper.json` and `.meta.json` formats
