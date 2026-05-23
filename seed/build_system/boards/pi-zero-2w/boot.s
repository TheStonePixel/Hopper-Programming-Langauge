// Pi Zero 2 W (RP3A0 / BCM2710 — Cortex-A53, AArch64) boot stub
//
// The VideoCore GPU loads kernel8.img to 0x80000 and jumps here in AArch64 EL2.
// We drop to EL1, zero BSS, set the stack, then call the Hopper entry point.
//
// config.txt must contain:
//   arm_64bit=1
//
// No assembly is visible to the Hopper programmer — the build system links
// this stub automatically when hopper.json specifies "board": "pi-zero-2w".

.section .text.boot
.global _start

_start:
    // Running in EL2 — drop to EL1 so we can set up system registers normally
    mrs  x0, CurrentEL
    lsr  x0, x0, #2
    cmp  x0, #2
    bne  .el1_already

    // Configure EL1 execution state (AArch64) and drop via ERET
    mov  x0, #(1 << 31)     // RW=1: EL1 is AArch64
    msr  hcr_el2, x0
    mov  x0, #0x3c5         // DAIF masked, EL1h (SP_EL1)
    msr  spsr_el2, x0
    adr  x0, .el1_already
    msr  elr_el2, x0
    eret

.el1_already:
    // Only core 0 continues; park all others
    mrs  x0, mpidr_el1
    and  x0, x0, #3
    cbnz x0, .park

    // Stack grows down from 0x80000 through free RAM below the kernel image
    ldr  x0, =0x80000
    mov  sp, x0

    // Zero BSS
    ldr  x0, =__bss_start
    ldr  x1, =__bss_end
    mov  x2, #0
.bss_zero:
    cmp  x0, x1
    bge  .bss_done
    str  x2, [x0], #8
    b    .bss_zero
.bss_done:

    bl   main

.park:
    wfe
    b    .park
