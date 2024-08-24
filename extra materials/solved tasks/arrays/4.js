/*
Напишите функцию, которая принимает на вход массив целых чисел 
и возвращает отсортированный массив по следующему критерию: 
 - количество цифр в числе.

*/

const arr = [123, 4565565, 1, 241234124124, 12, 5656];
console.log(sortArray(arr));

function sortArray(arr) {
  const result = arr.sort((a, b) => String(a).length - String(b).length);
  return result;
}
