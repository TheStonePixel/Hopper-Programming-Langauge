// Pi Zero (BCM2835 / ARM1176JZF-S) boot stub
//
// The VideoCore GPU copies kernel.img to 0x8000 and jumps here in ARM state.
// We zero BSS, set the stack below the load address, then call the Hopper
// entry point (always named `main` in the emitted LLVM IR).
//
// No assembly is visible to the Hopper programmer — the build system links
// this stub automatically when hopper.json specifies "board": "pi-zero".

.section .text.boot
.global _start

_start:
    // Zero the BSS region so global/static variables start at 0
    ldr   r0, =__bss_start
    ldr   r1, =__bss_end
    mov   r2, #0
.bss_zero:
    cmp   r0, r1
    bge   .bss_done
    str   r2, [r0], #4
    b     .bss_zero
.bss_done:

    // Stack grows down from 0x8000 into the free RAM below the kernel image
    mov   sp, #0x8000

    // Call the Hopper entry point
    bl    main

    // Hang if main ever returns
.hang:
    b     .hang
