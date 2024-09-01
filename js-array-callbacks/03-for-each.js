const names = [ 'James', 'Kareem', 'Alex', 'John' ];

console.log('\n------iteration of arrays for...of loop----');

for(const name of names) {
    console.log(name);
}

console.log('\n------iteration of arrays for loop----');

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


console.log('\n------iteration of arrays forEach loop----');

names.forEach((x) => console.log(x));

// print each name upper case

names.forEach((name) => console.log(name.toUpperCase()));

// print each name first letter and last letter together

names.forEach((x) => {
    console.log(x[0] + x.at(-1));
});

// print the names that has 4 letters

names.forEach((name) => {
    if(name.length === 4) console.log(name);
});


// store the length of each name ina diff array

let result = [];

names.forEach((name) => {
    result.push(name.length);
});

console.log(result);

// map method

console.log(names.map((x) => x.length));


