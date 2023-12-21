import { Student, Cohort } from "./Student";

export class GrandCircusStudent implements Student {
	name: string;
	age: number;
	cohort: Cohort;
	constructor(name: string, age: number, cohort: Cohort) {
		this.name = name;
		this.age = age;
		this.cohort = cohort;
	}
}