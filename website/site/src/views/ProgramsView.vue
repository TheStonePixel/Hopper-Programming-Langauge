<script setup>
import CodeBlock from '../components/CodeBlock.vue'

const programs = [

  // ── Embedded ──────────────────────────────────────────────────────────────

  {
    id: 'led-blink',
    group: 'embedded',
    title: 'LED Blink — Raspberry Pi Zero',
    tags: ['bare-metal', 'embedded', 'gpio'],
    desc: 'Blink the green activity LED at 1 Hz. No OS, no runtime — just Hopper talking directly to BCM2835 GPIO registers via strict-bound memory addresses.',
    code: `// hopper build --bare-metal blink.hop
// Blink the ACT LED (GPIO 47) on a Raspberry Pi Zero.
// BCM2835 peripheral base: 0x20200000

strict int GPFSEL4 = 0x20200010   // function select for GPIOs 40-49
strict int GPSET1  = 0x20200020   // set register for GPIOs 32-63
strict int GPCLR1  = 0x2020002C   // clear register for GPIOs 32-63

function delay(int cycles) {
    int i = 0
    while (i < cycles) { i = i + 1 }
}

entry main {
    // GPIO 47 is bits 21-23 in GPFSEL4 — set to output (0b001)
    GPFSEL4 = (GPFSEL4 & ~(7 << 21)) | (1 << 21)

    while (true) {
        GPSET1 = 1 << 15    // GPIO 47 on  (47 - 32 = bit 15)
        delay(500000)
        GPCLR1 = 1 << 15    // GPIO 47 off
        delay(500000)
    }
}`,
  },

  {
    id: 'uart',
    group: 'embedded',
    title: 'UART Serial — Raspberry Pi Zero',
    tags: ['bare-metal', 'embedded', 'uart', 'serial'],
    desc: 'Initialise the BCM2835 mini UART and stream text at 115200 baud over the GPIO header. No kernel drivers — peripheral registers mapped with strict and written directly.',
    code: `// hopper build --bare-metal uart.hop
// 115200 8N1 via mini UART on GPIO 14 (TX) / 15 (RX).

strict int GPFSEL1    = 0x20200004
strict int AUX_ENABLE = 0x20215004
strict int AUX_MU_IO  = 0x20215040   // data register
strict int AUX_MU_LCR = 0x2021504C   // line control  (8-bit = 3)
strict int AUX_MU_MCR = 0x20215050
strict int AUX_MU_LSR = 0x20215054   // bit 5: TX FIFO ready
strict int AUX_MU_CTL = 0x20215060   // enable TX / RX
strict int AUX_MU_BAUD= 0x20215068   // ((250 MHz / 115200) / 8) - 1

function uartInit() {
    AUX_ENABLE = AUX_ENABLE | 1   // enable mini UART clock
    AUX_MU_CTL = 0                // disable while configuring
    AUX_MU_LCR = 3                // 8-bit mode
    AUX_MU_MCR = 0
    AUX_MU_BAUD = 270             // 115200 baud at 250 MHz

    // GPIO 14, 15 → Alt5 (mini UART TX / RX)
    int fsel = GPFSEL1
    fsel = (fsel & ~(7 << 12)) | (2 << 12)
    fsel = (fsel & ~(7 << 15)) | (2 << 15)
    GPFSEL1 = fsel

    AUX_MU_CTL = 3   // enable TX and RX
}

function putc(byte c) {
    while ((AUX_MU_LSR & 0x20) == 0) {}   // wait for TX FIFO
    AUX_MU_IO = cast c
}

function puts(string s) {
    int i = 0
    while (true) {
        address p = s + i
        byte b = p::value
        if (cast b == 0) { return }
        putc(b)
        i = i + 1
    }
}

entry main {
    uartInit()
    while (true) {
        puts("Hopper on Pi Zero\\r\\n")
        int i = 0
        while (i < 2000000) { i = i + 1 }
    }
}`,
  },

  // ── Assembly ──────────────────────────────────────────────────────────────

  {
    id: 'syscall-asm',
    group: 'assembly',
    title: 'Linux Syscalls via x86-64 Assembly',
    tags: ['x86-64', 'asm', 'linux', 'syscall'],
    desc: 'Call the Linux kernel directly using Hopper\'s inline asm {} blocks — no libc, no extern declarations, just raw syscall instructions. Write to stdout, read CPUID, and exit cleanly.',
    code: `// Direct Linux kernel interface via x86-64 syscall.
// No C runtime. No extern declarations. Pure Hopper + asm.

function sysWrite(int fd, address buf, int len) int {
    int n = 0
    asm {
        rax = 1        // syscall: write
        rdi = fd       // file descriptor
        rsi = buf      // buffer address
        rdx = len      // byte count
        syscall
        n = rax        // capture return value
    }
    return n
}

function sysRead(int fd, address buf, int len) int {
    int n = 0
    asm {
        rax = 0        // syscall: read
        rdi = fd
        rsi = buf
        rdx = len
        syscall
        n = rax
    }
    return n
}

function sysExit(int code) {
    asm {
        rax = 60       // syscall: exit
        rdi = code
        syscall
    }
}

function getCpuId() int {
    int leaf = 0
    int info = 0
    asm {
        rax = leaf     // CPUID leaf 0
        cpuid          // raw instruction — Hopper passes it through unchanged
        info = rax
    }
    return info
}

entry main {
    string hello = "Hello from Hopper (no libc)\\n"
    sysWrite(1, hello::address, 28)

    int cpuid = getCpuId()
    sysExit(0)
}`,
  },

  // ── Systems ───────────────────────────────────────────────────────────────

  {
    id: 'cat',
    group: 'systems',
    title: 'cat — File Utility',
    tags: ['linux', 'posix', 'extern', 'system'],
    desc: 'A minimal cat built on POSIX file descriptors via extern declarations. Shows how Hopper calls into libc (or directly into the kernel), then drives the I/O loop with plain Hopper control flow.',
    code: `// hopper build cat.hop -o cat
// Reads a file and writes it to stdout, 4 KiB at a time.

extern function open(string path, int flags) int
extern function read(int fd, address buf, int n) int
extern function write(int fd, address buf, int n) int
extern function close(int fd) int
extern function strlen(string s) int

const int O_RDONLY = 0
const int STDERR   = 2

function die(string msg) {
    write(STDERR, msg::address, strlen(msg))
}

entry main(string[] argv, int argc) {
    if (argc < 2) {
        die("usage: cat <file>\\n")
        return
    }

    int fd = open(argv[1], O_RDONLY)
    if (fd < 0) {
        die("cat: cannot open file\\n")
        return
    }

    address buf = allocate 4096
    int n = read(fd, buf, 4096)
    while (n > 0) {
        write(1, buf, n)
        n = read(fd, buf, 4096)
    }

    deallocate buf
    close(fd)
}`,
  },

  {
    id: 'grep',
    group: 'systems',
    title: 'grep — Pattern Search',
    tags: ['linux', 'posix', 'system', 'pointers'],
    desc: 'Line-by-line pattern search using only Hopper\'s pointer model — no regex library, no standard strings. Reads stdin, walks bytes with address arithmetic, prints matching lines.',
    code: `// hopper build grep.hop -o grep
// Usage: echo "hello world" | ./grep hello

extern function read(int fd, address buf, int n) int
extern function write(int fd, address buf, int n) int

function memeq(address a, address b, int len) bool {
    int i = 0
    while (i < len) {
        address pa = a + i
        address pb = b + i
        byte ba = pa::value
        byte bb = pb::value
        if (cast ba != cast bb) { return false }
        i = i + 1
    }
    return true
}

function contains(address line, int lineLen, address pat, int patLen) bool {
    int i = 0
    while (i <= lineLen - patLen) {
        if (memeq(line + i, pat, patLen)) { return true }
        i = i + 1
    }
    return false
}

entry main(string[] argv, int argc) {
    if (argc < 2) { return }

    address pat    = argv[1]::address
    int patLen = 0
    while (true) {
        address p = pat + patLen
        byte b = p::value
        if (cast b == 0) { break }
        patLen = patLen + 1
    }

    address buf  = allocate 4096
    address line = allocate 4096
    int lineLen  = 0

    int n = read(0, buf, 4096)
    while (n > 0) {
        int i = 0
        while (i < n) {
            address src = buf + i
            byte b = src::value
            if (cast b == 10) {
                if (contains(line, lineLen, pat, patLen)) {
                    write(1, line, lineLen)
                    write(1, "\\n"::address, 1)
                }
                lineLen = 0
            } else {
                address dst = line + lineLen
                dst::value = cast b
                lineLen = lineLen + 1
            }
            i = i + 1
        }
        n = read(0, buf, 4096)
    }

    deallocate buf
    deallocate line
}`,
  },

  // ── Memory / Pointers ─────────────────────────────────────────────────────

  {
    id: 'linked-list',
    group: 'memory',
    title: 'Linked List — Manual Memory',
    tags: ['pointers', 'allocate', 'struct', 'memory'],
    desc: 'A singly-linked list built with allocate/deallocate and Hopper\'s address type. No garbage collector, no reference counting — you control when memory lives and dies.',
    code: `// Manual linked list: push, iterate, free.
// Demonstrates address arithmetic and manual heap management.

import io from core
extern function printf(string fmt, ...) int

struct Node {
    int value
    address next
}

function newNode(int val) address {
    address mem     = allocate Node::size
    address valPtr  = mem
    address nextPtr = mem + 8
    valPtr::value  = val
    nextPtr::value = 0     // null next pointer
    return mem
}

function push(address list, int val) address {
    address node    = newNode(val)
    address nextPtr = node + 8
    nextPtr::value  = cast list
    return node
}

function printList(address node) {
    while (cast node != 0) {
        address valPtr  = node
        address nextPtr = node + 8
        int val  = valPtr::value
        int next = nextPtr::value
        printf("%d", val)
        node = cast next
        if (cast node != 0) { printf(" -> ") }
    }
    printf(" -> null\\n")
}

function freeList(address node) {
    while (cast node != 0) {
        address nextPtr = node + 8
        int next = nextPtr::value
        deallocate node
        node = cast next
    }
}

entry main {
    address list = cast 0    // empty list
    list = push(list, 30)
    list = push(list, 20)
    list = push(list, 10)

    printList(list)          // 10 -> 20 -> 30 -> null
    freeList(list)
}`,
  },

  // ── TUI ───────────────────────────────────────────────────────────────────

  {
    id: 'tui-spinner',
    group: 'tui',
    title: 'Terminal Spinner',
    tags: ['tui', 'ansi', 'terminal'],
    desc: 'An animated terminal spinner using ANSI escape codes — no ncurses, no library. Direct terminal control via printf: cursor hiding, colour codes, carriage-return animation.',
    code: `// Animated spinner. Run on any Unix terminal.

import io from core
extern function printf(string fmt, ...) int
extern function fflush(address stream) int

function delay(int n) {
    int i = 0
    while (i < n) { i = i + 1 }
}

entry main {
    printf("\\x1b[?25l")       // hide cursor

    string frames = "|/-\\\\"
    int f    = 0
    int step = 0

    while (step < 60) {
        address fp = frames + f
        byte b = fp::value

        printf("\\r\\x1b[96m [%c]\\x1b[0m Compiling...", cast b)
        fflush(cast 0)         // flush stdout immediately

        f    = (f + 1) % 4
        step = step + 1
        delay(4000000)
    }

    printf("\\r\\x1b[92m [+]\\x1b[0m Done!             \\n")
    printf("\\x1b[?25h")       // restore cursor
}`,
  },

  {
    id: 'tui-table',
    group: 'tui',
    title: 'ASCII Table Renderer',
    tags: ['tui', 'terminal', 'ansi', 'struct'],
    desc: 'Render a formatted table using printf and ANSI colour. Shows how Hopper handles structured output with arrays of structs, conditional styling, and formatted column alignment.',
    code: `// Process table rendered in the terminal.

import io from core
extern function printf(string fmt, ...) int

struct Process {
    int    pid
    string name
    int    mem
    string state
}

entry main {
    Process procs[5]
    procs[0] = Process { 1,    "init",    512,   "running"  }
    procs[1] = Process { 42,   "sshd",    1024,  "sleeping" }
    procs[2] = Process { 137,  "hopper",  3840,  "running"  }
    procs[3] = Process { 201,  "vim",     2048,  "sleeping" }
    procs[4] = Process { 999,  "grep",    256,   "running"  }

    // Header
    printf("\\x1b[1m  %-6s  %-10s  %8s  %s\\x1b[0m\\n",
           "PID", "NAME", "MEM KiB", "STATE")
    printf("  ------  ----------  --------  -------\\n")

    // Rows — colour running processes green
    int i = 0
    while (i < 5) {
        Process p = procs[i]
        if (p.state == "running") {
            printf("  %-6d  %-10s  %8d  \\x1b[92m%s\\x1b[0m\\n",
                   p.pid, p.name, p.mem, p.state)
        } else {
            printf("  %-6d  %-10s  %8d  \\x1b[2m%s\\x1b[0m\\n",
                   p.pid, p.name, p.mem, p.state)
        }
        i = i + 1
    }
}`,
  },

]

const groups = [
  { id: 'embedded', label: 'Embedded' },
  { id: 'assembly', label: 'Assembly' },
  { id: 'systems',  label: 'Systems'  },
  { id: 'memory',   label: 'Memory & Pointers' },
  { id: 'tui',      label: 'TUI'      },
]

function byGroup(g) {
  return programs.filter(p => p.group === g)
}
</script>

<template>
  <div class="programs-view">

    <div class="hero">
      <h1>Programs</h1>
      <p class="hero-sub">
        Real programs showcasing what Hopper is built for — from bare-metal GPIO
        to Linux system utilities to live terminals.
      </p>
    </div>

    <div class="toc-bar">
      <span class="toc-label">Jump to</span>
      <a v-for="g in groups" :key="g.id" :href="'#' + g.id">{{ g.label }}</a>
    </div>

    <section v-for="g in groups" :key="g.id" :id="g.id" class="group">
      <h2 class="group-title">{{ g.label }}</h2>

      <div v-for="p in byGroup(g.id)" :key="p.id" class="program-card">
        <div class="card-meta">
          <h3>{{ p.title }}</h3>
          <div class="tags">
            <span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span>
          </div>
        </div>
        <p class="card-desc">{{ p.desc }}</p>
        <CodeBlock :code="p.code" />
      </div>
    </section>

  </div>
</template>

<style scoped>
.programs-view {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 5vw 6rem;
}

/* ── Hero ── */
.hero { margin-bottom: 2rem; }

.hero h1 {
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 800;
  color: #111827;
  letter-spacing: -1px;
  margin-bottom: 0.6rem;
}

.hero-sub {
  font-size: 1.05rem;
  color: #6b7280;
  max-width: 620px;
  line-height: 1.7;
}

/* ── TOC bar ── */
.toc-bar {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-wrap: wrap;
  padding: 0.6rem 0.9rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 3.5rem;
}

.toc-label {
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-size: 0.65rem;
  margin-right: 0.25rem;
}

.toc-bar a {
  padding: 0.2rem 0.7rem;
  color: #475569;
  text-decoration: none;
  border-radius: 99px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: background 0.15s, color 0.15s;
}

.toc-bar a:hover { background: #e0f2fe; color: #0891b2; }

/* ── Groups ── */
.group { margin-bottom: 4.5rem; }

.group-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #94a3b8;
  margin-bottom: 1.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

/* ── Cards ── */
.program-card { margin-bottom: 2.5rem; }

.card-meta {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
}

.card-meta h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.3px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.tag {
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 0.15rem 0.5rem;
  border-radius: 99px;
  background: #f1f5f9;
  color: #64748b;
  border: 1px solid #e2e8f0;
}

.card-desc {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 0.85rem;
  max-width: 700px;
}
</style>
