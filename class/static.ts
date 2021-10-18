//wecan only acess it eith a proptery of a method of class not having it instantiated
// it sort of becomes a utility function to a degree

class Triple {
    static customName = 'Tripler';
    static description = 'I triple any number you provide';

    static calculate(n = 1):number {
      return n * 3;
    }
  }
  
  class SquaredTriple extends Triple {
    static longDescription:string;
    static description:string = 'I square the triple of any number you provide';
    n:number;
    static calculate(n):number{
      return super.calculate(n) * super.calculate(n);
    }
  }
  

  console.log(Triple.description);            // 'I triple any number you provide'
  console.log(Triple.calculate());            // 3
  console.log(Triple.calculate(6));           //18

  const tp = new Triple();//cant acess either protected propter or method 

console.log(SquaredTriple.calculate(3));    // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description);     // 'I square the triple of any number you provide'
//console.log(SquaredTriple.longDescription); // undefined
console.log('+++++++++++++++++++++++++++++++++++++++++++++++');
console.log('+++++++++++++++++++++++++++++++++++++++++++++++');
//=============================================================
//========================================================
class Meg{
      title: string;
      message: string;
      _isSent: boolean= false;

      get isSent():boolean{
           return this._isSent
      }
      set isSent(vale:boolean){
          this._isSent = vale;
      }
      constructor(title:string, message: string){
           this.title = title;
           this.message= message;
      }
      get briefMeg():string{
           return this.message.slice(0, 10).concat("...")
      }

}
const greeting = new Meg("Moday working Status", "What is the progree for ticket")

// console.log(greeting.briefMeg)
// console.log ( greeting.isSent)
// console.log ( greeting.isSent = true)
// console.log ( greeting.isSent)

//class Messages extends Array<Meg> {
   
    // public getValidMessags():Meg[]{
    //     return this.filter(value=> value.message.trim().length > 0 )
    // }
    // public static getValidMessags(messages: Meg[]):Meg[]{
    //     console.log(messages)
    //       return messages.filter(value=> value.message.length > 0 );
    //  }
//}


//console.log ( Messages.getValidMessags( [] ) )
 
// const newMeg = new Messages<Meg>("Good mornig");
//  console.log(newMeg)
// console.log(newMeg.getValidMessags<Meg>() );

class MyArray<T> extends Array<T> {
    remove: (elem: T) => Array<T> = function(elem: T) {
        return this.filter(e => e !== elem);
    }
}
let myArr = new MyArray<string>("Good", "Bad", "some");
console.log(myArr)
// console.log ( myArr.remove("some"))


