## Workspace

A **workspace** in Hopper is a single project directory tree. It is identified by the presence of a `hopper.json` manifest file at its root. There is no monorepo concept; each project is its own workspace with its own manifest, source tree, and locally installed dependencies.

### Scope

A workspace encompasses exactly one project. That project is either an executable (type `"executable"`) or a library (type `"library"`). There is no multi-project workspace, no workspace-level lockfile, and no shared dependency pool across projects.

### Root identification

The build system MUST locate a workspace root before performing any build operation. The CLI walks up from the current working directory (or from the directory containing the entry file, when one is passed explicitly) to find the nearest ancestor directory that contains a `hopper.json` file. The first such directory found is the workspace root. If no `hopper.json` is found before reaching the filesystem root, the CLI falls back to the directory from which the command was invoked.

The `findProjectRoot` function in the CLI encodes this rule exactly.

### Boundary

The workspace boundary is the project root. Files outside the root are invisible to the build unless they are referenced explicitly via absolute paths in `hopper.json` binding entries (which SHOULD NOT occur in practice — all dependencies MUST be installed into the workspace's `modules/` directory before building).

### Relationship to modules

A workspace's installed dependencies are nested inside it under `modules/`. Each installed dependency is itself a full workspace subtree. The nesting mirrors the dependency graph; see §9.2 for details.

### Creating a workspace

A new workspace MUST be created with `hopper init <name>`. This command creates the canonical directory structure (see §9.1) and writes a minimal `hopper.json`. Projects MUST NOT be assembled by hand.

```
hopper init my-program
hopper init my-program --yes
hopper init my-program --yes --type=library --description="..." --license=MIT
```

### Summary of commands that operate on a workspace

| Command | Description |
|---|---|
| `hopper init <name>` | Create a new workspace |
| `hopper build` | Compile the workspace entry to an executable |
| `hopper run` | Execute the compiled binary |
| `hopper dev` | Rebuild and restart on source changes |
| `hopper test` | Run the workspace's test suite |
| `hopper install [module]` | Install a dependency into `modules/` |
| `hopper uninstall <module>` | Remove an installed dependency |
| `hopper fix` | Auto-repair missing files and undeclared dependencies |
| `hopper check` | Compile with sanitizers (default: AddressSanitizer) |
| `hopper format` | Reformat source files |
| `hopper ir <file>` | Print LLVM IR for a source file |
| `hopper ast <file>` | Print AST as JSON for a source file |
| `hopper flash` | Write a bare-metal image to an SD card |
