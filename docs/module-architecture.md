# Hopper Module Architecture: Hardware Independence Through Explicit Abstraction

## The Problem

Every systems language eventually confronts the same question: how do you write code that targets the operating system without hardcoding the hardware? The naive answer — compile different source files for each platform — works but scales poorly. The sophisticated answer involves abstraction layers, but abstraction has a cost: it obscures what is actually happening, and at the hardware level, what is actually happening is everything.

Hopper takes a third path. Its module architecture names the constraints explicitly. Rather than hiding the fact that a Linux syscall number is specific to both the operating system *and* the CPU architecture, Hopper surfaces that joint constraint as a named interface. The result is a system where hardware independence is real and verifiable, not assumed.

---

## Syscalls Are Not Portable

This point is easy to miss. The Linux `read` syscall exists on both x86-64 Linux and ARM64 Linux, but its syscall number is different: **0** on x86-64, **63** on ARM64. The same number on macOS x86-64 means something else entirely. A syscall number is not a portable identifier — it is an (OS, ISA) pair.

This matters because most systems programming languages treat syscalls as if they were just "the Linux API." They hide the joint constraint behind a generic name: `libc.read`, `syscall.read`, `os.read`. The constraint is real; it is just invisible.

When the constraint is invisible, so is the porting effort. A program that calls `libc.read` appears portable until you try to compile it for a new architecture, at which point you discover that every syscall number is wrong. The mismatch is encoded in libc's implementation, not in the program's type system.

Hopper makes the constraint legible. The goal is not merely portability but inspectability: a developer should be able to find every hardware assumption by reading module names and build files, not by tracing implementation code. The mechanism is naming — where an interface lives in the module system is part of what it means.

---

## Non-Goals

Hopper does not attempt:

- **Transparent cross-platform portability.** There is no runtime layer that silently adapts syscalls to the current architecture. Hardware specificity is named, not hidden.
- **Runtime abstraction over ISA differences.** When code runs on x86-64, it uses x86-64 instructions. There is no virtual ISA, no JIT that adapts to the target.
- **Automatic syscall virtualization.** Syscall numbers are compiled in at build time. There is no dynamic dispatch based on detected hardware.
- **Hidden hardware adaptation.** Portability is achieved by naming differences precisely enough that the only change required is in the build file — not by making differences disappear.

The design philosophy is distinct from most platform abstraction systems. Hopper does not try to make hardware invisible. It tries to make hardware legible.

---

## The Two-Tier Module System

Hopper's module system has two tiers visible to the programmer: one for hardware-specific implementations and one for OS interfaces. The build file — not source code — is the third tier, the architecture selector.

### Tier 1: x86_64 — The Hardware Layer

The `x86_64` module is the hardware layer. It contains two kinds of things:

**LinuxSyscalls** issues Linux system calls via the x86-64 calling convention: syscall number into `rax`, up to six arguments into `rdi rsi rdx r10 r8 r9`, return value from `rax`. Every entry is a free function wrapping a single `syscall` instruction in inline assembly. No libc. No class. No instantiation. The `interface LinuxSyscalls` documents the ~150 syscalls that Linux exposes on x86-64, and free functions in the same file implement each one.

**SIMD** exposes SSE2 vector operations: scanning memory for byte values, bit manipulation, popcount. These too are inline assembly, wrapping `movdqu`, `pcmpeqb`, `pmovmskb`, `popcnt`, and `bsf` into typed methods on a class `X86SIMD implements SIMD`. SIMD is a capability, not an OS interface — it does not follow the syscall pattern.

The naming is deliberate. `LinuxSyscalls` lives in the `x86_64` module because the syscall numbers encoded inside it are only valid on Linux running on x86-64. The name is not `Syscalls` (which would suggest portability) or `PosixSyscalls` (which would suggest OS-only specificity). It is `LinuxSyscalls`, and it lives in `x86_64/`. The module and the interface name together state the constraint.

### Tier 2: linux — The OS Interface Layer

The `linux` module is a pure interface module. It declares the contracts that any Linux implementation must satisfy — but it contains no implementation code whatsoever. It exports seven interfaces:

- **IO** — `read`, `write`, `pread64`, `pwrite64`, `readv`, `writev`, `sendfile`, `splice`, `tee`, `ioctl`
- **FileSystem** — `open`, `close`, `stat`, `mkdir`, `unlink`, `rename`, `getcwd`, `dup`, `pipe`, `inotify`, and ~30 more
- **System** — `uname`, `sysinfo`, clocks, scheduling, resource limits, priority
- **Process** — `fork`, `execve`, `waitpid`, `getpid`/`uid`/`gid`, signals, `ptrace`
- **Socket** — `socket`, `socketBind`, `listen`, `accept`, `connect`, `send`, `recv`, `setsockopt`
- **Network** — `select`, `poll`, `epoll_create1`, `epoll_ctl`, `epoll_wait`
- **Memory** — `mmap`, `munmap`, `mprotect`, `mremap`, `madvise`, `mlock`, `memfd_create`

These interfaces describe what a Linux program needs. They say nothing about x86-64, ARM64, or any other ISA.

### Tier 3: The Build File — The Architecture Selector

The build file (`hopper.json`) is where hardware is named. It is the only place.

A program that needs file I/O declares its targets:

```json
{
  "targets": {
    "host": {
      "IO": {
        "from":           "linux",
        "interface":      "modules/linux/interfaces/IO.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop"
      },
      "FileSystem": {
        "from":           "linux",
        "interface":      "modules/linux/interfaces/FileSystem.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop"
      }
    }
  }
}
```

The `interface` field names the contract — hardware-independent. The `implementation` field names who fulfills it — hardware-specific. To port to ARM64 Linux, change `x86_64` to `arm64` in the `implementation` paths. The program source does not change. The linux interfaces do not change. The x86_64 module does not change. Only the build file changes, and it changes in exactly one place per interface.

---

## What Programs See

A program that needs file I/O writes:

```hopper
import IO from linux
import FileSystem from linux

entry main {
    int fd = open("data.txt", 0, 0)
    address buf = allocate 4096
    int n = read(fd, buf, 4096)
    write(1, buf, n)
    close(fd)
}
```

The program calls `open`, `read`, `write`, `close` — free functions. It imports `IO from linux` and `FileSystem from linux`. It knows nothing about x86-64, instantiates nothing. The hardware specifics live entirely in the build file and the `x86_64` module.

When the build system compiles this program, it resolves `IO from linux` to the `interface` path (the contract) and the `implementation` path (the x86-64 free functions). The free functions from `x86_64/src/LinuxSyscalls.hop` come into scope, so `read(fd, buf, n)` in the program compiles to the x86-64 syscall — one `syscall` instruction, no wrappers, no heap allocation, no indirection.

---

## The SIMD Module

Hardware capability extends beyond OS syscalls. The `x86_64` module also exports a `SIMD` interface backed by `X86SIMD`, exposing SSE2 vector operations:

```hopper
interface SIMD {
    function scanByte16(address ptr, int b) int
    function scanByte2x16(address ptr, int b1, int b2) int
    function scanByteOR4x16(address ptr, int b1, int b2, int b3, int b4) int
    function popcnt16(int mask) int
    function bsf16(int mask) int
}
```

`scanByte16` loads 16 bytes from `ptr`, broadcasts byte `b` to an XMM register, and returns a 16-bit mask where bit `i` is set if `ptr[i] == b`. The implementation uses `movdqu`, `pcmpeqb`, `pmovmskb`. `scanByteOR4x16` does the same for four bytes in parallel — useful for scanning whitespace (space, tab, newline, carriage return) in a single pass.

SIMD differs from the syscall pattern in one way: it is an ISA capability, not an OS interface. `LinuxSyscalls` has a corresponding OS-level interface in the `linux` module (`IO`, `FileSystem`, etc.). `SIMD` does not — there is no OS-level view of vector operations. Programs that need SIMD import it directly from `x86_64`:

```hopper
import SIMD from x86_64
```

And the build target:

```json
"SIMD": {
  "from": "x86_64",
  "interface": "modules/x86_64/interfaces/SIMD.hop",
  "implementation": "modules/x86_64/src/SIMD.hop"
}
```

Programs never write `mov` or `pshufd`. The hardware specifics live in `x86_64/src/SIMD.hop` and nowhere else.

---

## Two Interfaces, Two Hardware Targets

The full picture becomes clearest when you hold two hardware targets side by side. Here are `LinuxSyscalls` and `SIMD` — two interfaces with fundamentally different characters — implemented on both x86-64 and ARM64.

### The Shared Contracts

The `linux` module declares what a Linux program needs. These interface files live in `linux/interfaces/` and are identical regardless of hardware:

```hopper
// linux/interfaces/IO.hop
interface IO {
    function read(int fd, address buf, int count) int
    function write(int fd, address buf, int count) int
    function pread64(int fd, address buf, int count, int offset) int
    function pwrite64(int fd, address buf, int count, int offset) int
}
```

```hopper
// x86_64/interfaces/SIMD.hop  (also the arm64/interfaces/SIMD.hop contract)
interface SIMD {
    function scanByte16(address ptr, int b) int
    function scanByteOR4x16(address ptr, int b1, int b2, int b3, int b4) int
    function popcnt16(int mask) int
    function bsf16(int mask) int
}
```

These files do not change when hardware changes. They are the stable contracts that programs depend on.

### x86-64: Syscall Instruction, SSE2

`x86_64/src/LinuxSyscalls.hop` implements the Linux kernel's x86-64 ABI. Syscall number into `rax`, arguments into `rdi rsi rdx r10 r8 r9`, return from `rax`:

```hopper
// x86_64/src/LinuxSyscalls.hop

interface LinuxSyscalls {
    function read(int fd, address buf, int count) int
    function write(int fd, address buf, int count) int
    // ...
}

function read(int fd, address buf, int count) int {
    int result
    asm { rax = 0   rdi = fd   rsi = buf   rdx = count   syscall   result = rax }
    return result
}

function write(int fd, address buf, int count) int {
    int result
    asm { rax = 1   rdi = fd   rsi = buf   rdx = count   syscall   result = rax }
    return result
}
```

`x86_64/src/SIMD.hop` uses SSE2 to scan 16 bytes per instruction:

```hopper
// x86_64/src/SIMD.hop

class X86SIMD implements SIMD {
    function scanByte16(address ptr, int b) int {
        int result
        asm {
            movd    xmm1, b
            pxor    xmm0, xmm0
            pshufb  xmm1, xmm0
            movdqu  xmm0, [ptr]
            pcmpeqb xmm0, xmm1
            pmovmskb result, xmm0
        }
        return result
    }
}
```

### ARM64: SVC Instruction, NEON

`arm64/src/LinuxSyscalls.hop` implements the same `interface LinuxSyscalls` contract, but with ARM64 syscall numbers (the Linux kernel assigns different numbers on each ISA) and the ARM64 ABI: syscall number into `x8`, arguments into `x0–x5`, `svc #0` to enter the kernel:

```hopper
// arm64/src/LinuxSyscalls.hop

interface LinuxSyscalls {
    function read(int fd, address buf, int count) int
    function write(int fd, address buf, int count) int
    // ...
}

function read(int fd, address buf, int count) int {
    int result
    asm { x8 = 63   x0 = fd   x1 = buf   x2 = count   svc 0   result = x0 }
    return result
}

function write(int fd, address buf, int count) int {
    int result
    asm { x8 = 64   x0 = fd   x1 = buf   x2 = count   svc 0   result = x0 }
    return result
}
```

Note syscall numbers: `read` is **0** on x86-64, **63** on ARM64. `write` is **1** on x86-64, **64** on ARM64. The interface contract (`read(int, address, int) int`) is identical. The numbers are completely different.

`arm64/src/SIMD.hop` implements the same `interface SIMD` using NEON, ARM64's vector extension:

```hopper
// arm64/src/SIMD.hop

class ARM64SIMD implements SIMD {
    function scanByte16(address ptr, int b) int {
        int result
        asm {
            dup     v1.16b, b
            ld1     {v0.16b}, [ptr]
            cmeq    v0.16b, v0.16b, v1.16b
            shrn    v0.8b, v0.8h, 4
            fmov    result, d0
        }
        return result
    }
}
```

Different instructions, different register names, different encoding — identical interface.

### The Build File: The Only Difference

A program running on x86-64:

```json
{
  "targets": {
    "host": {
      "IO": {
        "from":           "linux",
        "interface":      "modules/linux/interfaces/IO.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop"
      },
      "FileSystem": {
        "from":           "linux",
        "interface":      "modules/linux/interfaces/FileSystem.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop"
      },
      "SIMD": {
        "from":           "x86_64",
        "interface":      "modules/x86_64/interfaces/SIMD.hop",
        "implementation": "modules/x86_64/src/SIMD.hop"
      }
    }
  }
}
```

The same program running on ARM64:

```json
{
  "targets": {
    "host": {
      "IO": {
        "from":           "linux",
        "interface":      "modules/linux/interfaces/IO.hop",
        "implementation": "modules/arm64/src/LinuxSyscalls.hop"
      },
      "FileSystem": {
        "from":           "linux",
        "interface":      "modules/linux/interfaces/FileSystem.hop",
        "implementation": "modules/arm64/src/LinuxSyscalls.hop"
      },
      "SIMD": {
        "from":           "arm64",
        "interface":      "modules/arm64/interfaces/SIMD.hop",
        "implementation": "modules/arm64/src/SIMD.hop"
      }
    }
  }
}
```

Interface paths and contract names are identical across both targets. Only `implementation` paths differ — and for SIMD, the `from` field, because SIMD is ISA-specific with no OS-level analog.

### What the Compiler Does

When the build system processes the x86-64 target:

1. It loads `linux/interfaces/IO.hop` — the contract. All function signatures come into scope.
2. It loads `x86_64/src/LinuxSyscalls.hop` — the implementation. The free functions `read`, `write`, `open`, `close`, ... come into scope.
3. It checks that every function declared in `IO` is present in `LinuxSyscalls.hop` with matching signatures.
4. It compiles the program, resolving calls to `read(fd, buf, n)` to the x86-64 inline-asm implementation.

When the build system processes the ARM64 target, steps 1–4 are identical — except step 2 loads `arm64/src/LinuxSyscalls.hop`, so the same call `read(fd, buf, n)` resolves to the ARM64 `svc 0` implementation.

The program never sees either choice. It calls `read`. The build file decides which `read`.

---

## Why the Build File Holds Architecture

The critical design decision is: **source code sees OS, build file sees hardware.**

An alternative design might have linux source files import `LinuxSyscalls from x86_64` and wrap them in `LinuxIO`, `LinuxFileSystem` classes. This works but breaks the invariant. When a developer reads `linux/src/IO.hop`, they see `x86_64`. Porting to ARM64 requires editing source files. The hardware constraint has leaked into the OS layer.

In Hopper's design, `linux/` contains only interfaces. No file in `linux/` ever names x86-64. The `x86_64` module implements the contracts declared in `linux/` — but that connection is made entirely in the build file. The source files on both sides remain independent.

This means the porting boundary is a list of build file entries, not a set of source files to audit. Every `implementation` field that names `x86_64` is a porting task. No entry, no task.

---

## Operational Consequences

The design produces engineering properties that matter in practice.

**Ports become enumerable tasks.** Every hardware dependency lives in `hopper.json` `implementation` fields. To scope an ARM64 port, grep for `x86_64` in those fields. The result is a complete mechanical list — not an estimate.

**Portability auditing becomes structural.** A file that imports only from `linux` and contains no `x86_64` strings is verifiably portable by inspection. There is no hidden syscall, no architecture-specific constant buried three layers down. The module system makes the absence of hardware dependencies as visible as their presence.

**Hardware dependencies are grep-able.** In a libc codebase, hardware assumptions scatter across headers, intrinsics, and platform guards. In Hopper, `grep implementation hopper.json` in any directory gives a complete map of that project's hardware surface.

**Implementation swaps are localized.** Replacing a syscall implementation — for testing, for a new OS, for a custom kernel interface — requires changing one field in a build file. No source changes, no new compilation units, no downstream edits.

**Cross-target builds are explicit by construction.** A build targeting both x86-64 and ARM64 has two named target blocks. The differences between them are enumerable and visible in one file. There is no implicit platform detection, no `#ifdef`, no conditional compilation scattered through source.

Hopper trades automatic platform abstraction for explicit build-time architecture mapping. There is no runtime layer that silently adapts to the host; portability work must be named upfront. The benefit of that cost is everything listed above: when the work is named, it can be measured, audited, and verified complete.

---

## Porting

The "Two Interfaces, Two Hardware Targets" section above shows the ARM64 port in full. The complete change is the `implementation` paths in the build file — program source and `linux/` interfaces are untouched. The change is exactly as large as the porting effort, no more.

Porting to macOS x86-64 is structurally different because the OS changes, not just the ISA:

1. `LinuxSyscalls` cannot be reused — macOS syscall numbers and ABI differ from Linux.
2. Implement `DarwinSyscalls` as free functions in the `x86_64` module (or a new `darwin` module).
3. Implement a `darwin/` module declaring `interface IO`, `interface FileSystem`, etc. with macOS semantics.
4. Programs import `IO from darwin` instead of `IO from linux`.

The OS boundary and the ISA boundary are separate axes. Hopper names both explicitly — they just live in different parts of the module and build system.

---

## Why Naming Matters

The interface name and module location together constitute the type of the constraint. This is the most important design decision in the architecture.

`LinuxSyscalls` lives in the `x86_64` module. Not the `linux` module — `x86_64`. The syscall numbers inside it are not properties of Linux in the abstract; they are properties of Linux on x86-64. If `LinuxSyscalls` lived in `linux/`, the name would suggest OS-level generality. The module location would contradict the content. The type would be wrong.

Conversely, a name like `X86_64LinuxSyscalls` in the `x86_64` module would be accurate but redundant — the module already provides the ISA context. `LinuxSyscalls` in `x86_64/` reads correctly: "the Linux syscall interface, as it exists on x86-64." The module name provides the ISA; the interface name provides the OS. Together they are precise.

This naming discipline makes the dependency graph honest. When a program imports `IO from linux`, it depends on the Linux OS abstraction. When the build file resolves that to `x86_64/src/LinuxSyscalls.hop`, it declares the hardware dependency explicitly. When the build system resolves that dependency, it knows exactly what it is providing: not "a syscall interface," but the Linux syscall interface on x86-64.

Systems software has always had these constraints. Hopper encodes them in the build contract: the interface system verifies that implementations are complete, the dependency graph makes every hardware assumption enumerable, and the build file is the document that names them.

---

## Summary

| Layer | Where | What It Contains | What It Names |
|-------|--------|-----------------|---------------|
| Hardware | `x86_64/` | `interface LinuxSyscalls` + free functions; `interface SIMD` + class | Linux OS ABI on x86-64 ISA |
| OS abstraction | `linux/` | `interface IO`, `interface FileSystem`, etc. | Linux OS (hardware-independent) |
| Architecture selector | `hopper.json` targets | `implementation` paths | Which hardware module satisfies which OS interface |
| Program | source files | imports from `linux` | Hardware-independent |

The build file is where the two sides meet — the only place they do.
