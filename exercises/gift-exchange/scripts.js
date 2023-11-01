"use strict"
{
	const family = [
		["BJ", "Rachel", "Sophie"],
		["Jake"],
		["Josh", "Celina"],
		["Mazie"],
		["Brad", "Heidi"],
	];

	const generateGiftExchange = family => {
		const remainingFamily = [...family];
		const matches = {};

		for (let i = 0; i < family.length; i++) {
			const household = family[i];
			for (let j = 0; j < household.length; j++) {
				const giver = household[j];
				const eligibleReceivers = remainingFamily
					.filter((_, index) => index !== i)
					.reduce((acc, otherHousehold) => acc.concat(otherHousehold), []);

				const receiverIndex = Math.floor(Math.random() * eligibleReceivers.length);
				const receiver = eligibleReceivers[receiverIndex];

				matches[giver] = receiver;

				remainingFamily.forEach(h => {
					const index = h.indexOf(receiver);
					if (index !== -1) {
						h.splice(index, 1);
					}
				});
			}
		}

		return matches;
	}

	const matches = generateGiftExchange(family);
	console.log(matches);
}
