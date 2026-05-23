## Appendix E: Build Examples

Concrete, complete examples of project setups. Each example shows the files that need to exist and the commands to build and run the project.

For all examples, `hopper` refers to the CLI at `seed/build_system/hopper`. If it is not globally installed, invoke it as `node seed/build_system/hopper`.

---

## Example 1: Minimal Hello World Executable

A program that writes `"hello, world\n"` to stdout using the Linux IO interface.

### Directory structure

```
hello/
  hopper.json
  src/
    main.hop
  modules/          (populated by hopper install)
```

### hopper.json

```json
{
  "name": "hello",
  "version": "0.1.0",
  "description": "Hello world using the linux IO interface",
  "license": "MIT",
  "type": "executable",
  "entry": "src/main.hop",
  "dependencies": {
    "linux": "0.1.0",
    "x86_64": "0.1.0"
  },
  "targets": {
    "host": {
      "IO": {
        "from":           "linux",
        "interface":      "modules/linux/interfaces/IO.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop",
        "inline": true
      }
    }
  }
}
```

### src/main.hop

```hopper
import IO from linux

entry main {
    string msg = "hello, world\n"
    write(1, msg, 13)
}
```

`write` is a free function that comes into scope from `LinuxSyscalls.hop` when the `IO` binding is resolved. The first argument is the file descriptor (1 = stdout). The third argument is the byte count.

### Build and run

```bash
hopper init hello --yes --type=executable
# (edit hopper.json and src/main.hop as above)
hopper install
hopper build
hopper run
```

---

## Example 2: Entry Point with Arguments

Reading a command-line argument and writing it to stdout.

### src/main.hop

```hopper
import IO from linux

entry main(int argc, string[] argv) {
    if (argc < 2) {
        write(1, "usage: greet <name>\n", 20)
        return
    }
    string name = argv[1]
    write(1, "hello, ", 7)
    // find length of name (no strlen in scope — write a loop or use FileSystem)
    int i = 0
    while (name[i] != 0) {
        i = i + 1
    }
    write(1, name, i)
    write(1, "\n", 1)
}
```

### hopper.json

Same as Example 1. `string[]` is the type of `argv` (maps to `i8**`).

---

## Example 3: Minimal Library

A library that exports one interface.

### Directory structure

```
mymath/
  hopper.json
  interfaces/
    IMath.hop
  src/
    Math.hop
```

### hopper.json

```json
{
  "name": "mymath",
  "version": "0.1.0",
  "description": "Integer math utilities",
  "license": "MIT",
  "type": "library",
  "exports": {
    "IMath": {
      "interface":      "interfaces/IMath.hop",
      "implementation": "src/Math.hop"
    }
  }
}
```

### interfaces/IMath.hop

```hopper
interface IMath {
    function abs(int x) int
    function max(int a, int b) int
    function min(int a, int b) int
    function clamp(int x, int lo, int hi) int
}
```

### src/Math.hop

```hopper
class Math implements IMath {
    function abs(int x) int {
        if (x < 0) {
            return -x
        }
        return x
    }

    function max(int a, int b) int {
        if (a > b) {
            return a
        }
        return b
    }

    function min(int a, int b) int {
        if (a < b) {
            return a
        }
        return b
    }

    function clamp(int x, int lo, int hi) int {
        if (x < lo) {
            return lo
        }
        if (x > hi) {
            return hi
        }
        return x
    }
}
```

### Scaffold

```bash
hopper init mymath --yes --type=library --description="Integer math utilities"
# create interfaces/IMath.hop and src/Math.hop as above
```

---

## Example 4: Executable with a Library Dependency

A program that depends on `mymath` from Example 3.

### hopper.json

```json
{
  "name": "calculator",
  "version": "0.1.0",
  "description": "Demo using mymath library",
  "license": "MIT",
  "type": "executable",
  "entry": "src/main.hop",
  "dependencies": {
    "linux": "0.1.0",
    "x86_64": "0.1.0",
    "mymath": "0.1.0"
  },
  "targets": {
    "host": {
      "IO": {
        "from":           "linux",
        "interface":      "modules/linux/interfaces/IO.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop",
        "inline": true
      },
      "IMath": {
        "from":           "mymath",
        "interface":      "modules/mymath/interfaces/IMath.hop",
        "implementation": "modules/mymath/src/Math.hop"
      }
    }
  }
}
```

### src/main.hop

```hopper
import IO    from linux
import IMath from mymath

entry main {
    Math m = Math()
    int result = m.clamp(42, 0, 10)
    // result == 10
}
```

### Install and build

```bash
hopper install        // copies linux, x86_64, mymath into modules/
hopper build
hopper run
```

`hopper install` copies each dependency from the global store into `modules/`, nesting each dependency's own dependencies inside its own `modules/` subdirectory.

---

## Example 5: Using the Cast Module

The `cast` module provides the `cast<T>(expr)` template function for explicit type conversions.

### hopper.json (additions)

```json
{
  "dependencies": {
    "linux":  "0.1.0",
    "x86_64": "0.1.0",
    "cast":   "0.1.0"
  },
  "targets": {
    "host": {
      "IO": { ... },
      "Cast": {
        "from":           "cast",
        "interface":      "modules/cast/interfaces/Cast.hop",
        "implementation": "modules/cast/src/Cast.hop"
      }
    }
  }
}
```

### src/main.hop

```hopper
import IO   from linux
import Cast from cast

entry main {
    float pi = 3.14159
    int   n  = cast<int>(pi)       // n == 3 (truncation)
    float f  = cast<float>(7)      // f == 7.0
    address p = cast<address>(0)   // null pointer from integer
}
```

### Install

```bash
hopper install cast
hopper build
```

`hopper install cast` installs `cast` and any transitive dependencies into `modules/cast/`.

---

## Example 6: Bare-Metal Pi Zero (No OS)

A bare-metal program for the Raspberry Pi Zero. No Linux, no syscalls — hardware registers accessed directly via `strict` declarations and inline assembly.

### hopper.json

```json
{
  "name": "blink",
  "version": "0.1.0",
  "description": "Pi Zero ACT LED blink — bare-metal Hopper demo",
  "license": "Apache-2.0",
  "type": "program",
  "board": "pi-zero",
  "main": "blink.hop"
}
```

Note: bare-metal projects use `"type": "program"` and a `"board"` field rather than the standard executable format. The `"main"` field names the entry file directly (no `src/` indirection). There are no `dependencies` or `targets` — all hardware access is via `strict` and `asm {}`.

### blink.hop

```hopper
// BCM2835 GPIO registers
strict int GPFSEL4 = 0x20200010   // function select for GPIO 40-49
strict int GPSET1  = 0x20200024   // set bank 1 (GPIO 32-63)
strict int GPCLR1  = 0x20200030   // clear bank 1 (GPIO 32-63)

function delay(int n) {
    int i = 0
    while (i < n) {
        i = i + 1
    }
}

entry main {
    // Set GPIO47 as output (ACT LED): bits [23:21] = 001
    GPFSEL4 = 2097152        // 1 << 21

    bool on = true
    while (true) {
        if (on) {
            GPSET1 = 32768   // set GPIO47 (1 << 15)
        } else {
            GPCLR1 = 32768   // clear GPIO47
        }
        delay(500000)
        on = !on
    }
}
```

`strict int NAME = 0xADDR` declares `NAME` as a named alias for the hardware register at address `0xADDR`. Assignment to `NAME` writes to the register; reading `NAME` reads from it.

---

## Example 7: SIMD-Enabled Executable

A program using the x86_64 SIMD interface for vectorized byte scanning.

### hopper.json

```json
{
  "name": "scanner",
  "version": "0.1.0",
  "description": "SIMD byte scanner",
  "license": "MIT",
  "type": "executable",
  "entry": "src/main.hop",
  "dependencies": {
    "linux":  "0.1.0",
    "x86_64": "0.1.0"
  },
  "targets": {
    "host": {
      "IO": {
        "from":           "linux",
        "interface":      "modules/linux/interfaces/IO.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop",
        "inline": true
      },
      "FileSystem": {
        "from":           "linux",
        "interface":      "modules/linux/interfaces/FileSystem.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop",
        "inline": true
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

### src/main.hop

```hopper
import IO         from linux
import FileSystem from linux
import SIMD       from x86_64

function countNewlines(address buf, int len) int {
    X86SIMD simd = X86SIMD()
    int count = 0
    int i = 0
    while (i + 16 <= len) {
        int mask = simd.scanByte16(buf + i, 10)   // 10 = '\n'
        count = count + simd.popcnt16(mask)
        i = i + 16
    }
    // scalar tail
    while (i < len) {
        if (buf[i] == 10) {
            count = count + 1
        }
        i = i + 1
    }
    return count
}

entry main {
    // ... open file, read buffer, call countNewlines ...
}
```

`X86SIMD` is the class defined in `modules/x86_64/src/SIMD.hop` that implements the `SIMD` interface. Programs instantiate it directly and call methods on the instance. No `asm {}` blocks appear in program source.
