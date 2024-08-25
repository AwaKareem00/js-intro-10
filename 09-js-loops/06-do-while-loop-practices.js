const { getRandomNumber } = require('../utils/MathHelper.js');


let attempts = 0;
let written = 3;
let guess;

do {
  guess = getRandomNumber(1, 10);
  attempts++;
} while (guess !== written);
let time = attempts > 1 ? 'times' : 'time';
console.log(`We have got ${written} after ${attempts} ${time}!`);


// Generate an even number bt 1 and 10
// Calculate how many attempts it takes to generate it



let att = 0;
let ran;

do{
    ran = getRandomNumber(1, 10);
    att++;
} while(ran % 2 !== 0);

console.log(`We got an even after ${att} times!`);


att = 0;
let ranNum = 0;

while(ranNum % 2 === 0) {
    ranNum = getRandomNumber(1, 10);
    att++;
}

console.log(`We got an odd after ${att} times!`);