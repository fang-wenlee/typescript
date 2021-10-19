var MessageS = /** @class */ (function () {
    function MessageS(title, message, email) {
        this._isSent = false;
        this.title = title;
        this.message = message;
        this.email = email;
        this.isSent = false;
    }
    Object.defineProperty(MessageS.prototype, "isSent", {
        get: function () {
            return this._isSent;
        },
        set: function (value) {
            this._isSent = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MessageS.prototype, "emailcontent", {
        get: function () {
            var sentMessage = this.isSent ? 'Has been sent.' : 'Has not been sent.';
            return sentMessage;
        },
        enumerable: false,
        configurable: true
    });
    return MessageS;
}());
var message1 = new MessageS("Work Condiction", "Please let me know what is the working environment", "john@hotmail.com");
console.log(message1.emailcontent);
console.log(message1.isSent);
message1.isSent = true;
console.log(message1.isSent);
message1.isSent = false;
console.log(message1.isSent);
console.log(message1.emailcontent);
