class Message{
   title;
   message;
   id;
    constructor(title, message, id){
        this.title = title;
        this.message = message;
        this.id = id;
    }
}
const mesg1 = new Message("Good Morning", "How are you", "1")
console.log(mesg1.title)

console.log(mesg1)