class Thermostat {
	constructor(private tempInF: number) {
	}

	getTemperature(fahrenheit: boolean = true) {
		if (fahrenheit)
			return this.tempInF
		else

		return 5 / 9 * (this.tempInF - 32)
	}

	setTemperature(temp: number, fahrenheit: boolean = true) {
		// validation
		// is this a real temperature
		// 999

		if (temp > 85 || temp < 56) {
			throw Error("You can't set the temperature to that value");
		}

		if (fahrenheit)
			this.tempInF = temp;
		else {
			this.tempInF = temp * 9 / 5 + 32
		}
	}
}

const temp = new Thermostat(32)
// temp.tempInF = 75; // doesn't the math for us

// better
temp.setTemperature(46, false);
temp.getTemperature(true); //