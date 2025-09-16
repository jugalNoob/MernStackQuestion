👉 A string is a sequence of characters used to represent text in JavaScript. Strings are 
 written inside quotes (single, double, or backticks) and are immutable, meaning they 
  cannot be changed once created.

Example:

18::String |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||<><><><><><><
String length
let str=" jugal "
console.log(str.includes("j"))
console.log(str.search("j"))
console.log(str.indexOf("j"))
console.log(str.replace("j" , "J"))
console.log(str. replaceAll("j" , "JUGAL"))
console.log(str.slice(0 , -2))
console.log(str.substring(0 , -2)) // -2 not work in substring
console.log(str.trim())


const stra = "   Hello, world!   ";
const trimmedStart = stra.trimStart();
console.log(trimmedStart); // Output: "Hello, world!   "

const trimmedEnd = stra.trimEnd();
console.log(trimmedEnd); // Output: "   Hello, world!"


String toUpperCase()
String toLowerCase()
String concat()
String trim()
let str = "jugalsharma";
 // Using trimEnd to remove trailing whitespace
 if (str.trimEnd) {
     console.log(str.trimEnd());
 } else {
     console.log("trimEnd is not supported in this environment.");
 }
 
String trimStart()
String trimEnd()
String padStart()
let str = "jugal";
 let paddedStr = str.padEnd(12, 6952);
 console.log(paddedStr);
String padEnd()
String charAt()
String charCodeAt()
String split()

let str = "jugal jugal karan jugal";
 const regex = /jugal/g; // Regular expression to match "jugal" globally
 
 const matches = [...str.matchAll(regex)];
 
 for (const match of matches) {
     console.log(match[0]); // match[0] contains the matched string
 }


let str='jugal'
//String.fromCodePoint(42); // "*"
// String.fromCodePoint(65, 90); // "AZ"
// console.log(str.fromCharCode(65 , 66 , 67))
console.log(str.startsWith('jug'))
console.log(str.repeat(2))
console.log(str.at(-2))
const strs = "To be, or not to be, that is the question.";
console.log(strs.endsWith("to be", 19)); // true

const paragraph = "I think Ruth's dog is cuter than your dog!";
const searchTerm = 'dog';
console.log(
 `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
);

const filePath = String.raw`C:\Development\profile\aboutme.html`;
console.log(`The file was uploaded from: ${filePath}`);

let a= new String("jugal")
console.log(a)
console.log(a.valueOf());




Section 1. Searching
search() – locate a substring in a string using a regular expression.
indexOf() – get the index of the first occurrence of a substring in a string.
lastIndexOf() – find the index of the last occurrence of a substring in a string.
includes() – check if a string contains a substring.
startsWith() – check if a string starts with another string.
endsWith() – determine if a string ends with another string.



Section 2. Trimming
trim() – remove whitespace characters from a string.
trimStart() – remove the leading whitespace characters of a string.
trimEnd() – remove the ending whitespace characters of a string.

Section 3. Padding
padStart() & padEnd() – pad a string with another string until the result string reaches the given length.


Section 4. Extracting
split() – split a string into an array of substrings.
substring() – extract a substring from a string.
slice() – extract a part of a string.

Section 5. Concatenating & interpolating
concat() – concatenate multiple strings into a new string.
Template literals – learn how to substitute variables in a string.

Section 6. Replacing
replace() – replace a substring in a string with a new one.
replaceAll() – replace all occurrences of a substring that matches a pattern with a new one.


Section 7. Changing cases
toUpperCase – return a string with all characters converted to uppercase.
toLowerCase – return a string with all characters converted to lowercase.
