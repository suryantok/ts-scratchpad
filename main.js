"use strict";
exports.__esModule = true;
var factorial_1 = require("./factorial");
var argc = process.argv.splice(2);
if (argc.length != 1) {
    console.error("Invalid number of arguments " + argc);
    process.exit(1);
}
var inputNumber = argc[0];
if (!/^\d+$/.test(inputNumber)) {
    console.error("Invalid input " + inputNumber);
    process.exit(1);
}
var fact = new factorial_1.Factorial(+inputNumber);
console.log("Factorial of " + inputNumber + " is " + fact.getFactorial());
