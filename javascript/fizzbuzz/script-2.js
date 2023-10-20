for (let i = 0; i < 100;i++) {
	console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
}

console.log(1)

function logger(level, ...messages) {
	for (let message of messages) {
		console.log(`${level}: ${message}`);
	}
}
