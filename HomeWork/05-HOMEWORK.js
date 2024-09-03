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
    return str.split('').filter((word) => word <= 3).length;
}

console.log(count3OrLess('hello sam i am twelve me two'));
console.log('\n-------------------TASK10---------------------\n');

console.log('\n-------------------TASK11---------------------\n');

console.log('\n-------------------TASK12---------------------\n');

console.log('\n-------------------TASK13---------------------\n');

console.log('\n-------------------TASK14---------------------\n');
function isEmailValid(email) {
    let at = email.indexOf('@'); 
    if (at === -1 || email.at('@' + at + 1) !== -1) {
        return false;
    }
    
    let start =  ('') + at;
    
    
    
}
console.log('Gmail@kmo');
console.log(start);
console.log('\n-------------------TASK15---------------------\n');






