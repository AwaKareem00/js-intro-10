const numbers = [0, 10, -4, 5, 2, -3];

//let firstPos;

//for(const number of numbers) {
 ////////   if(number > 0) {
 //       firstPos = number;
 //       break;
 //   }
//}

//console.log(firstPos);

let firstPos = numbers.find((number) => number > 0);

let firstPosIndex = numbers.findIndex((number) => number > 0);

console.log(firstPos);

console.log(firstPosIndex);



const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA'];
// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv
// Find the last element that has 4 letters -> Kyiv

let first4 = cities.find((city) => city.length === 4);
console.log(first4);

let last6 = cities.findLast((city) => city.length === 6);
console.log(last6);

let index4 = cities.findIndex((city) => city === 'LA');
console.log(index4);

console.log(cities.findLast((city) => city.length === 4));

cities.find((city) => city.length === 10); // undefined
cities.findLast((city) => city.length === 10); // undefined
cities.findIndex((city) => city.length === 10); 
cities.findLastIndex((city) => city.length === 10);



