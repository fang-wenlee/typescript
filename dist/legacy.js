var MessageC = /** @class */ (function () {
    function MessageC(title, message, id, email) {
        this.title = title;
        this.message = message;
        this.id = id;
        this.email = email;
    }
    MessageC.prototype.doEmailMatch = function (email) {
        return this.email === email;
    };
    return MessageC;
}());
function MessageOld(title, message, id, email) {
    this.title = title;
    this.message = message;
    this.id = id;
    this.email = email;
    // method in legacy class, should have this. instead of var 
    this.isEmailMathch = function (email) {
        return this.email === email;
    };
}
var mesg1 = new MessageOld("Hello", "Good morning", 123, "fangwen.lee@poly.com");
console.log(mesg1.isEmailMathch("fawn@yahoo.com"));
// const mesgnew = new Message("Hello", "Good morning", 1234, "fanglee@cisco.com")
// console.log (mesgnew.doEmailMatch("fanglee@cisco.com"))
