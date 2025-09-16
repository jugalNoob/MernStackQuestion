🔹 Basic Questions
1. What is an array in JavaScript?

An array is a special object used to store multiple 
values in a single variable.


let arr = [1, 2, 3, "hello", true];
console.log(arr[0]); // 1
console.log(arr.length); // 5



2. How do you add/remove elements?


let arr = [1, 2, 3];

arr.push(4);      // add at end → [1,2,3,4]
arr.pop();        // remove from end → [1,2,3]
arr.unshift(0);   // add at start → [0,1,2,3]
arr.shift();      // remove from start → [1,2,3]


3. How to check if an element exists?
let arr = [10, 20, 30];
console.log(arr.includes(20)); // true
console.log(arr.indexOf(40));  // -1 (not found)


🔹 Intermediate Questions

4. Looping through an array


let arr = [1, 2, 3];

// for
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

// for...of
for (let val of arr) console.log(val);

// forEach
arr.forEach(val => console.log(val));

c


6. Merge two arrays
let a = [1, 2];
let b = [3, 4];

console.log(a.concat(b));   // [1,2,3,4]
console.log([...a, ...b]);  // [1,2,3,4]



7. Remove duplicates
let nums = [1, 2, 2, 3, 4, 4];
let unique = [...new Set(nums)];
console.log(unique); // [1,2,3,4]


let nums = [1, 2, 3, 4];

// map → transform each element
console.log([1, 2, 3].map(n => n * 2)); 
// [2, 4, 6]

// forEach → just loop
[1, 2, 3].forEach(n => console.log(n * 2)); 
// prints: 2, 4, 6

// filter → keep some elements
console.log([1, 2, 3, 4].filter(n => n % 2 === 0)); 
// [2, 4]

// reduce → accumulate into one value
console.log([1, 2, 3, 4].reduce((sum, n) => sum + n, 0)); 
// 10


👉 Quick hack to remember:

map → new array (transform)

forEach → no return (just loop)

filter → fewer elements (condition)

reduce → one result (sum, product, etc.)


🔹 Advanced / Interview Style

🔹 Coding Practice
8. Reverse an array without reverse()
let arr = [1, 2, 3, 4];
for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
console.log(arr); // [4,3,2,1]





12. Find missing number in sequence


let nums = [1, 2, 4, 5]; // missing 3
let n = nums.length + 1;
let total = (n * (n + 1)) / 2;
let sum = nums.reduce((a, b) => a + b, 0);
console.log(total - sum); // 3


13. Find first non-repeating element


let arr = [2, 3, 4, 2, 3, 5];
let count = {};
for (let num of arr) count[num] = (count[num] || 0) + 1;
let first = arr.find(num => count[num] === 1);
console.log(first); // 4



15. Two-pointer technique (sorted array)


let nums = [1, 2, 3, 4, 6];
let target = 6;
let left = 0, right = nums.length - 1;

while (left < right) {
  let sum = nums[left] + nums[right];
  if (sum === target) {
    console.log(nums[left], nums[right]); // 2 4
    break;
  } else if (sum < target) left++;
  else right--;
}
