//wecan only acess it eith a proptery of a method of class not having it instantiated
// it sort of becomes a utility function to a degree
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
var Triple = /** @class */ (function () {
    function Triple() {
    }
    Triple.calculate = function (n) {
        if (n === void 0) { n = 1; }
        return n * 3;
    };
    Triple.customName = 'Tripler';
    Triple.description = 'I triple any number you provide';
    return Triple;
}());
var SquaredTriple = /** @class */ (function (_super) {
    __extends(SquaredTriple, _super);
    function SquaredTriple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SquaredTriple.calculate = function (n) {
        return _super.calculate.call(this, n) * _super.calculate.call(this, n);
    };
    SquaredTriple.description = 'I square the triple of any number you provide';
    return SquaredTriple;
}(Triple));
console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); //18
var tp = new Triple(); //cant acess either protected propter or method 
console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
//console.log(SquaredTriple.longDescription); // undefined
