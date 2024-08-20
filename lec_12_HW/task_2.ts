// 1. Напишите функцию, реализующую методы массивов map. Функции принимают на вход массив и колбэк. Используйте дженерик типы.
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив,
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5], callback) => [0,2,6,12,20]

function map<T, P>(array: T[], callback: (elem: T, index?: number, oArray?: readonly T[]) => P): P[] {
    const result: P[] = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i));
    }
    return result;
}

console.log(map([1, 2, 3, 4, 5], (elem, index) => elem * (index ?? 0)));

// 2. Напишите дженерик функцию generateObject, которая принимает массив пар [string, T]
//   и возвращает объект, где каждая пара ключ-значение из массива превращается в соответствующую пару ключ-значение в объекте.
//   В случае если ключи повторяются, значение в объекте должно быть последним из встречающихся.

//   Требования:
//     - Функция должна быть дженерик и работать с любыми типами значений.
//     - Функция должна корректно обрабатывать массив пар, включая случаи, когда ключи повторяются.
type Pair<T> = [string, T];
type ObjectResult<T> = { [key: string]: T };

// function generateObject<T>(array: Pair<T>[]): ObjectResult<T> {
//     const result: ObjectResult<T> = {};

//     for (let i = 0; i < array.length; i++) {
//         result[array[i][0]] = array[i][1];
//     }
//     return result;
// }

// OR

// function generateObject<T>(array: Pair<T>[]): ObjectResult<T> {
//     const result: ObjectResult<T> = {};
//     for (const [key, value] of array) {
//         result[key] = value;
//     }
//     return result;
// }

// OR
function generateObject<T>(array: Pair<T>[]): ObjectResult<T> {
	return Object.fromEntries(array);
}

console.log(
    generateObject([
        ["1", 1],
        ["2", 2],
        ["3", 3],
        ["4", 4],
        ["4", 5],
    ]),
);
//   Пример:
//   const result = generateObject([
//   ["1", 1],
//   ["2", 2],
//   ["3", 3],
//   ["4", 4],
//   ["4", 5], // повторяющийся ключ, значит это значение должно быть в результирующем объекте
// ]);

// console.log(result); //{ '1': 1, '2': 2, '3': 3, '4': 5 }
