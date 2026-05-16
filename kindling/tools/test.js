#!/usr/bin/env node
/**
 * Hopper Test Runner
 *
 * Discovers tests from two locations:
 *   modules/<name>/tests/*.hop       — module tests, grouped by module name
 *   toolchain/tests/<group>/*.hop    — language/compiler tests
 *
 * Conventions inside each .hop test file:
 *   // TEST: name          — start a named section (groups following assertions)
 *   // EXPECT: <line>      — expected stdout line (one assertion per line)
 *   // COMPILE_ONLY        — only verify the file compiles, don't run
 *   // EXPECT_ERROR: <msg> — compilation should fail with a message containing <msg>
 *
 * Usage:
 *   node tools/test.js              — run all tests
 *   node tools/test.js ds           — run modules/ds/tests/ only
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
const DIM  = "\x1b[2m";
const BOLD = "\x1b[1m";
const RST  = "\x1b[0m";

// ── Test discovery ─────────────────────────────────────────────────────────────

function discoverGroups(filter) {
    const groups = [];

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

    const toolchainDir = path.join(ROOT, "toolchain", "tests");
    if (existsSync(toolchainDir)) {
        for (const group of readdirSync(toolchainDir).sort()) {
            if (filter && group !== filter) continue;
            const groupDir = path.join(toolchainDir, group);
            try {
                const files = readdirSync(groupDir)
                    .filter(f => f.endsWith(".hop"))
                    .sort()
                    .map(f => path.join(groupDir, f));
                if (files.length) groups.push({ name: group, files });
            } catch { /* not a directory */ }
        }
    }

    return groups;
}

// ── Metadata parsing ───────────────────────────────────────────────────────────
//
// Returns:
//   sections:      [{ name: string|null, expected: string[] }]
//   compileOnly:   bool
//   expectedError: string|null
//
// A null-named section holds any EXPECT lines that appear before the first TEST.

function parseMeta(source) {
    const sections     = [{ name: null, expected: [] }];
    let cur            = sections[0];
    let compileOnly    = false;
    let expectedError  = null;

    for (const line of source.split("\n")) {
        const t = line.trim();
        if (t === "// COMPILE_ONLY")
            compileOnly = true;
        else if (t.startsWith("// EXPECT_ERROR:"))
            expectedError = t.slice("// EXPECT_ERROR:".length).trim();
        else if (t.startsWith("// TEST:")) {
            cur = { name: t.slice("// TEST:".length).trim(), expected: [] };
            sections.push(cur);
        } else if (t.startsWith("// EXPECT:"))
            cur.expected.push(t.slice("// EXPECT:".length).trim());
    }

    return { sections, compileOnly, expectedError };
}

// ── Run a single test ──────────────────────────────────────────────────────────
//
// Returns:
//   { name, status, note?, sections: [{ name, assertions: [{label, status, got}] }] }

function runTest(testFile, group) {
    const name   = path.basename(testFile, ".hop");
    const source = readFileSync(testFile, "utf8");
    const { sections, compileOnly, expectedError } = parseMeta(source);
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
            const ok = compileOutput.includes(expectedError);
            return { name, status: ok ? "PASS" : "FAIL",
                sections: [{ name: null, assertions: [{
                    label: `compile error: ${expectedError}`,
                    status: ok ? "PASS" : "FAIL",
                    got:    ok ? null : compileOutput.slice(0, 200)
                }]}]
            };
        }
        return { name, status: "FAIL",
            sections: [{ name: null, assertions: [{
                label: "compile", status: "FAIL", got: compileOutput.slice(0, 200)
            }]}]
        };
    }

    if (expectedError)
        return { name, status: "FAIL",
            sections: [{ name: null, assertions: [{
                label: "compile error expected", status: "FAIL", got: "compiled ok"
            }]}]
        };

    if (compileOnly)
        return { name, status: "PASS", note: "compile only",
            sections: [{ name: null, assertions: [{ label: "compiles ok", status: "PASS" }] }]
        };

    const run         = spawnSync(exePath, [], { encoding: "utf8" });
    const actualLines = (run.stdout || "").trimEnd().split("\n");
    if (actualLines.length === 1 && actualLines[0] === "") actualLines.length = 0;

    const totalExpected = sections.reduce((n, s) => n + s.expected.length, 0);

    if (totalExpected === 0)
        return { name, status: "PASS", note: "ran (no output check)",
            sections: [{ name: null, assertions: [{ label: "ran ok", status: "PASS" }] }]
        };

    // Match actual output lines to sections in order.
    let lineIndex = 0;
    const resultSections = sections
        .filter(s => s.expected.length > 0)
        .map(s => {
            const assertions = s.expected.map(exp => {
                const got = lineIndex < actualLines.length ? actualLines[lineIndex++] : "(missing)";
                return { label: exp, status: got === exp ? "PASS" : "FAIL", got: got === exp ? null : got };
            });
            return { name: s.name, assertions };
        });

    // Any extra output lines the program produced beyond what was expected.
    while (lineIndex < actualLines.length) {
        const extra = actualLines[lineIndex++];
        if (extra === "") continue;
        if (!resultSections[resultSections.length - 1]) resultSections.push({ name: null, assertions: [] });
        resultSections[resultSections.length - 1].assertions.push(
            { label: "(unexpected output)", status: "FAIL", got: extra }
        );
    }

    const allPass = resultSections.every(s => s.assertions.every(a => a.status === "PASS"));
    return { name, status: allPass ? "PASS" : "FAIL", sections: resultSections };
}

// ── Display helpers ────────────────────────────────────────────────────────────

function countAssertions(result) {
    return result.sections.reduce((n, s) => n + s.assertions.length, 0);
}

function countPassed(result) {
    return result.sections.reduce((n, s) => n + s.assertions.filter(a => a.status === "PASS").length, 0);
}

// ── Main ───────────────────────────────────────────────────────────────────────

if (!existsSync(BUILD_DIR)) mkdirSync(BUILD_DIR, { recursive: true });

const filter = process.argv[2] || null;
const groups = discoverGroups(filter);

if (groups.length === 0) {
    console.log(`no tests found${filter ? ` for "${filter}"` : ""}`);
    process.exit(0);
}

console.log(`\n${BOLD}Hopper Test Suite${RST}`);

let totalPass = 0;
let totalFail = 0;

for (const { name, files } of groups) {
    const results    = files.map(f => runTest(f, name));
    const filePass   = results.filter(r => r.status === "PASS").length;
    const assertPass = results.reduce((n, r) => n + countPassed(r), 0);
    const assertTotal = results.reduce((n, r) => n + countAssertions(r), 0);

    console.log(`\n${BOLD}${name}${RST}  ${DIM}${files.length} file${files.length !== 1 ? "s" : ""}, ${assertTotal} assertion${assertTotal !== 1 ? "s" : ""}${RST}`);
    console.log(`${DIM}${"─".repeat(50)}${RST}`);

    for (const result of results) {
        const passed = countPassed(result);
        const total  = countAssertions(result);
        const fileIcon = result.status === "PASS" ? `${G}✓${RST}` : `${R}✗${RST}`;
        const countStr = result.note
            ? `  ${DIM}${result.note}${RST}`
            : `  ${DIM}${passed === total ? G : R}${passed}/${total}${RST}`;

        console.log(`  ${fileIcon}  ${result.name}${countStr}`);

        for (const section of result.sections) {
            if (section.name) {
                const sPass  = section.assertions.filter(a => a.status === "PASS").length;
                const sTotal = section.assertions.length;
                const sColour = sPass === sTotal ? G : R;
                console.log(`       ${DIM}${sColour}${section.name}${RST}  ${DIM}(${sPass}/${sTotal})${RST}`);
            }

            const indent = section.name ? "         " : "       ";
            for (const a of section.assertions) {
                const icon = a.status === "PASS" ? `${G}✓${RST}` : `${R}✗${RST}`;
                if (a.status === "PASS") {
                    console.log(`${indent}${icon}  ${DIM}${a.label}${RST}`);
                } else {
                    console.log(`${indent}${icon}  ${R}${a.label}${RST}`);
                    if (a.got != null)
                        console.log(`${indent}   ${DIM}got: ${a.got}${RST}`);
                }
            }
        }

        totalPass += countPassed(result);
        totalFail += total - countPassed(result);
    }
}

const total  = totalPass + totalFail;
const colour = totalFail === 0 ? G : R;
console.log(`\n${DIM}${"─".repeat(50)}${RST}`);
console.log(`${BOLD}${colour}${totalPass}/${total} passed${RST}`);
if (totalFail > 0) console.log(`${R}${totalFail} assertion${totalFail > 1 ? "s" : ""} failed${RST}`);
console.log();

process.exit(totalFail > 0 ? 1 : 0);
