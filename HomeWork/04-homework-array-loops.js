const { getRandomNumber} = require('../utils/MathHelper.js')

console.log('\n-------------------TASK01---------------------\n');
for(let i = 1; i <= 100; i++) {
    if(i % 7 === 0) console.log(i);
}
console.log('\n-------------------TASK02---------------------\n');
for(let i = 1; i <= 50; i++) {
    if(i % 2 === 0 && i % 3 === 0) console.log(i);
}
console.log('\n-------------------TASK03---------------------\n');
for(let i = 100; i >= 50; i--) {
    if(i % 5 === 0) console.log(i);
}
console.log('\n-------------------TASK04---------------------\n');
for(let i = 0; i <= 7; i++) {
    console.log(`The square of ${i} is = ${i ** 2}` );
}
console.log('\n-------------------TASK05---------------------\n');
let sum = 0;
for(let i = 0; i <= 10; i++) {
    sum += i;
}
console.log(sum);
console.log('\n-------------------TASK06---------------------\n');
let ranNum = getRandomNumber(1, 10)
let factorial = ranNum;


for (let i = ranNum - 1; i > 1; i--) {
    factorial *= (i);
}
if(factorial === 0) factorial = 1;
console.log(factorial);
console.log('\n-------------------TASK07---------------------\n');
let attempts = 0;
let ranNum1;

do {
    ranNum1 = getRandomNumber(1, 100);
    attempts++;
}while(ranNum1 % 5 !== 0);

console.log(`The random number is ${ranNum1} and it took ${attempts} attempt to generate it`);
console.log('\n-------------------TASK08---------------------\n');
console.log('\n-------------------TASK09---------------------\n');
console.log('\n-------------------TASK10---------------------\n');
console.log('\n-------------------TASK11---------------------\n');
console.log('\n-------------------TASK12---------------------\n');
console.log('\n-------------------TASK13---------------------\n');
console.log('\n-------------------TASK14---------------------\n');
console.log('\n-------------------TASK15---------------------\n');
console.log('\n-------------------TASK01---------------------\n');
console.log('\n-------------------TASK01---------------------\n');
console.log('\n-------------------TASK01---------------------\n');
console.log('\n-------------------TASK01---------------------\n');
console.log('\n-------------------TASK01---------------------\n');