grammar Hopper;

// ===== PARSER RULES =====

program
    : NEWLINE* (functionDecl NEWLINE*)* EOF
    ;

functionDecl
    : 'extern' 'function' Identifier '(' paramList? ')' type   # ExternFuncDecl
    | 'function' Identifier '(' paramList? ')' type block      # FuncDecl
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
    | Identifier '=' expression                      # Assign
    | expression                                     # ExprStmt
    | 'if' '(' expression ')' block ('else' block)?  # IfStmt
    | 'while' '(' expression ')' block               # WhileStmt
    | 'return' expression                            # ReturnStmt
    ;



// ===== EXPRESSIONS =====

expression      : logicalOr ;
logicalOr       : logicalAnd ( '||' logicalAnd )* ;
logicalAnd      : equality  ( '&&' equality  )* ;
equality        : relational ( ('==' | '!=') relational )* ;
relational      : additive ( ('<' | '<=' | '>' | '>=') additive )* ;
additive        : multiplicative ( ('+' | '-') multiplicative )* ;
multiplicative  : unary ( ('*' | '/') unary )* ;
unary           : ('!' | '-') unary | primary ;
primary
    : IntegerLiteral
    | 'true'
    | 'false'
    | Identifier '(' argList? ')'   // function call
    | Identifier
    | '(' expression ')'
    ;

argList
    : expression (',' expression)*
    ;


// ===== LEXER RULES =====

IntegerLiteral  : [0-9]+ ;
Identifier      : [a-zA-Z_][a-zA-Z0-9_]* ;

// keep newlines as real tokens (for statement separation)
NEWLINE         : '\r'? '\n' ;

// // comment to end of line, but DO NOT eat the newline
LINE_COMMENT    : '//' ~[\r\n]* -> skip ;

// spaces and tabs only
WS              : [ \t]+ -> skip ;
