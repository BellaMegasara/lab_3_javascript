//QUESTION 1 //
function makeCounter() {
    let currentCount = 0;

    return function() {
        currentCount++;
        console.log(currentCount)
        return currentCount;
    };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

counter1(); // 1
counter1(); // 2
counter2(); // 1 - yes, it's independent since it restarts from 1
counter2(); // 2

function makeCounterB(startFrom) {
    let currentCount = startFrom;
    return function() {
        currentCount++;
        console.log(currentCount)
    return currentCount;
    };
}

let counter3 = makeCounterB(5);

counter3(); // 6
counter3(); // 7
counter3(); // 8

function makeCounterC(startFrom, incrementBy) {
    let currentCount = startFrom;
    
    return function() {
        currentCount += incrementBy;
        console.log(currentCount)
        return currentCount;
    };
}

let counter4 = makeCounterC(10, 5);

counter4(); // 15
counter4(); // 20

// QUESTION 2 //
const delayMsg = (msg) => console.log(`This message will be printed after a delay:
${msg}`);

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

let fifthTimerRef = setTimeout(delayMsg, 10*1000, '#5: Longest delay')
clearTimeout(fifthTimerRef)

// QUESTION 3 //
function debounce(func) { //answer for a)
    let timeout;
    
    return function() {
    //clear the timer to cancel the previously queued function call
    clearTimeout(timeout);
    
    //reset the timer id for this most recent call to happen after the ms delay
    timeout = setTimeout(func, 1000);
    };
}

function debounceB(func, ms) { //answer for b)
    let timeout;

    return function() {
    
    //clear the timer to cancel the previously queued function call
    clearTimeout(timeout);
    
    //reset the timer id for this most recent call to happen after the ms delay
    timeout = setTimeout(func, ms);
    };
}

function printMeC(msg) {
    console.log(`printing debounced message c: ${msg}`)
}
printMeC = debounceC(printMeC, 1200)

setTimeout( printMeC, 100, 'msg #1');
setTimeout( printMeC, 200, 'msg #2');
setTimeout( printMeC, 300, 'msg #3');

function debounceC(func, ms) { //answer for c)
    let timeout;
    
    return function(msg) {
    //clear the timer to cancel the previously queued function call
    clearTimeout(timeout);
    
    //reset the timer for this most recent call to happen after the ms delay
    timeout = setTimeout(func, ms, msg);
    };
}

// QUESTION 4 //
function printFibonacci() { //using setInterval
    let first = 1;
    let second = 1;
    
    console.log(first)
    console.log(second)
    
    setInterval(function printNext() {
        let next = first+second;
        console.log(next)
        
        first = second; //next time the interval runs,
        second = next; //first and second each move up the sequence
    }, 1000)
}

function printFibonacciTimeouts() { //using nested setTimeout
    let [first, second] = [1, 1]
    console.log(first)
    console.log(second)
    
    setTimeout(function printNext(first, second) {
        let next = first+second;
        console.log(next);
    
        //call the same function again with different argument values
        setTimeout(printNext, 1000, second, next);
    }, 1000, first, second);
}

function printFibonacciLimit(limit) {
    let first = 1;
    let second = 1;
    
    console.log(first)
    console.log(second)
    
    let counter = 2; //we already printed the first two numbers
    
    let intervalRef = setInterval(function printNext() {
        let next = first+second;
        console.log(next)
        
        first = second; //next time the interval runs,
        second = next; //first and second each move up the sequence
        counter++; //keep track of how many numbers we've printed
        if (counter == limit) clearInterval(intervalRef) //stop if we're at the limit
    }, 1000)
}

// QUESTION 5 //
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

car.description(); //works
//c) this now works, but prints new year value below instead of original,
//because the object has changed since the timeout was set up
setTimeout(() => car.description(), 200); //a)

car = {...car, year: 2015} //b

let describeCar = car.description.bind(car); //d)

setTimeout(describeCar, 400); //this now works

car = {...car, year: 2020} //e) even if we override the year it keeps the bound

// QUESTION 6 //
//a) solution assumes two arguments and passes them through
Function.prototype.delay = function(ms) {
    let originalFunction = this;
    return function(arg1, arg2) {
        setTimeout(originalFunction, ms, arg1, arg2);
    }
};

multiply.delay(200)(5, 5); // prints 25 after 200 milliseconds

Function.prototype.delayB = function(ms) {
    let originalFunction = this;
    return function() {
        setTimeout(() => originalFunction.apply(this, arguments), ms);
    }
};

function multiply4(a, b, c, d) {
        console.log( a * b * c * d);
}

multiply4.delayB(500)(5, 5, 5, 5); // prints 625 after 500 milliseconds

// QUESTION 7 //
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

Person.prototype.toString = function() {
    return `${this.name} is a ${this.age} year old ${this.gender}`
}

const person1 = new Person('James Brown', 73, 'male')
console.log('person1: '+person1)

const person2 = new Person('Diana Ross', 78, 'female')
console.log('person2: '+person2)

const person3 = new Person('Aretha Franklin', 76, 'female')
console.log('person3: '+person3)

function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender);
    this.cohort = cohort
}

Student.prototype.toString = function() {
    return `${this.name} is a ${this.age} year old ${this.gender} student in the
${this.cohort} cohort`
}

const student1 = new Student('Alice Mackenzie', 23, 'female', 'se-au-ft-1jan23')
console.log('student1: '+student1)

const student2 = new Student('Gavin Williams', 31, 'male', 'se-au-ft-1jan23')
console.log('student2: '+student2)

// QUESTION 8 //
class PrecisionClock extends DigitalClock {
    constructor(prefix, precision) {
        super(prefix);
        this.precision = precision ? precision : 1000;
    }
    
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
    }
}

const myPrecisionClock = new PrecisionClock('my precision clock:', 2000)
myPrecisionClock.start()

class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime) {
        super(prefix);
        this.wakeupTime = wakeupTime ? wakeupTime : '07:00'
    }
    
    checkDisplay() {
        const now = new Date();
        const wakeupHours = this.wakeupTime.substring(0, 2);
        const wakeupMins = this.wakeupTime.substring(3)
    
        if (now.getHours() == wakeupHours && now.getMinutes() == wakeupMins) {
            console.log('Wake Up!');
            this.stop();
        } else {
            this.display();
        }
}

start() {
    this.checkDisplay();
    this.timer = setInterval(() => this.checkDisplay(), 1000);
    }
}

const myAlarmClock = new AlarmClock('my alarm clock:', '17:00')
myAlarmClock.start()

// QUESTION 9 //
function randomDelay() {
    // your code
    let delay = Math.ceil(Math.random() * 20);
    return new Promise(resolve => setTimeout(resolve, delay*1000));
}

randomDelay()
    .then((delay) => console.log('There appears to have been a delay.'));

function randomDelayB() {
    let delay = Math.ceil(Math.random() * 20);
    
    return new Promise((resolve, reject) =>
    // if even delay the resolve function, if odd delay the reject function
    setTimeout((delay % 2 === 0) ? resolve : reject, delay*1000));
}

randomDelayB()
    .then(() => console.log('Successful delay'))
    .catch(() => console.log('Failed delay'));

function randomDelayD() {
    let delay = Math.ceil(Math.random() * 20);
    
    return new Promise((resolve, reject) =>
        setTimeout((delay % 2 === 0) ? resolve : reject, delay*1000, delay));
}

randomDelayD()
    .then((delay) => console.log('Successful delay of '+delay+' seconds'))
    .catch((delay) => console.log('Failed delay of '+delay+' seconds'));

// QUESTION 10 //
fetchURLData('https://jsonplaceholder.typicode.com/todos/1') //works, prints result
    .then(data => console.log(data))
    .catch(error => console.error(error.message));

fetchURLData('https://jsonplaceholder.typicode.com/fake') //doesn't exist, prints catch
    .then(data => console.log(data))
    .catch(error => console.error(error.message));

async function asyncFetchURLData(url) { //a)
    let fetchResponse = await fetch(url);
    
    if (fetchResponse.status === 200) {
        let responseJson = await fetchResponse.json();
        return responseJson;
    } else {
        throw new Error(`Request failed with status ${fetchResponse.status}`);
    }
}

async function asyncFetchMultipleURLData(urls) { //c)

    return Promise.all(urls.map(async (url) => {
        let response = await fetch(url);
        return response.json();
    }));
}

try {
    let responseData1 = await
asyncFetchURLData('https://jsonplaceholder.typicode.com/todos/1');
    console.log(responseData1) //works

    let responseData2 = await
asyncFetchMultipleURLData(['https://jsonplaceholder.typicode.com/todos/1',
'https://jsonplaceholder.typicode.com/todos/2']);
    console.log(responseData2) //works

    let responseData3 = await
asyncFetchURLData('https://jsonplaceholder.typicode.com/fake');
    console.log(responseData3) //fails
} catch (error) {
    console.log(error.message);
}