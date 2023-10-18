// let let = "something"

const returnValueOrNot = "abc"

returnValueOrNot[0] // first character -> a
returnValueOrNot.length // 3
returnValueOrNot[length - 1] // last character -> c

const newValue = `The value of the other var is ${returnValueOrNot}` // The value of the other var is abc

console.log(newValue)

const firstName = "BJ"
const lastName = "Clark"
console.log(`${firstName} ${lastName}`) 
// better than 
console.log(firstName + " " + lastName)

let i = 1;
i += 2; // 3

const me = {
    firstName: "BJ",
    lastName: "Clark"
}
// me is point to the data represented here

let thisOtherVar = me; // this is still pointing to the same same data

me.firstName = "Bradley"
console.log(thisOtherVar.firstName) // Bradley

const key = "firstName";
thisOtherVar[key]; // Bradley

const numberStr = "1" 
console.log(numberStr + 1); // 11

if (typeof numberStr === "string") {
    console.log(parseInt(numberStr) + 1);  
}


let num = 5;
console.log(num % 2); // 1
num = 4;
console.log(num % 2); // 0

// this 
let exclaim = "Hi"
exclaim = exclaim + "!" // Hi!

// is the same as 
exclaim += "!" // Hi!!

num++ // 5, increase by 1

// is the same as 
num += 1;

// is the same as
num = num + 1;
