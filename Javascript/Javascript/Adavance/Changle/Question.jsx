https://www.toptal.com/javascript/interview-questions


🔹 1. var, let, const – Difference?

Answer:

var: Function-scoped, hoisted, can be redeclared.

let: Block-scoped, hoisted (in temporal dead zone), can be reassigned but not redeclared.

const: Block-scoped, cannot be reassigned, must be initialized.

function test() {
  var x = 1;
  let y = 2;
  const z = 3;
  if (true) {
    var x = 10; // redeclared
    let y = 20; // block scope
    // z = 30; ❌ Error
  }
  console.log(x); // 10
  console.log(y); // 2
}
test();


Difference between var, let, and const?

What is hoisting in JavaScript?

console.log(a); // undefined
var a = 5;

// let and const -> temporal dead zone
// console.log(b); ❌ ReferenceError
let b = 10;



Explain closure with an example.

Difference between undefined, null, NaN?

What are truthy and falsy values in JavaScript?

Difference between == and ===.

What are primitive vs reference types?

🔹 Key Differences

| Feature           | Primitive Types                     | Reference Types                  |
| ----------------- | ----------------------------------- | -------------------------------- |
| **Stored in**     | Stack                               | Heap (reference stored in stack) |
| **Mutable?**      | Immutable                           | Mutable                          |
| **Copy behavior** | Copy of value                       | Copy of reference (pointer)      |
| **Examples**      | `number`, `string`, `boolean`, etc. | `object`, `array`, `function`    |


⚡ Interview takeaway:

Primitive = value-based copy.

🔹 1. Primitive Types

Primitive types are basic, immutable values in JavaScript.
They are stored directly in memory (stack).

Types of primitives:

let x = 10;      // number (primitive)
let y = x;       // copy value
y = 20;

console.log(x); // 10  (unchanged)
console.log(y); // 20







Reference = pointer-based copy.
🔹 2. Reference Types

Reference types are objects.
They are stored in heap memory, and variables hold a reference (address) to that object.

Types of reference values:


let obj1 = { name: "Alice" };
let obj2 = obj1;  // copy reference (not value)
obj2.name = "Bob";

console.log(obj1.name); // "Bob"  (changed)
console.log(obj2.name); // "Bob"



00.;;How does this keyword work in different contexts?




00.Difference between function declaration vs function expression vs arrow function.
🔹 Key Differences
| Feature            | Function Declaration               | Function Expression           | Arrow Function                    |
| ------------------ | ---------------------------------- | ----------------------------- | --------------------------------- |
| **Syntax**         | `function greet() {}`              | `const greet = function(){}`  | `const greet = () => {}`          |
| **Hoisting**       | ✅ Yes                              | ❌ No                          | ❌ No                              |
| **Name**           | Must have a name                   | Can be anonymous              | Always anonymous                  |
| **`this` binding** | Dynamic (`this` depends on caller) | Dynamic                       | Lexical (`this` from outer scope) |
| **Use case**       | Define reusable functions          | Assign functions to variables | Short, callback-style functions   |


⚡ Interview takeaway:

Declaration → hoisted, reusable.

Expression → not hoisted, flexible.

Arrow → short, lexical this, great for callbacks.



🔹 3. Arrow Function (ES6+)

Shorter syntax using =>.

Always anonymous (but can be stored in a variable).

Not hoisted.

Does not have its own this → inherits from surrounding scope (lexical this).

// Arrow Function
const greet = (name) => `Hello, ${name}`;

console.log(greet("Charlie")); // ✅ Works after definition





🔹 2. Function Expression

A function assigned to a variable.

Not hoisted (cannot be used before definition).

Can be named or anonymous.

// Function Expression
const greet = function(name) {
  return `Hello, ${name}`;
};

console.log(greet("Bob")); // ✅ Works only after definition


❌ Calling greet() before the line would throw:

ReferenceError: Cannot access 'greet' before initialization




🔹 1. Function Declaration

Uses the function keyword with a name.

Hoisted (can be called before it is defined).

this depends on how it is called.

// Function Declaration
function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet("Alice")); // ✅ Works even if called before definition




What is event bubbling, capturing, and delegation?


00.Q what is closure ?

✅ Key Points

Inner function → has access to:

Its own variables

Variables from the outer function

Global variables

Outer function → ❌ cannot access variables declared inside the inner function.

So in your words:
👉 Closure = Function under function, where the inner function can use outer’s variables, but outer cannot use inner’s variables. ✅


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


4. Difference between “ == “ and “ === “ operators.
Both are comparison operators. The difference between both 
the operators is that “==” is used to compare values whereas,
 “ === “ is used to compare both values and types.

Example:

var x = 2;
var y = "2";
(x == y)  // Returns true since the value of both x and y is the same
(x === y) // Returns false since the typeof x is "number" and typeof y is "strin



2. What would be the result of 3+2+"7"?

let result = 3 + 2 + "7";
console.log(result);



5. What is a Variable Scope in JavaScript?
In JavaScript, we have each variable are accessed and modified through either one of the given scope:

Global Scope: Outermost level (accessible everywhere).
Local Scope: Inner functions can access variables from their parent functions due to lexical scoping.
Function Scope: Variables are confined to the function they are declared in.
Block Scope: Variables declared with let or const are confined to the nearest block (loops, conditionals, etc.).


8. What does this code log?


const arr = [1, 2, 3];
arr[10] = 99;
console.log(arr.length);

13. What will be the result of this expression?

console.log(null ?? 'default');
console.log(undefined ?? 'default');
console.log(false ?? 'default');


18. What will be the output of this code?

let x = 0;
console.log(x++);
console.log(++x);

31. What is lexical scope in JavaScript?

let outer = "I am outside!";
function inner() {
    console.log(outer);
}
inner();

36. How to convert the string of any base to integer in JavaScript?

In JavaScript, parseInt() function is used to convert the string to an integer. This function returns 
an integer of base which is specified in second argument of parseInt() function. The parseInt() function returns Nan (not a number) when the string doesn’t contain number.