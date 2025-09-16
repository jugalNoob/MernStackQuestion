Q1: What is a function in JavaScript?

✅ Answer:
A function is a reusable block of code designed to perform a specific task.
It can take inputs (parameters), process them, and return an output.
  

Q2: Difference between function declaration and function expression?
✅ Answer:

Function Declaration → Hoisted (can be used before definition).

Function Expression → Not hoisted, stored in a variable.

  // Declaration
function greet() { return "Hello"; }

// Expression
const greetExp = function() { return "Hello"; };



Q3: What are arrow functions?
✅ Answer:
Arrow functions are a shorter syntax for writing functions.
They do not have their own this (lexical this)

const sum = (a, b) => a + b;


Q4: What is the difference between call, apply, and bind?

✅ Answer:

call() → invokes function immediately, arguments separated by commas.

apply() → invokes immediately, arguments passed as an array.

bind() → returns a new function with this bound, not invoked immediately.

function greet(city) {
  console.log(`Hello ${this.name} from ${city}`);
}
const user = { name: "Jugal" };

greet.call(user, "Delhi");    // immediate
greet.apply(user, ["Delhi"]); // immediate
const bound = greet.bind(user, "Delhi");
bound(); // later

Q5: What is a closure?

✅ Answer:
A closure is when a function remembers variables from its outer scope even after that scope has finished executing.

function outer() {
  let x = 10;
  return function() { return x; };
}
const inner = outer();
console.log(inner()); // 10


Q6: What is a higher-order function?

✅ Answer:
A higher-order function is a function that either:
Takes another function as an argument, or
Returns another function.
  
  function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
}
const double = multiplyBy(2);
console.log(double(5)); // 10


Q7: What is currying?
✅ Answer:
Currying transforms a function with multiple arguments into a sequence of functions taking one argument at a time.



  Q9: What is recursion?

✅ Answer:
Recursion is when a function calls itself until a base condition is met.

  function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120



Q10: What are pure functions?

✅ Answer:
A pure function:

Always returns the same output for the same input.

Does not cause side effects (like modifying global variables).

  function pureAdd(a, b) {
  return a + b;
}







