const { Cypress } = require('../utils/cypress.js');


// async way - PROBLEM
// Cypress.visit('www.home.com');
// Cypress.login('kareem', 'awadallah');
// Cypress.validateLoginMessage('You are logged in');

/*
PROBLEM
You are logged in validated!
Logged in with kareem awadallah!
www.home.com visited!
and it takes 1 second

EXPECTED:
www.home.com visited!
You are logged in validated!
Logged in with kareem awadallah!
and it takes around 2 seconds
*/

//using same methods with callbacks added
// Cypress.visit1('www.home.com', () => {
//     Cypress.login1('Tech1', 'Tech2', () => {
//         Cypress.validateLoginMessage1('You are logged in!');
//     })
// });

// using promises -> then motheds

Cypress.visit2('www.home.com')
    .then(() => Cypress.login2('Tech1', 'tech2'))
    .then(() => Cypress.validateLoginMessage2('You are logged in!'));