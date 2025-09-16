https://pythontutor.com/visualize.html#mode=edit
https://www.freecodecamp.org/news/how-javascript-works-behind-the-scenes/

https://www.javascripttutorial.net/javascript-variable-scopes/  -->Important 

https://www.javascripttutorial.net/  --> Important 

https://www.javascripttutorial.net/javascript-return-multiple-values/  --> Important 

https://www.javascripttutorial.net/javascript-nullish-coalescing-operator/

https://www.javascripttutorial.net/javascript-stack/

https://www.jsv9000.app/ --> visualizer 

https://onecompiler.com/html  -->Compiler

https://www.javascripttutorial.net/  ------->>


3::V8 Memory management: Garbage collection 

https://deepu.tech/memory-management-in-v8/

https://deepu.tech/memory-management-in-jvm/

https://pythontutor.com/visualize.html#mode=edit

https://ui.dev/javascript-visualizer

https://dev.to/bipinrajbhar/how-javascript-works-under-the-hood-an-overview-of-javascript-engine-heap-and-call-stack-1j5o





Comparing JSON, BSON, GSON, and other data interchange formats.



||||||||||||||||||||||||||||||||||||||||||||||||https://devdocs.io/javascript/ ----------------->><><><><>

:::::::: Fetch Data All Code -------------------
...Fetch 

fetch('/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => ...)


....Request options

fetch('/data.json', {
  method: 'post',
  body: new FormData(form), // post body
  body: JSON.stringify(...),
  headers: {
    'Accept': 'application/json'
  },
  credentials: 'same-origin', // send cookies
  credentials: 'include',     // send cookies, even in CORS

})

.......Respones ---------
fetch('/data.json')
.then(res => {
  res.text()       // response body (=> Promise)
  res.json()       // parse via JSON (=> Promise)
  res.status       //=> 200
  res.statusText   //=> 'OK'
  res.redirected   //=> false
  res.ok           //=> true
  res.url          //=> 'http://site.com/data.json'
  res.type         //=> 'basic'
                   //   ('cors' 'default' 'error'
                   //    'opaque' 'opaqueredirect')

  res.headers.get('Content-Type')
})


........Catching errors

fetch('/data.json')
  .then(checkStatus)
function checkStatus (res) {
  if (res.status >= 200 && res.status < 300) {
    return res
  } else {
    let err = new Error(res.statusText)
    err.response = res
    throw err
  }
}

::::::DataTypes in javascript
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof funeturns "undefined" *
typeof null                   // Returns "object


let data = 41234534454n;
  console.log(typeof(data)); // Outputs the BigInt number
  
  let datas=BigInt(2533544554)
  console.log(typeof(datas))

  
let is=45

  console.log(isNaN(45))
  
  console.log(isFinite(45)); // Outputs false
  
  


Types of JavaScript Operators 
Arithmetic Operators
+	Addition
-	Subtraction
ction () {}         // Returns "function"
typeof myCar                  // R*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement
+=	Add and assign

let x = 5;
// x++; // Increment x by 1
// x+=1

console.log(x); // Output: 6


|||||||||||||||||||||||
Assignment Operators
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
|||||||||||||||||||||||||||||
Comparison Operators
==	equal to	x == 8	false
x == 8	false	
x == 5	true	
x == "5"	true
x === 5	true	
x === "5"	false
!=	not equal	x != 8	true
>	greater than	x > 8	false	
<	less than	x < 8	true	
>=	greater than or equal to	x >= 8	false	
<=	less than or equal to	x <= 8	true


String Operators
You can compare strings using comparison operators like ==, ===, !=, !==, <, >, <=, and >=.
var str1 = "apple";
var str2 = "banana";
var result = str1 < str2; // result will be true because "apple" comes before "banana" in lexicographical order.


Logical Operators
&&=	x &&= y	x = x && (x = y)
||=	x ||= y	x = x || (x = y)
??=	x ??= y	x = x ?? (x = y)
&&	and	(x < 10 && y > 1) is true	
||	or	(x == 5 || y == 5) is false	
!	not	!(x == y) is true





let age = 18;
  let age1 = 18;
  
  if (age > 19 && age1 > 19) {
      console.log(true);
  } else {
      console.log(false);
  }

let age1 = 18;
  let age2 = 20;
  
  const op = [30, 25]; // Create an array with values
  
  [age1, age2] = op; // Destructuring assignment to update age1 and age2
  
  if (age1 > 25 || age2 > 25) {
    console.log(true); // If either age1 or age2 is greater than 25, print true
  } else {
    console.log(false); // If both age1 and age2 are 25 or less, print false
  }



||||||||||||||||||||||
Bitwise Operators
&=	x &= y	x = x & y
^=	x ^= y	x = x ^ y
|=	x |= y	x = x | y

|||||||||||||||
Ternary Operators
let voteable = (age < 18) ? "Too young":"Old enough";
    age = Number(age);
    if (isNaN(age)) {
      voteable = "Input is not a number";
    } else {
      voteable = (age < 18) ? "Too young" : "Old enough";
    }

|||||||||||||
Shift Assignment Operators
<<=	x <<= y	x = x << y
>>=	x >>= y	x = x >> y
>>>=	x >>>= y	x = x >>> y

||||||||||||||||||
The Nullish Coalescing Operator (??)
let name = null;
    let text = "missing";
    let result = name ?? text;


let result = undefined ?? console.log('Hi');

const result = null || undefined ?? 'OK'; // SyntaxError

const result = (null || undefined) ?? 'OK'; 
console.log(result); // 'OK'

const name = null ?? 'John';
console.log(name); // 'John'


JavaScript Comma Operator  ........
// let result = (10, 10 + 20);
// console.log(result);

// let x = 10;
// let y = (x++, x + 1);
// console.log(x, y);

let x = 10;
x++;
let y = x + 1;

console.log(x, y);



23::Hoisted

::::::Number Methods |||||||

Number()
let one=Number("jugal")
console.log(one)

parseFloat()

parseInt()
let tow="14"
let three=parseInt(tow)
console.log(typeof(three))

The Number method toString() does the same.

x.toString()
(123).toString()
(100 + 23).toString()

:::In the chapter Number Methods, you will find more
 methods that can be used to convert numbers to strings:

 toExponential()	
 let num = 12345.6789;
  let exponential = num.toExponential(2); // Output: "1.23e+4"
  
toPrecision()
let num = 12345.6789;
  let precision = num.toPrecision(5); // Output: "12345"
  
toFixed()
let num = 12345.6789;
  let fixed = num.toFixed(2); // Output: "12345.68"
  





|||||||||||||||||||Throtted||||||||||||
  <button onclick="sendEmail()">sendEmail</button>
let count = 1;
let isThrottled = false;
function sendEmail() {

    let i="my name is number"
    if (!isThrottled) {
        console.log('Sending', count++ , i);
        isThrottled = true;
        setTimeout(() => {
            isThrottled = false;
        }, 1000);
    }
}


||||||||||||||||||||Debounce |||||||||||||||||||||||||-
<button onclick="debounce(sendEmail, 1000)">Send Email</button>

<script>
let count = 1;
let timeout;

function sendEmail() {
    let i = "my name is number";
    console.log('Sending', count++, i);
}
function debounce(func, delay) {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
}
</script>




:::::::Data Time

Data new()
now data

getDate()	Get the day as a number (1-31)
getDay()	Get the weekday a number (0-6)
getFullYear()	Get the four digit year (yyyy)
getHours()	Get the hour (0-23)
getMilliseconds()	Get the milliseconds (0-999)
getMinutes()	Get the minutes (0-59)
getMonth()	Get the month (0-11)
getSeconds()	Get the seconds (0-59)
getTime()	Get the time (milliseconds since January 1, 1970)


::::JavaScript Scope  ||||||||||||||
Scope determines the accessibility (visibility) of variables.

JavaScript has 3 types of scope:

Block scope
Function scope
Global scope


..Block Scope
Variables declared with the var keyword can NOT have block scope.

{
  let x = 2;
}
// x can NOT be used here


......Local Scope
Variables declared within a JavaScript function, become
     LOCAL to the function.

        // code here can NOT use carName

        function myFunction() {
          let carName = "Volvo";
          // code here CAN use carName
        }
        
        // code here can NOT use carName





    ||||||||||Js Bropwser BOM

    window.location.href ||| returns the href (URL) of the current page
window.location.hostname |||returns the domain name of the web host
window.location.pathname ||| returns the path and filename of the current page
window.location.protocol |||returns the web protocol used (http: or https:)
window.location.assign() ||loads a new document

Window History|||||||||||
window.history 
history.back() 
history.forward() 


|||||||Window Navigator


if (navigator.cookieEnabled) {
  console.log("Cookies are enabled in the browser.");
} else {
  console.log("Cookies are disabled in the browser. Please enable them for full functionality.");
}

const appCodeName = navigator.appCodeName;
console.log("Browser Code Name: " + appCodeName);
const platform = navigator.platform;
console.log("Platform: " + platform);


const userAgentData = navigator.userAgentData;
console.log("User Agent Data: " + JSON.stringify(userAgentData));


if ("geolocation" in navigator) {
navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
});
} else {
console.log("Geolocation is not supported in this browser.");
}


const language = navigator.language;
console.log("Preferred Language: " + language);

const userAgent = navigator.userAgent;
console.log("User-Agent String: " + userAgent);







 

    ||||||||||JavaScript Events |||||||||||||||

    onchange	An HTML element has been changed

   onclick::The user clicks an HTML element
onmouseover	::The user moves the mouse over an HTML element
onmouseout::	The user moves the mouse away from an HTML element
onkeydown::	The user pushes a keyboard key
onload::	The browser has finished loading the page


|||||||||||Javascript Math |||||||||||||||


Math.log(x) returns the natural logarithm of x.
console.log(Math.log2(3));
Math.log(1);
Math.log(2);
Math.random()
Math.max(0, 150, 30, 20, -8, -200);
Math.min(0, 150, 30, 20, -8, -200);
Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)
Math.abs(-4.7);
Math.sqrt(64);
Math.pow(8, 2);
Math.sign(-4);
Math.sign(0);
Math.sign(4);
Math.floor(4.9);
Math.ceil(4.9);
Math.round(4.6);
Math.floor(Math.random() * 100) + 1;









Window Screen |||||||||||||||
console.log("Screen width: " + screen.width);
console.log("Screen height: " + screen.height);
console.log("Available screen width: " + screen.availWidth);
console.log("Available screen height: " + screen.availHeight);
console.log("Color depth: " + screen.colorDepth);
console.log("Pixel depth: " + screen.pixelDepth);




|||||||||||||||||Javascript Objects Scope  Important  ||||||||||


Q What is variable scope ? 
Scope determines the visibility and accessibility of a variable. JavaScript has three scopes:

The global scope
Local scope
Block scope (started from ES6)


1::The global scope
When the JavaScript engine executes a script, it creates a global execution context.

var message = 'Hi';

function say() {
    var message = 'Hello';
    console.log(message);
}

say();
console.log(message);


2::Scope chain
Consider the following example:


var message = 'Hi';

function say() {
    console.log(message);
}

say();

More scope chain example
Consider the following example:


var y = 20;

function bar() {
    var y = 200;

    function baz() {  
        console.log(y);
    }

    baz();
}

bar();


3::Global variable leaks: the weird part of JavaScript
'use strict'
function getCounter() {
    counter = 10;
    return counter;
}

console.log(getCounter());


4::Block scope
ES6 provides the let and const keywords that allow you to declare variables in block scope.

function say(message) {
    if(!message) {
        let greeting = 'Hello'; // block scope
        console.log(greeting);
    }
    // say it again ?
    console.log(greeting); // ReferenceError
}

say();