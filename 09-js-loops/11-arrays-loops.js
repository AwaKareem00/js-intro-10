const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

// Count how many positive numbers you have in the array -> 4

console.log('\n-----------TASK1------------\n');
let countPos = 0;

for(const numb of numbers) {
    if(numb > 0) countPos++;
}

console.log(countPos);

console.log('\n-----------TASK2------------\n');
let countNeg = 0;

for(const numb of numbers) {
    if(numb < 0) countNeg++;
}

console.log(countNeg);

console.log('\n-----------TASK3------------\n');
let countEven = 0;

for(const even of numbers) {
    if(even % 2 === 0) countEven++;
}

console.log(countEven);


console.log('\n-----------TASK4------------\n');
let countOdd = 0;

for(const Odd of numbers) {
    if(Odd % 2 !== 0 && Odd > 0) countOdd++;
}

console.log(countOdd);

