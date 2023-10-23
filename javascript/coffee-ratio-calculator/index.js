/**
 * This function will calculate the amount of water needed
 * based on your provided amount of coffee.
 *
 * @param {number} gramsOfCoffee The amount of coffee in grams.
 * @param {string} unit		 The unit to use of water. Accepts `grams (ml)` or `oz`. Defaults to grams.
 * @param {number} ratio 		 The desired ratio of water to coffee. Defaults to 17
 * @return {number}
 */
function calculateCoffeeRatio(gramsOfCoffee, unit = "grams", ratio = 17) {
	// to convert from grams to ounces
	// divide by 28.349523125
	let water = gramsOfCoffee * ratio

	if (unit === "oz") {
		water /= 28.349523125
	}

	return `${Math.round(water)} ${unit}`;
}

// let gramsOfCoffee = prompt("Enter the grams of coffee");
// let unit = prompt("Enter the unit (oz or grams).")
// let ratio = prompt("Enter the desired ratio. Leave blank for 17.")

// let result = calculateCoffeeRatio(gramsOfCoffee, unit, ratio)
// console.log(result);

const pourOver = (gramsOfCoffee, unit) => calculateCoffeeRatio(gramsOfCoffee, unit, 17)
const frenchPress = (gramsOfCoffee, unit) => calculateCoffeeRatio(gramsOfCoffee, unit, 12)

console.log(pourOver(50, 'grams'))
console.log(frenchPress(50, 'grams'))
for(let i=1; i <= 10; i++){
    console.log(i);
}