function pigLatin(word) {
	const letters = word.toLowerCase().split('');

	// convert word into array
	const vowels = ['a', 'e', 'i', 'o', 'u']

	if (vowels.includes(letters[0])) {
		letters.push('way')
	} else {
		while (!vowels.includes(letters[0])) {
			// take first letter off
			const first = letters.shift()
			// add to end + ay
			letters.push(first)
		}

		letters.push('ay')
	}

	return letters.join('');
}

module.exports = pigLatin