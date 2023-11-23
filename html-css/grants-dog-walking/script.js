"use strict";
{
  // get the button and set it a const
  const button = document.querySelector("button.toggle-dark-mode");

  // add an event listener
  button.addEventListener("click", () => {
     // every time we click it, flip the switch
    document.body.classList.toggle("dark")

    // if it's dark, set the text to "light mode"
    const isDark = document.body.classList.contains("dark");

    // Using a ternary with template string
    // because it always says "mode"
    button.innerText = `${isDark ? "Dark" : "Light"} Mode`
  })
}
