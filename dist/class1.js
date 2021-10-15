"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var Message = /** @class */ (function () {
    function Message(title, message, id) {
        this.title = title;
        this.message = message;
        this.id = id;
    }
    return Message;
}());
exports.Message = Message;
var mesg1 = new Message("Good Morning", "How are you", "1");
// console.log(mesg1.title)
// console.log(mesg1)
