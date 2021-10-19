// 1. Create a Admin class that extends User
// 2. Cretae a Gest class that implement User4. Haave both classes pass firstName, lastName and email in their constructor

class User1{
     firstName: string;
     lastName: string;
     email: string;
     constructor(firstName: string, lastName: string, email: string){
          this.firstName = firstName;
          this.lastName = lastName;
          this.email = email;
           
     }
}
class Admin extends User1{
    firstName: string;
    lastName: string;
    email: string;
   
    get fullName():string{
         return this.firstName + " " + this.lastName
    }
      constructor(firstName:string, lastName:string, email:string){
          super(firstName, lastName,email);
      }

}

class Guest implements User1{
    firstName: string;
    lastName: string;
    email: string;
    address: string;

    get fullName(): string{
        return this.firstName + " " + this.lastName
    }
    constructor(firstName:string, lastName:string, email:string, address: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
    }

    chkEmail(email:string):boolean{
         return this.email === email;
    }

    
}
const admin1 = new Admin("fang", "lee", "fang@test.com")
console.log("Admin: ", admin1.fullName);
const g1 = new Guest("fang", "lee", "fang@test.com", "Fremont")
console.log(g1);
console.log( g1.chkEmail("dave2@yaoo.com") );//false