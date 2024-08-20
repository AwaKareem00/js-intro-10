// [] vs charAt() vs codeCharat()

let str = 'TechGlobal';

// get the first character

console.log(str[0]);
console.log(str.charAt(0)); // 'T'
console.log(str.at(0)); // 

console.log(str.charCodeAt(0)); // 

// get the last character
console.log(str[str.length - 1]);
console.log(str.charAt(str.length - 1));
console.log(str.at(str.length - 1));


let city = 'Rome'; // 0 1 2 3


console.log(city[-1]); // undefined
console.log(city.charAt(-1)); // ''
console.log(city.at(-1)); // 'e'


console.log(city[4]); // undefined
console.log(city.charAt(4)); // ''
console.log(city.at(4)); // undefined


/*
[] property access is the most used when getting characters starting from left index (0)
 [0] returns first charcter
 [1] returns second charcter
at () method is useful getting characgters starting from left index usig negative indices
 at(-1) returns the last character
 at(-2) returns the second to last character

[] property access
TASK; gets a single character from the string using an index
RETURN: returns a single character as a string
    *NOTE: it returnes undefined if the given index is not valid for string
Arguments: index
CHange original value: does not modify


charAt()
TASK; gets a single character from the string using an index
RETURN: returns a single character as a string
    *NOTE: it returnes NaN if the given index is not valid for string
Arguments: index
CHange original value: does not modify
static or non-static: non static
*/


