const numbers = [3, 4, 7, 3, 2, 2, 7];

// Find the sum of numbers that has even index -> 3 + 7 + 2 + 7 -> 19

let sum = 0;

for(let i = 0; i < numbers.length; i++) {
    if(i % 2 === 0) sum += numbers[i];
}

console.log(sum);

// Find the multiplication of numbers that has odd index -> 4 * 3 * 2 -> 24

let prod = 1;

for(let i = 0; i < numbers.length; i++) {
    if(i % 2 !== 0) prod *= numbers[i];
}

console.log(prod);



