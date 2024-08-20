const names = [ 'Alex', 'John' ];

console.log(names);

// adding elements o the end of an array

// OLDDDDDDDDD
names [2] = 'Kareem';
names [3] = 'Boom';

// NEWWWW WAYYYY
names.push('Kareem',);

console.log(names);

names.push('James', 'Sam', 'Tim');

console.log(names);

names.pop();
names.pop();
names.pop();
names.pop();
names.pop(); 

console.log(names);


const numbers = [ 10, 20, 30];
console.log(numbers);

// adding elements to the beginning of an array
numbers.unshift(99);

console.log(numbers);

numbers.unshift(15, 23);

console.log(numbers);

// removing elemnts from the begining of an array

numbers.shift();
numbers.shift();
numbers.shift();

console.log(numbers);


numbers.shift();
numbers.shift();
numbers.shift();
numbers.shift();

console.log(numbers.shift(numbers));
