grammar Hopper;

// ===== PARSER RULES =====

program
    : NEWLINE* (topLevelDecl NEWLINE*)* EOF
    ;

topLevelDecl
    : functionDecl
    | structDecl
    | classDecl
    | constDecl
    | importDecl
    | aliasDecl
    ;

importDecl
    : 'import' StringLiteral
    ;

constDecl
    : 'const' Identifier '=' literal
    ;

aliasDecl
    : 'alias' Identifier '=' type
    ;

functionDecl
    : 'extern' 'function' Identifier '(' externParamList? ')' type   # ExternFuncDecl
    | 'extern' 'function' Identifier '(' externParamList? ')'        # ExternProcDecl
    | 'function' Identifier '(' paramList? ')' type block            # FuncDecl
    | 'function' Identifier '(' paramList? ')' block                 # ProcDecl
    ;

// struct = memory layout only, no methods, no default values
structDecl
    : 'struct' Identifier '{' NEWLINE* (structMember (NEWLINE+ structMember)* NEWLINE*)? '}'
    ;

structMember
    : type fieldName        # StructField
    | 'pad' IntegerLiteral  # StructPad
    ;

// class = data + behavior, compiler-optimized layout
classDecl
    : 'class' Identifier '{' NEWLINE* (classMember (NEWLINE+ classMember)* NEWLINE*)? '}'
    ;

classMember
    : type fieldName                                            # ClassField
    | 'function' Identifier '(' paramList? ')' type block      # ClassMethod
    | 'function' Identifier '(' paramList? ')' block           # ClassProcMethod
    | 'operator' operatorSymbol '(' param ')' type block        # ClassOperator
    | 'constructor' '(' paramList? ')' block                   # ClassConstructor
    | 'destructor' '(' ')' block                               # ClassDestructor
    ;

// fieldName allows keywords that are only special in :: context to be used as field names
fieldName
    : Identifier
    | 'value'
    | 'address'
    ;

operatorSymbol
    : '+' | '-' | '*' | '/' | '%'
    | '==' | '!=' | '<' | '<=' | '>' | '>='
    | '&' | '|' | '^' | '<<' | '>>'
    | '[' ']'
    ;

// paramList for regular functions — no variadic
paramList
    : param (',' param)*
    ;

// externParamList allows optional trailing '...' for variadic C functions (e.g. printf)
externParamList
    : param (',' param)* (',' '...')?
    | '...'
    ;

param
    : type Identifier
    ;

type
    : 'int'
    | 'bool'
    | 'float'
    | 'byte'
    | 'String'
    | 'address'
    | 'unsigned' 'int'
    | 'unsigned' 'byte'
    | Identifier    // user-defined types (structs, classes)
    ;

// blocks: statements separated by NEWLINEs
block
    : '{'
      NEWLINE*
      ( statement (NEWLINE+ statement)*
        NEWLINE* )?
      '}'
    ;

statement
    : type Identifier '[' IntegerLiteral ']'             # ArrayDecl
    | type Identifier '=' expression                     # VarDecl
    | type Identifier                                    # VarDeclNoInit
    | Identifier '[' expression ']' '=' expression       # ArrayAssign
    | Identifier '=' expression                          # Assign
    | Identifier '.' fieldName '=' expression             # FieldAssign
    | Identifier '::' 'value' '=' expression             # DerefAssign
    | expression                                         # ExprStmt
    | 'if' '(' expression ')' block ('else' block)?      # IfStmt
    | 'while' '(' expression ')' block                   # WhileStmt
    | 'for' '(' forInit? ';' expression? ';' forUpdate? ')' block  # ForStmt
    | 'break'                                            # BreakStmt
    | 'continue'                                         # ContinueStmt
    | 'return' expression?                               # ReturnStmt
    | 'defer' expression                                 # DeferStmt
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
logicalAnd      : bitwiseOr  ( '&&' bitwiseOr  )* ;
bitwiseOr       : bitwiseXor ( '|'  bitwiseXor )* ;
bitwiseXor      : bitwiseAnd ( '^'  bitwiseAnd )* ;
bitwiseAnd      : equality   ( '&'  equality   )* ;
equality        : relational ( ('==' | '!=') relational )* ;
relational      : shift ( ('<' | '<=' | '>' | '>=') shift )* ;
shift           : additive ( ('<<' | '>>') additive )* ;
additive        : multiplicative ( ('+' | '-') multiplicative )* ;
multiplicative  : unary ( ('*' | '/' | '%') unary )* ;
unary           : ('!' | '-' | '~') unary | 'cast' unary | primary ;
primary
    : IntegerLiteral
    | HexLiteral
    | FloatLiteral
    | StringLiteral
    | CharLiteral
    | 'true'
    | 'false'
    | 'null'
    | Identifier '[' expression ']' '::' 'address'      // address of array element
    | Identifier '::' 'address'                         // address of variable
    | Identifier '::' 'value'                           // dereference address
    | Identifier '(' argList? ')'                       // function call
    | Identifier '.' Identifier '(' argList? ')'        // method call
    | Identifier '[' expression ']'                     // array element access
    | Identifier '.' fieldName                          // field access
    | Identifier
    | '(' expression ')'
    ;

argList
    : expression (',' expression)*
    ;

literal
    : IntegerLiteral
    | HexLiteral
    | FloatLiteral
    | StringLiteral
    | 'true'
    | 'false'
    ;


// ===== LEXER RULES =====

IntegerLiteral  : [0-9]+ ;
HexLiteral      : '0x' [0-9a-fA-F]+ ;
FloatLiteral    : [0-9]+ '.' [0-9]+ ;
StringLiteral   : '"' (~["\r\n\\] | '\\' .)* '"' ;
CharLiteral     : '\'' (~['\r\n\\] | '\\' .) '\'' ;
Identifier      : [a-zA-Z_][a-zA-Z0-9_]* ;

// keep newlines as real tokens (for statement separation)
NEWLINE         : '\r'? '\n' ;

// comment to end of line, does not eat the newline
LINE_COMMENT    : '//' ~[\r\n]* -> skip ;

// spaces and tabs only
WS              : [ \t]+ -> skip ;
