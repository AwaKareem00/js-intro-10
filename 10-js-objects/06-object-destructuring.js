const arr = [ 'abc', 'xyz', 'hi', 'hello' ];

//let first = arr [0];
//let second = arr [1];
//let third = arr [2];
//let fourth = arr [3];

const [ first, second, third, fourth ] = arr;



console.log('\n---------------Object destructuring-----------\n');

const account = {
    username: 'KareemAwa',
    email: 'kareem@gmail.com',
    password: 'Kareem123'
};


const { username, email, password } = account;

console.log(username);
console.log(email);
console.log(password);

