const numbers = [ 5, 10, 5, 10, 25, 100, 77, 5, 5 ];


// we can check if the array contains something cific

numbers.includes(5); // true
numbers.includes(20); // false
numbers.includes(77); // true

// indexOf() vs lastIndexOf()
console.log(numbers.indexOf(5)); // 0
console.log(numbers.lastIndexOf(5)); // 8

console.log(numbers.indexOf(10)); // 1
console.log(numbers.lastIndexOf(10)); // 3

console.log(numbers.indexOf(25)); // 4
console.log(numbers.lastIndexOf(25)); // 4


// hpw tp check if an array contains an ele,emt without includes()

const cities = ['Chicago', 'Berlin', 'Rome', 'Brugge'];

console.log(cities.includes('Berlin')); // true
console.log(cities.indexOf('Berlin')); // 1
console.log(cities.indexOf('Berlin') !== -1); // true 

cities.includes('Berlin', 3); // false, LOOK FOR BERLIN AFTER INDEX OF 3

// check the array if ot contains an elemnt in the second half of the array
const array = [10, 20, 90, 25, 40, 15, 5, 0, 10, 20, 90];

arr.includes(30); // true
arr.includes(30, arr.length / 2);

