var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    return Employee;
}());
var Level1Employee = /** @class */ (function (_super) {
    __extends(Level1Employee, _super);
    function Level1Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level1Employee.prototype.hasAllAccess = function () {
        return this.role === "Admin";
    };
    return Level1Employee;
}(Employee));
var Level3Employee = /** @class */ (function (_super) {
    __extends(Level3Employee, _super);
    function Level3Employee(firstName, lastName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.role = "Admin";
        return _this;
    }
    //overrride method=====================
    Level3Employee.prototype.hasAllAccess = function () {
        return true;
    };
    return Level3Employee;
}(Level1Employee));
var e1 = new Level1Employee("fange", "lee", 20);
console.log(e1.hasAllAccess());
console.log(e1);
console.log(e1.firstName);
var e2 = new Level3Employee("Dave", "lin", 50);
console.log(e2);
console.log(e2.hasAllAccess());
console.log(e2.age);
//console.log ( e2.hasAllAccess())
