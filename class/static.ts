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
