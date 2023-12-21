// Get the days until Christmas

// what should the type of date be?
const getDaysTilChristmas = (date: Date|string = new Date()) : number => {
    if (typeof date === 'string') {
        date = new Date(date)
    }
   
    // convert the date to a number2
    const dateAsNum = date.getDate();
    // convert christmas to a number
    const christmasAsNum = new Date('12-25-2023').getDate()
    // subtract
    return (christmasAsNum - dateAsNum) * 1000 * 24 * 60 
    // return that in days
}

export default getDaysTilChristmas

// 1

const boxOfThings = [1, '123']

for (let thing of boxOfThings) {
    console.log(Number.parseInt(thing))
}
 

// getDaysTilChristmas('12-01-2023')
getDaysTilChristmas(new Date('12-01-2023'))
getDaysTilChristmas()
// getDaysTilChristmas(1702511194)

// getDaysTilChristmas(new Dat)

interface Person {
    firstName: string,
    lastName: string,

    getFullName(): string,
}

class PersonClass implements Person {
    firstName: string
    lastName: string
    
    getFullName(): string {
        return this.firstName + " " + this.lastName
    }
}

const greeter = (person: Person) => {
    console.log(`Hello ${person.getFullName()}`)
}

const names = ["BJ", "Jon"];

// const startWithL: string = names.find( name => name.startsWith("J") ) || "" // if the left side is falsy, use the right instead 
const startWithL: string = names.find( name => name.startsWith("J") ) ?? "" // if the left side is either null or undefined, use the right instead

console.log(startWithL.length) // 0

let myName: string|undefined = undefined;

// TODO
if (myName !== undefined) {
    console.log(myName.toLowerCase());
} else {
    console.log("my name")
}

let lastName: string|undefined;

console.log(lastName?.length)
