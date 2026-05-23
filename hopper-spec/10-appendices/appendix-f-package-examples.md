## Appendix F: Package (hopper.json) Examples

Complete `hopper.json` files for each project type. The manifest is the authoritative project identity document — it controls the build system, dependency resolution, and interface binding.

---

## Fields Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Project name. Used as the output binary name for executables. |
| `version` | string | Yes | Semantic version string (`"major.minor.patch"`). |
| `description` | string | Recommended | Human-readable description. |
| `license` | string | Recommended | SPDX license identifier (e.g., `"MIT"`, `"Apache-2.0"`). |
| `type` | string | Yes | `"executable"`, `"library"`, or `"program"` (bare-metal). |
| `entry` | string | Executables | Path to the entry point `.hop` file. |
| `main` | string | Bare-metal | Path to entry file for bare-metal `"program"` type. |
| `board` | string | Bare-metal | Target board identifier (e.g., `"pi-zero"`). |
| `dependencies` | object | When needed | Map of module name → version string. |
| `targets` | object | Executables | Maps target name → interface bindings. Usually one target: `"host"`. |
| `exports` | object | Libraries | Documents which interfaces the library provides (tooling/documentation only; not consumed by the build system). |

---

## Example 1: Executable with Linux IO and FileSystem Bindings

The standard shape for a Linux userspace program.

```json
{
  "name": "myprogram",
  "version": "0.1.0",
  "description": "A Linux userspace program",
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
      },
      "FileSystem": {
        "from":           "linux",
        "interface":      "modules/linux/interfaces/FileSystem.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop",
        "inline": true
      }
    }
  }
}
```

The `"inline": true` flag instructs the compiler to inline the implementations from `LinuxSyscalls.hop` rather than emitting them as external calls. Both `IO` and `FileSystem` resolve to the same implementation file; the build system handles the deduplication.

---

## Example 2: Executable with IO, FileSystem, and SIMD

A program that additionally uses x86_64 SIMD vector operations.

```json
{
  "name": "wc",
  "version": "0.1.0",
  "description": "Word, line, and byte counter",
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

To retarget this program to ARM64 Linux: change every `"modules/x86_64/..."` implementation path to `"modules/arm64/..."`. The source files and the `"from"` fields are unchanged.

---

## Example 3: Executable with All Seven Linux Interfaces

A program that uses IO, FileSystem, System, Process, Socket, Network, and Memory.

```json
{
  "name": "server",
  "version": "0.1.0",
  "description": "TCP server using all linux interfaces",
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
      },
      "FileSystem": {
        "from":           "linux",
        "interface":      "modules/linux/interfaces/FileSystem.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop",
        "inline": true
      },
      "System": {
        "from":           "linux",
        "interface":      "modules/linux/interfaces/System.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop",
        "inline": true
      },
      "Process": {
        "from":           "linux",
        "interface":      "modules/linux/interfaces/Process.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop",
        "inline": true
      },
      "Socket": {
        "from":           "linux",
        "interface":      "modules/linux/interfaces/Socket.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop",
        "inline": true
      },
      "Network": {
        "from":           "linux",
        "interface":      "modules/linux/interfaces/Network.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop",
        "inline": true
      },
      "Memory": {
        "from":           "linux",
        "interface":      "modules/linux/interfaces/Memory.hop",
        "implementation": "modules/x86_64/src/LinuxSyscalls.hop",
        "inline": true
      }
    }
  }
}
```

---

## Example 4: Library Exporting One Interface

A library is consumed by other projects. The `exports` field documents what it provides, but consuming projects must still declare the full binding in their own `targets`.

```json
{
  "name": "algo",
  "version": "0.1.0",
  "description": "Sorting algorithms with callback comparators",
  "license": "MIT",
  "type": "library",
  "exports": {
    "Algo": {
      "interface":      "interfaces/Algo.hop",
      "implementation": "src/Algo.hop"
    }
  }
}
```

A library with no `dependencies` and no `targets` is the minimal form. It declares only what it exports.

---

## Example 5: Library Exporting Multiple Interfaces

```json
{
  "name": "linux",
  "version": "0.1.0",
  "description": "Linux OS interfaces — IO, FileSystem, System, Process, Socket, Network, Memory",
  "license": "Apache-2.0",
  "type": "library",
  "exports": {
    "IO":         { "interface": "interfaces/IO.hop"         },
    "FileSystem": { "interface": "interfaces/FileSystem.hop" },
    "System":     { "interface": "interfaces/System.hop"     },
    "Process":    { "interface": "interfaces/Process.hop"    },
    "Socket":     { "interface": "interfaces/Socket.hop"     },
    "Network":    { "interface": "interfaces/Network.hop"    },
    "Memory":     { "interface": "interfaces/Memory.hop"     }
  }
}
```

The `linux` module is a pure interface library — no `implementation` paths in `exports`, because the implementation is hardware-specific and provided by the consuming project's `targets` binding (e.g., pointing to `x86_64/src/LinuxSyscalls.hop`).

---

## Example 6: Library with a Dependency

A library that itself depends on another module. The `targets` field in a library manifest lets the library build itself for testing.

```json
{
  "name": "json",
  "version": "0.1.0",
  "description": "JSON parser: recursive-descent reader producing a node tree",
  "license": "MIT",
  "type": "library",
  "dependencies": {},
  "exports": {
    "JSON": {
      "interface":      "interfaces/JSON.hop",
      "implementation": "src/JSON.hop"
    }
  },
  "targets": {
    "host": {
      "JSON": {
        "from":           "json",
        "interface":      "interfaces/JSON.hop",
        "implementation": "src/JSON.hop"
      },
      "Core": {
        "from":           "core",
        "interface":      "../core/interfaces/Core.hop",
        "implementation": "../core/src/Core.hop"
      }
    }
  }
}
```

The `targets.host` section in a library manifest is used by the build tool when compiling the library's own test programs. Consuming projects ignore the library's `targets` and declare their own bindings.

---

## Example 7: Library Exporting with Interface and Implementation

A library that includes both interface and implementation in its `exports` (the full form used when there is a concrete default implementation):

```json
{
  "name": "string",
  "version": "0.1.0",
  "description": "AsciiString: growable null-terminated UTF-8/ASCII string",
  "license": "MIT",
  "type": "library",
  "exports": {
    "IString": {
      "interface":      "interfaces/IString.hop",
      "implementation": "src/AsciiString.hop"
    }
  }
}
```

A consuming executable would add to its `targets.host`:

```json
"IString": {
  "from":           "string",
  "interface":      "modules/string/interfaces/IString.hop",
  "implementation": "modules/string/src/AsciiString.hop"
}
```

---

## Example 8: Bare-Metal Program

A bare-metal program has `"type": "program"` and a `"board"` field. No `dependencies` or `targets` — all hardware access is via `strict` declarations and `asm {}` blocks.

```json
{
  "name": "blink",
  "version": "0.1.0",
  "description": "Pi Zero ACT LED + UART blink — bare-metal Hopper demo",
  "license": "Apache-2.0",
  "type": "program",
  "board": "pi-zero",
  "main": "blink.hop",
  "flash": {
    "mount": null
  }
}
```

The `"flash"` field is hardware-specific tooling metadata, not interpreted by the compiler. The `"main"` field names the entry file directly (no `"entry"` or `src/` indirection).

---

## Binding Entry Structure

Each binding in `targets.<target>.<InterfaceName>` has these fields:

| Field | Required | Description |
|-------|----------|-------------|
| `"from"` | Yes | The module name that provides this interface (matches the `from` clause in `import X from Y`). |
| `"interface"` | Yes | Path to the `.hop` file declaring the interface (relative to the project root). |
| `"implementation"` | Yes | Path to the `.hop` file implementing the interface (relative to the project root). |
| `"inline"` | No | If `true`, instruct the compiler to inline implementations. Default: `false`. |
