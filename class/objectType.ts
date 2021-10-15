

function user( employee:{first:string; last:string; age:number}): string{

    return `Hello  ${employee.first}  ${employee.last}`;
}


console.log(user({first: "Fang-Wen", last: "Lee", age: 30}))