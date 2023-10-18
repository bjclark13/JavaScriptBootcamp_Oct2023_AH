let result;
/* Problem 1
Something is wrong with this logic
   Use some examples to test this code out and
   then try to fix it.
*/
function isDivisibleBy5(num) {
    if (num / 5 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(`-----Problem 1-------`)
console.log(isDivisibleBy5(15)) // should be true
console.log(isDivisibleBy5(23))  // should be false
console.log(isDivisibleBy5(5))  // should be true

/* Problem 2
This should return the first x characters of a given string
   based on what you provide for num.

   For example: 
*/
function firstXCharacters(inputString, num) {
    if (inputString.length < num) {
        num = inputString.length; // Adjust num if it's greater than the string length
    }

    let result = "";

    for (let i = 0; i <= num; i++) {
        result += inputString[i];
    }

    return result;
}
console.log(`-----Problem 2-------`)
console.log(firstXCharacters('abc', 2)) // should be 'ab'
console.log(firstXCharacters('mykindalongstring', 10)) // should be 'mykindalon'

/** 
 * Problem 3
 */
function findFirstNegativeNumber(numbers) {
    let index = 1;
    
    while (index < numbers.length && numbers[index] >= 0) {
        index++;
    }

    console.log(index)
    if (index < numbers.length) {
        return numbers[index];
    } else {
        return "No negative numbers found";
    }
}
console.log(`-----Problem 3-------`)
const numberArray = [2, 4, -1, 5, 7, -3];
result = findFirstNegativeNumber(numberArray);
console.log(result); // Output should be -1

const numberArray2 = [-2, 4, -1, 5, 7, -3];
result = findFirstNegativeNumber(numberArray);
console.log(result); // Output should be -2

/** Problem 4 */
function findIndexOfFirstFalseElement(elements) {
    let index = 0;

    while (index < elements.length && elements[index] == true) {
        index++;
    }

    if (index < elements) {
        return index;
    } else {
        return "No 'false' elements found";
    }
}
console.log(`-----Problem 4-------`)
// Example usage:
const booleanArray = [true, false, true, true, false];
result = findIndexOfFirstFalseElement(booleanArray);
console.log(result); // Output should be 1

/**
 * Problem 5
 * Why doesn't this work? Hint: your editor might help you!
 */
function bleepOutWords(text, curseWords) {
    const words = text.split(' ');

    for (let i = 0; i < words.length; i++) {
        let word = words[i].replace(/[.,!?;:'"()\[\]{}]/g, ''); // Remove punctuation
        if (curseWords.includes(word.toLowerCase())) {
            // If it is a curse word, replace it with asterisks, preserving punctuation
            let word = words[i].replace(/[a-zA-Z]/g, '*');
        }

        words[i] = word;
    }

    const censoredText = words.join(' ');

    return censoredText;
}

console.log(`-----Problem 5-------`)
// Example usage:
const text = "This is a sample text with bad words like heck and darn.";
const curseWords = ["heck", "darn"];

const censoredText = bleepOutWords(text, curseWords);
console.log(censoredText);

/** Problem 6 */
function emoticonGenerator(word) {
    var lowercaseWord = word.toLowerCase(); // Convert the word to lowercase for case-insensitive matching

    if (lowercaseWord = "happy") {
        return ":-)";
    } else if (lowercaseWord = "sad") {
        return ":-(";
    } else if (lowercaseWord = "love") {
        return "<3";
    } else if (lowercaseWord = "cool") {
        return "B-)";
    } else if (lowercaseWord = "surprised") {
        return ":-o";
    } else {
        return "¯\\_(ツ)_/¯"; // Default emoticon for unknown words
    }
}

console.log(`-----Problem 6-------`)
// Example usage:
const word = "surprised";
const emoticon = emoticonGenerator(word);
console.log(emoticon); // Output should be ":-o"

/**
 * Problem 7
 * 
 * There are multiple things wrong with this one :)
 */
function angryGreeting() {
    return greetingWithName + ', you jerk'
}

function happyGreeting(name) {
    return `${greetingWithName(name)}, my dear friend`
}

function greetingWithName(name) {
    return `Hello, ${name}`
}

console.log(`-----Problem 7-------`)
function callGreeting(name) {
    // randomly return either true or false
    // don't worry, it works
    let happy =  Math.random() < 0.5;

    if (happy === 'true') {
        return happyGreeting(name)
    } 

    if (happy === 'false') {
        return angryGreeting(name)
    }
}

// this should return either "Hello, BJ, my dear friend" or "Hello, BJ, you jerk"
console.log(callGreeting('BJ')) 
