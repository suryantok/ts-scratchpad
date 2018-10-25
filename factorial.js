"use strict";
exports.__esModule = true;
var Factorial = /** @class */ (function () {
    function Factorial(num) {
        this.num = num;
    }
    Factorial.prototype.getFactorial = function () {
        return this.doFact(this.num);
    };
    Factorial.prototype.doFact = function (num) {
        return num <= 1 ? 1 : num * this.doFact(num - 1);
    };
    return Factorial;
}());
exports.Factorial = Factorial;
