import antlr4 from "antlr4";
import HopperLexer from "./generated/grammar/HopperLexer.js";
import HopperParser from "./generated/grammar/HopperParser.js";
import fs from "fs";

export function parseSource(source) {
    const chars = new antlr4.InputStream(source);
    const lexer = new HopperLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new HopperParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.program();
    return { parser, tree };
}

// CLI usage: node src/parse.js example.hop
if (process.argv[1] && process.argv[1].endsWith("parse.js")) {
    const src = fs.readFileSync(process.argv[2], "utf8");
    const { parser, tree } = parseSource(src);
    console.log(tree.toStringTree(parser.ruleNames));
}
