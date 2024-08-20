const animals = [ 'Cat', 'Dog', 'Cow', 'Monkey', 'Bird' ];

const animalsPartial1 = animals.slice(0, 3);
const animalsPartial2 = animals.slice(2, 4);

console.log(animals); 
console.log(animalsPartial1); // [ 'Cat', 'Dog', 'Cow' ]
console.log(animalsPartial2) // [ 'Cow', 'Monkey' ]

// Get last 3 elements 
const animalsPar3 = animals.slice(2);
const animalsPar4 = animals.slice(-3);

console.log(animalsPar3);
console.log(animalsPar4);

console.log(animals.slice(6, 10)); // []
console.log(animals.slice(2, 3)); // [ 'Cow' ]

const numbers = [5, -2, 10, 20, 50, -10];

console.log(Math.min(...numbers.slice(0, 3)));
console.log(Math.max(...numbers.slice(3)));

const result = [...numbers.slice(3), ...numbers.slice(0, 3)];
console.log(result); // [ 20, 50, -10, 5, -2, 10 ]


// SPLICE()
// pop() removes last
// shift removes first
// push adds to end
// unshift adds to start

const cities = [ 'Chicago', 'Rome', 'Berlin'];

// adding an element in the middle
cities.splice(1, 0, 'LA');

console.log(cities);

// adding multiple elements in the middle of an array
cities.splice(2, 0, 'Miami', 'Paris');

console.log(cities);

// removing elements from the middle
cities.splice(4, 1);

console.log(cities);

// Remove some elements and add some new ones
cities.splice(1, 2, 'Des plaines', 'Porto', 'Orland Park');

console.log(cities);


