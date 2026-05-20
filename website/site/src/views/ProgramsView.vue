<script setup>
import CodeBlock from '@/components/CodeBlock.vue'

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


  // ── Design Patterns ───────────────────────────────────────────────────────

  {
    id: 'observer',
    group: 'patterns',
    title: 'Observer',
    tags: ['patterns', 'callbacks', 'events'],
    desc: 'Event pub/sub via a callback dispatch table. Subscribers register as address values; the Observable casts each to the right callback type before notifying. New subscribers added at runtime are included in subsequent events.',
    code: `import array from ds

extern function printf(string fmt, ...) int

function onLog(int old, int next) int {
    printf("log:   %lld -> %lld\\n", old, next)
    return 0
}
function onAudit(int old, int next) int {
    printf("audit: delta=%lld\\n", next - old)
    return 0
}
function onAlert(int old, int next) int {
    printf("alert: value is now %lld\\n", next)
    return 0
}

class Observable {
    int            value
    Array<address> listeners

    constructor(int initial) {
        self.value     = initial
        self.listeners = Array(8)
    }

    function subscribe(address handler) {
        self.listeners.push(handler)
    }

    function set(int newVal) {
        int old = self.value
        self.value = newVal
        int i = 0
        while (i < self.listeners.len()) {
            address fn = self.listeners.get(i)
            callback(int, int) int h = cast fn
            h(old, newVal)
            i = i + 1
        }
    }
}

entry main {
    Observable counter = Observable(0)
    counter.subscribe(onLog::address)
    counter.subscribe(onAudit::address)
    counter.set(10)   // log + audit fire
    counter.set(25)   // log + audit fire
    counter.subscribe(onAlert::address)
    counter.set(5)    // all three fire
}`,
  },

  {
    id: 'strategy',
    group: 'patterns',
    title: 'Strategy',
    tags: ['patterns', 'callbacks', 'higher-order'],
    desc: 'A Validator holds a pluggable validation callback as an address. Swapping the strategy at runtime changes behaviour without touching any other part of the system. countPassing() runs whichever strategy is active over an entire array.',
    code: `import array from ds

extern function printf(string fmt, ...) int

function isPositive(int n) int { if (n > 0) { return 1 }  return 0 }
function isEven(int n) int     { if ((n % 2) == 0) { return 1 } return 0 }
function isInByte(int n) int   { if (n >= 0 && n <= 255) { return 1 } return 0 }
function isNonZero(int n) int  { if (n != 0) { return 1 } return 0 }

class Validator {
    address strategy   // callback(int) int — 1=pass, 0=fail

    constructor(address fn) {
        self.strategy = fn
    }

    function setStrategy(address fn) { self.strategy = fn }

    function countPassing(Array<int> values) int {
        int passed = 0
        int i = 0
        while (i < values.len()) {
            callback(int) int fn = cast self.strategy
            passed = passed + fn(values.get(i))
            i = i + 1
        }
        return passed
    }
}

entry main {
    Array<int> nums = Array(8)
    nums.push(-5)  nums.push(0)   nums.push(3)
    nums.push(8)   nums.push(-2)  nums.push(12)  nums.push(7)

    int n = nums.len()
    Validator v = Validator(isPositive::address)
    printf("isPositive: %lld/%lld pass\\n", v.countPassing(nums), n)
    v.setStrategy(isEven::address)
    printf("isEven:     %lld/%lld pass\\n", v.countPassing(nums), n)
    v.setStrategy(isNonZero::address)
    printf("isNonZero:  %lld/%lld pass\\n", v.countPassing(nums), n)
    v.setStrategy(isInByte::address)
    printf("isInByte:   %lld/%lld pass\\n", v.countPassing(nums), n)
}`,
  },

  {
    id: 'factory',
    group: 'patterns',
    title: 'Factory',
    tags: ['patterns', 'enum', 'construction'],
    desc: 'Named factory functions hide construction details behind a clean API. A ShapeKind enum tag keeps all dispatch inside the class — callers never touch the constructor directly, and the same area()/perimeter()/print() interface works regardless of which factory created the shape.',
    code: `extern function printf(string fmt, ...) int

enum ShapeKind {
    Circle    = 0
    Rectangle = 1
    Triangle  = 2
}

class Shape {
    int kind
    int a    // Circle: radius;  Rectangle/Triangle: width or base
    int b    // Circle: unused;  Rectangle: height;  Triangle: height

    constructor(int k, int x, int y) {
        self.kind = k  self.a = x  self.b = y
    }

    function area() int {
        if (self.kind == ShapeKind.Circle)    { return self.a * self.a * 3 }
        if (self.kind == ShapeKind.Rectangle) { return self.a * self.b }
        if (self.kind == ShapeKind.Triangle)  { return (self.a * self.b) / 2 }
        return 0
    }

    function perimeter() int {
        if (self.kind == ShapeKind.Circle)    { return self.a * 6 }
        if (self.kind == ShapeKind.Rectangle) { return 2 * (self.a + self.b) }
        if (self.kind == ShapeKind.Triangle)  { return self.a + self.b + self.a }
        return 0
    }

    function print() {
        if (self.kind == ShapeKind.Circle) {
            printf("circle(r=%lld):     area=%lld  perimeter=%lld\\n", self.a, self.area(), self.perimeter())
        }
        if (self.kind == ShapeKind.Rectangle) {
            printf("rectangle(%lldx%lld):  area=%lld  perimeter=%lld\\n", self.a, self.b, self.area(), self.perimeter())
        }
        if (self.kind == ShapeKind.Triangle) {
            printf("triangle(%lld,%lld):   area=%lld  perimeter=%lld\\n", self.a, self.b, self.area(), self.perimeter())
        }
    }
}

function makeCircle(int radius) Shape {
    Shape s = Shape(ShapeKind.Circle, radius, 0)
    return s
}
function makeRectangle(int w, int h) Shape {
    Shape s = Shape(ShapeKind.Rectangle, w, h)
    return s
}
function makeTriangle(int base, int height) Shape {
    Shape s = Shape(ShapeKind.Triangle, base, height)
    return s
}

entry main {
    Shape c = makeCircle(5)
    Shape r = makeRectangle(6, 4)
    Shape t = makeTriangle(3, 4)
    c.print()
    r.print()
    t.print()
}`,
  },

  {
    id: 'builder',
    group: 'patterns',
    title: 'Builder',
    tags: ['patterns', 'construction', 'configuration'],
    desc: 'RequestBuilder accumulates configuration step by step with sensible defaults, then produces an immutable HttpRequest via build(). withTls() auto-sets the port to 443. Callers only set what differs from the default.',
    code: `extern function printf(string fmt, ...) int

class HttpRequest {
    string method
    string path
    int    port
    int    timeout
    int    tls

    constructor(string m, string p, int port, int timeout, int tls) {
        self.method = m  self.path = p
        self.port = port  self.timeout = timeout  self.tls = tls
    }

    function print() {
        string scheme = "http"
        if (self.tls == 1) { scheme = "https" }
        printf("%s  %s://host:%lld%s  timeout=%llds\\n",
               self.method, scheme, self.port, self.path, self.timeout)
    }
}

class RequestBuilder {
    string method
    string path
    int    port
    int    timeout
    int    tls

    constructor() {
        self.method = "GET"  self.path = "/"
        self.port = 80  self.timeout = 30  self.tls = 0
    }

    function setMethod(string m) { self.method  = m }
    function setPath(string p)   { self.path    = p }
    function setPort(int p)      { self.port    = p }
    function setTimeout(int t)   { self.timeout = t }
    function withTls()           { self.tls = 1  self.port = 443 }

    function build() HttpRequest {
        HttpRequest req = HttpRequest(self.method, self.path, self.port, self.timeout, self.tls)
        return req
    }
}

entry main {
    RequestBuilder b1 = RequestBuilder()
    HttpRequest r1 = b1.build()
    r1.print()

    RequestBuilder b2 = RequestBuilder()
    b2.setMethod("POST")
    b2.setPath("/api/data")
    b2.withTls()
    b2.setTimeout(60)
    HttpRequest r2 = b2.build()
    r2.print()

    RequestBuilder b3 = RequestBuilder()
    b3.setPath("/metrics")
    b3.setPort(9090)
    b3.setTimeout(5)
    HttpRequest r3 = b3.build()
    r3.print()
}`,
  },

  {
    id: 'iterator',
    group: 'patterns',
    title: 'Iterator',
    tags: ['patterns', 'interface', 'traversal'],
    desc: 'ArrayIter and RangeIter both implement the Iterator interface. Helpers like printAll, sumRange, and countWhere are written once and work with either. RangeIter generates integers on demand — no backing allocation.',
    code: `import array from ds

extern function printf(string fmt, ...) int

interface Iterator {
    function hasNext() bool
    function next() int
    function reset()
}

class ArrayIter implements Iterator {
    Array<int> data
    int cursor

    constructor() {
        self.data = Array(16)  self.cursor = 0
    }
    function push(int val)  { self.data.push(val) }
    function hasNext() bool { return self.cursor < self.data.len() }
    function next() int {
        int val = self.data.get(self.cursor)
        self.cursor = self.cursor + 1
        return val
    }
    function reset() { self.cursor = 0 }
}

class RangeIter implements Iterator {
    int start  int current  int end  int step

    constructor(int lo, int hi, int stride) {
        self.start = lo  self.current = lo
        self.end = hi    self.step = stride
    }
    function hasNext() bool { return self.current < self.end }
    function next() int {
        int val = self.current
        self.current = self.current + self.step
        return val
    }
    function reset() { self.current = self.start }
}

function printAll(ArrayIter it) {
    it.reset()
    printf("[")
    int first = 1
    while (it.hasNext()) {
        if (first == 0) { printf(", ") }
        printf("%lld", it.next())
        first = 0
    }
    printf("]\\n")
}

function sumRange(RangeIter it) int {
    it.reset()
    int total = 0
    while (it.hasNext()) { total = total + it.next() }
    return total
}

function countWhere(ArrayIter it, address pred) int {
    it.reset()
    int count = 0
    while (it.hasNext()) {
        callback(int) int fn = cast pred
        if (fn(it.next()) == 1) { count = count + 1 }
    }
    return count
}

function isEven(int n) int { if ((n % 2) == 0) { return 1 } return 0 }

entry main {
    ArrayIter arr = ArrayIter()
    arr.push(3)  arr.push(1)  arr.push(4)  arr.push(1)
    arr.push(5)  arr.push(9)  arr.push(2)  arr.push(6)

    printf("array: ")
    printAll(arr)
    printf("evens: %lld\\n", countWhere(arr, isEven::address))

    RangeIter r = RangeIter(1, 11, 1)
    printf("sum 1..10 = %lld\\n", sumRange(r))
}`,
  },

  {
    id: 'raii',
    group: 'patterns',
    title: 'RAII',
    tags: ['patterns', 'memory', 'defer', 'lifetime'],
    desc: 'Buffer wraps a heap allocation with a named acquire/release protocol. defer schedules release() at scope entry so it runs before every return — including early returns. No leak is possible regardless of control flow.',
    code: `extern function printf(string fmt, ...) int

class Buffer {
    address data
    int     size

    constructor(int n) {
        self.data = allocate n
        self.size = n
        printf("Buffer(%lld): acquired\\n", n)
    }

    function release() {
        printf("Buffer(%lld): released\\n", self.size)
        deallocate self.data
    }
}

function freeBlock(address p) { deallocate p }

// defer guarantees release() runs before any return
function process(int earlyExit) {
    Buffer buf = Buffer(64)
    defer buf.release()       // scheduled here; runs before every return

    printf("processing\\n")
    if (earlyExit == 1) {
        printf("early return\\n")
        return                // release() fires here
    }
    printf("normal exit\\n")
                              // release() fires here
}

// defer works for raw allocations too
function rawDemo() {
    address mem = allocate 128
    defer freeBlock(mem)

    printf("raw block in use\\n")
    printf("returning\\n")
}

entry main {
    printf("=== early return ===\\n")
    process(1)
    printf("\\n=== normal exit ===\\n")
    process(0)
    printf("\\n=== raw allocation ===\\n")
    rawDemo()
}`,
  },


  // ── More Patterns ──────────────────────────────────────────────────────────

  {
    id: 'visitor',
    group: 'patterns',
    title: 'Visitor',
    tags: ['patterns', 'callbacks', 'dispatch'],
    desc: 'Shape.accept(fn) calls any visitor function with the shape\'s internal data. Swap the visitor to get a completely different behaviour — area, perimeter, description — without touching any Shape code. Visitors are plain functions, no extra class needed.',
    code: `extern function printf(string fmt, ...) int

enum ShapeKind { Circle=0, Rectangle=1, Triangle=2 }

class Shape {
    int kind  int a  int b

    constructor(int k, int x, int y) {
        self.kind = k
        self.a    = x
        self.b    = y
    }

    // accept dispatches self's data to any visitor
    function accept(address visitor) int {
        callback(int, int, int) int fn = cast visitor
        return fn(self.kind, self.a, self.b)
    }
}

function makeCircle(int r) Shape {
    Shape s = Shape(ShapeKind.Circle, r, 0)
    return s
}

// visitors — plain functions, no class required
function visitArea(int kind, int a, int b) int {
    if (kind == ShapeKind.Circle)    { return a * a * 3 }
    if (kind == ShapeKind.Rectangle) { return a * b }
    if (kind == ShapeKind.Triangle)  { return (a * b) / 2 }
    return 0
}

function visitDescribe(int kind, int a, int b) int {
    if (kind == ShapeKind.Circle)    { printf("circle    r=%lld\\n", a) }
    if (kind == ShapeKind.Rectangle) { printf("rect      %lldx%lld\\n", a, b) }
    if (kind == ShapeKind.Triangle)  { printf("triangle  base=%lld h=%lld\\n", a, b) }
    return 0
}

entry main {
    Shape c = makeCircle(5)
    // ...build r and t similarly...

    // apply "area" visitor
    int area = c.accept(visitArea::address)
    printf("area = %lld\\n", area)

    // apply "describe" visitor — completely different behaviour, same accept()
    c.accept(visitDescribe::address)
}`,
  },

  {
    id: 'command',
    group: 'patterns',
    title: 'Command',
    tags: ['patterns', 'callbacks', 'replay', 'history'],
    desc: 'Commands are callbacks that mutate state through a pointer. CommandQueue records every executed command so the exact sequence can be replayed from any starting point — the foundation of undo/redo and deterministic audit logs.',
    code: `import array from ds
extern function printf(string fmt, ...) int

function doIncrement(address p) int {
    int v = p::value
    p::value = v + 1
    printf("  inc -> %lld\\n", v + 1)
    return 0
}

function doDouble(address p) int {
    int v = p::value
    p::value = v * 2
    printf("  dbl -> %lld\\n", v * 2)
    return 0
}

class CommandQueue {
    Array<address> log

    constructor() { self.log = Array(16) }

    function run(address state, address cmd) {
        callback(address) int fn = cast cmd
        fn(state)
        self.log.push(cmd)   // record for replay
    }

    function replay(address state) {
        printf("--- replay %lld commands ---\\n", self.log.len())
        int i = 0
        while (i < self.log.len()) {
            address fn = self.log.get(i)
            callback(address) int cmd = cast fn
            cmd(state)
            i = i + 1
        }
    }
}

entry main {
    int counter = 0
    address ptr = counter::address

    CommandQueue q = CommandQueue()
    q.run(ptr, doIncrement::address)
    q.run(ptr, doIncrement::address)
    q.run(ptr, doDouble::address)
    printf("counter = %lld\\n\\n", counter)  // 6

    counter = 0
    q.replay(ptr)                            // deterministic: counter = 6 again
    printf("counter = %lld\\n", counter)
}`,
  },

  {
    id: 'state',
    group: 'patterns',
    title: 'State Machine',
    tags: ['patterns', 'enum', 'fsm', 'transitions'],
    desc: 'Machine holds an enum state and transitions on events. Invalid transitions are silently ignored. All the rules live in send() — the caller stays unaware of the transition table and just fires events.',
    code: `extern function printf(string fmt, ...) int

enum State {
    Idle    = 0
    Running = 1
    Paused  = 2
    Stopped = 3
}

enum Event {
    Start  = 0
    Pause  = 1
    Resume = 2
    Stop   = 3
}

function stateName(int s) string {
    if (s == State.Idle)    { return "IDLE" }
    if (s == State.Running) { return "RUNNING" }
    if (s == State.Paused)  { return "PAUSED" }
    if (s == State.Stopped) { return "STOPPED" }
    return "?"
}

class Machine {
    int state

    constructor() { self.state = State.Idle }

    function send(int event) {
        int old  = self.state
        int next = self.state

        if (self.state == State.Idle    && event == Event.Start)  { next = State.Running }
        if (self.state == State.Running && event == Event.Pause)  { next = State.Paused  }
        if (self.state == State.Running && event == Event.Stop)   { next = State.Stopped }
        if (self.state == State.Paused  && event == Event.Resume) { next = State.Running }
        if (self.state == State.Paused  && event == Event.Stop)   { next = State.Stopped }

        if (next != old) {
            printf("%s -> %s\\n", stateName(old), stateName(next))
            self.state = next
        }
    }

    function current() string { return stateName(self.state) }
}

entry main {
    Machine m = Machine()
    m.send(Event.Start)    // IDLE    -> RUNNING
    m.send(Event.Pause)    // RUNNING -> PAUSED
    m.send(Event.Resume)   // PAUSED  -> RUNNING
    m.send(Event.Stop)     // RUNNING -> STOPPED
    m.send(Event.Start)    // ignored: already STOPPED
    printf("state: %s\\n", m.current())
}`,
  },

  {
    id: 'pipeline',
    group: 'patterns',
    title: 'Pipeline',
    tags: ['patterns', 'composition', 'callbacks', 'transforms'],
    desc: 'An ordered array of single-int transforms. run() feeds a value through every stage in sequence. Pipelines compose freely — build different processing chains from the same small reusable functions with no shared state.',
    code: `import array from ds
extern function printf(string fmt, ...) int

class Pipeline {
    Array<address> stages

    constructor() { self.stages = Array(8) }

    function pipe(address stage) { self.stages.push(stage) }

    function run(int input) int {
        int val = input
        int i = 0
        while (i < self.stages.len()) {
            address fn = self.stages.get(i)
            callback(int) int stage = cast fn
            val = stage(val)
            i = i + 1
        }
        return val
    }
}

function times2(int n) int  { return n * 2 }
function addTen(int n) int  { return n + 10 }
function square(int n) int  { return n * n }
function negate(int n) int  { return 0 - n }

function clamp100(int n) int {
    if (n > 100) { return 100 }
    return n
}
function absolute(int n) int {
    if (n < 0) { return 0 - n }
    return n
}

entry main {
    Pipeline norm = Pipeline()
    norm.pipe(times2::address)
    norm.pipe(addTen::address)
    norm.pipe(clamp100::address)
    printf("norm(5)  = %lld\\n", norm.run(5))   // 20
    printf("norm(50) = %lld\\n", norm.run(50))  // clamped to 100

    Pipeline mag = Pipeline()
    mag.pipe(negate::address)
    mag.pipe(square::address)
    mag.pipe(absolute::address)
    printf("mag(-3)  = %lld\\n", mag.run(-3))   // 9
}`,
  },

  {
    id: 'decorator',
    group: 'patterns',
    title: 'Decorator',
    tags: ['patterns', 'callbacks', 'wrapping', 'memoization'],
    desc: 'LogDecorator adds before/after logging to any (int)→int function. MemoDecorator caches the last result — repeated calls with the same argument skip the computation entirely. Both expose the same call(int) interface so they compose.',
    code: `extern function printf(string fmt, ...) int

function computeFib(int n) int {
    if (n <= 1) { return n }
    int a = 0
    int b = 1
    int i = 2
    while (i <= n) {
        int tmp = a + b
        a = b
        b = tmp
        i = i + 1
    }
    return b
}

class LogDecorator {
    address inner
    string  name

    constructor(string n, address fn) {
        self.name  = n
        self.inner = fn
    }

    function call(int arg) int {
        callback(int) int fn = cast self.inner
        int result = fn(arg)
        printf("[%s] %lld -> %lld\\n", self.name, arg, result)
        return result
    }
}

class MemoDecorator {
    address inner
    int     cachedArg
    int     cachedResult
    int     valid

    constructor(address fn) {
        self.inner        = fn
        self.valid        = 0
        self.cachedArg    = 0
        self.cachedResult = 0
    }

    function call(int arg) int {
        if (self.valid == 1 && self.cachedArg == arg) {
            printf("[memo  hit] %lld\\n", arg)
            return self.cachedResult
        }
        callback(int) int fn = cast self.inner
        int result = fn(arg)
        self.cachedArg    = arg
        self.cachedResult = result
        self.valid        = 1
        printf("[memo miss] %lld -> %lld\\n", arg, result)
        return result
    }
}

entry main {
    LogDecorator logged = LogDecorator("fib", computeFib::address)
    logged.call(8)
    logged.call(12)

    MemoDecorator memo = MemoDecorator(computeFib::address)
    memo.call(10)   // miss: computes 55
    memo.call(10)   // hit:  returns 55 instantly
    memo.call(15)   // miss: computes 610
}`,
  },

]

const groups = [
  { id: 'embedded', label: 'Embedded' },
  { id: 'assembly', label: 'Assembly' },
  { id: 'systems',  label: 'Systems'  },
  { id: 'memory',   label: 'Memory & Pointers' },
  { id: 'tui',      label: 'TUI'      },
  { id: 'patterns', label: 'Design Patterns' },
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
  padding: 3rem var(--page-gutter) 6rem;
}

.hero { margin-bottom: 2rem; }

.hero h1 {
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 800;
  color: var(--color-text);
  letter-spacing: -1px;
  margin-bottom: 0.6rem;
}

.hero-sub {
  font-size: 1.05rem;
  color: var(--color-text-soft);
  max-width: 620px;
  line-height: 1.7;
}

.toc-bar {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-wrap: wrap;
  padding: 0.6rem 0.9rem;
  background: var(--color-surface-soft);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-lg);
  margin-bottom: 3.5rem;
}

.toc-label {
  font-weight: 700;
  color: var(--color-text-on-dark-soft);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-size: 0.65rem;
  margin-right: 0.25rem;
}

.toc-bar a {
  padding: 0.2rem 0.7rem;
  color: #475569;
  text-decoration: none;
  border-radius: var(--radius-pill);
  font-size: 0.85rem;
  font-weight: 500;
  transition: background var(--transition-fast), color var(--transition-fast);
}

.toc-bar a:hover {
  background: var(--color-info-tint);
  color: var(--color-cyan);
}

.group { margin-bottom: 4.5rem; }

.group-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-text-on-dark-soft);
  margin-bottom: 1.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-border-strong);
}

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
  color: var(--color-text);
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
  border-radius: var(--radius-pill);
  background: var(--color-surface-code);
  color: #64748b;
  border: 1px solid var(--color-border-strong);
}

.card-desc {
  font-size: 0.9rem;
  color: var(--color-text-soft);
  line-height: 1.7;
  margin-bottom: 0.85rem;
  max-width: 700px;
}
</style>
