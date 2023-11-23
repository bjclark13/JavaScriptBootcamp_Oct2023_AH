// 1. Create an object called `cart` with a property called `items`, that is an empty array.
const cart = {
	items: [],

	addItem(name, price) {
		this.items.push({
			name, // same thing as
			price: price, // ^
		})
	},

	calculateTotal() {
		let total = 0;

		for ( let item of this.items ) {
			total += item.price
		}

		return total;
	}
}

cart.addItem("toothbrush", 77)
cart.addItem("toothpaste", 123)
cart.addItem("telsa", 47)

console.log(cart.calculateTotal())
// 2. Add a method `addItem(name, price)`, which adds an item to the items array, as an object.
// 3. Add a method `calculateTotal()`, which adds up the total of the all the items. Return total.
// 4. Add some sample data (aka call addItem() a few times with made up products), then run calculateTotal()