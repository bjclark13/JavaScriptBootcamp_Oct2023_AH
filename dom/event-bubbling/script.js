"use strict";
{
  // get the parent
  document.querySelectorAll(".parent").forEach((parent) => {
    // when we click the parent, run this function
    parent.addEventListener("click", (e) => {
      // check to see if the thing we clicked is a button
      if (e.target.localName === "button") {
        //re move the parent
        parent.remove();
      }
    });
  });

  document.querySelectorAll("#task-list").forEach((task) => {
    task.addEventListener("click", (e) => {
      // don't bubble up to the parent element
      e.stopPropagation();
      if (e.target.localName === "button") {
        const button = e.target;
        button.parentNode.remove();
      }
    });
  });

  // getting the form
  document.querySelector("form")
  .addEventListener("submit", (e) => { // adding a "submit" listen -- run this function when we submit the form
    e.preventDefault(); // keeps the form from reloading page
    // get all of the data from the form
    //  e.target refers to what form was submitted
    const data = new FormData(e.target); 

    // get the value of the input with name=task
    const task = data.get("task");

    // create a new li element
    const newTask = document.createElement("li");
    // adding the class "task" to the li
    newTask.classList.add("task");
    // adding inner html, including remove button
    newTask.innerHTML = `${task} <button>Remove</button>`;

    // adding the li to the task list
    document.getElementById("task-list").appendChild(newTask);
  });
}
