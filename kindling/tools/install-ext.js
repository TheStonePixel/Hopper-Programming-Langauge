#!/usr/bin/env node
/**
 * Install the Hopper VS Code extension as a symlink into the correct
 * extensions directory. Run once — after that, git pull + Reload Window
 * is all you need to pick up grammar or color changes.
 *
 * - Standard VS Code (Linux/Mac):  ~/.vscode/extensions/
 * - VS Code Remote WSL/SSH:        ~/.vscode-server/extensions/
 *
 * Usage: npm run install:ext
 */

import { readFileSync, existsSync, mkdirSync, rmSync, symlinkSync } from "fs";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const ROOT       = path.resolve(__dirname, "..", "..");
const SRC        = path.join(ROOT, "extensions", "hopper-vscode");
const HOME       = os.homedir();
const PKG        = JSON.parse(readFileSync(path.join(SRC, "package.json"), "utf8"));
const EXT_NAME   = `${PKG.name}-${PKG.version}`;

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
    if (existsSync(dest)) {
        rmSync(dest, { recursive: true, force: true });
    }
    mkdirSync(extDir, { recursive: true });
    symlinkSync(SRC, dest, "dir");

    console.log(`${G}Linked!${RST}`);
    console.log(`\nFrom now on: git pull + Reload Window is all you need.`);
    console.log(`In VS Code: Ctrl+Shift+P -> "Developer: Reload Window"\n`);
} catch (e) {
    console.error(`${R}Install failed:${RST} ${e.message}`);
    console.error(`\nTry manually:\n  ln -s "${SRC}" "${dest}"\n`);
    process.exit(1);
}
