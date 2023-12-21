// JavaScript
// C#
// Data Analytics

// export type Cohort = "JavaScript" | "C#" | "Data Analytics"

export enum Cohort {
	JavaScript = "JavaScript",
	CSharp = "C#",
	DataAnalytics = "Data Analytics"
}


export interface Student {
	name: string;
	age: number;
	cohort: Cohort; // anything
}