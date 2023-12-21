import database, { DatabaseItem } from "./Database";

export class Student extends DatabaseItem {
	grade : number = 0;

	constructor(public name: string, public cohort: string) {
		super()
	}

	setGrade(newGrade: number) {
		this.grade = newGrade;
		this.save();
	}
}

const bj = new Student('BJ', 'JS')
bj.setGrade(75)

console.log(database);