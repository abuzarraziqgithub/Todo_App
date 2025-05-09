// "use strict";

const inputData = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const uList = document.querySelector(".ulList");

let tasks = [];

addBtn.addEventListener("click", function () {
  const inputText = inputData.value.trim();
  if (inputData.value === "") return;

  const newTask = {
    id: Date.now(),
    text: inputText,
    completed: false,
  };

  tasks.push(newTask);
  renderTask();
  inputData.value = "";
});

function renderTask(task) {
  const li = document.createElement("li");
  // li.innerHTML = `<button type="button" id="deleteBtn">-</button>`;
  uList.appendChild(li);
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
