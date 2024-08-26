const nums = [ -1, 1, 3, 0, 2, 6, 8];

// find first even number of the array

let firstEven;

for(const num of nums) {
    if(num % 2 === 0) {
    firstEven = num;
    break;
    }
}

console.log(firstEven);

// Find the first city that has the odd length  -> Chicago

const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];

let firstOdd;

for(const city of cities) {
    if(city.length % 2 !== 0) {
    firstOdd = city;
    break;
    }
}

console.log(firstOdd);





const citiesWSixMore = [ ];

for(const city of cities) {
    if(city.length > 5) citiesWSixMore.push(city);
}

console.log(citiesWSixMore);


// Find all the cities that has i or I in it -> [ 'Berlin', 'Chicago', 'Kyiv', 'Istanbul' ]

const citiesWI = [];

for(const city of citiesWI) {
    if(city.toLowerCase().includes('i')citiesWI.push(city));
}

console.log(citiesWI);



