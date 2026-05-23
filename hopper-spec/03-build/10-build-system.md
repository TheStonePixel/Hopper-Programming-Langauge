## Build System

The Hopper build system is a Node.js CLI located at `seed/build_system/hopper`. It is the only
supported way to compile Hopper programs. Implementations MUST NOT invoke `hopperc.js` or
`clang` directly from user code or project scripts.

### Invocation

The CLI MUST be invoked as `node seed/build_system/hopper <command> [args]` unless it has been
installed globally via `cd seed/build_system && npm install -g --force .`, after which `hopper`
is available on `PATH`.

### Command Reference

| Command | Description |
|---------|-------------|
| `hopper init <name>` | Scaffold a new project interactively |
| `hopper init <name> --yes` | Scaffold non-interactively (all defaults) |
| `hopper build [file.hop] [-o out]` | Compile to executable (default entry: `src/main.hop`) |
| `hopper build --production` | Compile with `-O2` optimizations |
| `hopper build --test` | Compile in test profile |
| `hopper build module <name>` | Scaffold `modules/<name>/` with `tests/` directory |
| `hopper run [binary]` | Execute a built binary |
| `hopper run test [module]` | Run tests (all, or a specific module) |
| `hopper dev [file.hop...]` | Watch mode: rebuild and restart on source changes |
| `hopper flash [--mount <path>] [--dry-run]` | Write bare-metal image to SD card |
| `hopper install [module...]` | Install packages from stdlib or registry |
| `hopper uninstall <module...>` | Remove installed packages |
| `hopper publish [name]` | Publish this package to the registry |
| `hopper revoke [name]` | Permanently delete a package from the registry |
| `hopper fix [path] [--dry-run]` | Auto-repair missing files and undeclared deps |
| `hopper check [file.hop] [--asan\|--tsan\|--ubsan\|--msan]` | Compile with sanitizers (default: `--asan`) |
| `hopper debug [file.hop]` | Debug support (**not yet implemented**) |
| `hopper profile [file.hop]` | Performance profiling (**not yet implemented**) |
| `hopper format [-w] <file.hop...>` | Reformat source files (`-w` to write in place) |
| `hopper fmt [-w] <file.hop...>` | Alias for `hopper format` |
| `hopper test [module]` | Run tests (all, or a specific module) |
| `hopper ir <file.hop>` | Print LLVM IR to stdout |
| `hopper ast <file.hop>` | Print AST as JSON to stdout |
| `hopper parse <file.hop>` | Print ANTLR parse tree to stdout |

### Compilation Pipeline

For hosted (non-bare-metal) builds, the pipeline is:

1. **Source loading** — The entry `.hop` file is read. Import directives are stripped and
   collected. Dependency files are resolved and merged recursively into the AST.
2. **Parse** — The merged source is parsed by the ANTLR4-generated `HopperParser`.
3. **AST construction** — The `AstBuilder` visitor produces a typed AST.
4. **Code generation** — `genModule()` in `codegenLLVM.js` emits LLVM IR text.
5. **IR deduplication** — `dedupeDeclarations()` removes duplicate `declare` lines from
   concatenated IR.
6. **Intermediate output** — The `.ll` file is written to `build/ll/<name>.ll`.
7. **Object compilation** — `clang <flags> <file.ll> -o build/o/<name>.o` compiles IR to an
   object file.
8. **Linking** — `clang <objects> -lpthread -o build/<name>` links the executable.

### Build Profiles

| Profile | Flag | Clang flags |
|---------|------|-------------|
| `dev` | (default) | `-g -O0 -c -fPIC -Wno-override-module` |
| `test` | `--test` | `-g -O0 -c -fPIC -Wno-override-module` |
| `production` | `--production` | `-O2 -c -fPIC -Wno-override-module` |

All profiles pass `-fPIC` and `-Wno-override-module`. The `dev` and `test` profiles include
debug info (`-g`) and disable optimization (`-O0`). The `production` profile enables `-O2`.

### Output Layout

Build artifacts are placed under the project root's `build/` directory:

```
build/
  ll/          # LLVM IR files (.ll)
  o/           # object files (.o)
  <name>       # final executable (name taken from hopper.json "name" field, or entry basename)
```

The project root is determined by walking up from the entry file's directory to find the nearest
`hopper.json`. The binary name is taken from the `name` field in `hopper.json`; if that field is
absent, the entry file's basename (without extension) is used.

### Registry

The package registry is hosted under the GitHub organization `HopperLangauge`
(`github.com/HopperLangauge/<pkg>`). `hopper publish` and `hopper revoke` require a
`HOPPER_TOKEN` or `GITHUB_TOKEN` environment variable containing a GitHub personal access token
with repository creation and deletion rights.
