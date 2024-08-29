/*
Requirement:
Write a function named as lastShortest() which takes 
an array as an argument and returns the shortest 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only string elements.
NOTE: If there are 2 element having the shortest count 
of characters, always return the last occurrence.
 
Examples:
lastShortest(["red", "blue", "yellow", "white"])  -> 
"red"
lastShortest(["Apple", "Banana", "Mango"])  -> 
"Mango"
lastShortest(["white", "yellow", "brown"])  -> 
*/

function lastShortest(array) {
    let lastShortest = array[0];

    for(const str of array) {
        if(str.length <= lastShortest.length) lastShortest = str;
    }
    return lastShortest;
}

console.log(lastShortest(["red", "blue", "yellow", "white"]));
console.log(lastShortest(["Apple", "Banana", "Mango"]));
console.log(lastShortest(["white", "yellow", "brown"]));





function max(array) {
    let max = 0;

    for(const num of array) {
        if (num > max) max = num;
    }
    return max;
};

console.log(max([ 0, 4, 6, 10, 3]));