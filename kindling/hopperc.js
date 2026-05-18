#!/usr/bin/env node
// hopperc.js — minimal Hopper→LLVM IR compiler driver.
//
// Usage:
//   node hopperc.js <file.hop>              print IR to stdout
//   node hopperc.js <file.hop> -o <out.ll>  write IR to file
//
// Called by the native hopper CLI binary to compile .hop files.

import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname }            from "node:path";
import { buildAstFromSource }          from "./src/astBuilder.js";
import { genModule }                   from "./src/codegenLLVM.js";

const args  = process.argv.slice(2);
const oIdx  = args.indexOf("-o");
const outFile = oIdx !== -1 ? args[oIdx + 1] : null;
const files   = args.filter((_, i) => oIdx === -1 || (i !== oIdx && i !== oIdx + 1));

if (files.length === 0) {
    process.stderr.write("hopperc: usage: hopperc.js <file.hop> [-o out.ll]\n");
    process.exit(1);
}

try {
    const file = files[0];
    const src  = readFileSync(file, "utf8");
    const ast  = buildAstFromSource(src, { baseDir: dirname(resolve(file)) });
    const ir   = genModule(ast);

    if (outFile) {
        writeFileSync(outFile, ir, "utf8");
    } else {
        process.stdout.write(ir);
    }
} catch (e) {
    process.stderr.write(`hopperc: ${e.message}\n`);
    process.exit(1);
}
