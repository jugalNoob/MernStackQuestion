
Module exports and import ------::::::::::::::::_____________>>>

import { add, io, subtract } from "./Imp.js"; // Import the module

const sum = add(10, 5);
const difference = subtract(10, 5);

console.log('Sum:', sum);           // Output: Sum: 15
console.log('Difference:', difference); // Output: Difference: 5

console.log(io()) :::::::  -----> import 



export function io() { // Use ESM export
    let two = "Jugal Sharma";
    return two;
}

// module.exports = io; // Use CommonJS export


export function add(a, b) { :::::: ---------> exports
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}
