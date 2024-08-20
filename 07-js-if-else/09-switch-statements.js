const { getRandomNumber } = require('../utils/MathHelper.js')
/*
Generate a random number between 1-10 both included
if the number is 1, print '3 POINTS'
if the number is 2, print '2 POINTS'
if the number is 3, print '1 POINT
If the number is anyhting else print '0 POINTS'
*/

let r1 = getRandomNumber(1, 10);
console.log('Random number is =', r1);

if (r1 === 1)  console.log('3 POINTS');
else if (r1 === 2) console.log('2 POINTS');
else if (r1 === 3) console.log('1 POINTS');
else console.log('0 POINTS');

switch(r1) {
    case 1:
        console.log('3 POINTS');
        break;
    case 2:
        console.log('2 POINTS');
        break;
    case 3: 
        console.log('1 POINTS');
        break;
    default:
        console.log('0 POINTS');
}



//const date = new Date();
/*
console.log(date.getDate()); // 5
console.log(date.getMonth()); // 7
console.log(date.getFullYear()); // 2024
console.log(date.getDay()); // 1 (Monday)
console.log(date.getHours()); // 19
console.log(date.getMinutes()); // 29

console.log(date.toLocaleTimeString()); // 7:31:24 PM
console.log(date.toLocaleDateString()); // 8/5/2024

/*
0 Sunday
1 Monday
.
.
.
.
6 Saturday

in case it returns 0 or 6, print 'WEEKEND'
otherwise, print 'WEEKDAY' 
*/
const date = new Date();

let day = date.getDay(); // returns 0 to 6 inclusive

if (day === 0 || day === 6) console.log('WEEKEND')
else console.log('WEEKDAY')

switch(day) {
    case 0:
    case 6:
        console.log('WEEKEND')
        break
    default:
        console.log('WEEKDAY')
}

/*
Find and print the quarter that our r2 is in
1 and 25 inclusive  -> print 'FIRST'
26 and 50 inclusive  -> print 'SECOND'
51 and 75 inclusive  -> print 'THIRD'
76 and 100 inclusive  -> print 'FOURTH'
*/

let r2 = getRandomNumber(1, 100);

console.log('The random number is', r2);

if (r2 <= 25) console.log('First')
else if (r2 <= 50) console.log('SECOND')
else if (r2 <= 75) console.log('THIRD')
else console.log('FOURTH')

switch(true) {
    case r2 <= 25:
        console.log('FIRST');
        break;
    case r2  <= 50:
        console.log('SECOND');
        break;
    case r2 <= 75:
        console.log('THIRD');
        break;
    case r2 <= 100:
        console.log('FOURTH');
}

