# Hopper Module Architecture: Hardware Independence Through Explicit Abstraction

## The Problem

Every systems language eventually confronts the same question: how do you write code that targets the operating system without hardcoding the hardware? The naive answer — compile different source files for each platform — works but scales poorly. The sophisticated answer involves abstraction layers, but abstraction has a cost: it obscures what is actually happening, and at the hardware level, what is actually happening is everything.

Hopper takes a third path. Its module architecture names the constraints explicitly. Rather than hiding the fact that a Linux syscall number is specific to both the operating system *and* the CPU architecture, Hopper surfaces that joint constraint as a named interface. The result is a system where hardware independence is real and verifiable, not assumed.

---

## Syscalls Are Not Portable

This point is easy to miss. The Linux `read` syscall exists on both x86-64 Linux and ARM64 Linux, but its syscall number is different: **0** on x86-64, **63** on ARM64. The same number on macOS x86-64 means something else entirely. A syscall number is not a portable identifier — it is an (OS, ISA) pair.

This matters because most systems programming languages treat syscalls as if they were just "the Linux API." They hide the joint constraint behind a generic name: `libc.read`, `syscall.read`, `os.read`. The constraint is real; it is just invisible.

When the constraint is invisible, so is the porting effort. A program that calls `libc.read` appears portable until you try to compile it for a new architecture, at which point you discover that every syscall number is wrong. The mismatch is encoded in libc's implementation, not in the program's type system.

Hopper makes the constraint legible.

---

## The Three-Tier Module System

Hopper's module system has three tiers. Each tier has a specific role, and the boundary between tiers is enforced by the import system.

### Tier 1: x86_64 — The Hardware Layer

The `x86_64` module is the hardware layer. It contains two kinds of implementations:

**LinuxSyscalls** issues Linux system calls via the x86-64 calling convention: syscall number into `rax`, up to six arguments into `rdi rsi rdx r10 r8 r9`, return value from `rax`. Every method is a thin inline-assembly wrapper around a single `syscall` instruction. No libc. No indirection. The class `X86LinuxSyscalls` implements the `LinuxSyscalls` interface, which documents the ~150 syscalls that Linux exposes on x86-64.

**SIMD** exposes SSE2 vector operations: scanning memory for byte values, bit manipulation, popcount. These too are inline assembly, wrapping `movdqu`, `pcmpeqb`, `pmovmskb`, `popcnt`, and `bsf` into typed methods that hide the register allocation details.

The naming is deliberate. `LinuxSyscalls` lives in the `x86_64` module because the syscall numbers encoded inside it are only valid on Linux running on x86-64. The name is not `Syscalls` (which would suggest portability) or `PosixSyscalls` (which would suggest OS-only specificity). It is `LinuxSyscalls`, and it lives in `x86_64/`. The module and the interface name together state the constraint.

### Tier 2: arch — The Architecture Multiplexer

The `arch` module is a one-line-per-file shim. Every file in `arch/src/` contains exactly one import:

```hopper
import io from x86_64
```

This is the retargeting point. To compile Hopper for ARM64, you change `x86_64` to `arm64` here and nowhere else. The `arch` module exists precisely so that this change has a single location.

`arch` is not a user-facing API. Programs do not import from `arch`. Only tier-3 library implementations may import from `arch`, and only for legacy lowercase-style module files that predate the interface system.

### Tier 3: linux — The OS Abstraction Layer

The `linux` module is the user-facing layer. It exports seven interfaces:

- **IO** — `read`, `write`, `pread64`, `pwrite64`, `readv`, `writev`, `sendfile`, `splice`, `tee`, `ioctl`
- **FileSystem** — `open`, `close`, `stat`, `mkdir`, `unlink`, `rename`, `getcwd`, `dup`, `pipe`, `inotify`, and ~30 more
- **System** — `uname`, `sysinfo`, clocks, scheduling, resource limits, priority
- **Process** — `fork`, `execve`, `waitpid`, `getpid`/`uid`/`gid`, signals, `ptrace`
- **Socket** — `socket`, `socketBind`, `listen`, `accept`, `connect`, `send`, `recv`, `setsockopt`
- **Network** — `select`, `poll`, `epoll_create1`, `epoll_ctl`, `epoll_wait`
- **Memory** — `mmap`, `munmap`, `mprotect`, `mremap`, `madvise`, `mlock`, `memfd_create`

Each implementation file (`linux/src/IO.hop`, etc.) follows the same pattern:

```hopper
import LinuxSyscalls from x86_64

function read(int fd, address buf, int count) int {
    X86LinuxSyscalls sys = X86LinuxSyscalls()
    return sys.read(fd, buf, count)
}

// ... remaining free functions ...

class LinuxIO implements IO {
    function read(int fd, address buf, int count) int {
        return read(fd, buf, count)
    }
    // ... remaining methods ...
}
```

The pattern has two levels. Free functions at module scope (e.g., `read(...)`) delegate to `X86LinuxSyscalls`. The class `LinuxIO implements IO` delegates to those free functions. The unqualified calls in class methods (`return read(fd, buf, count)`) are not recursive — in Hopper, method calls always require an explicit receiver (`self.method()` or `obj.method()`), so an unqualified call unambiguously resolves to the module-scope free function.

Programs that import `IO from linux` get `LinuxIO`. They call `io.read(fd, buf, len)` and never see `X86LinuxSyscalls`. The hardware constraint is real and present in the compiled binary, but it is invisible to the program source.

---

## The Interface/Class System

Hopper's conformance checking is structural. When a class declares `implements IO`, the compiler verifies at compile time that every method in the `IO` interface is present in the class with matching parameter counts and return types. There is no vtable, no runtime dispatch, no overhead. The interface exists only to make the constraint checkable.

This is distinct from most OOP interface systems in a subtle way: conformance in Hopper is a *statement about the source*, not a runtime mechanism. When `LinuxIO implements IO`, the compiler checks that `LinuxIO` has a `read(int, address, int) int` method. It does not emit a vtable entry. Calling `io.read(...)` on a `LinuxIO` instance compiles to a direct call, not an indirect one.

The same applies to `X86LinuxSyscalls implements LinuxSyscalls`. At `-O2`, the compiler inlines the method body (which is a single `asm { ... }` block) at every call site. A program that calls `sys.read(fd, buf, len)` compiles to exactly one `syscall` instruction plus the register loads. There is no wrapper, no heap allocation, no indirection.

---

## What Programs See

A program that needs file I/O writes:

```hopper
import IO from linux
import FileSystem from linux

entry main {
    LinuxIO io = LinuxIO()
    LinuxFileSystem fs = LinuxFileSystem()

    int fd = fs.open("data.txt", 0, 0)
    address buf = allocate 4096
    int n = io.read(fd, buf, 4096)
    io.write(1, buf, n)
    fs.close(fd)
}
```

The program uses `IO` and `FileSystem` — hardware-independent names. It constructs `LinuxIO` and `LinuxFileSystem` — Linux-specific implementations. The gap between the two is the entire point: the interface says *what* is needed, the implementation says *how* it works on this OS and hardware, and the module system ensures that programs depend on the former, not the latter.

To port Hopper to ARM64 Linux:
1. Implement `ARM64LinuxSyscalls` in an `arm64` module with the correct ARM64 syscall numbers.
2. Change `arch/` to forward to `arm64` instead of `x86_64`.
3. Change `linux/src/*.hop` to import `LinuxSyscalls from arm64` instead of `x86_64`.

The program source does not change. The interface contracts enforce that the new implementation is complete.

To port to macOS x86-64:
1. The `LinuxSyscalls` interface cannot be reused — syscall numbers are different and the ABI has minor differences.
2. Implement a new `DarwinSyscalls` interface in the `x86_64` module (or a new `darwin` module).
3. Implement `DarwinIO`, `DarwinFileSystem`, etc. in a `darwin` module.
4. Programs import `IO from darwin` instead of `IO from linux`.

The architecture makes the porting boundary explicit. There is no fiction of automatic portability. There is a named contract (`IO`) that any OS can satisfy, and a named implementation (`LinuxIO`) that satisfies it for one (OS, ISA) combination.

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

Programs import SIMD the same way they import OS interfaces:

```hopper
import SIMD from x86_64
```

And use it:
```hopper
X86SIMD simd = X86SIMD()
int mask = simd.scanByte16(bufPtr + offset, 10)  // scan for newline
```

The `10` is the raw byte value — the interface receives it and broadcasts internally. Programs never write `mov` or `pshufd`. The hardware specifics live in `x86_64/src/SIMD.hop` and nowhere else.

---

## Why Naming Matters

The most important design decision in this architecture is naming: `LinuxSyscalls` lives in the `x86_64` module.

An alternative design might put `LinuxSyscalls` in the `linux` module, treating it as an OS-level abstraction. But that would be wrong. The syscall numbers inside `LinuxSyscalls` are not properties of Linux in the abstract — they are properties of Linux on x86-64. The interface name and module location together constitute the type of the constraint. Moving `LinuxSyscalls` to the `linux` module would misstate the type.

Another alternative might name it `X86LinuxABI` or `X86_64LinuxSyscalls`. These are accurate but verbose. `LinuxSyscalls`, scoped to the `x86_64` module, reads correctly: "the Linux syscall interface, as it exists on x86-64." The module name provides the ISA context; the interface name provides the OS context.

This naming discipline makes the dependency graph honest. When a program imports `IO from linux`, it depends on the Linux OS abstraction. When `linux/src/IO.hop` imports `LinuxSyscalls from x86_64`, it declares its hardware dependency explicitly. When the build system resolves that dependency, it knows exactly what it is providing: not "a syscall interface," but the Linux syscall interface on x86-64.

Systems software has always had these constraints. Hopper makes them part of the type system.

---

## Summary

| Layer | Module | Names | Constraint |
|-------|--------|-------|------------|
| Hardware | `x86_64` | `LinuxSyscalls`, `SIMD` | Linux OS ABI + x86-64 ISA |
| Abstraction | `linux` | `IO`, `FileSystem`, `System`, `Process`, `Socket`, `Network`, `Memory` | Linux OS (hardware-independent) |
| Programs | — | import from `linux` | Hardware-independent |

The program source is hardware-independent. The linux module is ISA-independent. The x86_64 module is where hardware specificity lives, and it says so in its names.
