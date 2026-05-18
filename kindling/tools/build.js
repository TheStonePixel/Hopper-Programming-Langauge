#!/usr/bin/env node
/**
 * Hopper Program Builder
 *
 * Compiles every .hop file in programs/ to an executable in build/programs/.
 *
 * Usage:
 *   node tools/build.js              — build all programs
 *   node tools/build.js battleship   — build programs whose filename contains "battleship"
 *
 * Via npm (from kindling/):
 *   npm run build                    — build all programs
 *   npm run build -- battleship      — build a specific program
 *   npm run run -- programs/battleship.hop   — compile and run one program
 */

import { readdirSync, mkdirSync, existsSync } from "fs";
import path from "path";
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const ROOT       = path.resolve(__dirname, "..", "..");
const PROGS_DIR  = path.join(ROOT, "programs");
const BUILD_DIR  = path.join(ROOT, "build", "programs");

// ── ANSI colours ─────────────────────────────────────────────────────────────
const G    = "\x1b[32m";
const R    = "\x1b[31m";
const Y    = "\x1b[33m";
const DIM  = "\x1b[2m";
const BOLD = "\x1b[1m";
const RST  = "\x1b[0m";

// ── Setup ─────────────────────────────────────────────────────────────────────
if (!existsSync(BUILD_DIR)) mkdirSync(BUILD_DIR, { recursive: true });

const filter = process.argv[2];

const files = readdirSync(PROGS_DIR)
    .filter(f => f.endsWith(".hop") && (!filter || f.includes(filter)))
    .map(f => path.join(PROGS_DIR, f))
    .sort();

if (files.length === 0) {
    console.log(`${Y}No program files found${RST}${filter ? ` matching "${filter}"` : ""}`);
    process.exit(0);
}

console.log(`\n${BOLD}Hopper Programs${RST}`);
console.log(`${DIM}${"─".repeat(50)}${RST}\n`);

let passed = 0;
let failed = 0;

for (const file of files) {
    const name    = path.basename(file, ".hop");
    const outPath = path.join(BUILD_DIR, name);

    const result = spawnSync(
        "node",
        ["kindling/hopper", "-c", file, "-o", outPath],
        { cwd: ROOT, encoding: "utf8" }
    );

    if (result.status === 0) {
        console.log(`  ${G}✓${RST}  ${name}  ${DIM}-> build/programs/${name}${RST}`);
        passed++;
    } else {
        const err = ((result.stderr || "") + (result.stdout || "")).trim();
        console.log(`  ${R}✗${RST}  ${name}`);
        for (const line of err.split("\n").slice(0, 4)) {
            if (line.trim()) console.log(`${R}       ${line}${RST}`);
        }
        failed++;
    }
}

// ── Summary ───────────────────────────────────────────────────────────────────
console.log(`\n${DIM}${"─".repeat(50)}${RST}`);
const colour = failed === 0 ? G : R;
console.log(`${BOLD}${colour}${passed}/${passed + failed} built${RST}\n`);

process.exit(failed > 0 ? 1 : 0);
