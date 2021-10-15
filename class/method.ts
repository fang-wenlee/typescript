//method is nothing more than funcitons that belong to our classes

export class MessageM{
     title:string;
     message:string;
     isSent:boolean;

     constructor(title:string, message:string){
          this.title = title;
          this.message = message;
          this.isSent = false;
     }

     printMessage():string{
          return this.message.slice(0, 16).concat('...')
     }

}

const mesg1 = new MessageM("New Course!! Just $9.99!!!", "Check out our latest course on OOP with JavaScript");
console.log(mesg1.printMessage())