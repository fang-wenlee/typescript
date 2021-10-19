class Employee {
     firstName: string;
     lastName: string;
    age: number;
     

     constructor(firstName:string, lastName: string, age:number){
           this.firstName = firstName;
           this.lastName = lastName;
           this.age = age;
     }

}

class Level1Employee extends Employee{

    protected role: string;

   public hasAllAccess():boolean{
        return this.role === "Admin";
    }
}
class Level3Employee extends Level1Employee{
      role ="Admin";
      password: string;

      constructor(firstName:string, lastName: string, age: number){
            super(firstName, lastName, age)
      }

      //overrride method=====================
      public hasAllAccess():boolean{
        return true;
    }

   //public hasAllAccess(user?: <User>):boolean{
    //option1 public hasAllAccess(user: {}):boolean{
    // public hasAllAccess(user = new User{}):boolean{
       // return  user.age > 30 ;
     //}
}

const e1 = new Level1Employee("fange", "lee", 20)
console.log ( e1.hasAllAccess());
console.log(e1)
console.log(e1.firstName)
const e2 = new Level3Employee("Dave", "lin", 50);
console.log(e2)
console.log(e2.hasAllAccess())
console.log(e2.age)
//console.log ( e2.hasAllAccess())
