# 9 Hardware Modeling

Hopper allows hardware components to be modeled directly as structured software components.

A microcontroller peripheral — a UART, a GPIO controller, a timer — is defined in a hardware datasheet as a set of memory-mapped registers, each with a fixed address and a specific bit layout. In most languages, working with those registers requires raw pointer casts, manual bit shifting, and conventions enforced only by discipline. In Hopper, the register layout is expressed as a type, and that type is placed at the hardware address with a single declaration. The compiler handles volatile access, bit extraction, and read-modify-write — leaving the programmer to write code that reads like the datasheet.

The result is that a hardware driver in Hopper looks like any other module: a set of types and functions. There is no assembly, no `volatile void *`, no bit-twiddling macros. The hardware complexity is captured once in the type definition and then used through named fields and ordinary function calls.

## Sections

- [9.1 MMIO Placement (`@`)](9.1-mmio-placement.md)
- [9.2 Register Types (`bitfield`)](9.2-register-types.md)
- [9.3 Peripheral Modeling](9.3-peripheral-modeling.md)
- [9.4 Bare-Metal Targets](9.4-bare-metal-targets.md)
