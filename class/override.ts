class Animals{
    age:number;
    legs:number;
    name:string;
    constructor(age:number, legs:number, name:string){
         this.age = age;
         this.legs = legs;
         this.name = name;
    }

    sound():string{
        return 'Wan! Wan! Wan!'
    }
}

class Dogs extends Animals{
   
   constructor(data: {age:number, legs:number, name:string} ){
       super(data.age, data.legs, data.name);
   }

   sound():string{
    //override method
    super.sound(); 
    return 'Woff! Woff! Woff!'
}
}

const dog = new Dogs({age:14, legs: 4, name: "Kaui Kaui"});

console.log ( dog.age);
console.log ( dog.sound());
