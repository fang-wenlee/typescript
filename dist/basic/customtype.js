//define custom types with interface;  define structure of object with interfaces
//enhancing interface definitions,readonly, ?
//enum and liter type to restricting possible value
//Allowing varialbe to be multiple types: Unitype instead of using any type
var originalCost;
var InventoryItemCategory;
(function (InventoryItemCategory) {
    InventoryItemCategory["Computer"] = "computer";
    InventoryItemCategory["Funiture"] = "funiture";
    InventoryItemCategory["Sport"] = "sport";
})(InventoryItemCategory || (InventoryItemCategory = {}));
function getInventoryItem(trackingNumber) {
    if (trackingNumber === 1) {
        return { displayName: "Running shoes", inventoryType: InventoryItemCategory.Sport, trackingNumber: 12345, createDate: new Date(), originalCost: 100 };
    }
    else {
        return null;
    }
}
function saveInventoryItem(item) {
    console.log("save: ", item);
}
var inventoryItem = getInventoryItem(1);
inventoryItem.createDate = new Date();
console.log("Original Price:", inventoryItem.originalCost);
saveInventoryItem(inventoryItem);
saveInventoryItem({ displayName: "MacBook Pro 15 Retina",
    inventoryType: InventoryItemCategory.Computer,
    trackingNumber: 123456232,
    createDate: new Date(),
});
