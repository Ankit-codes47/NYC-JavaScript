//! Primitive Types
// strings
// numbers
// booleans
// null
// undefined
// symbol

//! Reference Types
// Arrays
// objects
// function
// date
// map

//! -------------------------------
//? primitive
// let a = 10;
// let b = a;
// b = 89;
// console.log(a);
// console.log(b);

//! -----------------------------
//? reference
// let obj1 = {
//   name: "Arun",
//   age: 78,
// };

// let obj2 = obj1;
// obj2.name = "Vishal";
// console.log(obj1);
// console.log(obj2);

//! stack memory
// stable / static

//! heap memory
// Dynamic address

//  console.log({ a: 1 } === { a: 1 });

//! Spread Operator => " ... " -. reference ki saari VALUES ko copy karna.
let obj1 = {
  name: "Arun",
  age: 78,
};

let obj2 = { ...obj1 };
obj2.name = "Vishal";
console.log(obj1);
console.log(obj2);
