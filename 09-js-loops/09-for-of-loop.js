const cities = [ 'Rome', 'Chicago', 'Miami', 'Berlin', 'Tokyo' ];

//console.log(cities[0]);
//console.log(cities[1]);
//console.log(cities[2]);
//console.log(cities[3]);
//console.log(cities[4]);

for(let i = 0; i <= cities.length -1; i++) {
    console.log(cities[i]);
}


// for...of to iterate array elements
for(const city of cities) {
    console.log(city);
}

const numbers = [ 10, 20, 30, 40, 23 ];

// log the number elements using for of loops

for(const num of numbers) {
    console.log(num);
}

for(let i = 0; i <= numbers.length -1; i++) {
    console.log(numbers[i]);
}

let j = 0;

while(j <= numbers.length -1) {
    console.log(numbers[j]);
    j++;
}
