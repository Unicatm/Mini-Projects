const addButton = document.querySelector("#addItem");
const undo = document.getElementById("undo");

const task = document.querySelector("#task");
const list = document.querySelector("#list");
const inputBar = document.querySelector("#input-bar");

const count = list.children;
let removedItems = [];

addButton.addEventListener("click", addToDo);
list.addEventListener("click", deleteItem);

function addToDo(e) {
  //Prevent the form from subbmiting
  e.preventDefault();

  const newTodoItem = document.createElement("div");
  newTodoItem.setAttribute("id", "task");

  const checkBtn = document.createElement("button");
  checkBtn.innerHTML = `<i class="fa-solid fa-check fa-lg"></i>`;
  newTodoItem.appendChild(checkBtn);

  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = inputBar.value;
  newTodoItem.appendChild(newItem);

  const trashBtn = document.createElement("button");
  trashBtn.classList.add("trash");
  trashBtn.innerHTML = `<i class="fa-regular fa-trash-can fa-lg"></i>`;
  newTodoItem.appendChild(trashBtn);

  //If the input is empty don't add a task
  list.appendChild(newTodoItem);
  if (newItem.innerText === "") {
    newTodoItem.remove();
  }

  inputBar.value = "";
}

function deleteItem(e) {
  const item = e.target;
  if (item.classList[0] === "trash") {
    const task = item.parentElement;
    task.remove();
  }
}

// undo.addEventListener("click", function () {
//   const undoItem = removedItems.pop();
//   list.appendChild(undoItem);
// });
