// x86 register knowledge and LLVM inline-asm helpers for Hopper asm{} blocks.
// Imported by astBuilder.js (to classify asm line tokens) and codegenStmt.js
// (to build constraint strings and emit correct LLVM types).

export const GP64 = new Set([
    'rax','rbx','rcx','rdx','rsi','rdi','rbp','rsp',
    'r8','r9','r10','r11','r12','r13','r14','r15',
]);

export const GP32 = new Set([
    'eax','ebx','ecx','edx','esi','edi','ebp','esp',
    'r8d','r9d','r10d','r11d','r12d','r13d','r14d','r15d',
]);

export const GP16 = new Set(['ax','bx','cx','dx','si','di','bp','sp']);

export const GP8  = new Set(['al','bl','cl','dl','sil','dil','bpl','spl',
                              'r8b','r9b','r10b','r11b','r12b','r13b','r14b','r15b']);

export const XMM  = new Set([
    'xmm0','xmm1','xmm2','xmm3','xmm4','xmm5','xmm6','xmm7',
    'xmm8','xmm9','xmm10','xmm11','xmm12','xmm13','xmm14','xmm15',
]);

export const YMM  = new Set([
    'ymm0','ymm1','ymm2','ymm3','ymm4','ymm5','ymm6','ymm7',
    'ymm8','ymm9','ymm10','ymm11','ymm12','ymm13','ymm14','ymm15',
]);

export const ZMM  = new Set([
    'zmm0','zmm1','zmm2','zmm3','zmm4','zmm5','zmm6','zmm7',
    'zmm8','zmm9','zmm10','zmm11','zmm12','zmm13','zmm14','zmm15',
    'zmm16','zmm17','zmm18','zmm19','zmm20','zmm21','zmm22','zmm23',
    'zmm24','zmm25','zmm26','zmm27','zmm28','zmm29','zmm30','zmm31',
]);

export const ALL_REGS = new Set([...GP64, ...GP32, ...GP16, ...GP8, ...XMM, ...YMM, ...ZMM]);

export function isGPReg(name)   { return GP64.has(name) || GP32.has(name) || GP16.has(name) || GP8.has(name); }
export function isSIMDReg(name) { return XMM.has(name) || YMM.has(name) || ZMM.has(name); }
export function isReg(name)     { return ALL_REGS.has(name); }

// LLVM IR type for a register used as an inline-asm operand.
export function regLLVMType(name) {
    if (GP64.has(name)) return 'i64';
    if (GP32.has(name)) return 'i32';
    if (GP16.has(name)) return 'i16';
    if (GP8.has(name))  return 'i8';
    if (XMM.has(name))  return '<16 x i8>';
    if (YMM.has(name))  return '<32 x i8>';
    if (ZMM.has(name))  return '<64 x i8>';
    return 'i64';
}

// LLVM inline-asm constraint string for a register (input or output).
export function regConstraint(name, isOutput = false) {
    return isOutput ? `={${name}}` : `{${name}}`;
}

// Registers that are always clobbered by a syscall.
export const SYSCALL_CLOBBERS = ['~{rcx}', '~{r11}', '~{memory}'];
