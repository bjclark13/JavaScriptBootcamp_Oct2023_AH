// Declare a function named printTens
console.log("Problem 1");
console.log("-----------");
function printTens() {
  for (let i = 10; i <= 100; i += 10) {
    console.log(i);
  }
}
printTens();

console.log("Problem 2");
console.log("-----------");
function countUntilTens(step) {
  let i = step;
  while (true) {
    console.log(i);
    i += step;

    if (i % 10 === 0) {
      // if
      break;
    }
  }
}
countUntilTens(4);

console.log("Problem 3");
console.log("-----------");
// function hasVowels(word) {
//     const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

//     return [...word].some((letter) => vowels.includes(letter));
// }

const hasVowels = (word) =>
  ["a", "e", "i", "o", "u"].some((vowel) => word.toLowerCase().includes(vowel));

// function hasVowels(word) {
//     const vowels = [`a`, `e`, `i`, `o`, `u`];
//     for (let i = 0; i < word.length; i++) {
//         if (vowels.includes(word[i].toLowerCase())) {
//             return true;
//         }
//     }
//     return false
// }
// function hasVowels(word) {
//     const vowel = [`a`, `e`, `i`, `o`, `u`];

//     for (let element of word) {
//         if (vowel.includes(element)) {
//             return true
//         }
//     }

//     return false
// }
console.log(hasVowels("Ice Cream"));
console.log(hasVowels("BJ"));

console.log("Problem 4");
console.log("-----------");
function testTemperature(desiredTemp, actualTemp) {
  if (desiredTemp > actualTemp) {
    console.log("Run heat");
  } else if (desiredTemp < actualTemp) {
    console.log("Run A/C");
  } else {
    console.log("Stand by");
  }
}
testTemperature(68, 70); // a/c
testTemperature(68, 48); // heat
testTemperature(68, 68); // nothing

console.log("Problem 5");
console.log("-----------");
const dealership = [
  {
    make: "Toyota",
    model: "Prius",
    year: 2020,
    hybrid: true,
  },
  {
    make: "Toyota",
    model: "Prius",
    year: 2021,
    hybrid: true,
  },
  {
    make: "Ford",
    model: "F-150",
    year: 2015,
    hybrid: false,
  },
  {
    make: "Ferrari",
    model: "Enzo",
    year: 2020,
    hybrid: false,
  },
];

console.log("Problem 6");
console.log("-----------");
function findCars(arrayOfCars, model) {
  return arrayOfCars.filter((car) => {
    return car.model === model;
  });
}

// const findCars = (arrayOfCars, model) => arrayOfCars.filter(car => car.model === model)

// function findCars(arrayOfCars, model) {
//     const matches = []

//     for (let car of arrayOfCars) {
//         if (car.model === model) {
//             matches.push(car)
//         }
//     }

//     return matches
// }

console.log(findCars(dealership, "Prius"));
console.log(findCars(dealership, "F-150"));
console.log(findCars(dealership, "Mini Cooper SE"));

console.log("Problem 7");
console.log("-----------");
const addCar = (arrayOfCars, make, model, hybrid) => {
  const newCar = {
    make: make,
    model: model,
    hybrid: hybrid,
    year: 2023,
  };

  arrayOfCars.unshift(newCar);
};
addCar(dealership, "Mini", "Cooper SE", false);
console.log(dealership);
// const addCar = (arrayOfCars, make, model, hybrid) => {
//     arrayOfCars.unshift({
//         make,
//         model,
//         hybrid,
//         year: 2023
//     })
// }

console.log("Problem 8");
console.log("-----------");

function areThereAnyHybridsForSale(arrayOfCars) {
  for (let car of arrayOfCars) {
    if (car.hybrid) {
      return true;
    }
  }

  return false;
}

// function areThereAnyHybridsForSale(arrayOfCars) {
//     return arrayOfCars.some((car) => car.hybrid);
// }
console.log(areThereAnyHybridsForSale(dealership));
