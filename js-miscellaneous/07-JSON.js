const obj = {
    first_name: 'Adam',
    last_name: 'Smith',
    date_of_birth: 1790,
    isAlive: false
};

// To sent this JS object to server, we need to convert to JSON string
// Serialization
// Reason for serialization to sent data to server:

let jsonObject = JSON.stringify(obj);

console.log(obj);
console.log(jsonObject); // {"first_name":"Adam","last_name":"Smith","date_of_birth":1790,"isAlive":false}

// JSON string 
let student = `{"first_name":"Adam","last_name":"Smith","date_of_birth":1790,"isAlive":false}`

// to be able to read the json string values we need to convert it to js objects
// deseialazation
// reason for is to read data easier

const JSObject = JSON.parse(student);

console.log(student);
console.log(JSObject);

// REAL EXAMPLE:
/*
got to

*/