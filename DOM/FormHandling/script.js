let h1 = document.querySelector("h1");
let form = document.querySelector("form");

//! form hamesha submit ke waqt puri window(tab) ko reload krta hai

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.dir(form[1].value);
  console.dir(form[2].value);
  console.dir(form[3].value);
  console.dir(form[5].value);
  console.dir(form[6].value);
});
