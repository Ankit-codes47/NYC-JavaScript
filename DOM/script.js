//! DOM -> Document object model

//* The DOM is a programming interface that represents an html document as a tree of objects, allowing Javascript to access, modify, create and delete HTML elements dynamically.

//? DOM is a bridge between javascript and HTML that allows Javascript to access and manipulate web page elements.

//? DOM tree -> HTML
//? CSSOM -> CSS object model

// console.log("DOM");

//! DOM is all about selection and manipulation.

//? Manipulation of our HTML
//* selections API's

// let h1 = document.querySelector("h1");
// h1.innerHTML = "Hello Dosto";
// h1.style.color = "red";
// h1.style.backgroundColor = "yellow";
// h1.style.fontWeight = "600";
// h1.style.fontSize = "60px";

// console.log(h1);

// console.log("classLists");

//! classList.add(), .remove(), .toggle(), .contains(), .replace()

// let h1 = document.getElementById("heading1");

// h1.classList.remove("text-xl"); remove krna class ko
// h1.classList.add("lol"); add krna class ko

// h1.classList.toggle("text-xl"); ulta perform krna agar class hai to hatana agar nhi hai to lagana.

// h1.classList.add("lol");
// let res = h1.classList.contains("lol");
// console.log(res);

// h1.classList.replace("lol", "gol");

// console.log(h1);

//! events and eventListeners

// let btn  = document.querySelector("button");

// btn.addEventListener("click", () => {
//     h1.style.color = "red";
// });

// btn.onclick = () => console.log("A");
// btn.onclick = () => console.log("B");
// btn.addEventListener("click", () => console.log("C"));

//! **Attributes vs Properties**
// - `getAttribute` / `setAttribute` / `removeAttribute` / `hasAttribute`

// let img = document.querySelector("img");
// console.log(img);

//! getAttribute
// let res = img.getAttribute("src");
// console.log(res);

//! setAttribute
// let res = img.setAttribute("dataset","oracle");
// console.log(res);

//! removeAttribute
// let res = img.removeAttribute("width");
// console.log(res);

//! hasAttribute
// let res = img.hasAttribute("src");
// console.log(res);

//! creating, updating and removing elements from DOM

let main = document.querySelector("main");
let h1 = document.createElement("h1");

h1.textContent = "I am Dynamic";
main.appendChild(h1);
console.log(h1); 