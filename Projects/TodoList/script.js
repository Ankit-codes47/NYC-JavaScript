let input = document.querySelector("#inp");
let addBtn = document.querySelector("#addBtn");

let listContainer = document.querySelector(".list-container");

let taskArr = [];

let renderUi = () => {
  listContainer.innerHTML = "";
  taskArr.forEach((val, index) => {
    listContainer.innerHTML += `
        <div class="list-item">
          <p style = "text-decoration : ${val.isCompleted ? "line-through" : "none"};">${val.task}</p>
          <div class="btns">
            <button onclick = "completedTask(${index})" id="comp">Completed</button>
            <button onclick="deleteTask(${index})">Delete</button>
          </div>
        </div>  
    `;
  });
};

addBtn.addEventListener("click", () => {
  let inpValue = input.value;

  if (inpValue.trim() === "") {
    alert("Please provide a task");
    return;
  }
  taskArr.push({
    task: inpValue,
    isCompleted: false,
  });
  renderUi();
  input.value = "";
});

let deleteTask = (index) => {
  taskArr.splice(index, 1);
  renderUi();
};

let completedTask = (index) => {
  taskArr[index].isCompleted = !taskArr[index].isCompleted;
  renderUi();
};
