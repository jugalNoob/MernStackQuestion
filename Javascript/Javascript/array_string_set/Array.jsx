🔹 Definition

An array is like a list or a collection of items,
 all stored under one single name.

Imagine a row of lockers. Each locker has a number
 (starting at 0) and contains one item.

The whole row is the array.

Each locker number is an index.

The item inside a locker is a value.

Can hold multiple values in a single variable.

Values can be of different data types (number, string, boolean, object, even another array).

Index-based access → first element is at index 0.

Arrays are mutable (you can add, remove, or update items).

Have many built-in methods (push, pop, map, filter, etc.).

👉 Quick memory hack for interviews:

map/filter/reduce → return a new array/value

forEach → just loops, no return

find/findIndex → get first match / index

some/every → boolean checks

flatMap → map + flatten

sort → in-place sort

concat/slice → don’t modify original

splice → modifies original





00::some 


🔹 some()

Used when you want to check if at least one element in the array meets a condition.

Example use cases:

Check if any user is online.

Check if any product is out of stock.

Check if any field in a form is empty.

let users = [{active: false}, {active: true}, {active: false}];
console.log(users.some(u => u.active)); // true (at least one active)

let users = [{name: "A", online: false}, {name: "B", online: true}];
let isAnyoneOnline = users.some(u => u.online);
console.log(isAnyoneOnline); // true

let cart = [{item: "Shoes", stock: 5}, {item: "Bag", stock: 0}];
let hasOutOfStock = cart.some(p => p.stock === 0);
console.log(hasOutOfStock); // true


00::Every in narray 

Used when you want to check if all elements in the array meet a condition.

Example use cases:

Check if all users are verified.

Check if all students passed the exam.

Check if all items in a cart are in stock.

let users = [{age: 20}, {age: 25}, {age: 30}];
console.log(users.every(u => u.age >= 18)); // true (all >= 18)


let passwords = ["pass123", "secure456", "abc789"];
let valid = passwords.every(p => p.length >= 6);
console.log(valid); // true

let products = [{item: "Phone", stock: 10}, {item: "Laptop", stock: 5}];
let allAvailable = products.every(p => p.stock > 0);
console.log(allAvailable); // true



// ==========================
// Section 1: Higher-Order Functions
// ==========================

// map → creates new array by transforming each element
[1, 2, 3].map(n => n * 2);            // [2, 4, 6]

// filter → creates new array with elements passing condition
[1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]

// reduce → reduces array to a single value
[1, 2, 3, 4].reduce((acc, n) => acc + n, 0); // 10

// forEach → loops through array (no return)
[1, 2, 3].forEach(n => console.log(n * 2));

// find → returns first element matching condition
[5, 10, 15].find(n => n > 7);          // 10

// findIndex → returns index of first match
[5, 10, 15].findIndex(n => n > 7);     // 1

// some → true if at least one matches
[1, 2, 3].some(n => n > 2);            // true

// every → true if all match
[2, 4, 6].every(n => n % 2 === 0);     // true

// flatMap → map + flatten one level
[1, 2, 3].flatMap(n => [n, n * 2]);    // [1,2,2,4,3,6]

// sort → in-place sort
[3, 1, 2].sort((a, b) => a - b);       // [1, 2, 3]

// concat → merges arrays (no modify)
[1, 2].concat([3, 4]);                 // [1,2,3,4]

// slice → returns a portion (no modify)
[1, 2, 3, 4].slice(1, 3);              // [2,3]

// splice → add/remove/replace (modifies original)
let arr = [1, 2, 3, 4];
arr.splice(1, 2, 99);                  // [1, 99, 4]

// ==========================
// Section 2: Adding/Removing
// ==========================
let nums = [10, 20, 30];
nums.push(40);   // [10,20,30,40] → add end
nums.pop();      // [10,20,30]     → remove end
nums.unshift(5); // [5,10,20,30]   → add start
nums.shift();    // [10,20,30]     → remove start

// ==========================
// Section 3: Finding
// ==========================
['a', 'b', 'c'].indexOf('b');          // 1
['a', 'b', 'c'].includes('c');         // true

// ==========================
// Section 4: Iterators
// ==========================
let data = ['jugal', 'karan', 'anku'];
for (let [index, value] of data.entries()) {
  console.log(index, value);
}
// 0 jugal, 1 karan, 2 anku

// ==========================
// Section 5: Converting
// ==========================
[1, 2, 'a'].toString();                // "1,2,a"
['Fire', 'Air', 'Water'].join('-');    // "Fire-Air-Water"

// ==========================
// Section 6: Creating Arrays
// ==========================
Array.of(5, 10, 15);                   // [5,10,15]
Array.from('foo');                     // ['f','o','o']

// ==========================
// Section 7: Flattening
// ==========================
[1, 2, [3, 4], 5].flat();              // [1,2,3,4,5]

// ==========================
// Section 8: Accessing
// ==========================
let arr2 = [1, 2, 3, 4, 5];
arr2.at(-1);                           // 5
arr2.with(2, 99);                      // [1,2,99,4,5]

// ==========================
// Section 9: Reversing
// ==========================
[1, 2, 3].reverse();                   // [3,2,1] (modifies)
[1, 2, 3].toReversed();                // [3,2,1] (new array)

// ==========================
// Section 10: Sorting New
// ==========================
[3, 1, 2].toSorted();                  // [1,2,3] (new array)

// ==========================
// Section 11: Splicing New
// ==========================
now that ES2023 added toSpliced.
 // [1,2,3,4,5]// splice → add/remove/replace (modifies original)
[0, 0, 3, 4, 5].toSpliced(0, 2, 1, 2);
// splice → add/remove/replace (modifies original)
let arr = [1, 2, 3, 4];
arr.splice(1, 2, 99);                  // [1, 99, 4]

// ==========================
// Section 12: Find Last
// ==========================
Returns the last element in the array that matches the condition.
If no element matches → returns undefined.
[10, 20, 30, 40, 50].findLast(x => x > 25); // 50



findLastIndex(callback)
Returns the index (position) of the last element that matches the condition.
If no element matches → returns -1.
[10, 20, 30, 40, 50].findLastIndex(x => x > 25); // 4




20. What are new array methods (ES2023)?

toSorted() → sorted copy

toReversed() → reversed copy

toSpliced() → spliced copy

with() → replace by index (returns new array)


19. What’s the difference between for…in vs for…of on arrays?

for…in → iterates over keys (indexes).

for…of → iterates over values.



16. How to create arrays in JavaScript?

Using [] → let arr = [1, 2, 3]

Using new Array() → let arr = new Array(3)


14. How to reverse an array?

👉 Use reverse() (modifies original) or toReversed() (new array).


11. Difference between some() vs every()?

some() → true if at least one matches.

every() → true if all match.


8. How to check if an element exists in an array?

👉 Use includes(), indexOf(), or find().


5. Difference between slice() vs splice()?

slice() → copies part of array (does not modify original).

splice() → removes/replaces part of array (modifies original).

6. Difference between map vs forEach?

map() → returns a new array.

forEach() → just loops (no return).

7. Difference between map vs filter vs reduce?

map() → transform array → returns new array.

filter() → pick items → returns new array.

reduce() → combine items → returns single value.