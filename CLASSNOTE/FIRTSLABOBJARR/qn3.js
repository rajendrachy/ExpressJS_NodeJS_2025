// You are given an array of customer orders. Some orders may:
// Have empty item lists.


// Contain items with missing prices (assume price as ₹0 if missing).


// Contain items with missing quantities (assume quantity as 1 if missing).
// const orders = [
//     { id: 1, items: [{ name: 'Pen', price: 10, quantity: 2 }, { name: 'Notebook', price: 50 }] },
//     { id: 2, items: [{ name: 'Bag', price: 700, quantity: 1 }, { name: 'Bottle', price: 300, quantity: 2 }] },
//     { id: 3, items: [{ name: 'Chair', price: 1500 }] },
//     { id: 4, items: [] },
//     { id: 5, items: [{ name: 'Lamp', quantity: 3 }] } // Missing price
// ];



// Task:
// Write a function getHighValueOrders() that filter all the orders and return an array where:


// The total cost of items is more than ₹1000.


// An item's missing price should be considered ₹0.


// An item's missing quantity should be considered as 1.


// Orders with no items should be safely ignored.


// The function should return an array of order IDs that satisfy the condition.




// const orders = [
//     { id: 1, items: [{ name: 'Pen', price: 10, quantity: 2 }, { name: 'Notebook', price: 50 }] },
//     { id: 2, items: [{ name: 'Bag', price: 700, quantity: 1 }, { name: 'Bottle', price: 300, quantity: 2 }] },
//     { id: 3, items: [{ name: 'Chair', price: 1500 }] },
//     { id: 4, items: [] },
//     { id: 5, items: [{ name: 'Lamp', quantity: 3 }] } // Missing price
// ];


// function getHighValueOrders() {
//   return orders
//     .filter(order => {
//       let total = 0;
//       for (let item of order.items) {
//         total += (item.price || 0) * (item.quantity || 1);
//       }

//       return total > 1000;

//     })
//     .map(val => val.id);
// }

// console.log(getHighValueOrders(orders));





