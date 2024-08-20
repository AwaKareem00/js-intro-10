/*
    'toyota' 'tesla' 'honda' 'bmw' 
    7, 6, 5, 25
*/

let favNumber = 7;
let firstKidName = 'alex';

let cars = ['toyota', 'tesla', 'honda', 'bmw'];
let numbers = [7, 6, 5,  100, 25];

console.log(cars);
console.log(numbers);

// getting a particular element from array ussing indexx
// index pf an element in a array always starts with zerp

console.log(cars [2]);

console.log(numbers [1]);

// updating the excising e;ements in an array

cars[0] = 'gmc';
console.log(cars);

cars[3]; // 'bmw'

let myFavCar = cars[3];

// getting the size of an array
console.log(cars.length);
console.log(numbers.length);

const students = [ 'alex', 'john', 'jane', 'maria'];

students[2] = 'jessie'; // allowed since ypu are changin an element not the main thing

students[4] = 'data';
console.log(students);

// creating an array with a constructor

const array = new Array ('maria', 25, null, undefined, symbol('hello'), 25n);
const array2 = ['maria', 25, null, undefined, symbol('hello'), 25n]; // not reccomended


console.log(typeof array);
console.log(typeof array2);
console.log(typeof cars);
console.log(typeof numbers);

//accesing the first and last element in an array dianmically

const nums = [10, 20, 30 ,40 ,50, 60, 70];

let first = nums[0]; //
let last = nums[nums.length - 1];

console.log(first);
console.log(last);











