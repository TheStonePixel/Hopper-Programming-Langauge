## 8. Modules

A *module* in Hopper is a single `.hop` source file. Modules are the fundamental unit of compilation. The compiler processes one entry-point module and recursively resolves all imports, merging every reachable module into a single flat compilation unit before emitting LLVM IR.

### 8.1 Compilation Model

The Hopper compiler (`hopperc`) accepts a single entry-point source file. It resolves all `import` statements recursively and merges the AST of every imported file into the compilation unit of the entry-point file. There is no separate compilation or separate linking step for Hopper modules: the entire reachable import graph is compiled together and a single LLVM IR file is emitted.

Consequences of the flat compilation model:

- All type information from all imported modules is visible during code generation.
- Circular imports are prevented. A *visited set* is maintained across the entire recursive import resolution. A file that has already been loaded SHALL NOT be loaded again, regardless of how many other modules import it.
- There is no link-time symbol resolution between independently compiled Hopper objects. All cross-module references are resolved at compile time.

### 8.2 Packages

A *package* is a directory tree that groups related module files. A package is identified by its manifest file (`hopper.json`). The build tool (`hopper`) manages packages; the compiler is unaware of package boundaries and operates only on file paths.

A package MAY contain many module files. The terms *module* (a `.hop` source file) and *package* (a directory with `hopper.json`) are distinct and MUST NOT be confused.

### 8.3 Import Forms

Two syntactic forms exist for importing modules. They differ only in how the file path is resolved:

**Interface import — preferred for all new code:**

```hopper
import IO from linux
import IO, FileSystem from linux
```

The name before `from` is an interface-binding name. The compiler resolves it through the consuming project's `hopper.json` `targets` section. This form brings free functions and types from both the named interface file and its corresponding implementation file into scope.

**Module import — legacy; for use only in `hopper/nonconform/` code:**

```hopper
import io from arch
import tty from linux
```

The name after `from` is a package directory name. The compiler resolves it by walking up the directory tree looking for `modules/<name>/`. The symbol names before `from` are used to select individual `.hop` files within that module's `src/` directory.

New programs SHOULD use the interface import form exclusively. The module import form SHALL NOT be used in new application code.

### 8.4 Interface Binding Resolution

An interface import resolves through a two-file binding declared in `hopper.json`:

```json
{
  "targets": {
    "host": {
      "IO": {
        "from":           "linux",
        "interface":      "modules/linux/interfaces/IO.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop"
      }
    }
  }
}
```

When the compiler encounters `import IO from linux`, it MUST:

1. Walk up from the importing source file's directory, checking each ancestor directory for a `hopper.json` file.
2. Read the binding for `IO` under the active target (default: `host`).
3. Validate that the binding's `from` field matches the package name stated in the import (`linux`). A mismatch MUST be a compile error.
4. Verify that both the `interface` and `implementation` file paths exist. A missing file MUST be a compile error.
5. Parse and merge the interface file AST into the current compilation unit (if not already visited).
6. Parse and merge the implementation file AST into the current compilation unit (if not already visited).

All free functions, classes, structs, enums, interfaces, templates, and type aliases from both loaded files become available in the importer's scope.

### 8.5 Hardware Independence Principle

Programs MUST name only OS-level interface names (`IO`, `FileSystem`, `Socket`, etc.) in source `import` statements. Hardware-specific paths (`x86_64`, `arm64`) MUST appear only in `hopper.json` `targets` bindings. To retarget a program from one ISA to another, only the `implementation` paths in `hopper.json` need to change; no `.hop` source file requires modification.

### 8.6 Relation to Subsections

- **8.1 Module Layout** — what top-level declarations a module file may contain and their ordering rules.
- **8.2 Imports** — the import grammar, resolution algorithm, and error conditions in detail.
- **8.3 Exports** — which names become visible to importing modules.
- **8.4 Visibility** — access control (none) and encapsulation conventions.
- **8.5 Namespaces** — the flat global scope and enum-variant namespacing.
- **8.6 Symbol Resolution** — how names are resolved in the merged compilation scope.
- **8.7 Linkage** — how symbols are emitted in LLVM IR and what mangling scheme is used.
