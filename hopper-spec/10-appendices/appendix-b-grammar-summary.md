## Appendix B: Grammar Summary

This appendix presents a condensed, human-readable version of the Hopper grammar. It is not a formal specification — the authoritative grammar is `seed/compiler/grammar/Hopper.g4`. ANTLR4-specific annotations (alternative labels `#Label`, `->` channel directives) are stripped. Optional elements are shown with `?`, zero-or-more with `*`, one-or-more with `+`.

---

## Top-Level Structure

```
program
    : topLevelDecl*

topLevelDecl
    : functionDecl
    | templateFunctionDecl
    | structDecl
    | classDecl
    | templateDecl
    | enumDecl
    | importDecl
    | aliasDecl
    | entryDecl
    | bindDecl
    | strictDecl
    | bitfieldDecl
    | interfaceDecl
```

---

## Top-Level Declarations

### Import

```
importDecl
    : 'import' Identifier (',' Identifier)* 'from' Identifier   // interface import (preferred)
    | 'import' Identifier                                         // module import (legacy)
```

The interface import form (`from`) requires a binding entry in `hopper.json`. The bare module import form is for legacy use only and resolves to `modules/<name>/src/<module>.hop`.

### Entry Point

```
entryDecl
    : 'entry' Identifier '(' paramList ')' block    // with arguments (argc, argv)
    | 'entry' Identifier block                       // no arguments
    | 'entry' Identifier '=' expression             // address form (bare-metal reset vector)
```

### Functions

```
functionDecl
    : 'extern' 'function' Identifier '(' externParamList? ')' type   // extern function
    | 'extern' 'function' Identifier '(' externParamList? ')'        // extern procedure
    | 'function' Identifier '(' paramList? ')' type contractClause* block   // function
    | 'function' Identifier '(' paramList? ')' contractClause* block        // procedure

templateFunctionDecl
    : 'template' 'function' Identifier '<' type '>' '(' paramList? ')' type contractClause* block
    | 'template' 'function' Identifier '<' type '>' '(' paramList? ')' contractClause* block

contractClause
    : 'requires' expression   // precondition (Hoare logic)
    | 'ensures'  expression   // postcondition (Hoare logic)

paramList
    : param (',' param)*

externParamList
    : param (',' param)* (',' '...')?    // optional variadic C tail
    | '...'

param
    : type paramName

paramName
    : Identifier | 'value' | 'address' | 'size'
```

### Classes

```
classDecl
    : 'class' className implementsList? '{' classMember* '}'

className
    : Identifier | 'String'

implementsList
    : 'implements' Identifier (',' Identifier)*

classMember
    : type fieldName                                              // field declaration
    | 'function' fieldName '(' paramList? ')' type block         // method
    | 'function' fieldName '(' paramList? ')' block              // procedure method
    | 'operator' operatorSymbol '(' Identifier (',' param)* ')' type block   // operator overload
    | 'constructor' '(' paramList? ')' block
    | 'destructor' '(' ')' block

operatorSymbol
    : '+' | '-' | '*' | '/' | '%'
    | '==' | '!=' | '<' | '<=' | '>' | '>='
    | '&' | '|' | '^' | '<<' | '>>'
    | '[' ']' '='    // indexed write operator
    | '[' ']'        // indexed read operator

fieldName
    : Identifier | 'value' | 'address' | 'size'
```

### Interfaces

```
interfaceDecl
    : 'interface' Identifier '{' interfaceMember* '}'

interfaceMember
    : 'function' fieldName '(' paramList? ')' type   // function signature
    | 'function' fieldName '(' paramList? ')'        // procedure signature
    | enumDecl                                        // enum nested inside interface
```

Note: `constDecl` is NOT a valid `interfaceMember`. Constants cannot appear inside an interface body in the current grammar. This is a known limitation planned for a future revision.

### Structs

```
structDecl
    : 'struct' Identifier '{' structMember* '}'

structMember
    : type fieldName         // named field
    | 'pad' IntegerLiteral   // anonymous padding bytes (no field name)
```

Structs have memory layout only — no methods, constructors, destructors, or default values.

### Bitfields

```
bitfieldDecl
    : 'bitfield' Identifier '{' bitfieldMember* '}'

bitfieldMember
    : type fieldName '[' IntegerLiteral ']'   // array of N bits
    | type fieldName                           // single-bit or single-byte field
    | 'pad' IntegerLiteral                     // anonymous padding bits
```

### Enums

```
enumDecl
    : 'enum' Identifier '{' enumVariant+ '}'

enumVariant
    : Identifier ('=' ('-'? (IntegerLiteral | HexLiteral) | StringLiteral))?
```

Variants without an explicit value take the previous variant's value plus one. The first variant without an explicit value defaults to 0. Accessed as `EnumName.VariantName`.

### Templates (Parameterized Classes)

```
templateDecl
    : 'template' templateName '<' templateParam (',' templateParam)* '>' '{' classMember* '}'

templateName
    : Identifier | 'String'

templateParam
    : Identifier            // free type variable: T, K, V (monomorphized at use site)
    | 'int' | 'byte' | 'char' | 'float' | 'bool' | 'string' | 'address'
    | 'unsigned' 'int' | 'unsigned' 'byte'
```

Fixed primitive type parameters produce standalone monomorphized types; no `<T>` is needed at use sites.

### Type Aliases

```
aliasDecl
    : 'alias' Identifier '=' type
```

### Hardware Declarations (Bare-Metal)

```
bindDecl
    : 'bind' HexLiteral '=' Identifier '::' 'address'
    // Linker directive: place function pointer at hardware address.
    // Example: bind 0x00000004 = reset::address

strictDecl
    : 'strict' type Identifier '=' HexLiteral
    // Named alias for a memory-mapped hardware register.
    // Example: strict int UART_DR = 0x40021000
```

---

## Statements

```
statement
    : 'callback' Identifier '=' Identifier '(' (type (',' type)*)? ')' type   // callback variable
    | 'const' type Identifier '=' expression                     // immutable local
    | type Identifier '[' IntegerLiteral ']' '=' '[' argList ']' // array decl + initializer
    | type Identifier '[' IntegerLiteral ']'                     // array decl (uninitialized)
    | type Identifier '=' 'allocate' expression constrainClause? // heap alloc + declare
    | type Identifier '=' expression constrainClause?            // variable declaration with init
    | type Identifier constrainClause?                           // variable declaration (no init)
    | Identifier '[' expression ']' '=' expression               // array element assignment
    | Identifier '=' 'allocate' expression                       // heap alloc to existing var
    | Identifier '=' expression                                  // variable assignment
    | Identifier '.' fieldName '.' fieldName '=' expression      // nested field assignment
    | Identifier '.' fieldName '=' 'allocate' expression         // field heap allocation
    | Identifier '.' fieldName '=' expression                    // field assignment
    | Identifier '::' 'value' '=' expression                     // dereference-assign (store)
    | expression                                                 // expression statement (call)
    | 'if' '(' expression ')' block elseClause?
    | 'while' '(' expression ')' invariantClause* block
    | 'for' '(' forInit? ';' expression? ';' forUpdate? ')' block
    | 'break'
    | 'continue'
    | 'return' expression?
    | 'defer' expression
    | 'deallocate' expression
    | AsmBlock

elseClause
    : 'else' block
    | 'else' 'if' '(' expression ')' block elseClause?

forInit
    : type Identifier '=' expression   // declare + initialize loop variable
    | Identifier '=' expression        // assign to existing variable

forUpdate
    : Identifier '=' expression        // update expression (no increment operator)

constrainClause
    : 'constrain' '[' type ']'

invariantClause
    : 'invariant' expression
```

Assignment (`=`) is a **statement**, not an expression. It has no value and cannot appear in expression position. Chained assignment (`a = b = c`) is not valid syntax.

---

## Expressions

The expression hierarchy defines operator precedence. Rules lower in this list bind more tightly.

```
expression      : logicalOr

logicalOr       : logicalAnd ( '||' logicalAnd )*                   // level 1

logicalAnd      : bitwiseOr  ( '&&' bitwiseOr  )*                   // level 2

bitwiseOr       : bitwiseXor ( '|'  bitwiseXor )*                   // level 3

bitwiseXor      : bitwiseAnd ( '^'  bitwiseAnd )*                   // level 4

bitwiseAnd      : equality   ( '&'  equality   )*                   // level 5

equality        : relational ( ('==' | '!=') relational )*          // level 6

relational      : shift ( ('<' | '<=' | '>' | '>=') shift )*        // level 7

shift           : additive ( ('<<' | '>>') additive )*              // level 8

additive        : multiplicative ( ('+' | '-') multiplicative )*    // level 9

multiplicative  : unary ( ('*' | '/' | '%') unary )*               // level 10

unary           : ('!' | '-' | '~') unary                           // level 11 (right-to-left)
                | castType unary                                     // level 11
                | primary                                            // level 12 (tightest)

castType
    : 'int' | 'byte' | 'char' | 'float' | 'bool' | 'bit'
    | 'address' | 'unsigned' 'int' | 'unsigned' 'byte'
```

All binary operators are left-associative. Unary operators and `castType` are right-associative (prefix).

---

## Primary Expressions

```
primary
    : IntegerLiteral
    | HexLiteral
    | CharLiteral
    | UnicodeLiteral
    | FloatLiteral
    | StringLiteral
    | 'true' | 'false' | 'null'
    | Identifier '[' expression ']' '::' 'address'      // address of array element
    | Identifier '::' 'address'                         // address of variable or function
    | Identifier '::' 'value'                           // dereference through pointer
    | Identifier '::' 'size'                            // compile-time byte size of type/var
    | Identifier '<' type '>' '(' argList? ')'          // template call: cast<int>(x)
    | Identifier '(' argList? ')'                       // function or free function call
    | Identifier '.' fieldName '.' fieldName '(' argList? ')'   // chained method call
    | Identifier '.' fieldName '(' argList? ')'         // method call
    | 'String' '(' argList? ')'                         // String template constructor
    | Identifier '.' fieldName '[' expression ']'       // subscript on field
    | Identifier '[' expression ']'                     // array element access
    | Identifier '.' fieldName                          // field access
    | Identifier
    | 'value' | 'address' | 'size'                      // contextual keywords as identifiers
    | '(' expression ')'
```

---

## Types

```
type
    : 'void'
    | 'int'                                        // i64
    | 'bool'                                       // i1
    | 'float'                                      // double
    | 'byte'                                       // i8 (signed)
    | 'char'                                       // i8 (signed, character context)
    | 'bit'                                        // i1 (bitfield context)
    | 'string' '[' ']'                             // i8** (argv)
    | 'string'                                     // i8* (null-terminated)
    | 'String' '<' type (',' type)* '>'            // String template instantiation
    | 'String'
    | 'address'                                    // i8* (raw pointer, untyped)
    | 'unsigned' 'int'                             // i64 (unsigned semantics)
    | 'unsigned' 'byte'                            // i8 (unsigned semantics)
    | 'callback' '(' (type (',' type)*)? ')' type  // function pointer
    | Identifier '<' type (',' type)* '>'          // generic template instantiation
    | Identifier                                   // user-defined class or struct
```

---

## Literals

```
literal
    : IntegerLiteral    // [0-9]+
    | HexLiteral        // 0x[0-9a-fA-F]+
    | CharLiteral       // 'x' — single char, supports \n \t \\ \' etc.
    | UnicodeLiteral    // U+[0-9a-fA-F]+
    | FloatLiteral      // [0-9]+.[0-9]+  (requires digit on both sides of '.')
    | StringLiteral     // "..." — null-terminated; no embedded newlines; supports escapes
    | 'true'
    | 'false'
```

`null` is a `primary` expression but NOT part of the `literal` production. (`literal` is used in `enumVariant`, which does not allow `null`.)

---

## Blocks

```
block
    : '{' statement* '}'
```

Statements are separated by newlines. The grammar consumes optional `NEWLINE*` before `{`, so the opening brace may appear on the same line as the introducing keyword or on the line following it. Both are grammatically valid; the style guidelines recommend the same-line form (K&R style).

---

## Lexer Rules

| Token | Pattern | Notes |
|-------|---------|-------|
| `IntegerLiteral` | `[0-9]+` | |
| `HexLiteral` | `0x[0-9a-fA-F]+` | |
| `CharLiteral` | `'.'` | Single char; backslash-escape sequences allowed |
| `UnicodeLiteral` | `U+[0-9a-fA-F]+` | |
| `FloatLiteral` | `[0-9]+.[0-9]+` | Decimal point required; no exponent form |
| `StringLiteral` | `"..."` | No embedded newlines; backslash-escape sequences allowed |
| `Identifier` | `[a-zA-Z_][a-zA-Z0-9_]*` | Case-sensitive |
| `AsmBlock` | `asm { ... }` | Entire block captured as one token; `}` terminates |
| `NEWLINE` | `\r?\n` | Real token used as statement separator |
| `LINE_COMMENT` | `//` to end of line | Skipped; does not consume the trailing newline |
| `WS` | spaces and tabs | Skipped |
