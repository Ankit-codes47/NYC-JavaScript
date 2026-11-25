let bulb = document.querySelector(".bulb");
let btnOn = document.querySelector("#on");
// let btnOff = document.querySelector("#off");

// let flag = true;

// btnOn.addEventListener("click", () => {
//   bulb.style.backgroundColor = "yellow";
//   if (flag) {
//     bulb.style.backgroundColor = "yellow";
//     flag = false;
//     btnOn.textContent = "Off";
//   } else {
//     bulb.style.backgroundColor = "transparent";
//     flag = true;
//     btnOn.textContent = "On";
//   }
// });

// btnOff.addEventListener("click", () => {
//   bulb.style.backgroundColor = "transparent";
// });

btnOn.addEventListener("click", () => {
  if (bulb.classList.toggle("bg")) {
    btnOn.textContent = "Off";
  } else {
    btnOn.textContent = "On";
  }
});

