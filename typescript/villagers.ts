// Animal Crossings

// Villagers  - pockets (Items)
// MainCharacter
// NPCs

// Items
// Tool
// Food
// Recipes

interface Item {
	name: string,
	expirable: boolean,

	use(): void
}

class Tool implements Item {
	expirable: boolean = true;

	constructor(public name: string) {

	}

	build() {

	}

	use(): void {
		console.log('using a ' + this.name);
		this.build();
	}
}

class Food implements Item {
	expirable: boolean = true;

	constructor(public name: string) {
	}

	eat() {

	}

	use(): void {
		console.log('eating an ' + this.name);
		this.eat();
	}
}

class Recipes implements Item  {
	expirable: boolean = false;

	constructor(public name: string) {

	}

	learn() {

	}

	use(): void {
		console.log('learning this recipe ' + this.name);
		this.learn();
	}
}

class Villager {
	pockets: Item[] = []

	constructor(public name: string, personality: string) {

	}
}

class NPC extends Villager {
}

class MainCharacter extends Villager {
	quit() {
		console.log('quit');
	}

	save() {
		console.log('save');
	}
}

// Island that contains Villagers
const island : Villager[] = [
	new Villager('BJ', 'grumpy'),
];

island[0].pockets = [
	new Tool('hammer'),
	new Recipes('chocolate milk'),
	new Food('apple')
]

let i = 0;
for (let item of island[0].pockets) {
	i++
	item.use();

	if (item.expirable) {
		island[0].pockets.splice(i, 1);
	}
}
console.log(island[0].pockets)