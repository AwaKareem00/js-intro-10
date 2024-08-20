const names = [ 'Alex', 'James', 'Jane' ];

let nameString1 = names.toString();

console.log(names); // [ 'Alex', 'James', 'Jane' ]
console.log(nameString1); // Alex,James,Jane

console.log(names.length); // 3
console.log(nameString1.length); // 15

let namesString2 = names.join();
let namesString3 = names.join(' ');
let namesString4 = names.join(' - ');

console.log(namesString2); 
console.log(namesString3); 
console.log(namesString4); 


