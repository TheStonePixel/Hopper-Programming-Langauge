## 1. Lexical Structure

This section specifies how a Hopper source file is broken into tokens before parsing begins. Lexical analysis is performed by an ANTLR4 lexer that processes the raw byte stream of a source file and produces a flat sequence of tokens consumed by the parser. The lexer and parser are separate passes; no parser feedback influences lexical decisions.

### 1.1 Overview

Lexical analysis proceeds left-to-right through the source file. At each position, the lexer MUST match the longest possible token according to the rules defined in sections 1.4 through 1.8 (the *maximal munch* principle). When two lexer rules can match the same input at the same position with the same length, the rule that appears first in the grammar MUST take precedence.

Hopper source files are plain-text files encoded as UTF-8. The lexer operates on the decoded Unicode code-point stream produced from that encoding.

### 1.2 Lexical Phases

Lexical analysis consists of the following ordered phases:

1. **Encoding validation.** The byte sequence is decoded as UTF-8. Any byte sequence that is not valid UTF-8 MUST cause a compilation error. A UTF-8 byte order mark (BOM, U+FEFF) at the beginning of the file MUST cause a compilation error.

2. **Token recognition.** The decoded code-point stream is scanned left-to-right. The lexer produces one token per match. Whitespace (`WS`) and line comments (`LINE_COMMENT`) are recognized and immediately discarded; they do not appear in the token stream presented to the parser.

3. **Newline normalization.** Both the two-byte sequence `\r\n` (CRLF) and the single byte `\n` (LF) produce a single `NEWLINE` token. The resulting token stream contains only LF-normalized newline tokens regardless of the line-ending style of the source file.

4. **Token stream delivery.** The normalized token stream — comprising all tokens except those skipped by the lexer — is delivered to the parser unchanged.

### 1.3 Relation to the Parser

The parser grammar is defined in ANTLR4 and operates on the token stream. Newlines are meaningful to the parser: they separate statements within a block and separate top-level declarations within a program. Multiple consecutive `NEWLINE` tokens are treated by the parser as a single separator wherever the grammar rule consumes `NEWLINE*` or `NEWLINE+`. A `NEWLINE` immediately preceding an opening brace `{` is consumed by the block rule's leading `NEWLINE*` and does NOT act as a statement separator.

The grammar rule for `block` is:

```antlr
block
    : NEWLINE* '{'
      NEWLINE*
      ( statement (NEWLINE+ statement)*
        NEWLINE* )?
      '}'
    ;
```

This means a block opening brace MAY appear on the same line as its header or on the following line without changing the parse.

### 1.4 Inline Assembly Lexing

The inline assembly construct `asm { ... }` is treated specially. The entire `asm { ... }` block — from the keyword `asm` through the matching closing brace `}` — is captured as a single `AsmBlock` token by the lexer. The content of the braces is opaque to the parser; the compiler back-end parses the assembly body from the raw token text. The `AsmBlock` token MUST NOT span nested braces: the closing `}` is the first `}` character encountered after the opening `{`.

### 1.5 ANTLR4 Lexer Rules (Reference)

The complete set of lexer rules, in precedence order, is:

```antlr
IntegerLiteral  : [0-9]+ ;
HexLiteral      : '0x' [0-9a-fA-F]+ ;
CharLiteral     : '\'' (~['\r\n\\] | '\\' .) '\'' ;
UnicodeLiteral  : 'U+' [0-9a-fA-F]+ ;
FloatLiteral    : [0-9]+ '.' [0-9]+ ;
StringLiteral   : '"' (~["\r\n\\] | '\\' .)* '"' ;
Identifier      : [a-zA-Z_][a-zA-Z0-9_]* ;
NEWLINE         : '\r'? '\n' ;
LINE_COMMENT    : '//' ~[\r\n]* -> skip ;
WS              : [ \t]+ -> skip ;
AsmBlock        : 'asm' [ \t]* '{' ~[}]* '}' ;
```

The keyword tokens are not listed as separate lexer rules. ANTLR4 matches keyword strings through the `Identifier` rule and then reclassifies them using implicit literal rules generated from the parser grammar. A conforming implementation MUST treat every string that matches a keyword (see section 1.6) as that keyword token, not as an `Identifier`, regardless of whether the implementation uses ANTLR4 internally.

### 1.6 Error Handling

A conforming implementation MUST report a lexical error if:

- The source file contains bytes that are not valid UTF-8.
- A UTF-8 BOM is present at the start of the file.
- A `StringLiteral` or `CharLiteral` is not terminated before the end of the line (unescaped `\n` or `\r\n` inside a string or character literal).
- A `CharLiteral` contains zero characters or more than one character (after escape processing).
- Any byte or code point appears that does not begin a recognized token and is not whitespace.

A conforming implementation SHOULD continue lexical analysis after a lexical error in order to report additional errors in the same compilation, but is not required to produce a valid binary after any lexical error.
