#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseSource } from "./src/parse.js";
import { buildAstFromSource } from "./src/astBuilder.js";
import { genModule } from "./src/codegenLLVM.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function usage() {
    console.log("Usage:");
    console.log("  hopper --parse <file.hop>");
    console.log("  hopper --ast <file.hop>");
    console.log("  hopper --llvm <file.hop> [-o out.ll]");
    console.log("  hopper --compile <file.hop>");
    console.log("  hopper --run <file.hop>");
    process.exit(1);
}

const args = process.argv.slice(2);
if (args.length < 2) usage();

const mode = args[0];
const filename = args[1];
const filecontent = fs.readFileSync(filename, "utf8");

switch (mode) {
    case "--parse": {
        const { parser, tree } = parseSource(filecontent);
        console.log(tree.toStringTree(parser.ruleNames));
        break;
    }

    case "--ast": {
        const { parser } = parseSource(filecontent);
        const tree = parser.program();
        const builder = new AstBuilder();
        const ast = buildAstFromSource(filecontent);
        console.log(JSON.stringify(ast, null, 2));
        break;
    }

    case "--llvm": {
        const { parser } = parseSource(filecontent);
        const tree = parser.program();
        const ast = buildAstFromSource(filecontent);
        const ir = genModule(ast);
        console.log(ir);

        const out = args[3] || "out.ll";
        fs.writeFileSync(out, ir, "utf8");
        break;
    }

    case "--compile": {
    }

    default:
        usage();
}
