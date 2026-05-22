# The Import Problem — Statement of the Problem

## What We Are Trying to Solve

Hopper source code should be able to reference external functionality without knowing where that functionality lives, how it is implemented, or what platform it runs on. The build system — not the source file — should own those decisions.

At the same time, the programmer needs to know at compile time that everything they are calling actually exists and has the right shape. No runtime surprises. No link-time symbol errors.

And none of this should require more ceremony than the problem actually demands.

---

## The Issues

### 1. Name collision

Two libraries can export a function with the same name. If a program imports both, the compiler does not know which one a call refers to. Every solution to this either forces namespace prefixes on the programmer (verbose, coupled) or relies on implicit resolution rules (unpredictable).

You cannot import two things that both have `print` and call `print()` without telling the compiler which one you mean. That statement is true regardless of how the import system is designed. It is a hard constraint.

### 2. Binding source code to paths

The moment a source file contains a path — `import print from "./modules/io"` or `implements IO from "./interfaces/io.hop"` — that file is coupled to a directory structure. Move the file, change the structure, target a different platform: the source breaks. The source should contain names, not locations.

### 3. Platform specificity in source

Systems programs need to run on Linux, bare-metal ARM, and custom hardware from the same source. If the source file decides which IO library to use, it has implicitly chosen a platform. Platform selection belongs in the build configuration. It has no business in a `.hop` file.

### 4. Compliance — knowing a swap is safe

If you replace one implementation with another, you need a guarantee that the replacement is complete and correct before you run anything. Without a formal contract, you find out about missing or mismatched functions one call at a time. With a contract, the build fails immediately with a precise error. The question is where that contract lives and who enforces it.

### 5. The compiler/build system boundary

The compiler's job is to read source and produce a binary. The build system's job is to decide what goes into that binary. These responsibilities are cleanly separated in principle but become tangled in practice. If the compiler handles name resolution, it needs to know about packages. If it handles linking, it needs to know about targets. Every responsibility added to the compiler makes it harder to bootstrap and harder to replace.

### 6. What is a library

This is not defined. A library could be a single `.hop` file, a directory of files, a compiled binary artifact, an interface plus an implementation, or some combination. Until this is settled, the import system has nothing concrete to import.

### 7. The two-world problem

An operating system is written at two layers simultaneously. The hardware layer uses something called IO to write to UART registers. The kernel layer uses something called IO to provide file descriptors. Both layers are written in Hopper. Both import IO. They mean completely different things by it. Any import system that does not account for compilation layers will produce a collision here that cannot be resolved at the source level.

### 8. Libraries versus binaries

The compiler today builds one binary from one set of sources. Real programs are composed of multiple compilation units linked together. The hardware library compiles first. The kernel links against it. The application links against the kernel. Who drives this sequence, who handles the linking, and how do the outputs of one compilation become inputs to the next — none of this is defined.

---

## What Makes This Hard

These issues are not independent. They are tightly coupled.

- Name collision cannot be solved without defining what a library is.
- Library identity cannot be defined without deciding how the compiler finds things.
- Compiler resolution cannot be defined without drawing the compiler/build system boundary.
- The boundary cannot be drawn cleanly without knowing what linking looks like.
- Linking cannot be designed without knowing how the two-world problem is handled.
- The two-world problem cannot be handled without defining compilation layers.

Every decision touches every other decision. This is why the problem resists a clean mathematical solution. The goal is not a perfect system. The goal is a system where the tradeoffs are explicit, the rules are clear, and the programmer is never surprised.

---

## What a Good Solution Looks Like

Not defined here. But a good solution would satisfy all of the following:

- Source files contain names, not paths
- Platform selection lives only in build configuration
- Name collisions are caught at compile time with a clear error
- Compliance is checked before the program runs
- The compiler does not grow new responsibilities to support it
- A library is one clearly defined thing
- The two-world problem is handled by structure, not convention
- The linking story is explicit and driven by something other than the compiler
