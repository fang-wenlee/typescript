//define custom type with interface
function getInventoryItem(trackingNumber) {
    if (trackingNumber === 1) {
        return { displayName: "Running shoes", inventoryType: "Sport", trackingNumber: 12345, createDate: new Date(), originalCost: 120 };
    }
    else {
        return null;
    }
}
console.log(getInventoryItem(10));
