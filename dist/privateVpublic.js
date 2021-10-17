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
var Animal1 = /** @class */ (function () {
    function Animal1(age, legs, name) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
    Object.defineProperty(Animal1.prototype, "mylegs", {
        get: function () {
            return this.legs;
        },
        enumerable: false,
        configurable: true
    });
    return Animal1;
}());
var Cat1 = /** @class */ (function (_super) {
    __extends(Cat1, _super);
    function Cat1(age, legs, name) {
        return _super.call(this, age, legs, name) || this;
    }
    return Cat1;
}(Animal1));
var jew = new Cat1(10, 4, "Jew Jew");
console.log(jew);
console.log(jew.name, "has ", jew.mylegs, "legs");
// console.log(jew.legs)//Cant access the legs property, because is privage; legs can only access via class itself
