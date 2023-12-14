function pigLatin(word) {
	// convert the word into an array, all lower case
	const letters = word.toLowerCase().split('');

	if ( startsWithVowel(letters) ) {
		addWay()
	} else {
		moveToEndUntilVowel(letters)
		addAy();
	}

	return letters.join('');
}

function addAy() {
	// add -ay
	letters.push('ay');
}

function addWay() {
	letters.push('way');
}

function moveToEndUntilVowel(letters) {
	while(!startsWithVowel(letters)) {
		// take the vowel off the front
		const firstLetter = letters.shift();
		// put it at the end
		letters.push(firstLetter);
	}
}

function startsWithVowel(arrayOfLetters) {
	const listOfVowels = ['a', 'e', 'i', 'o', 'u'];

	return listOfVowels.includes(arrayOfLetters[0])
}

// Code is communication: we're writing for humans!

// 1. Name variables / functions to define what they actual do
// 2. We shouldn't have to rely on comments to understand how our code works
// 3. Don't get too clever
// 4. DRY -- Don't Repeat Yourself
// 5. Break functions up into the smallest logical chunk

module.exports = { startsWithVowel, addAy, addWay, pigLatin, moveToEndUntilVowel }
