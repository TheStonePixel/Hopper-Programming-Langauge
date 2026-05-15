# Hopper Standard Data Structures

Planned template classes for `modules/ds/`. All implementations are in pure Hopper
using the `template` keyword — no libc, no runtime dependencies.

---

## Naming Notes

- Raw fixed-size arrays already exist as language syntax: `int arr[5]`
- The dynamic growable array is `Vec<T>` (avoids confusion with raw `array`)
- `Heap` is avoided as a name — it conflicts with "heap memory". Use `MinHeap<T>` / `MaxHeap<T>`.

---

## Tier 1 — Core (implement first)

These are the building blocks. Stack and Queue depend on Vec.

| Name | File | Description |
|------|------|-------------|
| `Vec<T>` | `ds/vec.hop` | Growable array. Heap-allocated, tracks length and capacity. Doubles capacity on overflow. |
| `String` | `ds/string.hop` | Safe string. Wraps `Vec<byte>`. Tracks length. Replaces raw `string` for application code. |

---

## Tier 2 — Fundamental (week 2–3)

Built on top of Vec or linked nodes.

| Name | File | Description |
|------|------|-------------|
| `Stack<T>` | `ds/stack.hop` | LIFO. Thin wrapper over `Vec<T>`. `push`, `pop`, `peek`. |
| `Queue<T>` | `ds/queue.hop` | FIFO. Ring-buffer backed for O(1) enqueue/dequeue. `enqueue`, `dequeue`, `peek`. |
| `LinkedList<T>` | `ds/linked_list.hop` | Singly linked list. Node-based, O(1) prepend. Useful where Vec reallocation is undesirable. |
| `Deque<T>` | `ds/deque.hop` | Double-ended queue. Push/pop from both ends. Backed by a ring buffer. |

---

## Tier 3 — Associative & Priority (week 3–4)

| Name | File | Description |
|------|------|-------------|
| `HashMap<K,V>` | `ds/hash_map.hop` | Open-addressing hash table. Requires `K` to support `==` and a hash function. |
| `Set<T>` | `ds/set.hop` | Unique-element collection. Backed by `HashMap<T, bool>`. |
| `MinHeap<T>` | `ds/min_heap.hop` | Binary min-heap / priority queue. Array-backed. `insert`, `pop_min`, `peek_min`. |
| `MaxHeap<T>` | `ds/max_heap.hop` | Binary max-heap. Same structure, inverted comparator. |

---

## Tier 4 — Systems Utilities (if time allows)

Useful specifically for systems and embedded contexts.

| Name | File | Description |
|------|------|-------------|
| `Ring<T>` | `ds/ring.hop` | Fixed-capacity circular buffer. No heap allocation. Good for interrupt handlers and I/O buffers. |
| `BitVec` | `ds/bit_vec.hop` | Packed bit array. Stores N booleans in N/8 bytes. Useful for flag sets and bitmaps. |
| `Pool<T>` | `ds/pool.hop` | Fixed-size object pool. Pre-allocates N slots, hands out pointers. Zero-fragmentation allocator for embedded use. |

---

## Implementation Order

```
Vec<T>          ← start here, everything else depends on it
String          ← pairs naturally with Vec
Stack<T>        ← trivial once Vec exists
Queue<T>        ← ring buffer, independent of Vec
LinkedList<T>   ← teaches node/pointer patterns in Hopper
Deque<T>
HashMap<K,V>    ← biggest lift; needs a hash strategy
Set<T>          ← trivial once HashMap exists
MinHeap<T>
MaxHeap<T>
Ring<T>         ← useful for OS/driver work
BitVec
Pool<T>
```

---

## Open Questions

- **Naming**: `Vec<T>` vs `Vector<T>` — decide before first implementation
- **Allocator**: do we pass an allocator to Vec, or use a global `malloc`/`free` shim?
- **Comparator**: how does `MinHeap` / `HashMap` receive a compare/hash function? Operator overloading (`==`, `<`) or explicit function pointer?
- **Iterator protocol**: do we design a standard `iter()` / `next()` interface now, or add it later?
