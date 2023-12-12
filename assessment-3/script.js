"use strict";
const toggleBtn = document.querySelector(".toggle-btn");
const boxBtn = document.querySelector(".box-btn");
const boxContainer = document.querySelector(".box-container");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("color");
});

let counter = 1;

boxBtn.addEventListener("click", () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("box");
  newDiv.setAttribute("title", "I'm a box!");
  newDiv.textContent = counter++;
  boxContainer.append(newDiv);
});

boxContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("box")) {
    e.target.remove();
  }
});