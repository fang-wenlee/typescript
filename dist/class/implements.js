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
var Cat = /** @class */ (function () {
    function Cat(age, name, legs) {
        this.age = age;
        this.name = name;
        this.legs = legs;
    }
    return Cat;
}());
var myDog = new Dog(14, "Kaui Kaui", 4);
console.log(myDog.woof());
console.log("My dog is " + myDog.age + " years old.");
var myCat = new Cat(3, "baby", 4);
console.log(myCat);
console.log(myCat instanceof Animal); //false
console.log(myDog instanceof Animal); //true
