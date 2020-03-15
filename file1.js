"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.age3 = 10;
var Employee2 = /** @class */ (function () {
    function Employee2(n, a) {
        var _this = this;
        this.display = function () { return console.log("Name: ", _this.name, "Age: ", _this.age); };
        this.name = n;
        this.age = a;
    }
    return Employee2;
}());
exports.Employee2 = Employee2;
