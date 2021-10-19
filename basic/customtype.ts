//define custom types with interface;  define structure of object with interfaces
//enhancing interface definitions,readonly, ?
//enum and liter type to restricting possible value
//Allowing varialbe to be multiple types: Unitype instead of using any type

//let originalCost : number | string; 
type cost = number | string; //type keyword to assign a varialbe to accept multiple type 
let originalCost :cost;

enum InventoryItemCategory{
      Computer = "computer",
      Funiture = "funiture",
      Sport = "sport"
      
  }
interface InventoryItem{
      displayName: string;
      inventoryType:InventoryItemCategory; // enum type
     // inventoryType: "computer" | "funiture" | "sport"; //literal types
      readonly trackingNumber: number;
      createDate: Date;
      originalCost?: number;

      // adding method
      addNote?(note:string):string 

      // listPrice: (cost:number) => number
}

function getInventoryItem(trackingNumber:number): InventoryItem{
   
      if(trackingNumber === 1 ){
           return  { displayName:"Running shoes", inventoryType:InventoryItemCategory.Sport, trackingNumber:12345, createDate: new Date(), originalCost: 100} ;
      }else {
              return null;
      }
          
       
        
}
function saveInventoryItem(item:InventoryItem){
  
   console.log("save: ", item)
}


let inventoryItem = getInventoryItem(1);
inventoryItem.createDate = new Date();
console.log("Original Price:", inventoryItem.originalCost)

saveInventoryItem(inventoryItem)

saveInventoryItem({displayName:"MacBook Pro 15 Retina",
                   inventoryType: InventoryItemCategory.Computer,
                   trackingNumber: 123456232,
                   createDate: new Date(),
 })