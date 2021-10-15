var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.mergeClassicUser = function (params) {
        var _a = this, name = _a.name, isMale = _a.isMale, age = _a.age, email = _a.email;
        this.classicUserData = __assign({ name: name, isMale: isMale, age: age, email: email }, params);
    };
    return User;
}());
var user1 = new User();
user1.mergeClassicUser({ name: { first: "fang", last: "lee" }, isMale: false, age: 40, email: 'fang@poly.com' });
console.log(user1.classicUserData.name.first);
console.log("User1 with more parameters: ", user1);
var user2 = new User();
user2.mergeClassicUser({ name: { first: 'Fawn', middle: 'W.', last: 'Wang' } });
console.log(user2.classicUserData.name.middle);
