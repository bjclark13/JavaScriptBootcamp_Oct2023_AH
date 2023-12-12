const pigLatin = require('./index')

// or
// const { pigLatin, pigLatin2 } = require('./index')

// words that start with vowels… write tests for several different starting vowels
// words that start with vowels with capital letters are converted to lowercase
// words that start with one consonant… write tests for the second letter being several different vowels
// words that start with two consonants
// words that start with more consonants

describe("pigLatin", () => {
	it("apple", () => {
		expect(pigLatin('apple')).toBe('appleway')
	})

	it("ant", () => {
		expect(pigLatin('ant')).toBe('antway')
	})

	it("baseball", () => {
		expect(pigLatin('baseball')).toBe('aseballbay')
	})

	it("france", () => {
		expect(pigLatin('france')).toBe('ancefray')
	})

	it("yellow", () => {
		expect(pigLatin('yellow')).toBe('ellowyay')
	})

	it("yEllow", () => {
		expect(pigLatin('yEllow')).toBe('ellowyay')
	})
})
