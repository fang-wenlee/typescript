"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(age, name, legs) {
        this.age = age;
        this.name = name;
        this.legs = legs;
    }
    return Animal;
}());
exports.Animal = Animal;
//derived || Child class
var Dog = /** @class */ (function () {
    function Dog(age, name, legs) {
        this.age = age;
        this.name = name;
        this.legs = legs;
    }
    Dog.prototype.woof = function () {
        return 'WOOF! WOOF! WOOF!';
    };
    return Dog;
}());
exports.Dog = Dog;
var myDog = new Dog(14, "Kaui Kaui", 4);
console.log(myDog.woof());
console.log(myDog.age);
