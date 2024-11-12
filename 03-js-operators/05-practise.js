/*

*/

let num1 = 6;
let num2 = 4;

console.log('the sum =' + (num1 + num2));
console.log('the subtraction =' + (num1 - num2));
console.log('the product =' + num1 * num2);
console.log('the exponent =' + num1 ** num2);
console.log('the divisiom =' + num1 / num2);
console.log('the remainder =' + num1 % num2);


console.log('\n------ES6 backticks with interpolation---------\n');
//ES6 backticks
console.log('The Sum = ${num1 + num2}');
console.log('the result of ${num1} mu;tiplied by ${num2} = ${num1 * num2}')

let fullname = 'marsil doe';
let age = 33;
let num = 4;
// the person is johm doe and the age is 25 and he will turn 30 in 5 years
console.log('the person is\'' +fullname+'\'the age is \'' + age + '\'.he will turn to \''+ (age + num) +'\'in' + num + '\' years');
console.log(`the person is '${fullname}' and the age is '${age}'. he will turn to '${age + num}' in '${num}' years`);

/*
Assume that you are given a rectangle with width = 5  and heigth = 8 

Calculate the area and perimeter of the rectangle

area = width * heigth
perimeter = 2 * width + 2 * height
perimeter = 2 * (width + height)
*/

let width = 5, height = 8;

console.log('The area = ' + (width * height));
console.log('the perimiter  =' + (2 * width + 2 * height));
console.log('the permiter 2 =' + 2 * (width + height));

////////////////////////////////////////
/*
An annual average salary for an SDET in the Unites States is 120k. 
Write a program that calculates and prints the monthly and bi-weekly and weekly average amount that 
an SDET makes in the United States.

averageAnnual  salary = $120,000.00
1 year = 12 months
1 year = 52 weeks
Biweekly = every other week  26 payments
*/

let salary = 120000;

console.log(`average Annual  salary = $${salary}. `);
console.log(` monthly average salary = $${salary / 12}. `);
console.log(`weekly average salary = $${salary /52}. `);
console.log(` biweekly Annual  salary = $${salary /26}. `);


console.log('monthly pay is =' + salary / 12);
console.log('weekly pay is ='+ salary / 52);
console.log('biweekly pay is = ' + salary / 26);

