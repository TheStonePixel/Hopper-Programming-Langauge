grammar Hopper;

// ===== PARSER RULES =====

program
    : NEWLINE* (topLevelDecl NEWLINE*)* EOF
    ;

topLevelDecl
    : functionDecl
    | structDecl
    | classDecl
    | templateDecl
    | constDecl
    | importDecl
    | aliasDecl
    | entryDecl
    | bindDecl
    | strictDecl
    | bitfieldDecl
    | interfaceDecl
    ;

importDecl
    : 'import' Identifier (',' Identifier)* 'from' Identifier   # ImportFrom
    | 'import' Identifier                                         # ImportModule
    ;

// bind — linker directive: place function pointer at hardware address
// bind 0x00000004 = reset::address
bindDecl
    : 'bind' HexLiteral '=' Identifier '::' 'address'
    ;

// strict — named alias for a memory-mapped hardware register
// strict int uart_dr = 0x40021000
strictDecl
    : 'strict' type Identifier '=' HexLiteral
    ;

// entry — the program entry point, not a function
// inline:  entry main { ... }
// address: entry main = startup::address
entryDecl
    : 'entry' Identifier '(' paramList ')' block  # EntryBlockParams
    | 'entry' Identifier block                     # EntryBlock
    | 'entry' Identifier '=' expression            # EntryAddr
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
    | 'function' Identifier '(' paramList? ')' type contractClause* block   # FuncDecl
    | 'function' Identifier '(' paramList? ')' contractClause* block        # ProcDecl
    ;

// Compile-time contract clauses (Hoare Logic) — reserved, not yet implemented
// NEWLINEs allowed before each clause so they can appear on their own lines.
contractClause
    : NEWLINE+ 'requires' expression   # RequiresClause
    | NEWLINE+ 'ensures'  expression   # EnsuresClause
    ;

// struct = memory layout only, no methods, no default values
structDecl
    : 'struct' Identifier '{' NEWLINE* (structMember (NEWLINE+ structMember)* NEWLINE*)? '}'
    ;

structMember
    : type fieldName        # StructField
    | 'pad' IntegerLiteral  # StructPad
    ;

// bitfield = bit-level layout — fields packed sequentially from LSB
// bit[N] is simply an array of N bits, consistent with int[N] and byte[N]
bitfieldDecl
    : 'bitfield' Identifier '{' NEWLINE* (bitfieldMember (NEWLINE+ bitfieldMember)* NEWLINE*)? '}'
    ;

bitfieldMember
    : type fieldName '[' IntegerLiteral ']'   # BitfieldArrayField
    | type fieldName                           # BitfieldField
    | 'pad' IntegerLiteral                     # BitfieldPad
    ;

// template = parameterized class, monomorphized at use sites
// templateParam is either a free type variable (Identifier, e.g. T, K, V)
// or a fixed concrete type (primitive keyword, e.g. byte, int, address).
// Fixed-param templates are fully monomorphized at declaration time and their
// name becomes a standalone type — no <> required at use sites.
templateDecl
    : 'template' templateName '<' templateParam (',' templateParam)* '>' '{' NEWLINE* (classMember (NEWLINE+ classMember)* NEWLINE*)? '}'
    ;

// Allow 'String' as a template name in addition to plain identifiers.
// 'String' is a reserved keyword so it cannot be used as Identifier directly.
templateName
    : Identifier
    | 'String'
    ;

templateParam
    : Identifier        # FreeParam    // free type variable: T, K, V
    | 'int'             # FixedParam   // fixed primitive types — no <> at use site
    | 'byte'            # FixedParam
    | 'float'           # FixedParam
    | 'bool'            # FixedParam
    | 'string'          # FixedParam
    | 'address'         # FixedParam
    | 'unsigned' 'int'  # FixedParam
    | 'unsigned' 'byte' # FixedParam
    ;

// interface = compile-time contract: a set of method signatures a class must implement
interfaceDecl
    : 'interface' Identifier '{' NEWLINE* (interfaceMember (NEWLINE+ interfaceMember)* NEWLINE*)? '}'
    ;

interfaceMember
    : 'function' Identifier '(' paramList? ')' type   # InterfaceFunc
    | 'function' Identifier '(' paramList? ')'        # InterfaceProc
    ;

// class = data + behavior, compiler-optimized layout
// Optional 'implements' list for compile-time interface conformance checking
classDecl
    : 'class' className implementsList? '{' NEWLINE* (classMember (NEWLINE+ classMember)* NEWLINE*)? '}'
    ;

// className allows 'String' as a class name in addition to plain identifiers
className
    : Identifier
    | 'String'
    ;

// implements — list of interfaces the class must conform to
implementsList
    : 'implements' Identifier (',' Identifier)*
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
    | 'size'
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
    : type paramName
    ;

// paramName mirrors fieldName — allows contextual keywords as parameter names
paramName
    : Identifier
    | 'value'
    | 'address'
    | 'size'
    ;

type
    : 'int'
    | 'bool'
    | 'float'
    | 'byte'
    | 'bit'
    | 'string' '[' ']'  // array of strings — argv type, maps to i8**
    | 'string'
    | 'String' '<' type (',' type)* '>'   // String<byte>, String<int> — template instantiation
    | 'String'
    | 'address'
    | 'unsigned' 'int'
    | 'unsigned' 'byte'
    | Identifier '<' type (',' type)* '>'   // template instantiation: List<int>, Map<String,int>
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
    : type Identifier '[' IntegerLiteral ']' '=' '[' argList ']'  # ArrayDeclInit
    | type Identifier '[' IntegerLiteral ']'                    # ArrayDecl
    | type Identifier '=' 'allocate' expression constrainClause?  # AllocateVarDecl
    | type Identifier '=' expression constrainClause?           # VarDecl
    | type Identifier constrainClause?                          # VarDeclNoInit
    | Identifier '[' expression ']' '=' expression              # ArrayAssign
    | Identifier '=' 'allocate' expression                      # AllocateAssign
    | Identifier '=' expression                                 # Assign
    | Identifier '.' fieldName '=' 'allocate' expression        # AllocateFieldAssign
    | Identifier '.' fieldName '=' expression                   # FieldAssign
    | Identifier '::' 'value' '=' expression                    # DerefAssign
    | expression                                                # ExprStmt
    | 'if' '(' expression ')' block ('else' block)?             # IfStmt
    | 'while' '(' expression ')' invariantClause* block         # WhileStmt
    | 'for' '(' forInit? ';' expression? ';' forUpdate? ')' block  # ForStmt
    | 'break'                                                   # BreakStmt
    | 'continue'                                                # ContinueStmt
    | 'return' expression?                                      # ReturnStmt
    | 'defer' expression                                        # DeferStmt
    | 'deallocate' expression                                   # DeallocateStmt
    | 'asm' asmBlock                                            # AsmStmt
    ;

// Compile-time constraint clause — reserved, not yet implemented
// e.g.  int x = 10 constrain [u8]
constrainClause
    : 'constrain' '[' type ']'
    ;

// Compile-time loop invariant — reserved, not yet implemented
// e.g.  while (i < n) invariant i >= 0 { ... }
invariantClause
    : 'invariant' expression
    ;

asmBlock
    : '{' NEWLINE* (asmLine (NEWLINE+ asmLine)* NEWLINE*)? '}'
    ;

asmLine
    : Identifier '=' asmOperand    # AsmLineAssign
    | Identifier                   # AsmLineOp
    ;

asmOperand
    : IntegerLiteral
    | HexLiteral
    | Identifier
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
    | 'true'
    | 'false'
    | 'null'
    | Identifier '[' expression ']' '::' 'address'      // address of array element
    | Identifier '::' 'address'                         // address of variable/function
    | Identifier '::' 'value'                           // dereference address
    | Identifier '::' 'size'                            // byte size of variable or type
    | Identifier '(' argList? ')'                       // function call
    | Identifier '.' Identifier '(' argList? ')'        // method call
    | 'String' '(' argList? ')'                         // String template constructor call
    | Identifier '[' expression ']'                     // array element access
    | Identifier '.' fieldName                          // field access
    | Identifier
    | 'value'                                               // contextual keyword as variable ref
    | 'address'                                             // contextual keyword as variable ref
    | 'size'                                                // contextual keyword as variable ref
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
// CharLiteral removed — characters are byte values, e.g. 72 not 'H'
Identifier      : [a-zA-Z_][a-zA-Z0-9_]* ;

// keep newlines as real tokens (for statement separation)
NEWLINE         : '\r'? '\n' ;

// comment to end of line, does not eat the newline
LINE_COMMENT    : '//' ~[\r\n]* -> skip ;

// spaces and tabs only
WS              : [ \t]+ -> skip ;
