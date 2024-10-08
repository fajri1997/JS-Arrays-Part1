const groceries = ["banana", "apple", "milk", "tea", "eggs", "bread"];

console.log(groceries[1]);
console.log(groceries.length);
const removeGroceries = groceries.pop();
console.log(groceries);

let firstThreeItems = groceries.slice(0, 3);
console.log(firstThreeItems);

//🌶️🌶️🌶️ **Challenge**

// 1. Delete the 3rd element in the array
// 2. Insert a new element at the beginning of the array
// 3. Remove the first two elements and replace them with “ketchup” and “chili”
/////////////////////////
// const removeGroceries3rdelement = groceries.slice(3);
// console.log(`we removed ${removeGroceries3rdelement}`);

// delete groceries[2];
// console.log(groceries);

groceries.splice(2, 1);
console.log(groceries);

groceriesNew = groceries.push("coffee");
console.log(groceries);

groceries.splice(0, 2, "ketchup", " chili ");
console.log(groceries);
