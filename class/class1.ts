export class Message{
   title:string;
   message:string;
  id:string;

    constructor(title:string, message:string, id:string) {
            this.title = title;
            this.message = message;
            this.id = id;
    }
}
const mesg1 = new Message("Good Morning", "How are you", "1")
// console.log(mesg1.title)

// console.log(mesg1)