 class MessageS{
    title:string;
    message:string;
    email: string;
 
    private  _isSent: boolean = false;
    
    set isSent(value: boolean){
   
       this._isSent = value;
   }
   get isSent():boolean{
        return this._isSent;
   }
    constructor(title:string, message:string, email:string){
        this.title = title;
        this.message = message;
        this.email = email;
        this.isSent = false;
          
    }

    get emailcontent():string{
          const sentMessage = this.isSent ? 'Has been sent.' : 'Has not been sent.';

         return sentMessage
         
    }
   
    
}
const message1 = new MessageS("Work Condiction", "Please let me know what is the working environment", "john@hotmail.com")

console.log(message1.emailcontent);
console.log ( message1.isSent)
message1.isSent = true;
console.log ( message1.isSent)
message1.isSent = false;
console.log ( message1.isSent)
console.log(message1.emailcontent);
