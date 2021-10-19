/**
 * -----------------------------
 * Challenge 3: Encapsulation
 * -----------------------------
 * 1. Use the classes below.
 * 2. Add an appropriate readonly property to the User class.
 * 3. Be explicit with your public properties our User class.
 * 4. Add an appropriate protected property in User and access it with a private method in Admin.
 */

class AUser{
     public  readonly id: string;
     public firstName : string;
     public lastName: string;
     public email: string;
     protected dob: Date;

    //  constructor(id:string, firstName: string, lastName: string, email:string){
    //      this.id = id;
    //      this.firstName = firstName;
    //      this.lastName = lastName;
    //      this.email = email;
      
          
    //     }
       public get fullName():string{
             return `${this.firstName} ${this.lastName}`
        }
        public doesEmail(email:string):boolean{
             return this.email === email;
        }
       
}

class Adminstrator extends AUser{
    public readonly yearborn: number;
    constructor(firstName: string, lastName: string, email:string){
       super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;  
        this.yearborn = this.getYear(); 
       }
       
    private  getYear():number{
        
          return this.dob.getFullYear();
    }
}

const admin = new Adminstrator("fang", "lee", "fang@poly.com")
console.log(admin)