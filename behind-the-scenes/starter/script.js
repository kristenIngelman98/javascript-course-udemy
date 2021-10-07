'use strict';

// function calcAge(birthYear) {
//     const age = 2021 - birthYear;
    
//     function printAge() {
//         const output = `${firstName} is ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             const str = `Oh, you are a millenial, ${firstName}`
//             console.log(str);
//         }

//         function add(a,b) {
//             console.log(a+b)
//             return a + b;
//         }

//         add(5,4); //can have this outside the block scope when 'use strict' is turned off
//     }

//     printAge();
//     return age;
// }

const firstName = 'Kristen';
// calcAge(1995);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

console.log(this); //window object

// const calcAge = function(birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this)
// }

const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear);
    console.log(this); //points to window - from parent scope *
}

// calcAge(1991);
calcAgeArrow(1998);

const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year)
    }
};

jonas.calcAge();

const matilda = {
    year: 2017,
}

matilda.calcAge = jonas.calcAge;
matilda.calcAge();