import {
    classTypes, mmioBindings, bitfieldTypes, templateInstances,
    functionReturnTypes, wordBits, releaseMode, contractsUsed,
    setContractsUsed,
} from "./codegenState.js";
import {
    llvmType, normalizeType,
    bitfieldLayout, bitfieldFieldInfo,
    getFieldIndex, getFieldType, llvmZeroValue,
    callbackFnTypeSig,
} from "./codegenTypes.js";
import {
    emitEnsuresChecks, emitInvariantChecks, emitConstrainCheck,
} from "./codegenConstraints.js";
import {
    genExpr, ensureBool, emitCast, emitDeferred,
} from "./codegenExpr.js";
import { HopperError, HopperWarning, ErrorType, WarnType } from "./errors.js";
import { emitWarning, emitError } from "./codegenState.js";
import { throwUndeclared } from "./codegenExpr.js";
import {
    isReg, isSIMDReg, regLLVMType, regConstraint, simdClobbers, SYSCALL_CLOBBERS,
} from "./x86.js";

// ── statement codegen ─────────────────────────────────────────────────────

export function genStmt(ir, stmt, retType) {
    switch (stmt.kind) {

        case "VarDecl": {
            const normType         = normalizeType(stmt.type);
            const baseTemplateName = stmt.type.includes('<') ? stmt.type.split('<')[0] : null;

            // Constructor call sugar:
            //   MyClass x = MyClass(args)      — exact class name match
            //   Box<int> b = Box(args)          — base template name match
            const isConstructorCall = stmt.init && stmt.init.kind === "Call"
                && (stmt.init.callee === stmt.type || stmt.init.callee === normType || stmt.init.callee === baseTemplateName)
                && classTypes.has(normType);

            if (isConstructorCall) {
                const typeName = normType;
                const llType   = llvmType(typeName);
                const ptr      = ir.newTmp();
                ir.emit(`${ptr} = alloca ${llType}`);
                ir.vars.set(stmt.name, { ptr, type: llType, hType: typeName, isConst: stmt.isConst || false });

                const ctorName = `${typeName}_constructor`;
                if (functionReturnTypes.has(ctorName)) {
                    const ctorInfo = functionReturnTypes.get(ctorName);
                    const args = (stmt.init.args || []).map((a, i) => {
                        const paramNormT = ctorInfo.params && ctorInfo.params[i]
                            ? normalizeType(ctorInfo.params[i].type) : null;
                        if (paramNormT && classTypes.has(paramNormT) && a.kind === "Var") {
                            const argVar = ir.vars.get(a.name);
                            if (argVar) return { value: argVar.ptr, type: paramNormT, isClassPtr: true };
                        }
                        return genExpr(ir, a);
                    });
                    const selfArg   = `${llType}* ${ptr}`;
                    const otherArgs = args.map(a =>
                        a.isClassPtr ? `${llvmType(a.type)}* ${a.value}`
                                     : `${a.type.startsWith("address:") ? "i8*" : llvmType(a.type)} ${a.value}`
                    ).join(", ");
                    const argStr    = otherArgs ? `${selfArg}, ${otherArgs}` : selfArg;
                    ir.emit(`call void @${ctorName}(${argStr})`);
                }
                break;
            }

            // Class-returning expr: MyClass x = obj.method() / obj.field.method() / a + b (operator)
            // Also: Array<int> x = Array<int>(128) — TemplateFuncCall constructor returns isClassPtr.
            // genExpr for these returns { isClassPtr: true, value: allocaPtr } — reuse that alloca.
            if (classTypes.has(normType) && stmt.init
                && (stmt.init.kind === "MethodCall"
                    || stmt.init.kind === "ChainedMethodCall"
                    || stmt.init.kind === "Binary"
                    || stmt.init.kind === "TemplateFuncCall")) {
                const result = genExpr(ir, stmt.init);
                if (result.isClassPtr) {
                    ir.vars.set(stmt.name, { ptr: result.value, type: `%class.${normType}`, hType: normType, isConst: stmt.isConst || false });
                    break;
                }
            }

            // callback(T,T)R var = functionName  OR  = cast addressVar
            // Variable declarations use CallbackDeclTyped syntax: callback name = fn(types) ret
            // This path handles the VarDecl produced by that statement rule.
            if (normType.startsWith("callback(") && stmt.init) {
                let raw;
                const resolvedType = normType;
                if (stmt.init.kind === "Var") {
                    const fnName = stmt.init.name;
                    const fnSig = callbackFnTypeSig(resolvedType);
                    raw = ir.newTmp();
                    ir.emit(`${raw} = bitcast ${fnSig}* @${fnName} to i8*`);
                } else if (stmt.init.kind === "CastExpr") {
                    // cast address → callback: both are i8*, evaluate inner and use as-is
                    const inner = genExpr(ir, stmt.init.expr);
                    raw = inner.value; // already i8*
                } else {
                    // fallthrough to general path
                    break;
                }
                const ptr = ir.newTmp();
                ir.emit(`${ptr} = alloca i8*`);
                ir.emit(`store i8* ${raw}, i8** ${ptr}`);
                ir.vars.set(stmt.name, { ptr, type: "i8*", hType: resolvedType });
                break;
            }

            let hType = normType;
            let init  = null;

            if (stmt.init) {
                if (stmt.init.kind === "CastExpr") {
                    const inner = genExpr(ir, stmt.init.expr);
                    init = emitCast(ir, inner.value, inner.type, stmt.type);
                    hType = normType;
                } else if (stmt.init.kind === "Deref") {
                    // declared type always determines load width, even inside template methods
                    const savedRet = ir.returnType;
                    ir.returnType = stmt.type;
                    init = genExpr(ir, stmt.init);
                    ir.returnType = savedRet;
                } else {
                    init = genExpr(ir, stmt.init);
                    if (stmt.type === "address" && init.type.startsWith("address:"))
                        hType = init.type;
                }
            }

            const isAddress = stmt.type === "address" || stmt.type.startsWith("address:");
            const llType    = isAddress ? "i8*" : llvmType(hType);
            const ptr       = ir.newTmp();
            ir.emit(`${ptr} = alloca ${llType}`);

            if (init) {
                if (isAddress && init.type.startsWith("address:")) {
                    // init.value is already i8* (all address:T values normalized to i8*)
                    ir.emit(`store i8* ${init.value}, i8** ${ptr}`);
                } else {
                    ir.emit(`store ${llType} ${init.value}, ${llType}* ${ptr}`);
                }
                if (!releaseMode && stmt.constrain) {
                    setContractsUsed(true);
                    emitConstrainCheck(ir, init.value, llType, stmt.constrain);
                }
            }

            ir.vars.set(stmt.name, { ptr, type: llType, hType, isConst: stmt.isConst || false });
            break;
        }

        case "Assign": {
            const mmio = mmioBindings.get(stmt.name);
            if (mmio) {
                const val = genExpr(ir, stmt.expr);
                const ptr = ir.newTmp();
                ir.emit(`${ptr} = inttoptr ${wordBits === 32 ? "i32" : "i64"} ${mmio.addr} to ${mmio.llType}*`);
                ir.emit(`store volatile ${mmio.llType} ${val.value}, ${mmio.llType}* ${ptr}`);
                break;
            }

            const v   = ir.vars.get(stmt.name);
            if (!v) throwUndeclared(stmt.loc, stmt.name, ir,
                `add 'int ${stmt.name} = ...' before this line`);
            if (v.isConst) throw new HopperError(stmt.loc, ErrorType.TypeError,
                `'${stmt.name}' is declared const and cannot be reassigned`);

            // callback var = functionName — reassign to a different function
            if (v.hType && v.hType.startsWith("callback(") && stmt.expr.kind === "Var") {
                const fnName  = stmt.expr.name;
                const fnSig   = callbackFnTypeSig(v.hType);
                const fnPtrLl = `${fnSig}*`;
                const raw     = ir.newTmp();
                ir.emit(`${raw} = bitcast ${fnPtrLl} @${fnName} to i8*`);
                ir.emit(`store i8* ${raw}, i8** ${v.ptr}`);
                break;
            }

            let val;
            if (stmt.expr.kind === "CastExpr") {
                const inner = genExpr(ir, stmt.expr.expr);
                val = emitCast(ir, inner.value, inner.type, v.hType);
            } else if (stmt.expr.kind === "Deref") {
                // target variable's type determines load width, same as VarDecl
                const savedRet = ir.returnType;
                ir.returnType = v.hType;
                val = genExpr(ir, stmt.expr);
                ir.returnType = savedRet;
            } else {
                val = genExpr(ir, stmt.expr);
            }
            if (v.hType === "address" && val.type.startsWith("address:")) v.hType = val.type;
            if (v.type === "i8*" && val.type.startsWith("address:")) {
                // val.value is already i8* (all address:T values normalized to i8*)
                ir.emit(`store i8* ${val.value}, i8** ${v.ptr}`);
            } else {
                ir.emit(`store ${v.type} ${val.value}, ${v.type}* ${v.ptr}`);
            }
            break;
        }

        case "FieldAssign": {
            // Check MMIO (strict) bitfield first — uses volatile load/store
            const mmioFW = mmioBindings.get(stmt.object);
            if (mmioFW && bitfieldTypes.has(mmioFW.hType)) {
                const bf = bitfieldTypes.get(mmioFW.hType);
                const { llType } = bitfieldLayout(bf);
                const { offset, width } = bitfieldFieldInfo(bf, stmt.field);
                const val = genExpr(ir, stmt.expr);
                const srcLL = llvmType(val.type);
                const srcBits = parseInt(srcLL.slice(1));
                const dstBits = parseInt(llType.slice(1));
                let inContainer = val.value;
                if (srcLL !== llType) {
                    const norm = ir.newTmp();
                    ir.emit(`${norm} = ${srcBits > dstBits ? "trunc" : "zext"} ${srcLL} ${val.value} to ${llType}`);
                    inContainer = norm;
                }
                const shifted = ir.newTmp();
                ir.emit(`${shifted} = shl ${llType} ${inContainer}, ${offset}`);
                const fieldMask = (1n << BigInt(width)) - 1n;
                const clearMask = ~(fieldMask << BigInt(offset)) & ((1n << 64n) - 1n);
                const ptr = ir.newTmp();
                ir.emit(`${ptr} = inttoptr ${wordBits === 32 ? "i32" : "i64"} ${mmioFW.addr} to ${llType}*`);
                const current = ir.newTmp();
                ir.emit(`${current} = load volatile ${llType}, ${llType}* ${ptr}`);
                const cleared = ir.newTmp();
                ir.emit(`${cleared} = and ${llType} ${current}, ${clearMask}`);
                const merged = ir.newTmp();
                ir.emit(`${merged} = or ${llType} ${cleared}, ${shifted}`);
                ir.emit(`store volatile ${llType} ${merged}, ${llType}* ${ptr}`);
                break;
            }

            const v = ir.vars.get(stmt.object);
            if (!v) throwUndeclared(stmt.loc, stmt.object, ir, `declare it with a type before use, e.g. 'int ${stmt.object} = ...'`);

            // Bitfield write: read-modify-write on the container integer
            if (bitfieldTypes.has(v.hType)) {
                const bf = bitfieldTypes.get(v.hType);
                const { llType } = bitfieldLayout(bf);
                const { offset, width } = bitfieldFieldInfo(bf, stmt.field);
                const val = genExpr(ir, stmt.expr);
                // Normalize value to container width (trunc if larger, zext if smaller)
                const srcLL = llvmType(val.type);
                const srcBits = parseInt(srcLL.slice(1));
                const dstBits = parseInt(llType.slice(1));
                let inContainer = val.value;
                if (srcLL !== llType) {
                    const norm = ir.newTmp();
                    ir.emit(`${norm} = ${srcBits > dstBits ? "trunc" : "zext"} ${srcLL} ${val.value} to ${llType}`);
                    inContainer = norm;
                }
                // Shift value into position
                const shifted = ir.newTmp();
                ir.emit(`${shifted} = shl ${llType} ${inContainer}, ${offset}`);
                // Build clear mask (all 1s except the field bits)
                const fieldMask = (1n << BigInt(width)) - 1n;
                const clearMask = ~(fieldMask << BigInt(offset)) & ((1n << 64n) - 1n);
                // Load current container, clear field bits, OR in new value
                const current = ir.newTmp();
                ir.emit(`${current} = load ${llType}, ${llType}* ${v.ptr}`);
                const cleared = ir.newTmp();
                ir.emit(`${cleared} = and ${llType} ${current}, ${clearMask}`);
                const merged = ir.newTmp();
                ir.emit(`${merged} = or ${llType} ${cleared}, ${shifted}`);
                ir.emit(`store ${llType} ${merged}, ${llType}* ${v.ptr}`);
                break;
            }

            if (classTypes.has(v.hType) && !templateInstances.has(v.hType) && !v.isSelf && ir.currentClass !== v.hType) {
                throw new Error(
                    `Access failure: cannot assign field '${stmt.field}' of class '${v.hType}' directly. Use a mutator method.`
                );
            }

            const typeName      = v.hType;
            const fieldIdx      = getFieldIndex(typeName, stmt.field);
            const fieldType     = getFieldType(typeName, stmt.field);
            const normFieldType = normalizeType(fieldType);
            const llFieldType   = llvmType(normFieldType);
            const llSelfType    = llvmType(typeName);

            const fieldPtr = ir.newTmp();
            ir.emit(`${fieldPtr} = getelementptr ${llSelfType}, ${llSelfType}* ${v.ptr}, i32 0, i32 ${fieldIdx}`);

            // Constructor-call in-place: self.field = FieldType(args)
            const baseFieldName = fieldType.includes('<') ? fieldType.split('<')[0] : null;
            if (classTypes.has(normFieldType) && stmt.expr.kind === "Call"
                && (stmt.expr.callee === fieldType || stmt.expr.callee === normFieldType || stmt.expr.callee === baseFieldName)) {
                const ctorName = `${normFieldType}_constructor`;
                if (functionReturnTypes.has(ctorName)) {
                    const args      = (stmt.expr.args || []).map(a => genExpr(ir, a));
                    const selfArg   = `%class.${normFieldType}* ${fieldPtr}`;
                    const otherArgs = args.map(a => `${llvmType(a.type)} ${a.value}`).join(", ");
                    const argStr    = otherArgs ? `${selfArg}, ${otherArgs}` : selfArg;
                    ir.emit(`call void @${ctorName}(${argStr})`);
                }
                break;
            }

            const val = genExpr(ir, stmt.expr);
            ir.emit(`store ${llFieldType} ${val.value}, ${llFieldType}* ${fieldPtr}`);
            break;
        }

        case "NestedFieldAssign": {
            // obj.outerField.innerField = expr
            // Resolves to: GEP into outer, GEP into inner, store.
            const v = ir.vars.get(stmt.object);
            if (!v) throwUndeclared(stmt.loc, stmt.object, ir, `declare it with a type before use, e.g. 'int ${stmt.object} = ...'`);
            if (!classTypes.has(v.hType))
                throw new Error(`NestedFieldAssign: '${stmt.object}' is not a class type`);
            const outerIdx    = getFieldIndex(v.hType, stmt.outerField);
            const outerFType  = normalizeType(getFieldType(v.hType, stmt.outerField));
            const outerLLType = llvmType(v.hType);
            const outerPtr    = ir.newTmp();
            ir.emit(`${outerPtr} = getelementptr ${outerLLType}, ${outerLLType}* ${v.ptr}, i32 0, i32 ${outerIdx}`);
            if (!classTypes.has(outerFType))
                throw new Error(`NestedFieldAssign: field '${stmt.outerField}' is not a class type (type: ${outerFType})`);
            const innerIdx    = getFieldIndex(outerFType, stmt.innerField);
            const innerFType  = getFieldType(outerFType, stmt.innerField);
            const innerLLOuter = llvmType(outerFType);
            const innerPtr    = ir.newTmp();
            ir.emit(`${innerPtr} = getelementptr ${innerLLOuter}, ${innerLLOuter}* ${outerPtr}, i32 0, i32 ${innerIdx}`);
            const val = genExpr(ir, stmt.expr);
            ir.emit(`store ${llvmType(innerFType)} ${val.value}, ${llvmType(innerFType)}* ${innerPtr}`);
            break;
        }

        case "DerefAssign": {
            const v = ir.vars.get(stmt.name);
            if (!v) throwUndeclared(stmt.loc, stmt.name, ir, `declare it with a type before use, e.g. 'int ${stmt.name} = ...'`);
            const val = genExpr(ir, stmt.expr);
            let pointedTo;
            if (v.hType.startsWith("address:")) {
                pointedTo = v.hType.substring(8);
            } else if (v.hType === "address") {
                pointedTo = val.type; // always infer from RHS — never use ir.returnType
            } else {
                throw new Error(`Cannot dereference non-address type: ${v.hType}`);
            }
            const llPointedTo = llvmType(pointedTo);
            const rawAddr     = ir.newTmp();
            ir.emit(`${rawAddr} = load i8*, i8** ${v.ptr}`);
            const typedAddr   = ir.newTmp();
            ir.emit(`${typedAddr} = bitcast i8* ${rawAddr} to ${llPointedTo}*`);
            ir.emit(`store ${llPointedTo} ${val.value}, ${llPointedTo}* ${typedAddr}`);
            break;
        }

        case "ArrayDecl": {
            const llElemType = llvmType(stmt.type);
            const arrayType  = `[${stmt.size} x ${llElemType}]`;
            const ptr        = ir.newTmp();
            ir.emit(`${ptr} = alloca ${arrayType}`);
            ir.vars.set(stmt.name, { ptr, type: arrayType, hType: `array:${stmt.type}:${stmt.size}` });
            break;
        }

        case "ArrayDeclInit": {
            const llElemType = llvmType(stmt.type);
            const size       = stmt.size;
            const arrayType  = `[${size} x ${llElemType}]`;
            const ptr        = ir.newTmp();
            ir.emit(`${ptr} = alloca ${arrayType}`);
            ir.vars.set(stmt.name, { ptr, type: arrayType, hType: `array:${stmt.type}:${size}` });
            for (let i = 0; i < stmt.elements.length; i++) {
                const val     = genExpr(ir, stmt.elements[i]);
                const elemPtr = ir.newTmp();
                ir.emit(`${elemPtr} = getelementptr ${arrayType}, ${arrayType}* ${ptr}, i32 0, i32 ${i}`);
                ir.emit(`store ${llElemType} ${val.value}, ${llElemType}* ${elemPtr}`);
            }
            break;
        }

        case "AsmStmt": {
            const inputs  = [];  // { reg, llType, value }
            const outputs = [];  // { name, reg, llType }
            const ops     = [];  // instruction strings

            for (const line of stmt.lines) {
                if (line.kind === "AsmLineOp") {
                    ops.push(line.op);
                } else if (line.kind === "AsmLineAssign") {
                    if (isReg(line.dest)) {
                        // reg = value/var — input
                        const val = genExpr(ir, line.src);
                        let llVal = val.value;
                        let llT   = llvmType(val.type);
                        if (llT.endsWith("*")) {
                            const tmp2 = ir.newTmp();
                            ir.emit(`${tmp2} = ptrtoint ${llT} ${llVal} to i64`);
                            llVal = tmp2; llT = "i64";
                        }
                        if (llT === "i8" || llT === "i1") {
                            const tmp2 = ir.newTmp();
                            ir.emit(`${tmp2} = zext ${llT} ${llVal} to i64`);
                            llVal = tmp2; llT = "i64";
                        }
                        inputs.push({ reg: line.dest, llType: llT, value: llVal });
                    } else {
                        // var = reg — output
                        const reg   = line.src.name;
                        const llT   = regLLVMType(reg);
                        outputs.push({ name: line.dest, reg, llType: llT });
                    }
                }
            }

            const asmStr         = ops.join("\\0A");
            const outConstraints = outputs.map(o => regConstraint(o.reg, true));
            const inConstraints  = inputs.map(i => regConstraint(i.reg, false));
            const raxClobber     = (outputs.length === 0 && inputs.some(i => i.reg === 'rax')) ? ['~{rax}'] : [];
            const xmmClobbers    = simdClobbers(ops, outputs);
            const clobbers       = [...raxClobber, ...xmmClobbers, ...SYSCALL_CLOBBERS];
            const constraints    = [...outConstraints, ...inConstraints, ...clobbers].join(",");
            const inputArgs      = inputs.map(i => `${i.llType} ${i.value}`).join(", ");

            if (outputs.length === 0) {
                ir.emit(`call void asm sideeffect inteldialect "${asmStr}", "${constraints}"(${inputArgs})`);
            } else if (outputs.length === 1) {
                const { llType } = outputs[0];
                const ptrType    = isSIMDReg(outputs[0].reg) ? `${llType}*` : `i64*`;
                const storeType  = isSIMDReg(outputs[0].reg) ? llType : 'i64';
                const outTmp     = ir.newTmp();
                ir.emit(`${outTmp} = call ${storeType} asm sideeffect inteldialect "${asmStr}", "${constraints}"(${inputArgs})`);
                const outVar = ir.vars.get(outputs[0].name);
                if (outVar) ir.emit(`store ${storeType} ${outTmp}, ${ptrType} ${outVar.ptr}`);
            } else {
                const structT = `{ ${outputs.map(o => o.llType).join(', ')} }`;
                const outTmp  = ir.newTmp();
                ir.emit(`${outTmp} = call ${structT} asm sideeffect inteldialect "${asmStr}", "${constraints}"(${inputArgs})`);
                outputs.forEach((out, i) => {
                    const ex = ir.newTmp();
                    ir.emit(`${ex} = extractvalue ${structT} ${outTmp}, ${i}`);
                    const outVar = ir.vars.get(out.name);
                    if (outVar) ir.emit(`store ${out.llType} ${ex}, ${out.llType}* ${outVar.ptr}`);
                });
            }
            break;
        }

        case "ArrayAssign": {
            const v = ir.vars.get(stmt.name);
            if (!v) throwUndeclared(stmt.loc, stmt.name, ir, `declare it with a type before use, e.g. 'int ${stmt.name} = ...'`);

            if (classTypes.has(v.hType)) {
                const cls      = classTypes.get(v.hType);
                const setIdxOp = (cls.operators || []).find(o => o.op === '[]=');
                if (!setIdxOp) throw new Error(`Class '${v.hType}' has no []= operator`);
                const fnName   = `${v.hType}_op_setidx`;
                const selfType = `%class.${v.hType}*`;
                const indexVal = genExpr(ir, stmt.index);
                const val      = genExpr(ir, stmt.expr);
                ir.emit(`call void @${fnName}(${selfType} ${v.ptr}, ${llvmType(setIdxOp.param.type)} ${indexVal.value}, ${llvmType(val.type)} ${val.value})`);
                break;
            }

            if (!v.hType.startsWith("array:"))
                throw new Error(`Cannot index non-array type: ${v.hType}`);
            const elemType   = v.hType.split(":")[1];
            const llElemType = llvmType(elemType);
            const indexVal   = genExpr(ir, stmt.index);
            const elemPtr    = ir.newTmp();
            ir.emit(`${elemPtr} = getelementptr ${v.type}, ${v.type}* ${v.ptr}, i32 0, i64 ${indexVal.value}`);
            const val = genExpr(ir, stmt.expr);
            ir.emit(`store ${llElemType} ${val.value}, ${llElemType}* ${elemPtr}`);
            break;
        }

        case "IfStmt": {
            const condVal  = genExpr(ir, stmt.cond);
            const condI1   = ensureBool(ir, condVal);
            const thenLbl  = ir.newLabel("if.then.");
            const elseLbl  = stmt.elseBlock ? ir.newLabel("if.else.") : null;
            const endLbl   = ir.newLabel("if.end.");

            ir.emit(`br i1 ${condI1}, label %${thenLbl}, label %${elseLbl ?? endLbl}`);
            ir.emit(`${thenLbl}:`);
            genBlock(ir, stmt.thenBlock, retType);
            ir.emit(`br label %${endLbl}`);

            if (elseLbl) {
                ir.emit(`${elseLbl}:`);
                genBlock(ir, stmt.elseBlock, retType);
                ir.emit(`br label %${endLbl}`);
            }
            ir.emit(`${endLbl}:`);
            break;
        }

        case "WhileStmt": {
            const condLbl = ir.newLabel("while.cond.");
            const bodyLbl = ir.newLabel("while.body.");
            const endLbl  = ir.newLabel("while.end.");
            ir.emit(`br label %${condLbl}`);
            ir.emit(`${condLbl}:`);
            if (!releaseMode && stmt.invariants && stmt.invariants.length > 0) {
                setContractsUsed(true);
                emitInvariantChecks(ir, stmt.invariants, genExpr, ensureBool);
            }
            const condI1 = ensureBool(ir, genExpr(ir, stmt.cond));
            ir.emit(`br i1 ${condI1}, label %${bodyLbl}, label %${endLbl}`);
            ir.emit(`${bodyLbl}:`);
            ir.pushLoop(endLbl, condLbl);
            genBlock(ir, stmt.body, retType);
            ir.popLoop();
            ir.emit(`br label %${condLbl}`);
            ir.emit(`${endLbl}:`);
            break;
        }

        case "ForStmt": {
            const condLbl   = ir.newLabel("for.cond.");
            const bodyLbl   = ir.newLabel("for.body.");
            const updateLbl = ir.newLabel("for.update.");
            const endLbl    = ir.newLabel("for.end.");

            if (stmt.init) genStmt(ir, stmt.init, retType);
            ir.emit(`br label %${condLbl}`);
            ir.emit(`${condLbl}:`);

            if (stmt.cond) {
                const condI1 = ensureBool(ir, genExpr(ir, stmt.cond));
                ir.emit(`br i1 ${condI1}, label %${bodyLbl}, label %${endLbl}`);
            } else {
                ir.emit(`br label %${bodyLbl}`);
            }

            ir.emit(`${bodyLbl}:`);
            ir.pushLoop(endLbl, updateLbl);
            genBlock(ir, stmt.body, retType);
            ir.popLoop();
            ir.emit(`br label %${updateLbl}`);
            ir.emit(`${updateLbl}:`);
            if (stmt.update) genStmt(ir, stmt.update, retType);
            ir.emit(`br label %${condLbl}`);
            ir.emit(`${endLbl}:`);
            break;
        }

        case "ReturnStmt": {
            emitDeferred(ir);
            const normRetT   = retType ? normalizeType(retType) : null;
            const hasEnsures = (ir.ensures || []).length > 0;

            if (stmt.expr && normRetT && classTypes.has(normRetT)) {
                // Class return: load the struct from its alloca and ret by value.
                // ensures not checked on class returns (struct binding not yet supported).
                const llRetT = `%class.${normRetT}`;
                let structVal;
                if (stmt.expr.kind === "Var") {
                    const varEntry = ir.vars.get(stmt.expr.name);
                    structVal = ir.newTmp();
                    ir.emit(`${structVal} = load ${llRetT}, ${llRetT}* ${varEntry.ptr}`);
                } else {
                    const res = genExpr(ir, stmt.expr);
                    if (res.isClassPtr) {
                        // genExpr returned an alloca pointer — load the struct value from it.
                        structVal = ir.newTmp();
                        ir.emit(`${structVal} = load ${llRetT}, ${llRetT}* ${res.value}`);
                    } else {
                        structVal = res.value;
                    }
                }
                ir.emit(`ret ${llRetT} ${structVal}`);
            } else if (stmt.expr) {
                let retVal;
                const llRetT = llvmType(retType);
                if (stmt.expr.kind === "CastExpr") {
                    const inner = genExpr(ir, stmt.expr.expr);
                    retVal = emitCast(ir, inner.value, inner.type, retType).value;
                } else {
                    const val = genExpr(ir, stmt.expr);
                    retVal = (val.type !== retType)
                        ? emitCast(ir, val.value, val.type, retType).value
                        : val.value;
                }
                if (hasEnsures) {
                    emitEnsuresChecks(ir, ir.ensures, retVal, llRetT, retType, genExpr, ensureBool);
                }
                ir.emit(`ret ${llRetT} ${retVal}`);
            } else {
                if (retType && retType !== "void") {
                    const llRet = llvmType(retType);
                    ir.emit(`ret ${llRet} ${llvmZeroValue(llRet)}`);
                } else {
                    ir.emit(`ret void`);
                }
            }
            break;
        }

        case "DeferStmt": {
            ir.deferStack.push(stmt.expr);
            break;
        }

        case "DeallocateStmt": {
            const ptr = genExpr(ir, stmt.expr);
            ir.emit(`call void @free(i8* ${ptr.value})`);
            break;
        }

        case "BreakStmt":    ir.emit(`br label %${ir.currentLoop().breakLabel}`);    break;
        case "ContinueStmt": ir.emit(`br label %${ir.currentLoop().continueLabel}`); break;
        case "ExprStmt":     genExpr(ir, stmt.expr);                                  break;

        default:
            throw new Error(`Unsupported stmt kind: ${stmt.kind}`);
    }
}

export function genBlock(ir, block, retType) {
    const stmts = block.statements;
    for (let i = 0; i < stmts.length; i++) {
        const s = stmts[i];
        try {
            genStmt(ir, s, retType);
        } catch (e) {
            if (e instanceof HopperError) {
                if (s.kind === "VarDecl") ir.poison(s.name);
                emitError(e);
                continue;
            }
            throw e;
        }
        const isTerminator = s.kind === "ReturnStmt" || s.kind === "BreakStmt" || s.kind === "ContinueStmt";
        if (isTerminator && i + 1 < stmts.length) {
            const keyword = s.kind === "ReturnStmt" ? "return" : s.kind === "BreakStmt" ? "break" : "continue";
            const nextLoc = stmts[i + 1].loc ?? null;
            emitWarning(new HopperWarning(nextLoc, WarnType.UnreachableCode,
                `code after '${keyword}' will never execute`,
                `remove the unreachable statements`));
            break;
        }
    }
}

// Hoist all alloca instructions to the function entry block.
// alloca has no data dependencies — it only reserves stack space — so moving
// it before any other instruction is always valid LLVM IR.  Without this,
// allocas emitted inside loop bodies accumulate stack space on every iteration
// and eventually overflow the stack.
//
// Only allocas in non-entry basic blocks are moved.  Allocas already in the
// entry block (before the first non-entry label) are left in place.
export function hoistAllocas(lines) {
    const entryIdx = lines.findIndex(l => l.trim() === "entry:");
    if (entryIdx === -1) return lines;

    // Find the end of the entry block = the first non-entry label after entry:.
    // Labels are unindented lines ending with ':' (e.g. "while.cond.0:").
    const labelRe = /^[\w.]+:/;
    let entryBlockEnd = lines.length;
    for (let i = entryIdx + 1; i < lines.length; i++) {
        if (labelRe.test(lines[i])) { entryBlockEnd = i; break; }
    }

    const allocaRe = /^\s*%\w+ = alloca\b/;
    const hoisted  = [];
    const rest     = [];
    for (let i = 0; i < lines.length; i++) {
        if (i >= entryBlockEnd && allocaRe.test(lines[i])) hoisted.push(lines[i]);
        else rest.push(lines[i]);
    }
    const insertAt = rest.findIndex(l => l.trim() === "entry:") + 1;
    rest.splice(insertAt, 0, ...hoisted);
    return rest;
}
