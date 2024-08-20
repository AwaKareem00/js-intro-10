// INTERVIEW QUESTION: how do you make sure if a variable is an array

const arr = [];

console.log(typeof arr); // object
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof new Date()); // object


//you can use Array.isArray() methof to check if the variable is array
console.log(Array.isArray(arr)); // true
console.log(Array.isArray({})); // false
console.log(Array.isArray(new Date())); // false

