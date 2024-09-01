const numbers = [10, 5, 100, 77, 50, 65, 0];
// Find all the numbers that are 50 or more -> [100, 77, 50, 65]

const result = numbers.filter((number) => number >= 50);

console.log(result);



const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];
// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4
// Count how many elements has i      -> 2

const result1 = fruits.filter((fruit) => fruit.toLowerCase().includes('apple'));
console.log(result1);

const result2 = fruits.filter((fruit) => fruit.toLowerCase().includes('a'));
console.log(result2.length);

console.log(result3 = fruits.filter((fruit) => fruit.toLowerCase().includes('i')).length);
