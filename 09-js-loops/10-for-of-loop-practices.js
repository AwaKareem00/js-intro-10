const names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ];
// Log each name

console.log('\n-----------TASK1 for loop------------\n');

for(let i = 0; i <= names.length -1; i++) {
    console.log(names[i]);
}

console.log('\n-----------TASK1 for...of loop------------\n');

for(const name of names) {
    console.log(name);
}

// count how many start with lower and upercase J or j -> 3

console.log('\n-----------TASK2 for loop------------\n');
let countJ2 = 0;

for(let i = 0; i <= names.length -1; i++) {
    if(names[i][0].toLowerCase() === 'j') countJ2++;
}

console.log(countJ2);

console.log('\n-----------TASK2 for...of loop------------\n');
let countJ1 = 0;

for(const name of names) {
    if(name[0] === 'j' || name[0] === 'J') countJ1++;
}
console.log(countJ1);

// count how many names have the length of 4
console.log('\n-----------TASK3 for loop------------\n');



console.log('\n-----------TASK3 for...of loop------------\n');
let count4 = 0;

for(const nam of names) {
    if(nam.length === 4) count4++;
}

console.log(nam);


