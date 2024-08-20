

let name = 'john';
console.log(name);
console.log(typeof name);


let num1 = 10;  // whole number
let num2 = 3.14; // floating whole number

console.log(num1);
console.log(num2);

console.log(typeof num1, typeof num2);

// boglean- used with if else conditon
let isRainy = false;
let isAuthenticated = true;

let result = '5' === 5;

let isUserNameCorrect = 'admin' === 'johndoe';

console.log (isRainy);
console.log (isAuthenticated);
console.log (result);
console.log (isUserNameCorrect);

console.log (typeof isAuthenticated);
console.log (typeof result);

// undefined vs null
let className1;
let className2 = undefined;

let courseName = null;

console.log(className1);
console.log(className2);
console.log(courseName);

console.log(typeof className1); // 'undefined'
console.log(typeof tyclassName2); // ;undefined
console.log(typeof courseName); // 'object'


className1 = 'batch-10';
coursename= 'sdet [rogram';
console.log(className1);
console.log(coursename);

console.log(typeof className1);
console.log(typeof coursename);


let adress = 'chicago';
console.log(typeof adress);

adress = 12345;
console.log(typeof adress);

//bigi\int
let n1 = 283623233234532122343231n;
let n2 = BigInt("283623233234532122343231");

console.log(n1);
console.log(n2);

console.log(typeof n1); // "BigInt"
console.log(typeof n2); // "BigInt"

console.log(Number.MAX_SAFE_INTEGER); //90071992540991
console.log(Number.MIN_SAFE_INTEGER); //-90071992540991

let safeMaxInt = 90071992540991;
let safeMinInt = -90071992540991;

//sample

let s1 = Symbol('UA');

console.log(s1);
console.log(typeof s1);






