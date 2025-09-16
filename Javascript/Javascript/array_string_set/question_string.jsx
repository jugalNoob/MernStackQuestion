🔹 JavaScript String Questions & Answers
Section 1. Searching

How do you find the index of the first occurrence of a substring?
👉 indexOf()

"hello world".indexOf("world"); // 6


How do you find the index of the last occurrence?
👉 lastIndexOf()

"hello world world".lastIndexOf("world"); // 12


How do you check if a string contains another string?
👉 includes()

"hello".includes("he"); // true


How do you check if a string starts with a substring?
👉 startsWith()

"jugal".startsWith("jug"); // true


How do you check if a string ends with a substring?
👉 endsWith()

"jugal".endsWith("al"); // true


How do you search a substring using regex?
👉 search()

"jugal".search(/gal/); // 2

Section 2. Trimming

How do you remove extra spaces at both ends?
👉 trim()

"   hello   ".trim(); // "hello"


How do you remove spaces only at the start?
👉 trimStart()

How do you remove spaces only at the end?
👉 trimEnd()

Section 3. Padding

How do you pad a string from the start to reach a fixed length?
👉 padStart()

"5".padStart(3, "0"); // "005"


How do you pad from the end?
👉 padEnd()

"5".padEnd(3, "0"); // "500"

Section 4. Extracting

How do you split a string into an array?
👉 split()

"jugal sharma".split(" "); // ["jugal", "sharma"]


Difference between slice() and substring()?

slice() supports negative indexes.

substring() does not.

"jugal".slice(0, -2); // "jug"
"jugal".substring(0, -2); // "jugal"

Section 5. Concatenating & Interpolating

How do you join multiple strings?
👉 concat() or +

"jugal".concat(" ", "sharma"); // "jugal sharma"


How do you use template literals?
👉 Backticks with ${}

let name = "Jugal";
console.log(`Hello, ${name}!`); // Hello, Jugal!

Section 6. Replacing

How do you replace the first occurrence?
👉 replace()

"hello world".replace("world", "JS"); // "hello JS"


How do you replace all occurrences?
👉 replaceAll() or regex with /g

"hello hello".replaceAll("hello", "hi"); // "hi hi"

Section 7. Changing Cases

How do you convert to uppercase?
👉 toUpperCase()

"jugal".toUpperCase(); // "JUGAL"


How do you convert to lowercase?
👉 toLowerCase()

Extra

How do you repeat a string?
👉 repeat()

"ha".repeat(3); // "hahaha"


How do you find a character at a given index?
👉 charAt() or at()

"jugal".charAt(2); // "g"
"jugal".at(-1);    // "l"


How do you get the Unicode of a character?
👉 charCodeAt()

"A".charCodeAt(0); // 65


How do you create a string from Unicode values?
👉 String.fromCharCode() or String.fromCodePoint()

How do you use raw strings?
👉 String.raw

console.log(String.raw`C:\path\to\file`); 
// "C:\path\to\file"


// --->adavance  question --------------->>


1. Reverse a string

Q: How do you reverse "hello" → "olleh"?
A:

let str = "hello";
let reversed = str.split("").reverse().join("");
console.log(reversed); // "olleh"



2. Check if a string is a palindrome

Q: "madam" → palindrome?
A:

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false



3. Count vowels in a string

Q: Count vowels in "jugal sharma".
A:

function countVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}
console.log(countVowels("jugal sharma")); // 4


4. Find the first non-repeating character

Q: "swiss" → "w"
A:

function firstNonRepeat(str) {
  for (let ch of str) {
    if (str.indexOf(ch) === str.lastIndexOf(ch)) return ch;
  }
  return null;
}
console.log(firstNonRepeat("swiss")); // "w"





5. Check if two strings are anagrams

Q: "listen" & "silent" → anagrams?
A:

function isAnagram(a, b) {
  return a.split("").sort().join("") === b.split("").sort().join("");
}
console.log(isAnagram("listen", "silent")); // true




7. Capitalize first letter of each word

Q: "hello world" → "Hello World"
A:

function capitalizeWords(str) {
  return str.split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
}
console.log(capitalizeWords("hello world")); 
// "Hello World"



8. Remove duplicate characters

Q: "programming" → "progamin"
A:

function removeDuplicates(str) {
  return [...new Set(str)].join("");
}
console.log(removeDuplicates("programming")); // "progamin"





9. Find the longest word in a sentence

Q: "I love programming in JavaScript" → "programming"
A:

function longestWord(sentence) {
  return sentence.split(" ").reduce((a, b) => a.length > b.length ? a : b);
}
console.log(longestWord("I love programming in JavaScript")); 
// "programming"




6. Count word frequency

Q: Count words in "hello world hello".
A:

function wordFreq(str) {
  let words = str.split(" ");
  let freq = {};
  for (let w of words) {
    freq[w] = (freq[w] || 0) + 1;
  }
  return freq;
}
console.log(wordFreq("hello world hello"));
// { hello: 2, world: 1 }


