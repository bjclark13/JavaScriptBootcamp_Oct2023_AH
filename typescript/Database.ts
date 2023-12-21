let id = 0

let items : DatabaseItem[] = [];

// Classes are really good at helping us represent 3rd party libraries in code
// This is called ORM (Object Relational Model)
export class DatabaseItem {
	id: number;

	constructor() {
		this.id = id;
		id++
	}

	save() {
		items.push(this);
		console.log('this has been saved to the database');
	}
	delete() {
		items.splice( items.findIndex( toDelete => toDelete.id === this.id ) )
		console.log('this has been deleted from the database')
	}
}

export default items;