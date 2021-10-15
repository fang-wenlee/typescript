"use strict";
//method is nothing more than funcitons that belong to our classes
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageM = void 0;
var MessageM = /** @class */ (function () {
    function MessageM(title, message) {
        this.title = title;
        this.message = message;
        this.isSent = false;
    }
    MessageM.prototype.printMessage = function () {
        return this.message.slice(0, 16).concat('...');
    };
    return MessageM;
}());
exports.MessageM = MessageM;
var mesg1 = new MessageM("New Course!! Just $9.99!!!", "Check out our latest course on OOP with JavaScript");
console.log(mesg1.printMessage());
