// = operator is used ofr concatataion and division
// 
/*
number + number        -> addition      number
number + string        -> concetatation  string
string + number        ->    string
string + string        -> string
*/
console.log(3 + 2 + 1); //6
console.log(3 + 2 + '1'); // '51'
console.log(3 + '2' + 1); // '321'

console.log('5' - 2); // 3 number
console.log('5' * '3'); // 15 number

console.log('5a' * 2); // NaN = Not a Number

console.log(2 + 3 * 2 - 'hello'); // Nan

console.log(true + 5); // 6 TRUE = 1 FALSE = 0
console.log(false * 5); // 0

console.log('abc' + true); // abcTrue
console.log('123' + false); //123False
console.log('true' + 123); // true123

