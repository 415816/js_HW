// 1. Создайте таймаут (setTimeout), который выведет в консоль сообщение "After 2 seconds" через 2 секунды
// setTimeout(() => console.log("After 2 seconds"), 2000);

// 2. Создайте новый промис, используя синтаксис new Promise((resolve, reject) => {//implementation}).
//     Промис должен резолвать слово success (использовать resolve)
//     Получить слово success через .then и вывести в консоль внутри then
// const prom = new Promise((resolve, reject) => {
//     resolve("success");
// });

// prom().then(result => console.log(result));

// 3. Создайте новый промис, используя синтаксис new Promise((resolve, reject) => {//implementation}).
//     Промис должен реджектать слово failed (использовать reject)
//     Получить слово failed через .catch и вывести в консоль внутри catch
// const prom2 = new Promise((resolve, reject) => {
//     reject("failed");
// });

// prom2.catch(result => console.log(result));

// 4. Добавьте к обработке промисов из 2 и 3 пункта блок finally, где выведите в консоль текст 'finally'
const prom3 = new Promise((resolve, reject) => {
    rand = Math.random();
    if (rand > 0.5) {
        // console.log(rand);
        resolve("success");
    } else {
        // console.log(rand);
        reject("failed");
    }
});
// prom3
//     .then(result => console.log(`Resolve ${result}`))
//     .catch(error => console.error(`Reject ${error}`))
//     .finally(() => console.log("finally"));

// 5. Создайте асинхронную функцию resolvePromise(promise)
//   - Функция на вход принимает один аргумент, который должен быть промисом
//   - В функции разместите блок try..catch..finally
//   - В try получите результат работы промиса, вызвав его через await, а после результат выведите в консоль
//   - В catch выведите в консоль сообщение 'Failed due to', а также ошибку, пришедшую из промиса (через шаблонные строки `${}`)
//   - В finally выведите в консоль "Finished working with promise"
//   - Воспроизведите функцию, передав в нее промисы из заданий 2 и 3 (на разных строках кода, не одновременно!)
async function resolvePromise(promise) {
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.error(`Failed due to ${error}`);
    } finally {
        console.log("Finished working with promise");
    }
}

resolvePromise(prom3);
resolvePromise(prom3);
resolvePromise(prom3);
