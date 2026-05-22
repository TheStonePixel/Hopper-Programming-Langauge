#!/usr/bin/env node
/**
 * Hopper Test Runner
 *
 * Discovers tests from the current project (or a named module) only —
 * never the whole repo.
 *
 * Directives inside each .hop test file:
 *   // EXPECT: <line>      — expected stdout line
 *   // COMPILE_ONLY        — verify the file compiles; don't run it
 *   // EXPECT_ERROR: <msg> — compilation must fail with a message containing <msg>
 *   // TEST: name          — start a named section (groups following assertions)
 *   // XFAIL               — test is expected to fail (shown but not counted against total)
 *
 * Usage (via `hopper test`):
 *   hopper test                   run tests for the current module/project
 *   hopper test --deps            also run tests for every dependency in the chain
 *   hopper test <name>            run tests for a named module from the global store
 *   hopper test <name> --deps     named module + its dependency chain
 *
 * Direct usage:
 *   node tools/test.js --root=/path/to/project [--deps]
 *   node tools/test.js <moduleName> [--deps]
 */

import { readFileSync, mkdirSync, existsSync, readdirSync } from "fs";
import path from "path";
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const REPO_ROOT  = path.resolve(__dirname, "..", "..", "..");
const BUILD_DIR  = path.join(REPO_ROOT, "hopper", "build", "tests");
const GLOBAL_MODULES = path.join(REPO_ROOT, "hopper", "modules");

// ── ANSI ───────────────────────────────────────────────────────────────────────
const G    = "\x1b[32m";
const R    = "\x1b[31m";
const Y    = "\x1b[33m";
const C    = "\x1b[36m";
const DIM  = "\x1b[2m";
const BOLD = "\x1b[1m";
const RST  = "\x1b[0m";

const TICK   = "✓";
const CROSS  = "✗";
const CIRCLE = "○";
const DOT    = "·";
const ARROW  = "▸";
const PIPE   = "│";
const LINE   = "─".repeat(52);

// ── Argument parsing ───────────────────────────────────────────────────────────

let rootOverride = null;
let depsFlag     = false;
let nameFilter   = null;

for (const arg of process.argv.slice(2)) {
    if (arg.startsWith("--root="))  { rootOverride = arg.slice("--root=".length); continue; }
    if (arg === "--deps")           { depsFlag = true; continue; }
    if (!arg.startsWith("-"))       { nameFilter = arg; continue; }
}

// ── Test discovery ─────────────────────────────────────────────────────────────

// Collect tests for one project directory. If depsFlag is set, recurse into
// each dependency found in hopper.json, looking them up in the global store.
function collectProjectTests(rootDir, groups, visited) {
    const real = path.resolve(rootDir);
    if (visited.has(real)) return;
    visited.add(real);

    const name     = path.basename(real);
    const testsDir = path.join(real, "tests");

    if (existsSync(testsDir)) {
        const files = readdirSync(testsDir)
            .filter(f => f.endsWith(".hop"))
            .sort()
            .map(f => path.join(testsDir, f));
        if (files.length) groups.push({ name, files });
    }

    if (!depsFlag) return;

    const manifestPath = path.join(real, "hopper.json");
    if (!existsSync(manifestPath)) return;
    try {
        const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
        for (const depName of Object.keys(manifest.dependencies || {})) {
            const depDir = path.join(GLOBAL_MODULES, depName);
            if (existsSync(depDir)) collectProjectTests(depDir, groups, visited);
        }
    } catch { /* malformed hopper.json — skip deps */ }
}

function discoverGroups() {
    const groups  = [];
    const visited = new Set();

    if (rootOverride) {
        // Context-aware: tests for this specific project root
        if (!existsSync(rootOverride)) {
            console.error(`hopper test: project root not found: ${rootOverride}`);
            process.exit(1);
        }
        collectProjectTests(rootOverride, groups, visited);
        return groups;
    }

    if (nameFilter) {
        // Named module: look it up in the global module store
        const modDir = path.join(GLOBAL_MODULES, nameFilter);
        if (!existsSync(modDir)) {
            console.error(`hopper test: module '${nameFilter}' not found`);
            console.error(`  Available: ${readdirSync(GLOBAL_MODULES).filter(d =>
                existsSync(path.join(GLOBAL_MODULES, d, "hopper.json"))).join(", ")}`);
            process.exit(1);
        }
        collectProjectTests(modDir, groups, visited);
        return groups;
    }

    // No root and no name — user ran from outside any module
    console.error("hopper test: not inside a module or project directory");
    console.error("");
    console.error("  Run from a module/project directory:");
    console.error("    cd hopper/modules/linux && hopper test");
    console.error("");
    console.error("  Or specify a module name:");
    console.error("    hopper test linux");
    console.error("    hopper test linux --deps    (include dependency chain)");
    console.error("");
    if (existsSync(GLOBAL_MODULES)) {
        const mods = readdirSync(GLOBAL_MODULES).filter(d =>
            existsSync(path.join(GLOBAL_MODULES, d, "hopper.json")));
        if (mods.length) console.error(`  Available modules: ${mods.join(", ")}`);
    }
    process.exit(1);
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
        if      (t === "// COMPILE_ONLY")          compileOnly = true;
        else if (t === "// XFAIL")                 xfail = true;
        else if (t.startsWith("// EXPECT_ERROR:")) expectedError = t.slice("// EXPECT_ERROR:".length).trim();
        else if (t.startsWith("// TEST:")) {
            cur = { name: t.slice("// TEST:".length).trim(), expected: [] };
            sections.push(cur);
        } else if (t.startsWith("// EXPECT:")) {
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
        [path.join(__dirname, "..", "hopper"), "-c", testFile, "-o", exePath],
        { cwd: REPO_ROOT, encoding: "utf8" }
    );

    const compileFailed  = build.status !== 0;
    const compileOutput  = (build.stderr || "") + (build.stdout || "");

    if (compileFailed) {
        if (expectedError) {
            const ok = compileOutput.includes(expectedError);
            return { name, xfail, status: ok ? "PASS" : "FAIL",
                sections: [{ name: null, assertions: [{
                    label: `compile error: ${expectedError}`,
                    status: ok ? "PASS" : "FAIL",
                    received: ok ? null : compileOutput.slice(0, 300),
                }]}],
            };
        }
        return { name, xfail, status: "FAIL",
            sections: [{ name: null, assertions: [{
                label: "compile", status: "FAIL",
                received: compileOutput.slice(0, 300),
            }]}],
        };
    }

    if (expectedError)
        return { name, xfail, status: "FAIL",
            sections: [{ name: null, assertions: [{
                label: "compile error expected", status: "FAIL", received: "compiled ok",
            }]}],
        };

    if (compileOnly)
        return { name, xfail, status: "PASS", note: "compile only",
            sections: [{ name: null, assertions: [{ label: "compiles ok", status: "PASS" }] }],
        };

    const run         = spawnSync(exePath, [], { encoding: "utf8", cwd: REPO_ROOT });
    const actualLines = (run.stdout || "").trimEnd().split("\n");
    if (actualLines.length === 1 && actualLines[0] === "") actualLines.length = 0;

    const totalExpected = sections.reduce((n, s) => n + s.expected.length, 0);
    if (totalExpected === 0)
        return { name, xfail, status: "PASS", note: "ran (no output check)",
            sections: [{ name: null, assertions: [{ label: "ran ok", status: "PASS" }] }],
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
        process.stdout.write(`${indent}${DIM}${DOT}  ${a.label}${RST}\n`);
    } else {
        process.stdout.write(`${indent}${R}${CROSS}${RST}  ${BOLD}${R}${a.label}${RST}\n`);
        if (a.received != null) {
            for (const line of a.received.split("\n").filter(Boolean))
                process.stdout.write(`${indent}   ${DIM}${PIPE}${RST}  ${R}${line}${RST}\n`);
        }
    }
}

function renderResult(result, groupName, failures) {
    const passed = passedAssertions(result);
    const total  = totalAssertions(result);
    const allOk  = passed === total;

    let icon, nameStyle;
    if (result.xfail && !allOk)     { icon = `${Y}${CIRCLE}${RST}`; nameStyle = Y; }
    else if (result.xfail && allOk) { icon = `${Y}?${RST}`;         nameStyle = Y; }
    else if (allOk)                 { icon = `${G}${TICK}${RST}`;   nameStyle = G; }
    else                            { icon = `${R}${CROSS}${RST}`;  nameStyle = R; }

    const countStr = result.note ? `  ${DIM}${result.note}${RST}`
                   : allOk       ? `  ${DIM}${total}${RST}`
                   :               `  ${R}${passed}${DIM}/${total}${RST}`;

    process.stdout.write(`  ${icon}  ${nameStyle}${result.name}${RST}${countStr}\n`);

    for (const section of result.sections) {
        const sPass  = section.assertions.filter(a => a.status === "PASS").length;
        const sTotal = section.assertions.length;
        const sAllOk = sPass === sTotal;

        if (section.name) {
            const sCountStr = sAllOk ? `  ${DIM}${sTotal}${RST}` : `  ${R}${sPass}${DIM}/${sTotal}${RST}`;
            const sColour   = sAllOk ? `${DIM}${C}` : Y;
            process.stdout.write(`       ${sColour}${ARROW}  ${section.name}${RST}${sCountStr}\n`);
        }

        const indent = section.name ? "           " : "         ";
        for (const a of section.assertions) {
            renderAssertion(a, indent);
            if (a.status === "FAIL" && !result.xfail) {
                const loc = [groupName, result.name, section.name].filter(Boolean).join(" / ");
                failures.push({ path: loc, label: a.label, received: a.received });
            }
        }
    }
}

// ── Main ───────────────────────────────────────────────────────────────────────

if (!existsSync(BUILD_DIR)) mkdirSync(BUILD_DIR, { recursive: true });

const groups = discoverGroups();

if (groups.length === 0) {
    const loc = rootOverride || nameFilter || "(unknown)";
    process.stdout.write(`no tests found for ${loc}\n`);
    process.exit(0);
}

const depsNote = depsFlag ? `  ${DIM}(+ dependency chain)${RST}` : "";
process.stdout.write(`\n${BOLD}Hopper Test Suite${RST}${depsNote}\n\n`);

let totalPass  = 0;
let totalFail  = 0;
let totalXfail = 0;
const failures = [];

for (const { name, files } of groups) {
    process.stdout.write(`${BOLD}${name}${RST}  ${DIM}${files.length} file${files.length !== 1 ? "s" : ""}${RST}\n`);
    process.stdout.write(`${DIM}${LINE}${RST}\n`);

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

    const groupOk  = gPass === gTotal;
    const countStr = groupOk
        ? `${G}${gTotal} assertion${gTotal !== 1 ? "s" : ""} passed${RST}`
        : `${R}${gPass}/${gTotal} assertions passed${RST}`;
    process.stdout.write(`\n  ${DIM}${countStr}${RST}\n\n`);
}

// ── Summary ─────────────────────────────────────────────────────────────────────

const grandTotal = totalPass + totalFail;
const allGood    = totalFail === 0;

process.stdout.write(`${DIM}${LINE}${RST}\n`);

if (allGood) {
    const xfailNote = totalXfail > 0 ? `  ${DIM}${DOT}  ${totalXfail} expected failure${totalXfail !== 1 ? "s" : ""}${RST}` : "";
    process.stdout.write(`${BOLD}${G}${TICK}  ${totalPass}/${grandTotal} passed${RST}${xfailNote}\n`);
} else {
    process.stdout.write(`${BOLD}${R}${CROSS}  ${totalPass}/${grandTotal} passed  ${DOT}  ${totalFail} failed${RST}\n`);
}

if (failures.length > 0) {
    process.stdout.write(`\n${BOLD}Failures:${RST}\n\n`);
    for (const f of failures) {
        process.stdout.write(`  ${R}${CROSS}${RST}  ${DIM}${f.path}${RST}\n`);
        process.stdout.write(`       ${BOLD}${R}${f.label}${RST}\n`);
        if (f.received != null) {
            for (const line of f.received.split("\n").filter(Boolean))
                process.stdout.write(`       ${DIM}${PIPE}${RST}  ${R}${line}${RST}\n`);
        }
        process.stdout.write("\n");
    }
}

process.stdout.write("\n");
process.exit(totalFail > 0 ? 1 : 0);
