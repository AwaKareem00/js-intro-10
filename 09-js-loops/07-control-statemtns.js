// break vs continue


// print all numbers excpet 8 // except even numbers

for(let i = 1; i <= 10; i++) {
    if(i === 8) continue;
    console.log(i);
}

for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0) continue;
    console.log(i);
}


// print all numbers 1, 20 except 6, 13
// we dont wanna see more than 15

for(let i = 1; i <= 20; i++) {
    // if(i !== 6 && i !== 13); console.log(i);
    if(i === 6 || i === 13) continue;
    console.log(i);
}

for(let i = 1; i <= 20; i++) {
    if(i >= 16 ) break;
    console.log(i);
}

for(let i = 1; i <= 20; i++) {
    // if(i !== 6 && i !== 13); console.log(i);
    if(i === 6 || i === 13) continue;
    if(i === 16) break;
    console.log(i);
}