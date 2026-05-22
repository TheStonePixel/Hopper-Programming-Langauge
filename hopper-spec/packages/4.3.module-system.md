# Hopper Module System — Design Proposal

## The Problem With Existing Approaches

Most language import systems conflate three separate concerns into one statement:

- **What** you need (the interface)
- **Where** it comes from (the implementation)
- **Which platform** you are targeting (the environment)

This creates code that is tied to a specific implementation and often a specific platform. Swapping a dependency means editing source files. Targeting a different platform means `#ifdef` guards or separate codebases. Neither is acceptable for a systems language that needs to run on Linux, bare-metal ARM, and custom hardware from the same source.

Hopper separates these three concerns completely.

---

## The Principle

The compiler has one job: read source files, produce a binary.

It does not resolve packages. It does not know what platform you are targeting. It does not have a built-in standard library. It receives paths to source files and compiles them. That is the full extent of its responsibility.

Everything else — dependency resolution, target configuration, interface mapping — belongs to the build system.

---

## Interfaces Are Source Code

An interface in Hopper is a `.hop` file that declares a set of function signatures. It is not a compiler concept. It is not magic. It is source code that the compiler reads and enforces like any other source file.

```hopper
// io.hop
interface IO {
    function write(string s) int
    function read(int len) string
}
```

```hopper
// strings.hop
interface Strings {
    function format(string template, string value) string
    function length(string s) int
    function compare(string a, string b) int
}
```

These files can live anywhere — in your project, in the official Hopper collection, in a third-party repository. The compiler does not care where they came from. It receives a path and reads what is there.

The official Hopper interface collection is a directory of `.hop` files that installs alongside the compiler as a convenience. The compiler has no special knowledge of it.

---

## The Build Script Is the Resolver

`hopper.json` maps abstract interface names to two concrete paths: the interface definition and the implementation. The build system resolves these paths before the compiler ever runs.

```json
{
  "name": "datalogger",
  "targets": {
    "x86-linux": {
      "IO": {
        "interface":      "./interfaces/io.hop",
        "implementation": "./modules/linux/io.hop"
      },
      "Strings": {
        "interface":      "./interfaces/strings.hop",
        "implementation": "./modules/utf8/strings.hop"
      }
    },
    "armv6-bare": {
      "IO": {
        "interface":      "./interfaces/io.hop",
        "implementation": "./drivers/uart/io.hop"
      },
      "Strings": {
        "interface":      "./interfaces/strings.hop",
        "implementation": "./modules/ascii/strings.hop"
      }
    },
    "test": {
      "IO": {
        "interface":      "./interfaces/io.hop",
        "implementation": "./test/mock-io.hop"
      },
      "Strings": {
        "interface":      "./interfaces/strings.hop",
        "implementation": "./modules/ascii/strings.hop"
      }
    }
  }
}
```

The interface definition is the same across all three targets. The implementation changes. The source code never does.

---

## What Source Code Looks Like

```hopper
import IO from core
import Strings from core

entry main {
    int raw = Sensor.read()
    string msg = Strings.format("sensor: {}", raw)
    IO.write(msg)
}
```

This file has no platform knowledge. No `#ifdef`. No target checks. It expresses what the program does. The build script expresses where it runs.

---

## What the Compiler Receives

After the build system resolves the target, the compiler receives:

```
source:          ./src/main.hop
IO interface:    ./interfaces/io.hop
IO impl:         ./drivers/uart/io.hop
Strings iface:   ./interfaces/strings.hop
Strings impl:    ./modules/ascii/strings.hop
```

It reads each file. It checks that each implementation satisfies the corresponding interface — correct function names, correct signatures. If something is missing or wrong, it errors at compile time with a precise message. If everything matches, it compiles to a binary.

No magic. No runtime surprises. Compliance is enforced before a single instruction executes.

---

## Targets

Targets are prebuilt mapping sets — a `hopper.json` fragment that fills in the common cases for a known platform. When you run:

```
hopper build --target=armv6-bare
```

The build system loads the `armv6-bare` target profile, which provides default mappings for `IO`, `Alloc`, `Strings`, and other common interfaces. User-defined mappings in `hopper.json` override any target default. The target fills in what you did not specify. You always win.

This means a bare-metal developer does not need to know which IO implementation is correct for their target. They set the target. The target knows. If they need a custom UART driver, they override just that one mapping and everything else stays resolved by the target.

---

## You Are Not Required to Use Any of It

The official interface collection is a convenience, not a requirement. You can define your own interfaces entirely, map your own implementations, and never reference anything Hopper ships.

A safety-critical project can define `FlightIO` with stricter contracts than the official `IO`. An embedded team can define their own `Alloc` that fits their memory model exactly. The compiler treats all of these identically. There is no privilege granted to the official collection.

```hopper
// your interface, your rules
interface FlightIO {
    function read(address buf, int len) int
        requires len > 0
        requires buf != 0
        ensures result >= -1
}
```

The compiler enforces your contracts with the same rigour it would enforce the official ones.

---

## Responsibilities

| Concern | Owner |
|---|---|
| Read source, produce binary | Compiler |
| Resolve target mappings | Build system |
| Fetch third-party implementations | Build system |
| Define interface contracts | Source code (`.hop` files) |
| Enforce interface compliance | Compiler |
| Select implementation per target | Build script (`hopper.json`) |

The compiler and build system do not overlap. Neither does the work of the other.

---

## Summary

- Interfaces are `.hop` files. They are source code. The compiler enforces them.
- Implementations are `.hop` files. They live wherever makes sense for your project.
- The build script maps interface names to concrete paths. It is the only place platform specificity lives.
- Targets are default mappings for known platforms. User configuration always overrides them.
- The compiler receives paths. It does not resolve names, fetch packages, or know what a target is.
- You can replace the entire official interface collection with your own. The language does not care.

Source code describes what a program does. The build script describes what it runs on. The compiler connects them.
