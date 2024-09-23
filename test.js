const { print, printSum, printFullName } = require('../JS intro 10/15-JS-Modules/printer.js');
const { Calculator } = require('../JS intro 10/15-JS-Modules/calculator.js');
const { MouseActions } = require('../JS intro 10/15-JS-Modules/mouse-actions.js');

print('Batch10');
console.log(Calculator.product(3, 5));
MouseActions.click();