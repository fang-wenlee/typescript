//based || parent class
class Animal{
     
    age:number;
    name:string;
    legs:number;

    constructor( age:number, name:string, legs:number){
         this.age = age;
         this.name = name;
         this.legs = legs;
    }

}
//derived || Child class

class Dogs extends Animal{


}

const dog = new Dogs(14,"Kaui Kaui", 4);

console.log(dog)