//! variables - var, let, const with scope understanding

var a = 55555;
//* var a - variable declaration var redeclaration is possible with same variable and it is updatable.

let b = "rahul";
//* let b - variable declaration let redeclaration is not possible with same variable and it is updatable.

const c = 90;
//* const a - variable declaration const redeclaration is not possible with same variable and it is not updatable.

//! give me a output

console.log(a);
console.log(b);
console.log(c);

//! scopes ==  boundaries
//! global scope(var) => blocked scope(let, const)


//! Naming convictions--

//* use this let name = "raj";

//* do not let n = "raj";

//! Data types---

//*1.primitive type--
// String
// Boolean
// Number
// undefined
// null
// symbol
// operator => typeof

//* 2.non-primitive type / reference --
// Array"[]"
// objects"{}"
// function() {}
// maps
// date
