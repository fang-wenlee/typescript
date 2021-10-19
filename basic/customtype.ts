//define custom type with interface

interface InventoryItem{
      displayName: string;
      inventoryType: string;
      trackingNumber: number;
      createDate: Date;
      originalCost: number;
}

function getInventoryItem(trackingNumber:number): InventoryItem{
   
      if(trackingNumber === 1 ){
           return  { displayName:"Running shoes", inventoryType:"Sport", trackingNumber:12345, createDate: new Date(), originalCost: 120} ;
      }else {
              return null;
      }
          
       
        
}
console.log ( getInventoryItem(10));