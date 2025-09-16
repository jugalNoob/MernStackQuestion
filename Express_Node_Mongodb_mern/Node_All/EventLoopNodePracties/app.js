// const fs = require('fs'); // Load file system module

// // --- Top-Level Code ---
// console.log(fs.lutimes, 'hello');  // Log method (if available)
// console.log('Hello from Top-Level Code'); // Executed first

// // --- Timers ---
// setTimeout(() => {
//     console.log('Hello from Timer 1'); // Scheduled with 0ms delay
// }, 0);

// // --- setImmediate ---
// setImmediate(() => {
//     console.log('Hello from Immediate Fn 1'); // Scheduled to run after poll phase
// });

// // --- File system (Async I/O) ---
// fs.readFile('simple.txt', 'utf-8', () => {
//     console.log('I/O Polling finished');

//     // Scheduled inside I/O callback
//     setTimeout(() => {
//         console.log('Hello world from setTimeout 2 (0ms)');
//     }, 0);

//     setTimeout(() => {
//         console.log('Hello world from setTimeout 3 (5000ms)');
//     }, 5000);

//     setImmediate(() => {
//         console.log('Hello from Immediate Fn 2');
//     });
// });


// node --trace-events-enabled --trace-event-categories v8,node,node.async_hooks yourfile.js


// --> CPU Intensive 

const crypto = require('crypto');

process.env.UV_THREADPOOL_SIZE=1 //chnage your thread poll

console.time('1');
console.time('2');
console.time('3');
console.time('4');
console.time('5');
console.time('6');
for (let i = 1; i <= 6; i++) {
  crypto.pbkdf2('pass', 'salt', 100000, 512, 'sha512', () => {
    console.timeEnd(String(i));
  });
}


// 🔍 What This Tells Us
// Tasks 1–4 finished around the same time (~1.1s)

// Task 5 took longer (~1.7s)

// This is expected behavior due to the libuv thread pool limit:


// ✅ Summary

// | Observation               | Explanation                                 |
// | ------------------------- | ------------------------------------------- |
// | 4 tasks finish together   | libuv thread pool allows 4 concurrent tasks |
// | 5th task is delayed       | Waits for thread availability               |
// | Want more parallel tasks? | Increase `UV_THREADPOOL_SIZE` (max 128)     |
