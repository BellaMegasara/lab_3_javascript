// QUESTION 1 //
console.log("" + 1 + 0); // "10"
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(!true); // false
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // "9px"
console.log("$" + 4 + 5); // "$45"
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log(" -9 " + 5); // " -9 5"
console.log(" -9 " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(" \t \n" - 2); // -2

// QUESTION 2 //
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four; // 3 + 4
let multiplication = three * four; // 3 * 4
let division = three / four;  // 3 / 4
let subtraction = three - four; // 3 - 4
let lessThan1 = three < four; // 3 < 4
let lessThan2 = thirty < four; // false

// QUESTION 3 //
if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true') //THIS//
if (null) console.log('null is true')
if (-1) console.log('negative is true') //THIS//
if (1) console.log('positive is true') //THIS//

// QUESTION 4 //
let a = 2, b = 3;
let result = `${a} + ${b} is `;

if (a + b < 10) {
result += 'less than 10';
} else {
    result += 'greater than 10';
}

// QUESTION 5 //
let getGreeting = (name) => 'Hello' + name + '!';
console.log(getGreeting("Bob"));

// QUESTION 5.3 //
console.log(getGreeting("Alice"));

// QUESTION 6 //
const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya', // Added lastName
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
        return person.numFingers === 6 ? 
               "You killed my father. Prepare to die!" : 
               "Nice to meet you.";
    }
};

// QUESTION 7 //
const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow() {
        this.score++;
        return this; // Enable chaining
    },
    basket() {
        this.score += 2;
        return this; // Enable chaining
    },
    threePointer() {
        this.score += 3;
        return this; // Enable chaining
    },
    addFoul() {
        this.fouls++;
        return this; // Enable chaining
    },
    halfTime() {
        console.log(`Halftime score is ${this.score}, fouls: ${this.fouls}`);
        return this;
    },
    fullTime() {
        console.log(`Final score is ${this.score}, fouls: ${this.fouls}`);
        return this;
    }
};

basketballGame
    .basket()
    .freeThrow()
    .addFoul()
    .freeThrow()
    .basket()
    .threePointer()
    .halfTime(); 

// QUESTION 8 //
const sydney = {
    name: 'Sydney',
    population: 5121000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
};

function printCityProperties(city) {
    for (let key in city) {
        console.log(`${key}: ${city[key]}`);
    }
}
printCityProperties(sydney);

// QUESTION 9 //
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

// Modifying variables
let moreSports = [...teamSports]; // Create a copy
moreSports.push('Basketball');

let dog2 = dog1; // Primitive type, assignment is by value
dog2 = 'Rover';

let cat2 = { ...cat1 }; // Create a shallow copy of the object
cat2.name = 'Whiskers';

console.log(teamSports); // Expected Output: ['Hockey', 'Cricket', 'Volleyball']
console.log(dog1); // Expected Output: 'Bingo'
console.log(cat1);

// QUESTION 10 //
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = function() {
        return this.age >= 16;
    };
}

let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 14);
console.log(person1); // Expected Output: Person { name: 'Alice', age: 25, human: true, canDrive: [Function (anonymous)] }
console.log(person2); // Expected Output: Person { name: 'Bob', age: 14, human: true, canDrive: [Function (anonymous)] }

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }

    canDrive() {
        return this.age >= 16;
    }
}

let person3 = new PersonClass("Charlie", 18);
console.log(person3);