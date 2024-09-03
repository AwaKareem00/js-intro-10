/*
this keyword
*/

const person = {
    fname: 'John',
    lname: 'Doe',
    fullname: function() {
        console.log(`The full name is ${this.fname} ${this.lname}`);
    }
}

person.fullname();



const student = {
    fname: 'Alex',
    lname: 'Smith'
}


// function borrowing
person.fullname.call(student);

