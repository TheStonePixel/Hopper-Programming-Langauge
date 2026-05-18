#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

// ── RNG ───────────────────────────────────────────────────────────────────────

static long long rng_step(long long *state) {
    long long s = *state;
    s = s * 1664525 + 1013904223;
    *state = s;
    long long r = (s ^ (s >> 16)) & 0x7FFFFFFF;
    return r;
}

static long long rng_mod(long long *state, long long n) {
    return rng_step(state) % n;
}

// ── Board ─────────────────────────────────────────────────────────────────────

static long long *board_alloc(void) {
    long long *b = malloc(100 * sizeof(long long));
    memset(b, 0, 100 * sizeof(long long));
    return b;
}

static int can_place(long long *board, int r, int c, int len, int dir) {
    for (int i = 0; i < len; i++) {
        int rr = r, cc = c;
        if (dir == 0) cc = c + i;
        if (dir == 1) rr = r + i;
        if (rr >= 10 || cc >= 10) return 0;
        if (board[rr * 10 + cc] == 1) return 0;
    }
    return 1;
}

static void place_ship(long long *board, int len, long long *rng) {
    while (1) {
        int r   = (int)rng_mod(rng, 10);
        int c   = (int)rng_mod(rng, 10);
        int dir = (int)rng_mod(rng, 2);
        if (!can_place(board, r, c, len, dir)) continue;
        for (int i = 0; i < len; i++) {
            int rr = r, cc = c;
            if (dir == 0) cc = c + i;
            if (dir == 1) rr = r + i;
            board[rr * 10 + cc] = 1;
        }
        return;
    }
}

static void place_fleet(long long *board, long long *rng) {
    place_ship(board, 5, rng);
    place_ship(board, 4, rng);
    place_ship(board, 3, rng);
    place_ship(board, 3, rng);
    place_ship(board, 2, rng);
}

static int ships_left(long long *board) {
    int count = 0;
    for (int i = 0; i < 100; i++)
        if (board[i] == 1) count++;
    return count;
}

static void bot_turn(long long *board, long long *rng) {
    while (1) {
        int r = (int)rng_mod(rng, 10);
        int c = (int)rng_mod(rng, 10);
        long long v = board[r * 10 + c];
        if (v == 0) { board[r * 10 + c] = 3; return; }
        if (v == 1) { board[r * 10 + c] = 2; return; }
    }
}

// ── Timing ────────────────────────────────────────────────────────────────────

static long long now_ms(void) {
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC, &ts);
    return (long long)ts.tv_sec * 1000 + ts.tv_nsec / 1000000;
}

// ── Single game ───────────────────────────────────────────────────────────────

static int run_game(long long *rng) {
    long long *player   = board_alloc();
    long long *computer = board_alloc();

    place_fleet(player,   rng);
    place_fleet(computer, rng);

    int shots = 0;
    while (1) {
        bot_turn(computer, rng);
        shots++;
        if (ships_left(computer) == 0) break;
        bot_turn(player, rng);
        shots++;
        if (ships_left(player) == 0) break;
    }

    free(player);
    free(computer);
    return shots;
}

// ── Entry ─────────────────────────────────────────────────────────────────────

int main(void) {
    const int GAMES = 100000;
    long long rng = 42;
    long long total_shots = 0;

    long long t1 = now_ms();
    for (int g = 0; g < GAMES; g++)
        total_shots += run_game(&rng);
    long long t2 = now_ms();

    printf("Battleship C (reference)\n");
    printf("  Games:     %d\n", GAMES);
    printf("  Time:      %lld ms\n", t2 - t1);
    printf("  Avg shots: %lld per game\n", total_shots / GAMES);
    return 0;
}
