function countLetters(word, letter) {
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }

    return count; 
}

function scorePalindrome(word) {
    let start = 0;
    let end = word.length - 1;

    let matches = 0 ;
    while (end > start) {
        if (word[start] === word[end]) {
            matches++
        }
        start++;
        end--;
    }

    return matches;
}

function convertTemperature(fromTemp, toUnit) {
    const tempArr = fromTemp.split('')
    const unit = tempArr.pop();

    const temp = Number.parseInt(tempArr.join(''))

    if (unit === toUnit) {
        return temp
    }

    if (toUnit === "F") {
        return temp * (9/5) + 32
    }

    return (temp - 32) * (5/9);
}

module.exports = { countLetters, scorePalindrome, convertTemperature };
