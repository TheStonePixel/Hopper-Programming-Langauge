# modules/linux — TODO

All functions use `syscall()` directly. No libc.

---

## io.hop — done: `write`, `read`, `print`, `error`

- [ ] `println(string s, int len)` — print with automatic `\n`
- [ ] `print_int(int n)` — format and print an integer without libc printf
- [ ] `stdin_read(string buf, int max)` — read up to max bytes from stdin, return count
- [ ] `stdin_read_line(string buf, int max)` — read until newline or max, return count

---

## fs.hop — done: `open`, `close`, O_ constants

- [ ] `read(int fd, string buf, int count) int` — read bytes from open fd
- [ ] `write(int fd, string buf, int count) int` — write bytes to open fd
- [ ] `lseek(int fd, int offset, int whence) int` — seek within file (SEEK_SET=0, SEEK_CUR=1, SEEK_END=2)
- [ ] `stat(string path, address buf) int` — file metadata into stat struct
- [ ] `fstat(int fd, address buf) int` — stat on open fd
- [ ] `mkdir(string path, int mode) int` — create directory
- [ ] `unlink(string path) int` — delete file
- [ ] `rename(string old, string new) int` — rename / move file
- [ ] `ftruncate(int fd, int length) int` — truncate file to length
- [ ] `dup2(int oldfd, int newfd) int` — duplicate fd (needed for redirecting stdin/stdout/stderr)
- [ ] `pipe(address fds) int` — create pipe pair
- [ ] Struct: `Stat` — mirrors Linux `struct stat` fields (size, mode, mtime, etc.)
- [ ] Constants: `SEEK_SET`, `SEEK_CUR`, `SEEK_END`

---

## sys.hop — done: `exit`, `fork`, `execve`, `waitpid`

- [ ] `getpid() int` — current process id
- [ ] `getppid() int` — parent process id
- [ ] `kill(int pid, int sig) int` — send signal to process
- [ ] `sigaction(int sig, address act, address oldact) int` — install signal handler
- [ ] `nanosleep(address req, address rem) int` — sleep with nanosecond precision
- [ ] `clock_gettime(int clockid, address ts) int` — high-res wall/monotonic clock
- [ ] `brk(address addr) address` — manual heap boundary control
- [ ] `getenv` — not a syscall; needs to read `envp` passed to entry. Design TBD.
- [ ] Constants: `SIGINT=2`, `SIGTERM=15`, `SIGKILL=9`, `SIGHUP=1`, `SIGUSR1=10`, `SIGUSR2=12`
- [ ] Constants: `CLOCK_REALTIME=0`, `CLOCK_MONOTONIC=1`
- [ ] Struct: `Timespec` — `int sec`, `int nsec`

---

## net.hop — not yet created

- [ ] `socket(int domain, int type, int protocol) int`
- [ ] `bind(int fd, address addr, int addrlen) int`
- [ ] `listen(int fd, int backlog) int`
- [ ] `accept(int fd, address addr, address addrlen) int`
- [ ] `connect(int fd, address addr, int addrlen) int`
- [ ] `send(int fd, string buf, int len, int flags) int`
- [ ] `recv(int fd, string buf, int len, int flags) int`
- [ ] `sendto(int fd, string buf, int len, int flags, address addr, int addrlen) int`
- [ ] `recvfrom(int fd, string buf, int len, int flags, address addr, address addrlen) int`
- [ ] `setsockopt(int fd, int level, int opt, address val, int len) int`
- [ ] `getsockopt(int fd, int level, int opt, address val, address len) int`
- [ ] `shutdown(int fd, int how) int`
- [ ] Struct: `SockaddrIn` — `int family`, `int port`, `int addr` (IPv4)
- [ ] Struct: `SockaddrIn6` — IPv6
- [ ] Constants: `AF_INET=2`, `AF_INET6=10`, `AF_UNIX=1`
- [ ] Constants: `SOCK_STREAM=1`, `SOCK_DGRAM=2`, `SOCK_NONBLOCK=2048`
- [ ] Constants: `SOL_SOCKET=1`, `SO_REUSEADDR=2`, `SO_REUSEPORT=15`

---

## mem.hop — not yet created

Memory management outside the heap allocator.

- [ ] `mmap(address addr, int len, int prot, int flags, int fd, int offset) address`
- [ ] `munmap(address addr, int len) int`
- [ ] `mprotect(address addr, int len, int prot) int`
- [ ] `memcpy(address dst, address src, int n)` — byte-level copy
- [ ] `memset(address dst, int val, int n)` — fill memory with value
- [ ] `memcmp(address a, address b, int n) int` — compare memory regions
- [ ] Constants: `PROT_READ=1`, `PROT_WRITE=2`, `PROT_EXEC=4`, `PROT_NONE=0`
- [ ] Constants: `MAP_PRIVATE=2`, `MAP_ANON=32`, `MAP_SHARED=1`

---

## thread.hop — not yet created

Linux threads via `clone` syscall. No pthreads.

- [ ] `thread_create(address fn, address stack, int stack_size) int` — spawn thread via clone
- [ ] `thread_join(int tid) int` — wait for thread exit
- [ ] `futex_wait(address addr, int val) int` — block on futex
- [ ] `futex_wake(address addr, int count) int` — wake futex waiters
- [ ] `Mutex` class — lock/unlock backed by futex
- [ ] Constants: `CLONE_VM`, `CLONE_FS`, `CLONE_FILES`, `CLONE_SIGHAND`, `CLONE_THREAD`
