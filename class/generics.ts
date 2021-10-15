class User <T>{//use <> to denote generic 
    name:string;
    age:number;
    email:string;
    isMale:boolean;
    classicUserData:any;

    mergeClassicUser(params:T):void{

        const {name, isMale, age, email} = this;

        this.classicUserData = {name, isMale, age, email, ...params}
    }
}
interface ClassicUser1{
     name: {first: string, last:string};
}

interface ClassicUser2{
    name: {first: string, middle:string,  last:string};
}

const user1 = new User<ClassicUser1>();

user1.mergeClassicUser( {name: {first:"fang",  last: "lee" }, isMale: false , age: 40, email: 'fang@poly.com' });
console.log ( user1.classicUserData.name.first )
console.log ("User1 with more parameters: ", user1 )
const user2 = new User<ClassicUser2>();

user2.mergeClassicUser({name:{first:'Fawn', middle:'W.', last:'Wang'}});
console.log( user2.classicUserData.name.middle )