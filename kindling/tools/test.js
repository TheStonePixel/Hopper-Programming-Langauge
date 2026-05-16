#!/usr/bin/env node
/**
 * Hopper Test Runner
 *
 * Discovers tests from two locations:
 *   modules/<name>/tests/*.hop  — module tests, grouped by module name
 *   toolchain/tests/<group>/*.hop — language/compiler tests
 *
 * Conventions inside each .hop test file:
 *   // EXPECT: <line>       — expected stdout line (one per expected line)
 *   // COMPILE_ONLY         — only verify the file compiles, don't run
 *   // EXPECT_ERROR: <msg>  — compilation should fail with a message containing <msg>
 *
 * Usage:
 *   node tools/test.js              — run all tests
 *   node tools/test.js linux        — run modules/linux/tests/ only
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

    // toolchain/tests/<group>/*.hop
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
            } catch {
                // not a directory, skip
            }
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
//
// Returns:
//   { name, status, note, assertions: [{ label, status, got }] }
//
// status is "PASS" | "FAIL"
// assertions is empty for compile-only / no-output-check tests

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
                return { name, status: "PASS", note: "errored as expected", assertions: [
                    { label: `compile error: ${expectedError}`, status: "PASS" }
                ]};
            return { name, status: "FAIL",
                note: `expected error "${expectedError}"\ngot: ${compileOutput.slice(0, 300)}`,
                assertions: [{ label: `compile error: ${expectedError}`, status: "FAIL",
                    got: compileOutput.slice(0, 200) }]
            };
        }
        return { name, status: "FAIL",
            note: `compile failed:\n${compileOutput.slice(0, 400)}`,
            assertions: [{ label: "compile", status: "FAIL", got: compileOutput.slice(0, 200) }]
        };
    }

    if (expectedError)
        return { name, status: "FAIL", note: "expected compile error but compilation succeeded",
            assertions: [{ label: "compile error expected", status: "FAIL", got: "compiled ok" }]
        };

    if (compileOnly)
        return { name, status: "PASS", note: "compile only",
            assertions: [{ label: "compiles ok", status: "PASS" }]
        };

    const run         = spawnSync(exePath, [], { encoding: "utf8" });
    const actualLines = (run.stdout || "").trimEnd().split("\n").filter((_, i, a) =>
        !(i === a.length - 1 && a[i] === "")
    );

    if (expected.length === 0)
        return { name, status: "PASS", note: "ran (no output check)",
            assertions: [{ label: "ran ok", status: "PASS" }]
        };

    const assertions = expected.map((exp, i) => {
        const got = i < actualLines.length ? actualLines[i] : "(missing)";
        return { label: exp, status: got === exp ? "PASS" : "FAIL", got: got === exp ? null : got };
    });

    // flag any extra lines the program printed that weren't expected
    for (let i = expected.length; i < actualLines.length; i++) {
        assertions.push({ label: "(unexpected output)", status: "FAIL", got: actualLines[i] });
    }

    const allPass = assertions.every(a => a.status === "PASS");
    return { name, status: allPass ? "PASS" : "FAIL", assertions };
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
    const results = files.map(f => runTest(f, name));

    const filePass   = results.filter(r => r.status === "PASS").length;
    const fileFail   = results.filter(r => r.status === "FAIL").length;
    const assertPass = results.reduce((n, r) => n + r.assertions.filter(a => a.status === "PASS").length, 0);
    const assertFail = results.reduce((n, r) => n + r.assertions.filter(a => a.status === "FAIL").length, 0);
    const assertTotal = assertPass + assertFail;

    const groupOk = fileFail === 0;
    const groupColour = groupOk ? G : R;

    console.log(`\n${BOLD}${name}${RST}  ${DIM}${files.length} file${files.length !== 1 ? "s" : ""}, ${assertTotal} assertion${assertTotal !== 1 ? "s" : ""}${RST}`);
    console.log(`${DIM}${"─".repeat(50)}${RST}`);

    for (const result of results) {
        const fileIcon = result.status === "PASS" ? `${G}✓${RST}` : `${R}✗${RST}`;
        const aPass    = result.assertions.filter(a => a.status === "PASS").length;
        const aTotal   = result.assertions.length;
        const aColour  = aPass === aTotal ? G : R;
        const aNote    = result.note ? ` ${DIM}${result.note}${RST}` : `  ${DIM}${aColour}${aPass}/${aTotal}${RST}`;

        console.log(`  ${fileIcon}  ${result.name}${aNote}`);

        for (const a of result.assertions) {
            const icon = a.status === "PASS" ? `${G}✓${RST}` : `${R}✗${RST}`;
            if (a.status === "PASS") {
                console.log(`       ${icon}  ${DIM}${a.label}${RST}`);
            } else {
                console.log(`       ${icon}  ${R}${a.label}${RST}`);
                if (a.got != null)
                    console.log(`          ${DIM}got: ${a.got}${RST}`);
            }
        }

        totalPass += result.assertions.filter(a => a.status === "PASS").length;
        totalFail += result.assertions.filter(a => a.status === "FAIL").length;
    }
}

const total  = totalPass + totalFail;
const colour = totalFail === 0 ? G : R;
console.log(`\n${DIM}${"─".repeat(50)}${RST}`);
console.log(`${BOLD}${colour}${totalPass}/${total} passed${RST}`);
if (totalFail > 0) console.log(`${R}${totalFail} assertion${totalFail > 1 ? "s" : ""} failed${RST}`);
console.log();

process.exit(totalFail > 0 ? 1 : 0);
