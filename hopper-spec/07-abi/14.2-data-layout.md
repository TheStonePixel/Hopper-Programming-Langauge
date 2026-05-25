# Hardware Topology: Naming the Address Space

## The Problem

Systems software that targets hardware has always needed to answer the same question: how does source code express that a specific memory address contains a register, that its bits have specific meanings, and that the CPU will jump to a specific address on reset? The conventional answers are unsatisfying. C uses volatile pointers and preprocessor constants. Assembly uses address labels. Neither produces a type-safe, inspectable representation of the hardware's structure.

Hopper's answer is three keywords that together describe hardware topology as source code: `bitfield`, `strict`, and `bind`. They are not abstractions over hardware. They are direct representations of it — typed and named rather than anonymous and inferred.

---

## Registers Have Shape

A hardware register is not an integer. It is a collection of named bit fields at a fixed offset, where reading and writing individual bits has distinct side effects. Treating it as an integer loses that structure; the programmer must manually shift and mask on every access, and the names disappear into magic numbers.

`bitfield` types a register by its structure:

```hopper
bitfield UartCR1 {
    bit sbk         // bit 0:  send break
    bit rwu         // bit 1:  receiver wakeup
    bit re          // bit 2:  receiver enable
    bit te          // bit 3:  transmitter enable
    bit idleie      // bit 4:  IDLE interrupt enable
    bit rxneie      // bit 5:  RXNE interrupt enable
    bit tcie        // bit 6:  transmission complete interrupt enable
    bit txeie       // bit 7:  TXE interrupt enable
    bit peie        // bit 8:  parity error interrupt enable
    bit ps          // bit 9:  parity selection (0=even 1=odd)
    bit pce         // bit 10: parity control enable
    bit wake        // bit 11: wakeup method
    bit m           // bit 12: word length (0=8bit 1=9bit)
    bit ue          // bit 13: USART enable
    pad 1
    bit over8       // bit 15: oversampling mode (0=16x 1=8x)
    pad 16
}
```

`pad` accounts for reserved bits. The type's total width is the register's full width. The layout is explicit — every bit's position is declared, not computed. When you read the bitfield definition next to the reference manual entry, they match line for line. Hardware documentation and source code describe the same structure; there is no translation layer between them.

Multi-bit fields carry their width:

```hopper
bitfield UartBRR {
    bit fraction[4]      // bits 0-3:  DIV_Fraction
    bit mantissa[12]     // bits 4-15: DIV_Mantissa
    pad 16
}
```

`fraction[4]` is four consecutive bits. The field can hold values 0–15. The programmer sees the field width without counting pad bits.

---

## Addresses Are Topology, Not Configuration

Once a register type exists, the hardware must be placed. On a microcontroller, `USART1_CR1` is not a variable that happens to live at `0x4001100C`. It is the control register at that address, permanently, defined by the silicon. The address is not a detail of the program's allocation strategy — it is a fact about the hardware.

`strict` binds a named type to a fixed hardware address:

```hopper
strict UartSR  usart1_sr  = 0x40011000
strict UartDR  usart1_dr  = 0x40011004
strict UartBRR usart1_brr = 0x40011008
strict UartCR1 usart1_cr1 = 0x4001100C
strict UartCR2 usart1_cr2 = 0x40011010
strict UartCR3 usart1_cr3 = 0x40011014
```

The address is the right-hand side. The type is the left-hand side. Together they state: "at this fixed address, there exists a value of this type." The name — `usart1_cr1` — is what programs use; the address is what the hardware uses. The binding connects them explicitly and immovably.

`strict` carries hardware semantics that a regular variable does not. A strict binding is:

- **Volatile** — the compiler cannot cache the value across accesses. Hardware can change bits between reads.
- **Fixed-address** — the compiler cannot move, alias, or eliminate the binding. The address in the source is the address in the binary.
- **Externally-mutable** — writes from outside the program (the hardware itself, other peripherals, DMA) are legitimate. The compiler cannot assume it knows the current value.

These are not properties the programmer opts into per-access. They are properties of the binding itself — declared once and enforced everywhere.

Usage reads naturally:

```hopper
function uart1_init(int brr) {
    usart1_brr.mantissa = brr >> 4
    usart1_brr.fraction = brr & 0xF
    usart1_cr1.te = 1
    usart1_cr1.re = 1
    usart1_cr1.ue = 1
}

function uart1_send(byte b) {
    while (usart1_sr.txe == 0) { }
    usart1_dr.dr = b
}
```

There is no volatile pointer dereference. No cast. No `*(volatile uint32_t *)`. The `strict` binding ensures hardware semantics automatically; field access looks like struct access. The name `usart1_sr.txe` reads directly from the reference manual section on `USART_SR` bit 7. The type system prevents accessing `txe` on a `UartDR` instance — wrong register, wrong fields.

---

## The Program's Address Topology

Beyond data registers, programs for embedded or low-level systems must declare where the CPU will execute code. A Cortex-M processor reads interrupt vectors from a table at fixed addresses. The reset handler lives at `0x00000004`. Timer interrupts live at `0x0000003c`. These are not linker hints — they are facts about how the hardware boots.

`bind` places a function's address at a specific location:

```hopper
bind 0x00000004 = reset::address
function reset() {
    // first instruction executed on power-up
}

bind 0x0000003c = timer::address
function timer() {
    // executes on each timer tick
}
```

`::address` extracts the function's address as a value. `bind` places that value at the specified location. The result is a declared vector table — the program's address topology made explicit in source code.

This is not a linker script buried in a build system. The topology is in the source, adjacent to the functions it names. A developer reading the file sees which functions are interrupt handlers and what their vectors are — without consulting external tooling.

The same mechanism applies to bootloaders, entry points, and any code the hardware locates by address rather than by call:

```hopper
bind 0x00000000 = stack_top
bind 0x00000004 = reset::address
bind 0x00000008 = nmi::address
bind 0x0000000c = hardfault::address
```

The vector table is a first-class language construct. It lives in the source file. It is typed — `reset::address` is the address of a function with no arguments and no return value; placing a non-function address there is a type error.

---

## Hardware Documentation and Source Converge

The deeper consequence of this design is that hardware documentation and source code describe the same object at the same level of abstraction.

The STM32F411 reference manual (RM0383) describes `USART_SR` as a 32-bit register at offset `0x00` from the USART base address, where bit 5 is `RXNE` (read data register not empty), bit 6 is `TC` (transmission complete), bit 7 is `TXE` (transmit data register empty). A programmer reading the Hopper UART driver sees exactly that: a `bitfield` with those names at those bit positions, a `strict` binding at the corresponding address.

No vendor SDK. No CMSIS abstraction layer. No HAL. No intermediate representation that must be cross-referenced with documentation. The source file *is* the register description, expressed in a type system that the compiler enforces.

When a hardware errata changes a register field's behavior, the comment changes. When a new peripheral appears in a different chip revision at a different base address, the `strict` binding changes. The change is local, named, and structurally the same as the description in the reference manual.

---

## Connection to the Broader Architecture

`bitfield`, `strict`, and `bind` are consequences of the same principle that shapes Hopper's module system: **make hardware constraints legible in source code, not buried in convention**.

The module architecture applies this to syscalls — hardware dependencies live in named modules and build files, not implicit in libc. Hardware topology applies this to memory-mapped registers and address spaces — the shape of the hardware lives in typed source declarations, not in volatile casts and magic numbers.

Both move in the same direction: from implicit convention to explicit structure. A program that uses `strict UartSR usart1_sr = 0x40011000` declares its hardware dependency in a form the compiler understands and enforces. A program that uses `*(volatile uint32_t *)0x40011000` states nothing the compiler can check.

The cost is that hardware must be fully described before it is used. The benefit is that the description is the code — and the code is the documentation.

---

## Summary

| Keyword | What It Describes | Compiler Guarantee |
|---------|------------------|-------------------|
| `bitfield` | The shape of a hardware register — named fields, widths, padding | Field access is type-checked; wrong-register access is a type error |
| `strict` | A typed name bound to a fixed hardware address | Volatile, fixed-address, externally-mutable — enforced without annotation per access |
| `bind` | A function address placed at a fixed location in the address space | Vector table entries are typed; placing a non-function address is a type error |

The three keywords together let a program describe its hardware topology completely, in source, adjacent to the code that uses it.
