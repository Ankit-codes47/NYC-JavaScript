// console.log("Asynchronous Javascript");

// console.log("hello");

// //* asynchronous code
// setTimeout(() => {
//   console.log("i m in timeout");
// }, 5000);

// console.log("byee");

//! Asynchronous code hamesha Synchronous code ke baad hi execute hoga.

//? 1000 = 1s

//! Synchronous -> JS ka core code jo sabse pehle chelga. Execute first

//! Asynchronous -> Browser se aaya hua code.After Syncronous.

// setInterval(() => {
//   console.log("i m interval");
// }, 5000);

//! Event loop -> watchman -> when callstack blank push the callback code into callStack.

//! call back Queue

//! Asynchronous -> handled by event loop comes from browser.

//! Promises and Promise handlers
//* promise is an object that acts as a placeholder for a value that will be available in the future an asynchronous task is complete.

console.log("Promises");

//? resolve
// let data = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Ok done");
//   }, 1000);
// });
// console.log(data);

//? reject
// let data = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Error Found");
//   }, 2000);
// });
// console.log(data);

//? resolve
let data = new Promise((resolve, reject) => {
  setTimeout(() => {
    let party = true;

    if (party) {
      return resolve({ isParty: true, venue: "hotel Taj" });
    }
    reject("paise nhi hai");
  }, 2000);
});
console.log(data);

//! Promise is a synchronous code
//! Promise handlers-----
// 1. then() -> hamesha resolve ko accept karega
// 2. catch() -> hamesha error ko accept karega
// 3. async await -> will only works with functions.

// data
//   .then((value) => {
//     console.log("then working->", value);
//   })
//   .catch((error) => {
//     console.log("catch working->",error);
//   });

//* Async wait
async function promiseResolve() {
    let response = await data;
}

promiseResolve();