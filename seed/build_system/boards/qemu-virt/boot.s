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

    // Initialize heap bump pointer to __heap_start
    ldr  x0, =__heap_start
    ldr  x1, =_heap_next
    str  x0, [x1]

    bl   main

.park:
    wfe
    b    .park

// ── bump allocator ────────────────────────────────────────────────────────────
// malloc(size) — rounds size up to 8-byte alignment, bumps the heap pointer.
// free(ptr)    — no-op; bump allocator does not reclaim memory.
// These satisfy the `allocate` / `deallocate` keywords in Hopper source.

.section .bss
.align 8
_heap_next:
    .quad 0

.section .text
.global malloc
.global free

malloc:
    // x0 = requested size
    ldr  x1, =_heap_next
    ldr  x2, [x1]          // current bump pointer
    add  x3, x2, x0        // next = current + size
    add  x3, x3, #7        // round up to 8-byte alignment
    and  x3, x3, #~7
    ldr  x4, =__heap_end
    cmp  x3, x4
    bgt  .oom              // out of heap — hang
    str  x3, [x1]          // store new bump pointer
    mov  x0, x2            // return old pointer
    ret

.oom:
    wfe
    b    .oom

free:
    // bump allocator — free is a no-op
    ret
