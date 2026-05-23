# 12 Runtime

## 12.0 Overview

Hopper has no managed runtime.

A conforming implementation MUST NOT require any runtime library beyond the C standard library
(`libc`) and the POSIX threads library (`libpthread`) for hosted targets, and MUST NOT
require any runtime library at all for bare-metal targets.

There is no garbage collector, no scheduler, no exception-handling runtime, no type-information
tables, no dynamic dispatch infrastructure, and no thread-local-storage runtime. Programs are
compiled to native machine code and run directly as operating-system processes or as bare-metal
firmware images.

## 12.1 Contrast with Managed Runtimes

Languages such as Go, Java, and Python ship significant runtime systems that the program
cannot function without:

- **Go** — includes a garbage collector, goroutine scheduler, and stack-growth mechanism.
- **Java** — requires the JVM: class loading, JIT compilation, garbage collector, and the
  standard-library runtime (java.lang, java.util, ...).
- **Python** — requires the interpreter, reference-counting garbage collector, and the
  full CPython object model.

A Hopper program has none of these. The binary produced by `hopper build` is a self-contained
ELF executable (or bare-metal image) that the kernel or boot ROM loads and runs directly.
The only dynamic dependency for hosted programs is `libc.so` (for `malloc`, `free`, and
`abort`) and `libpthread.so` (available but not used unless the program explicitly invokes
thread-related syscalls).

## 12.2 Normative Requirements

A Hopper implementation conforming to this section MUST:

1. Link hosted programs against `libc` and `-lpthread` only. No other system libraries
   SHALL be linked unless explicitly declared via `extern function` in source.
2. Emit `declare i8* @malloc(i64)` and `declare void @free(i8*)` in every hosted
   compilation unit, and wire `allocate`/`deallocate` to these symbols.
3. Emit `declare void @abort()` in every hosted non-release compilation unit, and
   call `@abort()` followed by `unreachable` at every contract-violation site.
4. Omit `declare void @abort()` (and all contract-check IR) when compiling in
   release mode (`hopper build --production`).
5. Emit no `malloc`/`free`/`abort` declarations for bare-metal targets
   (`target === "armv6-bare"` or equivalent). Bare-metal programs that require dynamic
   allocation MUST supply their own allocator.
