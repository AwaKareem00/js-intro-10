const { getRandomNumber } = require('../utils/MathHelper.js');


let written = 1;
let guess = undefined;
let attempts = 0;

while(written !== guess) {
    guess = getRandomNumber(1, 10);
    console.log(guess);
    attempts++;
}

console.log(`We got the matching number after ${attempts} attempts!`);



