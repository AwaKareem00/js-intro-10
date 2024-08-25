// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8 …. 50

let i = 0;

while(i <= 50) {
    if(i % 2 === 0) {
        console.log(i);
    }
    i++;
}

let num = 1;
let count = 0


while(num <= 10) {
    if(num % 2 === 0) {
        console.log(num)
        count++;
    }
    num++;
}

console.log(`there is ${count} even numbers`);


// Find sum of the numbers starting from 3 to 7 (both inclusive) -> 3 + 4 + 5 + 6 + 7 -> 25

let sum = 0;
let num1 = 3;

while(num1 <= 7) {
    sum += num1;
    num1++;
}

console.log(sum);