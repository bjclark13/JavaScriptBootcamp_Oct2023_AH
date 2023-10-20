/**
 * This function will calculate the amount of water needed
 * based on your provided amount of coffee.
 *
 * @param {number} gramsOfCoffee The amount of coffee in grams.
 * @param {string} units		 The unit to use of water. Accepts `grams` or `oz`. Defaults to grams.
 * @param {number} ratio 		 The desired ratio of water to coffee. Defaults to 17
 * @return {number}
 */
function calculateCoffeeRatio(gramsOfCoffee, units = 'grams', ratio = 17) {
	let water = gramsOfCoffee * ratio;

	if (units === 'oz') {
		water /= 28.349523125
	}

	return `${water} ${units}`
}
console.log(calculateCoffeeRatio(50, 'oz'))