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


const myDog = new Dog(14,"Kaui Kaui", 4);
console.log ( myDog.woof());
console.log ( myDog.age);

