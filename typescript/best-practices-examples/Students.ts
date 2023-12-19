interface Student {
	name: string;
	age: number;
	cohort: string;
}

class GrandCircusStudent implements Student {
	name: string;
	age: number;
	cohort: string;
	constructor(name: string, age: number, cohort: string) {
		this.name = name;
		this.age = age;
		this.cohort = cohort;
	}
}

class JavaScriptStudent extends GrandCircusStudent {
	constructor(name: string, age: number) {
		super(name, age, "JavaScript");
	}
}

class CSharpStudent extends GrandCircusStudent {
	constructor(name: string, age: number) {
		super(name, age, "C#");
	}
}