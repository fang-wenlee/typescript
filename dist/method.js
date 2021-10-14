"use strict";
//method is nothing more than funcitons that belong to our classes
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var Message = /** @class */ (function () {
    function Message(title, message) {
        this.title = title;
        this.message = message;
        this.isSent = false;
    }
    Message.prototype.printMessage = function () {
        return this.message.slice(0, 16).concat('...');
    };
    return Message;
}());
exports.Message = Message;
var mesg1 = new Message("New Course!! Just $9.99!!!", "Check out our latest course on OOP with JavaScript");
console.log(mesg1.printMessage());
