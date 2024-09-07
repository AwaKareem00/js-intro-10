console.log('\n-------------------TASK01---------------------\n');
function countPos(numbers) {
    return numbers.filter((number) => number > 0).length;
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));
console.log('\n-------------------TASK02---------------------\n');
function countA(str) {
    return str.split('').filter((incA) => incA.toLowerCase().includes('a')).length;
}
console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));
console.log('\n---------------TASK03-----------\n');
function countVowels(str) {
    return str.split('').filter((letter) => 'AEOUIaeoui'.includes(letter)).length;
}
console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

console.log('\n---------------TASK04-----------\n');
function countVowels(str) {
    return str.split('').filter((letter) => !'AEOUIaeoui'.includes(letter)).length;
}

console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));
if(str[i] === 'o' )
console.log('\n-------------------TASK05---------------------\n');
function countWords(str) {
    wordCounter = 0;
    return str.split(' ').filter((wrd) => wrd.length > 0).length;
}

console.log(countWords("    Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));
console.log('\n-------------------TASK06---------------------\n');
const factorial = num => {
    if(num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));
console.log('\n-------------------TASK07---------------------\n');
function isPalindrome(str) {
    if (str.toLowerCase() === str.toLowerCase().split('').reverse().join('')) {
        return true;
    }
    else return false;
}

console.log(isPalindrome('Hello'));
console.log(isPalindrome('Kayak'));
console.log(isPalindrome('civic'));
console.log(isPalindrome(''));
console.log('\n-------------------TASK08---------------------\n');
function countMultipleWords(arr) {
    return arr.filter((str) => str.trim().split(' ').length > 1).length;
}

console.log(countMultipleWords(['foo bar', 'foobar', 'fo o bar' ]));
console.log('\n-------------------TASK09---------------------\n');
function count3OrLess(str) {
    return str.split(' ').filter((str) => str.length <= 3).length;
}
console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));
console.log('\n---------------TASK10-----------\n');
function isPrime(num) {
if(num <= 1) {
    return false;
}
else if (num === 2) {
    return true;
}
else if (num % 2 === 0) {
    return false;
}
for(let i = 3; i * i <= num; i+= 2) {
    if (num % i === 0) {
        return false;
    }
}
return true;
}

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));

console.log('\n---------------TASK11-----------\n');
function add(arr1, arr2) {
    const length = Math.max(arr1.length, arr2.length)
    const array = [];

    for(let i = 0; i < length; i++) {
        const val1 = i < arr1.length ? arr1[i] : 0;
        const val2 = i < arr2.length ? arr2[i] : 0;
        array.push(val1 + val2);
    }
    return array;

}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));

console.log('\n---------------TASK12-----------\n');
function removeExtraSpaces(str) {
    return str.trim().split(' ').filter((word) => word !== '').join(' ');
}

console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("      Hello    World     "));
console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces(""));

console.log('\n---------------TASK13-----------\n');
function findClosestTo10(arrNum) {
   if (arrNum.filter((number) => number !== 10)) {
    return Math.floor(arrNum);
   }
   
}

console.log(findClosestTo10([10, -13, 5, 70, 15, 57]));
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]));
console.log(findClosestTo10([0, -1, -2]));
console.log('\n-------------------TASK14---------------------\n');
function isEmailValid(str) {
    if(str.includes(' ') || (str.indexOf('@') !== str.lastIndexOf('@')) || !str.includes('@') || !str.includes('.')) { 
        return false;
    }
    else {
        let beforeAt = str.slice(0, str.indexOf('@'));
        let afterAtBeforeDot = str.slice(str.indexOf('@') + 1, str.lastIndexOf('.'));
        let afterDot = str.slice(str.lastIndexOf('.') + 1);

        return beforeAt.length >= 2 && afterAtBeforeDot.length >= 2 && afterDot.length >= 2; 
    }
}
console.log(isEmailValid(""));
console.log(isEmailValid("@gmail.com"));
console.log(isEmailValid("johndoe@yahoo"));
console.log(isEmailValid("johndoe@.com"));
console.log(isEmailValid("a@outlook.com"));
console.log(isEmailValid("johndoe@a.com"));
console.log(isEmailValid("johndoe@@gmail.com"));
console.log(isEmailValid("johndoe@gmail.com"));
console.log('\n-------------------TASK15---------------------\n');
// we tried
function isPasswordValid(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{8,16}$/;
    return regex.test(password);
 }

console.log(isPasswordValid(""));
console.log(isPasswordValid("abcd"));
console.log(isPasswordValid("abcd1234"));
console.log(isPasswordValid("Abcd1234"));
console.log(isPasswordValid("Chicago12345US!#$%"));
console.log(isPasswordValid("Abcd1234$"));
console.log(isPasswordValid("Chicago123$"));
console.log(isPasswordValid("Test1234#"));

