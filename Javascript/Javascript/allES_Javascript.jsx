Es6 Important ----------->{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}

let – declare block-scoped variables using the let keyword.
let vs. var – understand the differences between let and var.
const – define constants using the const keyword.
Default function parameters – learn how to set the default value for parameters of a function.
Rest parameter – introduce you to the rest parameter and how to use them effectively.
Spread operator – learn how to use the spread operator effectively.
Object literal syntax extensions – provide a new way to define object literal.
for…of – learn how to use the for...of loop to iterate over elements of an iterable object.
Octal and binary literals –  provide support for binary literals and change the way to represent octal literals.
Template literals – learn how to substitute variables in a string.


Array Destructuring – show you how to assign elements of an array to variables.
Object Destructuring – learn how to assign properties of an object to variables.


Section 10. Array extensions
Array.of() – improve array creation.
Array.from() – create arrays from array-like or iterable objects.
Array find() – find an element in an array
Array findIndex() – find the index of an element in an array.


Section 11. Object extensions
Object.assign() – copy an object or merge objects.



Rest parameter – introduce you to the rest parameter and how to use them effectively.
Spread operator – learn how to use the spread operator effectively. 


00::Rest Parameter
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array. 
It's useful when you don't know how many arguments will be passed into the function.

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
]

00::The spread operator ... allows an iterable (like an array or a string) to be expanded in places where multiple
elements are expected. 


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Merging two arrays
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Spreading an array into function arguments
function multiply(a, b, c) {
  return a * b * c;
}
console.log(multiply(...arr1)); // Output: 6 (1 * 2 * 3)


Javascript  BOM Very Important  -------------------------------------------------------<><><>

4. screen Object  

// Example: Get Screen Information
console.log("Screen Width:", window.screen.width);
console.log("Screen Height:", window.screen.height);
console.log("Color Depth:", window.screen.colorDepth);



5. history Object
// Example: Go Back and Forward in History
window.history.back(); // Goes back one step in the browser history
window.history.forward(); // Goes forward one step in the browser history

// Example: Push and Replace State
window.history.pushState({ page: 1 }, "Title", "?page=1");
window.history.replaceState({ page: 2 }, "Title", "?page=2");


window
console.log("Current URL:", window.location.href);
console.log("User Agent:", window.navigator.userAgent);
console.log("Screen Width:", window.screen.width);
console.log("Screen Height:", window.screen.height);


navigator Object
// Example: Get Browser Information
console.log("User Agent:", window.navigator.userAgent);
console.log("Browser Language:", window.navigator.language);
console.log("Online Status:", window.navigator.onLine);


// Navigator object
console.log("User Agent:", navigator.userAgent); // Information about the browser and operating system
console.log("Browser Language:", navigator.language); // Language set in the browser
console.log("Online Status:", navigator.onLine ? "Online" : "Offline"); // Whether the browser is online

// Screen object
console.log("Screen Width:", screen.width); // Width of the screen
console.log("Screen Height:", screen.height); // Height of the screen
console.log("Available Screen Width:", screen.availWidth); // Width of the screen available for use
console.log("Available Screen Height:", screen.availHeight); // Height of the screen available for use
console.log("Color Depth:", screen.colorDepth); // Color depth of the screen (in bits)

// Location object
console.log("Current URL:", location.href); // Full URL of the current page
console.log("Host:", location.host); // Hostname and port number
console.log("Hostname:", location.hostname); // Hostname of the URL
console.log("Pathname:", location.pathname); // Path of the URL
console.log("Protocol:", location.protocol); // Protocol used (e.g., http:, https:)
console.log("Port:", location.port); // Port number of the URL






https://www.w3schools.com/js/js_es6.asp --------------------------------------------------------<><><><><><><><><>

Top-Level Await
// module.js
const data = await fetchData();
export default data;


4. RegExp Match Indices
const regex = /(foo)/d;
const match = regex.exec('foo bar');
console.log(match.indices); // [[0, 3], [0, 3]]


. Array Find from Last
findLast and findLastIndex Methods: Search arrays from the end.

const array = [1, 2, 3, 4, 5];
const lastEven = array.findLast(x => x % 2 === 0);
const lastEvenIndex = array.findLastIndex(x => x % 2 === 0);
console.log(lastEven); // 4
console.log(lastEvenIndex); // 3


. Array Grouping
const array = [1, 2, 3, 4, 5];
const grouped = array.group(x => x % 2 === 0 ? 'even' : 'odd');
console.log(grouped); // { odd: [1, 3, 5], even: [2, 4] }

const groupedMap = array.groupToMap(x => x % 2 === 0 ? 'even' : 'odd');
console.log(groupedMap); // Map { 'odd' => [1, 3, 5], 'even' => [2, 4] }


3. Hashbang Support
#!/usr/bin/env node
console.log('Hello, world!');


4. Change Array by Copy
copyWithin, fill, toSorted, toSpliced, with Methods: Non-destructive methods for modifying arrays.

const array = [1, 2, 3, 4, 5];
const newArray = array.toSorted((a, b) => b - a);
console.log(newArray); // [5, 4, 3, 2, 1]

const splicedArray = array.toSpliced(1, 2, 6, 7);
console.log(splicedArray); // [1, 6, 7, 4, 5]

const replacedArray = array.with(1, 10);
console.log(replacedArray); // [1, 10, 3, 4, 5]

1. Temporal API
Date and Time Handling: A modern API for working with dates and times.

const now = Temporal.Now.plainDateTimeISO();
console.log(now.toString()); // 2023-06-20T10:30:00

. Pattern Matching
...Match Expressions: A powerful way to destructure and conditionally process data.
const value = { type: 'circle', radius: 10 };
match (value) {
  { type: 'circle', radius } => console.log(`Circle with radius ${radius}`),
  { type: 'square', side } => console.log(`Square with side ${side}`),
  _ => console.log('Unknown shape')
}



:::::: Important Password Validation Regex -------------------

let are = "jugal1452";
let pattern = /^(?=.*[a-z])[a-z\d]+$/;

let str="jugal123"
console.log(str.match(pattern))
console.log(are.match(pattern));

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::check javscript  memory
const v8 = require('v8');
const memoryUsage = v8.getHeapStatistics();
console.log(memoryUsage);


:::::: ---------------<><><><><<
Event Loop in javascript  
????????????  https://www.jsv9000.app/

function A(){
   console.log('A')
}
function B(){
   console.log('B')
}
function C(){
   console.log('C')
}
function D(){
   console.log('D')
}
A()
B()
Promise.resolve().then(C)
D()






::::: Function Call  bind apply -------<><><><>
function greet(name) {
   return `Hello, ${name}! I am ${this.role}.`;
}
const person = {
   role: 'a developer'
};
console.log(greet.call(person, 'jugal sharma'));
// Output: Hello, John! I am a developer.

....Apply
function greet(name) {
   return `Hello, ${name}! I am ${this.role}.`;
}
const person = {
   role: 'a developer'
};
console.log(greet.apply(person, ['John']));
// Output: Hello, John! I am a developer.

.................bind
function greet(name) {
   return `Hello, ${name}! I am ${this.role}.`;
}
const person = {
   role: 'a developer'
};
const greetPerson = greet.bind(person);
console.log(greetPerson('karan'));

::::::::: Array Flat 
// let data = [[1, 2, 3], [4, 5, 6]];
// let foo = data.flat(); // Flatten by one level
// console.log(foo); // Output: [1, 2, 3, 4, 5, 6]
let data = [[1, [2, 3]], [4, [5, 6]]];
let foo = data.flat(2); // Flatten by two levels
console.log(foo); // Output: [1, 2, 3, 4, 5, 6]




|||
console.log(18==18 ? "true" : "false")


|| Wait function::::::::::::::::::

async function one(){

let one = "one"
console.log(one)

let two=await "two"
console.log(two)

let four = "three"
console.log(four)

let five ="five"
console.log(five)
}

one()
console.log("jugal")

::::---------------------<><><
let data = [];

let one = Array.isArray(data);

console.log(one); // Output: true


:::::::::::::::::::::::::::::::::::::::::
let one=[7 , 3 , 5 , 6 , 8 , 10 , 2]

console.log(one.toSorted())
console.log(one.toReversed())
console.log(one.with(3 , "jugal")) // 3 is index  "add "


::Objects
let obj = [
   { name: "jugal", age: 20 },
   { name: "kanika", age: "2300" }
];

// Grouping by the 'name' property
let groupedObj = Object.groupBy(obj, person => person.name);
console.log(groupedObj);





::::::::::::::::::::::::|||||||||||||
Shift Assignment Operators

let x = 50;
let y = 2;
x <<= y; // Equivalent to: x = x << y;  2*10 =20 and 2 *20 =40
console.log(x); // Output: 20


let x = 20;
let y = 2;
x >>= y; // Equivalent to: x = x >> y;
console.log(x); // Output: 5


let x = -20;
let y = 2;
x >>>= y; // Equivalent to: x = x >>> y;
console.log(x); // Output: 1073741829


New Features in ES2024
Object.groupBy()
Map.groupBy()
Temporal.PlainDate()
Temporal.PlainTime()
Temporal.PlainMonthDay()
Temporal.PlainYearMonth()


ES2023
Array findLast()
Array findLastIndex()
Array toReversed()
Array toSorted()
Array toSpliced()
Array with()
#! (Shebang)


Es2022
Array at()
String at()
RegExp /d
Object.hasOwn()
error.cause
await import
Class field declarations
Private methods and fields


ES2021
Promise.any()
String replaceAll()
Numeric Separators (_)

ES2020
BigInt
String matchAll()
The Nullish Coalescing Operator (??)
The Optional Chaining Operator (?.)
Logical AND Assignment Operator (&&=)
Logical OR Assignment (||=)
Nullish Coalescing Assignment (??=)
Promise.allSettled()
Dynamic Import



New Features in ES2019
String.trimStart()
String.trimEnd()
Object.fromEntries
Optional catch binding
Array.flat()
Array.flatMap()
Revised Array.Sort()
Revised JSON.stringify()
Separator symbols allowed in string litterals
Revised Function.toString()



New Features in ECMAScript 2018
This chapter introduces the new features in ECMAScript 2018:

Asynchronous Iteration
Promise Finally
Object Rest Properties
New RegExp Features
JavaScript Shared Memory


New Features in ECMAScript 2017
This chapter introduces the new features in ECMAScript 2017:

JavaScript String padding
JavaScript Object entries()
JavaScript Object values()
JavaScript async and await
Trailing Commas in Functions
JavaScript Object.getOwnPropertyDescriptors


New Features in ECMAScript 2016
This chapter introduces the new features in ECMAScript 2016:

JavaScript Exponentiation (**)
JavaScript Exponentiation assignment (**=)
JavaScript Array includes()

New Features in ES6
The let keyword
The const keyword
Arrow Functions
The {a,b} = Operator
The [a,b] = Operator
The ... Operator
For/of
Map Objects
Set Objects
Classes
Promises
Symbol
Default Parameters
Function Rest Parameter
String.includes()
String.startsWith()
String.endsWith()
Array entries()
Array.from()
Array keys()
Array find()
Array findIndex()
Math.trunc
Math.sign
Math.cbrt
Math.log2
Math.log10
Number.EPSILON
Number.MIN_SAFE_INTEGER
Number.MAX_SAFE_INTEGER
Number.isInteger()
Number.isSafeInteger()
New Global Methods
JavaScript Modules