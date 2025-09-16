| Component          | Good For                                                | Avoid For                                 |
| ------------------ | ------------------------------------------------------- | ----------------------------------------- |
| **Main thread**    | Orchestrating requests, light logic, calling async APIs | Heavy computation, large loops            |
| **Event loop**     | Non-blocking I/O, async DB calls                        | CPU-intensive JSON parsing                |
| **Thread pool**    | File system, crypto, zlib                               | Infinite loops, real-time math processing |
| **Worker threads** | Image processing, ML inference, video encoding          | Lightweight request handling              |



Node.js: step-by-step lifecycle (from process start to serving requests)
1. Process launch / bootstrap
OS launches node binary.

Node initializes V8 (JS engine) and libuv (I/O & event loop).

Built-in bootstrap files run — native C++ bindings are loaded (fs, net, http, etc.).

Node loads your top-level JS file and begins executing it synchronously.

2. Module loading & compilation
require()/import resolves modules, reads files from disk (sync or async depending on code).

V8 parses the JS source into bytecode and compiles hot code paths to machine code via the JIT (Turbofan). Functions that perform badly may be deoptimized.

Global initialization finishes; your server (for example http.createServer(...)) is created and starts listening. Execution returns to the event loop.

3. Event Loop start (libuv)
libuv enters the event loop which repeatedly runs phases:

timers — callbacks scheduled by setTimeout / setInterval whose time has expired.

pending callbacks — I/O callbacks deferred to the next loop iteration.

idle/prepare — internal.

poll — fetch new I/O events (readable sockets, completed async ops). If there are callbacks, it will run them; otherwise it may wait.

check — setImmediate callbacks run here.

close callbacks — e.g., socket.on('close').

Microtask queue (Promise callbacks) is drained after each callback and between phases; process.nextTick callbacks run even before other microtasks — they have higher priority.

4. Handling an incoming TCP / HTTP request
Kernel signals the socket is readable (epoll/kqueue notifies libuv).

libuv's poll phase wakes and libuv reads socket data (small reads) — the heavy OS networking is managed by the kernel (so sockets are non-blocking).

libuv schedules an I/O callback; Node constructs an HTTP parser that interprets the request.

JavaScript callback for your route runs on the main thread (event loop). While it's running no other JS runs.

If the callback issues asynchronous operations (DB queries, file reads, network requests), Node calls into libuv or the relevant async APIs and registers callbacks/promises to be invoked later.

When those async operations complete:

If they were handled by libuv worker threads (file I/O, DNS lookup, crypto, compression), the worker schedules completion onto the event loop.

If they were kernel-level network I/O, the kernel notifies libuv which schedules your callback.

The callback runs on the main thread; microtasks and process.nextTick are executed as described.

5. Thread pool (libuv worker threads)
Default size: 4 (change with UV_THREADPOOL_SIZE environment variable before Node starts).

Used for: file system operations, DNS lookup, crypto functions (some), zlib, and anything that explicitly uses uv_queue_work.

Worker threads execute in parallel; when done, they push a completion event to the event loop which runs your JS callback on the main thread.

6. Worker Threads (JS level) & multi-core
worker_threads allows running JS on additional threads with message passing (for CPU-bound work).

cluster or process managers (PM2) spawn multiple Node processes to utilize multiple CPU cores — each process has its own event loop and memory.

7. Streams & backpressure
Streams let you process large data (files, HTTP bodies) in chunks to avoid memory blowups.

Backpressure: when the destination cannot keep up, stream.pipe() respects .write() return value and drain event to avoid buffering infinitely.

8. V8 GC & performance effects
V8 runs garbage collection (minor/major/compact) on the heap. Large heaps or many allocations trigger GC, causing pauses that affect event-loop latency.

Heavy synchronous tasks and large memory churn increase GC frequency and pause time.

9. Shutdown & signals
When receiving SIGINT/SIGTERM you should:

Stop accepting new connections (server.close()).

Drain or finish in-flight requests.

Clean up resources and exit.

Handle unhandledRejection and uncaughtException gracefully — log, try to shutdown cleanly, then exit (don’t continue running in an inconsistent state).

