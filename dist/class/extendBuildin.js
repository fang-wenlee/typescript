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
var PowerArray = /** @class */ (function (_super) {
    __extends(PowerArray, _super);
    function PowerArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PowerArray.prototype.isEmpty = function () {
        return this.length === 0;
    };
    PowerArray.prototype.remove = function (item) {
        var index = this.indexOf(item);
        if (index === -1) {
            throw new Error(item + " not in list");
        }
        this.splice(index, 1);
        return this;
    };
    return PowerArray;
}(Array));
//https://www.typescriptlang.org/play?#code/MYGwhgzhAEAKD2B3ApgJwIKtWAngHgBUA+aZADwBdkA7AExk232OgG8AoaaTr6ASwgBRALYAHCjgAUASjY9e0VMgoBXVNWgUAFgIB0IGgHNt0ALznoABgDc86AF870USoBGIPsEXJh8AG7IknxUwgBcBNKhAPKuAFbIwBQcCgrA8NQQFPx05GaaOhC6fDlkUQBmQSHStim8fGXQQSVmFgC0AIyyybW82qhI0NTIiNCCWPCokgAGACSswT72g-BZxdAemVPVTryOPfl6EKIewIHFtOQANNCdNT1KquoHEDt73FxvPAZZYFjteUMRggUBgsLg8NQVMJXGgiJJ2tcAEzXACs2y4aQy8AM+nghkkv1QnXkmIg2OQuPx0EJ7V0Sl8AUkiNk6OgpPJlIJfyKQjEEhk1WgAHohdAymAQBBkDwgA
//there is no error when run on TypeScript  site
var arr1 = new PowerArray(1, 2, 5, 10, 23);
console.log(arr1);
console.log(arr1.remove(2));
console.log(arr1.isEmpty()); // false 
