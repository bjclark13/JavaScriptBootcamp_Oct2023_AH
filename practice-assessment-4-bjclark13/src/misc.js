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

  let matches = 0;
  while (end > start) {
    if (word[start] === word[end]) {
      matches++;
    }
    start++;
    end--;
  }

  return matches;
}

function convertTemperature(fromTemp, toUnit) {
  const tempArr = fromTemp.split("");
  const unit = tempArr.pop();

  const temp = Number.parseInt(tempArr.join(""));

  if (unit === toUnit) {
    return temp;
  }

  if (toUnit === "F") {
    return temp * (9 / 5) + 32;
  }

  return (temp - 32) * (5 / 9);
}

function reverseCase(word) {
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (letter.toUpperCase() === letter) {
      newWord += letter.toLowerCase();
    } else {
      newWord += letter.toUpperCase();
    }
  }

  return newWord;
}

function countDoubleLetters(word) {
    let count = 0
    const letters = word.split('')
    let i = 0
    while( letters.length ) {
        if ( letters[0] === letters[1] ) {
            count++;
            letters.shift()
        }

        letters.shift()
    }

    return count;
}

module.exports = {
  countLetters,
  scorePalindrome,
  convertTemperature,
  reverseCase,
  countDoubleLetters
};
