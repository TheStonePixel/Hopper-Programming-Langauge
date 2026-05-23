// Raspberry Pi Pico (RP2040 — dual Cortex-M0+, ARMv6-M) boot stub
//
// The RP2040 bootrom copies the first 256 bytes of flash to SRAM and executes it.
// That second-stage bootloader (boot2) then copies the full image and jumps here.
// We zero BSS, set the stack from the vector table, then call the Hopper entry.
//
// Flash via UF2: hold BOOTSEL, plug USB, drag-and-drop build/<name>.uf2
//
// No assembly is visible to the Hopper programmer — the build system links
// this stub automatically when hopper.json specifies "board": "pico".

.syntax unified
.cpu cortex-m0plus
.thumb

.section .text.boot
.global _start
.thumb_func

_start:
    // Zero BSS
    ldr  r0, =__bss_start
    ldr  r1, =__bss_end
    mov  r2, #0
.bss_zero:
    cmp  r0, r1
    bge  .bss_done
    str  r2, [r0]
    add  r0, r0, #4
    b    .bss_zero
.bss_done:

    // Stack pointer is already set by the vector table entry — call main directly
    bl   main

.hang:
    b    .hang
