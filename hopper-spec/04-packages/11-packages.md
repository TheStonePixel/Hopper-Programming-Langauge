## Packages

A Hopper package is a directory that contains a `hopper.json` manifest file. The manifest declares
the package's identity, type, dependencies, and — for executables — the hardware target bindings
that connect OS contract names to concrete implementations.

The package system solves the problem of naming external functionality without coupling source code
to file paths, platform specifics, or implementation choices. Source files import contract names.
The manifest is the only place where paths and hardware names appear.

---

### Package Types

Every package MUST declare one of two types in its manifest:

**Executable** — a program with an entry point. An executable MUST declare an `entry` field
pointing to the `.hop` file that contains the `entry main` block. Executables MUST declare a
`targets` section that maps contract names to contract and implementation file paths. Executables
SHOULD declare a `dependencies` section listing every module they import.

**Library** — a reusable module that exports one or more interfaces. A library MUST declare an
`exports` section. A library MUST NOT declare an `entry` field. Libraries do not need a `targets`
section unless they have internal test binaries.

A bare-metal program uses type `"program"` and MUST declare a `board` field. See §11.1 for the
manifest specification and §11.1 for board support.

---

### The Global Module Store

The global module store is the directory `hopper/modules/` in the Hopper repository. Every package
available for installation resides here as a subdirectory named after the package. The build tool
installs packages by copying from the global store into the consuming project's own `modules/`
directory.

When a project runs `hopper install`, the build tool:

1. Reads the `dependencies` section of the project's `hopper.json`.
2. For each declared dependency, locates the matching directory in the global store.
3. Copies the module's `hopper.json`, `src/`, and `interfaces/` into the project's `modules/<name>/`.
4. Recursively installs the module's own transitive dependencies into `modules/<name>/modules/`.
5. Rewrites the project's `hopper.json` target binding paths to point at the locally installed
   copies.

The result is a fully self-contained `modules/` tree. Each module's dependencies nest inside it —
the directory tree mirrors the dependency graph exactly. The compiler receives explicit file paths
from the build system and has no knowledge of the module store.

---

### Dependency Declaration

Dependencies are declared in `hopper.json` as a map from module name to version string:

```json
{
  "dependencies": {
    "linux": "0.1.0",
    "x86_64": "0.1.0"
  }
}
```

The version string is currently informational. The build tool installs whatever version is present
in the global store, regardless of the requested version. Version constraint enforcement is **not
yet implemented**.

---

### Interface Bindings

An executable resolves its imports through the `targets` section of `hopper.json`. Each binding
maps an contract name (matching the `from` clause of an `import` statement) to the contract
contract file and the implementation file:

```json
{
  "targets": {
    "host": {
      "IO": {
        "from":           "linux",
        "contract":      "modules/linux/interfaces/IO.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop"
      }
    }
  }
}
```

The `contract` field MUST point to a `.hop` file declaring an `contract` block. The
`implementation` field MUST point to a `.hop` file that provides the free functions or class
implementation satisfying that contract. The `from` field identifies which module the binding
comes from and MUST match the module name used in the source `import` statement.

The compiler checks at compile time that the implementation satisfies the contract contract. If
any function declared in the contract is absent or has a mismatched signature in the
implementation, the build fails with a precise error before any code is generated.

---

### Project Layout

`hopper init` creates the canonical project layout:

```
<name>/
  hopper.json          # manifest
  src/                 # source files
  modules/             # installed dependencies (mirrors dependency graph)
  tests/               # test source files
  interfaces/          # exported contract contracts (executables only)
```

Every package — whether program or library — uses the same recursive shape. A module installed
into `modules/` has the same structure as the top-level project.

---

### Relationship to the Compiler

The compiler's only job is to read source files and produce a binary. It does not resolve package
names, fetch modules, or know what a `hopper.json` is. Before the compiler runs, the build system:

1. Reads the manifest to find the entry file and target bindings.
2. Installs any missing dependencies.
3. Passes the compiler a set of resolved file paths: entry source, contract files, implementation
   files.

The compiler receives paths. The build system owns names.
