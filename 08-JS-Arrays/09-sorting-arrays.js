const names = [ 'alex', 'Adam', 'Jane', 'John', 'alexander'];

// Adam, Jane, John, alex, alexander

const sortedNames = names.sort();

console.log(names);
console.log(sortedNames);

const numbers = [ 1, 40, 2, 3, 10, 100 ];

// 1, 2, 3, 10, 40, 100 -> our expectations

const numbersSorted = numbers.sort();

console.log(numbers);
console.log(numbersSorted);


const nums = [ 1, 40, 2, 3, 10, 100 ];

nums.sort((a, b) => a - b);

console.log(nums);

const arr = [ 1, 2, [1, 2, 3, 4 ] ];

console.log(arr.length); // 3
console.log(arr[2]); //[1, 2, 3, 4 ]

console.log(arr[2].length); // 4

const batch10Students = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];

console.log(batch10Students);
console.log(batch10Students.length);

// second student from second array

batch10Students[1][1]; // 5
batch10Students[2][2]; // 8
batch10Students[0][0]; // 1
batch10Students[2][1]; // 7

batch10Students.flat();
