console.log('\n-------------------TASK01---------------------\n');

function tripleWord(word) {
    return word.repeat(3);
    }
    console.log(tripleWord("Tech"));
    console.log(tripleWord("Global"));

console.log('\n-------------------TASK02---------------------\n');

function has4(string) {
    return string.length >= 4;
}

console.log(has4("Tech")); // true
has4("Global"); // true
has4(""); // false
has4("12345"); // true
has4("abc"); // false


console.log('\n-------------------TASK03---------------------\n');

function celciusToFahrenheit(celcius) {
    return (celcius *9) / 5 + 32;
}
console.log(celciusToFahrenheit(20));
console.log(celciusToFahrenheit(25));
console.log(celciusToFahrenheit(0));
console.log(celciusToFahrenheit(-10));



console.log('\n-------------------TASK04---------------------\n');
/*
Write a function named as kgToPounds() which takes a number to be 
considered as Kilograms value and returns the Pounds value when 
invoked.
Conversion Formula: The function uses the formula kilogram * 2.2 to 
perform the conversion from Kilograms to Pounds.
•Multiply the Kilograms value by 2.2.

*/
function kgToPounds(kilogram) {
    return (kilogram * 2.2);
}

console.log(kgToPounds(8));

console.log('\n-------------------TASK05---------------------\n');

function rectangleArea (x, y) {
    console.log(x * y);
}

let num1 = 5;
let num2 = 4;
rectangleArea(num1, num2)


function rectanglePerimeter (x, y) {
    console.log (2 * (x + y));
}

let num3 = 5;
let num4 = 4;
rectanglePerimeter(num3, num4)


console.log('\n-------------------TASK06---------------------\n');
function squareArea (x) {
    return x * x;
}

console.log(squareArea(5))


function squarePerimeter (x) {
    return 4 * x;
}

console.log(squarePerimeter(3))













console.log('\n-------------------TASK01---------------------\n');
/*
Requirement:
Write a function named as tripleWord() which takes a string word as an 
argument and returns the given word back tripled when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
tripleWord("Tech")  -> "TechTechTech"
tripleWord("Global")  -> "GlobalGlobalGlobal"
Task-2
*/

function tripleWord(word) {
    return word.repeat(3);
}

console.log(tripleWord('kareem'));


console.log('\n-------------------TASK02---------------------\n');
/*
Write a function named as has4() which takes a string word as an 
argument and returns true if given string has at least 4 characters, and 
false otherwise when invoked.
Examples:
has4("Tech")  -> true
has4("Global")  -> true
has4("")  -> false
has4("12345")  -> true
has4("abc")   -> false
*/
function has4(string) {
    return string.length >= 4;
}

console.log(has4('Kareem'));


console.log('\n-------------------TASK03---------------------\n');
/*
Write a function named as celciusToFahrenheit() which takes a number 
to be considered as Celcius value and returns the Fahrenheit value when 
invoked.
Conversion Formula: The function uses the formula (celsius * 9) / 5 + 32 
to perform the conversion from Celsius to Fahrenheit.
•Multiply the Celsius temperature by 9.
•Divide the result by 5.
•Add 32 to the result.
Examples:
celciusToFahrenheit(20)  -> 68
*/
function celciusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

console.log(celciusToFahrenheit(20));


console.log('\n-------------------TASK04---------------------\n');
/*
Write a function named as kgToPounds() which takes a number to be 
considered as Kilograms value and returns the Pounds value when 
invoked.
Conversion Formula: The function uses the formula kilogram * 2.2 to 
perform the conversion from Kilograms to Pounds.
•Multiply the Kilograms value by 2.2.
Examples:
kgToPounds(1)  -> 2.2
kgToPounds(20)  -> 44
kgToPounds(75)  -> 165
*/
function kgToPounds(kilogram) {
    return (kilogram * 2.2);
}

console.log(kgToPounds(20));


console.log('\n-------------------TASK05---------------------\n');
/*
Write 2 functions named as rectangleArea() and rectanglePerimeter() 
which calculate the area and perimeter of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula:
•Area: x * y
•Perimeter 2 * (x + y)
Examples:
rectangleArea(5, 4)  -> 20
rectangleArea(3, 7)  -> 21
rectangleArea(6, 10)  -> 60
rectanglePerimeter(5, 4)  -> 18
rectanglePerimeter(3, 7)  -> 20
rectanglePerimeter(6, 10)  -> 32
*/
function rectangleArea(x, y) {
    return (Area = x * y);
}

console.log(rectangleArea(5, 4));


function rectanglePerimeter(x, y) {
    return (Perimeter = 2 * (x + y));
}

console.log(rectanglePerimeter(5, 4));

console.log('\n-------------------TASK06---------------------\n');
/*
Write 2 functions named as squareArea() and squarePerimeter() which 
calculate the area and perimeter of a square when invoked.
NOTE: Assume the side of the square is x.
Conversion Formula:
•Area: x * x
•Perimeter 4 * x
Examples:
squareArea(5)  -> 25
squareArea(3)  -> 9
squareArea(6)  -> 36
squarePerimeter(5)  -> 20
squarePerimeter(3)  -> 12
*/

function squareArea(x) {        
    return (Area = x * x);
}

console.log(squareArea(5));


function squarePerimeter(x){        
    return (Perimeter = 4 * x);
}

console.log(squarePerimeter(5));