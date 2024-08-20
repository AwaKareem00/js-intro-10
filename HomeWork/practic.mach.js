console.log((5 + 3 >= "8" && 2 ** 3 === "8") || !(false || true));

console.log((!true && !false) || 5 * 2 === true * 10);

console.log("3" * "5" >= 15 && true == 1 && "   " == false && "" === 0);

console.log('\n-------------TASK01------------------');
/*
Write a program that generates 2 random numbers between 1 and 3 (both inclusive).
If the numbers are equal, print true.
Otherwise, print false.

Examples:
1, 1	-> true
1, 2	-> false
2, 3	-> false
2, 2	-> true
3, 3	-> false

*/
let r1 = Math.floor(Math.random() * 3 + 1), r2 = Math.floor(Math.random() * 3 + 1)

console.log(r1);
console.log(r2);
if (r1 && r2 === 2) console.log('TRUE');
else console.log('FALSE');


console.log('\n-------------TASK02------------------');

/*
Write a program that generates a random number between 1 and 100 (both inclusive).
Find which half of the range the number falls into and print it.
1st half is 1-50
2nd half is 51-100

Examples:
15	-> 1st half
50	-> 1st half
51	-> 2nd half 
87	-> 2nd half 
100	-> 2nd half
*/
let rn1 = Math.floor(Math.random() * 100 + 1);

console.log(rn1)

if (rn1 <= 50) console.log('1st half');
else console.log('2nd half');



console.log('\n-------------TASK03------------------');
/*
Write a function named as doubleWord() which takes a string word as an argument and returns the given word back doubled when invoked.
NOTE: Assume you will not be given an empty word.

Examples:
doubleWord("Tech")		-> "TechTech"
doubleWord("Global")	-> "GlobalGlobal"
*/

function doubleWord(word) {
    if (word.length % 2 === 0) return word.repeat(2);
}

console.log(doubleWord ('Kareem'));

console.log('\n-------------TASK04------------------');
/*
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered as a kilogram unit.
Convert kilogram unit to pounds and print it.
Please assume that 1 kilogram equals 2.2 pounds.

Examples:
1 	-> 2.2
20 	-> 44
75 	-> 165
10 	-> 220
*/

let kilograms = Math.floor(Math.random() * 10 + 1);
let pounds = kilograms * 2.2;

console.log(pounds);





console.log('\n-------------TASK05------------------');
/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the product of the random numbers is odd, print true.
Otherwise, print false.
Examples:
3, 5	-> true
7, 3	-> true
5, 5	-> true
1, 10	-> false
10, 1	-> false
*/

let num = Math.floor(Math.random() * 10 + 1);

console.log(num);

if (num % 2 === 0) console.log('true');
else console.log('false');

console.log('\n-------------TASK06------------------');
/*
Write a function named as shorter() which takes two string words as arguments and returns the string that has less characters when invoked.
NOTE: If both of the words have the same length, then return the second string.

Examples:
shorter("Tech", "Global")	-> "Tech"
shorter("Hello", "Hi")		-> "Hi"
shorter("Hello", "World")	-> "World"
*/

function shorter(word1, word2) {
    
    if (word1.length < word2.length) {
        return word1;
    } else {
        return word2;
    }
}

console.log(shorter("Tech", "Global"));
console.log(shorter("Hello", "Hi"));
console.log(shorter("Hello", "World"));


console.log('\n-------------TASK07------------------');
/*
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Find the greatest of the numbers and print it.

Examples:
3, 5, 2		-> 5
7, 3, 1		-> 7
5, 5, 5		-> 5
1, 10, 9	-> 10
10, 1, 2	-> 10
*/

let ran1 = Math.floor(Math.random() * 10 + 1);
let ran2 = Math.floor(Math.random() * 10 + 1);
let ran3 = Math.floor(Math.random() * 10 + 1);

console.log(ran1, ran2, ran3);

let max = Math.max(ran1, ran2, ran3);

console.log(max)

console.log('\n-------------TASK08------------------');
/*
Write a program that generates 2 random numbers between 1 and 3 (both inclusive).
If the numbers are equal, print true.
Otherwise, print false.

Examples:
1, 1	-> true
1, 2	-> false
2, 3	-> false
2, 2	-> true
3, 3	-> false
*/

let nu1 = Math.floor(Math.random() * 3 + 1);
let nu2 = Math.floor(Math.random() * 3 + 1);

console.log(nu1, nu2);

if (nu1 === nu2) console.log('true');
else console.log('false');


console.log('\n-------------TASK08------------------');
/*
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the greatest and the smallest numbers and print their absolute difference.

Examples:
3, 5, 2		-> 3
7, 3, 1		-> 6
5, 5, 5		-> 0
1, 10, 9	-> 9
10, 1, 2	-> 9
*/

let _1 = Math.floor(Math.random() * 10 + 1);
let _2 = Math.floor(Math.random() * 10 + 1);
let _3 = Math.floor(Math.random() * 10 + 1);

console.log(_1, _2, _3);

console.log(Math.min(_1, _2, _3));

console.log('\n-------------TASK08------------------');
/*
Write a function named as concat() which takes two string words as arguments and returns the words concatenated when invoked.
NOTE: Concatenation should always be as first string + second string.

Examples:
concat("Tech", "Global")	-> "TechGlobal"
concat("Hello", "World")	-> "HelloWorld"
concat("", "abc")			-> "abc"
concat("123", "1234")		-> "1231234"
*/

function concat(str1, str2) {
    return str1 + str2
}

console.log(concat('Kareem','Awadallah'));

console.log('\n-------------TASK08------------------');



console.log('\n-------------TASK08------------------');


// * (max - min + 1) + the min

/*
Area of a rectangle 
Write a function named as rectangleArea()which calculates the area of a rectangle when invoked. 
NOTE: Assume the sides of the rectangle are x and y. 
Conversion Formula: Area = x * y 
 
Examples: 
rectangleArea(5, 4)   -> 20 
rectangleArea(3, 7)   -> 21 
rectangleArea(6, 10)   -> 60 
*/


console.log('\n-------------TASK08------------------');

function rectangleArea(x, y) {
    return x * y; 
}

console.log(rectangleArea(3, 7));


console.log('\n-------------TASK08------------------');

function rectanglePerimeter(x, y) {
    return 2 * (x + y);
}

console.log(rectanglePerimeter(5, 4));



console.log('\n-------------TASK08------------------');

function squareArea(x) {
    return x * x; 
}

console.log(squareArea(5));



console.log('\n-------------TASK08------------------');

function squarePerimeter(x) {
    return 4 * x;
}

console.log(squarePerimeter(5));

console.log('\n-------------TASK08------------------');

function doubleWord(wurd) {
    return wurd.repeat(2);
}

console.log(doubleWord('Kareem'));


console.log('\n-------------TASK08------------------');

function firstCharacter(str) {
    return str[0];
}

console.log(firstCharacter('Kareem'));


console.log('\n-------------TASK08------------------');

function firstCharacter(str) {
    return str.slice(- 1);
}

console.log(firstCharacter('Kareem'));


console.log('\n-------------TASK08------------------');

function firstCharacter(str) {
    return str.slice(0, 2)
}

console.log(firstCharacter('Kareem'));
console.log(firstCharacter(''));


console.log('\n-------------TASK08------------------');

function lastTwoCharacters(word) {
    return word.slice(-2);
}

console.log(lastTwoCharacters('Kareem'));
console.log(lastTwoCharacters(''));

console.log('\n-------------TASK08------------------');


function firstAndLast(word) {
    if(word.length < 2) {
        return word;
    }
     
    
    else return word[0] + word.slice(-1);
}

console.log(firstAndLast('Kareem'));
console.log(firstAndLast(''));
console.log(firstAndLast('1'));
console.log(firstAndLast('Jibril'));



console.log('\n-------------TASK08------------------');

let str2 = 'JavaScript';

console.log(str2.slice(0) + (str2.slice(13)));


console.log('\n-------------TASK08------------------');

function hasFive(word) {
    return word.length >= 5;
}

console.log(hasFive('sam'))
console.log(hasFive('Kareem'))
console.log(hasFive('Yousef'))
console.log(hasFive('Like'))
console.log(hasFive('123'))
console.log(hasFive(''))


console.log('\n-------------TASK08------------------');
/*
Write a function named as middle() which takes a string word as an argument and returns the middle 
character if the string has odd length, and returns the middle two characters if the string has even 
length when invoked. 
NOTE: If the given word is empty, then return the empty string back. 
 
Examples: 
middle("Tech")    -> "ec" 
middle("Global")   -> "ob" 
middle("abcde")   -> "c" 
middle("1")     -> "1" 
middle("abc")     -> "b" 
middle(“1234”)    -> "23" 
*/

function middle(str) {
    let position, length;
    if ((str.length % 2) == 0) {
      position = str.length / 2 - 1;
      length = 2;
    } else {
      position = (str.length - 1) / 2;
      length = 1;
    }
    
    return str.substring(position, position + length);
  }

console.log(middle("Tech"));
console.log(middle("global"));
console.log(middle("1"));
console.log(middle("abc"));


console.log('\n-------------TASK08------------------');





console.log(!(2 + 2 === 8 / 2 && !false && 10 % 2 === 0) || 25 % 4 == "1");

console.log(("Hello" + "World" === "HelloWorld" || 5 > 3) && (true && !false));




console.log('\n-------------TASK08------------------');
/*
Write a program that generates a random number between 1 and 50 (both inclusive).
If the random number is divisible by 5, print true.
Otherwise, print false.

Examples:
1 	-> false
5 	-> true
20 	-> true
37 	-> false
50 	-> true
*/


let num1 = Math.floor(Math.random() * 50) + 1;

console.log(num1);

if (num1 % 5 === 0) console.log('true');
else console.log('false');


console.log((!true && !false) && ("car" === "vehicle" || 3 ** 2 <= 10));

console.log('\n-------------TASK08------------------');
/*
Write a program that generates a random number between -5 and 5 (both inclusive).
If the random number is positive, print true.
Otherwise, print false.

Examples:
-5 	-> false
-1 	-> false
0 	-> false
1 	-> true
5 	-> true
*/

let money = Math.floor(Math.random() * 11) - 5;

console.log(money)
console.log(money > 0);


console.log('\n-------------TASK08------------------');
/*
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the average of the numbers and print it.

Examples:
3, 5, 7		-> 5
7, 3, 2		-> 4
5, 5, 5		-> 5
1, 10, 7	-> 6
10, 1, 1	-> 4
*/

let perc1 = Math.floor(Math.random() * 10) + 1;
let perc2 = Math.floor(Math.random() * 10) + 1;
let perc3 = Math.floor(Math.random() * 10) + 1;

console.log(perc1, perc2, perc3);
console.log((perc1 + perc2 + perc3) / 3);

console.log('\n-------------TASK08------------------');
/*
Write a function named as shorter() which takes two string words as arguments and returns the string that has less characters when invoked.
NOTE: If both of the words have the same length, then return the second string.
Examples:
shorter("Tech", "Global")	-> "Tech"
shorter("Hello", "Hi")		-> "Hi"
shorter("Hello", "World")	-> "World"
*/

function shorter(str, str2) {
    
    if (str.length < str2.length) {
        return str;
    } else {
        return str2;
    }
}

console.log(shorter("Tech", "Global"));
console.log(shorter("Hello", "Hi"));
console.log(shorter("Hello", "World"));


console.log(!(5 ** (10 / 5) === 25 || 5 === "5" || 3 >= 5));



console.log('\n-------------TASK08------------------');
/*
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns the first two character of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the given string back.

Examples:
firstTwoCharacters("Tech")		-> "Te"
firstTwoCharacters("Global")	-> "Gl"
firstTwoCharacters("")			-> ""
firstTwoCharacters(" ")			-> " "
firstTwoCharacters("1")			-> "1"
*/


function firstTwoCharacters(word) {
    return word.slice(0, 2);
}
console.log(firstTwoCharacters('Kareem'))




console.log('\n-------------TASK08------------------');
/*
Write a function named as hasFive() which takes a string word as an argument and returns true if given string has at least 5 characters, and false otherwise when invoked.

Examples:
hasFive("Tech")		-> false
hasFive("Global")	-> true
hasFive("")			-> false
hasFive("12345")	-> true
hasFive("hello")	-> true
*/

function hasFive(word) {
    return word.length >= 5;
}

console.log(hasFive('tim'));
console.log(hasFive(''));
console.log(hasFive('met'));
console.log(hasFive('timing'));



console.log('\n-------------TASK08------------------');

let ren1 = Math.floor(Math.random() * 10) + 1;
console.log(ren1 % 2 === 0);

console.log('\n-------------TASK08------------------');


let mun = Math.floor(Math.random() * 10) + 1;
let mun2 = Math.floor(Math.random() * 10) + 1;

let product = mun * mun2;

console.log(mun, mun2)
console.log(product% 2 !== 0);

console.log('\n-------------TASK08------------------');

function concat(str1, str2) {
    return str1 + str2
}

console.log(concat('time','time'))

console.log('\n-------------TASK08------------------');

let dom1 = Math.floor(Math.random() * 10) + 1;
console.log(dom1);
console.log(dom1 % 2 !== 0);

console.log('\n-------------TASK08------------------');

let dom2 = Math.floor(Math.random() * 100) + 1;
console.log(dom2)
if (dom2 <= 50) console.log('1st half');
else console.log('2nd half');


console.log('\n-------------TASK08------------------');

let rand = Math.floor(Math.random() * 50) + 1;
console.log(rand);
console.log(rand % 5 === 0);

console.log('\n-------------TASK08------------------');



console.log('\n-------------TASK08------------------');



console.log('\n-------------TASK08------------------');



console.log('\n-------------TASK08------------------');



console.log('\n-------------TASK08------------------');



