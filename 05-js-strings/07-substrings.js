let str = 'TechGlobal';

// 1. get a substring in the beginning or the midlle  ----- Tech or Glo
console.log(str.substring(0, 4));
console.log(str.slice(0, 4));

console.log(str.substring(4, 7));
console.log(str.slice(4, 7));


// 2. get a substring starting from any index ang going all the way till the end --- Global or bal
console.log(str.substring(4));
console.log(str.slice(4));

console.log(str.substring(7));
console.log(str.slice(7));



// DIFFERENCE
let lan = 'JavaScript';


// get the last 3 characters
console.log(lan.substring(lan.length - 3));
console.log(lan.substring(- 3));
console.log(lan.slice(-3));

// sc
console.log(lan.slice(4, 6));
lan.slice(-6, -4);


/*

slice()
TASK: retreive a substring from another string based on given index
RETURN: returns a new substring
ARGUMENTS: takes 1 or 2 index arguments, first ine uss the staring index ( includded), second is the ending index(included)
    NOTES: slice will work negative indexes aswell
    NOTES: if the left index is greater than the right index , then it returns empty string
CHANGE OG VALUE: does not change anything
NON STATIC

substring()
TASK: retreive a substring from another string based on given index
RETURN: returns a new substring
ARGUMENTS: takes 1 or 2 index arguments, first ine uss the staring index ( includded), second is the ending index(included)
    NOTES: it will not work with negative indexes and converts them to zeros
    NOTES: 
CHANGE OG VALUE: does not change anything
NON STATIC
*/

console.log('Batch-10'.substring(-10, 100)); // 'Batch-10'
console.log('Batch-10'.substring(3, 100)); // 'ch-10'

