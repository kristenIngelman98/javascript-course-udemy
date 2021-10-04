// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celcuis',
        // FIX - convert String to number
        value: Number(prompt('Degrees celsius'))
    }

    console.table(measurement);

    const kelvin = measurement.value + 273;
    return kelvin;
};

console.log(measureKelvin());

// Coding Challenge #1
const printForecast = function(arr) {
    console.log(`... ${arr[0]} degrees C in 1 days ... ${arr[1]} degrees C in 2 days ... ${arr[2]} degrees C in 3 days ...`);


}

printForecast([17,21,23]);