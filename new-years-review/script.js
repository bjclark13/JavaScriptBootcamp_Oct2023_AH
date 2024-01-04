"use strict";
{
  document.querySelector("form").addEventListener("submit", (e) => {
    // prevents the form from reloading
    e.preventDefault();

    // get the form data
    const data = new FormData(e.target);
    const goal = data.get("goal");
    const priority = data.get("priority");
    const dueDate = data.get("due-date");

    const newResolution = document.createElement("li");
    newResolution.classList.add("resolution");
    newResolution.innerHTML = `${goal} (${priority}) - ${dueDate}`;

    if (priority > 5) {
      newResolution.classList.add("important");
    }

    const markCompleteButton = document.createElement("button");
    markCompleteButton.innerText = "Mark Complete";
    markCompleteButton.addEventListener("click", (e) => {
      e.target.parentNode.classList.add("complete");
    });

    newResolution.appendChild(markCompleteButton);

    const removeButton = document.createElement("button");
    removeButton.innerText = "x";
    removeButton.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
    removeButton.classList.add("remove");

    newResolution.appendChild(removeButton);

    document.getElementById("resolutions").appendChild(newResolution);
  });
}
