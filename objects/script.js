//! Objects.....

// let student1 = {
//     name: "Rahul verma",
//     Age:16,
//     FatherName:"Ramesh verma",
//     MotherName:"Arunima verma",
//     address: {
//         street: "Saket kunj",
//         houseNo: 14,
//     }
// };

// let student2 = {
//     name: "Rahul verma",
//     Age:16,
//     houseNo:15,
//     FatherName:"Ramesh verma",
//     MotherName:"Arunima verma",
//     street:"Saket kunj",
// };

// let student3 = {
//     name: "Rahul verma",
//     Age:16,
//     houseNo:15,
//     FatherName:"Ramesh verma",
//     MotherName:"Arunima verma",
//     street:"Saket kunj",
// };

// let studentData = [student1, student2, student3];
// console.log(studentData);

//? accessibility
//* 1. " . " dot notation
// console.log(student1.name);

//* 2. " [] " bracket notation
// let fn = "Age";
// console.log(student1[fn]);

//! adding key
// student1.mobileNo = 99999999;
// console.log(student1);

//! updating the key value
// student1.Age = 21;
// console.log(student1);

//safe delete
// if(student1.Age){
//     console.log("working..");
//     delete student1.Age;
// }

//access all the keys of my object
// let result = Object.keys(student1);
// console.log(result);

// via for in
// for(let keys in student1){
//     console.log(keys,);
// }

// for(let i = 0; i < result,length; i++){
//     console.log(result[i], student1[result[i]]);
// }

// forEach() ye bhi callback accept krta hai bss return nahi krta kuch bhi

// result.forEach((val) => {
//     console.log(val);
// });

// const s = {
//     name: "Aman",
// }
// console.log(s.city);

// Objects Methods....

// let obj = {
//     name : "varun",
//     age: 67,
//     greet : function() {
//         console.log(" i am a method");
//         return 10;
//     },
// };

// console.log(obj.greet());

// Object.entries()
// Object.keys()
//Object.values()
// Object.freeze();
