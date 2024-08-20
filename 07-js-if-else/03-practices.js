/*
English exam
Passing score is 60 or above

We will write a program to check if we pass the exam or failed.

60 or above -> PASS
else -> FAIL
*/

let exam_score = 60;

if(exam_score >= 60) {
    console.log('You passed the exam!!!');
}
else {
    console.log('You failed the exam...');
}

/* 
let exam_score = 70;
if(typeof exam_score === 'number') {
    if(exam_score < 0 || exam_score > 100) {
        throw Error('This is not a valid exam score!!!');
    }
    else {
        if(exam_score >= 60) {
            console.log('PASS');
        }
        else {
            console.log('FAIL');
        }
    }
}
else {
    throw Error('The input provided is not a number!!!');
}
*/

if(exam_Score < 60) {

    console.log('FAIL');
}
else {
    console.log('PASS!');
}

if(exam_score >= 60) console.log('PASS');
else console.log('FAIL');

if(true) console.log('hello');
else {
    console.loog('a');
    console.loog('b');
}


/*
Retirement age is 65

We will write a program to check if we can be retired or not.

age is greater than or equal 65 -> YOU CAN GET RETIRED
else -> YOU CANNOT GET RETIRED!!!
*/

let age = 25;

if(age < 65) {
    console.log('YOU CANNOT GET RETIRED!!!');
}
else {
    console.log('YOU CAN GET RETIRED');
}

let fname = 'kareem';
let first = true;

if(first){
    console.log(fname[0]);
}
else {
    console.log(fname.at (- 1));
}


