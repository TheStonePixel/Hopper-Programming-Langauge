// Hopper canonical formatter — K&R style, 4-space indent
// export formatAst(ast, originalSource) → string   (browser-safe, no fs)
// export format(source, opts)            → string   (Node.js, builds AST internally)

const INDENT = '    '
const ind = (n) => INDENT.repeat(n)

// ── Public API ──────────────────────────────────────────────────────────────

export function formatAst(ast, originalSource = '') {
    // Recover import lines (they're consumed during AST build, not stored)
    const importLines = []
    for (const ln of originalSource.split('\n')) {
        const t = ln.trim()
        if (t.startsWith('import ') && t.includes(' from ')) importLines.push(t)
    }

    const parts = []
    if (importLines.length) parts.push(importLines.join('\n'))

    for (const d of ast.binds      || []) parts.push(fmtBind(d))
    for (const d of ast.stricts    || []) parts.push(fmtStrict(d))
    for (const d of ast.aliases    || []) parts.push(fmtAlias(d))
    for (const d of ast.consts     || []) parts.push(fmtConst(d))
    for (const d of ast.enums      || []) parts.push(fmtEnum(d))
    for (const d of ast.bitfields  || []) parts.push(fmtBitfield(d))
    for (const d of ast.structs    || []) { const s = fmtStruct(d);    if (s) parts.push(s) }
    for (const d of ast.interfaces || []) parts.push(fmtInterface(d))
    for (const d of ast.classes    || []) { const s = fmtClass(d);     if (s) parts.push(s) }
    for (const d of ast.templates  || []) parts.push(fmtTemplate(d))
    for (const d of ast.functions  || []) { const s = fmtFunction(d);  if (s) parts.push(s) }
    if (ast.entry) parts.push(fmtEntry(ast.entry))

    return parts.join('\n\n') + '\n'
}

// Node.js only — dynamically imports astBuilder to stay browser-safe
export async function format(source, opts = {}) {
    const { buildAstFromSource } = await import('./astBuilder.js')
    const ast = buildAstFromSource(source, { sourceFile: opts.sourceFile || null })
    return formatAst(ast, source)
}

// ── Top-level declarations ──────────────────────────────────────────────────

function fmtBind(d) {
    return `bind ${d.hardwareAddress} = ${d.functionName}::address`
}

function fmtStrict(d) {
    return `${d.type} ${d.name} @ ${d.hardwareAddress}`
}

function fmtAlias(d) {
    return `alias ${d.name} = ${d.targetType}`
}

function fmtConst(d) {
    return `const ${d.type} ${d.name} = ${fmtExpr(d.value)}`
}

function fmtEnum(d) {
    const lines = [`enum ${d.name} {`]
    for (const v of d.variants || []) {
        if (v.value !== undefined && v.value !== null)
            lines.push(`    ${v.name} = ${v.kind === 'string' ? `"${v.value}"` : v.value}`)
        else
            lines.push(`    ${v.name}`)
    }
    lines.push('}')
    return lines.join('\n')
}

function fmtBitfield(d) {
    const lines = [`bitfield ${d.name} {`]
    for (const f of d.fields || []) {
        if (f.isPad) lines.push(`    pad ${f.bits}`)
        else         lines.push(`    ${f.type} ${f.name} : ${f.count}`)
    }
    lines.push('}')
    return lines.join('\n')
}

function fmtStruct(d) {
    if (d.isBuiltin || d.isImported) return ''
    const lines = [`struct ${d.name} {`]
    for (const f of d.fields || []) {
        if (f.isPad) lines.push(`    pad ${f.size}`)
        else         lines.push(`    ${f.type} ${f.name}`)
    }
    lines.push('}')
    return lines.join('\n')
}

function fmtInterface(d) {
    const lines = [`interface ${d.name} {`]
    for (const m of d.methods || []) {
        const params = (m.params || []).map(p => `${p.type} ${p.name}`).join(', ')
        const ret    = m.returnType ? ` ${m.returnType}` : ''
        lines.push(`    function ${m.name}(${params})${ret}`)
    }
    lines.push('}')
    return lines.join('\n')
}

function fmtClassBody(d, depth) {
    const lines = []
    for (const f of d.fields || [])
        lines.push(`${ind(depth)}${f.type} ${f.name}`)
    if (d.constructor) {
        const params = (d.constructor.params || []).map(p => `${p.type} ${p.name}`).join(', ')
        const body   = fmtBlock(d.constructor.body, depth + 1)
        lines.push(`\n${ind(depth)}constructor(${params}) {\n${body}\n${ind(depth)}}`)
    }
    for (const m of d.methods || []) {
        const params = (m.params || []).map(p => `${p.type} ${p.name}`).join(', ')
        const ret    = m.returnType ? ` ${m.returnType}` : ''
        const body   = fmtBlock(m.body, depth + 1)
        lines.push(`\n${ind(depth)}function ${m.name}(${params})${ret} {\n${body}\n${ind(depth)}}`)
    }
    for (const op of d.operators || []) {
        const param = op.param ? `${op.param.type} ${op.param.name}` : ''
        const ret   = op.returnType ? ` ${op.returnType}` : ''
        const body  = fmtBlock(op.body, depth + 1)
        lines.push(`\n${ind(depth)}operator ${op.op}(${param})${ret} {\n${body}\n${ind(depth)}}`)
    }
    if (d.destructor) {
        const body = fmtBlock(d.destructor.body, depth + 1)
        lines.push(`\n${ind(depth)}destructor() {\n${body}\n${ind(depth)}}`)
    }
    return lines.join('\n')
}

function fmtClass(d) {
    if (d.isBuiltin || d.isImported) return ''
    const impl = (d.interfaces || []).length ? ` satisfies ${d.interfaces.join(', ')}` : ''
    return `class ${d.name}${impl} {\n${fmtClassBody(d, 1)}\n}`
}

function fmtTemplate(d) {
    const tparams = (d.typeParams || []).join(', ')
    return `template ${d.name}<${tparams}> {\n${fmtClassBody(d, 1)}\n}`
}

function fmtFunction(d) {
    if (d.isBuiltin || d.isImported) return ''
    if (d.isExtern) {
        const params = (d.params || []).map(p =>
            p.isVariadic ? '...' : `${p.type} ${p.name}`
        ).join(', ')
        const ret = d.returnType ? ` ${d.returnType}` : ''
        return `extern function ${d.name}(${params})${ret}`
    }
    const params = (d.params || []).map(p => `${p.type} ${p.name}`).join(', ')
    const ret    = d.returnType ? ` ${d.returnType}` : ''
    const body   = fmtBlock(d.body, 1)
    return `function ${d.name}(${params})${ret} {\n${body}\n}`
}

function fmtEntry(d) {
    const params = (d.params || []).map(p => `${p.type} ${p.name}`).join(', ')
    const sig    = params.length ? `(${params})` : ''
    const body   = fmtBlock(d.body, 1)
    return `entry ${d.name}${sig} {\n${body}\n}`
}

// ── Blocks and statements ───────────────────────────────────────────────────

function stmts(body) {
    if (!body) return []
    if (Array.isArray(body)) return body
    if (body.kind === 'Block') return body.statements || []
    return [body]
}

function fmtBlock(body, depth) {
    const ss = stmts(body)
    return ss.length ? ss.map(s => fmtStmt(s, depth)).join('\n') : ''
}

function fmtStmt(s, depth) {
    if (!s) return ''
    const P  = ind(depth)
    const P1 = ind(depth + 1)

    switch (s.kind) {
        case 'VarDecl':
            return s.init
                ? `${P}${s.type} ${s.name} = ${fmtExpr(s.init)}`
                : `${P}${s.type} ${s.name}`

        case 'ArrayDecl':
            return `${P}${s.type} ${s.name}[${fmtExpr(s.size)}]`

        case 'ArrayDeclInit': {
            const elems = (s.elements || []).map(fmtExpr).join(', ')
            return `${P}${s.type} ${s.name}[${fmtExpr(s.size)}] = {${elems}}`
        }

        case 'Assign':
        case 'AssignStmt': {
            const lhs = s.name ?? fmtExpr(s.target || s.lhs)
            const rhs = fmtExpr(s.expr || s.value || s.rhs)
            return `${P}${lhs} = ${rhs}`
        }

        case 'DerefAssign':
            return `${P}${s.name}::value = ${fmtExpr(s.expr)}`

        case 'FieldAssign':
            return `${P}${s.object}.${s.field} = ${fmtExpr(s.expr)}`

        case 'NestedFieldAssign':
            return `${P}${s.object}.${s.outerField}.${s.innerField} = ${fmtExpr(s.expr)}`

        case 'ArrayAssign':
            return `${P}${s.name}[${fmtExpr(s.index)}] = ${fmtExpr(s.expr)}`

        case 'ExprStmt':
            return `${P}${fmtExpr(s.expr)}`

        case 'ReturnStmt':
        case 'Return':
            return s.expr ? `${P}return ${fmtExpr(s.expr)}` : `${P}return`

        case 'BreakStmt':
        case 'Break':
            return `${P}break`

        case 'ContinueStmt':
        case 'Continue':
            return `${P}continue`

        case 'DeferStmt':
        case 'Defer': {
            const inner = s.expr ? fmtExpr(s.expr) : fmtStmt(s.stmt, 0).trim()
            return `${P}defer ${inner}`
        }

        case 'DeallocateStmt':
            return `${P}deallocate ${fmtExpr(s.expr)}`

        case 'IfStmt':
        case 'If': {
            const cond  = s.cond || s.condition
            const then_ = stmts(s.thenBlock || s.then)
            const else_ = stmts(s.elseBlock || s.else_)
            let out = `${P}if (${fmtExpr(cond)}) {\n${fmtBlock(then_, depth + 1)}\n${P}}`
            if (else_.length) {
                // else-if chain: keep on same line
                if (else_.length === 1 && (else_[0].kind === 'IfStmt' || else_[0].kind === 'If')) {
                    out += ` else ${fmtStmt(else_[0], 0).trim()}`
                } else {
                    out += ` else {\n${fmtBlock(else_, depth + 1)}\n${P}}`
                }
            }
            return out
        }

        case 'WhileStmt':
        case 'While': {
            const cond = s.cond || s.condition
            return `${P}while (${fmtExpr(cond)}) {\n${fmtBlock(s.body, depth + 1)}\n${P}}`
        }

        case 'ForStmt':
        case 'For': {
            const init   = fmtStmt(s.init, 0).trim()
            const cond   = fmtExpr(s.cond || s.condition)
            const update = fmtStmt(s.update, 0).trim()
            return `${P}for (${init}; ${cond}; ${update}) {\n${fmtBlock(s.body, depth + 1)}\n${P}}`
        }

        case 'AsmStmt': {
            const asmLines = (s.lines || []).map(l =>
                l.kind === 'AsmLineAssign'
                    ? `${P1}"${l.dest}" = "${l.src}"`
                    : `${P1}"${l.op}"`
            )
            return `${P}asm {\n${asmLines.join('\n')}\n${P}}`
        }

        default:
            return `${P}/* ${s.kind} */`
    }
}

// ── Expressions ─────────────────────────────────────────────────────────────

function fmtExpr(e) {
    if (!e) return ''
    switch (e.kind) {
        case 'IntLiteral':
        case 'Int':            return String(e.value)
        case 'HexLiteral':     return String(e.value)   // preserve original hex string
        case 'FloatLiteral':
        case 'Float':          return String(e.value)
        case 'BoolLiteral':
        case 'Bool':           return String(e.value)
        case 'CharLiteral':
        case 'Char':           return `'${e.value}'`
        case 'StringLiteral':
        case 'Str':
            return `"${String(e.value).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`
        case 'NullLiteral':
        case 'Null':           return 'null'
        case 'Var':            return e.name
        case 'Self':           return 'self'
        case 'CastExpr':       return `cast ${fmtExpr(e.expr)}`
        case 'Unary':          return `${e.op}${fmtExpr(e.operand || e.expr)}`
        case 'Binary':         return `${fmtExpr(e.left)} ${e.op} ${fmtExpr(e.right)}`
        case 'Call':           return `${e.callee}(${(e.args||[]).map(fmtExpr).join(', ')})`
        case 'MethodCall':     return `${e.object}.${e.method}(${(e.args||[]).map(fmtExpr).join(', ')})`
        case 'ChainedMethodCall':
            return `${fmtExpr(e.object||e.receiver)}.${e.method}(${(e.args||[]).map(fmtExpr).join(', ')})`
        case 'FieldAccess':    return `${e.object}.${e.field}`
        case 'FieldIndexAccess': return `${e.object}.${e.field}[${fmtExpr(e.index)}]`
        case 'ArrayAccess':    return `${e.name}[${fmtExpr(e.index)}]`
        case 'ArrayElementAddress': return `${e.name}[${fmtExpr(e.index)}]::address`
        case 'AddressOf':      return `${e.name}::address`
        case 'Deref':          return `${fmtExpr(e.expr||{kind:'Var',name:e.name})}::value`
        case 'SizeOf':         return `${e.name}::size`
        case 'AllocateExpr':   return `allocate ${fmtExpr(e.sizeExpr)}`
        case 'New':            return `new ${e.type}(${(e.args||[]).map(fmtExpr).join(', ')})`
        default:               return `/* ${e.kind} */`
    }
}
