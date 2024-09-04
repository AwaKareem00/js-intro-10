const arr1 = [ 1, 2, 3 ];
const arr2 = arr1;

console.log(arr1);
console.log(arr2);

arr1.push(4);

console.log(arr1);
console.log(arr2);

//primitives are always immutable
let str1 = 'John';
let str2 = str1;

console.log(str1);
console.log(str2);

str1 = 'James'

console.log(str1);
console.log(str2);


//copy your array to prevent mutability using spread

const numbers1 = [ 1, 2, 3, 4, 5 ];
const numbers2 = [ ...numbers1 ];

console.log(numbers1);
console.log(numbers2);

numbers1.push(6);

console.log(numbers1);
console.log(numbers2);


//copy your array to prevent mutability using loop
const booleans1 = [ true, false, true ];
const booleans2 = [];

booleans1.forEach((el) => {
    booleans2.push(el);
});

console.log(booleans1);
console.log(booleans2);

booleans1.push('Hello');

console.log(booleans1);
console.log(booleans2);


// spread operator or loops does not work in case of nested arrays or objects

const groups1 = [
    'John',
    ['alex', 'maria'],
    ['John', 'jane']
];
const groups2 = [...groups1];

console.log(groups1);
console.log(groups2);

groups1.push('Mark');
groups1[1][1] = 'Jessica';

console.log(groups1);
console.log(groups2);

// we call this copying with loops or spread operator SHALLOW COPY
// DEEP COPY: safer way to prevent mutability and can be acheived using JSON