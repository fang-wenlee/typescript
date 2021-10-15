export class Message{
     title:string;
     message:string;
     email: string;
     constructor(title:string, message:string, email:string){
         this.title = title;
         this.message = message;
         this.email = email;

     }
     get emailcontent():string{
           return `Title: ${this.title} Messagge: ${this.message}`
     }
}

const mesg1 = new Message("Work status", "Please let me know when I can start to work.", "fang-wen@hotmail.com")
console.log(mesg1.emailcontent) 

