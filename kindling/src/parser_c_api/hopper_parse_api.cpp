// hopper_parse_api.cpp — thin C wrapper around the ANTLR4 C++ Hopper parser
//
// Exposes a minimal C API so Hopper can call the parser via extern function:
//
//   extern function hopper_parse(string src, int len) address   // ParseHandle*
//   extern function hopper_parse_free(address h)
//   extern function hopper_parse_error(address h) string        // null if ok
//   extern function hopper_node_type(address n) int             // rule index or -1 for token
//   extern function hopper_node_text(address n) string
//   extern function hopper_node_child_count(address n) int
//   extern function hopper_node_child(address n, int i) address // NodeHandle*
//   extern function hopper_node_is_terminal(address n) int      // 1 = token, 0 = rule node
//   extern function hopper_node_token_type(address n) int       // token type (-1 if rule node)

#include <antlr4-runtime/antlr4-runtime.h>
#include "../generated_cpp/HopperLexer.h"
#include "../generated_cpp/HopperParser.h"
#include <string>
#include <cstring>
#include <cstdlib>

struct ParseHandle {
    antlr4::ANTLRInputStream   input;
    HopperLexer                lexer;
    antlr4::CommonTokenStream  tokens;
    HopperParser               parser;
    antlr4::tree::ParseTree*   tree;
    std::string                error;

    ParseHandle(const char* src, size_t len)
        : input(src, len)
        , lexer(&input)
        , tokens(&lexer)
        , parser(&tokens)
        , tree(nullptr)
    {
        // Silence default ANTLR error output; collect errors as string instead.
        lexer.removeErrorListeners();
        parser.removeErrorListeners();

        struct CollectErrors : public antlr4::BaseErrorListener {
            std::string& out;
            CollectErrors(std::string& o) : out(o) {}
            void syntaxError(antlr4::Recognizer*, antlr4::Token*,
                             size_t line, size_t col,
                             const std::string& msg, std::exception_ptr) override {
                out += "line " + std::to_string(line) + ":" +
                       std::to_string(col) + " " + msg + "\n";
            }
        };

        CollectErrors errListener(error);
        lexer.addErrorListener(&errListener);
        parser.addErrorListener(&errListener);

        tree = parser.program();
    }
};

extern "C" {

// Parse src (len bytes). Returns an opaque ParseHandle*.
// Caller must free with hopper_parse_free().
ParseHandle* hopper_parse(const char* src, int len) {
    return new ParseHandle(src, (size_t)len);
}

// Free a ParseHandle.
void hopper_parse_free(ParseHandle* h) {
    delete h;
}

// Returns null if parsing succeeded, otherwise a null-terminated error string.
// The string is owned by the ParseHandle — do not free it.
const char* hopper_parse_error(ParseHandle* h) {
    if (h->error.empty()) return nullptr;
    return h->error.c_str();
}

// Returns the root parse tree node (program rule).
antlr4::tree::ParseTree* hopper_parse_root(ParseHandle* h) {
    return h->tree;
}

// 1 if this node is a terminal (token), 0 if it is a rule node.
int hopper_node_is_terminal(antlr4::tree::ParseTree* node) {
    return dynamic_cast<antlr4::tree::TerminalNode*>(node) != nullptr ? 1 : 0;
}

// Rule index for rule nodes (matches HopperParser::RuleXxx constants).
// Returns -1 for terminal nodes.
int hopper_node_type(antlr4::tree::ParseTree* node) {
    auto* ctx = dynamic_cast<antlr4::ParserRuleContext*>(node);
    if (!ctx) return -1;
    return (int)ctx->getRuleIndex();
}

// Token type for terminal nodes (matches HopperLexer token constants).
// Returns -1 for rule nodes.
int hopper_node_token_type(antlr4::tree::ParseTree* node) {
    auto* term = dynamic_cast<antlr4::tree::TerminalNode*>(node);
    if (!term) return -1;
    return (int)term->getSymbol()->getType();
}

// Source text of this node (for terminals: the token text; for rules: the full span).
// Returns a heap-allocated C string — caller must free().
char* hopper_node_text(antlr4::tree::ParseTree* node) {
    std::string t = node->getText();
    char* out = (char*)malloc(t.size() + 1);
    memcpy(out, t.data(), t.size() + 1);
    return out;
}

// Number of children.
int hopper_node_child_count(antlr4::tree::ParseTree* node) {
    return (int)node->children.size();
}

// i-th child node.
antlr4::tree::ParseTree* hopper_node_child(antlr4::tree::ParseTree* node, int i) {
    if (i < 0 || i >= (int)node->children.size()) return nullptr;
    return node->children[(size_t)i];
}

// Rule name constants — mirrors HopperParser rule indices so Hopper code
// can compare hopper_node_type() against these without hardcoding numbers.
int hopper_rule_program()         { return HopperParser::RuleProgram; }
int hopper_rule_topLevelDecl()    { return HopperParser::RuleTopLevelDecl; }
int hopper_rule_functionDecl()    { return HopperParser::RuleFunctionDecl; }
int hopper_rule_classDecl()       { return HopperParser::RuleClassDecl; }
int hopper_rule_structDecl()      { return HopperParser::RuleStructDecl; }
int hopper_rule_templateDecl()    { return HopperParser::RuleTemplateDecl; }
int hopper_rule_interfaceDecl()   { return HopperParser::RuleInterfaceDecl; }
int hopper_rule_entryDecl()       { return HopperParser::RuleEntryDecl; }
int hopper_rule_constDecl()       { return HopperParser::RuleConstDecl; }
int hopper_rule_aliasDecl()       { return HopperParser::RuleAliasDecl; }
int hopper_rule_block()           { return HopperParser::RuleBlock; }
int hopper_rule_statement()       { return HopperParser::RuleStatement; }
int hopper_rule_expression()      { return HopperParser::RuleExpression; }
int hopper_rule_param()           { return HopperParser::RuleParam; }
int hopper_rule_paramList()       { return HopperParser::RuleParamList; }
int hopper_rule_type()            { return HopperParser::RuleType; }
int hopper_rule_classMember()     { return HopperParser::RuleClassMember; }
int hopper_rule_importDecl()      { return HopperParser::RuleImportDecl; }

} // extern "C"
