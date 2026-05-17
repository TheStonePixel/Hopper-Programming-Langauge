// test_api.cpp — unit tests for hopper_parse_api C interface
//
// Build and run:  make test
//
// Each test function returns 1 on pass, 0 on fail.
// Results are printed and a non-zero exit code is returned on any failure.

#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <cassert>

// Pull in the C API declarations.
extern "C" {
    struct ParseHandle;
    struct NodeHandle;

    ParseHandle* hopper_parse(const char* src, int len);
    void         hopper_parse_free(ParseHandle* h);
    const char*  hopper_parse_error(ParseHandle* h);
    void*        hopper_parse_root(ParseHandle* h);

    int   hopper_node_is_terminal(void* node);
    int   hopper_node_type(void* node);
    int   hopper_node_token_type(void* node);
    char* hopper_node_text(void* node);
    int   hopper_node_child_count(void* node);
    void* hopper_node_child(void* node, int i);

    int hopper_rule_program();
    int hopper_rule_topLevelDecl();
    int hopper_rule_functionDecl();
    int hopper_rule_entryDecl();
    int hopper_rule_expression();
    int hopper_rule_statement();
    int hopper_rule_block();
    int hopper_rule_param();
    int hopper_rule_paramList();
    int hopper_rule_type();
    int hopper_rule_importDecl();
}

// ── test helpers ───────────────────────────────────────────────────────────

static int passed = 0;
static int failed = 0;

#define CHECK(cond, msg) \
    do { \
        if (cond) { \
            printf("  PASS  %s\n", msg); passed++; \
        } else { \
            printf("  FAIL  %s  (line %d)\n", msg, __LINE__); failed++; \
        } \
    } while (0)

static ParseHandle* parse(const char* src) {
    return hopper_parse(src, (int)strlen(src));
}

// Walk down to the first non-terminal child at each level, up to `depth` levels.
static void* first_rule_child(void* node) {
    int n = hopper_node_child_count(node);
    for (int i = 0; i < n; i++) {
        void* c = hopper_node_child(node, i);
        if (!hopper_node_is_terminal(c)) return c;
    }
    return nullptr;
}

// ── tests ──────────────────────────────────────────────────────────────────

static void test_parse_success() {
    printf("\n[parse_success]\n");
    const char* src = "entry main { }\n";
    ParseHandle* h = parse(src);

    CHECK(h != nullptr,             "handle is non-null");
    CHECK(hopper_parse_error(h) == nullptr, "no parse error");

    void* root = hopper_parse_root(h);
    CHECK(root != nullptr,                          "root is non-null");
    CHECK(hopper_node_type(root) == hopper_rule_program(), "root is program rule");
    CHECK(!hopper_node_is_terminal(root),           "root is not a terminal");

    hopper_parse_free(h);
}

static void test_parse_error() {
    printf("\n[parse_error]\n");
    const char* src = "entry { broken !!!\n";
    ParseHandle* h = parse(src);

    CHECK(h != nullptr,                        "handle is non-null even on error");
    const char* err = hopper_parse_error(h);
    CHECK(err != nullptr,                      "error string is non-null");
    CHECK(strlen(err) > 0,                     "error string is non-empty");
    printf("  info  error = \"%s\"\n", err);

    hopper_parse_free(h);
}

static void test_empty_program() {
    printf("\n[empty_program]\n");
    ParseHandle* h = parse("");

    CHECK(h != nullptr,                        "handle non-null");
    CHECK(hopper_parse_error(h) == nullptr,    "no parse error for empty input");

    void* root = hopper_parse_root(h);
    CHECK(hopper_node_type(root) == hopper_rule_program(), "root is program");
    // Empty program: only EOF terminal child.
    int n = hopper_node_child_count(root);
    CHECK(n >= 0, "child count non-negative");

    hopper_parse_free(h);
}

static void test_extern_function_decl() {
    printf("\n[extern_function_decl]\n");
    const char* src = "extern function add(int a, int b) int\n";
    ParseHandle* h = parse(src);

    CHECK(hopper_parse_error(h) == nullptr, "no parse error");

    void* root  = hopper_parse_root(h);
    void* tld   = first_rule_child(root);   // topLevelDecl
    CHECK(tld != nullptr, "topLevelDecl child found");
    CHECK(hopper_node_type(tld) == hopper_rule_topLevelDecl(), "it is topLevelDecl");

    void* fdecl = first_rule_child(tld);    // should reach functionDecl
    CHECK(fdecl != nullptr, "inner rule child found");

    hopper_parse_free(h);
}

static void test_entry_decl() {
    printf("\n[entry_decl]\n");
    const char* src = "entry main {\n    int x = 1\n}\n";
    ParseHandle* h = parse(src);

    CHECK(hopper_parse_error(h) == nullptr, "no parse error");

    void* root = hopper_parse_root(h);
    void* tld  = first_rule_child(root);
    CHECK(tld != nullptr, "topLevelDecl found");
    CHECK(hopper_node_type(tld) == hopper_rule_topLevelDecl(), "is topLevelDecl");

    void* entry = first_rule_child(tld);
    CHECK(entry != nullptr, "entryDecl found");
    CHECK(hopper_node_type(entry) == hopper_rule_entryDecl(), "is entryDecl");

    hopper_parse_free(h);
}

static void test_child_bounds() {
    printf("\n[child_bounds]\n");
    const char* src = "entry main { }\n";
    ParseHandle* h = parse(src);

    void* root = hopper_parse_root(h);
    int n = hopper_node_child_count(root);
    CHECK(n > 0, "root has children");

    // Out-of-bounds access should return null, not crash.
    void* neg = hopper_node_child(root, -1);
    CHECK(neg == nullptr, "child(-1) returns null");

    void* beyond = hopper_node_child(root, n + 100);
    CHECK(beyond == nullptr, "child(n+100) returns null");

    hopper_parse_free(h);
}

static void test_terminal_node() {
    printf("\n[terminal_node]\n");
    const char* src = "entry main { }\n";
    ParseHandle* h = parse(src);

    void* root = hopper_parse_root(h);
    int n = hopper_node_child_count(root);

    // Last child of program is always EOF (terminal).
    void* last = hopper_node_child(root, n - 1);
    CHECK(last != nullptr, "last child non-null");
    CHECK(hopper_node_is_terminal(last) == 1, "last child is terminal (EOF)");
    CHECK(hopper_node_type(last) == -1,       "terminal has type -1");
    int tt = hopper_node_token_type(last);
    // ANTLR4 uses -1 for EOF token type — that is the correct value, not an error.
    CHECK(tt == -1, "EOF token type is -1 (ANTLR4 convention)");
    printf("  info  EOF token type = %d\n", tt);

    hopper_parse_free(h);
}

static void test_node_text() {
    printf("\n[node_text]\n");
    const char* src = "entry main { }\n";
    ParseHandle* h = parse(src);

    void* root = hopper_parse_root(h);
    // Walk to entry keyword terminal — first terminal child of first rule child.
    void* tld = first_rule_child(root);
    CHECK(tld != nullptr, "tld found");

    void* entry_rule = first_rule_child(tld);
    CHECK(entry_rule != nullptr, "entry rule found");

    // First child of entryDecl should be the 'entry' keyword terminal.
    void* kw = hopper_node_child(entry_rule, 0);
    CHECK(kw != nullptr, "first child of entryDecl non-null");
    CHECK(hopper_node_is_terminal(kw) == 1, "first child is terminal");

    char* text = hopper_node_text(kw);
    CHECK(text != nullptr, "text is non-null");
    CHECK(strcmp(text, "entry") == 0, "text is 'entry'");
    free(text);

    hopper_parse_free(h);
}

static void test_rule_index_helpers() {
    printf("\n[rule_index_helpers]\n");
    // All helpers should return distinct non-negative values.
    int prog  = hopper_rule_program();
    int tld   = hopper_rule_topLevelDecl();
    int fn    = hopper_rule_functionDecl();
    int entry = hopper_rule_entryDecl();
    int expr  = hopper_rule_expression();
    int stmt  = hopper_rule_statement();
    int blk   = hopper_rule_block();
    int param = hopper_rule_param();
    int plist = hopper_rule_paramList();
    int type  = hopper_rule_type();
    int imp   = hopper_rule_importDecl();

    CHECK(prog  >= 0, "program >= 0");
    CHECK(tld   >= 0, "topLevelDecl >= 0");
    CHECK(fn    >= 0, "functionDecl >= 0");
    CHECK(entry >= 0, "entryDecl >= 0");
    CHECK(expr  >= 0, "expression >= 0");
    CHECK(stmt  >= 0, "statement >= 0");
    CHECK(blk   >= 0, "block >= 0");
    CHECK(param >= 0, "param >= 0");
    CHECK(plist >= 0, "paramList >= 0");
    CHECK(type  >= 0, "type >= 0");
    CHECK(imp   >= 0, "importDecl >= 0");

    // All distinct from each other (spot-check the most likely collisions).
    CHECK(prog != tld,   "program != topLevelDecl");
    CHECK(tld  != fn,    "topLevelDecl != functionDecl");
    CHECK(fn   != entry, "functionDecl != entryDecl");
    CHECK(expr != stmt,  "expression != statement");

    printf("  info  program=%d topLevelDecl=%d functionDecl=%d entryDecl=%d\n",
           prog, tld, fn, entry);
}

static void test_multiple_top_level() {
    printf("\n[multiple_top_level]\n");
    const char* src =
        "extern function foo() int\n"
        "extern function bar(int x) int\n"
        "entry main { }\n";
    ParseHandle* h = parse(src);

    CHECK(hopper_parse_error(h) == nullptr, "no parse error");

    void* root = hopper_parse_root(h);
    // Count rule children (non-terminals) — should be 3 topLevelDecls.
    int rule_kids = 0;
    int total = hopper_node_child_count(root);
    for (int i = 0; i < total; i++) {
        void* c = hopper_node_child(root, i);
        if (!hopper_node_is_terminal(c)) rule_kids++;
    }
    CHECK(rule_kids == 3, "three topLevelDecl children");

    hopper_parse_free(h);
}

// ── main ───────────────────────────────────────────────────────────────────

int main() {
    printf("hopper_parse_api — C API tests\n");
    printf("================================\n");

    test_parse_success();
    test_parse_error();
    test_empty_program();
    test_extern_function_decl();
    test_entry_decl();
    test_child_bounds();
    test_terminal_node();
    test_node_text();
    test_rule_index_helpers();
    test_multiple_top_level();

    printf("\n================================\n");
    printf("Results: %d passed, %d failed\n", passed, failed);
    return failed > 0 ? 1 : 0;
}
