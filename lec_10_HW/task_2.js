// 1. Создайте функцию delay, принимающую на вход коллбэк функцию и количество милисекунд.
//     Функция должна исполнить колбэк строго через переданное количество миллисекунд
//     Пример: delay(() => console.log('hello'), 2000) // Через 2 секунды в консоли появится слово hello

// const delay = (callback, ms) => {
//     setTimeout(callback, ms);
// };

// delay(() => console.log("buy"), 2000);
// delay(() => console.log("hello"), 1000);

// 2. Создайте два промиса:
//   - promise1 должен резолвать "After 3 seconds" через 3 секунды
//   - promise2 должен резолвать "After 5 seconds" через 5 секунд
//   Резолвните оба промиса параллельно используя Promise.All и Promise.allSettled двумя способами:
//     1. Обработайте результат Promise.All и Promise.allSettled в .then блоке. Выведите в консоль резолвы обоих промисов по очереди
//     2. Обработайте результат await Promise.All и Promise.allSettled в асинхронной функции в try..catch блоке.
//         Используйте деструктуризацию, чтобы создать переменные promise1Result и promise2Result с резолвами соответствующих промисов
//         Вывести в консоль результат обоих промисов по очереди

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("After 3 seconds");
//     }, 3000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("After 5 seconds");
//     }, 5000);
// });

// Promise.all([promise1, promise2]).then(([promise1Result, promise2Result]) => {
//     console.log(promise1Result);
//     console.log(promise2Result);
// });

// Promise.allSettled([promise1, promise2]).then(([promise1Result, promise2Result]) => {
//     console.log(promise1Result);
//     console.log(promise2Result);
// });

// async function resolveAll() {
//     try {
//         const [promise1Result, promise2Result] = await Promise.all([promise1, promise2]);
//         console.log(promise1Result);
//         console.log(promise2Result);
//     } catch (error) {
//         console.error(`Failed due to ${error}`);
//     } finally {
//         console.log("Finished working with promise");
//     }
// }
// resolveAll();

// async function resolveSettled() {
//     try {
//         const [promise1Result, promise2Result] = await Promise.allSettled([promise1, promise2]);
//         console.log(promise1Result);
//         console.log(promise2Result);
//     } catch (error) {
//         console.error(`Failed due to ${error}`);
//     } finally {
//         console.log("Finished working with promise");
//     }
// }
// resolveSettled();

// 3. Напишите функцию, которая возвращает Promise, который резолвается в сумму двух чисел.
//   Функция должна принимать два аргумента (a и b) и возвращать Promise, который резолвает в a+b.
//   Если какой-либо из аргументов не является числом, Promise должен быть rejected с сообщением об ошибке.
//   Протестируйте свою функцию, вызвав ее с допустимыми и недопустимыми аргументами,
//   и обработайте любые ошибки с помощью метода .catch(), а также в блоке try/catch

// const sum = (a, b) => {
//     if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
//         return Promise.reject("Arguments should be numbers");
//     } else {
//         return Promise.resolve(a + b);
//     }
// };
// sum(1, 2)
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

// sum("1", 2)
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

// const sum = async (a, b) => {
//     if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
//         const erMess = isNaN(a) || isNaN(b) ? "NaN" : typeof a !== "number" ? typeof a : typeof b;
//         throw new Error(`Arguments should be numbers, not ${erMess}`);
//     } else {
//         return a + b;
//     }
// };

// const resolveSum = async (a, b) => {
//     try {
//         const result = await sum(a, b);
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// };
// resolveSum(1, 2);
// resolveSum("1", 2);
// resolveSum(1, "2");
// resolveSum(1, NaN);

// 4. С помощью fetch отправьте GET запрос на адрес "https://jsonplaceholder.typicode.com/todos".
//     Преобразуйте респонс в объект (.json()), выведите в консоль все объекты из респонса, где userId === 1. Решить с помощью try/cath и then (обоими способами)

// const executeFetch = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//         const data = await response.json();
//         data.filter(item => item.userId === 1).forEach(item => console.log(item));
//     } catch (error) {
//         console.error(error);
//     }
// };
// executeFetch();

const executeFetch = userId => {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data =>
                data.filter(item => item.userId === userId).forEach(filteredItem => console.log(filteredItem)),
            );
    });
};

executeFetch(1);
