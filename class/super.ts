class Animal{
     age:number;
     legs:number;
     name:string;
     constructor(age:number, legs:number, name:string){
          this.age = age;
          this.legs = legs;
          this.name = name;
     }
}

class Dog extends Animal{
    
    constructor(data: {age:number, legs:number, name:string} ){
        super(data.age, data.legs, data.name);
    }
}

const myDog = new Dog({age:14, legs: 4, name: "Kaui Kaui"});

console.log ( myDog.age);
console.log ( myDog);