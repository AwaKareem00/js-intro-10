// practices/practice09.js

const Actions = require('../utils/actions');

// TASK-PART-7: test1 method (with then() and catch())
function test1() {
  Actions.visitUrl('https://www.example.com')
    .then((res) => { console.log(res);return Actions.login('TechGlobal', 'Test1234');})
    .then((res) => {console.log(res);return Actions.validateTitle('My Awesome Title');})
    .then((res) => {console.log(res);})
    .catch((err) => {
    console.error(err);
    });
}

// TASK-PART-8: test2 method (with async/await)
async function test2() {
  try {
    const urlResponse = await Actions.visitUrl('https://www.example.com');
    console.log(urlResponse);
    
    const loginResponse = await Actions.login('TechGlobal', 'Test1234');
    console.log(loginResponse);
    
    const titleResponse = await Actions.validateTitle('My Awesome Title');
    console.log(titleResponse);
  } 
  catch (err) {console.error(err);}
}

// Call the test functions
test1();
test2();
