"use strict";
{
  document.querySelectorAll("#task-list").forEach((taskList) => {
    taskList.addEventListener("click", (event) => {
      const button = event.target;
      button.parentNode.remove();
    });
  });

  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const task = data.get("task");

    const newTask = document.createElement("li");
    newTask.classList.add("task");
    newTask.innerHTML = `${task} <button>Remove</button>`;
    document.getElementById("task-list").appendChild(newTask);
  });
}
