


function startE(name) {
    if (name[0] === 'E' || name[0] === 'e') {
        return true;
    }
    else {
        return false;
    }
}

console.log(startE('Emanual')) // truw
console.log(startE('emanual')) // true
console.log(startE('Manual')) // false
console.log(startE('')) // false

function divisible5(numb) {
    if (numb % 5 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(divisible5(9));
console.log(divisible5(10));
console.log(divisible5(34));
console.log(divisible5(45));
console.log(divisible5(100));


function fooBar(numbs) {
    if (numbs % 5 === 0 && numbs % 7 === 0) {
        console.log('foobar');
    }
    else if (numbs % 7 === 0) {
        console.log('bar')
    }
    else if (numbs % 5 === 0) {
        console.log('foo')
    }
        return numbs;
    
}

console.log(fooBar(2));
console.log(fooBar(3));
console.log(fooBar(5));
console.log(fooBar(10));
console.log(fooBar(14));
console.log(fooBar(0));
console.log(fooBar(35));



// better solution

function fooBar(number) {
    if(number % 5 === 0) {
        if(number % 7 === 0) return 'foobar';
        return 'foo';
    }
    else if(number % 7 === 0) return 'bar';
    return number;
}

/*
Write a function called getGrade which takes a number as the score and return a letter as a grade
0-100

90-100          -> 'A'
80-89           -> 'B'
70-79           -> 'C'
60-69           -> 'D'
less than 60    -> 'F'

getGrade(90) -> 'A' 
getGrade(89) -> 'B' 
getGrade(80) -> 'B' 
getGrade(79) -> 'C' 
getGrade(70) -> 'C' 
getGrade(69) -> 'D' 
getGrade(60) -> 'D' 
getGrade(59) -> 'F' 

getGrade(95) -> 'A' 
getGrade(83) -> 'B' 
getGrade(23) -> 'F' 
getGrade(67) -> 'D'
*/

function getGrade(score) {
    if(score >= 90 && score <= 100) return 'A';
    else if (score >= 80 && score <= 89) return 'B';
    else if (score >= 70 && score <= 79 ) return 'C';
    else if (score >= 60 && score <= 69) return 'D';
    return 'F';
}


console.log('\n----------BETTER-----------------')
function getGrade(score) {
    if(score >= 90) return 'A';
    else if (score >= 80) return 'B';
    else if (score >= 70) return 'C';
    else if (score >= 60) return 'D';
    return 'F';
}


console.log(getGrade(90)); // A
console.log(getGrade(89)); // B
console.log(getGrade(80)); // B
console.log(getGrade(79)); // C
console.log(getGrade(70)); // C
console.log(getGrade(69)); // D
console.log(getGrade(60)); // D
console.log(getGrade(59)); // F
console.log(getGrade(95)); // A
console.log(getGrade(83)); // B
console.log(getGrade(23)); // F
console.log(getGrade(67)); // D

