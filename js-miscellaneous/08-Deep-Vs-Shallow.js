// SHALLOW COPY issue with nested arrays
const groups1 = [
    'John',
    ['alex', 'maria'],
    ['John', 'jane']
];
const groups2 = [...groups1];

console.log(groups1);
console.log(groups2);

groups1[1].pop(); // removes maria

console.log(groups1);
console.log(groups2);

// SHALLOW COPY issue with nested objects



