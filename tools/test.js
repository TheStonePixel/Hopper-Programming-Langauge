#!/usr/bin/env node
/**
 * Hopper Test Runner
 *
 * Convention inside each .hop test file:
 *
 *   // EXPECT: <line>       — expected stdout line (one per expected line)
 *   // COMPILE_ONLY         — only verify the file compiles, don't run
 *   // EXPECT_ERROR: <msg>  — compilation should fail with a message containing <msg>
 *
 * Usage:
 *   node tools/test.js              — run all tests
 *   node tools/test.js bitwise      — run tests whose filename contains "bitwise"
 */

import { readFileSync, mkdirSync, existsSync, readdirSync } from "fs";
import path from "path";
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const ROOT       = path.resolve(__dirname, "..");
const TESTS_DIR  = path.join(ROOT, "tests");
const BUILD_DIR  = path.join(ROOT, "build", "tests");

// ── ANSI colours ─────────────────────────────────────────────────────────────
const G    = "\x1b[32m";
const R    = "\x1b[31m";
const Y    = "\x1b[33m";
const DIM  = "\x1b[2m";
const BOLD = "\x1b[1m";
const RST  = "\x1b[0m";

// ── Parse metadata from test file comments ────────────────────────────────────
function parseMeta(source) {
    const expected      = [];
    let   compileOnly   = false;
    let   expectedError = null;

    for (const line of source.split("\n")) {
        const t = line.trim();
        if (t === "// COMPILE_ONLY")
            compileOnly = true;
        else if (t.startsWith("// EXPECT_ERROR:"))
            expectedError = t.slice("// EXPECT_ERROR:".length).trim();
        else if (t.startsWith("// EXPECT:"))
            expected.push(t.slice("// EXPECT:".length).trim());
    }

    return { expected, compileOnly, expectedError };
}

// ── Run a single test ─────────────────────────────────────────────────────────
function runTest(testFile) {
    const name   = path.basename(testFile, ".hop");
    const source = readFileSync(testFile, "utf8");
    const { expected, compileOnly, expectedError } = parseMeta(source);
    const exePath = path.join(BUILD_DIR, name);

    // Compile
    const build = spawnSync(
        "node",
        ["app.js", "build", testFile, "-o", exePath],
        { cwd: ROOT, encoding: "utf8" }
    );

    const compileFailed  = build.status !== 0;
    const compileOutput  = (build.stderr || "") + (build.stdout || "");

    if (compileFailed) {
        if (expectedError) {
            if (compileOutput.includes(expectedError))
                return { name, status: "PASS", note: `errored as expected` };
            return {
                name, status: "FAIL",
                note: `expected error "${expectedError}"\ngot: ${compileOutput.slice(0, 300)}`
            };
        }
        return { name, status: "FAIL", note: `compile failed:\n${compileOutput.slice(0, 400)}` };
    }

    if (expectedError)
        return { name, status: "FAIL", note: `expected compile error but compilation succeeded` };

    if (compileOnly)
        return { name, status: "PASS", note: "compile only" };

    // Run binary
    const run    = spawnSync(exePath, [], { encoding: "utf8" });
    const actual = (run.stdout || "").trimEnd();

    if (expected.length === 0)
        return { name, status: "PASS", note: "ran (no output check)" };

    const expectedStr = expected.join("\n");
    if (actual === expectedStr)
        return { name, status: "PASS" };

    return {
        name, status: "FAIL",
        note: `\nexpected:\n${expectedStr}\n\ngot:\n${actual}`
    };
}

// ── Main ──────────────────────────────────────────────────────────────────────
if (!existsSync(BUILD_DIR)) mkdirSync(BUILD_DIR, { recursive: true });

const filter = process.argv[2];

const files = readdirSync(TESTS_DIR)
    .filter(f => f.endsWith(".hop") && (!filter || f.includes(filter)))
    .map(f => path.join(TESTS_DIR, f))
    .sort();

if (files.length === 0) {
    console.log(`${Y}No test files found${RST}${filter ? ` matching "${filter}"` : ""}`);
    process.exit(0);
}

console.log(`\n${BOLD}Hopper Test Suite${RST}`);
console.log(`${DIM}${"─".repeat(50)}${RST}\n`);

const results = [];

for (const f of files) {
    const result = runTest(f);
    results.push(result);

    const icon  = result.status === "PASS" ? `${G}✓${RST}` : `${R}✗${RST}`;
    const note  = result.note   ? ` ${DIM}${result.note.split("\n")[0]}${RST}` : "";
    console.log(`  ${icon}  ${result.name}${note}`);

    if (result.status === "FAIL" && result.note.includes("\n")) {
        const detail = result.note.split("\n").slice(1).map(l => `       ${l}`).join("\n");
        console.log(`${R}${detail}${RST}`);
    }
}

// ── Summary ───────────────────────────────────────────────────────────────────
const passed = results.filter(r => r.status === "PASS").length;
const failed = results.filter(r => r.status === "FAIL").length;
const total  = results.length;

console.log(`\n${DIM}${"─".repeat(50)}${RST}`);
const colour = passed === total ? G : R;
console.log(`${BOLD}${colour}${passed}/${total} passed${RST}`);
if (failed > 0) console.log(`${R}${failed} test${failed > 1 ? "s" : ""} failed${RST}`);
console.log();

process.exit(failed > 0 ? 1 : 0);
