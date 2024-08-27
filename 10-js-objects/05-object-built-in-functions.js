const batch10 = {
    program: 'SDET',
    numberOfStudents: 15,
    durationMonth: 6
};

const allKeys = Object.keys(batch10); // [ 'program', 'numberOfStudents', 'durationMonth' ]
const allValues = Object.values(batch10); // [ 'SDET', 15, 6 ]
const allEntries = Object.entries(batch10) // [[ 'program', 'SDET' ], [ 'numberOfStudents', 15 ], [ 'durationMonth', 6 ]]  

console.log(allKeys);
console.log(allValues);
console.log(allEntries);


console.log('\n-------looping object keys-------');
for(const key of Object.keys(batch10)) {
    console.log(key);
}

console.log('\n-------looping object values-------');
for(const value of Object.values(batch10)) {
    console.log(value);
}


console.log('\n-------looping object entreis-------');
for(const entry of Object.entries(batch10)) {
    console.log(entry); // entry
    console.log(entry[0]); // key
    console.log(entry[1]); // value
}


for(const [key, value] of Object.entries(batch10)) {
    console.log(key);
    console.log(value);
}


