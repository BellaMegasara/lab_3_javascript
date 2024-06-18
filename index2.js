// QUESTION 1 //
function ucFirstLetters(str) {
    let newString = '';
    let.words = str.split(' ');

    for (let word of words) {
        if (newString.length != 0) newString += ' '
        newString += word.charAt(0).toUpperCase() + word.substring(1)
    }

    return newString;
}

console.log(ucFirstLetters("los angeles") )
console.log(ucFirstLetters("fremantle city") )
console.log(ucFirstLetters("city of canning") )

// QUESTION 2 //
function truncate(str, max) {
    if (str.length > max)
    {
        return str.substring(0, max) + '...';
    }
    else {
        return str;
    }
}

function truncate2(str, max) {
    return (str.length > max) ? str.substring(0, max) + '...' : str;
}

console.log(truncate('This text will be truncated if it is too long', 25))

// QUESTION 3 //
const animals = ['Lion', 'Monkey']
console.log(animals)

animals.push('Horse');
animals.push('Penguin')
console.log(animals)

animals.unshift('Rabbit')
animals.unshift('Snake')
console.log(animals)

animals.sort()
console.log(animals)

function replaceMiddleAnimal(newValue) {
    let halfway = animals.length / 2;
    animals[halfway] = newValue
}
console.log(animals)

function findMatchingAnimals(beginsWith) {
    return animals.filter(animal =>
        animal.toLowerCase().startsWith(beginsWith.toLowerCase()))
}
console.log(findMatchingAnimals('h'))

// QUESTION 4 //
function camelCase(cssProp) {
    let words = cssProp.split('-');
    let camelString = '';

    words.forEach(word => {
        if (camelString.length == 0) {
            camelString = word;
        }
        else {
            camelString += word/charAt(0).toUpperCase() + word.substring(1)
        }
    });
    return camelString;
}

const camelCase2 = (cssProp => {
    let camelString = '';

    for (let word of cssProp.split('-')) {
        camelString += (camelString.length == 0) ? word : word.charAt(0).toUpperCase() + word.substring(1);
    }
    return camelString;
})

console.log(camelCase('margin-left'))
console.log(camelCase2('background-image'))
console.log(camelCase('display'))

// QUESTION 5 //
function currencyAddition(float1, float2) {
    let wholeNumber1 = float1 * 100;
    let wholeNumber2 = float2 * 100;

    return (wholeNumber1 + wholeNumber2) / 100
}

function currencyOperation(float1, float2, operation) {
    let wholeNumber1 = float1 * 100;
    let wholeNumber2 = float2 * 100;
    let wholeResult = 0;

    switch (operation) {
        case '+' :
            wholeResult = wholeNumber1 + wholeNumber2; break;
        case '*' :
            wholeResult = wholeNumber1 + wholeNumber2; break;
        case '-' :
            wholeResult = wholeNumber1 - wholeNumber2; break;
        case '/' :
            wholeResult = wholeNumber1 / wholeNumber2; break;
        default :
            wholeResult = wholeNumber1 + wholeNumber2;
    }
    //divide by the same factor we multiple by
    return wholeResult / 100;
}

function currencyOperation2(float1, float2, operation, numDecimals) {
    let factor = 10**numDecimals;
    let wholeNumber1 = float1 * factor;
    let wholeNumber2 = float2 * factor;
    let wholeResult = 0;

    switch (operation) {
         case '+' :
            wholeResult = wholeNumber1 + wholeNumber2; break;
        case '*' :
            wholeResult = wholeNumber1 + wholeNumber2; break;
        case '-' :
            wholeResult = wholeNumber1 - wholeNumber2; break;
        case '/' :
            wholeResult = wholeNumber1 / wholeNumber2; break;
        default :
            wholeResult = wholeNumber1 + wholeNumber2;
    }
    return Math.round(wholeResult) / factor;
}

//QUESTION 6 //
const colours = ['pink', 'rose', 'white', 'beige', 'plum', 'pink', 'rose', 'white']
const testScores = [12, 27, 32, 45, 27, 78, 88, 90, 73, 72]

function unique(duplicatesArray) {
    const uniques = [];

    duplicatesArray.forEach(element => {
        if (!uniques.includes(element)) {
            uniques.push(element);
        }
    });
    return uniques;
}
console.log(unique(colours))
console.log(unique(testScores))

// QUESTION 7 //
const books = [
    { id: 1, title : 'The Great Gatsby', author: 'F. Scott Fitxgerald', year: 1925 },
    { id: 2, title : 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
    { id: 3, title : '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title : 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title : 'The Catcher in the Rye', author: 'J.D Salinger', year: 1951 },
];

function getBookTitle(bookId) {
    let matchingBook = books.find(book => book.id == bookId);
    return matchingBook.title;
}
console.log(getBookTitle(3))

function getOldBooks() {
    return books.filter(book => book.year < 1950) 
}
console.log(getOldBooks())

function addGenre() {
    books.map(book => book.genre = 'Classic');
}
addGenre();
console.log(books);

function getTitles(authorInitial) {
    return books
    .filter(book =>
        book.author.toLowerCase().startsWith(authorInitial.toLowerCase()))
        .map(book => book.title);
}
console.log(getTitles('G'))

function latestBook() {
    let latesrYear = 1990;

    books.forEach(book => {
        if (book.year > latestYear) {
            latestYear = book.year;
        }
    });
    return books.find(book => book.year == latestYear);
}
console.log(latestBook())

// QUESTION 8 //
const phoneBookABC = new Map()
phoneBookABC.set('Annabelle', '043303456')
phoneBookABC.set('Ballyy', '043303888')
phoneBookABC.set('Chanel', '043302226')

const phoneBookDEF = new Map([
    ['David', '0421787654']
    ['Estelle', '0421727254']
    ['David', '0421888654']
])

phoneBookABC.set('Chanel', '0431431222');

function printPhoneBook(contacts) {
    for (let entry of contacts) {
        console.log(entry)
    }
}
printPhoneBook(phoneBookABC)

const phoneBook = new Map(
    [...phoneBookABC.entries()].concat([...phoneBookDEF.entries()]));
console.log([...phoneBook.keys()])

//QUESTION 9 //
let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
};

function sumSalaries(salaries) {
    let totalSalaries = 0;

    for (let [name, salary] of Object.entries(salaries)) {
        totalSalaries += salary;
    }
    return totalSalaries;
}
console.log(sumSalaries(salaries))

function topEarner(salaries) {
    let topSalary = 0;
    let topEarner = '';

    for (let name in salaries) {
        if (salaries[name] > topSalary) {
            topSalary = salaries[name];
            topEarner = name;
        }
    }
    return topEarner;
}
console.log(topSalary(salaries) + ' earns the most')

//QUESTION 10 //
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())

console.log(today.getHours() + ' hours have passsed so far today')
console.log((today.getHours()*60 + today.getMinutes()) + ' minutes have passed today')
console.log((today.getHours()*60*60 + today.getMinutes()*60 + today.getSeconds()) + ' seconds have passed today')

const birthday = new Date('1990-01-01')
let years = today.getFullYear() - birthday.getFullYear();
let months = today.getMonth() - birthday.getMonth();
let days = today.getDate() - birthday.getDate();
console.log('I am ${years} years, ${month} months and ${days} days old')

function daysInBetween(date1, date2) {
    let differenceMS = date2 - date1;
    let millisecondsPerDay = 24 * 60 * 60 * 1000;
    let differenceDays = Math.floor(differenceMS / millisecondsPerDay);
    return Math.abs(differenceDays);
}
console.log(`Days between ${birthday.toLocaleDateString()} and
${today.toLocaleDateString()}: ${daysInBetween(birthday. today)}`)
console.log(`Days between 2022-01-15 and 2023-01-01: ${daysInBetween(new Date('2023-01-01'), new Date('2022-01-15'))}`)