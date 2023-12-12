// the main code

exports.tempConverter = (temp, unit) => {
    if (typeof temp !== "number") {
        return "error: your input is invalid"
    }

    if (unit === "F") {
        return temp * (9/5) + 32
    } else {
        return (temp - 32) * (5/9)
    }
}

exports.fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

exports.celsiusToKelvin = celsiusToKelvin

module.exports = tempConverter;