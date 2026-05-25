## Execution Model

### 6.0.1 Overview

A Hopper program executes as a sequential stream of instructions. There is no implicit concurrency, no scheduler built into the language, and no runtime thread pool. One instruction executes, completes, and produces its result before the next instruction begins. This ordering is deterministic and is a normative guarantee of the language.

### 6.0.2 Entry Point

Every executable Hopper program MUST declare exactly one `entry` block. The `entry` declaration is not a function — it is a named program start. The compiler translates the `entry` block into the binary's entry symbol (conventionally `main` in a hosted environment). Execution begins at the first statement of the `entry` body.

Two forms are permitted:

```hopper
entry main {
    // no command-line arguments
}

entry main(int argc, string[] argv) {
    // argc: count of arguments (including program name)
    // argv: null-terminated array of null-terminated strings
}
```

A program with no `entry` declaration MUST NOT be compiled as an executable. A library (`"type": "library"` in `hopper.json`) MUST NOT contain an `entry` declaration.

### 6.0.3 Sequential Execution

Statements within a block execute in the order they are written, from top to bottom. The compiler MUST NOT reorder statements in a way that is observable by the program (see §6.0.7 for what "observable" means with respect to memory and side effects).

The compiler and LLVM backend MAY reorder or eliminate instructions within a statement when such reordering does not change observable behavior. Observable behavior is defined as:

- The sequence of values passed to system calls.
- The sequence of values written to memory that is visible to the operating system or hardware.
- The program's exit status.

### 6.0.4 Stack-Based Call Model

Hopper uses a conventional stack-based call model. Each function invocation allocates a stack frame containing:

- Space for all local variables declared in the function body.
- Space for the return address.
- Space for any callee-saved registers the function must preserve (implementation-defined per ABI).
- Space for outgoing argument slots when calling sub-functions (implementation-defined).

Stack frames are allocated on function entry and released on function exit. There is no heap involvement in the call model itself; heap operations are explicit via `allocate` and `deallocate`.

The stack grows downward on x86-64 (toward lower addresses). The maximum stack depth is implementation-defined and platform-defined. Hopper does not detect or prevent stack overflow at the language level; stack overflow is undefined behavior (see §6.9).

### 6.0.5 No Coroutines, No Async, No Green Threads

Hopper MUST NOT be extended with coroutine syntax, `async`/`await` keywords, generator functions, or any other cooperative multitasking mechanism. These features require hidden per-coroutine stacks or continuation objects, which are not visible in source code and contradict the principle that what you write is what executes.

If a program requires concurrent execution, it MUST use OS-level mechanisms (e.g., `fork`, `clone`, POSIX threads) exposed through the `linux` or `Process` interfaces. The language provides no abstractions over those mechanisms.

### 6.0.6 No Runtime

Hopper programs execute without a language runtime. There is no garbage collector, no exception handler table, no thread scheduler, and no initialization code injected by the compiler (other than the ABI-mandated `_start` stub on hosted targets, which transfers control to the `entry` block). A Hopper binary on a bare-metal target may run with nothing but the program binary itself and whatever operating environment the `bind` declarations establish.

### 6.0.7 Observable Behavior

The observable behavior of a Hopper program is the set of side effects visible outside the program boundary: system calls, hardware register writes, and the final exit status. Two programs that produce identical observable behavior are semantically equivalent for purposes of this specification. The compiler MAY transform a program in any way that preserves observable behavior.

### 6.0.8 Program Termination

A program terminates when control reaches the end of the `entry` block, or when a terminating system call (such as `exit`) is executed. The exit status returned to the operating system is implementation-defined unless the program explicitly calls an `exit`-equivalent syscall with a specific code.

Abnormal termination — due to a signal, hardware fault, or `abort()` — is described in §6.6 and §6.7.
