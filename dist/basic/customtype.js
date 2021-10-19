//define custom types with interface
//enhancing interface definitions
function getInventoryItem(trackingNumber) {
    if (trackingNumber === 1) {
        return { displayName: "Running shoes", inventoryType: "Sport", trackingNumber: 12345, createDate: new Date(), originalCost: 100 };
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
    inventoryType: "computer",
    trackingNumber: 123456232,
    createDate: new Date(),
});
