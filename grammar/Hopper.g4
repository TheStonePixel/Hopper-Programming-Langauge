grammar Hopper;

// ===== PARSER RULES =====

program
    : NEWLINE* (topLevelDecl NEWLINE*)* EOF
    ;

topLevelDecl
    : functionDecl
    | structDecl
    ;

functionDecl
    : 'extern' 'function' Identifier '(' paramList? ')' type   # ExternFuncDecl
    | 'function' Identifier '(' paramList? ')' type block      # FuncDecl
    ;

structDecl
    : 'struct' Identifier '{' NEWLINE* (structField (NEWLINE+ structField)* NEWLINE*)? '}'
    ;

structField
    : type Identifier
    ;


paramList
    : param (',' param)*
    ;

param
    : type Identifier                 // int x, int y
    ;

type
    : 'int'
    | 'bool'
    | 'float'
    | 'String'
    | 'address'     // pointer type (carries pointed-to type info at runtime)
    | Identifier    // user-defined types (structs)
    ;

// blocks: statements separated by NEWLINEs
block
    : '{'
      NEWLINE*                                // optional blank lines after '{'
      ( statement (NEWLINE+ statement)*       // 1+ statements, separated by ≥1 NEWLINE
        NEWLINE* )?                           // optional trailing blank lines
      '}'
    ;

statement
    : type Identifier '=' expression                 # VarDecl
    | type Identifier                                # VarDeclNoInit
    | Identifier '=' expression                      # Assign
    | Identifier '.' Identifier '=' expression       # FieldAssign
    | Identifier '::' 'value' '=' expression         # DerefAssign
    | 'deallocate' expression                        # DeallocateStmt
    | expression                                     # ExprStmt
    | 'if' '(' expression ')' block ('else' block)?  # IfStmt
    | 'while' '(' expression ')' block               # WhileStmt
    | 'for' '(' forInit? ';' expression? ';' forUpdate? ')' block  # ForStmt
    | 'break'                                        # BreakStmt
    | 'continue'                                     # ContinueStmt
    | 'return' expression                            # ReturnStmt
    ;

forInit
    : type Identifier '=' expression    # ForInitDecl
    | Identifier '=' expression         # ForInitAssign
    ;

forUpdate
    : Identifier '=' expression
    ;



// ===== EXPRESSIONS =====

expression      : logicalOr ;
logicalOr       : logicalAnd ( '||' logicalAnd )* ;
logicalAnd      : equality  ( '&&' equality  )* ;
equality        : relational ( ('==' | '!=') relational )* ;
relational      : additive ( ('<' | '<=' | '>' | '>=') additive )* ;
additive        : multiplicative ( ('+' | '-') multiplicative )* ;
multiplicative  : unary ( ('*' | '/' | '%') unary )* ;
unary           : ('!' | '-') unary | primary ;
primary
    : IntegerLiteral
    | StringLiteral
    | CharLiteral                   // 'A' -> just an int (65)
    | 'true'
    | 'false'
    | 'null'                        // null address
    | Identifier '::' 'address'     // get address of variable
    | Identifier '::' 'value'       // dereference address (read)
    | 'allocate' type '(' expression ')'  // heap allocation
    | Identifier '(' argList? ')'   // function call
    | Identifier '.' Identifier     // field access
    | Identifier
    | '(' expression ')'
    ;

argList
    : expression (',' expression)*
    ;


// ===== LEXER RULES =====

IntegerLiteral  : [0-9]+ ;
StringLiteral   : '"' (~["\r\n\\] | '\\' .)* '"' ;
CharLiteral     : '\'' (~['\r\n\\] | '\\' .) '\'' ;
Identifier      : [a-zA-Z_][a-zA-Z0-9_]* ;

// keep newlines as real tokens (for statement separation)
NEWLINE         : '\r'? '\n' ;

// // comment to end of line, but DO NOT eat the newline
LINE_COMMENT    : '//' ~[\r\n]* -> skip ;

// spaces and tabs only
WS              : [ \t]+ -> skip ;
