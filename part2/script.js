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