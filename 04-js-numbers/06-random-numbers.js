// get a randome number between 0 and 10 ---> 0 inclusive and 10 exclusive

let ranNum1_9 = Math.random() * 30;

console.log(ranNum1_9); // 
console.log(Math.floor(ranNum1_9)); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
console.log(Math.ceil(ranNum1_9)); // 
console.log(Math.round(ranNum1_9)); // 
console.log(Math.trunc(ranNum1_9)); // 

// get a randome number between 1 and 10 ---> 0 inclusive and 10 inclusive
let ranNum1_10 = Math.random() * 10;

console.log(Math.floor(ranNum1_10));
console.log(Math.floor(ranNum1_10) === 5);


/* get a random number between 0-25 -> both included
1. generate a random number between 0 and ]
2. multiply this number with the count of desired numbers
    largerNumber - smallerNumber + 1 
*/
let ranNum0_25 = Math.random() * 26;

console.log(Math.floor(ranNum0_25))

// get a random number between 13 and 27 both included
/*
if first number isnt 0
1. generate a random number between 0-1
2. multiply by desired numbers meaning any you can get in your range
3. floor results
4. add smaller number to results
*/

let ranNum13_27 = Math.random() * 15 + 13;

console.log(Math.floor(ranNum13_27));

// get a random nmber between 14 and 19 -> 14 inclusive but 19 exclusive

let r1 = Math.floor(Math.random() * (18 - 14 + 1)) + 14;

console.log(Math.floor(r1));

let r2 = Math.floor(Math.random() * 5) + 14;

console.log(Math.floor(r2));


