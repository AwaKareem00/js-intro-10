const numbers = [ 4, 10, 3, 0, -2, -5, 1 ];
// Count evens = 4

let countEv = numbers.reduce((acc, curr) => {
    if(curr % 2 === 0) return acc + 1;
    return acc;
}, 0);
console.log(countEv);


const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
// count how many elements has 'apple' ignoring cases   -> 2
// count how many elements has 'i' ignoring cases       -> 2
// count how many elements ends with 'e'                -> 3

let apple = fruits.reduce((acc, curr) => {
    if(curr.toLowerCase().includes('apple')) return acc + 1;
    return acc;
}, 0);

console.log(apple);


let withI = fruits.reduce((acc, curr) => {
    if(curr.toLowerCase().includes('i')) return acc + 1;
    return acc;
}, 0);
console.log(withI);

let withE = fruits.reduce((acc, curr) => {
    if(curr.toLowerCase().endsWith('e')) return acc + 1;
    return acc;
}, 0);
console.log(withE);


const objects = [ 'Remote', 'Computer', 'TV', 'Mouse', 'Notebook', 'AC' ];

// the shortest -> get the first shortest     -> AC
// the longest -> get the last longest        -> Notebook

let shortestObject = objects.reduce((acc, curr) => {
  if(curr.length < acc.length) return curr;
  return acc;
});

console.log(shortestObject); // AC


