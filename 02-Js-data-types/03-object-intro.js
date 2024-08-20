const user = {
    firstName: 'john',
     lastName: 'doe',
     age: 25,
     email: 'johndoe@gmail.com' ,
     phone: '000 000-0000'
}

console.log(user);
console.log(typeof user); // object


console.log(user.firstName); // john
console.log(user.email); // johndoe@gmail.com

// updating the property value in bralcet notation

user.firstName = 'Alex';
user['phone'] = '111-111-1111';

user.password = 'test1234';

console.log(user);

delete user.age;
delete user['lastName'];

console.log(user);

