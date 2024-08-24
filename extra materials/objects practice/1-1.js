// Objective: Count the occurrences of a specific property value in an array of objects.
const orders = [
  { orderId: 1, status: "shipped" },
  { orderId: 2, status: "pending" },
  { orderId: 3, status: "shipped" },
  { orderId: 4, status: "delivered" },
];

function countStatusOccurrences(value) {
  return orders.reduce((total, element) => {
    if (element.status === value) {
      total++;
    }
    return total;
  }, 0);
}

const shippedCount = countStatusOccurrences("shipped");
console.log("Shipped Orders Count:", shippedCount); //Shipped Orders Count: 2
