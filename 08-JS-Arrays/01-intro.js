// Array

const myNumberArray = [ 1, 2, 3, 4, 5 ];

// Print the array
console.log(myNumberArray);

// size of array
let size = myNumberArray.length;

console.log('The size of the array is =', size);

// accesing parts
let elementAtIndex2 = myNumberArray[2]; // 3

console.log(elementAtIndex2); // 3

myNumberArray[4] = 99;

console.log(myNumberArray[4]);

// get the last element
console.log(myNumberArray[myNumberArray.length - 1]); // 99

// creating an array using constructor
const myWords = new Array('I', 'Like', 'Arrays');

console.log(myWords);

const arr = []; // empty array or new array()
arr.length; // 0

arr[5] = 10;
console.log(arr);
console.log(arr.length); // 6


// mix data in an array

const mix = [ 10.5, 'Hello', null, undefined, 5, NaN, 2 == '2' ];
console.log(mix.lenght); // 8

mix[1].length; // 5
mix[1].slice(0, 2); // He
