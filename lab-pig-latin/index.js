function pigLatin(word) {
	// convert the word into an array, all lower case
	const letters = word.toLowerCase().split('');

	// if the first letter is a vowel
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	if ( vowels.includes(letters[0]) ) {
		// add -way
		letters.push('way');
	} else {
		while(!vowels.includes(letters[0])) {
			// take the vowel off the front
			const firstLetter = letters.shift();
			// put it at the end
			letters.push(firstLetter);
		}
		// add -ay
		letters.push('ay');
	}

	return letters.join('');
}

// function pigLatin2(word) {
// 	// TODO
// }

module.exports = pigLatin

// or
// module.exports = { pigLatin, pigLatin2 }