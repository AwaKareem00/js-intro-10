const { CharacterHelper, getRandomNumber } = require('../utils/MathHelper.js');

for(let i = 1; i <= 10; i++) {
    console.log(i);
}


// 100 to 0
for(let i = 100; i >= 0; i--) {
    console.log(i);
}


for(let i = 0; i <= 50; i++) { // i += 2
    if(i % 2 === 0) console.log(i);
}

for(let i = 0; i<= 10; i += 2) {
    console.log(i)
}


// 0 - 50
for(let i = 0; i <= 50; i++) { // i += 2
    if(i % 5 === 0) console.log(i);
}

for(let i = 0; i<= 50; i += 5) {
    console.log(i);
}

// 1 to 5 = 15

let sum = 0;

for(let i = 1; i <= 5; i++) {
    sum += i;
}

console.log(sum);

// sum from 10 to 15 result to 75
let sum1 = 0;

for(let i = 10; i <= 15; i++) {
    sum1 += i;
}

console.log(sum1);


// find the product from all the numbers from 1 to 6

let sum2 = 0;

for(let i = 1; i <= 6; i *= 6) {
    sum2 *= i;
}

console.log(sum2);


let product = 1;
for(let i = 1; i <= 6; i++) {
    product *= i;
}

console.log(product);


// print each character from TechGLobal school
let str = 'TechGlobal School'

for(let i = 0; i <= str.length - 1; i++) {
    console.log(str[i]);
}

// count the occurences of letter o in techglobal school
str = 'TechGlobal School'

let count0 = 0;

for(let i = 0; i <= str.length; i++) {
    if(str[i] === 'o' ) count0++;
}

console.log(count0);


// output odd numbers from 1 to 10 to 20

let r1 = getRandomNumber(10, 20);

console.log(`the random number is ${r1}`);

for(let i = 1; i <= r1; i += 2) {
    console.log(i);
}


/*
Generate a random number bt 1 to 10 (both inclusive
Find the product of all the numbers starting from 1 to randomly generated random

5       -> 1 * 2 * 3 * 4 * 5 -> 120
6       -> 1 * 2 * 3 * 4 * 5 * 6 -> 720
3       -> 1 * 2 * 3 -> 6
*/
let r2 = getRandomNumber(1, 10);

let prod = 1;

for(let i = 1; i <= r2; i++) {
    prod *= i;
}

console.log(r2);
console.log(prod);


/*
Print all the numbers between 2 random numbers in the range of 1 to 10 (both inclusive) in ascending order

ran1 ran2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5
*/

let ran1 = getRandomNumber(1, 10);
let ran2 = getRandomNumber(1, 10);

console.log(`The random numbers are = ${ran1} and ${ran2}`);

for(let i = Math.min(ran1, ran2); i <= Math.max(ran1, ran2); i++) {
    console.log(i);
}






















