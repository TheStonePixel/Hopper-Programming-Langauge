# No-Runtime Rationale

*This document is non-normative. It explains why Hopper has no runtime and what that means in practice.*

---

## The Decision

Hopper programs have no mandatory runtime. A conforming Hopper program that makes no system calls and performs no heap allocation compiles to a binary with no startup code, no exception tables, no garbage collector, and no thread-local storage beyond what the target ABI requires (design goal G1).

---

## What "No Runtime" Means

A runtime is code that runs before (and sometimes after) the programmer's code. In most languages, the runtime performs:

- Stack and heap initialization
- Exception unwinder registration
- Static initializer execution
- Thread-local storage setup
- Signal handler registration
- `atexit` handler execution

When these mechanisms are present, the programmer's `main` function is not the first code that runs after the OS loads the binary. Setup code runs first, and cleanup code runs after. This infrastructure requires metadata tables, memory regions, and sometimes additional OS resources.

In Hopper, there is no such infrastructure by default. The `entry` declaration compiles directly to `main`. No code runs before it. No code runs after it except what the programmer writes.

---

## Why No Runtime

### Bare-metal targets have no place to put a runtime

On a microcontroller, there is no OS to load a binary. Code executes directly from flash at a hardware-defined reset vector. There is no heap allocator until the programmer writes one. There is no stack until the programmer sets the stack pointer. A language with a runtime that assumes heap and stack are already configured cannot target this environment.

Hopper can target this environment because it makes no assumptions about the execution environment. A bare-metal Hopper program configures its own stack in the reset handler and calls whatever initialization it needs explicitly.

### A runtime is another dependency

Every line of runtime code is code that must be correct, must fit in the target's code size budget, and must be auditable in safety-critical applications. In avionics, medical devices, and industrial control systems, every byte of code requires justification. A runtime that the programmer did not write and cannot control is a liability.

Hopper's approach — no runtime unless the programmer adds one — means the programmer has full control over what code runs on the target. There are no hidden behaviors to audit.

### The cost belongs to the programmer

The cost of not having a runtime is that the programmer must manage resources explicitly. There is no automatic cleanup on exit, no automatic destructors for globals, and no signal handler pre-registration. This is the same model as C, and systems programmers already work within it. Hopper does not make this harder — it just does not hide the cost.

---

## What the Programmer Gets Instead

**Constructors and destructors** provide RAII for stack-allocated objects. Objects allocated on the stack have their destructors called when they leave scope, exactly as in C++.

**The `entry` declaration** is the program's first instruction. Everything before user code requires is the programmer's choice.

**Explicit allocation** means the programmer decides when and whether to use heap memory at all. A program that uses only stack allocation and static data needs no allocator and no runtime.

**Module imports** bring in exactly the functionality the program needs. If the program does not import the `Process` contract, no signal handler infrastructure is linked in.

---

## Runtime as a Library

For programs that want runtime-like behavior — global destructors, `atexit` semantics, structured startup — these can be implemented as Hopper modules and explicitly imported. A future `runtime` module might provide:

- A `startup` function that initializes a heap allocator and sets up signal handlers
- An `atexit` mechanism implemented in Hopper source
- A static initializer protocol

These would be opt-in dependencies, not implicit requirements. A program that imports them gets the behavior. A program that does not import them has no startup overhead. The choice is visible in `hopper.json`.
