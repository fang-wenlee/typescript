// 1. Create a Admin class that extends User
// 2. Cretae a Gest class that implement User4. Haave both classes pass firstName, lastName and email in their constructor
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
var User1 = /** @class */ (function () {
    function User1(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User1;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstName, lastName, email) {
        return _super.call(this, firstName, lastName, email) || this;
    }
    Object.defineProperty(Admin.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Admin;
}(User1));
var Guest = /** @class */ (function () {
    function Guest(firstName, lastName, email, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
    }
    Object.defineProperty(Guest.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    Guest.prototype.chkEmail = function (email) {
        return this.email === email;
    };
    return Guest;
}());
var admin1 = new Admin("fang", "lee", "fang@test.com");
console.log("Admin: ", admin1.fullName);
var g1 = new Guest("fang", "lee", "fang@test.com", "Fremont");
console.log(g1);
console.log(g1.chkEmail("dave2@yaoo.com")); //false
