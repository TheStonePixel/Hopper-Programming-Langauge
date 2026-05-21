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
    | enumDecl
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

// enum — compile-time integer type with named variants
// Variants may have explicit values; otherwise they increment from the previous.
//   enum JsonKind { NONE = 0   BOOL   INT   STRING   ARRAY   OBJECT }
enumDecl
    : 'enum' Identifier '{' NEWLINE* (enumVariant (NEWLINE+ enumVariant)* NEWLINE*)? '}'
    ;

enumVariant
    : Identifier ('=' ('-'? (IntegerLiteral | HexLiteral) | StringLiteral))?
    ;

aliasDecl
    : 'alias' Identifier '=' type
    ;

functionDecl
    : 'extern' 'function' Identifier '(' externParamList? ')' type   # ExternFuncDecl
    | 'extern' 'function' Identifier '(' externParamList? ')'        # ExternProcDecl
    | 'function' Identifier '(' paramList? ')' type (NEWLINE+ contractClause)* block   # FuncDecl
    | 'function' Identifier '(' paramList? ')' (NEWLINE+ contractClause)* block        # ProcDecl
    ;

// Compile-time contract clauses (Hoare Logic)
// NEWLINE is handled at the call site ((NEWLINE+ contractClause)*) so the
// trailing newline before '{' is consumed by block's NEWLINE* instead of here.
contractClause
    : 'requires' expression   # RequiresClause
    | 'ensures'  expression   # EnsuresClause
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
    | 'char'            # FixedParam
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
    : 'function' fieldName '(' paramList? ')' type   # InterfaceFunc
    | 'function' fieldName '(' paramList? ')'        # InterfaceProc
    | enumDecl                                        # InterfaceEnum
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
    : type fieldName                                              # ClassField
    | 'function' fieldName '(' paramList? ')' type block         # ClassMethod
    | 'function' fieldName '(' paramList? ')' block              # ClassProcMethod
    | 'operator' operatorSymbol '(' Identifier (',' param)* ')' type block   # ClassOperator
    | 'constructor' '(' paramList? ')' block                     # ClassConstructor
    | 'destructor' '(' ')' block                                 # ClassDestructor
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
    | '[' ']' '='
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
    : 'void'
    | 'int'
    | 'bool'
    | 'float'
    | 'byte'
    | 'char'
    | 'bit'
    | 'string' '[' ']'  // array of strings — argv type, maps to i8**
    | 'string'
    | 'String' '<' type (',' type)* '>'   // String<byte>, String<int> — template instantiation
    | 'String'
    | 'address'
    | 'unsigned' 'int'
    | 'unsigned' 'byte'
    | 'callback' '(' (type (',' type)*)? ')' type   // function pointer type for parameters: callback(int,bool) int
    | Identifier '<' type (',' type)* '>'   // template instantiation: List<int>, Map<String,int>
    | Identifier    // user-defined types (structs, classes)
    ;

// blocks: statements separated by NEWLINEs
// NEWLINE* before '{' allows the brace to appear on its own line after a contract or condition.
block
    : NEWLINE* '{'
      NEWLINE*
      ( statement (NEWLINE+ statement)*
        NEWLINE* )?
      '}'
    ;

statement
    : 'callback' Identifier '=' Identifier '(' (type (',' type)*)? ')' type  # CallbackDeclTyped
    | 'const' type Identifier '=' expression                     # ConstVarDecl
    | type Identifier '[' IntegerLiteral ']' '=' '[' argList ']'  # ArrayDeclInit
    | type Identifier '[' IntegerLiteral ']'                    # ArrayDecl
    | type Identifier '=' 'allocate' expression constrainClause?  # AllocateVarDecl
    | type Identifier '=' expression constrainClause?           # VarDecl
    | type Identifier constrainClause?                          # VarDeclNoInit
    | Identifier '[' expression ']' '=' expression              # ArrayAssign
    | Identifier '=' 'allocate' expression                      # AllocateAssign
    | Identifier '=' expression                                 # Assign
    | Identifier '.' fieldName '.' fieldName '=' expression     # NestedFieldAssign
    | Identifier '.' fieldName '=' 'allocate' expression        # AllocateFieldAssign
    | Identifier '.' fieldName '=' expression                   # FieldAssign
    | Identifier '::' 'value' '=' expression                    # DerefAssign
    | expression                                                # ExprStmt
    | 'if' '(' expression ')' block elseClause?                 # IfStmt
    | 'while' '(' expression ')' (NEWLINE+ invariantClause)* block  # WhileStmt
    | 'for' '(' type Identifier ':' expression ')' block        # ForEachStmt
    | 'for' '(' forInit? ';' expression? ';' forUpdate? ')' block  # ForStmt
    | 'break'                                                   # BreakStmt
    | 'continue'                                                # ContinueStmt
    | 'return' expression?                                      # ReturnStmt
    | 'defer' expression                                        # DeferStmt
    | 'deallocate' expression                                   # DeallocateStmt
    | AsmBlock                                                     # AsmStmt
    ;

// Compile-time constraint clause — type range narrowing on variable declaration
// e.g.  int x = 10 constrain [byte]  →  runtime (or strict: compile-time) range check
constrainClause
    : 'constrain' '[' type ']'
    ;

// Loop invariant — checked at every loop-head evaluation
// e.g.  while (i < n) invariant i >= 0 { ... }
invariantClause
    : 'invariant' expression
    ;

elseClause
    : 'else' block                                              # ElseBlock
    | 'else' 'if' '(' expression ')' block elseClause?         # ElseIf
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
unary           : ('!' | '-' | '~') unary | 'cast' unary | castType unary | primary ;

// Type-name-as-cast: int pi, byte x, float count — explicit coercion, usable in any expression
castType
    : 'int'
    | 'byte'
    | 'char'
    | 'float'
    | 'bool'
    | 'bit'
    | 'address'
    | 'unsigned' 'int'
    | 'unsigned' 'byte'
    ;
primary
    : IntegerLiteral
    | HexLiteral
    | CharLiteral
    | UnicodeLiteral
    | FloatLiteral
    | StringLiteral
    | 'true'
    | 'false'
    | 'null'
    | Identifier '[' expression ']' '::' 'address'      // address of array element
    | Identifier '::' 'address'                         // address of variable/function
    | Identifier '::' 'value'                           // dereference address
    | Identifier '::' 'size'                            // byte size of variable or type
    | Identifier '(' argList? ')'                                           // function call
    | Identifier '.' fieldName '.' fieldName '(' argList? ')'               // chained method call: obj.field.method(...)
    | Identifier '.' fieldName '(' argList? ')'                              // method call
    | 'String' '(' argList? ')'                                              // String template constructor call
    | Identifier '.' fieldName '[' expression ']'                            // subscript on field: obj.field[i]
    | Identifier '[' expression ']'                                          // array element access
    | Identifier '.' fieldName                                               // field access
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
    | CharLiteral
    | UnicodeLiteral
    | FloatLiteral
    | StringLiteral
    | 'true'
    | 'false'
    ;


// ===== LEXER RULES =====

IntegerLiteral  : [0-9]+ ;
HexLiteral      : '0x' [0-9a-fA-F]+ ;
CharLiteral     : '\'' (~['\r\n\\] | '\\' .) '\'' ;
UnicodeLiteral  : 'U+' [0-9a-fA-F]+ ;
FloatLiteral    : [0-9]+ '.' [0-9]+ ;
StringLiteral   : '"' (~["\r\n\\] | '\\' .)* '"' ;
Identifier      : [a-zA-Z_][a-zA-Z0-9_]* ;

// keep newlines as real tokens (for statement separation)
NEWLINE         : '\r'? '\n' ;

// comment to end of line, does not eat the newline
LINE_COMMENT    : '//' ~[\r\n]* -> skip ;

// spaces and tabs only
WS              : [ \t]+ -> skip ;

// Capture the entire asm { ... } block as one token so that raw x86 instruction
// syntax (commas, brackets, register names, etc.) needs no special parser rules.
// The AST builder parses the line content from the token text.
AsmBlock        : 'asm' [ \t]* '{' ~[}]* '}' ;
