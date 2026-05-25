#!/usr/bin/env node
// migrate-cast.js — migrate old `cast expr` syntax to `cast<type>(expr)`
//
// Rules applied (in order):
//   A: `TYPE VAR = cast EXPR`          → `TYPE VAR = cast<TYPE>(EXPR)`
//   B: `unsigned TYPE VAR = cast EXPR` → `unsigned TYPE VAR = cast<unsigned TYPE>(EXPR)`
//   C: `callback(...) RET VAR = cast EXPR` → `callback(...) RET VAR = cast<address>(EXPR)`
//   D: reassignment `VAR = cast EXPR`  → `VAR = cast<TYPE>(EXPR)` using tracked decl type
//   E: `return cast EXPR`              → `return cast<RET_TYPE>(EXPR)` from enclosing function

import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// ── helpers ──────────────────────────────────────────────────────────────────

function findHopFiles(dir) {
    const results = [];
    function walk(d) {
        let entries;
        try { entries = fs.readdirSync(d, { withFileTypes: true }); }
        catch (e) { return; }
        for (const ent of entries) {
            const full = path.join(d, ent.name);
            if (ent.isDirectory()) { walk(full); }
            else if (ent.isFile() && ent.name.endsWith('.hop')) { results.push(full); }
        }
    }
    walk(dir);
    return results;
}

// Parse a "cast EXPR" tail: returns the rest of the line after `cast ` as the expression.
// We just take the rest of the line (trimmed) since Hopper casts are always to end of statement.
function parseCastExpr(after) {
    return after.trim();
}

// Migrate a single file. Returns { changed: bool, content: string }
function migrateFile(filePath) {
    const src = fs.readFileSync(filePath, 'utf8');
    const lines = src.split('\n');

    // Pass 1: build a map of varName → declaredType from all declarations in file.
    // We track these across the whole file (not scoped) since we just need best-effort.
    const varTypes = {};  // varName → type string (e.g. "int", "byte", "address")

    // Regex for declarations: `TYPE VAR = ...` (basic types)
    const basicTypes = ['int', 'byte', 'char', 'float', 'bool', 'address', 'string'];
    const basicDeclRe = /^\s*(int|byte|char|float|bool|address|string)\s+(\w+)\s*=/;
    const unsignedDeclRe = /^\s*(unsigned\s+(?:int|byte))\s+(\w+)\s*=/;

    for (const line of lines) {
        let m = line.match(basicDeclRe);
        if (m) { varTypes[m[2]] = m[1]; continue; }
        m = line.match(unsignedDeclRe);
        if (m) { varTypes[m[2]] = m[1].replace(/\s+/, ' '); continue; }
    }

    // Pass 2: track current function return type
    // function NAME(...) TYPE { — return type is last word before {
    // procedure has no return type.
    const funcSigRe = /^\s*function\s+\w+\s*\([^)]*\)\s+(\w+)\s*\{/;
    // Also handle multi-line sigs: we'll use a simple heuristic — if line has `function` keyword,
    // look for the type before `{` (same line only for simplicity)

    let changed = false;
    let currentReturnType = null;

    const newLines = lines.map((line, lineIdx) => {
        // Update current function return type
        const funcMatch = line.match(funcSigRe);
        if (funcMatch) {
            currentReturnType = funcMatch[1];
        }
        // Reset on closing brace at top-level (heuristic: line is just `}`)
        // Actually we don't need to reset since we overwrite on each function entry.

        // Skip lines that are pure comments
        const stripped = line.trimStart();
        if (stripped.startsWith('//')) return line;

        // Also skip if this line already has cast< (already migrated)
        if (line.includes('cast<')) return line;

        let result = line;

        // ── Rule B: unsigned type declaration ────────────────────────────────
        // `(\s*)(unsigned int|unsigned byte) (\w+) = cast (.+)`
        {
            const re = /^(\s*)(unsigned\s+(?:int|byte))\s+(\w+)\s*=\s*cast\s+(.+)$/;
            const m = result.match(re);
            if (m) {
                const indent = m[1];
                const typeName = m[2].replace(/\s+/, ' '); // normalise spaces
                const varName  = m[3];
                const expr     = m[4].trim();
                result = `${indent}${typeName} ${varName} = cast<${typeName}>(${expr})`;
                changed = true;
                return result;
            }
        }

        // ── Rule C: callback declaration ─────────────────────────────────────
        // `(\s*callback\([^)]*\)[^=]+=\s*)cast (\S+)`
        {
            const re = /^(\s*callback\([^)]*\)\s+\w+\s+\w+\s*=\s*)cast\s+(.+)$/;
            const m = result.match(re);
            if (m) {
                const prefix = m[1];
                const expr   = m[2].trim();
                result = `${prefix}cast<address>(${expr})`;
                changed = true;
                return result;
            }
        }

        // ── Rule A: basic type declaration ───────────────────────────────────
        // `(\s*)(int|byte|char|float|bool|address|string) (\w+) = cast (.+)`
        {
            const re = /^(\s*)(int|byte|char|float|bool|address|string)\s+(\w+)\s*=\s*cast\s+(.+)$/;
            const m = result.match(re);
            if (m) {
                const indent   = m[1];
                const typeName = m[2];
                const varName  = m[3];
                const expr     = m[4].trim();
                result = `${indent}${typeName} ${varName} = cast<${typeName}>(${expr})`;
                changed = true;
                return result;
            }
        }

        // ── Rule E: return cast ───────────────────────────────────────────────
        {
            const re = /^(\s*)return\s+cast\s+(.+)$/;
            const m = result.match(re);
            if (m) {
                const indent = m[1];
                const expr   = m[2].trim();
                if (currentReturnType) {
                    result = `${indent}return cast<${currentReturnType}>(${expr})`;
                    changed = true;
                }
                return result;
            }
        }

        // ── Rule D: reassignment cast ─────────────────────────────────────────
        // `(\s*)VARNAME = cast EXPR`  — no type prefix
        {
            const re = /^(\s*)(\w+)\s*=\s*cast\s+(.+)$/;
            const m = result.match(re);
            if (m) {
                const indent   = m[1];
                const varName  = m[2];
                const expr     = m[3].trim();
                const declType = varTypes[varName];
                if (declType) {
                    result = `${indent}${varName} = cast<${declType}>(${expr})`;
                    changed = true;
                }
                // else: leave unchanged
                return result;
            }
        }

        return result;
    });

    return { changed, content: newLines.join('\n') };
}

// ── main ─────────────────────────────────────────────────────────────────────

const rootDir = path.resolve(__dirname, '../../..', 'hopper');
console.log(`Scanning: ${rootDir}`);

const files = findHopFiles(rootDir);
// Exclude bootstrap directory
const filtered = files.filter(f => !f.includes('/bootstrap/'));

console.log(`Found ${files.length} .hop files (${files.length - filtered.length} bootstrap excluded)`);

let totalChanged = 0;
let totalRemaining = 0;

for (const f of filtered) {
    const { changed, content } = migrateFile(f);
    if (changed) {
        fs.writeFileSync(f, content, 'utf8');
        totalChanged++;
        // Count remaining casts in this file after migration
        const remaining = (content.match(/\bcast\b(?!<)/g) || []).length;
        if (remaining > 0) {
            // Filter out comment-only lines
            const commentFiltered = content.split('\n').filter(l => {
                const s = l.trimStart();
                return !s.startsWith('//') && /\bcast\b(?!<)/.test(l);
            }).length;
            if (commentFiltered > 0) {
                console.log(`  [WARN] ${f}: ${commentFiltered} bare cast(s) remain after migration`);
                totalRemaining += commentFiltered;
            }
        }
    }
}

console.log(`\nMigrated ${totalChanged} files.`);

// Final scan for any remaining bare casts (excluding comments)
let unmigratedFiles = [];
for (const f of filtered) {
    const content = fs.readFileSync(f, 'utf8');
    const unmigratedLines = content.split('\n').filter((l, i) => {
        const s = l.trimStart();
        return !s.startsWith('//') && /\bcast\b(?!<)/.test(l);
    });
    if (unmigratedLines.length > 0) {
        unmigratedFiles.push({ file: f, lines: unmigratedLines });
    }
}

if (unmigratedFiles.length > 0) {
    console.log('\n=== REMAINING bare cast usages (excluding comments) ===');
    for (const { file, lines } of unmigratedFiles) {
        console.log(`\n  ${file}:`);
        for (const l of lines) {
            console.log(`    ${l.trim()}`);
        }
    }
} else {
    console.log('No remaining bare cast usages (excluding comments). Migration complete!');
}
