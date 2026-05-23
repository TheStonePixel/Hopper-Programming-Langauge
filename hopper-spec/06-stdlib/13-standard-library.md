## Standard Library

The Hopper standard library is a set of conforming modules. It is **not** a monolithic runtime
linked into every program. There is no implicit prelude — no names are in scope unless the
program explicitly imports them. Every dependency is visible in source code and in
`hopper.json`.

---

### Design Principles

**Explicit over implicit.** Every module a program uses MUST appear in an `import` statement
and in the `targets` section of `hopper.json`. The compiler and build system enforce this —
there is no ambient standard library that is silently linked.

**No mandatory runtime.** Hopper programs do not depend on a language runtime. The entry point
is a direct OS entry — no startup code runs before `entry main` except what the program itself
arranges.

**Hardware is isolated.** Program source code names OS-level interfaces (`IO`, `FileSystem`,
`Socket`). The build file (`hopper.json` targets) names the hardware implementation
(`modules/x86_64/src/LinuxSyscalls.hop`). Retargeting to a different ISA requires changing
only the `implementation` paths in the build file — zero source changes.

---

### Three Tiers

The standard library is organized into three tiers:

#### Tier 1 — OS Interface Modules (`linux/`)

The `linux/` module is a pure contract module. It contains no source code, no implementation
files, and no classes. It declares seven interfaces that describe what a Linux program needs
from the operating system:

| Interface | File | Responsibilities |
|-----------|------|-----------------|
| `IO` | `linux/contracts/IO.hop` | `read`, `write`, scatter-gather I/O, `sendfile`, `splice`, `tee`, `ioctl` |
| `FileSystem` | `linux/contracts/FileSystem.hop` | `open`, `close`, `stat`, `mkdir`, `rename`, directory traversal, inotify |
| `Process` | `linux/contracts/Process.hop` | `fork`, `clone`, `execve`, `waitpid`, signals, credentials, `ptrace` |
| `Socket` | `linux/contracts/Socket.hop` | `socket`, `socketBind`, `listen`, `accept`, `connect`, `send`, `recv`, options |
| `Network` | `linux/contracts/Network.hop` | `select`, `poll`, `epoll_create1`, `epoll_ctl`, `epoll_wait` |
| `Memory` | `linux/contracts/Memory.hop` | `mmap`, `munmap`, `mprotect`, `mremap`, `madvise`, `mlock`, `memfd_create` |
| `System` | `linux/contracts/System.hop` | `uname`, `sysinfo`, clocks, scheduling, resource limits, `brk` |

These interfaces are satisfied at build time by the implementation declared in
`hopper.json` targets. On x86-64 Linux the implementation is always
`modules/x86_64/src/LinuxSyscalls.hop`.

#### Tier 2 — Hardware Capability Modules (`x86_64/`)

The `x86_64/` module provides two categories of functionality:

**LinuxSyscalls** (`x86_64/src/LinuxSyscalls.hop`) — the joint Linux/x86-64 implementation of
all seven OS interfaces. This file contains both the `contract LinuxSyscalls` declaration and
the concrete free-function implementations using inline assembly. It is self-contained so that
importing it resolves both the contract and the implementation in one step.

**SIMD** (`x86_64/contracts/SIMD.hop` + `x86_64/src/SIMD.hop`) — SSE2 vector operations for
byte scanning and manipulation. Unlike LinuxSyscalls, SIMD is an ISA capability, not an OS
contract, so it is exposed as a class (`X86SIMD satisfies SIMD`) that programs instantiate
directly. See §13.9 for the SIMD contract reference.

Additionally, `x86_64/` and `arch/` contain hardware-specific helpers that can be used
directly:

| File | Contents |
|------|----------|
| `x86_64/src/thread.hop` | `futex`, `futex_wait`, `futex_wake`, `gettid`, `set_tid_address`, `sched_yield` |
| `x86_64/src/sem.hop` | System V semaphore syscalls: `semget`, `semop`, `semctl` |
| `x86_64/src/io_uring.hop` | io_uring submission and completion ring primitives |
| `x86_64/src/mem.hop` | Low-level memory helpers |
| `x86_64/src/tty.hop` | Terminal control |

#### Tier 3 — Utility Modules (`cast/`)

**cast/** (`cast/src/Cast.hop`) — type conversion functions. Provides `cast<T>(x)` template
functions for all supported primitive-to-primitive conversions. This is the only safe way to
perform type conversions; raw C-style casts using type-name syntax (`int x`) are
available but unguarded.

---

### Non-Conforming Modules

The following modules exist in the repository but are **not** part of the standard library.
They were written before the current contract standard and have not been updated. Programs
MUST NOT import from these modules until they are migrated and placed in `hopper/modules/`:

`algo`, `ascii`, `char`, `cli`, `concurrent`, `core`, `ds`, `fs`, `io`, `json`, `llvm`,
`math`, `path`, `regex`, `stream`, `string`, `tui`, `uart`, `utf8`

Each section of this chapter covers one module group in detail.

---

### Module Installation and Targets

To use any standard library module:

1. Declare the dependency in `hopper.json`:

```json
{
  "dependencies": {
    "linux": "0.1.0",
    "x86_64": "0.1.0"
  }
}
```

2. Run `hopper install` to copy the module into `modules/` with full transitive dependency nesting.

3. Declare each contract binding in the `targets` section:

```json
{
  "targets": {
    "host": {
      "IO": {
        "from":           "linux",
        "contract":      "modules/linux/contracts/IO.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop"
      }
    }
  }
}
```

4. Import in source:

```hopper
import IO from linux
```

The build system resolves the contract and implementation, compiles both, and makes the free
functions from the implementation file available in the importing translation unit.
