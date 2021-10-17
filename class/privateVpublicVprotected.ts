class Animal1{
    // by default, the property is public 
     protected age: number;
     private legs: number;
     name: string;

     constructor(age:number, legs: number, name:string){
          this.age = age;
          this.legs = legs;
          this.name = name;
     }
     get mylegs():number{
          return this.legs
     }
}

class Cat1 extends Animal1{
     
    constructor(age:number, legs: number, name:string){
         super(age, legs, name)
    }

    get myage():number{
          return this.age;
    }
}
const jew = new Cat1(10, 4, "Jew Jew")

console.log(jew)
console.log(jew.name, "has " ,jew.mylegs, "legs")
// console.log(jew.legs)//Cant access the legs property, because is privage; legs can only access via class itself

//console.log(jew.age)//age is protected

console.log("Age: ", jew.myage)
