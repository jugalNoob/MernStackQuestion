
1::My first Important function  start ::::::::::

//app.js
const { meain, mean_two } = require('../imp'); // Destructure the imported functions


// imp.js
const meain = () => {
    let x = 'I am import memory use';
    return x;
};

const mean_two = () => {
    let b = 'I am second important function';
    return b;
};

module.exports = { meain, mean_two };



2:::1::My second  Important function  start ::::::::::

// app.js 

const imports=require('../imp')

console.log(imports.first())

console.log(imports.second())

(async () => {
    console.log(await imports.first());
    console.log(await imports.second());
})();


// Imp.js 

exports.first = async (req, res) => {

    let x='module export alll'

    return x
}



exports.second = async (req, res) => {

    let b='module export second '

    return b
}


:::::::: ///// Thired  Import module :::::::

//.app.js 

const express = require('express');
const startServer = require('../imp'); // Import the startServer function

const app = express();
const port = process.env.PORT || 9000;  // .env should define PORT if needed

app.get('/', (req, res) => {
    res.send('All users');
});

startServer(app, port);  // Start the server with the imported function


//imp.js

// imp.js
const startServer = (app, port) => {
    app.listen(port, () => {
        console.log(`Server started on port  9000 ${port}`);
    });
};

// Export the function
module.exports = startServer;


8. Exporting Multiple Related Utilities ::::::::

/imp.js 
// imp.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : 'Cannot divide by zero');

module.exports = {
    add,
    subtract,
    multiply,
    divide
};

//app.js
// app.js
const math = require('../imp');

console.log(math.add(5, 3));        // Outputs: 8
console.log(math.subtract(5, 3));   // Outputs: 2
console.log(math.multiply(5, 3));   // Outputs: 15
console.log(math.divide(5, 0));     // Outputs: Cannot divide by zero




6. Exporting a Singleton Object ::::::::::::::::::

//imp.js

// imp.js
const state = {
    counter: 0,
    increment() {
        this.counter++;
    },
    getCounter() {
        return this.counter;
    }
};

module.exports = state;


//app.js 
// app.js
const state = require('../imp');

state.increment();
state.increment();
console.log(state.getCounter()); // Should print 2

const anotherStateReference = require('../imp');
console.log(anotherStateReference.getCounter()); // Still prints 2, proving it's a singleton



4. Using a Class Export :::::::::::::

imp.js
// imp.js
class ImportantFunctions {
    syncMethod() {
        return 'This is a synchronous method';
    }

    async asyncMethod() {
        return 'This is an asynchronous method';
    }

    static staticMethod() {
        return 'This is a static method, can be called without an instance';
    }
}

module.exports = ImportantFunctions;


//app.js


// app.js
const ImportantFunctions = require('../imp');

const importantInstance = new ImportantFunctions();

console.log(importantInstance.syncMethod());
console.log(ImportantFunctions.staticMethod());

(async () => {
    console.log(await importantInstance.asyncMethod());
})();
