# modules/ds — TODO

All data structures are pure Hopper template classes. No libc.
See also: `docs/data-structures.md` for design notes and naming rationale.

---

## heap.hop — done: bump allocator `Heap`

- [ ] `GrowableHeap` — heap that calls `mmap` to extend itself when full
- [ ] `FreeListHeap` — tracks freed blocks and reuses them (simple malloc replacement)
- [ ] `PoolHeap<T>` — fixed-size typed slots, zero fragmentation, for embedded use

---

## array.hop — not yet created  (`Array<T>`)

The foundation. Everything else depends on this.

- [ ] `constructor(int initial_capacity)` — allocate backing buffer
- [ ] `destructor` — free backing buffer
- [ ] `push(T val)` — append, grow if needed (double capacity on overflow)
- [ ] `pop() T` — remove and return last element
- [ ] `get(int i) T` — bounds-checked index read
- [ ] `set(int i, T val)` — bounds-checked index write
- [ ] `len() int` — current element count
- [ ] `cap() int` — current allocated capacity
- [ ] `is_empty() bool`
- [ ] `clear()` — reset length to 0, keep allocation
- [ ] `reserve(int n)` — ensure capacity for at least n more elements
- [ ] `operator []` — sugar for `get`
- [ ] Grow strategy: double capacity (2x) on overflow

---

## string.hop — not yet created  (`String`)

Wraps `Array<byte>`. Safe, length-tracked replacement for raw `string`.

- [ ] `constructor(string raw, int len)` — build from raw pointer + known length
- [ ] `destructor`
- [ ] `len() int`
- [ ] `get(int i) byte` — bounds-checked character read
- [ ] `append(string raw, int len)` — append raw bytes
- [ ] `append_str(String other)` — append another String
- [ ] `equals(String other) bool`
- [ ] `starts_with(string prefix, int len) bool`
- [ ] `ends_with(string suffix, int len) bool`
- [ ] `index_of(byte c) int` — first occurrence, -1 if not found
- [ ] `slice(int start, int end) String` — substring copy
- [ ] `to_raw() string` — get raw `i8*` pointer for syscall use
- [ ] `from_int(int n) String` — integer to decimal string

---

## stack.hop — not yet created  (`Stack<T>`)

LIFO. Thin wrapper over `Array<T>`.

- [ ] `constructor`
- [ ] `destructor`
- [ ] `push(T val)`
- [ ] `pop() T`
- [ ] `peek() T` — top element without removing
- [ ] `is_empty() bool`
- [ ] `len() int`

---

## queue.hop — not yet created  (`Queue<T>`)

FIFO. Fixed ring buffer for O(1) enqueue/dequeue without reallocation.

- [ ] `constructor(int capacity)`
- [ ] `destructor`
- [ ] `enqueue(T val) bool` — returns false if full
- [ ] `dequeue() T`
- [ ] `peek() T` — front element without removing
- [ ] `is_empty() bool`
- [ ] `is_full() bool`
- [ ] `len() int`

---

## linked_list.hop — not yet created  (`LinkedList<T>`)

Singly linked, node-based. O(1) prepend. No random access.

- [ ] `constructor`
- [ ] `destructor` — free all nodes
- [ ] `prepend(T val)` — insert at head
- [ ] `append(T val)` — insert at tail (tracks tail pointer)
- [ ] `pop_front() T`
- [ ] `peek_front() T`
- [ ] `len() int`
- [ ] `contains(T val) bool`
- [ ] `remove(T val) bool` — remove first occurrence

---

## deque.hop — not yet created  (`Deque<T>`)

Double-ended queue. Ring buffer backed.

- [ ] `constructor(int capacity)`
- [ ] `destructor`
- [ ] `push_front(T val)`
- [ ] `push_back(T val)`
- [ ] `pop_front() T`
- [ ] `pop_back() T`
- [ ] `peek_front() T`
- [ ] `peek_back() T`
- [ ] `is_empty() bool`
- [ ] `len() int`

---

## hash_map.hop — not yet created  (`HashMap<K, V>`)

Open-addressing hash table with linear probing.

- [ ] `constructor(int initial_capacity)`
- [ ] `destructor`
- [ ] `put(K key, V val)` — insert or update
- [ ] `get(K key) V` — lookup, crashes or returns default on miss (TBD)
- [ ] `contains(K key) bool`
- [ ] `remove(K key) bool`
- [ ] `len() int`
- [ ] Resize at 0.75 load factor
- [ ] Hash strategy: needs design — built-in for `int`, operator-based for objects
- [ ] Equality: uses `==` operator on K

---

## set.hop — not yet created  (`Set<T>`)

Unique-element collection. Backed by `HashMap<T, bool>`.

- [ ] `constructor`
- [ ] `destructor`
- [ ] `add(T val)`
- [ ] `remove(T val) bool`
- [ ] `contains(T val) bool`
- [ ] `len() int`
- [ ] `union(Set<T> other) Set<T>`
- [ ] `intersect(Set<T> other) Set<T>`

---

## min_heap.hop — not yet created  (`MinHeap<T>`)

Binary min-heap backed by `Array<T>`. Uses `<` operator for ordering.

- [ ] `constructor`
- [ ] `destructor`
- [ ] `insert(T val)`
- [ ] `pop_min() T`
- [ ] `peek_min() T`
- [ ] `len() int`
- [ ] `is_empty() bool`

---

## max_heap.hop — not yet created  (`MaxHeap<T>`)

Same as MinHeap, inverted comparator (`>`).

- [ ] Same interface as MinHeap
- [ ] `pop_max()`, `peek_max()`

---

## ring.hop — not yet created  (`Ring<T>`)

Fixed-capacity circular buffer. No heap allocation — caller provides storage.
Designed for interrupt handlers and I/O buffers.

- [ ] `constructor(address buf, int capacity)` — uses caller-provided memory
- [ ] `write(T val) bool` — returns false if full
- [ ] `read() T`
- [ ] `peek() T`
- [ ] `is_empty() bool`
- [ ] `is_full() bool`
- [ ] `len() int`

---

## bit_vec.hop — not yet created  (`BitVec`)

Packed bit array. Stores N booleans in N/8 bytes.

- [ ] `constructor(int num_bits)` — allocates ceil(bits/8) bytes
- [ ] `destructor`
- [ ] `set(int i, bool val)`
- [ ] `get(int i) bool`
- [ ] `clear_all()`
- [ ] `set_all()`
- [ ] `count_set() int` — popcount
- [ ] `len() int` — bit count
