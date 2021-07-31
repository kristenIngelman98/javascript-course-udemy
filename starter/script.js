let js = 'amazing';
console.log("hello")

const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const markBMI = (markMass/(markHeight * markHeight));
const johnBMI = (johnMass/(johnHeight * johnHeight));
console.log("Mark's BMI: " + markBMI);
console.log("John's BMI: " + johnBMI);

const markHigherBMI = markBMI > johnBMI;
const johnHigherBMI = johnBMI > markBMI;

// console.log(markHigherBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higher than John's! Mark's BMI is: ${markBMI}.`)
} else {
    console.log(`John's BMI is higher than Mark's! John's BMI is: ${johnBMI}.`)
}


// String Literals

const firstName = "Kristen";
const kristenNew = `I'm ${firstName}`;
console.log(kristenNew);
console.log('String with \n\
multiple \n\
lines');

// or just use String Literals
console.log(`String
with
multiple 
lines`);

// if/else statements

const age = 15;

// boolean value
// const isOldEnough = age >= 18;

if(age >= 18) {
    console.log('Sarah can start driving license');
} else {
    console.log('Sarah is not old enough to drive')
}

// Type Conversion and Coercion (manually change type and automatically change type)

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(String(23));

// Truthy and Falsy Values
// Falsy values: 0, ', undefined, null, NaN - will be converted to false

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Kristen'));
console.log(Boolean(''));

const money = 0;

if (money) {
    console.log("Don't spend it all")
} else {
    console.log("you should get a job!")
}