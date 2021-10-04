// activating strict mode
// catches undefined variables and has reserved words
'use strict';

let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :)');

// Functions
// Piece of code we can resuse over and over again

function logger() {
    console.log('My name is Kristen')
}

logger();
logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);


// Function Declarations vs Expressions

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);


// Arrow Function (shorter and faster to write) ES6

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement(1998, 'Kristen'));


// Functions calling other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

// Reviewing Functions
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement =  function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} has already retired!`
    }
  
}

console.log(yearsUntilRetirement(1998, 'Kristen'));
console.log(yearsUntilRetirement(1950, 'Mike'));

// Coding Challenge #1

const calcAverage = (score1, score2, score3) => {
    const average = (score1 + score2 + score3)/3;
    return average;
}

const avgKoalas = (calcAverage(23, 34, 27)); // Koala Team Scores
const avgDolphins = (calcAverage(85, 54, 41)); // Dolphin Team Scores

const checkWinner = (avgKoalas, avgDolphins) => {
    if (avgKoalas > (avgDolphins * 2)) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else if (avgDolphins > (avgKoalas * 2)){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else {
        console.log("No winner.");
    }
}

checkWinner(avgKoalas, avgDolphins);

// Arrays

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2009, 2020);
console.log(years);

// Basic Array Operators (Methods)

friends.push('Kristen');
console.log(friends);

friends.unshift("John");
console.log(friends);

friends.pop(); //removes the last element
const popped = friends.pop();
console.log(friends);

friends.shift(); //removes first element
console.log(friends);

console.log(friends.indexOf('Peter'));
console.log(friends.includes('Bob'));

// can use includes method to write conditionals

// Challenge #2

function calcTip(bill) {
    
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
    bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

const total = [(bills[0] + calcTip(bills[0])),(bills[1] + calcTip(bills[1])),(bills[2] + calcTip(bills[2])) ]
console.log(bills, tips);
console.log(total);

// Objects - identify key value pairs

const jonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    age: 22,
    friends: ['abby', 'danielle', 'katie'],
    hasDriversLicense: true,

    calcAge: function(birthYear) {
        return 2037 - birthYear;
    }
}

console.log(jonas.firstName);
console.log(jonas.friends[0]);

const nameKey = 'Name';
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

const interestedIn = 
prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, friends');
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn])
} else {
    console.log('Wrong request! Choose between firstName, lastName, age and friends.');
}

jonas.location = 'Bermuda';
jonas['twitter'] = '@jonas';
console.log(jonas);

// Challenge

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

class TaxCalculator {
    static calculate(total) {
        console.log(total * 0.05)
        return total * 0.05;
    }
}

TaxCalculator.calculate(50);