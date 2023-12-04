"use strict"
{
	// get the form element
	// run this funciton when we submit
	document.querySelector("form").addEventListener('submit', (e) => {
		// keeps the form from submitting to a new page
		e.preventDefault();

		// create our div that we want to add to the browser
		const newDiv = document.createElement('div');

		// start to add properties...

		// add .shape
		newDiv.classList.add('shape');

		// FormData allows us to get the inputs
		// from the form
		// e.target is the element that triggered the event
		console.log(e.target)
		const data = new FormData(e.target);

		// innerText this is the text inside the div
		newDiv.innerText = data.get('text');

		const size = data.get('size'); // based on name="size"
		// set CSS styles
		newDiv.style.width = size + "px";

		// in css, line-height
		newDiv.style.lineHeight = size + "px";
		newDiv.style.height = size + "px";

		// checkboxes values are true/false
		if (data.get('circle')) {
			newDiv.classList.add('circle')
		}

		// adding our element to the body
		document.body.append(newDiv)
	})
}