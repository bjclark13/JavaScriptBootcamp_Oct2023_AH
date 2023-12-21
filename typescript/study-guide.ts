// Goal of TypeScript
// Add "strongly typed" syntax on top of JavaScript (superset)
// This helps avoid mistakes, so we don't call functions with the wrong types

// Define typed variables in TypeScript by adding a colon after the var name
const firstName : string = "BJ"

// Define and use interfaces with fields in TypeScript
// Define interfaces with methods
// interface is a outline for how objects should look
interface Person {
    firstName: string;
    lastName: string;
    age: number;

    // methods
    // return type after "signature" (parantheses)
    // parameter types
    say(whatToSay: string) : string
}

// Define and use classes with properties, constructors, and methods
// Define classes that implement interfaces

// Classes are a fancy way to create objects with the same fields and methods

// implements means it has to conform to this interface
export class Student implements Person {
    // properties
    firstName: string;
    lastName: string;
    age: number;

    // special function that runs when we create a new object 
    // from this class (instance) -- new Student() <- calls the constructor
    constructor(firstName: string, lastName: string) {
        // sets up the data 
        this.firstName = firstName;
        this.lastName = lastName;

        this.age = 0;
    }

    // methods are functions that are attached to objects
    say(whatToSay: string): string {
        // use this to access our properties in methods
        return `Hi, my name is ${this.firstName}. ${whatToSay}`
    }
}

// Define subclasses, adding properties, adding and overriding methods
// extends means we're inheriting all of the data and the functionality
class GCStudent extends Student {
    // override methods 
    say(whatToSay: string): string {
        // use this to access our properties in methods
        return `Hi, my name is ${this.firstName}. I'm from Grand Circus! ${whatToSay}`
    }

    sayHello() {
        this.say("What's you favorite color?")
    }
}  

// Use classes and subclasses polymorphically with variables, arrays, 
// and method parameters
// Polymorphism: if two things share the same functionality, they can be used 
// interchangeable.
// you can use a subclass in place of a class
// if your type is an interface, anything that implements that interface can be used
function goodMorningEveryone(person: Person) {
    console.log(person.say("Good morning!"))
}

// student implements Person
const bj = new Student("BJ", "Clark");

// GCStudent extends Student
// by definition, it also has to implement Person
const jon = new GCStudent("Jon", "Plumb");

goodMorningEveryone(bj)
goodMorningEveryone(jon)


