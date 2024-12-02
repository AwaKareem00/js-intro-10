// Arry prototype last 

Array.prototype.last = function() {

    if (this.length === 0) {
        return -1;
    
    } else {
        return this [this.length -1]
    }
    
};

Array.prototype.last = function() {

    return this.length ? this[this.length - 1] : -1;
};

console.log(last([null, {}, 3]));



function isPowerOf3(num) {
    if (num < 1) return false;
    while (num % 3 === 0) {
        num /= 3;
    }
    return num === 1;
}

// Examples
console.log(isPowerOf3(1));     // true
console.log(isPowerOf3(2));     // false
console.log(isPowerOf3(3));     // true
console.log(isPowerOf3(27));    // true
console.log(isPowerOf3(100));   // false
console.log(isPowerOf3(81));    // true
console.log(isPowerOf3(9)); 



function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i);
        }
    }
         return result 
   
}

// Examples
console.log(fizzBuzz(3));  // [1, 2, 'Fizz']
console.log(fizzBuzz(5));  // [1, 2, 'Fizz', 4, 'Buzz']
console.log(fizzBuzz(10)); // [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']
console.log(fizzBuzz(15)); // [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
console.log(fizzBuzz(2));





const factorial = n => {
    if (n === 0 || n === 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
}

// Examples
console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1



