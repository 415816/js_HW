// Objective: Search for an object within an array of objects.

// Task 1: Find Object in Array
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
];

const found = findProductById(2);
console.log("Found Product:", found); //{ id: 2, name: "Phone", price: 500 },

function findProductById(id) {
  //implement
  // for (const product of products) {
  //   if (product.id === id) {
  //     return product;
  //   }
  // }

  return products.filter((product) => product.id === id);
}
