const { getRandomNumber } = require('../utils/MathHelper.js');

/*
Generate a random number between 1 and 10 both inclusive
And check if the number is 7
If it is 7, print true
Otherwise, print false

PSEUDO CODE 
1. Generate a random number
2. Check if it 7 or not
3. Depending on the condition print the result
*/

let r1 = getRandomNumber(1, 10);

console.log('random number =', r1);

if (r1 === 7) {
    console.log(true);
}
else {
    console.log(false);
}

console.log(r1 === 7);



let gender = 'male';

let name = gender === 'female' ? 'jane' : 'john';

console.log(name);



/*
Generate a random number between 1 and 10
Print EVEN if the number is EVEN
Print ODD if the number is ODD

5   -> 'ODD'
8   -> 'EVEN'
*/


console.log('\n----------task-2----------\n');


let r2 = getRandomNumber(1, 10);

console.log('Random number is =', r2)
if (r2 % 2 === 0) {
    console.log('EVEN');
}
else {
    console.log('Odd')
}


