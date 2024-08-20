/*
Write a function which takes a number and return true if the number is even 
or return false if the number is odd

isEven(4)   -> true
isEven(3)   -> false
isEven(0)   -> true
isEven(-2)  -> true
isEven(-7)  -> false

EVEN: number is divisible by 2      -> number % 2 === 0
ODD: number is not divisible by 2   -> number % 2 !== 0
*/

function isEven(num) {
   return num % 2 === 0;
}

console.log(isEven(5)); // false
console.log(isEven(10)); // true

function isOdd(num) {
    return num % 2 !== 0;
}

/*
Write a function named initials which takes 2 arguments as fname and lname and return initials

initials('John', 'Doe')      -> 'J.D.'
initials('Adam', 'Smith')    -> 'A.S.'
initials('Max', 'Smith')     -> 'M.S.'
*/

console.log(isOdd(5)); // true
console.log(isOdd(10)); // False

function initials(fname, lname) {
    return `${fname [0]}.${lname[0]}.`
}

console.log(initials('John', 'Doe'));
console.log(initials('Adam', 'Smith'));
console.log(initials('Max', 'Smith'));

/*
Write a function named inits which takes a fullname and return initials

inits('John Doe')      -> 'JD'
inits('Adam Smith')    -> 'AS'
inits('Max Smith')     -> 'MS'
*/

function inits(fullname) {
    const words = fullname.split(' ');
    return (words[0][0] + words[1][0]).toUpperCase();
}

console.log(inits('John Doe'));
console.log(inits('adam Smith'));
console.log(inits('Max smith'));



/*
Write a function that takes 2 number arguments and return a random number between these numbers
Both numbers are included 
Be careful as the numbers given can be different considering min, max

getRandomNumber(3, 5)       -> 
getRandomNumber(5, 3)       -> 
getRandomNumber(-5, 15)     -> 

Math.floor(Math.random() * (max - min + 1)) + min
*/

function getRandomNumber(number1, number2) {
    const max = Math.max(number1, number2); 
    const min = Math.min(number1, number2);

    return Math.floor(Math.random() * (max - min + 1)) + min
};
console.log(getRandomNumber(3, 5));
console.log(getRandomNumber(5, 3));
console.log(getRandomNumber(-5, 15));




function getRandomNumber1 (nuum1, nuum2) {
    let max = Math.max(nuum1, nuum2);
    let min = Math.min(nuum1, nuum2);

    return Math.floor(Math.random() * (nuum1 - nuum2 + 1)) + nuum1;
}

console.log(getRandomNumber1(3, 5));
console.log(getRandomNumber1(5, 3));
console.log(getRandomNumber1(-5, 15));