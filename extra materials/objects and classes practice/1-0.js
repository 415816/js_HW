/*
Objective: Implement a simple inventory management system using objects and arrays.
*/

const inventory = {
  items: [
    { id: 1, name: "Apple", quantity: 10, price: 1 },
    { id: 2, name: "Banana", quantity: 20, price: 0.5 },
    { id: 3, name: "Pineapple", quantity: 5, price: 1.5 },
  ],

  addItem: function ({ name, quantity, price }) {
    const newId = Math.max(...this.items.map((el) => el.id)) + 1;
    this.items.push({ id: newId, name, quantity, price });
  },

  removeItem: function (id) {
    //void
    //implement
    const index = this.items.findIndex((el) => el.id === id);
    this.items.splice(index, 1);
  },

  getTotalValue: function () {
    //returns number
    //implement
    return this.items.reduce((res, item) => res + item.price, 0);
  },
};

// Adding a new item
inventory.addItem({ name: "Orange", quantity: 15, price: 0.75 });
console.log("Inventory after adding Orange:", inventory.items);

// Removing an item
inventory.removeItem(2);
console.log("Inventory after removing Banana:", inventory.items);

// Getting the total value
console.log("Total Inventory Value:", inventory.getTotalValue());
