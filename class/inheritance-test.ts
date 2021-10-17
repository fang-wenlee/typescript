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
   
      constructor(firstName:string, lastName:string, email:string){
          super(firstName, lastName,email);
      }

}

class Guest implements User1{
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    constructor(firstName:string, lastName:string, email:string, address: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
    }
}
const admin1 = new Admin("fang", "lee", "fang@test.com")
console.log(admin1)
const g1 = new Guest("fang", "lee", "fang@test.com", "Fremont")
console.log(g1)