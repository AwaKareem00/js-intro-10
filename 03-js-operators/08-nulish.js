console.log(false || 'hello'); // hello
console.log(false ?? 'hello'); // false

console.log('' ?? 'hello'); // ''
console.log(0 ?? 'hello'); // 0
console.log(NaN ?? 'hello'); // NaN

console.log(null ?? 'hello'); // hello
console.log(undefined ?? 'hello'); // hello

// ____ ?? ____      -> first expression is null or undefined -> then it gets the second 

 // let data = server.getData() ?? throw Error('Data Is Empty');


