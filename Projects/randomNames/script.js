// let random = Math.random() * 10;

// let res = Math.floor(random);
// let res = Math.ceil(random);

// console.log(random);
// console.log(res);

//! Math -> JS class for Maths calculation.
//? Math.random() -> 0 - 1 (random number) but (0, 1) is excluded
//* Methods
// 1) floor
// 2) ceil

let container = document.querySelector(".container");

let btn = document.querySelector("button");

let namesArr = [
  "Shobhit",
  "Aryan",
  "Elvish",
  "Raghav chadha",
  "Narendra Modi",
  "Rahul Gandhi",
  "RCB",
  "DC",
  "Vinayak Singh",
  "Swaraj",
  "Suraj",
];

let randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

let randomPlace = () => {
  let y = Math.floor(Math.random() * 100);
  let x = Math.floor(Math.random() * 100);

  return [x, y];
};

btn.addEventListener("click", () => {
  let [x, y] = randomPlace();
  let random = Math.floor(Math.random() * namesArr.length);

  let h1 = document.createElement("h1");

  h1.textContent = namesArr[random];
  h1.style.color = randomColor();

  h1.style.top = `${y}%`;
  h1.style.left = `${x}%`;

  container.appendChild(h1);
});
