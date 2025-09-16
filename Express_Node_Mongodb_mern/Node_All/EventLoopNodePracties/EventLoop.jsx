(B) Event Loop
The event loop has phases:

Timers Phase – Executes callbacks scheduled by setTimeout and setInterval.

I/O Callbacks Phase – Handles I/O events (e.g., TCP, file system).

Idle/Prepare Phase – Internal tasks.

Poll Phase – Waits for new events (I/O).

Check Phase – Executes setImmediate callbacks.

Close Callbacks Phase – Closes connections.

Between each phase, microtasks (process.nextTick, Promise.then) are executed.




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



Delegating I/O work to OS or thread pool

Waiting for completion events

Running callbacks on the single main thread when ready

It runs in phases:

Timers

Pending callbacks

Idle/prepare

Poll (I/O events)

Check (setImmediate)

Close callbacks





const net = require('net');

console.log("1️⃣ Start of script");

// ✅ Microtask with process.nextTick
process.nextTick(() => {
  console.log("2️⃣ process.nextTick callback");
});

// ✅ Microtask with Promise
Promise.resolve().then(() => {
  console.log("3️⃣ Promise.then callback");
});

// ✅ Timer (timers phase)
setTimeout(() => {
  console.log("6️⃣ setTimeout callback (timers phase)");
}, 0);

// ✅ setImmediate (check phase)
setImmediate(() => {
  console.log("8️⃣ setImmediate callback (check phase)");
});

// ✅ Create a small TCP server to trigger I/O callback
const server = net.createServer((socket) => {
  console.log("5️⃣ Incoming TCP connection");

  socket.on('data', () => {
    console.log("socket data received");
  });

  socket.end();
}).listen(3000, () => {
  console.log("4️⃣ TCP server listening");

  // Trigger a client connection (I/O event for next loop)
  const client = net.createConnection(3000);
});

console.log("End of script");




1️⃣ Start of script
End of script
2️⃣ process.nextTick callback          ← microtask (highest priority)
3️⃣ Promise.then callback              ← microtask (after nextTick)
4️⃣ TCP server listening               ← synchronous I/O setup done
5️⃣ Incoming TCP connection            ← I/O callback in poll phase
6️⃣ setTimeout callback (timers phase) ← timers phase
8️⃣ setImmediate callback (check phase)← check phase




Why This Order Happens
Synchronous code (console.log at top) runs first.

process.nextTick runs before any other microtask — even before Promise.then.

Promise.then runs next (microtask queue).

The TCP server starts listening — synchronous setup.

The client connects → triggers an I/O event handled in the poll phase.

setTimeout runs in the timers phase of the next loop tick.

setImmediate runs in the check phase, after poll and before next timers phase.

