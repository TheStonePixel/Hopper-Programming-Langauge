#!/usr/bin/env node
/**
 * Install the Hopper VS Code extension into the correct extensions directory.
 *
 * - Standard VS Code (Linux/Mac):  ~/.vscode/extensions/
 * - VS Code Remote WSL:            ~/.vscode-server/extensions/
 * - VS Code Remote SSH:            ~/.vscode-server/extensions/
 *
 * Usage: npm run install:ext
 */

import { readFileSync, existsSync, mkdirSync, cpSync } from "fs";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const ROOT       = path.resolve(__dirname, "..", "..");
const SRC        = path.join(ROOT, "extensions", "hopper-vscode");
const HOME       = os.homedir();
const EXT_NAME   = "hopper-language-0.1.0";

const G   = "\x1b[32m";
const R   = "\x1b[31m";
const DIM = "\x1b[2m";
const RST = "\x1b[0m";

function isWSL() {
    try {
        const v = readFileSync("/proc/version", "utf8").toLowerCase();
        return v.includes("microsoft") || v.includes("wsl");
    } catch {
        return false;
    }
}

function pickExtDir() {
    // VS Code Server (WSL / Remote SSH) takes priority when present
    const server = path.join(HOME, ".vscode-server", "extensions");
    if (existsSync(path.join(HOME, ".vscode-server")) || isWSL()) {
        return server;
    }
    return path.join(HOME, ".vscode", "extensions");
}

const extDir = pickExtDir();
const dest   = path.join(extDir, EXT_NAME);

console.log(`\nInstalling Hopper VS Code extension`);
console.log(`${DIM}  source: ${SRC}${RST}`);
console.log(`${DIM}  dest:   ${dest}${RST}\n`);

try {
    mkdirSync(dest, { recursive: true });
    cpSync(SRC, dest, { recursive: true });
    console.log(`${G}Done!${RST}`);
    console.log(`\nIn VS Code: Ctrl+Shift+P -> "Developer: Reload Window"\n`);
} catch (e) {
    console.error(`${R}Install failed:${RST} ${e.message}`);
    console.error(`\nTry manually:\n  cp -r ${SRC} ${dest}\n`);
    process.exit(1);
}
