/**
 * -----------------------------
 * Challenge 3: Encapsulation
 * -----------------------------
 * 1. Use the classes below.
 * 2. Add an appropriate readonly property to the User class.
 * 3. Be explicit with your public properties our User class.
 * 4. Add an appropriate protected property in User and access it with a private method in Admin.
 */
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
var AUser = /** @class */ (function () {
    function AUser() {
    }
    Object.defineProperty(AUser.prototype, "fullName", {
        //  constructor(id:string, firstName: string, lastName: string, email:string){
        //      this.id = id;
        //      this.firstName = firstName;
        //      this.lastName = lastName;
        //      this.email = email;
        //     }
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    AUser.prototype.doesEmail = function (email) {
        return this.email === email;
    };
    return AUser;
}());
var Adminstrator = /** @class */ (function (_super) {
    __extends(Adminstrator, _super);
    function Adminstrator(firstName, lastName, email) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.email = email;
        _this.yearborn = _this.getYear();
        return _this;
    }
    Adminstrator.prototype.getYear = function () {
        return this.dob.getFullYear();
    };
    return Adminstrator;
}(AUser));
var admin = new Adminstrator("fang", "lee", "fang@poly.com");
console.log(admin);
