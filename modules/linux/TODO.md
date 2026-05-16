# modules/linux — Syscall TODO

All implementations live in `modules/x86_64/` and are re-exported through
`modules/target/` → `modules/linux/`. Syscall numbers are Linux x86-64.
ARM64 numbers differ — add `modules/arm64/` siblings when that target lands.

Calling convention (x86-64 Linux ABI):
  nr → rax | args → rdi rsi rdx r10 r8 r9 | return ← rax

---

## io.hop — done: `write` (1), `read` (0)

I/O operations on file descriptors.

- [ ] `pread64(int fd, address buf, int count, int offset) int`   — nr 17 — positional read (does not change fd offset)
- [ ] `pwrite64(int fd, address buf, int count, int offset) int`  — nr 18 — positional write
- [ ] `readv(int fd, address iov, int iovcnt) int`                — nr 19 — scatter read into multiple buffers
- [ ] `writev(int fd, address iov, int iovcnt) int`               — nr 20 — gather write from multiple buffers
- [ ] `preadv(int fd, address iov, int iovcnt, int offset) int`   — nr 295 — positional scatter read
- [ ] `pwritev(int fd, address iov, int iovcnt, int offset) int`  — nr 296 — positional gather write
- [ ] `sendfile(int outfd, int infd, address offset, int count) int` — nr 40 — zero-copy fd-to-fd transfer
- [ ] `splice(int fdin, address offin, int fdout, address offout, int len, int flags) int` — nr 275 — pipe-backed zero-copy
- [ ] `tee(int fdin, int fdout, int len, int flags) int`          — nr 276 — duplicate pipe data without consuming
- [ ] `ioctl(int fd, int request, address arg) int`               — nr 16 — device-specific control

---

## fs.hop — done: `open` (2), `close` (3)

File and directory operations.

### Core file operations
- [ ] `stat(string path, address buf) int`                        — nr 4  — file metadata (follows symlinks)
- [ ] `fstat(int fd, address buf) int`                            — nr 5  — file metadata by fd
- [ ] `lstat(string path, address buf) int`                       — nr 6  — file metadata (no symlink follow)
- [ ] `lseek(int fd, int offset, int whence) int`                 — nr 8  — seek within file
- [ ] `access(string path, int mode) int`                         — nr 21 — check file access (F_OK=0 R_OK=4 W_OK=2 X_OK=1)
- [ ] `truncate(string path, int length) int`                     — nr 76 — set file size
- [ ] `ftruncate(int fd, int length) int`                         — nr 77 — set file size by fd
- [ ] `fsync(int fd) int`                                         — nr 74 — flush file data and metadata to disk
- [ ] `fdatasync(int fd) int`                                     — nr 75 — flush file data only
- [ ] `sync() int`                                                — nr 162 — flush all pending writes to disk
- [ ] `fcntl(int fd, int cmd, int arg) int`                       — nr 72 — file descriptor control (F_DUPFD F_GETFL F_SETFL F_GETFD F_SETFD F_SETLK)
- [ ] `flock(int fd, int operation) int`                          — nr 73 — advisory lock (LOCK_SH=1 LOCK_EX=2 LOCK_UN=8 LOCK_NB=4)
- [ ] `statfs(string path, address buf) int`                      — nr 137 — filesystem statistics
- [ ] `fstatfs(int fd, address buf) int`                          — nr 138 — filesystem statistics by fd
- [ ] `creat(string path, int mode) int`                          — nr 85 — create/truncate file (O_CREAT|O_WRONLY|O_TRUNC shorthand)

### Directory operations
- [ ] `getdents64(int fd, address buf, int count) int`            — nr 217 — read directory entries into buf (struct linux_dirent64)
- [ ] `getcwd(address buf, int size) int`                         — nr 79 — get current working directory
- [ ] `chdir(string path) int`                                    — nr 80 — change working directory
- [ ] `fchdir(int fd) int`                                        — nr 81 — change working directory via fd
- [ ] `mkdir(string path, int mode) int`                          — nr 83 — create directory
- [ ] `rmdir(string path) int`                                    — nr 84 — remove empty directory
- [ ] `rename(string oldpath, string newpath) int`                — nr 82 — rename or move file
- [ ] `link(string oldpath, string newpath) int`                  — nr 86 — create hard link
- [ ] `unlink(string path) int`                                   — nr 87 — delete file
- [ ] `symlink(string target, string linkpath) int`               — nr 88 — create symbolic link
- [ ] `readlink(string path, address buf, int bufsiz) int`        — nr 89 — read symbolic link target
- [ ] `umask(int mask) int`                                       — nr 95 — set file creation mask

### Permissions
- [ ] `chmod(string path, int mode) int`                          — nr 90 — set file permissions
- [ ] `fchmod(int fd, int mode) int`                              — nr 91 — set file permissions by fd
- [ ] `chown(string path, int uid, int gid) int`                  — nr 92 — set file ownership
- [ ] `fchown(int fd, int uid, int gid) int`                      — nr 93 — set file ownership by fd
- [ ] `lchown(string path, int uid, int gid) int`                 — nr 94 — set ownership (no symlink follow)

### fd plumbing
- [ ] `dup(int oldfd) int`                                        — nr 32 — duplicate file descriptor
- [ ] `dup2(int oldfd, int newfd) int`                            — nr 33 — duplicate fd to specific number
- [ ] `dup3(int oldfd, int newfd, int flags) int`                 — nr 292 — dup2 with O_CLOEXEC flag support
- [ ] `pipe(address pipefd) int`                                  — nr 22 — create pipe pair (pipefd[0]=read pipefd[1]=write)
- [ ] `pipe2(address pipefd, int flags) int`                      — nr 293 — pipe with O_CLOEXEC / O_NONBLOCK

### Modern at-variants (relative to directory fd, AT_FDCWD=-100 for cwd)
- [ ] `openat(int dirfd, string path, int flags, int mode) int`   — nr 257
- [ ] `mkdirat(int dirfd, string path, int mode) int`             — nr 258
- [ ] `unlinkat(int dirfd, string path, int flags) int`           — nr 263 — AT_REMOVEDIR=512 to remove dir
- [ ] `renameat(int olddirfd, string old, int newdirfd, string new) int` — nr 264
- [ ] `linkat(int olddirfd, string old, int newdirfd, string new, int flags) int` — nr 265
- [ ] `symlinkat(string target, int newdirfd, string linkpath) int` — nr 266
- [ ] `readlinkat(int dirfd, string path, address buf, int bufsiz) int` — nr 267
- [ ] `fchmodat(int dirfd, string path, int mode, int flags) int` — nr 268
- [ ] `faccessat(int dirfd, string path, int mode, int flags) int`— nr 269
- [ ] `fchownat(int dirfd, string path, int uid, int gid, int flags) int` — nr 260

### Watch / notification
- [ ] `inotify_init1(int flags) int`                              — nr 294 — create inotify instance (IN_NONBLOCK IN_CLOEXEC)
- [ ] `inotify_add_watch(int fd, string path, int mask) int`      — nr 254 — watch a path
- [ ] `inotify_rm_watch(int fd, int wd) int`                      — nr 255 — remove watch

### Structs and constants
- [ ] Struct: `Stat`        — dev, ino, mode, nlink, uid, gid, rdev, size, blksize, blocks, atime, mtime, ctime
- [ ] Struct: `StatFs`      — type, bsize, blocks, bfree, bavail, files, ffree, fsid, namelen, frsize, flags
- [ ] Struct: `Dirent64`    — ino(int) off(int) reclen(int) type(byte) name(address) — mirrors linux_dirent64
- [ ] Struct: `Iovec`       — base(address) len(int) — for readv/writev
- [ ] Constants: `SEEK_SET=0`, `SEEK_CUR=1`, `SEEK_END=2`
- [ ] Constants: `AT_FDCWD=-100`, `AT_SYMLINK_NOFOLLOW=256`, `AT_REMOVEDIR=512`
- [ ] Constants: `F_OK=0`, `R_OK=4`, `W_OK=2`, `X_OK=1`
- [ ] Constants: `F_DUPFD=0`, `F_GETFD=1`, `F_SETFD=2`, `F_GETFL=3`, `F_SETFL=4`
- [ ] Constants: `FD_CLOEXEC=1`
- [ ] Constants: `DT_UNKNOWN=0`, `DT_FIFO=1`, `DT_CHR=2`, `DT_DIR=4`, `DT_BLK=6`, `DT_REG=8`, `DT_LNK=10`, `DT_SOCK=12`
- [ ] Constants: `S_IFMT=0xF000`, `S_IFREG=0x8000`, `S_IFDIR=0x4000`, `S_IFLNK=0xA000`
- [ ] Constants: `S_IRWXU=0o700`, `S_IRUSR=0o400`, `S_IWUSR=0o200`, `S_IXUSR=0o100`
- [ ] Constants: `S_IRWXG=0o70`, `S_IRWXO=0o7`

---

## sys.hop — done: `exit` (60), `fork` (57), `execve` (59), `waitpid`/`wait4` (61)

Process control and system information.

### Process identity
- [ ] `getpid() int`                                              — nr 39  — current process id
- [ ] `getppid() int`                                             — nr 110 — parent process id
- [ ] `getuid() int`                                              — nr 102 — real user id
- [ ] `getgid() int`                                              — nr 104 — real group id
- [ ] `geteuid() int`                                             — nr 107 — effective user id
- [ ] `getegid() int`                                             — nr 108 — effective group id
- [ ] `setuid(int uid) int`                                       — nr 105
- [ ] `setgid(int gid) int`                                       — nr 106
- [ ] `setreuid(int ruid, int euid) int`                          — nr 113
- [ ] `setregid(int rgid, int egid) int`                          — nr 114
- [ ] `setsid() int`                                              — nr 112 — create new session, detach from tty
- [ ] `setpgid(int pid, int pgid) int`                            — nr 109
- [ ] `getpgid(int pid) int`                                      — nr 121

### Process lifecycle
- [ ] `exit_group(int code)`                                      — nr 231 — exit all threads in group (preferred over exit)
- [ ] `vfork() int`                                               — nr 58  — like fork but shares address space until exec
- [ ] `clone(int flags, address stack, address ptid, address ctid, address regs) int` — nr 56 — spawn thread or process
- [ ] `clone3(address args, int size) int`                        — nr 435 — extended clone with struct argument
- [ ] `execveat(int dirfd, string path, string[] argv, string[] envp, int flags) int` — nr 322
- [ ] `wait4(int pid, address wstatus, int options, address rusage) int` — nr 61 — (already implemented as waitpid)
- [ ] `waitid(int idtype, int id, address infop, int options) int`— nr 247

### Signals
- [ ] `kill(int pid, int sig) int`                                — nr 62  — send signal to process/group
- [ ] `tkill(int tid, int sig) int`                               — nr 200 — send signal to specific thread
- [ ] `tgkill(int tgid, int tid, int sig) int`                    — nr 234 — send signal to thread in group
- [ ] `pause() int`                                               — nr 34  — sleep until signal
- [ ] `alarm(int seconds) int`                                    — nr 37  — schedule SIGALRM
- [ ] `rt_sigaction(int sig, address act, address oldact, int sigsetsize) int` — nr 13
- [ ] `rt_sigprocmask(int how, address set, address oldset, int sigsetsize) int` — nr 14
- [ ] `rt_sigpending(address set, int sigsetsize) int`            — nr 127
- [ ] `rt_sigsuspend(address mask, int sigsetsize) int`           — nr 130
- [ ] `sigaltstack(address ss, address oss) int`                  — nr 131
- [ ] Constants: `SIG_DFL=0`, `SIG_IGN=1`
- [ ] Constants: `SIGHUP=1`, `SIGINT=2`, `SIGQUIT=3`, `SIGILL=4`, `SIGTRAP=5`, `SIGABRT=6`
- [ ] Constants: `SIGBUS=7`, `SIGFPE=8`, `SIGKILL=9`, `SIGUSR1=10`, `SIGSEGV=11`, `SIGUSR2=12`
- [ ] Constants: `SIGPIPE=13`, `SIGALRM=14`, `SIGTERM=15`, `SIGCHLD=17`, `SIGCONT=18`
- [ ] Constants: `SIGSTOP=19`, `SIGTSTP=20`, `SIGTTIN=21`, `SIGTTOU=22`, `SIGWINCH=28`
- [ ] Constants: `SA_RESTART=0x10000000`, `SA_SIGINFO=4`, `SA_NOCLDWAIT=2`
- [ ] Constants: `SIG_BLOCK=0`, `SIG_UNBLOCK=1`, `SIG_SETMASK=2`

### Time
- [ ] `nanosleep(address req, address rem) int`                   — nr 35  — sleep with nanosecond precision
- [ ] `clock_gettime(int clockid, address ts) int`                — nr 228 — high-resolution clock read
- [ ] `clock_settime(int clockid, address ts) int`                — nr 227 — set clock
- [ ] `clock_getres(int clockid, address res) int`                — nr 229 — clock resolution
- [ ] `clock_nanosleep(int clockid, int flags, address req, address rem) int` — nr 230
- [ ] `gettimeofday(address tv, address tz) int`                  — nr 96  — wall clock (microsecond precision)
- [ ] `settimeofday(address tv, address tz) int`                  — nr 164
- [ ] `times(address buf) int`                                    — nr 100 — process CPU time usage
- [ ] `getitimer(int which, address val) int`                     — nr 36
- [ ] `setitimer(int which, address val, address oval) int`       — nr 38
- [ ] Struct: `Timespec`   — sec(int), nsec(int)
- [ ] Struct: `Timeval`    — sec(int), usec(int)
- [ ] Constants: `CLOCK_REALTIME=0`, `CLOCK_MONOTONIC=1`, `CLOCK_PROCESS_CPUTIME_ID=2`, `CLOCK_THREAD_CPUTIME_ID=3`
- [ ] Constants: `CLOCK_MONOTONIC_RAW=4`, `CLOCK_BOOTTIME=7`

### System information
- [ ] `uname(address buf) int`                                    — nr 63  — kernel/OS name and version (struct utsname)
- [ ] `sysinfo(address info) int`                                 — nr 99  — system statistics (uptime, loads, ram, procs)
- [ ] `getrusage(int who, address rusage) int`                    — nr 98  — resource usage
- [ ] `getrlimit(int resource, address rlim) int`                 — nr 97  — get resource limit
- [ ] `setrlimit(int resource, address rlim) int`                 — nr 160 — set resource limit
- [ ] `prctl(int option, int arg2, int arg3, int arg4, int arg5) int` — nr 157 — process attribute control
- [ ] `arch_prctl(int code, address addr) int`                    — nr 158 — x86-64 thread state (FS/GS base)
- [ ] Struct: `Utsname`    — sysname, nodename, release, version, machine (each 65 bytes)
- [ ] Struct: `Sysinfo`    — uptime, loads[3], totalram, freeram, sharedram, bufferram, totalswap, freeswap, procs, ...
- [ ] Struct: `Rlimit`     — cur(int), max(int)
- [ ] Constants: `RLIMIT_CPU=0`, `RLIMIT_FSIZE=1`, `RLIMIT_DATA=2`, `RLIMIT_STACK=3`
- [ ] Constants: `RLIMIT_CORE=4`, `RLIMIT_RSS=5`, `RLIMIT_NPROC=6`, `RLIMIT_NOFILE=7`
- [ ] Constants: `RLIMIT_MEMLOCK=8`, `RLIMIT_AS=9`
- [ ] Constants: `RUSAGE_SELF=0`, `RUSAGE_CHILDREN=-1`

### Scheduling
- [ ] `sched_yield() int`                                         — nr 24  — yield CPU to another runnable thread
- [ ] `sched_getscheduler(int pid) int`                           — nr 145
- [ ] `sched_setscheduler(int pid, int policy, address param) int`— nr 144
- [ ] `sched_getparam(int pid, address param) int`                — nr 143
- [ ] `sched_setparam(int pid, address param) int`                — nr 142
- [ ] `sched_getaffinity(int pid, int cpusetsize, address mask) int` — nr 204
- [ ] `sched_setaffinity(int pid, int cpusetsize, address mask) int` — nr 203
- [ ] `nice(int inc) int`                                         — nr 34 (pause on x86-64; use setpriority instead)
- [ ] `getpriority(int which, int who) int`                       — nr 140
- [ ] `setpriority(int which, int who, int prio) int`             — nr 141
- [ ] Constants: `SCHED_NORMAL=0`, `SCHED_FIFO=1`, `SCHED_RR=2`, `SCHED_BATCH=3`, `SCHED_IDLE=5`
- [ ] Constants: `PRIO_PROCESS=0`, `PRIO_PGRP=1`, `PRIO_USER=2`

### Misc
- [ ] `chroot(string path) int`                                   — nr 161 — change root directory
- [ ] `ptrace(int request, int pid, address addr, address data) int` — nr 101
- [ ] `reboot(int magic1, int magic2, int cmd, address arg) int`  — nr 169
- [ ] `sync() int`                                                — nr 162
- [ ] `brk(address addr) address`                                 — nr 12  — raw heap boundary (prefer mmap for allocators)

---

## net.hop — not yet created

Sockets, BSD networking API over raw Linux syscalls. No libc.

### Core
- [ ] `socket(int domain, int type, int protocol) int`            — nr 41
- [ ] `bind(int fd, address addr, int addrlen) int`               — nr 49
- [ ] `listen(int fd, int backlog) int`                           — nr 50
- [ ] `accept(int fd, address addr, address addrlen) int`         — nr 43
- [ ] `accept4(int fd, address addr, address addrlen, int flags) int` — nr 288 — accept with SOCK_NONBLOCK/CLOEXEC
- [ ] `connect(int fd, address addr, int addrlen) int`            — nr 42
- [ ] `shutdown(int fd, int how) int`                             — nr 48
- [ ] `getsockname(int fd, address addr, address addrlen) int`    — nr 51
- [ ] `getpeername(int fd, address addr, address addrlen) int`    — nr 52
- [ ] `socketpair(int domain, int type, int protocol, address fds) int` — nr 53

### Send / receive
- [ ] `send(int fd, address buf, int len, int flags) int`         — nr 44 (sendto with null addr)
- [ ] `recv(int fd, address buf, int len, int flags) int`         — nr 45 (recvfrom with null addr)
- [ ] `sendto(int fd, address buf, int len, int flags, address addr, int addrlen) int` — nr 44
- [ ] `recvfrom(int fd, address buf, int len, int flags, address addr, address addrlen) int` — nr 45
- [ ] `sendmsg(int fd, address msg, int flags) int`               — nr 46
- [ ] `recvmsg(int fd, address msg, int flags) int`               — nr 47
- [ ] `sendmmsg(int fd, address msgs, int vlen, int flags) int`   — nr 307
- [ ] `recvmmsg(int fd, address msgs, int vlen, int flags, address timeout) int` — nr 299

### Options
- [ ] `setsockopt(int fd, int level, int optname, address optval, int optlen) int` — nr 54
- [ ] `getsockopt(int fd, int level, int optname, address optval, address optlen) int` — nr 55

### Structs and constants
- [ ] Struct: `SockaddrIn`   — family(int) port(int) addr(int) zero[8](byte)         — IPv4
- [ ] Struct: `SockaddrIn6`  — family(int) port(int) flowinfo(int) addr[16](byte) scope(int) — IPv6
- [ ] Struct: `SockaddrUn`   — family(int) path[108](byte)                           — Unix domain
- [ ] Struct: `Msghdr`       — name(address) namelen(int) iov(address) iovlen(int) control(address) controllen(int) flags(int)
- [ ] Constants: `AF_UNIX=1`, `AF_INET=2`, `AF_INET6=10`, `AF_NETLINK=16`, `AF_PACKET=17`
- [ ] Constants: `SOCK_STREAM=1`, `SOCK_DGRAM=2`, `SOCK_RAW=3`, `SOCK_SEQPACKET=5`
- [ ] Constants: `SOCK_NONBLOCK=2048`, `SOCK_CLOEXEC=524288`
- [ ] Constants: `IPPROTO_TCP=6`, `IPPROTO_UDP=17`, `IPPROTO_ICMP=1`
- [ ] Constants: `SOL_SOCKET=1`
- [ ] Constants: `SO_REUSEADDR=2`, `SO_REUSEPORT=15`, `SO_KEEPALIVE=9`, `SO_SNDBUF=7`, `SO_RCVBUF=8`
- [ ] Constants: `SO_ERROR=4`, `SO_TYPE=3`, `SO_LINGER=13`, `SO_BROADCAST=6`
- [ ] Constants: `TCP_NODELAY=1`, `TCP_KEEPIDLE=4`, `TCP_KEEPINTVL=5`, `TCP_KEEPCNT=6`
- [ ] Constants: `SHUT_RD=0`, `SHUT_WR=1`, `SHUT_RDWR=2`
- [ ] Constants: `MSG_DONTWAIT=64`, `MSG_PEEK=2`, `MSG_WAITALL=256`, `MSG_NOSIGNAL=16384`
- [ ] Constants: `INADDR_ANY=0`, `INADDR_LOOPBACK=2130706433` (127.0.0.1)

---

## poll.hop — not yet created

Waiting on multiple file descriptors.

- [ ] `select(int nfds, address readfds, address writefds, address exceptfds, address timeout) int` — nr 23
- [ ] `pselect6(int nfds, address readfds, address writefds, address exceptfds, address timeout, address sigmask) int` — nr 270
- [ ] `poll(address fds, int nfds, int timeout) int`              — nr 7   — poll fds array
- [ ] `ppoll(address fds, int nfds, address tmo, address sigmask, int sigsetsize) int` — nr 271
- [ ] `epoll_create1(int flags) int`                              — nr 291 — create epoll fd (use EPOLL_CLOEXEC=524288)
- [ ] `epoll_ctl(int epfd, int op, int fd, address event) int`   — nr 233 — add/modify/delete fd in epoll set
- [ ] `epoll_wait(int epfd, address events, int maxevents, int timeout) int` — nr 232
- [ ] `epoll_pwait(int epfd, address events, int maxevents, int timeout, address sigmask, int sigsetsize) int` — nr 281
- [ ] Struct: `Pollfd`     — fd(int) events(int) revents(int)
- [ ] Struct: `EpollEvent` — events(int) data(int) — (data is a union; use int for fd)
- [ ] Constants: `POLLIN=1`, `POLLOUT=4`, `POLLERR=8`, `POLLHUP=16`, `POLLNVAL=32`
- [ ] Constants: `EPOLLIN=1`, `EPOLLOUT=4`, `EPOLLERR=8`, `EPOLLHUP=16`
- [ ] Constants: `EPOLLET=0x80000000`, `EPOLLONESHOT=0x40000000`
- [ ] Constants: `EPOLL_CTL_ADD=1`, `EPOLL_CTL_DEL=2`, `EPOLL_CTL_MOD=3`

---

## mem.hop — not yet created

Memory mapping and management outside the heap allocator.

- [ ] `mmap(address addr, int len, int prot, int flags, int fd, int offset) address` — nr 9
- [ ] `munmap(address addr, int len) int`                         — nr 11
- [ ] `mprotect(address addr, int len, int prot) int`             — nr 10
- [ ] `mremap(address old, int oldsz, int newsz, int flags, address new) address` — nr 25
- [ ] `msync(address addr, int len, int flags) int`               — nr 26  — flush mmap'd region to backing file
- [ ] `madvise(address addr, int len, int advice) int`            — nr 28  — memory usage hints
- [ ] `mincore(address addr, int len, address vec) int`           — nr 27  — query which pages are in RAM
- [ ] `mlock(address addr, int len) int`                          — nr 149 — lock pages in RAM
- [ ] `munlock(address addr, int len) int`                        — nr 150
- [ ] `mlockall(int flags) int`                                   — nr 151
- [ ] `munlockall() int`                                          — nr 152
- [ ] `memfd_create(string name, int flags) int`                  — nr 319 — anonymous fd-backed memory (useful for JIT)
- [ ] Helpers (pure Hopper, no syscall):
  - [ ] `memcpy(address dst, address src, int n)` — byte loop
  - [ ] `memset(address dst, int val, int n)` — byte fill
  - [ ] `memcmp(address a, address b, int n) int` — byte compare
  - [ ] `memmove(address dst, address src, int n)` — overlap-safe copy
- [ ] Constants: `PROT_NONE=0`, `PROT_READ=1`, `PROT_WRITE=2`, `PROT_EXEC=4`
- [ ] Constants: `MAP_SHARED=1`, `MAP_PRIVATE=2`, `MAP_FIXED=16`, `MAP_ANON=32`
- [ ] Constants: `MAP_FAILED=-1`, `MAP_GROWSDOWN=256`, `MAP_STACK=131072`
- [ ] Constants: `MREMAP_MAYMOVE=1`, `MREMAP_FIXED=2`
- [ ] Constants: `MS_ASYNC=1`, `MS_SYNC=4`, `MS_INVALIDATE=2`
- [ ] Constants: `MADV_NORMAL=0`, `MADV_SEQUENTIAL=2`, `MADV_RANDOM=1`, `MADV_DONTNEED=4`, `MADV_FREE=8`
- [ ] Constants: `MCL_CURRENT=1`, `MCL_FUTURE=2`

---

## thread.hop — not yet created

Linux threads via `clone`. No pthreads.

- [ ] `clone(int flags, address stack, address ptid, address ctid, address regs) int` — nr 56
- [ ] `clone3(address args, int size) int`                        — nr 435 — extended clone
- [ ] `set_tid_address(address tidptr) int`                       — nr 218 — set clear-on-exit tid address
- [ ] `gettid() int`                                              — nr 186 — thread id (differs from pid in a group)
- [ ] `futex(address uaddr, int futex_op, int val, address timeout, address uaddr2, int val3) int` — nr 202
- [ ] `futex_wait(address addr, int val) int`                     — thin wrapper: futex(addr, FUTEX_WAIT, val, null, null, 0)
- [ ] `futex_wake(address addr, int count) int`                   — thin wrapper: futex(addr, FUTEX_WAKE, count, null, null, 0)
- [ ] Class: `Mutex`         — lock/unlock backed by futex + atomic CAS
- [ ] Class: `Semaphore`     — count-based, futex-backed
- [ ] Constants: `CLONE_VM=256`, `CLONE_FS=512`, `CLONE_FILES=1024`, `CLONE_SIGHAND=2048`
- [ ] Constants: `CLONE_THREAD=65536`, `CLONE_SYSVSEM=262144`, `CLONE_SETTLS=524288`
- [ ] Constants: `CLONE_PARENT_SETTID=1048576`, `CLONE_CHILD_CLEARTID=2097152`
- [ ] Constants: `FUTEX_WAIT=0`, `FUTEX_WAKE=1`, `FUTEX_PRIVATE_FLAG=128`

---

## timer.hop — not yet created

POSIX interval timers and timerfd.

- [ ] `timerfd_create(int clockid, int flags) int`                — nr 283
- [ ] `timerfd_settime(int fd, int flags, address new_val, address old_val) int` — nr 286
- [ ] `timerfd_gettime(int fd, address cur_val) int`              — nr 287
- [ ] `timer_create(int clockid, address evp, address timerid) int` — nr 222
- [ ] `timer_settime(int timerid, int flags, address val, address oval) int` — nr 223
- [ ] `timer_gettime(int timerid, address val) int`               — nr 224
- [ ] `timer_delete(int timerid) int`                             — nr 226
- [ ] `timer_getoverrun(int timerid) int`                         — nr 225
- [ ] Struct: `Itimerspec`   — interval(Timespec), value(Timespec)
- [ ] Constants: `TFD_NONBLOCK=2048`, `TFD_CLOEXEC=524288`
- [ ] Constants: `TIMER_ABSTIME=1`

---

## shm.hop — not yet created

System V and POSIX shared memory.

- [ ] `shmget(int key, int size, int shmflg) int`                 — nr 29
- [ ] `shmat(int shmid, address shmaddr, int shmflg) address`     — nr 30
- [ ] `shmdt(address shmaddr) int`                                — nr 67
- [ ] `shmctl(int shmid, int cmd, address buf) int`               — nr 31
- [ ] Constants: `IPC_PRIVATE=0`, `IPC_CREAT=512`, `IPC_EXCL=1024`, `IPC_RMID=0`

---

## msg.hop — not yet created

System V message queues.

- [ ] `msgget(int key, int msgflg) int`                           — nr 68
- [ ] `msgsnd(int msqid, address msgp, int msgsz, int msgflg) int`— nr 69
- [ ] `msgrcv(int msqid, address msgp, int msgsz, int msgtyp, int msgflg) int` — nr 70
- [ ] `msgctl(int msqid, int cmd, address buf) int`               — nr 71

---

## sem.hop — not yet created

System V semaphores (distinct from futex-based thread semaphores).

- [ ] `semget(int key, int nsems, int semflg) int`                — nr 64
- [ ] `semop(int semid, address sops, int nsops) int`             — nr 65
- [ ] `semctl(int semid, int semnum, int cmd, int arg) int`       — nr 66

---

## tty.hop — not yet created

Terminal / TTY control via ioctl.

- [ ] `isatty(int fd) bool`                                       — ioctl(fd, TCGETS, ...) != -1
- [ ] `tcgetattr(int fd, address termios) int`                    — ioctl(fd, TCGETS=0x5401, termios)
- [ ] `tcsetattr(int fd, int optional_actions, address termios) int` — ioctl(fd, TCSETS=0x5402, termios)
- [ ] `tcsendbreak(int fd, int duration) int`                     — ioctl(fd, TCSBRK=0x5409, 0)
- [ ] `tcflush(int fd, int queue) int`                            — ioctl(fd, TCFLSH=0x540B, queue)
- [ ] `cfmakeraw(address termios)`                                — pure Hopper: clear ICANON ECHO ISIG flags
- [ ] `winsize(int fd, address ws) int`                           — ioctl(fd, TIOCGWINSZ=0x5413, ws)
- [ ] Struct: `Termios`    — iflag, oflag, cflag, lflag, cc[32] — see linux/termios.h
- [ ] Struct: `Winsize`    — row, col, xpixel, ypixel
- [ ] Constants: `TCGETS=0x5401`, `TCSETS=0x5402`, `TCSETSW=0x5403`, `TCSETSF=0x5404`
- [ ] Constants: `TCSBRK=0x5409`, `TCFLSH=0x540B`, `TIOCGWINSZ=0x5413`, `TIOCSWINSZ=0x5414`
- [ ] Constants: `TIOCGPGRP=0x540F`, `TIOCSPGRP=0x5410`
- [ ] Constants: `VMIN=6`, `VTIME=5`, `VINTR=0`, `VQUIT=1`, `VERASE=2`, `VEOF=4`
- [ ] Constants: `IGNBRK=1`, `BRKINT=2`, `IGNPAR=4`, `PARMRK=8`, `INPCK=16`, `ISTRIP=32`
- [ ] Constants: `INLCR=64`, `IGNCR=128`, `ICRNL=256`, `IXON=1024`, `IXOFF=4096`
- [ ] Constants: `OPOST=1`, `ONLCR=4`
- [ ] Constants: `CS8=48`, `CREAD=128`, `CLOCAL=2048`, `HUPCL=1024`
- [ ] Constants: `ISIG=1`, `ICANON=2`, `ECHO=8`, `ECHOE=16`, `ECHOK=32`, `ECHONL=64`, `NOFLSH=128`
- [ ] Constants: `B9600=13`, `B19200=14`, `B38400=15`, `B57600=4097`, `B115200=4098`

---

## random.hop — not yet created

Cryptographically secure random bytes.

- [ ] `getrandom(address buf, int buflen, int flags) int`         — nr 318 — kernel CSPRNG (preferred over /dev/urandom)
- [ ] Constants: `GRND_NONBLOCK=1`, `GRND_RANDOM=2`

---

## ptrace.hop — not yet created

Process tracing (debugger support, strace-style tools).

- [ ] `ptrace(int request, int pid, address addr, address data) int` — nr 101
- [ ] Constants: `PTRACE_TRACEME=0`, `PTRACE_PEEKTEXT=1`, `PTRACE_PEEKDATA=2`, `PTRACE_PEEKUSER=3`
- [ ] Constants: `PTRACE_POKETEXT=4`, `PTRACE_POKEDATA=5`, `PTRACE_CONT=7`, `PTRACE_KILL=8`
- [ ] Constants: `PTRACE_SINGLESTEP=9`, `PTRACE_GETREGS=12`, `PTRACE_SETREGS=13`
- [ ] Constants: `PTRACE_ATTACH=16`, `PTRACE_DETACH=17`, `PTRACE_SYSCALL=24`
- [ ] Constants: `PTRACE_SETOPTIONS=0x4200`, `PTRACE_GETSIGINFO=0x4202`
- [ ] Constants: `PTRACE_O_TRACESYSGOOD=1`, `PTRACE_O_TRACEFORK=2`, `PTRACE_O_TRACECLONE=8`
- [ ] Constants: `PTRACE_O_EXITKILL=1048576`

---

## io_uring.hop — not yet created

Async I/O via io_uring (Linux 5.1+). High-performance alternative to epoll.

- [ ] `io_uring_setup(int entries, address params) int`           — nr 425
- [ ] `io_uring_enter(int fd, int to_submit, int min_complete, int flags, address sig) int` — nr 426
- [ ] `io_uring_register(int fd, int opcode, address arg, int nr_args) int` — nr 427
- [ ] Struct: `IoUringParams`  — sq_entries, cq_entries, flags, sq_thread_cpu, sq_thread_idle, features, ...
- [ ] Struct: `IoUringSqe`     — opcode, flags, ioprio, fd, off, addr, len, op_flags, user_data, ...
- [ ] Struct: `IoUringCqe`     — user_data, res, flags
- [ ] Constants: `IORING_OP_NOP=0`, `IORING_OP_READV=1`, `IORING_OP_WRITEV=2`
- [ ] Constants: `IORING_OP_READ=22`, `IORING_OP_WRITE=23`, `IORING_OP_ACCEPT=13`
- [ ] Constants: `IORING_OP_CONNECT=16`, `IORING_OP_SEND=26`, `IORING_OP_RECV=27`
- [ ] Constants: `IORING_ENTER_GETEVENTS=1`

---

## Current Status

| File | Implemented | Remaining |
|------|-------------|-----------|
| io.hop | write, read | pread64, pwrite64, readv, writev, sendfile, splice, tee, ioctl |
| fs.hop | open, close | stat, fstat, lstat, lseek, access, truncate, ftruncate, fsync, fdatasync, sync, fcntl, flock, getdents64, getcwd, chdir, fchdir, mkdir, rmdir, rename, link, unlink, symlink, readlink, chmod, fchmod, chown, fchown, umask, dup, dup2, dup3, pipe, pipe2, openat, mkdirat, unlinkat, renameat, inotify_*, creat, statfs, fstatfs |
| sys.hop | exit, fork, execve, waitpid | getpid, getppid, getuid, getgid, geteuid, getegid, kill, tkill, tgkill, pause, alarm, rt_sigaction, rt_sigprocmask, nanosleep, clock_gettime, clock_settime, clock_getres, gettimeofday, uname, sysinfo, getrusage, getrlimit, setrlimit, prctl, sched_yield, sched_*, getpriority, setpriority, setsid, setpgid, gettid, exit_group, vfork, clone, execveat, chroot |
| net.hop | — | all |
| poll.hop | — | all |
| mem.hop | — | all |
| thread.hop | — | all |
| timer.hop | — | all |
| shm.hop | — | all |
| tty.hop | — | all |
| random.hop | — | all |
| ptrace.hop | — | all |
| io_uring.hop | — | all |
