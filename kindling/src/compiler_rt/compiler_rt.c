// compiler_rt.c — C helpers for the self-hosted Hopper compiler
//
// Provides things Hopper can't express natively yet:
//   - argv access (argv is opaque address from entry main(int argc, address argv))
//   - file I/O (open, size, read-all, close)
//   - subprocess execution (hopper_exec)
//   - string utilities (hopper_strcat_alloc, hopper_itoa)

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// ── argv ──────────────────────────────────────────────────────────────────────

// Return the i-th command-line argument string.
// argv_ptr is the char** passed as the second arg of main().
const char* hopper_argv_get(const char** argv_ptr, long i) {
    return argv_ptr[i];
}

// ── file I/O ──────────────────────────────────────────────────────────────────

// Open a file; returns NULL on failure.
FILE* hopper_fopen(const char* path, const char* mode) {
    return fopen(path, mode);
}

// Return file size in bytes (rewinds to start after measuring).
long hopper_fsize(FILE* f) {
    fseek(f, 0, SEEK_END);
    long size = ftell(f);
    rewind(f);
    return size;
}

// Read up to `len` bytes from f into buf. Returns bytes actually read.
long hopper_fread(FILE* f, char* buf, long len) {
    return (long)fread(buf, 1, (size_t)len, f);
}

// Close a file.
void hopper_fclose(FILE* f) {
    fclose(f);
}

// Allocate a buffer, read the entire file into it, null-terminate.
// Caller must free() the returned pointer.
// Returns NULL on error.
char* hopper_read_file(const char* path) {
    FILE* f = fopen(path, "rb");
    if (!f) return NULL;
    fseek(f, 0, SEEK_END);
    long size = ftell(f);
    rewind(f);
    char* buf = (char*)malloc((size_t)(size + 1));
    if (!buf) { fclose(f); return NULL; }
    fread(buf, 1, (size_t)size, f);
    buf[size] = '\0';
    fclose(f);
    return buf;
}

// Return the byte length of the null-terminated string (excludes the null).
long hopper_strlen(const char* s) {
    return (long)strlen(s);
}

// ── string utilities ───────────────────────────────────────────────────────────

// Concatenate two strings; returns a heap-allocated result. Caller must free().
char* hopper_strcat_alloc(const char* a, const char* b) {
    size_t la = strlen(a), lb = strlen(b);
    char* out = (char*)malloc(la + lb + 1);
    memcpy(out, a, la);
    memcpy(out + la, b, lb);
    out[la + lb] = '\0';
    return out;
}

// Convert integer to decimal string. Returns heap-allocated string. Caller must free().
char* hopper_itoa(long n) {
    char buf[32];
    snprintf(buf, sizeof(buf), "%ld", n);
    return strdup(buf);
}

// ── subprocess ────────────────────────────────────────────────────────────────

// Run a shell command. Returns the exit status (0 = success).
long hopper_exec(const char* cmd) {
    return (long)system(cmd);
}

// Write a string to stderr (for compiler error messages).
void hopper_eprint(const char* s) {
    fputs(s, stderr);
}

void hopper_eprint_int(long n) {
    fprintf(stderr, "%ld", n);
}
