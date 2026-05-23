// QEMU virt (Cortex-A53, AArch64) boot stub
//
// QEMU loads the kernel ELF at 0x40000000 and jumps here at EL1.
// We zero BSS, set the stack above the load region, then call the Hopper entry.
//
// Launch with:
//   qemu-system-aarch64 -M virt -cpu cortex-a53 -nographic -kernel build/<name>.elf
//
// UART (PL011) is at 0x09000000 — use this address in @ declarations for output.

.section .text.boot
.global _start

_start:
    // Park all cores except core 0
    mrs  x0, mpidr_el1
    and  x0, x0, #3
    cbnz x0, .park

    // Stack at 8 MB above load address — safe above kernel image
    ldr  x0, =0x40800000
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
