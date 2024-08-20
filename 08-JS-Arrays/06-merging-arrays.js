const arr1 = [ 1, 2 ], arr2 = [ 55, 56 ], arr3 = [ 101, 102, 103 ];
const a1a2 = arr1.concat(arr2);
const a1a2a3 = arr1.concat(arr2, arr3);

console.log(arr1);
console.log(arr2);
console.log(arr3);

console.log(a1a2);
console.log(a1a2a3);

// we cannot use + opperators for concatenation of arrays

// we can also use spread operator to concatenate arrays
const obj1 = [ 'Watch', 'Phone', 'Laptop' ];
const obj2 = [ 'Camera', 'Desk', ];


console.log(obj1);
console.log(...obj1);

const obj3 = obj1.concat(obj2);
const obj4 = [...obj1, ...obj2];

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);

const nums = [ 10, 20, 30, 40, 50, 99, 1, 18 ];

console.log(Math.max(...nums));
console.log(Math.min(...nums));



