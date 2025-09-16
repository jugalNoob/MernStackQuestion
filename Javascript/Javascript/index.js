const Pro = async () => {
  try {
    // Run both fetches in parallel but don't fail fast
    let [userRes, postRes] = await Promise.allSettled([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("ttps://jsonplaceholder.typicode.com/todos") // ❌ broken URL
    ]);

    let users = null;
    let posts = null;

    // Handle users
    if (userRes.status === "fulfilled") {
      users = await userRes.value.json();
      console.log("✅ Users:", users);
    } else {
      console.error("❌ Users fetch failed:", userRes.reason);
    }

    // Handle posts
    if (postRes.status === "fulfilled") {
      posts = await postRes.value.json();
      console.log("✅ Posts:", posts);
    } else {
      console.error("❌ Posts fetch failed:", postRes.reason);
    }

  } catch (error) {
    console.error("❌ Unexpected error:", error.message);

  } finally {
    console.log("✨ Finished fetching data (success or error).");
  }
};

Pro();




// 🔹 JavaScript Promise Concepts
// 1. What is a Promise?

// A Promise is an object in JavaScript that represents the eventual result of an asynchronous operation.
// It can be in one of three states:

// Pending → initial state (waiting for result).

// Fulfilled → operation completed successfully.

// Rejected → operation failed.

// 👉 Example:


// --- 1
// function magic() {
//   console.log('karan');
// }

// let magic = 'jugal';

// magic(); // ❌ Problem here


// ---> 2

// console.log(null == undefined)
// console.log(null === undefined)
// ⚡ Interview takeaway:

// Use === (strict equality) in real-world code to avoid unexpected coercion.

// Only null == undefined is true; in all other cases, == behaves differently.



// function outer() {
//   let counter = 0;  // variable in outer scope

//   function inner() {
//     counter++;
//     console.log(counter);
//   }

//   return inner;
// }

// const fn = outer();  // outer() is executed, inner() is returned

// fn(); // 1
// fn(); // 2
// fn(); // 3




