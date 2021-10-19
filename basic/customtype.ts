//define custom types with interface
//enhancing interface definitions

interface InventoryItem{
      displayName: string;
      inventoryType: string;
      readonly trackingNumber: number;
      createDate: Date;
      originalCost?: number;

      // adding method
      addNote?(note:string):string 

      // listPrice: (cost:number) => number
}

function getInventoryItem(trackingNumber:number): InventoryItem{
   
      if(trackingNumber === 1 ){
           return  { displayName:"Running shoes", inventoryType:"Sport", trackingNumber:12345, createDate: new Date(), originalCost: 100} ;
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
                   inventoryType: "computer",
                   trackingNumber: 123456232,
                   createDate: new Date(),
 })