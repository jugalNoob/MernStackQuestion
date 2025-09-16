


console.log(2 + 2 + '2')


// --- 1
function magic() {
  console.log('karan');
}

let magic = 'jugal';

magic(); // ❌ Problem here


// ---> 2

console.log(null == undefined)
console.log(null === undefined)


⚡ Interview takeaway:

Use === (strict equality) in real-world code to avoid unexpected coercion.

Only null == undefined is true; in all other cases, == behaves differently.


//--? 3

function outer() {
  let counter = 0;  // variable in outer scope
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
const fn = outer();  // outer() is executed, inner() is returned
fn(); // 1
fn(); // 2
fn(); // 3




10.
Write a sum method which will work properly when
 invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5


🔹 Coding Challenges (FAANG loves these in JS)

Write a polyfill for bind(), call(), or apply().

Implement a custom Promise.all() or Promise.race().

Implement debounce and throttle functions.

Flatten a nested array [1, [2, [3, 4]], 5] → [1,2,3,4,5].

Implement LRU Cache in JavaScript.

Find the first non-repeating character in a string.