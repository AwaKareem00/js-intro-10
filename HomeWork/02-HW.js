console.log('\n-------------------TASK01---------------------\n');

let str1 = '5', str2 = '2';

let str01 = Number(str1), str02 = Number(str2);

console.log(`The sum of 5 and 2 = ${str01 + str02}`)
console.log(`The product of 5 and 2 = ${str01 * str02}`)
console.log(`The division of 5 and 2 = ${str01 / str02}`)
console.log(`The subtraction of 5 and 2 = ${str01 - str02}`)
console.log(`The remainder of 5 and 2 = ${str01 % str02}`)
console.log(`The exponentiation of 5 and 2 = ${str01 ** str02}`)

console.log('\n-------------------TASK02---------------------\n');

let s1 = '200', s2 = '-50';

let  s01 = Number(s1), s02 = Number(s2);

let ave = s01 + s02;

console.log(`The greatest value is = ` + (Math.max(s01, s02)));
console.log(`The smallest value is = ` + (Math.min(s01, s02)));
console.log(`The average value is = ${ave / 2}`);
console.log(`The absolute difference = ${Math.abs(s01 - s02)}`);

console.log('\n-------------------TASK03---------------------\n');

let ranNum1 = Math.ceil((Math.random() * 50)), ranNum2 = Math.ceil((Math.random() * 50))

console.log(ranNum1);
console.log(ranNum2);

console.log(`The absolute difference between numbers is = ${Math.abs(ranNum1 - ranNum2)}`);

console.log('\n-------------------TASK04---------------------\n');

let randNum1 = Math.ceil((Math.random() * 50)), randNum2 = Math.ceil((Math.random() * 50)), randNum3 = Math.ceil((Math.random() * 50)), randNum4 = Math.ceil((Math.random() * 50)), randNum5 = Math.ceil((Math.random() * 50))

console.log(randNum1, randNum2, randNum3, randNum4, randNum5);
console.log(Math.max(randNum1, randNum2, randNum3, randNum4, randNum5));
console.log(Math.min(randNum1, randNum2, randNum3, randNum4, randNum5));

let max = Math.max(randNum1, randNum2, randNum3, randNum4, randNum5);
let min = Math.min(randNum1, randNum2, randNum3, randNum4, randNum5);

console.log(`The max value = ${max}`);
console.log(`The min value = ${min}`);

console.log('\n-------------------TASK05---------------------\n');

let rn1 = Math.floor((Math.random() * (51) + 50)), rn2 = Math.floor((Math.random() * (51) + 50)), rn3 = Math.floor((Math.random() * (51) + 50));

console.log(`The number 1 = ${rn1}`);
console.log(`The number 2 = ${rn2}`);
console.log(`The number 3 = ${rn3}`);
     
console.log(`The sum of numbers = ${rn1 + rn2 + rn3}`)

console.log('\n-------------------TASK06---------------------\n');


let r1 = Math.floor ( Math.random() * (100)) + 1 
let r2 = Math.floor ( Math.random() * (100)) + 1 
let r3 = Math.floor ( Math.random() * (100)) + 1 

console.log((r1 > 25) && (r2 > 25) && (r3 > 25));

console.log('\n----------------TASK07------------------------\n');

let person = 'Awadallah';

console.log(`
    The length of the name is = ${person.length}
    The first character in the name is = ${person[0]}
    The last character in the name is = ${person[person.length -1]}
    The first 3 characters in the name are = ${person.slice(0, 3)}
    The last 3 characters in the name are = ${person.slice(-3)}`);