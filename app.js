#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";
import { parseSource } from "./src/parse.js";
import { buildAstFromSource } from "./src/astBuilder.js";
import { genModule } from "./src/codegenLLVM.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function usage() {
    console.log("Hopper Compiler");
    console.log("");
    console.log("Usage:");
    console.log("  hopper --parse <file.hop>           Parse and show tree");
    console.log("  hopper --ast <file.hop>             Show AST as JSON");
    console.log("  hopper --llvm <file.hop> [-o out]   Generate LLVM IR");
    console.log("  hopper build <file.hop> [-o out]    Compile to executable");
    console.log("  hopper run <file.hop>               Compile and run");
    process.exit(1);
}

const args = process.argv.slice(2);
if (args.length < 2) usage();

const mode = args[0];
const filename = args[1];

// Ensure build directory exists
const buildDir = path.join(__dirname, "build");
if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir, { recursive: true });
}

// Helper to get output name from input file
function getBaseName(file) {
    return path.basename(file, path.extname(file));
}

// Compile Hopper file to executable
function compile(filename, outputPath) {
    const filecontent = fs.readFileSync(filename, "utf8");
    const baseName = getBaseName(filename);

    // Generate LLVM IR
    const ast = buildAstFromSource(filecontent);
    const ir = genModule(ast);

    // Write IR to build directory
    const llFile = path.join(buildDir, `${baseName}.ll`);
    fs.writeFileSync(llFile, ir, "utf8");

    // Compile to object file
    const objFile = path.join(buildDir, `${baseName}.o`);
    execSync(`llc -filetype=obj -relocation-model=pic "${llFile}" -o "${objFile}"`, { stdio: "inherit" });

    // Link to executable
    const exeFile = outputPath || path.join(buildDir, baseName);
    execSync(`clang "${objFile}" -o "${exeFile}"`, { stdio: "inherit" });

    return exeFile;
}

const filecontent = fs.readFileSync(filename, "utf8");

switch (mode) {
    case "--parse": {
        const { parser, tree } = parseSource(filecontent);
        console.log(tree.toStringTree(parser.ruleNames));
        break;
    }

    case "--ast": {
        const ast = buildAstFromSource(filecontent);
        console.log(JSON.stringify(ast, null, 2));
        break;
    }

    case "--llvm": {
        const ast = buildAstFromSource(filecontent);
        const ir = genModule(ast);
        console.log(ir);

        const outIdx = args.indexOf("-o");
        if (outIdx !== -1 && args[outIdx + 1]) {
            fs.writeFileSync(args[outIdx + 1], ir, "utf8");
        }
        break;
    }

    case "build":
    case "--build":
    case "--compile": {
        const outIdx = args.indexOf("-o");
        const outputPath = (outIdx !== -1 && args[outIdx + 1]) ? args[outIdx + 1] : null;
        const exeFile = compile(filename, outputPath);
        console.log(`Built: ${exeFile}`);
        break;
    }

    case "run":
    case "--run": {
        const exeFile = compile(filename, null);
        console.log(`Running ${exeFile}...\n`);
        execSync(exeFile, { stdio: "inherit" });
        break;
    }

    default:
        usage();
}
