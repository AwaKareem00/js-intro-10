const favMovies = [ 'Harry Potter', 'Godfather', 'Lord of the Rings' ];

// let fav1 = favMovies[0];
// let fav2 = favMovies[1];
// let fav3 = favMovies[2];

let [ fav1, fav2, fav3 ] = favMovies;
// let [ fav1, , fav3 ] = favMovies;

console.log(fav1); // Harry Potter
console.log(fav2); // Godfather
console.log(fav3); //Lord of the Rings


// forming an array from a variable
let var1 = true;
let var2 = 'Hello';
let var3 = 5;

const mixArray = [ var1, var2, var3 ];
console.log(mixArray);



const numbers = [ -3, 10, 0, 100, 200 ];
// ten, zero, twoHundred

let [, ten, zero,  , twoHundred ] = numbers;

console.log(ten);
console.log(zero);
console.log(twoHundred);


