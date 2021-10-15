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

