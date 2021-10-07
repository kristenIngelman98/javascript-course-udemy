'use strict';

function calcAge(birthYear) {
    const age = 2021 - birthYear;
    
    function printAge() {
        const output = `${firstName} is ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            const str = `Oh, you are a millenial, ${firstName}`
            console.log(str);
        }
    }

    printAge();
    return age;
}

const firstName = 'Kristen';
calcAge(1995);