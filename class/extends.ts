export class Animal{
     
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

export class Dog extends Animal{
    
    woof(): string {
        return 'WOOF! WOOF! WOOF!';
    }

}
export class Cat extends Animal{
   meow():string{
        return 'Meow! Meow!'
   }
}

const myDog = new Dog(14,"Kaui Kaui", 4);
console.log ( myDog.woof());
console.log ( myDog.age);

const myCat = new Cat(11,"Baby", 4);
myCat.meow();
