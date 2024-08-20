let items = 'Apples, Oranges, Bananas, Eggs, Milk;';

console.log(items.split(','))
console.log(items.split(' '))
console.log(items.split(', '))

let sent = 'I like JavaScript'

console.log(sent.split(' '));
console.log(sent.split('like'));

console.log('10 | 20 | 30 | 40 | 50'.split(' | '));

let str = 'I like JavaScript';

console.log(str.split(' ')[1]);
console.log(str.split(' ').length);

let smth = 'hello';

console.log(smth.split(''));

const result = smth.split('');

console.log(typeof result); // object

console.log(Array.isArray(result)); // true




/*
TASK: used to split string into array elements with the given seperator
RETURNS: returns an array of elements
ARGUMENTS: takes a string argument as a seperator, an optional limit argument
change: no change
non static

*/


