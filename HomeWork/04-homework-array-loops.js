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
const countries = [ 'Germany', 'Argentina', 'Ukraine', 'Romania' ];

console.log(countries);
console.log(countries.sort());
console.log('\n-------------------TASK09---------------------\n');
const cartoonDogs = [ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ];

console.log(cartoonDogs);

console.log(cartoonDogs.includes('Pluto'));
console.log('\n-------------------TASK10---------------------\n');
const cartoonCats = [ 'Garfield', 'Tom', 'Sylvester', 'Azrael' ];

console.log(cartoonCats.sort());

for (const cat of cartoonCats) {
    if (cat === 'Garfield' && cat === 'Felix') {
       console.log(true);
    }
    else console.log(false);
    break;
}
console.log('\n-------------------TASK11---------------------\n');
const numbers = [ 10.5, 20.75, 70, 80, 15.75 ];

console.log(numbers);

for(const number of numbers) {
    console.log(number);
}
console.log('\n-------------------TASK12---------------------\n');
const objects = [ 'Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ];
let count = 0

console.log(objects);

for(const object of objects) {
    if(object.toUpperCase().startsWith('B') || object.toUpperCase().startsWith('P')) count++;
}
console.log(count);

let counter = 0;

for (const object of objects) {
    if(object.toLowerCase().includes('book') || object.toLowerCase().includes('pen')) counter++;
}
console.log(counter);
console.log('\n-------------------TASK13---------------------\n');
const numbs = [ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ];

let is10 = 0; 
let moreThan10 = 0; 
let lessThan10 = 0;

for (let number of numbs) {
    if (number < 10) lessThan10++;
    else if (number > 10) moreThan10++;
    is10++;
}

console.log(numbs);
console.log(`Elements that are more than 10 = ${moreThan10}`);
console.log(`Elements that are less than 10 = ${lessThan10}`);
console.log(`Elements that are 10 = ${is10}`);
console.log('\n-------------------TASK14---------------------\n');
const arr1 = [ 5, 8, 13, 1, 2 ];
const arr2 = [ 9, 3, 67, 1, 0 ];

console.log(arr1);
console.log(arr2);

let arr3 = [];

for(let i = 0; i <= arr1.length - 1; i++) {
    arr3.push(Math.max(arr1[i], arr2[i]))
}

console.log(`1st array is = [ ${arr1} ]`);
console.log(`2nd array is = [ ${arr2} ]`);
console.log(`3nd array is = [ ${arr3} ]`);
console.log('\n-------------------TASK15---------------------\n');
function firstDupe(array) {

    for (let i = 0; i < array.length; i++) {
        for (let k = i + 1; k < array.length; k++) {
            if (array[i] === array[k]) return array[i];
        }
    }
    return -1;
};

console.log(firstDupe([3, 7, 10, 0, 3, 10]));
console.log(firstDupe([5, 7, 7, 0, 5, 10]));
console.log(firstDupe([5, '5', 3, 7, 4]));
console.log(firstDupe([123, 'abc', '123', 3, 'abc']));
console.log(firstDupe([1, 2, 3]));
console.log(firstDupe(['foo', 'abc', '123', 'bar']));
console.log('\n-------------------TASK16---------------------\n');
function getDupes(array) {

    const container = [];
    const duplicates = [];

    for(let obj of array){
        if(container.includes(obj) && !duplicates.includes(obj)) duplicates.push(obj)
        else container.push(obj)
    }
    return duplicates;

};

console.log(getDupes([0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(getDupes([1, 2, 5, 0, 7]));
console.log(getDupes(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo']));
console.log(getDupes(['foo', '12', 12, 'bar', 'a']));
console.log('\n-------------------TASK17---------------------\n');
function reverseSW(str) {

    let strAArr = str.trim().split(" ");

    for(let i = 0; i < strAArr.length; i++) {
        strAArr[i] = strAArr[i].split("").reverse().join("");
    }

    return strAArr.join(" ");
}

console.log(reverseSW("Hello"));
console.log('\n-------------------TASK18---------------------\n');
function getEvens(num1, num2){

    let evens = [];
    let greaterNum = Math.min(num1, num2);
    let smallerNum = Math.max(num1, num2)

    for(let i = smallerNum; i <= greaterNum; i++){
        if(i % 2 === 0) evens.push(i);
    };

    return evens;
};

console.log(getEvens(2,7));
console.log(getEvens(17,5));
console.log(getEvens(4,4));
console.log(getEvens(3,3));
console.log('\n-------------------TASK19---------------------\n');
function getMult5(num1, num2) {

    let divisBy5 = [];

    for(i = Math.max(num1, num2); i >= Math.min(num1, num2); i--){
        if(i % 5 === 0) divisBy5.push(i);
    };

    return divisBy5;
};

console.log(getMult5(3,17));
console.log(getMult5(23,5));
console.log(getMult5(5,5));
console.log(getMult5(2,4));
console.log('\n-------------------TASK20---------------------\n');
function fizzB(num1, num2) {

    let arr = [];

    for(let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++){
        if(i % 5 === 0 && i % 3 === 0) arr.push('FizzBuzz');
        else if(i % 5 === 0) arr.push('Buzz');
        else if(i % 3 === 0) arr.push('Fizz');
        else arr.push(i);
    }
};

console.log(fizzB(13,18));
console.log(fizzB(12,5));
console.log(fizzB(5,5));
console.log(fizzB(9,6));