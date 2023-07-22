const addButton = document.querySelector("#addItem");
const deleteAllBtn = document.querySelector("#deleteAll");
const undoBtn = document.getElementById("undo");
const filter = document.querySelector("#filter");

const list = document.querySelector("#list");
const inputBar = document.querySelector("#input-bar");

const items = [];
const filterItems = [];
const removedItems = [];

//Animated background
document.addEventListener("mousemove", () => {
  document.querySelectorAll(".blob").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 150;
    const y = (window.innerHeight - event.pageY * position) / 150;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

//Adding todo
addButton.addEventListener("click", (e) => {
  //Prevent the form from subbmiting
  e.preventDefault();

  const newTodoItem = document.createElement("div");
  newTodoItem.setAttribute("id", "task");

  const checkBtn = document.createElement("button");
  checkBtn.classList.add("check");
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

  list.appendChild(newTodoItem);

  //items.push(newTodoItem);

  //If the input is empty don't add a task
  if (newItem.innerText === "") {
    newTodoItem.remove();
  }
  inputBar.value = "";

  // -------------------------

  if (list.children) {
    items.push(list.children);
  }
});

//Delete & check todo
list.addEventListener("click", (e) => {
  const item = e.target;
  if (item.classList[0] === "trash") {
    const task = item.parentElement;
    removedItems.push(task);
    task.remove();
  }

  if (item.classList[0] === "check") {
    const task = item.parentElement;
    task.classList.toggle("completed");
    item.classList.toggle("checked");
  }
});

//Delete all todos
deleteAllBtn.addEventListener("click", () => {
  allItems = document.querySelectorAll("#task");
  for (const item of allItems) {
    item.remove();
  }
});

//Undo the deleted todo
undoBtn.addEventListener("click", () => {
  const undoItem = removedItems.pop();
  list.appendChild(undoItem);
});

//Filter by completed tasks
filter.addEventListener("click", () => {});
