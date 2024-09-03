const numbers = [ 5, 3, 2, 20 ];

// give an array back for the numbers saying odd and even  [ odd, odd, even, even]

const oddOrEven = numbers.map((number) => number % 2 === 0 ? 'even' : 'odd')

console.log(oddOrEven);


const sentences = ['Good morning', 'I like arrays', 'It is Saturday'];
// each sentence's first word -> ['Good', 'I', 'It'];

const firstWord = sentences.map((word) => word.split(' ')[0]) // .at (-1)

console.log(firstWord);


const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];
// Create a new array storing the given salaries with 2 decimals
// [1000.23, 5234.35, 721.98, 3452.50]

const lastTwoD = salaries.map((decimals) => decimals.toFixed(2));

console.log(lastTwoD);


















// for loop
//const result = [];

//for(let i = 0; i < numbers.length; i++) {
 //   if (numbers[i] % 2 === 0) result.push('even');
  //  else result.push('odd')
//}

//console.log(result);

// forEach

//numbers.forEach((number) => {
  //  if (number % 2 === 0) result.push('even');
  //  else result.push('odd')
//}) 

//console.log(numbers);