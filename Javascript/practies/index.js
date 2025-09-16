// console.time("Execution Time");

function findSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// console.timeEnd("Execution Time");

// ✅ Corrected Memoization Function
const Memoization = (fn) => {
    let cache = {};

    return function (n) {
        if (n in cache) {
            console.log("Fetching from cache:", n);
            return cache[n];
        } else {
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    };
};

const MemoizedSum = Memoization(findSum);

console.time("Memoized Execution");
console.log(MemoizedSum(500)); // First call, computes sum
console.log(MemoizedSum(500)); // Second call, retrieves from cache
console.timeEnd("Memoized Execution");


console.time("start");

for (let i = 0; i <500; i++) {
   console.log(i)
}

console.timeEnd("start");


// Understanding Garbage Collection in JavaScript
// Garbage Collection (GC) in JavaScript is automatic and based on reference counting and mark-and-sweep algorithms.

// When Does Garbage Collection Occur?
// No More References Exist

// N

// let obj = { name: "Alice" };
// obj = null;  // Now the object is garbage collected


// 2 . Objects Inside Functions Are Collected After Execution

// function createObject() {
//     const tempObj = { key: "value" };
// }
// createObject();  // tempObj is garbage collected after function ends


// 3 . Circular References Can Prevent Garbage Collection

// let a = {};
// let b = {};
// a.ref = b;
// b.ref = a;  // Circular reference - not collected in older JS engines


// Optimized Code with Proper Memory Handling


// // Declare object properly before using it
// const myObj = { name: "wittcode", soccer: "fun" };

// // Modify object after declaration
// myObj.soccer = "Not Fun";

// // Remove reference to allow garbage collection
// myObj = null;

// // Function scope object gets garbage collected after execution
// function myFunction() {
//     const tempObj = { name: "wittcode", soccer: "fun" };
// }

// myFunction(); // tempObj is garbage collected after function call ends


// Best Practices for Memory Management
// ✅ Use WeakMap and WeakSet for Automatic Garbage Collection


// let weakMap = new WeakMap();
// let obj = { name: "John" };
// weakMap.set(obj, "some value");

// // If `obj` is removed, it's garbage collected automatically
// obj = null;


// Avoid Circular References


// let objA = {};
// let objB = {};
// objA.ref = objB;
// objB.ref = objA; // ❌ Memory leak risk

// // ✅ Solution: Use WeakMap instead

// ✅ Manually Remove Large Objects If No Longer Needed



// // Final Takeaway 🚀
// // ✅ Garbage collection is automatic in JavaScript
// // ✅ Use null to remove references when needed
// // ✅ Avoid circular references that prevent garbage collection
// // ✅ Use WeakMap and WeakSet for better memory management