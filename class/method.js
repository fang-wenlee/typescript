//method is nothing more than funcitons that belong to our classes

class Message{
     title;
     message;
     isSent;

     constructor(title, message){
          this.title = title;
          this.message = message;
          this.isSent = false;
     }

     printMessage(){
          return this.message.slice(0, 16).concat('...')
     }

}

const mesg1 = new Message("New Course!! Just $9.99!!!", "Check out our latest course on OOP with JavaScript");
console.log(mesg1.printMessage())