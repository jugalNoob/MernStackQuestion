https://pwskills.com/blog/javascript-interview-questions/

1. What are the different data types in JavaScript?
✅ JavaScript has 7 primitive types: String, Number, Boolean, Undefined, Null, Symbol, and BigInt, and 1 non-primitive type: Object.

2. What is the difference between let, const, and var?
✅ var is function-scoped, let and const are block-scoped.
✅ const cannot be reassigned, while let can.

3. What is hoisting in JavaScript?
✅ Hoisting moves function and variable declarations to the top of their scope before execution.

4. What is the difference between == and ===?
✅ == allows type coercion, === strictly compares both value and type.

5. How does JavaScript handle asynchronous operations?
✅ Using callbacks, Promises, and async/await.

6. What is a closure in JavaScript?
✅ A closure is a function that remembers the scope in which it was created.

7. What is an Immediately Invoked Function Expression (IIFE)?
✅ An IIFE is a function that runs immediately after being defined to avoid polluting the global scope.

8. What is the difference between null and undefined?
✅ null is an intentional absence of value, while undefined means a variable has been declared but not assigned.

9. What is the purpose of typeof in JavaScript?
✅ It returns the data type of a variable.

10. What are truthy and falsy values in JavaScript?
✅ Falsy values: 0, "", null, undefined, NaN, false.
✅ Everything else is truthy.

11. What is the difference between function declaration and function expression?
✅ Function declarations are hoisted, while function expressions are not.

12. How do you check if an array contains a specific value?
✅ Using Array.includes(value).

13. What is the difference between map() and forEach()?
✅ map() returns a new array, forEach() does not.

14. How do you remove duplicates from an array?
✅ Using new Set(array).

15. What is the difference between splice() and slice()?
✅ splice() modifies the original array, slice() returns a new array.

16. What is a higher-order function?
✅ A function that takes another function as an argument or returns a function.

17. What is the difference between synchronous and asynchronous JavaScript?
✅ Synchronous code executes line-by-line, asynchronous code does not block execution.

18. How does this work in JavaScript?
✅ this refers to the execution context.

19. What is an arrow function, and how is it different from a regular function?
✅ Arrow functions have no own this and do not have arguments.

20. What is a rest parameter?
✅ ...args allows passing multiple arguments as an array.

21. How do you copy an object in JavaScript?
✅ Using Object.assign({}, obj) or the spread operator {...obj}.

22. How do you deep copy an object?
✅ Using structuredClone(obj) or JSON.parse(JSON.stringify(obj)).

23. What is the purpose of the bind() method?
✅ It permanently binds this to a function.

24. What is a template literal?
✅ A string wrapped in backticks (`) that supports interpolation.

25. How do you check if a variable is an array?
✅ Array.isArray(variable).

26. What is an event loop in JavaScript?
✅ It handles asynchronous operations using a queue system.

27. What is the difference between setTimeout and setInterval?
✅ setTimeout runs once, setInterval runs repeatedly.

28. How do you prevent default behavior in an event?
✅ event.preventDefault().

29. How do you stop event propagation?
✅ event.stopPropagation().

30. What is destructuring in JavaScript?
✅ A way to extract values from arrays or objects.

31. What is an async function?
✅ A function that returns a Promise.

32. What is the use of the await keyword?
✅ It pauses execution until a Promise is resolved.

33. What is the difference between localStorage, sessionStorage, and cookies?
✅ localStorage persists until manually cleared, sessionStorage clears when the tab closes, and cookies have expiration dates.

34. What is a promise in JavaScript?
✅ A promise represents a future value (Pending → Fulfilled/Rejected).

35. What is the difference between Promise.all() and Promise.race()?
✅ Promise.all() resolves when all promises resolve, Promise.race() resolves when the first promise resolves.

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



🟡 Intermediate Level (35 Questions)
36-70: Advanced Functions, Callbacks, Closures, and Prototypes
✅ apply(), call(), bind(), prototype, __proto__, function currying, polyfills, event bubbling, throttling, debouncing, etc.


🟡 Intermediate Level JavaScript Interview Questions (36-70)
Advanced Functions & Scope
36. What is the difference between .call(), .apply(), and .bind()?
✅ call() invokes a function with a given this and arguments passed individually.
✅ apply() is the same as call(), but arguments are passed as an array.
✅ bind() returns a new function with this permanently set.

37. What is function currying?
✅ Currying is transforming a function with multiple parameters into a sequence of functions that take one parameter each.

38. What is the difference between function declaration and function expression?
✅ Function Declaration (function foo() {}) is hoisted.
✅ Function Expression (const foo = function() {};) is not hoisted.

39. What are polyfills in JavaScript?
✅ Polyfills are scripts that replicate newer JavaScript features in older browsers.

40. What is function composition?
✅ Function composition is combining multiple functions where the output of one function is the input for another.

Closures & Scope
41. What is a closure in JavaScript?
✅ A closure is a function that retains access to its lexical scope even when executed outside of it.

42. How do closures help in JavaScript?
✅ Closures help maintain state, create private variables, and avoid global pollution.

43. What are the disadvantages of closures?
✅ Closures can cause memory leaks if variables are retained unnecessarily.

44. How can you create a private variable in JavaScript?
✅ By using closures inside an IIFE or a function scope.

45. How do you prevent global variable pollution?
✅ Using closures, IIFE, or modules (export/import).

Prototypes & Inheritance
46. What is the prototype chain in JavaScript?
✅ Every object has a prototype, forming a prototype chain that allows inheritance.

47. What is the difference between __proto__ and prototype?
✅ __proto__ is an instance property referring to an object’s prototype.
✅ prototype is a property of constructor functions for defining methods.

48. How does prototypal inheritance work in JavaScript?
✅ Objects inherit properties/methods from their prototype (__proto__).

49. What is the difference between classical and prototypal inheritance?
✅ Classical Inheritance (OOP - Java, C++) uses classes.
✅ Prototypal Inheritance (JavaScript) uses object chaining.

50. How can you extend a built-in object prototype?
✅ By modifying Object.prototype, but it's not recommended.

51. What is Object.create()?
✅ Object.create(proto) creates a new object with proto as its prototype.

52. How do you check if an object has a property without inheriting it?
✅ Using obj.hasOwnProperty(prop).

53. What is the difference between Object.keys() and Object.getOwnPropertyNames()?
✅ Object.keys() returns only enumerable properties.
✅ Object.getOwnPropertyNames() returns all own properties.

54. What is the super keyword in JavaScript?
✅ super is used to call methods from a parent class.

Asynchronous JavaScript: Callbacks, Promises, Async/Await
55. What is a callback function?
✅ A callback is a function passed as an argument to another function and executed later.

56. What is callback hell, and how do you avoid it?
✅ Nested callbacks lead to unreadable code. Avoid it using Promises or async/await.

57. What is the difference between synchronous and asynchronous JavaScript?
✅ Synchronous: Code executes line-by-line.
✅ Asynchronous: Code doesn't block execution (uses callbacks, Promises, async/await).

58. What is a Promise?
✅ A Promise represents a value that may be available now, later, or never.

59. What are the different states of a Promise?
✅ Pending → Fulfilled/Resolved → Rejected.

60. What is Promise.all()?
✅ It runs multiple promises in parallel and resolves when all are resolved.

61. What is Promise.race()?
✅ It resolves when the first promise resolves or rejects.

62. What is async/await?
✅ async makes a function return a Promise, and await pauses execution until the Promise resolves.

63. Can you use async/await inside a forEach loop?
✅ No, forEach does not support await. Use for...of instead.

Event Handling & Optimization
64. What is event bubbling and event capturing?
✅ Bubbling: Event propagates from target → parent → root.
✅ Capturing: Event propagates from root → parent → target.

65. How do you stop event propagation?
✅ Using event.stopPropagation().

66. What is event delegation?
✅ Using a single event listener on a parent element to manage child elements dynamically.

67. What is debouncing?
✅ Debouncing limits function execution after a delay when an event is triggered frequently (e.g., search box).

68. What is throttling?
✅ Throttling ensures a function is executed at most once in a given time frame (e.g., window resize events).

69. How do you implement debouncing?
✅ Using setTimeout() inside a function to delay execution.

70. How do you implement throttling?
✅ Using setTimeout() or timestamps to limit function calls within a time period.

📝 Summary of Intermediate-Level Topics (36-70):
✅ Advanced Functions → call(), apply(), bind(), currying, IIFE, closures.
✅ Prototypes & Inheritance → prototype, __proto__, Object.create().
✅ Async JavaScript → Callbacks, Promises, async/await.
✅ Event Handling & Performance → Event bubbling, delegation, debouncing, throttling.




🔴 Hard-Level JavaScript Interview Questions (71-100)
🔹 Performance Optimization & Memory Management
71. What is memory management in JavaScript?
✅ JavaScript uses automatic garbage collection, managing memory via allocation, usage, and deallocation.

72. What is garbage collection, and how does it work in JavaScript?
✅ Garbage collection removes unused objects. JavaScript uses mark-and-sweep and reference counting strategies.

73. What are WeakMap and WeakSet? How are they different from Map and Set?
✅ WeakMap and WeakSet allow weakly held object references, meaning objects can be garbage collected.
✅ Unlike Map/Set, keys in WeakMap must be objects, and they don’t prevent garbage collection.

74. What is tail call optimization (TCO)?
✅ Tail call optimization allows a function’s last operation to be a function call, avoiding stack growth and improving performance.
✅ It’s only available in strict mode and certain JavaScript engines like V8.

75. What is a memory leak, and how do you prevent it?
✅ Memory leaks occur when objects persist in memory longer than necessary.
✅ Prevention techniques:

Avoid global variables
Use WeakMap/WeakSet
Remove event listeners when not needed
Close WebSockets or intervals when done
🔹 JavaScript Engine (V8) & Event Loop
76. What is the V8 Engine?
✅ V8 is Google’s high-performance JavaScript engine that powers Chrome and Node.js.

77. How does the V8 Engine optimize JavaScript execution?
✅ V8 uses JIT compilation, optimizing code with techniques like hidden classes, inline caching, and deoptimization.

78. What is the difference between an interpreter and a compiler in JavaScript?
✅ Interpreters execute code line-by-line, while compilers convert code into machine code before execution.
✅ JavaScript uses Just-In-Time (JIT) compilation, blending both approaches.

79. Explain the JavaScript Event Loop.
✅ The event loop continuously checks and executes callbacks from the queue after finishing synchronous tasks.

80. What are Microtasks and Macrotasks in JavaScript?
✅ Microtasks (Promise.then, MutationObserver, queueMicrotask()) run before Macrotasks.
✅ Macrotasks (setTimeout, setInterval, setImmediate, I/O events) run after microtasks.

81. What is a Web Worker?
✅ A Web Worker allows JavaScript to run in a separate thread without blocking the main thread.

82. What is the difference between setImmediate and process.nextTick?
✅ process.nextTick() executes before any pending I/O tasks, while setImmediate() runs after I/O tasks in the next event loop cycle.

🔹 Performance Optimization Techniques
83. What is throttling vs. debouncing?
✅ Throttling limits function execution to once per interval.
✅ Debouncing delays execution until a specified time passes without triggering again.

84. How does lazy loading work?
✅ Lazy loading defers loading assets (images, components, scripts) until needed, improving performance.

85. What is preloading and prefetching?
✅ Preloading loads resources immediately for future use.
✅ Prefetching loads resources before they're needed, but with low priority.

86. How does tree shaking work in JavaScript?
✅ Tree shaking removes unused JavaScript during bundling (e.g., Webpack + ES6 modules).

87. What is the difference between SSR (Server-Side Rendering) and CSR (Client-Side Rendering)?
✅ SSR renders HTML on the server, improving SEO and initial load time.
✅ CSR loads an empty HTML file, then fetches content via JavaScript.

88. What is the difference between imperative and declarative programming?
✅ Imperative programming describes how to achieve results (step-by-step).
✅ Declarative programming describes what the desired outcome is (React, SQL).

89. What is memoization?
✅ Memoization caches function results to avoid redundant calculations.

90. What is the difference between dynamic and static imports?
✅ Static imports (import ... from ...) are resolved at compile time.
✅ Dynamic imports (import()) load modules at runtime (useful for lazy loading).

🔹 WebSockets, HTTP, and API Performance
91. What are WebSockets, and how do they differ from HTTP?
✅ WebSockets allow full-duplex, real-time communication between client and server.
✅ HTTP is stateless, requiring a new request for each interaction.

92. What are Server-Sent Events (SSE), and how are they different from WebSockets?
✅ SSE allows the server to push updates to the client, but only in one direction (server → client).

93. What is HTTP/2, and how does it improve performance over HTTP/1.1?
✅ HTTP/2 supports multiplexing, header compression, and server push, reducing latency.

94. What is Long Polling?
✅ Long polling keeps an HTTP connection open until new data is available, simulating real-time updates.

95. What is the difference between GET and POST in terms of performance?
✅ GET requests are cacheable and faster.
✅ POST requests send data in the body, making them more secure for sensitive information.

🔹 React & Frontend Optimizations
96. What is React Fiber, and how does it improve React?
✅ React Fiber is a rewrite of React’s rendering engine that enables async rendering and prioritization.

97. What is Virtual DOM, and how does it optimize rendering?
✅ The Virtual DOM minimizes direct DOM updates by batching changes and using a diffing algorithm.

98. What is hydration in React?
✅ Hydration is used in SSR (Next.js) to attach event listeners to server-rendered HTML.

99. What is Reconciliation in React?
✅ Reconciliation is React’s diffing algorithm that updates only the necessary components.

100. How does Concurrent Mode improve React performance?
✅ Concurrent Mode improves UX by allowing React to pause and resume rendering for smoother updates.

