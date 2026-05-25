#!/usr/bin/env node
/**
 * Compile and run a Hopper program.
 * Paths are resolved relative to the project root, not kindling/.
 *
 * Usage (from kindling/):
 *   npm run run -- programs/battleship.hop
 *   npm run run -- toolchain/tests/test_main.hop
 */

import path from "path";
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const ROOT       = path.resolve(__dirname, "..", "..", "..");

const file = process.argv[2];
if (!file) {
    console.error("Usage: npm run run -- <path/to/program.hop>");
    process.exit(1);
}

const absFile = path.resolve(ROOT, file);
const result  = spawnSync("node", [path.join(__dirname, "..", "hopper"), "-r", absFile], {
    cwd:   ROOT,
    stdio: "inherit",
});

process.exit(result.status ?? 1);
