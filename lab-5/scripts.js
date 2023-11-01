// Create a firstName variable. Set it to your first name.
const firstName = "BJ";

// Create a lastName variable. Set it to your last name.
const lastName = "Clark";

// Create a fullName variable. Set it by concatenating firstName and lastName with a space between. (Or use a template literal.)
// (Don’t know what concatenate means? Google “JavaScript concatenate.”)
let fullName = firstName.concat(" ".concat(lastName)); // 1
fullName = firstName + " " + lastName; // 2
fullName = `${firstName} ${lastName}`; // 3 -- my favorite
fullName = firstName.concat(" ".concat(lastName)); // 4
fullName = [firstName, lastName].join(" ") // 5

// Log the fullName variable to the console.
console.log(fullName)

// Create a population variable. Set it to the population of Detroit or your favorite city.
const population = 300000
// Log population to the console.
console.log(population)
// Multiply the population by 3 and log that to the console.
console.log(population * 3)

// Create a javaScriptIsCool variable. Set it to the boolean value true.
const javaScriptIsCool = true;

// Create a colors variable. Set it to an array of the colors of the rainbow. (Each color is a string.)
const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// Write a for loop that counts from 1 to 5 and logs each number to the console.
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// Write a for loop that counts from 0 to 4 and logs each number to the console.
for (let i = 0; i <= 4; i++) {
    console.log(i);
}