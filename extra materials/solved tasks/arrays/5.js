/*
Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
где в каждом числе переставлены цифры так, 
чтобы число получилось максимально возможным, например: 1234 => 4321
*/

const arr = [123, 542, 968, 352, 1, 308];
console.log(getGreatestTransformedNumbers(arr));

// function getGreatestTransformedNumbers(arr) {
//   const result = [];
//   for (const num of arr) {
//     const arrayOfNums = num.toString().split("");
//     const sortedArr = arrayOfNums.sort((a, b) => +b - +a);
//     const newNum = +sortedArr.join("");
//     result.push(newNum);
//   }
//   return result;
// }

function getGreatestTransformedNumbers(arr) {
  const result = arr.map((num) => {
    const arrayOfNums = num.toString().split("");
    const sortedArr = arrayOfNums.sort((a, b) => +b - +a);
    const newNum = +sortedArr.join("");
    return newNum;
  });

  return result;
}
