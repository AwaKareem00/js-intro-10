console.log('\n-----------task-1---------------');
/*
Write a  program that generates 3 random numbers 
between 1 to 100 (1 and 100 are included)
Print true if the average of the random numbers is 
greater or equals 50. 
Print false if the average of the random numbers is less 
than 50.
Test data 1:
20, 70, 25
Expected Output 1: 
false
Test data 2:
65, 80, 90
Expected Output 2: 
true
*/
let r1 = Math.floor(Math.random() * 100 + 1), r2 = Math.floor(Math.random() * 100 + 1), r3 = Math.floor(Math.random() * 100 + 1)

console.log(r1)
console.log(r2)
console.log(r3)

if (r1 >= 50 && r2 >= 50 && r3 >= 50) console.log('TRUE');
else console.log('FALSE');

console.log('\n-----------task-2---------------');

let rn1 = Math.floor(Math.random() * 3 + 1), rn2 = Math.floor(Math.random() * 3 + 1), rn3 = Math.floor(Math.random() * 3 + 1)

console.log(rn1);
console.log(rn2);
console.log(rn3);

if (rn1 === rn2 === rn3) console.log("TRIPLE MATCH");
else if (rn1 === rn2 !== rn3 || rn1 === rn3 !== rn2 || rn1 !== rn2 === rn3) console.log("DOUBLE MATCH")
else console.log("NO MATCH");

console.log('\n-----------task-3---------------');
function hasA(word) {
    if (word.includes('a') || word.includes('A')) {
        return true
    }
    else {
        return false
    }
}

console.log(hasA("Tech"));
console.log(hasA("Global"));
console.log(hasA(""));
console.log(hasA("Apple"));
console.log(hasA("Yousef"));
console.log(hasA("Alselwadi"));

console.log('\n-----------task-4---------------');

function doubleOrTripleWord(word) {
    if (word.length % 2 === 0) return word.repeat(3);
    else  return word.repeat(2);
}
console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));

console.log('\n-----------task-5---------------');
/*
Write a function named as firstWord() which takes a 
string word as an argument and returns the first word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
firstWord("Hello World")  -> "Hello"
firstWord("I like JavaScript")  -> "I"
firstWord("Hello")  -> "Hello"
firstWord("")  -> ""
firstWord("    ")  -> ""
Task-6
*/

function firstWord(word) {
    return word.split(' ')[0];
}

console.log(firstWord("Hello World"));
console.log(firstWord("I like JavaScript"));
console.log(firstWord("Hello"));
console.log(firstWord("  "));
console.log(firstWord(""));

console.log('\n-----------task-6---------------');
/*
Requirement:
Write a function named as lastWord() which takes a string word as an 
argument and returns the last word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
lastWord("Hello World") 		-> "World"
lastWord("I like JavaScript") 	-> "JavaScript"
lastWord("Hello") 		-> "Hello"
lastWord("") 		-> ""
lastWord("    ") 		-> ""
*/

function lastWord(lword) {
    return lword.split(' ').length -1;
}

console.log(lastWord("Hello World"));
console.log(lastWord("I like JavaScript"));
console.log(lastWord("Hello"));
console.log("");
console.log("   ");



console.log('\n-----------task-7---------------');



console.log('\n-----------task-8---------------');

console.log('\n-----------task-9---------------');



console.log('\n-----------task-10---------------');