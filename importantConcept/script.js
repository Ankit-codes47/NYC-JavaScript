//! Important concept to know
// 1. HOF - Higher order functions
// 2. Callback function
// 3. Pure and impure functions
// 4. rest operator ---
// 5. spread operator ...
// 6. De - Structuring on array and objects

//! HOF---------

// aese function return karenge another function
// let abcd = () => {
//     return () => {};
// };

// console.log(abcd());

// let greet = (fn) => {
//     fn();
//     return 98;
// };

// here jo tumne pass kiya hai function vo call back ban gaya hai

// greet(function () {
//     console.log("mai callback ki tarah use hua hu");
// });

// jab koi function return kare ya accept kare koi another function, tab parent function HOF ban jata hai.

// these all are the higher order functions
// Array.map(() => {});
// Array.forEach(() => {});
// Array.reduce(() = {});
// ...... and so on

//  function multiplier(f) {
//     return function (n) { return n * f; };
//  }
//  const double = multiplier(2);
//  console.log(double(5));

//! pure and impure functions

//* pure function - no milawat just uses their own block things
// let greet = () => {
//   let a = 6;
//   let b = 5;
//   console.log("hello good night");
//   return a + b;
// };

// let result = greet();
// console.log(result);

// let a = 5;
// let b = 7;

//impure function - kyuki isne bhar ke varaibles ko access kiya, means milawat hui hai.
// let sum = (a, b) => {
//   console.log("me sum hu");
//   return a + b;
// };
// let result = sum();
// console.log(result);

//! rest operator
//rest operator hamesha function me use hoga

// let sum = (a, b, ...rest) => {
//   console.log(a, b, ...rest);
// };
// sum(45, 56, 67, 68, 89, 1, 2, 3, 4, 5, 5, 6, 7, 8);

//*-----------------------------------------//
//! GEC -> Global Execution context

//! JS will read all the variable first & assign undefined value.

// core function ko unka functional block creation phase me hi mil jata hai

// only var and core function will goes into window.

//  console.log(a);
//  var a = 10;

// jitne functions hong aur tum unhe call karoge to utni baar GEC ke andr EC(execution context) banega.

//* normal code will execute in GEC

//* functional block will executes inside GEC in EC block, & when function will executed, then the EC will destroy.

//!EC -> it will runs in two phases

//1. creation phase = all the variable & core function will be read

//2. Execution phase = rest of code will execute

// function test() {
//   const temp = "hello";
// }
// test();
// console.log(temp);

//! TDZ = Temperal Dead Zone

//! closures -> a closure is a function that remembers and can access variables from its outer(parent) scope, even after the outer function has finished executing.

// const outer = () => {
//   console.log("outer executed and removed from callstack");

//   let number = 89;
//   let inner = () => {
//     console.log("i m inner fn", number);
//     let rest = () => {
//       console.log("number->", number);
//       return rest;
//     };
//   };
//   return inner;
// };
// let nestedFn = outer();
// let fn = nestedFn();
// fn();
// outer()();

// let counter = () => {
//   let count = 0;

//   return () => {
//     count++;
//     console.log(count);
//   };
// };

// let c1 = counter();

// c1();
// c1();
// c1();
// c1();
// c1();
// c1();

//! twist
// for (let i = 1; i <= 4; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 5000);
// };

// function outer() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }
// const c = outer();
// c();
// console.log(c());

// let sum = (a) => {
//   console.log("mila", a);
//   return sum;
// };

// let result = sum(12)(78);
// console.log(result);

// infinite currying function
// let sum = (a) => {
//   return (b) => {
//     console.log("b is", b);
//     if(b !== undefined){
//         return sum(a + b);
//     }
//     return a;
//   };
// };

// let result = sum(12)(78)();
// console.log(result);

//!code snippet
//*Q1-------------------
// function f() {
//     let x = 10;
//     return () => console.log(x++);
// }

// const a = f();
// a();
// a();

//*Q2-------------------
// const arr = [];
// for (var i = 0; i < 3; i++) arr.push(() => i);
// console.log(arr.map((fn) => fn()));

//*Q3-------------------
// const arr = [];
// for (let i = 0; i < 3; i++) arr.push(() => i);
// console.log(arr.map((fn) => fn()));

//*Q4-------------------
// const add = (a) => (b) => a + b;
// const add5 = add(5);
// console.log(add5(3), add5(10));
