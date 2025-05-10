addEventListener("DOMContentLoaded", () => {
  const inputData = document.getElementById("todoInput");
  const addBtn = document.getElementById("addBtn");
  const uList = document.querySelector(".ulList");
  const deleteBtn = document.getElementById("deleteBtn");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTask(task));

  addBtn.addEventListener("click", function () {
    const inputText = inputData.value.trim();
    if (inputData.value === "") return;

    const newTask = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    inputData.value = "";
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
    <span>${task.text}</span>
    <button>-</button>
    `;
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();

      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTasks();
    });

    uList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
