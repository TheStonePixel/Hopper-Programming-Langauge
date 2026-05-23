## Grammar

### Overview

The Hopper grammar is specified as an ANTLR4 LL(*) grammar. A conforming implementation MUST parse Hopper source text according to this grammar and MUST reject any input that does not conform to it.

The authoritative grammar file is `seed/compiler/grammar/Hopper.g4`. The grammar excerpts throughout this section reproduce the normative rules from that file. Where a prose description conflicts with the grammar file, the grammar file is authoritative.

### Grammar Class: ANTLR4 LL(*)

The Hopper grammar is a member of the LL(*) grammar class as defined by the ANTLR4 parsing framework. An LL(*) parser reads input left-to-right, produces a leftmost derivation, and uses an adaptive lookahead strategy that can consume an unbounded number of tokens to resolve local ambiguities.

A conforming implementation is not required to use ANTLR4 directly, but MUST produce parse trees that are equivalent to those produced by an ANTLR4 parser running the reference grammar.

### Newline-Significant Structure

Hopper is a **newline-significant language**. The newline character (U+000A, optionally preceded by U+000D) is a real token in the grammar, not treated as whitespace. The lexer rule is:

```antlr
NEWLINE : '\r'? '\n' ;
```

Newlines serve three structural roles:

1. **Statement separation.** Within a block, statements are separated by one or more NEWLINE tokens. A conforming implementation MUST treat two or more consecutive NEWLINEs as equivalent to one NEWLINE — they separate the same pair of statements.

2. **Declaration separation.** Top-level declarations are separated by one or more NEWLINE tokens. The program rule permits zero or more leading NEWLINEs, zero or more trailing NEWLINEs, and one or more NEWLINEs between each adjacent pair of declarations.

3. **Block entry.** The `block` rule permits zero or more NEWLINEs before the opening brace `{`, allowing a brace to appear on a line after a condition, a loop header, or a contract clause.

Spaces and tabs are NOT newlines. The lexer rule for whitespace is:

```antlr
WS : [ \t]+ -> skip ;
```

WS tokens are discarded by the lexer and never reach the parser. A conforming implementation MUST NOT treat spaces or tabs as statement terminators.

### Statement-Per-Line Structure

Each Hopper statement MUST appear on its own line. Placing two statements on the same line is a syntax error because no NEWLINE separates them. This constraint is enforced by the grammar, not by a linting rule.

The block rule that enforces this is:

```antlr
block
    : NEWLINE* '{'
      NEWLINE*
      ( statement (NEWLINE+ statement)*
        NEWLINE* )?
      '}'
    ;
```

The `NEWLINE+` between statements requires at least one newline. A statement MUST begin on a new line relative to the preceding statement.

### One Statement Per Source Line

A consequence of the newline-significant grammar is that a program line containing a statement MUST contain exactly one statement. Continuation of a statement across multiple source lines is not supported in this version of the specification.

*Future: multi-line expressions via explicit line continuation are not yet specified.*

### Top-Level Structure

A Hopper source file (module) contains zero or more top-level declarations separated by newlines:

```antlr
program
    : NEWLINE* (topLevelDecl NEWLINE*)* EOF
    ;

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
    ;
```

A conforming implementation MUST accept any sequence of these declaration forms in any order, subject to semantic restrictions defined in §2.3 (Declarations) and §3 (Semantics).

### Comments

Line comments begin with `//` and extend to the end of the line. The comment text is discarded:

```antlr
LINE_COMMENT : '//' ~[\r\n]* -> skip ;
```

The NEWLINE that terminates a comment line is NOT consumed by the comment rule. It remains available as a NEWLINE token for statement or declaration separation. A conforming implementation MUST preserve this behavior — a line ending with a comment MUST still count as a statement or declaration separator.

Hopper has no block comments in this version of the specification.

### Inline Assembly Token

The inline assembly block is captured as a single lexer token, not parsed by the expression and statement rules:

```antlr
AsmBlock : 'asm' [ \t]* '{' ~[}]* '}' ;
```

Everything between the braces is treated as raw text. The AST builder parses the register assignments and instruction names from the token text. This approach ensures that x86 syntax — register names, memory operands with brackets, instruction mnemonics — does not require grammar rules that would conflict with Hopper expression syntax.

### Contextual Keywords

Several identifiers that appear as keyword-like syntax in specific contexts are NOT reserved keywords. The grammar permits them as field names, parameter names, and variable references in other contexts:

- `value` — the dereference operator `::value` and contextual keyword as variable name
- `address` — the address-of operator `::address`, `address` type keyword, and contextual variable name
- `size` — the sizeof operator `::size` and contextual variable name

The `fieldName` and `paramName` rules explicitly permit these identifiers:

```antlr
fieldName : Identifier | 'value' | 'address' | 'size' ;
paramName  : Identifier | 'value' | 'address' | 'size' ;
```

A conforming implementation MUST accept `value`, `address`, and `size` as field names, parameter names, and standalone variable references in expression position.

### Reserved Keywords

The following identifiers are full reserved keywords and MUST NOT be used as identifiers in any context: `alias`, `allocate`, `asm`, `bind`, `bit`, `bitfield`, `bool`, `break`, `byte`, `callback`, `char`, `class`, `const`, `constrain`, `constructor`, `continue`, `deallocate`, `defer`, `destructor`, `else`, `entry`, `enum`, `ensures`, `extern`, `false`, `float`, `for`, `from`, `function`, `if`, `satisfies`, `import`, `int`, `contract`, `invariant`, `null`, `operator`, `pad`, `requires`, `return`, `strict`, `string`, `struct`, `template`, `true`, `unsigned`, `void`, `while`.

> **Correction.** An earlier version of this list included `cast` as a reserved keyword. `cast` is NOT a grammar keyword — it is a plain `Identifier` that names a template function defined in the `cast` module. Programs may define their own identifiers named `cast` without a grammar-level error (though shadowing the `cast` module is inadvisable). Additionally, `from` and `bit` were omitted from the list; both are literal strings in `Hopper.g4` (`from` in `importDecl`, `bit` in `type` and `castType`) and are therefore reserved.

The identifier `String` is special: it is reserved as a class name and template name but may appear in positions where `className` or `templateName` is expected. It MUST NOT be used as an ordinary `Identifier`.

### Grammar Notation

The notation used throughout this section is explained in §2.8 (Grammar Notation).
