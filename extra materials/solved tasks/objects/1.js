/*
Description: Write a function filterByAge that takes an array of objects and a number as input. 
Each object has a property age. 
The function should return a new array with objects where the age property is greater than the given number.
UPDATE:
передавать ключ по которому ищем
*/
const people = [
  { name: "Alice", age: 25 },
  { name: "Alice", age: 35 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 },
];
console.log(filterByAge(people, 21)); // Output: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }]

// function filterByAge(arr = people, key, value) {
//   const result = [];
//   for (const person of arr) {
//     if (person.age >= age) {
//       result.push(person);
//     }
//   }
//   return result;
// }
console.log(filterByAge(people, "name", "Alice"));
console.log(filterByAge(people, "name", "Grisha"));
console.log(filterByAge(people, "salary", 50));
console.log(filterByAge(people, "age", 35));

// function filterByAge(arr = people, key, value) {
//   const result = [];
//   for (const person of arr) {
//     // (key in object) => boolean
//     if (key in person && person[key] === value) {
//       result.push(person);
//     }
//   }
//   return result;
// }

// function filterByAge(arr = people, key, value) {
//   const result = arr.filter((person) => {
//     if (key in person && person[key] === value) {
//       return person;
//     }
//   });
// }

function filterByAge(arr = people, key, value) {
  return arr.filter((person) => key in person && person[key] === value);
}
