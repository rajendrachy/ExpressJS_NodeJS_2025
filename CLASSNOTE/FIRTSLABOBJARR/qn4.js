// You are given an array of product objects with array-based categories.
// const products = [
//     { name: 'Pen', categories: ['stationery', 'writing'] },
//     { name: 'Laptop', categories: ['electronics', 'computers'] },
//     { name: 'Chair', categories: [] },
//     { name: 'Water Bottle', categories: ['kitchen', 'storage'] }
// ];


// Task:
// Write a function to:
// Return a new array of strings in the format:
//  "<Product Name>: <Category1>, <Category2>".


// If categories array is empty, return:
//  "<Product Name>: No Categories".




// const products = [
//   { name: 'Pen', categories: ['stationery', 'writing'] },
//   { name: 'Laptop', categories: ['electronics', 'computers'] },
//   { name: 'Chair', categories: [] },
//   { name: 'Water Bottle', categories: ['kitchen', 'storage'] }
// ];


// function formatProductCategories(products) {
//   return products.map(product => {
//     if (product.categories.length === 0) {
//       return `${product.name}: No Categories`;
//     } else {
//       return `${product.name}: ${product.categories.join(', ')}`; // join => Converts an array to a human-readable string.
//     }
//   });
// }




// console.log(formatProductCategories(products));



