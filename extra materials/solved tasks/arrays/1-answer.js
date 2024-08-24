/* 
Description: Write a function countOccurrences that takes an array and a value as input, 
and returns the number of times the value occurs in the array.
*/

const array = [1, 2, 2, 3, 2, 4, 5];
console.log(countOccurrences(array, 2)); // Output: 3

// function countOccurrences(arr, num) {
//   let counter = 0;
//   for (const number of arr) {
//     if (number === num) {
//       counter++;
//     }
//   }
//   return counter;
// }

function countOccurrences(arr, num) {
  const result = arr.filter((el) => el === num).length;
  return result;
}

const str = "I am super QA engineer ever!!";
// function getCharCount(str) {
//   const arrayOfSymbols = str.split("");
//   const abc = "abcdefghijklmnopqrstuvwxyz";
//   const result = [];
//   for (const char of arrayOfSymbols) {
//     if (abc.includes(char.toLowerCase())) {
//       const count = arrayOfSymbols.filter((el) => el.toLowerCase() === char.toLowerCase()).length;
//       result.push(count);
//     } else {
//       result.push(char);
//     }
//   }
//   return result.join("");
// }

console.log(getCharCount(str));

function getCharCount(str) {
  const arrayOfSymbols = str.split("");
  const abc = "abcdefghijklmnopqrstuvwxyz";
  const result = arrayOfSymbols.map((char) => {
    if (abc.includes(char.toLowerCase())) {
      const count = arrayOfSymbols.filter((el) => el.toLowerCase() === char.toLowerCase()).length;
      return count;
    } else {
      return char;
    }
  });

  return result.join("");
}
