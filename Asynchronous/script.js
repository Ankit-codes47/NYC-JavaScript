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

// console.log("Promises");

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
// let data = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let party = true;

//     if (party) {
//       return resolve({ isParty: true, venue: "hotel Taj" });
//     }
//     reject("paise nhi hai");
//   }, 2000);
// });
// console.log(data);

//! Promise is a synchronous code
//! Promise handlers-----
// 1. then()-> hamesha resolve ko accept karega
// 2. catch()-> hamesha error ko accept karega
// 3. async await -> will only works with functions.

// data
//   .then((value) => {
//     console.log("then working->", value);
//   })
//   .catch((error) => {
//     console.log("catch working->",error);
//   });

//* Async wait
// async function promiseResolve() {
//   try {
//     let response = await data;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// promiseResolve();

// let resolver = async () => {
//   try {
//     let response = await data;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };

// resolver();

//! microtaskQueue -> highest priority
// .then()
// .catch()
// .finally()

//! macrotaskQueue
// setTimeout
// I/O callback
// onclick

//! After each task, execute all microtasks in the microtask Queue

// call stack <- event loop <->microtask queue
//                  ^
// call stack <- event loop <->macrotask queue

// console.log("1");
// setTimeout(() => console.log("2"), 0);
// Promise.resolve().then(() => console.log("3"));
// console.log("4");

//! localStorage

// let usersData = [
//   {
//     name: "pinky",
//     age: 15,
//   },
//   {
//     name: "raghav",
//     age: 20,
//   },
// ];

//! set data
// localStorage.setItem("name", "virat kohli");

// localStorage.setItem("usersData", JSON.stringify(usersData));

//! getData
// let lsd = localStorage.getItem("usersData");

// let ori = JSON.parse(lsd);
// console.log(ori);

// localStorage.removeItem("name");

// localStorage.setItem("age", 20);
// console.log(typeof localStorage.getItem("age"));

//! JSON -> Javascript object notation

// ! Fetch
// Fetch ek built-in Javascript API hai jiska use hum server ko http request bhejne aur server se response lene ke liye karte hain.

// Fetch-> request demands and response get ! API call

