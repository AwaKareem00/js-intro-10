let fname = 'john';
let lname = "doe";

let fullname1 = fname + ' ' + lname; // traditional concacation with + operator
let fullname2 = `${fname} ${lname}`;
let fullname3 = fname.concat(' ').concat(lname); // non-static

console.log(fullname1); // 'john doe'
console.log(fullname2); // 'john doe'
console.log(fullname3); // 'john doe'


console.log(fname);
console.log(lname);



/*
concat() function
TASK: combines 2 strings together
RETURN: returns a new string
ARGUMENGTS: takes a string as a argument-parameter
CHNAGE ORIGINAL VALUE: does not modigy original values
STATIC or NON-STATIC:
*/

console.log('Hello'.concat(', ', 'Batch-10'));

