```
const fs =require('fs') // Top Level Code


setTimeout(()=>console.log('hello form Timer 1') , 0) // this code run in Event Loop


console.log('hello from tOp level code') //Top Level Code this run in single Thread
```


////////// ------- >>>Set Immediate --------------->>


const fs =require('fs') // Top Level Code


setTimeout(()=>console.log('hello form Timer 1') , 0) // this code run in Event Loop  -->Event Loop code


setImmediate(()=> console.log('hello from Immediate Fn 1')) //  -->Event Loop


console.log('hello from tOp level code') //Top Level Code this run in single Thread  -->First Top evel Code


// --> second Changllaghe 

const fs =require('fs') // Top Level Code


setTimeout(()=>console.log('hello form Timer 1') , 0) // this code run in Event Loop  -->Event Loop code


setImmediate(()=> console.log('hello from Immediate Fn 1')) //  -->Event Loop

// hello from Immediate Fn 1
// hello form Timer 1



/// ---> Thired Changgle  ---> 
const fs = require('fs'); // Load file system module

// --- Top-Level Code ---
console.log(fs.lutimes, 'hello');  // Log method (if available)
console.log('Hello from Top-Level Code'); // Executed first

// --- Timers ---
setTimeout(() => {
    console.log('Hello from Timer 1'); // Scheduled with 0ms delay
}, 0);

// --- setImmediate ---
setImmediate(() => {
    console.log('Hello from Immediate Fn 1'); // Scheduled to run after poll phase
});

// --- File system (Async I/O) ---
fs.readFile('simple.txt', 'utf-8', () => {
    console.log('I/O Polling finished');

    // Scheduled inside I/O callback
    setTimeout(() => {
        console.log('Hello world from setTimeout 2 (0ms)');
    }, 0);

    setTimeout(() => {
        console.log('Hello world from setTimeout 3 (5000ms)');
    }, 5000);

    setImmediate(() => {
        console.log('Hello from Immediate Fn 2');
    });
});



// node --trace-events-enabled --trace-event-categories v8,node,node.async_hooks yourfile.js
🕸️ Summary Table

| Code Line             | Thread / Phase            | Blocking? |
| --------------------- | ------------------------- | --------- |
| `console.log(...)`    | Main thread               | ✅ Yes     |
| `setTimeout(..., 0)`  | Event loop - Timers phase | ❌ No      |
| `setImmediate(...)`   | Event loop - Check phase  | ❌ No      |
| `fs.readFile(...)`    | libuv thread pool (I/O)   | ❌ No      |
| I/O callback contents | Event loop (after poll)   | ❌ No      |


:::::::::::::::::::::: ----------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>


Thread POll Crypto -------------------:>>


// --> CPU Intensive 

const crypto = require('crypto');


process.env.UV_THREADPOOL_SIZE=1 //chnage your thread poll


console.time('1');
console.time('2');
console.time('3');
console.time('4');
console.time('5');

for (let i = 1; i <= 5; i++) {
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
