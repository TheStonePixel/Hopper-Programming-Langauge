#!/usr/bin/env node
/**
 * Hopper Test Runner
 *
 * Discovers tests from two locations:
 *   modules/<name>/tests/*.hop       — module tests, grouped by module name
 *   toolchain/tests/<group>/*.hop    — language/compiler tests
 *
 * Directives inside each .hop test file:
 *   // TEST: name          — start a named section (groups following assertions)
 *   // EXPECT: <line>      — expected stdout line (one assertion per line)
 *   // COMPILE_ONLY        — only verify the file compiles, don't run
 *   // EXPECT_ERROR: <msg> — compilation should fail with a message containing <msg>
 *   // XFAIL               — test is expected to fail (shown but not counted against total)
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

// ── ANSI ───────────────────────────────────────────────────────────────────────
const G    = "\x1b[32m";
const R    = "\x1b[31m";
const Y    = "\x1b[33m";
const C    = "\x1b[36m";
const DIM  = "\x1b[2m";
const BOLD = "\x1b[1m";
const RST  = "\x1b[0m";

// ── Symbols ────────────────────────────────────────────────────────────────────
const TICK   = "✓";
const CROSS  = "✗";
const CIRCLE = "○";
const DOT    = "·";
const ARROW  = "▸";
const PIPE   = "│";
const LINE   = "─".repeat(52);

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

function parseMeta(source) {
    const sections    = [{ name: null, expected: [] }];
    let cur           = sections[0];
    let compileOnly   = false;
    let expectedError = null;
    let xfail         = false;

    for (const line of source.split("\n")) {
        const t = line.trim();
        if      (t === "// COMPILE_ONLY")        compileOnly = true;
        else if (t === "// XFAIL")               xfail = true;
        else if (t.startsWith("// EXPECT_ERROR:"))
            expectedError = t.slice("// EXPECT_ERROR:".length).trim();
        else if (t.startsWith("// TEST:")) {
            cur = { name: t.slice("// TEST:".length).trim(), expected: [] };
            sections.push(cur);
        } else if (t.startsWith("// EXPECT:")) {
            // Strip exactly one space (the directive delimiter), preserving any
            // additional leading spaces that are part of the expected value itself.
            const raw = t.slice("// EXPECT:".length);
            cur.expected.push(raw.startsWith(" ") ? raw.slice(1) : raw.trimStart());
        }
    }

    return { sections, compileOnly, expectedError, xfail };
}

// ── Run a single test ──────────────────────────────────────────────────────────

function runTest(testFile, group) {
    const name   = path.basename(testFile, ".hop");
    const source = readFileSync(testFile, "utf8");
    const { sections, compileOnly, expectedError, xfail } = parseMeta(source);
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
            return { name, xfail, status: ok ? "PASS" : "FAIL",
                sections: [{ name: null, assertions: [{
                    label: `compile error: ${expectedError}`,
                    status: ok ? "PASS" : "FAIL",
                    received: ok ? null : compileOutput.slice(0, 300)
                }]}]
            };
        }
        return { name, xfail, status: "FAIL",
            sections: [{ name: null, assertions: [{
                label: "compile", status: "FAIL",
                received: compileOutput.slice(0, 300)
            }]}]
        };
    }

    if (expectedError)
        return { name, xfail, status: "FAIL",
            sections: [{ name: null, assertions: [{
                label: "compile error expected", status: "FAIL", received: "compiled ok"
            }]}]
        };

    if (compileOnly)
        return { name, xfail, status: "PASS", note: "compile only",
            sections: [{ name: null, assertions: [{ label: "compiles ok", status: "PASS" }] }]
        };

    const run         = spawnSync(exePath, [], { encoding: "utf8", cwd: ROOT });
    const actualLines = (run.stdout || "").trimEnd().split("\n");
    if (actualLines.length === 1 && actualLines[0] === "") actualLines.length = 0;

    const totalExpected = sections.reduce((n, s) => n + s.expected.length, 0);
    if (totalExpected === 0)
        return { name, xfail, status: "PASS", note: "ran (no output check)",
            sections: [{ name: null, assertions: [{ label: "ran ok", status: "PASS" }] }]
        };

    let lineIndex = 0;
    const resultSections = sections
        .filter(s => s.expected.length > 0)
        .map(s => {
            const assertions = s.expected.map(exp => {
                const got = lineIndex < actualLines.length ? actualLines[lineIndex++].trimEnd() : "(missing)";
                return { label: exp, status: got === exp ? "PASS" : "FAIL",
                    received: got === exp ? null : got };
            });
            return { name: s.name, assertions };
        });

    while (lineIndex < actualLines.length) {
        const extra = actualLines[lineIndex++];
        if (extra === "") continue;
        const last = resultSections[resultSections.length - 1];
        if (last) last.assertions.push({ label: "(unexpected output)", status: "FAIL", received: extra });
    }

    const allPass = resultSections.every(s => s.assertions.every(a => a.status === "PASS"));
    return { name, xfail, status: allPass ? "PASS" : "FAIL", sections: resultSections };
}

// ── Counts ─────────────────────────────────────────────────────────────────────

function totalAssertions(result) {
    return result.sections.reduce((n, s) => n + s.assertions.length, 0);
}
function passedAssertions(result) {
    return result.sections.reduce((n, s) => n + s.assertions.filter(a => a.status === "PASS").length, 0);
}

// ── Render ─────────────────────────────────────────────────────────────────────

function renderAssertion(a, indent) {
    if (a.status === "PASS") {
        console.log(`${indent}${DIM}${DOT}  ${a.label}${RST}`);
    } else {
        console.log(`${indent}${R}${CROSS}${RST}  ${BOLD}${R}${a.label}${RST}`);
        if (a.received != null) {
            for (const line of a.received.split("\n").filter(Boolean)) {
                console.log(`${indent}   ${DIM}${PIPE}${RST}  ${R}${line}${RST}`);
            }
        }
    }
}

function renderResult(result, groupName, failures) {
    const passed = passedAssertions(result);
    const total  = totalAssertions(result);
    const allOk  = passed === total;

    let icon, nameStyle;
    if (result.xfail && !allOk)      { icon = `${Y}${CIRCLE}${RST}`; nameStyle = Y; }
    else if (result.xfail && allOk)  { icon = `${Y}?${RST}`;         nameStyle = Y; } // unexpected pass
    else if (allOk)                  { icon = `${G}${TICK}${RST}`;   nameStyle = G; }
    else                             { icon = `${R}${CROSS}${RST}`;  nameStyle = R; }

    const countStr = result.note    ? `  ${DIM}${result.note}${RST}`
                   : allOk          ? `  ${DIM}${total}${RST}`
                   :                  `  ${R}${passed}${DIM}/${total}${RST}`;

    if (result.xfail && !allOk) {
        console.log(`  ${icon}  ${nameStyle}${result.name}${RST}${countStr}  ${DIM}expected failure${RST}`);
    } else {
        console.log(`  ${icon}  ${nameStyle}${result.name}${RST}${countStr}`);
    }

    for (const section of result.sections) {
        const sPass  = section.assertions.filter(a => a.status === "PASS").length;
        const sTotal = section.assertions.length;
        const sAllOk = sPass === sTotal;

        if (section.name) {
            const sCountStr = sAllOk ? `  ${DIM}${sTotal}${RST}` : `  ${R}${sPass}${DIM}/${sTotal}${RST}`;
            const sColour   = sAllOk ? `${DIM}${C}` : Y;
            console.log(`       ${sColour}${ARROW}  ${section.name}${RST}${sCountStr}`);
        }

        const indent = section.name ? "           " : "         ";
        for (const a of section.assertions) {
            renderAssertion(a, indent);

            if (a.status === "FAIL" && !result.xfail) {
                const path = [groupName, result.name, section.name].filter(Boolean).join(" / ");
                failures.push({ path, label: a.label, received: a.received });
            }
        }
    }
}

// ── Main ───────────────────────────────────────────────────────────────────────

if (!existsSync(BUILD_DIR)) mkdirSync(BUILD_DIR, { recursive: true });

const filter = process.argv[2] || null;
const groups = discoverGroups(filter);

if (groups.length === 0) {
    console.log(`no tests found${filter ? ` for "${filter}"` : ""}`);
    process.exit(0);
}

console.log(`\n${BOLD}Hopper Test Suite${RST}\n`);

let totalPass  = 0;
let totalFail  = 0;
let totalXfail = 0;
const failures = [];

for (const { name, files } of groups) {
    console.log(`${BOLD}${name}${RST}  ${DIM}${files.length} file${files.length !== 1 ? "s" : ""}${RST}`);
    console.log(`${DIM}${LINE}${RST}`);

    let gPass = 0, gTotal = 0;

    for (const f of files) {
        const result = runTest(f, name);
        renderResult(result, name, failures);

        const p = passedAssertions(result);
        const t = totalAssertions(result);
        gPass  += p;
        gTotal += t;

        if (result.xfail && result.status === "FAIL") {
            totalXfail++;
        } else {
            totalPass += p;
            totalFail += t - p;
        }
    }

    const groupOk    = gPass === gTotal;
    const countStr   = groupOk
        ? `${G}${gTotal} assertion${gTotal !== 1 ? "s" : ""} passed${RST}`
        : `${R}${gPass}/${gTotal} assertions passed${RST}`;
    console.log(`\n  ${DIM}${countStr}${RST}`);
    console.log();
}

// ── Summary ─────────────────────────────────────────────────────────────────────

const grandTotal = totalPass + totalFail;
const allGood    = totalFail === 0;

console.log(`${DIM}${LINE}${RST}`);

if (allGood) {
    const xfailNote = totalXfail > 0 ? `  ${DIM}${DOT}  ${totalXfail} expected failure${totalXfail !== 1 ? "s" : ""}${RST}` : "";
    console.log(`${BOLD}${G}${TICK}  ${totalPass}/${grandTotal} passed${RST}${xfailNote}`);
} else {
    console.log(`${BOLD}${R}${CROSS}  ${totalPass}/${grandTotal} passed  ${DOT}  ${totalFail} failed${RST}`);
}

if (failures.length > 0) {
    console.log(`\n${BOLD}Failures:${RST}\n`);
    for (const f of failures) {
        console.log(`  ${R}${CROSS}${RST}  ${DIM}${f.path}${RST}`);
        console.log(`       ${BOLD}${R}${f.label}${RST}`);
        if (f.received != null) {
            for (const line of f.received.split("\n").filter(Boolean))
                console.log(`       ${DIM}${PIPE}${RST}  ${R}${line}${RST}`);
        }
        console.log();
    }
}

console.log();
process.exit(totalFail > 0 ? 1 : 0);
