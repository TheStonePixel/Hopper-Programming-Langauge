# Package Design Rationale

*This document is non-normative. It explains the nested `modules/` tree design and why it was chosen over alternatives.*

---

## The Decision

Dependencies in Hopper are stored as a nested tree of directories under `modules/` in each project. A project that depends on `linux` has a `modules/linux/` directory containing the linux package. If `linux` itself had dependencies, they would live in `modules/linux/modules/`. The folder tree mirrors the dependency graph exactly.

There is no flat lockfile, no shared global cache used at build time, and no dependency resolution algorithm that runs during compilation.

---

## Why a Nested Tree Instead of a Flat Lockfile

### The project is self-contained

The most important property of the nested tree design is that a project directory contains its complete dependency closure. Cloning the repository and running `hopper build` works. There is no additional step — no `npm install`, no `cargo fetch`, no "download the lockfile-specified versions." The source is the record. Everything needed to reproduce the build is in the working tree.

This matters in systems programming contexts where build reproducibility is a requirement, not a convenience. Firmware that cannot be rebuilt from its own repository is a liability.

### The structure is inspectable without tooling

Given a project, a developer can answer "what does this project depend on?" by listing `modules/`. They can answer "what does that dependency depend on?" by listing `modules/<dep>/modules/`. The entire graph is visible as a directory tree. No lock format, no registry query, no tooling invocation is needed to inspect it.

This is the same property that makes Hopper's hardware model inspectable: `hopper.json` targets are readable JSON, not compiled manifests. The build artifacts of the package system should be as readable as the source code.

### Nesting mirrors the dependency graph

In a flat global cache (npm's `node_modules` hoisting, Cargo's `~/.cargo/registry`), a project at version A and its dependency at version B may both depend on library C at different versions. Resolving this requires either version unification or multiple instances with complex deduplication logic.

In the nested tree, each package brings exactly the version of its dependencies that it was designed with. Version conflicts are not possible at the package level because each package's `modules/` subtree is independent. This is a stronger isolation guarantee than a flat cache provides.

### No network access required at build time

`hopper install` copies modules from the global store (`hopper/modules/`) into the project's `modules/` directory. Once installed, the project never needs the global store again. `hopper build` reads only the files in the working tree. This satisfies anti-goal AG8 — a build that requires fetching a package at compile time is not a Hopper build.

---

## The Trade-offs

### Disk space

Nested trees duplicate shared dependencies. If ten projects all depend on `linux`, each project has its own copy of `modules/linux/`. This is the same trade-off Docker images accept: repeatability and isolation are worth the storage cost.

The expected size of Hopper module dependencies is small. A typical module is a few hundred lines of source code. Duplication cost is negligible.

### Manual updates

Updating a dependency requires running `hopper install <name>` again in each project that uses it. There is no global "upgrade everything that uses `linux`" command. This is intentional — automatic transitive updates are a source of surprise behavior in large dependency graphs. Systems code should be updated deliberately, with the developer in control of when each dependency changes.

---

## The `hopper install` Mechanism

`hopper install <name>` reads the `dependencies` field of `hopper.json`, copies the requested module from the global module store into `modules/`, and recursively installs its transitive dependencies into `modules/<name>/modules/`. The result is a complete, nested dependency tree rooted at the project.

The global store (`hopper/modules/`) is a flat directory of known-good module versions. It is the source of truth for what packages exist. The project's `modules/` tree is the working copy — installed, versioned, and checked into source control alongside the project's own code.
