#!/usr/bin/env node
// hopperc.js — minimal Hopper→LLVM IR compiler driver.
//
// Usage:
//   node hopperc.js <file.hop>              print IR to stdout
//   node hopperc.js <file.hop> -o <out.ll>  write IR to file
//
// Called by the native hopper CLI binary to compile .hop files.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname, join }                  from "node:path";
import { buildAstFromSource }                      from "./src/astBuilder.js";
import { genModule }                               from "./src/codegenLLVM.js";
import { HopperError, HopperWarning, formatError } from "./src/errors.js";
import { getWarnings, getErrors }                  from "./src/codegenState.js";

const args    = process.argv.slice(2);
const oIdx    = args.indexOf("-o");
const outFile = oIdx !== -1 ? args[oIdx + 1] : null;
const tIdx    = args.findIndex(a => a.startsWith("--target="));
const target  = tIdx !== -1 ? args[tIdx].slice("--target=".length) : "host";
const release = args.includes("--release");
const strict  = args.includes("--strict");
const files   = args.filter((_, i) =>
    (oIdx === -1 || (i !== oIdx && i !== oIdx + 1)) &&
    i !== tIdx &&
    args[i] !== "--release" &&
    args[i] !== "--strict"
);

if (files.length === 0) {
    process.stderr.write("hopperc: usage: hopperc.js <file.hop> [--target=armv6-bare] [--release] [--strict] [-o out.ll]\n");
    process.exit(1);
}

// Walk up from dir to find hopper.json; return resolved bindings for the target or empty Map.
function loadBindings(sourceFile, target) {
    let dir = dirname(resolve(sourceFile));
    while (true) {
        const candidate = join(dir, "hopper.json");
        if (existsSync(candidate)) {
            try {
                const config = JSON.parse(readFileSync(candidate, "utf8"));
                const targetBindings = (config.targets || {})[target] || {};
                const bindings = new Map();
                for (const [name, b] of Object.entries(targetBindings)) {
                    bindings.set(name, {
                        from:           b.from || null,
                        interface:      resolve(dir, b.interface),
                        implementation: resolve(dir, b.implementation),
                    });
                }
                return bindings;
            } catch { /* malformed hopper.json — skip */ }
        }
        const parent = dirname(dir);
        if (parent === dir) break;
        dir = parent;
    }
    return new Map();
}

try {
    const file     = files[0];
    const src      = readFileSync(file, "utf8");
    const bindings = loadBindings(file, target);
    const ast      = buildAstFromSource(src, { baseDir: dirname(resolve(file)), bindings, sourceFile: file });
    const ir       = genModule(ast, { target, release, strict });

    const ws   = getWarnings();
    const errs = getErrors();
    for (const d of [...ws, ...errs]) process.stderr.write(formatError(d));
    if (ws.length > 0 || errs.length > 0) process.exit(1);

    if (outFile) {
        writeFileSync(outFile, ir, "utf8");
    } else {
        process.stdout.write(ir);
    }
} catch (e) {
    if (e instanceof HopperError) {
        for (const d of [...getWarnings(), ...getErrors()]) process.stderr.write(formatError(d));
        process.stderr.write(formatError(e));
    } else {
        process.stderr.write(`hopperc: ${e.message}\n`);
    }
    process.exit(1);
}
