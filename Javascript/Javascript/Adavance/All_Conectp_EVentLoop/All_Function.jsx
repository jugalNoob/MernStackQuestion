call()	Calls a function with a specified this value and arguments.
apply()	Same as call(), but arguments are in an array.
bind()	Creates a new function with a bound this.
Closures	Functions that retain access to their lexical scope.
IIFE	Immediately executed function expressions.
Currying	Transforms a function into a chain of smaller functions.
Rest Parameter	Allows passing multiple arguments into a function.
Arrow Functions	Shorter syntax for functions.
Callbacks	Functions passed as arguments for asynchronous execution.
async/await	A modern way to handle asynchronous operations.


Advanced JavaScript Interview Questions – Pro Level
1. What is the difference between call(), apply(), and bind()?
✅ call() and apply() both invoke a function immediately, but call() takes arguments separately, whereas apply() takes them as an array.
✅ bind() returns a new function with a permanently bound this value without immediately invoking it.

2. How does JavaScript handle closures, and why are they useful?
✅ A closure is a function that retains access to its outer scope even after the outer function has finished executing.
✅ Closures are useful for data encapsulation, maintaining state, and implementing function factories or private variables.

3. What are the key differences between function expressions and function declarations?
✅ Function declarations are hoisted, meaning they can be called before their definition in the code.
✅ Function expressions are not hoisted, and they must be defined before they are invoked.
✅ Function expressions can be anonymous or named, allowing recursion or better debugging.

4. Why should you avoid using arrow functions in object methods?
✅ Arrow functions do not have their own this and inherit this from the surrounding scope.
✅ In object methods, this often results in undefined when trying to access object properties.
✅ Regular functions should be used in object methods to correctly bind this.

5. What is function currying, and where is it useful?
✅ Currying is the technique of transforming a function that takes multiple arguments into a series of functions that take one argument each.
✅ It is useful for creating reusable function compositions, partial application, and improving code readability.

6. How does JavaScript handle asynchronous code execution?
✅ JavaScript uses the event loop to handle asynchronous operations.
✅ The callback queue, microtask queue (Promises, async/await), and task queue (setTimeout, event listeners) determine execution order.
✅ Promises and async/await provide cleaner syntax compared to callbacks, preventing callback hell.

7. What are the differences between synchronous and asynchronous iterators?
✅ Synchronous iterators use for...of loops to iterate over iterable objects like arrays and maps.
✅ Asynchronous iterators (for await...of) allow consuming asynchronous data sources, such as API calls or streams, sequentially.

8. How does JavaScript implement generators, and what are their benefits?
✅ Generators allow functions to be paused and resumed using the yield keyword.
✅ They provide memory-efficient iteration over large datasets by generating values lazily.
✅ Generators are useful for async programming, implementing infinite sequences, and improving performance.

9. When should you use the rest parameter in function arguments?
✅ The rest parameter (...args) should be used when a function needs to handle an indefinite number of arguments.
✅ It replaces the traditional arguments object and provides a cleaner, array-like structure.
✅ It is useful in mathematical operations, event handlers, and higher-order functions.

10. What is the difference between an Immediately Invoked Function Expression (IIFE) and a normal function?
✅ An IIFE executes immediately after it is defined, preventing pollution of the global scope.
✅ Regular functions must be explicitly invoked and do not provide immediate execution unless called manually.
✅ IIFEs are useful for encapsulating logic, creating private scopes, and initializing modules.

11. Why is function hoisting different from variable hoisting with var, let, and const?
✅ Function declarations are hoisted completely, meaning they can be called before they appear in the code.
✅ Variables declared with var are hoisted but initialized with undefined, leading to potential bugs.
✅ Variables declared with let and const are hoisted but remain in a temporal dead zone (TDZ) until they are assigned a value.

12. What is the arguments object, and why is it deprecated in modern JavaScript?
✅ The arguments object is an array-like structure available inside regular functions to access all arguments passed.
✅ It is not available in arrow functions, making it less flexible.
✅ It is replaced by the rest parameter (...args), which provides a real array and better performance.

13. How does async/await improve JavaScript’s handling of asynchronous code?
✅ async/await makes asynchronous code look and behave like synchronous code, improving readability.
✅ It avoids the callback hell problem by replacing nested callbacks with clean, linear execution.
✅ It works with Promises, making error handling with try/catch more effective.

14. How does JavaScript implement function composition, and why is it beneficial?
✅ Function composition is the process of combining multiple functions into a single function.
✅ It follows the mathematical principle f(g(x)), where one function's output becomes another’s input.
✅ It is useful in functional programming to create reusable and modular code.

15. What are the key differences between regular functions and generator functions?
✅ Regular functions execute completely once called, while generator functions can pause execution using yield.
✅ Generators return an iterator object, allowing lazy evaluation.
✅ They improve performance when dealing with large data sets or infinite sequences.

16. What is tail call optimization, and does JavaScript support it?
✅ Tail call optimization (TCO) allows recursive functions to execute without growing the call stack, improving efficiency.
✅ JavaScript only supports TCO in strict mode ("use strict") and in specific engines like Safari.
✅ Other engines, like Chrome and Node.js, do not support it widely due to lack of implementation in V8.

17. How do JavaScript’s map(), filter(), and reduce() functions differ?
✅ map() transforms each element in an array and returns a new array of the same length.
✅ filter() removes elements that do not match a condition and returns a new array.
✅ reduce() accumulates values in an array into a single result, useful for sum, count, and grouping operations.

18. What is a pure function, and why is it important in JavaScript?
✅ A pure function always produces the same output for the same input and has no side effects.
✅ It improves code predictability, maintainability, and enables better testing and debugging.
✅ Pure functions are the foundation of functional programming.

19. How does JavaScript differentiate between shallow copy and deep copy in functions?
✅ A shallow copy only copies references to objects, meaning changes affect both copies.
✅ A deep copy creates a completely independent copy, preventing unintended mutations.
✅ Shallow copies use spread syntax (...) or Object.assign(), while deep copies use JSON.parse(JSON.stringify()) or structured cloning methods.

20. Why is debouncing and throttling important in JavaScript functions?
✅ Debouncing delays function execution until a pause in events, useful for search bars and resize events.
✅ Throttling limits function execution to a fixed interval, useful for scroll and keypress events.
✅ Both techniques improve performance by reducing unnecessary function calls.


Section 10. Iterators & Generators
Iterators – introduce you to the iteration and iterator protocols.
Generators – develop functions that can pause midway and then continue from where they paused.
yield – dive into how to use the yield keyword in generators.
for…of – learn how to use the for...of loop to iterate over elements of an iterable object.
Asynchronous iterators – learn how to use async iterators to access asynchronous data sources sequentially.
Async generators – show you how to create an async generator.


1. Iterators
An iterator is an object that follows the iteration protocol and allows sequential access to elements in a collection.

Iterator Protocol
An object is an iterator if it has a .next() method that returns an object with:

value: The next value in the sequence.
done: A boolean indicating whether iteration is complete.

function createIterator(arr) {
    let index = 0;
    return {
        next: function () {
            return index < arr.length
                ? { value: arr[index++], done: false }
                : { value: undefined, done: true };
        },
    };
}

const iterator = createIterator([10, 20, 30]);
console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }


2. Generators
A generator function is a special function that can pause
 execution and later resume from the same position.

Syntax
Defined using function* (with an asterisk *).
Uses the yield keyword to pause execution


function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = myGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }


3. yield Keyword
The yield keyword is used inside generators to return a value and pause execution.

function* greetings() {
    yield "Hello";
    yield "World";
}

const greet = greetings();
console.log(greet.next().value); // "Hello"
console.log(greet.next().value); // "World"
console.log(greet.next().done);  // true


4. for…of Loop
The for...of loop is used to iterate over iterable objects like arrays,
 strings, maps, sets, and generator functions.

 function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

for (let num of numbers()) {
    console.log(num); // 1, 2, 3
}


5. Asynchronous Iterators
Used for iterating over asynchronous data sources, like APIs.

Example: Async Iterator

const asyncIterable = {
    [Symbol.asyncIterator]() {
        let i = 0;
        return {
            next() {
                if (i < 3) {
                    return Promise.resolve({ value: i++, done: false });
                }
                return Promise.resolve({ done: true });
            }
        };
    }
};

(async function () {
    for await (const num of asyncIterable) {
        console.log(num); // 0, 1, 2
    }
})();


6. Async Generators
An async generator is a function that can yield promises and is useful for streaming data.

Example: Async Generator

async function* asyncCounter() {
    let i = 0;
    while (i < 3) {
        yield new Promise(resolve => setTimeout(() => resolve(i++), 1000));
    }
}

(async () => {
    for await (let num of asyncCounter()) {
        console.log(num); // 0 (after 1s), 1 (after 1s), 2 (after 1s)
    }
})();
