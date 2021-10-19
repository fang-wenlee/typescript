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
var Animals = /** @class */ (function () {
    function Animals(age, legs, name) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
    Animals.prototype.sound = function () {
        return 'Wan! Wan! Wan!';
    };
    return Animals;
}());
var Dogs = /** @class */ (function (_super) {
    __extends(Dogs, _super);
    function Dogs(data) {
        return _super.call(this, data.age, data.legs, data.name) || this;
    }
    Dogs.prototype.sound = function () {
        //override method
        _super.prototype.sound.call(this);
        return 'Woff! Woff! Woff!';
    };
    return Dogs;
}(Animals));
var dog = new Dogs({ age: 14, legs: 4, name: "Kaui Kaui" });
console.log(dog.age);
console.log(dog.sound());
