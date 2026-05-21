// termios_helper.c — C side of raw-mode terminal setup for he
// Compiled and linked alongside the Hopper IR output.
#include <termios.h>
#include <sys/ioctl.h>
#include <unistd.h>

static struct termios orig_termios;

void he_raw_enable(void) {
    struct termios raw;
    tcgetattr(STDIN_FILENO, &orig_termios);
    raw = orig_termios;
    raw.c_lflag &= ~(unsigned)(ECHO | ICANON | ISIG | IEXTEN);
    raw.c_iflag &= ~(unsigned)(IXON | ICRNL | BRKINT | INPCK | ISTRIP);
    raw.c_oflag &= ~(unsigned)(OPOST);
    raw.c_cflag |= (unsigned)(CS8);
    raw.c_cc[VMIN]  = 0;
    raw.c_cc[VTIME] = 1;
    tcsetattr(STDIN_FILENO, TCSAFLUSH, &raw);
}

void he_raw_disable(void) {
    tcsetattr(STDIN_FILENO, TCSAFLUSH, &orig_termios);
}

long he_term_rows(void) {
    struct winsize ws;
    if (ioctl(STDOUT_FILENO, TIOCGWINSZ, &ws) == -1) return 24;
    return (long)ws.ws_row;
}

long he_term_cols(void) {
    struct winsize ws;
    if (ioctl(STDOUT_FILENO, TIOCGWINSZ, &ws) == -1) return 80;
    return (long)ws.ws_col;
}
