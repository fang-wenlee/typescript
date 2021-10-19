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

export class Dog implements Animal{
    age:number;
    name:string;
    legs:number;

    constructor(age:number, name: string, legs:number) {
        this.age =age;
        this.name = name;
        this.legs = legs;
    }

    woof(): string {
        return 'WOOF! WOOF! WOOF!';
    }

}

class Cat implements Animal{
    age:number;
    name:string;
    legs:number;

    constructor( age:number, name:string, legs:number){
         this.age = age;
         this.name = name;
         this.legs = legs;
    }
}


const myDog = new Dog(14,"Kaui Kaui", 4);
console.log ( myDog.woof());
console.log (`My dog is ${myDog.age} years old.`);

const myCat = new Cat(3, "baby", 4);
console.log(myCat)
console.log(myCat instanceof Animal); //false
console.log(myDog instanceof Animal);//true

