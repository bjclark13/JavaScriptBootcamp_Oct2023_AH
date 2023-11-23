"use strict"
{
    let direction = 1; // +1 = forward, -1 = backward
    let currentPosition = 0; 

    const move = initialDirection => distance => currentPosition += distance * direction * (+initialDirection * 2 - 1)

    const moveForward = move(true);
    const moveBackward = move(false);
    
    const turnAround = () => {
        direction *= -1;
    }
    
    const printLocation = () => {
        console.log(currentPosition);
    }
    
    moveForward(5);
    moveBackward(3)
    printLocation() // 2
    turnAround()
    moveForward(10)
    moveBackward(5) 
    printLocation() // -3
}


// 

let newCars = [];

for (let i; i < cars.length; i++) {

}
const matchingCars = [];

for (let car of cars) {
    if (arrayOfCars[i].model === model) {
        matchingCars.push(arrayOfCars[i]);
    }
    
    return matchingCars;
}

function findCars(arrayOfCars, model) {
    const matchingCars = [];
    for (let i = 0; i < arrayOfCars.length; i++) {
        if (arrayOfCars[i].model === model) {
            matchingCars.push(arrayOfCars[i]);
        }
    }
    return matchingCars;
}

function findCars (arrayOfCars, model) {
    return arrayOfCars.filter(car => car.model === model)
}

const foundModel = findCars(dealership, "Prius");
console.log(foundModel);