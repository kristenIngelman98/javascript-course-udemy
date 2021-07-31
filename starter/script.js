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
console.log(markHigherBMI);


