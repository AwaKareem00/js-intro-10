const numbers = [ 3, 4, 7, 3, 2, 2, 7 ];
// Find the sum of all numbers         -> 28
// Find the average of the numbers     -> 4
console.log('\n-----------TASK1------------\n');
let sum = 0;

for(const num of numbers) {
    sum += num;
}

console.log(sum);
console.log(sum / numbers.length);

// Find the product of all the numbers starting from the index 3 -> 3 * 2 * 2 * 7 -> 84
console.log('\n-----------TASK2------------\n');

let prod = 1;

for(let i = 3; i < numbers.length; i++) {
    prod *= numbers[i];
}

console.log(prod);

// for...of loop
prod = 1;

for(const number of numbers.slice(3)) {
    prod *= number;
}

console.log(prod);