function main() {
  // Add the "big" class to the "grow-me" paragraph.
  document.querySelector("#grow-me").classList.add("big");

  // Remove the "big" class from the "shrink-me" paragraph.
  document.querySelector("#shrink-me").classList.remove("big");

  // Find all the <li>s and log their text content to the console.
  const listItems = document.querySelectorAll("li");

  for (let item of listItems) {
    console.log(item.innerText);
  }

  // Set the href of the link to "https://www.example.com" and
  // update the text to say "somewhere" instead of "nowhere".
  const link = document.querySelector("a.link");
  link.setAttribute("href", "https://www.example.com");
  link.innerText = "somewhere";

  // Set the "display" CSS property of the "hide-me" paragraph to "none".
  document.querySelector("#hide-me").style.display.none;

  // Set the "display" CSS property of the "show-me" paragraph to "block".
  document.querySelector("#show-me").style.display.block;

  // Get the text that the user enters into the "name" input box
  const welcomeMessage = document.querySelector("input#name").value;

  // and use it to set a welcome message in the <h1>, e.g., "Welcome Grant!".
  document.querySelector("h1").innerText = `Welcome ${welcomeMessage}!`;
}
