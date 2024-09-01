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
console.log('\n-------------------TASK03---------------------\n');
function countVowels(str) {
    return str.split('').filter((word) => word.toLowerCase().includes('a') || word.includes('e') || word.includes('i') || word.includes('o') || word.includes('u')).length;
}
console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));
console.log('\n-------------------TASK04---------------------\n');
function countConsonants(str) {
    return str.split('').filter((word) =>  word === 'a', 'e', 'i', 'o', 'u').length;
}
console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

if(str[i] === 'o' )
console.log('\n-------------------TASK05---------------------\n');
function countWords(str) {
    wordCounter = 0;
    return str.split(' ').filter((wrd) => wrd.length > 0).length;
}

console.log(countWords("    Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));

