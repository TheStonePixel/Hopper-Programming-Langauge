#!/usr/bin/env node
// Revert cast<type>(expr) → type (expr) — castType unary form
// cast<type>(expr) was a transitional syntax; casting now lives in modules/cast/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../../..');

// type token normalization: ANTLR getText() concatenates tokens
// source must preserve the multi-word forms
const TYPE_MAP = {
    'unsignedint':  'unsigned int',
    'unsignedbyte': 'unsigned byte',
};
function normalizeType(t) { return TYPE_MAP[t] || t; }

// Match cast<type>(expr) where expr may contain nested parens
// Returns array of {start, end, type, inner} for each match in text
function findCasts(text) {
    const results = [];
    let i = 0;
    while (i < text.length) {
        const idx = text.indexOf('cast<', i);
        if (idx === -1) break;
        // Find the closing > of the type parameter
        const gtIdx = text.indexOf('>', idx + 5);
        if (gtIdx === -1) { i = idx + 5; continue; }
        const rawType = text.slice(idx + 5, gtIdx).trim();
        // Expect '(' immediately after '>'
        let j = gtIdx + 1;
        while (j < text.length && text[j] === ' ') j++;
        if (text[j] !== '(') { i = idx + 5; continue; }
        // Find matching ')' — handle nested parens
        let depth = 1;
        let k = j + 1;
        while (k < text.length && depth > 0) {
            if (text[k] === '(') depth++;
            else if (text[k] === ')') depth--;
            k++;
        }
        if (depth !== 0) { i = idx + 5; continue; }
        const inner = text.slice(j + 1, k - 1);
        results.push({ start: idx, end: k, type: rawType, inner });
        i = k;
    }
    return results;
}

function transformText(text) {
    // Process in reverse so positions stay valid as we replace
    const matches = findCasts(text);
    if (matches.length === 0) return text;
    let result = text;
    for (let m = matches.length - 1; m >= 0; m--) {
        const { start, end, type: rawType, inner } = matches[m];
        const typeName = normalizeType(rawType);
        // Wrap inner in parens always — safe for precedence and handles
        // complex expressions like fn(x), a + b, obj.field, etc.
        const replacement = `${typeName} (${inner})`;
        result = result.slice(0, start) + replacement + result.slice(end);
    }
    return result;
}

function processFile(filePath) {
    const src = fs.readFileSync(filePath, 'utf8');
    if (!src.includes('cast<')) return false;
    const out = transformText(src);
    if (out === src) return false;
    fs.writeFileSync(filePath, out, 'utf8');
    return true;
}

function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walk(full);
        } else if (entry.name.endsWith('.hop')) {
            if (processFile(full)) console.log('migrated:', path.relative(ROOT, full));
        }
    }
}

const hopperDir = path.join(ROOT, 'hopper');
walk(hopperDir);
console.log('done');
