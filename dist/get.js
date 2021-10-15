"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var Message = /** @class */ (function () {
    function Message(title, message, email) {
        this.title = title;
        this.message = message;
        this.email = email;
    }
    Object.defineProperty(Message.prototype, "emailcontent", {
        get: function () {
            return "Title: " + this.title + " Messagge: " + this.message;
        },
        enumerable: false,
        configurable: true
    });
    return Message;
}());
exports.Message = Message;
