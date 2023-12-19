import { GrandCircusStudent } from "./GrandCircusStudent";
import { Cohort } from "./Student";

export class JavaScriptStudent extends GrandCircusStudent {
	constructor(name: string, age: number) {
		super(name, age, Cohort.JavaScript);
	}
}