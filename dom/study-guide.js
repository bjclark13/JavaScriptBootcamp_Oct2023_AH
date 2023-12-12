// Accessing and modifying object properties.
const obj = {
	thing1: "this"
}

function addToCart(itemName) {
	const selectedItem = items.find((item) => item.name === itemName); // .find is an array method
	const existingItem = cart.find((item) => item.name === itemName);  // checking against.name

	if (existingItem) {
	  existingItem.quantity += 1; // setting quantity by adding 1
	} else {
	  const newItem = {
		name: selectedItem.name,
		price: selectedItem.price,
		quantity: 1,
	  };
	  cart.push(newItem); // adding to an array
	}

	displayCart();
  }

  const items = [
    {
        name: "Apples",
        price: 2.99,
        taxable: false,
    },
    {
        name: "Avocados",
		fullName: "Small Avocados",
        price: 1.27,
        taxable: false
	}
]

items[0].price // .price = 2.00

let theKeyThatWeWantToGet = "name"
items[0][theKeyThatWeWantToGet] // access objects using variables with []

// Accessing and modifying array elements.
// (see above)

// Conditional statements and loops.
function getCartSubtotal() {
    let total = 0; // declares a variable total and assigns it to 0

    for(let item of cart) { // going through each item of cart
        total += item.price * item.quantity
    }

    return total.toFixed(2) // converts a number to a string with format 2.00
}

// Declaring and assigning variables.
// see line 48
let total;
total = 0;

let isHungry; // declare without assigning

if (time > 5) {
	isHungry = true
} else {
	isHungry = false;
}

// Declaring and calling functions.
// see line 48
const cartSubtotal = document.createElement("div");
// <div class="row dark">
cartSubtotal.setAttribute("class", "cart-total"); // setting an attribute class=cart-tital
// <div class="cart-total">

cartSubtotal.classList.add("cart-total");
// <div class="row dark cart-total">

cartSubtotal.textContent = `Subtotal $${getCartSubtotal()}`;
cartDisplay.appendChild(cartSubtotal) // adds to the end of the cartDisplay element

// DOM Fundamentals:
// Selecting elements by their tag, id, or a class with the following two methods:
// document.querySelectorAll() -> returns all elements that match
let allDivs = document.querySelectorAll('div');
for (let div of allDivs) {
	div.addEventListener('click', () => console.log("you clicked me!"))
}

// document.querySelector() -> returns the first match
let cartDisplay = document.querySelector('#cart-display');

// Modifying elements:
// Adding and removing classes.
increaseButton.classList.add("increase-button");
// <button class="increase-button"> Increase </button>
increaseButton.classList.remove("increase-button");
// <button class=""> Increase </button>
increaseButton.classList.toggle("increase-button");
// <button class="increase-button"> Increase </button>

// Adding and removing ids.
cartDisplay.id = "something-new"
cartDisplay.id = ""

// Changing style properties.
cartDisplay.style.lineHeight = `42${px}`; // this is camel case instead of hyphenated
paymentForm.style.display = "none";

// Altering the innerText and innerHTML.

// Setting attributes.
// <div something="this" />
cartSubtotal.setAttribute("class", "cart-total"); // setting an attribute class=cart-tital
myDiv.setAttribute("something", "that")

// Adding and removing elements
cartDisplay.appendChild(cartSubtotal) // adds to the end of the cartDisplay element
// or
cartDisplay.append(cartSubtotal) // adds to the end of the cartDisplay element
// append allows you to add text instead of dom elements (node)
cartDisplay.remove()

// Using node.addEventListener() and node.removeEventListener() for “click” events.
submitCash.addEventListener("click", () => {
	amountTenderedNum = amountTendered.value
	changeDue.textContent = `Change Due $${(amountTenderedNum - grandTotalNum).toFixed(2)}`
	changeDue.style.display = "block" // setting the style
})

// Accessing the event.target object.
formElem = document.querySelector('form#submit-cart');

formElem.addEventListener("submit", (event) => {
	// event tells us about the event
	event.preventDefault(); // don't refresh the page
	const form = event.target; // what form did we submit?

	// Processing forms and inputs.
	const data = new FormData(form);
	// or
	// const data = new FormData(event.target);

	// <input name="first-name" value="BJ" />
	const firstName = data.get('first-name') // BJ
	const lastName = data.get('last-name')
})

// Using a loop to loop through a list of nodes.
for (let div of allDivs) {
	div.addEventListener('click', () => console.log("you clicked me!"))
}

