const addButton = document.getElementById("addItem");
const removeButton = document.getElementById("trash");
const undo = document.getElementById("undo");
const list = document.getElementById("list");
const inputBar = document.querySelector("#input-bar");

const bgMove = document.querySelector(".container");
const frontBlobs = document.querySelector(".front-blobs");
const backBlobs = document.querySelector(".back-blobs");

const count = list.children;
let removedItems = [];

addButton.addEventListener("click", addToDo);
todo.addEventListener("click", deleteItem);

// removeButton.addEventListener("click", function () {
//   const lastElement = count[count.length - 1];
//   lastElement.remove();
//   removedItems.push(lastElement);
//   console.log(removedItems);
// });

function addToDo(e) {
  //Prevent the form from subbmiting
  e.preventDefault();

  const newTodoItem = document.createElement("div");
  newTodoItem.classList.add("todo-item");

  const checkBtn = document.createElement("button");
  checkBtn.innerHTML = `<i class="fa-solid fa-check fa-lg"></i>`;
  newTodoItem.appendChild(checkBtn);

  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = `hei`;
  newTodoItem.appendChild(newItem);

  const trashBtn = document.createElement("button");
  trashBtn.setAttribute("id", "trash");
  trashBtn.innerHTML = `<i class="fa-regular fa-trash-can fa-lg"></i>`;
  newTodoItem.appendChild(trashBtn);

  list.appendChild(newTodoItem);
}

function deleteItem(e) {
  // const deleteItem = document.getElementById("trash").closest("div");
  // deleteItem.remove();
  // console.log(deleteItem);
  console.log(e);
}

undo.addEventListener("click", function () {
  const undoItem = removedItems.pop();
  list.appendChild(undoItem);
});
