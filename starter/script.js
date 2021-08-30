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

// Equality operators

// const favourite = prompt("what is your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23) {
//     console.log("Cool! 23 is an amazing number!");
// }

// Boolean Logic - AND, OR and NOT operators
// Logical Operators

const hasDriversLicense = false; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = true; // C

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive.....')
}

// Coding Challenge #3

// Dolphin scores

const dolphinScore1 = 96;
const dolphinScore2 = 108;
const dolphinScore3 = 89;

// Koala scores

const koalaScore1 = 99;
const koalaScore2 = 108;
const koalaScore3 = 89;

const dolphinAvg = (dolphinScore1 + dolphinScore2 + dolphinScore3)/3;
const koalaAvg = (koalaScore1 + koalaScore2 + koalaScore3)/3;

// check which team has more points
if (dolphinAvg > koalaAvg) {
    console.log(`Dolphin Average is higher with ${dolphinAvg} points!`)
} else if (koalaAvg > dolphinAvg) {
    console.log(`Koala Average is higher with ${koalaAvg} points`)
} else {
    console.log(`Teams tied with ${dolphinAvg} points`)
}

// check if teams have over 100 points

if (dolphinAvg > 100) {
    console.log(`Yay the Dolphin's got over 100 points.
    Points: ${dolphinAvg}`)
} else {
    console.log(`Oops, the Dolphin's didn't make it, the need more points.
    Points: ${dolphinAvg}`)
}

if (koalaAvg > 100) {
    console.log(`Yay the Koala's got over 100 points.
    Points: ${koalaAvg}`)
} else {
    console.log(`Oops, the Koala's didn't make it, they need more points.
    Points: ${koalaAvg}`)
}


// Switch Statement (becoming less and less used)

const day = 'monday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.group('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :)');
        break;
    default:
        console.log('Not a valid day!');
}

