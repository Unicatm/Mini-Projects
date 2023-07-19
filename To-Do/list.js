const addButton = document.getElementById("addItem");
const removeButton = document.getElementById("removeItem");
const undo = document.getElementById("undo");
const list = document.getElementById("list");
const count = list.children;
console.log(count);
let removedItems = [];

addButton.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.classList.add("list");
  newItem.innerText = `Item ${count.length + 1}`;
  //newItem.innerText = prompt("Add text!");
  list.appendChild(newItem);

  //removing item
  newItem.addEventListener("click", deleteItem);
});

// removeButton.addEventListener("click", function () {
//   const lastElement = count[count.length - 1];
//   lastElement.remove();
//   removedItems.push(lastElement);
//   console.log(removedItems);
// });
function deleteItem(e) {
  console.log(e.target);
  const removedItem = e.target.remove();
  removedItems.push(removedItem);
}

undo.addEventListener("click", function () {
  const undoItem = removedItems.pop();
  list.appendChild(undoItem);
});
