//Array.......
// let names = ["anurag", "priya", "piyush"];

//!Array is a data structure used to store multiple values in a single variable.

//? JS is dynamic language.

//? JS - array is heterogenous form.

//* indexing -> 0 to .... from left to right.
//* indexing -> -1 to -2,... from right to left.

//!Access the value
// console.log(names[2]);

//basic method of array---

//push(); - last me value add karna
// names.push("at last");
// console.log(names);

//pop(); - last se value remove karna
// names.pop("at last");
// console.log(names);

//shift(); - starting me value remove karna
// names.shift();
// console.log(names);

//unshift(); - starting me value add karna
// names.unshift("start");
// console.log(names);

//length(); - length dena
// console.log(names.length);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//get all values from array
//traversing an array
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

//get all even numbers
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(`${numbers[i]} this is even number`);
//   }
// }

//! ====================
//1. original array change karta hain (mutating method)
//push();
//pop();
//shift();
//unshift();
//splice();
//sort();
//reverse();

//2. new array return karat hain (non-mutating method)
//slice();
//concat();
//map();
//filter();
//flat();

//3. Single value return karte hain
//find();
//findIndex();
//includes();
//indexOf();
//join();
//reduce();
//some();
//every();
