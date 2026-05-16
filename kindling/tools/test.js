#!/usr/bin/env node
/**
 * Hopper Test Runner
 *
 * Discovers tests from two locations:
 *   modules/<name>/tests/*.hop  — module tests, grouped by module name
 *   toolchain/tests/*.hop        — language/compiler tests
 *
 * Conventions inside each .hop test file:
 *   // EXPECT: <line>       — expected stdout line (one per expected line)
 *   // COMPILE_ONLY         — only verify the file compiles, don't run
 *   // EXPECT_ERROR: <msg>  — compilation should fail with a message containing <msg>
 *
 * Usage:
 *   node tools/test.js              — run all tests
 *   node tools/test.js linux        — run modules/linux/tests/ only
 *   node tools/test.js toolchain    — run toolchain/tests/ only
 */

import { readFileSync, mkdirSync, existsSync, readdirSync } from "fs";
import path from "path";
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const ROOT       = path.resolve(__dirname, "..", "..");
const BUILD_DIR  = path.join(ROOT, "build", "tests");

const G    = "\x1b[32m";
const R    = "\x1b[31m";
const Y    = "\x1b[33m";
const DIM  = "\x1b[2m";
const BOLD = "\x1b[1m";
const RST  = "\x1b[0m";

// ── Test discovery ─────────────────────────────────────────────────────────────

function discoverGroups(filter) {
    const groups = [];

    // modules/<name>/tests/*.hop
    const modulesDir = path.join(ROOT, "modules");
    if (existsSync(modulesDir)) {
        for (const mod of readdirSync(modulesDir).sort()) {
            if (filter && mod !== filter) continue;
            const testsDir = path.join(modulesDir, mod, "tests");
            if (!existsSync(testsDir)) continue;
            const files = readdirSync(testsDir)
                .filter(f => f.endsWith(".hop"))
                .sort()
                .map(f => path.join(testsDir, f));
            if (files.length) groups.push({ name: mod, files });
        }
    }

    // toolchain/tests/*.hop
    if (!filter || filter === "toolchain") {
        const toolchainDir = path.join(ROOT, "toolchain", "tests");
        if (existsSync(toolchainDir)) {
            const files = readdirSync(toolchainDir)
                .filter(f => f.endsWith(".hop"))
                .sort()
                .map(f => path.join(toolchainDir, f));
            if (files.length) groups.push({ name: "toolchain", files });
        }
    }

    return groups;
}

// ── Metadata parsing ───────────────────────────────────────────────────────────

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

// ── Run a single test ──────────────────────────────────────────────────────────

function runTest(testFile, group) {
    const name   = path.basename(testFile, ".hop");
    const source = readFileSync(testFile, "utf8");
    const { expected, compileOnly, expectedError } = parseMeta(source);
    const exePath = path.join(BUILD_DIR, `${group}__${name}`);

    const build = spawnSync(
        "node",
        ["kindling/hopper", "-c", testFile, "-o", exePath],
        { cwd: ROOT, encoding: "utf8" }
    );

    const compileFailed = build.status !== 0;
    const compileOutput = (build.stderr || "") + (build.stdout || "");

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

// ── Main ───────────────────────────────────────────────────────────────────────

if (!existsSync(BUILD_DIR)) mkdirSync(BUILD_DIR, { recursive: true });

const filter = process.argv[2] || null;
const groups = discoverGroups(filter);

if (groups.length === 0) {
    console.log(`${Y}no tests found${RST}${filter ? ` for "${filter}"` : ""}`);
    process.exit(0);
}

console.log(`\n${BOLD}Hopper Test Suite${RST}`);

let totalPass = 0;
let totalFail = 0;

for (const { name, files } of groups) {
    console.log(`\n${BOLD}${name}${RST}  ${DIM}(${files.length})${RST}`);
    console.log(`${DIM}${"─".repeat(50)}${RST}`);

    for (const f of files) {
        const result = runTest(f, name);
        const icon   = result.status === "PASS" ? `${G}✓${RST}` : `${R}✗${RST}`;
        const note   = result.note ? ` ${DIM}${result.note.split("\n")[0]}${RST}` : "";
        console.log(`  ${icon}  ${result.name}${note}`);

        if (result.status === "FAIL" && result.note.includes("\n")) {
            const detail = result.note.split("\n").slice(1).map(l => `       ${l}`).join("\n");
            console.log(`${R}${detail}${RST}`);
        }

        result.status === "PASS" ? totalPass++ : totalFail++;
    }
}

const total  = totalPass + totalFail;
const colour = totalFail === 0 ? G : R;
console.log(`\n${DIM}${"─".repeat(50)}${RST}`);
console.log(`${BOLD}${colour}${totalPass}/${total} passed${RST}`);
if (totalFail > 0) console.log(`${R}${totalFail} test${totalFail > 1 ? "s" : ""} failed${RST}`);
console.log();

process.exit(totalFail > 0 ? 1 : 0);
