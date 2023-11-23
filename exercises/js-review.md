1. What is the difference between var, let, and const? When should you use each?
They all declare a variable. The difference is how they are scoped.

var has a global scope.
let and const are block scoped.
You're allowed to change a const (constant), and can for let.

```
  if (something) {
    var name = "BJ"
  }

  console.log(name); // BJ
```

```
  if (something) {
    let name = "BJ"
  }

  console.log(name); // error
```

```
  let name = "BJ"
...
  name = "Bradley" // totally fine
```

```

  const name = "BJ"

  name = "Bradley" // error

  if (something) {
    const name = "BJ"  // totally fine
  }
```

2. What is the difference between an argument and a parameter?

A parameter is a placeholder (variable) in a function.
An argument is the actual value that you set when you call the function.
```
function getName(name) { // name is the parameter

}

getName("Grand Circus") // "Grand Circus" is the argument
```
3. Why do we use functions?

So that we don't have copy & paste everywhere. This allows us to run the same code, possibly passing in different values.

4. Rewrite this as an arrow function.
```
function add(a, b) {
  return a + b;
}

const add = (a,b) => {
  return a + b;
}

const add = (a,b) => a + b;
```

5. What is the difference between `==` and `===`?

=== strict equality -> are they the same value & type
==  loose equality  -> are they the same value -- kind of guess

```
if ( 1 == "1" ) {
  // true
}

if ( 1 === "1" ) {
  // false
}

1 + 1 = 2
1 + "1" = "11" // scary
```

6. Name 3 different types of data. I'll start: `String`

String -- words (other languages char(character))
Number -- number (int, float, decimal)
BigInt -- big number (take up more bytes) -> total stars in the galaxy
Array  -- an ordered list of other data types
Symbol -- unique value (don't need to use yet)
Function -- function
Boolean -- true / false
Object  -- key, value pair of other data types. Functions and Arrays are special types of objects
Null   -- intentionally blank
Undefined -- doesn't exist yet

1.
```
const students = [
  "Iron Man",
  "Spider-Man",
  "Hulk",
  "Black Panther",
 ]
 ```

 Write a for loop that console.log()s each name
```
 for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
 }

 for (let student of students) {
  console.log(student);
 }

 // student=Iron Man
 // student=Spider-Man
```

