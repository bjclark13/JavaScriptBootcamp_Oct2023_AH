// Declare and initialize the following variables with appropriate values:

// fullName (string) - Mitch Cuckovich
const fullName = "BJ Clark";

// age (number) - 25
const age = 28;

// birthday (string) - January 24
const birthday = "Sept 16";

// pineapplePizza (boolean) - choose either true or false
const pineapplePizza = true;



// Write an if/else statement that runs one of two console.log methods.
// Your console.log methods must incorporate the variables: fullName, age, and birthday.
// If pineapplePizza is true, log the following message to the console:
// My name is fullName and I like pineapples on pizza. I am currently age years old and my birthday is on birthday.
// else
// My name is fullName and I'm not into pineapples on pizza. I am currently age years old and my birthday is on birthday.
if (pineapplePizza) {
    console.log(`My name is ${fullName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`)
} else {
    console.log(`My name is ${fullName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`)
}

// lifeEvents (array with 4  items.  4 important life events)
const lifeEvents = [
    "I was born in Three Oaks, MI" ,  // 0
    "I went Western Michigan University", // 1
    "I am married", // 2
    "I have a 1 year old daughter", // 3
];

// Write a for loop that starts at 0 and iterates by increments of 1 while i is less than the length of the lifeEvents array.
//Each iteration of the loop should log a new sentence from the lifeEvents array. You should only have one console.log method.
for (let i = 0; i < lifeEvents.length; i++) { // initialization (starting value); condition (keep going while this is true); final value (this runs after every loop iteration)
    const event = lifeEvents[i];
    console.log(event);
}

// Declare and initialize a variable named counter to the value of 0.
// Write a while loop that loops while true.
// Declare a variable named randomNumber that is initialized to a random integer between 1 and 10. Google search how to do this.
// Write an if/else statement that has two conditions
// If randomNumber is not equal to 5
// Increment counter
// Use a console.log method to say: “randomNumber !== 5”
// Else
// Increment counter
// Use a console.log method to say: “5 === 5. It took counter iterations to randomly generate the number 5.”
// Break
let counter = 0;

// .32
// *10 = 3.2 -> 3 + 1 = 4

while(true) {
    counter++;

    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (randomNumber !== 5) {
        console.log("randomNumber is not equal to 5")
    } else {
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`);
        break; // leave the while
    }
}

function doTheThing() {
    var myThingThatImGoingToDo = true;
}
doTheThing()

// put through the minifier...
"use strict"
{
    function a() {
        var b = true;
        console.log(b);
    }
    a()
}














