let str1 = 'Morning';

console.log(str1.slice(str1.length -5));

console.log(str1.slice(-5));

// if(str1.length < 5) trow Error('This string does no tcontain 5 characters!!');
// else console.log(str1.slice(-5));


let str2 = 'JavaScript';

console.log(str2.slice(0, 3 ) + (str2.slice(-3)));

/* function firLas3Chars(str) {
    if(str.length < 3) throw Error('This string has length less than 3!!!');
    else return str2.slice(0,3) + str2.slice(-3);
};
*/

