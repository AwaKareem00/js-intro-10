function print(str) {
    console.log(`Your string is = ${str}`);
  }
  function printFullName(fname, lname) {
    console.log(`${fname} ${lname}`);
  }
  function printSum(num1, num2) {
    console.log(`Sum is = ${num1 + num2}`);
  }
  // Export all these methods individually
  module.exports.print = print;
  module.exports.printFullName = printFullName;
  module.exports.printSum = printSum;


