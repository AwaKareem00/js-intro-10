/*
create a functions which prints 'HI' when invoked.

*/
// this is a void zero argument function
function sayHi() {
    console.log('Hi');
}

sayHi(); // 'Hi'

/*
write a function which tales a string name as an argument 
and it returns 'Hello {name}!;

sayHello('Alex')   -> 'Hello, Alex!'
*/

function sayHello(name) {
    return `Hello, ${name}`;
}

let result = sayHello('Bermet');

console.log(result); // Hello, bermet

console.log(sayHello('john')); // Hellp, John

/*
Write a function named as greet which takes two argument as name and greeting and outputs '${greeting}, {name}!'

greet('Good Morning', 'John'); // Output: 'Good Morning, John!'
greet('Hello', 'Ali'); // Output: 'Hello, Ali!'
greet('Hi', 'Hicran'); // Output: 'Hi, Hicran!'
*/
function greet(greeting, name) {
    console.log(`${greeting}, ${name}`);
}

greet('Good Morning', 'John!');
greet('Hi', 'Ali!');
greet('HI', 'Hicran!');

/*
Write a function named as sum which takes 2 number arguments and return their sum

sum(3, 5)   -> 8
sum(4, 7)   -> 11
sum(-2, 3)   -> 1
*/

function sum(num1 , num2) {
    let result = num1 + num2;
    return result;
}

console.log(sum(3, 5));
console.log(sum(4, 7));
console.log(sum(-2, 3));


function product(num1, num2, num3) {
    let result = num1 * num2 * num3;
    return result;
}

console.log(product(2, 4, 5));
console.log(product(3, 7, 6));
console.log(product(9, 0, 9));


