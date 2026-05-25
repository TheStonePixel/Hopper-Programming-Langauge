/*
 * bench.c — pipeline comparison: Hopper implementations vs GNU (C) utilities
 *
 * For each test case, runs the same pipeline twice — once through the Hopper
 * binaries and once through the system GNU binaries — on identical input.
 * Compares outputs byte-for-byte and reports timing.
 *
 * Usage: ./bench
 *
 * Requires that the Hopper programs have been built with `hopper build` first:
 *   hopper/programs/unix/tr/build/tr
 *   hopper/programs/unix/cut/build/cut
 *   hopper/programs/unix/uniq/build/uniq
 */

#define _GNU_SOURCE
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/wait.h>
#include <sys/mman.h>
#include <time.h>
#include <limits.h>

/* ── Paths ─────────────────────────────────────────────────────────────── */

#ifndef HOPPER_ROOT
#define HOPPER_ROOT "/home/user/Hopper-Programming-Langauge"
#endif

#define H_TR   HOPPER_ROOT "/hopper/programs/unix/tr/build/tr"
#define H_CUT  HOPPER_ROOT "/hopper/programs/unix/cut/build/cut"
#define H_UNIQ HOPPER_ROOT "/hopper/programs/unix/uniq/build/uniq"
#define G_TR   "/usr/bin/tr"
#define G_CUT  "/usr/bin/cut"
#define G_UNIQ "/usr/bin/uniq"

/* ── Types ─────────────────────────────────────────────────────────────── */

#define MAX_STAGES 4
#define MAX_ARGS   12
#define OUT_CAP    (64 * 1024 * 1024)
#define NRUNS      3

typedef struct {
    const char *path;
    const char *args[MAX_ARGS];  /* args[0] = argv[0]; null-terminated */
} Stage;

typedef struct {
    const char *name;
    int         nstages;
    Stage       hop[MAX_STAGES];
    Stage       gnu[MAX_STAGES];
} Pipeline;

/* ── Monotonic clock ───────────────────────────────────────────────────── */

static long ns_now(void) {
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC, &ts);
    return (long)ts.tv_sec * 1000000000L + (long)ts.tv_nsec;
}

/* ── Input: anonymous file ─────────────────────────────────────────────── */

static int make_input_fd(const char *data, int len) {
    int fd = memfd_create("bench_input", 0);
    if (fd < 0) { perror("memfd_create"); exit(1); }
    const char *p = data;
    int rem = len;
    while (rem > 0) {
        int n = (int)write(fd, p, rem);
        if (n < 0) { perror("write memfd"); exit(1); }
        p += n; rem -= n;
    }
    lseek(fd, 0, SEEK_SET);
    return fd;
}

/* ── Pipeline runner ───────────────────────────────────────────────────── */

/*
 * Runs `nstages` commands in a pipe chain.
 * Stage 0 reads from input_fd (which this function closes).
 * Stage i's stdout feeds stage i+1's stdin via pipes[i].
 * The final stage's stdout is read into out_buf; *out_len is set.
 * Returns elapsed nanoseconds (wall clock).
 */
static long run_pipeline(Stage *s, int nstages, int input_fd,
                          char *out_buf, int *out_len) {
    /* pipes[i] carries stage i's stdout → stage i+1's stdin (or parent) */
    int pipes[MAX_STAGES][2];
    for (int i = 0; i < nstages; i++) {
        if (pipe(pipes[i]) < 0) { perror("pipe"); exit(1); }
    }

    long t0 = ns_now();

    pid_t pids[MAX_STAGES];
    for (int i = 0; i < nstages; i++) {
        pids[i] = fork();
        if (pids[i] < 0) { perror("fork"); exit(1); }
        if (pids[i] == 0) {
            /* stdin: stage 0 reads input_fd; others read the previous pipe */
            int src = (i == 0) ? input_fd : pipes[i - 1][0];
            if (src != STDIN_FILENO)  dup2(src, STDIN_FILENO);

            /* stdout: write into this stage's pipe */
            if (pipes[i][1] != STDOUT_FILENO) dup2(pipes[i][1], STDOUT_FILENO);

            /* close every pipe fd (the dup2'd ones survive as 0/1) */
            close(input_fd);
            for (int j = 0; j < nstages; j++) {
                close(pipes[j][0]);
                close(pipes[j][1]);
            }

            execv(s[i].path, (char *const *)s[i].args);
            perror(s[i].path);
            _exit(127);
        }
    }

    /* Parent: close everything except the final output pipe read end */
    close(input_fd);
    for (int i = 0; i < nstages; i++) {
        close(pipes[i][1]);
        if (i < nstages - 1) close(pipes[i][0]);
    }

    /* Drain output */
    *out_len = 0;
    for (;;) {
        int n = (int)read(pipes[nstages - 1][0],
                          out_buf + *out_len, OUT_CAP - *out_len);
        if (n <= 0) break;
        *out_len += n;
    }
    close(pipes[nstages - 1][0]);

    for (int i = 0; i < nstages; i++) {
        int st;
        waitpid(pids[i], &st, 0);
    }

    return ns_now() - t0;
}

/* ── Output comparison ─────────────────────────────────────────────────── */

static int compare_outputs(const char *h, int hlen, const char *g, int glen) {
    if (hlen == glen && memcmp(h, g, hlen) == 0) return 1;

    int i = 0;
    while (i < hlen && i < glen && h[i] == g[i]) i++;

    int line = 1;
    for (int j = 0; j < i; j++) if (h[j] == '\n') line++;

    printf("MISMATCH — hopper %d bytes, gnu %d bytes, first diff at byte %d (line ~%d)\n",
           hlen, glen, i, line);

    /* Show ~60 chars of context around the diff */
    int lo = i > 30 ? i - 30 : 0;
    printf("  hopper[%d..]: ", lo);
    for (int j = lo; j < lo + 60 && j < hlen; j++) {
        unsigned char c = (unsigned char)h[j];
        putchar(c == '\n' ? '$' : c == '\t' ? '>' : (c >= 32 && c < 127 ? c : '.'));
    }
    putchar('\n');
    printf("  gnu   [%d..]: ", lo);
    for (int j = lo; j < lo + 60 && j < glen; j++) {
        unsigned char c = (unsigned char)g[j];
        putchar(c == '\n' ? '$' : c == '\t' ? '>' : (c >= 32 && c < 127 ? c : '.'));
    }
    putchar('\n');
    return 0;
}

/* ── Input generators ──────────────────────────────────────────────────── */

static unsigned lcg = 0x9e3779b9u;
static unsigned lcg_next(void) {
    lcg = lcg * 1664525u + 1013904223u;
    return lcg;
}

/* `nlines` lines of `linelen` random lowercase letters + newline */
static char *gen_lower_lines(int nlines, int linelen, int *out_len) {
    int total = nlines * (linelen + 1);
    char *buf = malloc(total);
    if (!buf) { perror("malloc"); exit(1); }
    int pos = 0;
    for (int i = 0; i < nlines; i++) {
        for (int c = 0; c < linelen; c++)
            buf[pos++] = 'a' + (lcg_next() % 26);
        buf[pos++] = '\n';
    }
    *out_len = total;
    return buf;
}

/* `nlines` lines where every `run` consecutive lines are identical,
 * each line is `linelen` lowercase letters.                            */
static char *gen_dup_lines(int nlines, int run, int linelen, int *out_len) {
    int total = nlines * (linelen + 1);
    char *buf = malloc(total);
    if (!buf) { perror("malloc"); exit(1); }
    int pos = 0;
    char line[256];
    for (int g = 0; g < nlines; g += run) {
        /* build one unique line deterministically */
        for (int c = 0; c < linelen; c++)
            line[c] = 'a' + ((g / run * 7 + c * 3) % 26);
        for (int r = 0; r < run && g + r < nlines; r++) {
            memcpy(buf + pos, line, linelen);
            pos += linelen;
            buf[pos++] = '\n';
        }
    }
    *out_len = pos;
    return buf;
}

/* `nlines` tab-delimited lines: field1 TAB field2 TAB field3 NEWLINE.
 * Each field is `flen` random lowercase letters.                       */
static char *gen_tab_fields(int nlines, int nfields, int flen, int *out_len) {
    int line_size = nfields * flen + nfields;  /* flen*nfields + (tabs + newline) */
    int total = nlines * line_size;
    char *buf = malloc(total);
    if (!buf) { perror("malloc"); exit(1); }
    int pos = 0;
    for (int i = 0; i < nlines; i++) {
        for (int f = 0; f < nfields; f++) {
            for (int c = 0; c < flen; c++)
                buf[pos++] = 'a' + (lcg_next() % 26);
            buf[pos++] = (f < nfields - 1) ? '\t' : '\n';
        }
    }
    *out_len = total;
    return buf;
}

/* `nlines` tab-delimited lines where field 1 repeats every `run` lines */
static char *gen_tab_dup_field1(int nlines, int run, int flen, int *out_len) {
    int nfields = 3;
    int line_size = nfields * flen + nfields;
    int total = nlines * line_size;
    char *buf = malloc(total);
    if (!buf) { perror("malloc"); exit(1); }
    int pos = 0;
    char f1[64];
    for (int i = 0; i < nlines; i++) {
        /* field 1 repeats every `run` lines */
        if (i % run == 0) {
            for (int c = 0; c < flen; c++)
                f1[c] = 'a' + ((i / run * 7 + c * 3) % 26);
        }
        memcpy(buf + pos, f1, flen); pos += flen; buf[pos++] = '\t';
        for (int c = 0; c < flen; c++) buf[pos++] = 'a' + (lcg_next() % 26);
        buf[pos++] = '\t';
        for (int c = 0; c < flen; c++) buf[pos++] = 'a' + (lcg_next() % 26);
        buf[pos++] = '\n';
    }
    *out_len = pos;
    return buf;
}

/* ── Run one benchmark ─────────────────────────────────────────────────── */

static char *hop_out;
static char *gnu_out;

static void bench(Pipeline *p, const char *input, int input_len) {
    long hop_ns = LONG_MAX, gnu_ns = LONG_MAX;
    int  hop_len = 0, gnu_len = 0;

    /* warmup */
    {
        int fd = make_input_fd(input, input_len);
        run_pipeline(p->hop, p->nstages, fd, hop_out, &hop_len);
        fd = make_input_fd(input, input_len);
        run_pipeline(p->gnu, p->nstages, fd, gnu_out, &gnu_len);
    }

    for (int r = 0; r < NRUNS; r++) {
        int fd = make_input_fd(input, input_len);
        long t = run_pipeline(p->hop, p->nstages, fd, hop_out, &hop_len);
        if (t < hop_ns) hop_ns = t;
    }
    for (int r = 0; r < NRUNS; r++) {
        int fd = make_input_fd(input, input_len);
        long t = run_pipeline(p->gnu, p->nstages, fd, gnu_out, &gnu_len);
        if (t < gnu_ns) gnu_ns = t;
    }

    double hop_ms = hop_ns / 1e6;
    double gnu_ms = gnu_ns / 1e6;

    /* left-align pipeline name in 40 chars */
    printf("%-40s  %7.1f ms  %7.1f ms  ", p->name, hop_ms, gnu_ms);

    if (hop_ns <= gnu_ns)
        printf("Hopper %4.2fx faster  ", (double)gnu_ns / hop_ns);
    else
        printf("GNU    %4.2fx faster  ", (double)hop_ns / gnu_ns);

    int ok = compare_outputs(hop_out, hop_len, gnu_out, gnu_len);
    if (ok) printf("OK\n");
}

/* ── Main ──────────────────────────────────────────────────────────────── */

int main(void) {
    hop_out = malloc(OUT_CAP);
    gnu_out = malloc(OUT_CAP);
    if (!hop_out || !gnu_out) { perror("malloc"); return 1; }

    printf("Hopper vs GNU pipeline benchmark  (1 warmup + best of %d)\n\n", NRUNS);
    printf("%-40s  %11s  %11s  %-22s  %s\n",
           "Pipeline", "Hopper", "GNU (C)", "Winner", "Output");
    printf("%-40s  %11s  %11s  %-22s  %s\n",
           "────────────────────────────────────────",
           "───────────", "───────────",
           "──────────────────────", "──────");

    /* ── 1. tr a-z A-Z  (30 MB) ──────────────────────────────────────── */
    {
        int len;
        char *in = gen_lower_lines(30 * 1024 * 1024 / 80, 79, &len);
        Pipeline p = {
            .name = "tr 'a-z' 'A-Z'  (30 MB)",
            .nstages = 1,
            .hop = {{ H_TR, {"tr", "a-z", "A-Z", NULL} }},
            .gnu = {{ G_TR, {"tr", "a-z", "A-Z", NULL} }},
        };
        bench(&p, in, len);
        free(in);
    }

    /* ── 2. cut -f 2  (16 MB, 3 × 10-char fields) ────────────────────── */
    {
        int len;
        char *in = gen_tab_fields(16 * 1024 * 1024 / 33, 3, 10, &len);
        Pipeline p = {
            .name = "cut -f 2  (16 MB, 3×10 fields)",
            .nstages = 1,
            .hop = {{ H_CUT, {"cut", "-f", "2", NULL} }},
            .gnu = {{ G_CUT, {"cut", "-f", "2", NULL} }},
        };
        bench(&p, in, len);
        free(in);
    }

    /* ── 3. uniq  (3 MB, run=5, 30-char lines) ────────────────────────── */
    {
        int len;
        char *in = gen_dup_lines(3 * 1024 * 1024 / 31, 5, 30, &len);
        Pipeline p = {
            .name = "uniq  (3 MB, run=5)",
            .nstages = 1,
            .hop = {{ H_UNIQ, {"uniq", NULL} }},
            .gnu = {{ G_UNIQ, {"uniq", NULL} }},
        };
        bench(&p, in, len);
        free(in);
    }

    /* ── 4. tr | uniq  (4 MB, lowercase dup lines) ───────────────────── */
    {
        int len;
        char *in = gen_dup_lines(4 * 1024 * 1024 / 51, 4, 50, &len);
        Pipeline p = {
            .name = "tr 'a-z' 'A-Z' | uniq  (4 MB)",
            .nstages = 2,
            .hop = {
                { H_TR,   {"tr",   "a-z", "A-Z", NULL} },
                { H_UNIQ, {"uniq", NULL}               },
            },
            .gnu = {
                { G_TR,   {"tr",   "a-z", "A-Z", NULL} },
                { G_UNIQ, {"uniq", NULL}               },
            },
        };
        bench(&p, in, len);
        free(in);
    }

    /* ── 5. cut | tr  (4 MB, tab-delimited lowercase) ────────────────── */
    {
        int len;
        char *in = gen_tab_fields(4 * 1024 * 1024 / 33, 3, 10, &len);
        Pipeline p = {
            .name = "cut -f 2 | tr 'a-z' 'A-Z'  (4 MB)",
            .nstages = 2,
            .hop = {
                { H_CUT, {"cut", "-f", "2", NULL}      },
                { H_TR,  {"tr",  "a-z", "A-Z", NULL}   },
            },
            .gnu = {
                { G_CUT, {"cut", "-f", "2", NULL}      },
                { G_TR,  {"tr",  "a-z", "A-Z", NULL}   },
            },
        };
        bench(&p, in, len);
        free(in);
    }

    /* ── 6. cut | uniq  (4 MB, field 1 repeats every 4 lines) ─────────── */
    {
        int len;
        char *in = gen_tab_dup_field1(4 * 1024 * 1024 / 33, 4, 10, &len);
        Pipeline p = {
            .name = "cut -f 1 | uniq  (4 MB, field dupes)",
            .nstages = 2,
            .hop = {
                { H_CUT,  {"cut",  "-f", "1", NULL} },
                { H_UNIQ, {"uniq", NULL}            },
            },
            .gnu = {
                { G_CUT,  {"cut",  "-f", "1", NULL} },
                { G_UNIQ, {"uniq", NULL}            },
            },
        };
        bench(&p, in, len);
        free(in);
    }

    /* ── 7. tr | cut | uniq  (3-stage, 4 MB) ─────────────────────────── */
    {
        int len;
        char *in = gen_tab_dup_field1(4 * 1024 * 1024 / 33, 3, 10, &len);
        Pipeline p = {
            .name = "tr | cut -f 1 | uniq  (4 MB, 3-stage)",
            .nstages = 3,
            .hop = {
                { H_TR,   {"tr",   "a-z", "A-Z", NULL} },
                { H_CUT,  {"cut",  "-f", "1", NULL}    },
                { H_UNIQ, {"uniq", NULL}               },
            },
            .gnu = {
                { G_TR,   {"tr",   "a-z", "A-Z", NULL} },
                { G_CUT,  {"cut",  "-f", "1", NULL}    },
                { G_UNIQ, {"uniq", NULL}               },
            },
        };
        bench(&p, in, len);
        free(in);
    }

    printf("%-40s  %11s  %11s  %-22s  %s\n",
           "────────────────────────────────────────",
           "───────────", "───────────",
           "──────────────────────", "──────");

    free(hop_out);
    free(gnu_out);
    return 0;
}
