"use strict";
{
    // checker is going to be created dynamically
    const checker = document.createElement("div")
    checker.classList.add("checker")

    // goal: every time I click a place on the board
    // move the checker to that place
    // add a click event on each spot to insert the checker
    // into that spot
    
    // get all of the items that match class="column"
    const columns = document.querySelectorAll(".column")

    // loop through each column
    for (let column of columns) {
        // on click, run this arrow function
        column.addEventListener("click", () => {
            // adds the checker element inside of that
            // column
            column.appendChild(checker)
        })
    }
}
