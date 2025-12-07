import fs from "fs";
import {
    Program,
    FunctionDecl,
    VarDecl,
    Assign,
    IfStmt,
    WhileStmt,
    ReturnStmt,
    Block,
    Binary,
    Unary,
    Var,
    IntLiteral,
    BoolLiteral,
} from "./ast.js";
import { buildAstFromSource } from "./astBuilder.js";

function ensureBool(ir, val) {
    // val: { value, type }
    if (val.type === "bool") {
        // already i1 from icmp
        return val.value;
    }
    // treat non-zero int as true
    const llType = llvmType(val.type); // e.g. "i32"
    const tmp = ir.newTmp();
    ir.emit(`${tmp} = icmp ne ${llType} ${val.value}, 0`);
    return tmp; // this is i1
}

// --- simple helpers ---

class IRBuilder {
    constructor() {
        this.lines = [];
        this.tmp = 0;
        this.label = 0;
        this.vars = new Map(); // name -> { ptr, type }
    }

    emit(line) {
        this.lines.push(line);
    }

    newTmp() {
        return `%t${this.tmp++}`;
    }

    newLabel(prefix) {
        return `${prefix}${this.label++}`;
    }

    getVar(name) {
        const v = this.vars.get(name);
        if (!v) throw new Error(`Unknown variable: ${name}`);
        return v;
    }
}

// Hopper types -> LLVM types
function llvmType(t) {
    if (t === "int") return "i32";
    if (t === "bool") return "i1";
    if (t === "float") return "float";
    if (t === "void") return "void";
    throw new Error(`Unknown type: ${t}`);
}

function genExpr(ir, expr) {
    switch (expr.kind) {
        case "IntLiteral":
            return { value: String(expr.value), type: "int" };

        case "BoolLiteral":
            return { value: expr.value ? "1" : "0", type: "bool" };

        case "Var": {
            const v = ir.getVar(expr.name);
            const tmp = ir.newTmp();
            ir.emit(`${tmp} = load ${v.type}, ${v.type}* ${v.ptr}`);
            return { value: tmp, type: v.hType }; // keep Hopper type too
        }

        case "Unary": {
            const inner = genExpr(ir, expr.expr);
            if (expr.op === "-") {
                const tmp = ir.newTmp();
                ir.emit(`${tmp} = sub ${llvmType(inner.type)} 0, ${inner.value}`);
                return { value: tmp, type: inner.type };
            }
            if (expr.op === "!") {
                // assume bool, use xor with 1
                const tmp = ir.newTmp();
                ir.emit(`${tmp} = xor i1 ${inner.value}, 1`);
                return { value: tmp, type: "bool" };
            }
            throw new Error(`Unsupported unary op: ${expr.op}`);
        }

        case "Binary": {
            const left = genExpr(ir, expr.left);
            const right = genExpr(ir, expr.right);
            const lt = llvmType(left.type);
            switch (expr.op) {
                case "+": {
                    const tmp = ir.newTmp();
                    ir.emit(`${tmp} = add ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: left.type };
                }
                case "-": {
                    const tmp = ir.newTmp();
                    ir.emit(`${tmp} = sub ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: left.type };
                }
                case "*": {
                    const tmp = ir.newTmp();
                    ir.emit(`${tmp} = mul ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: left.type };
                }
                case "/": {
                    const tmp = ir.newTmp();
                    ir.emit(`${tmp} = sdiv ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: left.type };
                }
                case "<":
                case "<=":
                case ">":
                case ">=": {
                    const tmp = ir.newTmp();
                    const pred = {
                        "<": "slt",
                        "<=": "sle",
                        ">": "sgt",
                        ">=": "sge",
                    }[expr.op];
                    ir.emit(`${tmp} = icmp ${pred} ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: "bool" };
                }
                case "==":
                case "!=": {
                    const tmp = ir.newTmp();
                    const pred = expr.op === "==" ? "eq" : "ne";
                    ir.emit(`${tmp} = icmp ${pred} ${lt} ${left.value}, ${right.value}`);
                    return { value: tmp, type: "bool" };
                }
                default:
                    throw new Error(`Unsupported binary op: ${expr.op}`);
            }
        }

        case "Call": {
            const callee = expr.callee;
            const args = Array.isArray(expr.args) ? expr.args : [];
            const argVals = args.map(a => genExpr(ir, a));

            // for now, assume all functions return int
            const retType = "int";
            const llRetType = llvmType(retType);

            const argStr = argVals.map(v => `${llvmType(v.type)} ${v.value}`).join(", ");

            const tmp = ir.newTmp();
            ir.emit(`${tmp} = call ${llRetType} @${callee}(${argStr})`);
            return { value: tmp, type: retType };
        }

        default:
            throw new Error(`Unsupported expr kind: ${expr.kind}`);
    }
}

// --- statements ---

function genStmt(ir, stmt, retType) {
    switch (stmt.kind) {
        case "VarDecl": {
            const llType = llvmType(stmt.type);
            const ptr = ir.newTmp();
            ir.emit(`${ptr} = alloca ${llType}`);
            const init = genExpr(ir, stmt.init);
            ir.emit(`store ${llType} ${init.value}, ${llType}* ${ptr}`);
            ir.vars.set(stmt.name, { ptr, type: llType, hType: stmt.type });
            break;
        }

        case "Assign": {
            const v = ir.getVar(stmt.name);
            const val = genExpr(ir, stmt.expr);
            ir.emit(`store ${v.type} ${val.value}, ${v.type}* ${v.ptr}`);
            break;
        }

        case "IfStmt": {
            const condVal = genExpr(ir, stmt.cond);
            const condI1 = ensureBool(ir, condVal);

            const thenLabel = ir.newLabel("if.then.");
            const elseLabel = stmt.elseBlock ? ir.newLabel("if.else.") : null;
            const endLabel = ir.newLabel("if.end.");

            if (elseLabel) {
                ir.emit(`br i1 ${condI1}, label %${thenLabel}, label %${elseLabel}`);
            } else {
                ir.emit(`br i1 ${condI1}, label %${thenLabel}, label %${endLabel}`);
            }

            ir.emit(`${thenLabel}:`);
            genBlock(ir, stmt.thenBlock, retType);
            ir.emit(`br label %${endLabel}`);

            if (elseLabel) {
                ir.emit(`${elseLabel}:`);
                genBlock(ir, stmt.elseBlock, retType);
                ir.emit(`br label %${endLabel}`);
            }

            ir.emit(`${endLabel}:`);
            break;
        }

        case "WhileStmt": {
            const condLabel = ir.newLabel("while.cond.");
            const bodyLabel = ir.newLabel("while.body.");
            const endLabel = ir.newLabel("while.end.");

            ir.emit(`br label %${condLabel}`);
            ir.emit(`${condLabel}:`);

            const condVal = genExpr(ir, stmt.cond);
            const condI1 = ensureBool(ir, condVal);
            ir.emit(`br i1 ${condI1}, label %${bodyLabel}, label %${endLabel}`);

            ir.emit(`${bodyLabel}:`);
            genBlock(ir, stmt.body, retType);
            ir.emit(`br label %${condLabel}`);

            ir.emit(`${endLabel}:`);
            break;
        }

        case "ReturnStmt": {
            const val = genExpr(ir, stmt.expr);
            const llType = llvmType(retType);
            ir.emit(`ret ${llType} ${val.value}`);
            break;
        }
        case "ExprStmt": {
            genExpr(ir, stmt.expr); // just for side effects
            break;
        }

        default:
            throw new Error(`Unsupported stmt kind: ${stmt.kind}`);
    }
}

function genBlock(ir, block, retType) {
    for (const s of block.statements) {
        genStmt(ir, s, retType);
    }
}

// --- functions / module ---

function genFunction(fn) {
    const ir = new IRBuilder();
    const retLlType = llvmType(fn.returnType);

    // build the function signature: assume all params are int/bool for now
    const paramSig = fn.params.map((p, i) => `${llvmType(p.type)} %p${i}`).join(", ");

    ir.emit(`define ${retLlType} @${fn.name}(${paramSig}) {`);
    ir.emit("entry:");

    // map params into local vars: alloca + store + record in ir.vars
    fn.params.forEach((p, i) => {
        const llType = llvmType(p.type);
        const paramReg = `%p${i}`;
        const ptr = ir.newTmp();
        ir.emit(`${ptr} = alloca ${llType}`);
        ir.emit(`store ${llType} ${paramReg}, ${llType}* ${ptr}`);
        ir.vars.set(p.name, { ptr, type: llType, hType: p.type });
    });

    // body
    genBlock(ir, fn.body, fn.returnType);

    // fallback return if control hits end (crude but fine for now)
    ir.emit(`ret ${retLlType} 0`);
    ir.emit("}");

    return ir.lines.join("\n");
}
function genModule(ast) {
    let out = "; Hopper module\n\n";

    for (const fn of ast.functions) {
        if (fn.isExtern) {
            const ret = llvmType(fn.returnType);
            const params = fn.params.map(p => llvmType(p.type)).join(", ");
            out += `declare ${ret} @${fn.name}(${params})\n`;
        } else {
            out += genFunction(fn) + "\n\n";
        }
    }

    return out;
}

// --- CLI: node src/codegenLlvm.js example.hop > out.ll ---

if (process.argv[1] && process.argv[1].endsWith("codegenLLVM.js")) {
    const source = fs.readFileSync(process.argv[2], "utf8");
    const ast = buildAstFromSource(source);
    const ir = genModule(ast);
    console.log(ir);
}
