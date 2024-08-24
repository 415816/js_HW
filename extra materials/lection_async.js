// class Father {
//   #name;
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   // get name() {
//   //   return this.#name;
//   // }

//   // set name(newName) {
//   //   this.#name = newName;
//   // }

//   getName() {
//     return this.#name;
//   }

//   setName(newName) {
//     this.#name = newName;
//   }
// }

// class Son extends Father {
//   constructor(name, surname) {
//     super(name, surname);
//   }
//   getSomething() {
//     return this.#name;
//   }
// }

//Async programming

// setTimeout(() => console.log("After 2 second"), 2000);
// console.log(123);

// let counter = 0;
// setInterval(() => {
//   console.log("ping", ++counter);
// }, 1000);

// const bomb = (seconds) => {
//   let count = seconds;
//   const interval = setInterval(() => {
//     console.log(--count);
//   }, 1000);
//   setTimeout(() => {
//     clearInterval(interval);
//     console.log("Explode!!!");
//   }, seconds * 1000);
// };

// bomb(10);

// setTimeout(() => console.log(1), 3000);
// setTimeout(() => console.log(2), 2000);
// setTimeout(() => console.log(3), 1000);
// function getNumber(amount) {
//   return (Math.floor(Math.random() * amount) + 1) * 1000;
// }

// setTimeout(() => console.log(1), getNumber(5));
// setTimeout(() => console.log(2), getNumber(5));
// setTimeout(() => console.log(3), getNumber(5));

// const foo = () => console.log("First");
// // const bar = () => setTimeout(() => console.log("Second"), 0);
// const baz = () => console.log("Third");

// // bar();
// // foo();
// // baz();

// const bar = () => {
//   setTimeout(() => console.log("Second"), 500);
//   // console.log("after second before third");
// };

// bar();
// foo();
// baz();

// console.log("Sent request");

// setTimeout(() => {
//   console.log("Preparing response");
//   const response = {
//     status: 200,
//     data: {
//       name: "Volodymir",
//       age: 25,
//     },
//   };
//   setTimeout(() => {
//     console.log(`Received response with status code ${response.status} and data: ${JSON.stringify(response.data)}`);
//   }, 1000);
// }, 1000);

// const p = new Promise((resolve, reject) => {
//   resolve("Hello, group!");
// });

// p.then((result) => console.log(result));

// const p = new Promise((resolve, reject) => {
//   reject("Failed!");
// });

// p
// .then((result) => console.log(result))
// .catch((error) => console.log(error));

// const p = new Promise((resolve, reject) => {
//   resolve("Hello, group!");
// });

// p.then((result) => result + " And hello Anna")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// const p = new Promise((resolve, reject) => {
//   const randomNum = Math.floor(Math.random() * 10) + 1;
//   if (randomNum > 4) {
//     resolve(`Resolved with ${randomNum}`);
//   }
//   reject(`Failed with ${randomNum}`);
// });

// p.then((result) => console.log(result)).catch((error) => console.log(error));
// console.log("Sent request");
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Preparing response");
//     const response = {
//       status: 200,
//       data: {
//         name: "Volodymir",
//         age: 25,
//       },
//     };
//     resolve(response);
//   }, 2000);
// });
// console.log(promise);
// promise.then((result) => console.log(JSON.stringify(result)));

// const db = [
//   { name: "Dzmitry", age: 30 },
//   { name: "Tatiana", age: 30 },
//   { name: "Anastasia", age: 30 },
// ];

// console.log("Sent request");
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Preparing response");
//     const userFromDataBase = db.find((user) => user.name === "Volodymir");
//     let response;
//     if (userFromDataBase) {
//       response = {
//         status: 200,
//         data: userFromDataBase,
//       };
//       resolve(JSON.stringify(response));
//     } else {
//       response = {
//         status: 400,
//         message: "User not found",
//       };
//       reject(JSON.stringify(response));
//     }
//   }, 2000);
// });

// function getUser(userName) {
//   const db = [
//     { name: "Dzmitry", age: 30 },
//     { name: "Tatiana", age: 30 },
//     { name: "Anastasia", age: 30 },
//   ];

//   return new Promise((resolve, reject) => {
//     const user = db.find((user) => user.name === userName);
//     if (user) {
//       const response = {
//         status: 200,
//         body: user,
//       };
//       resolve(response);
//     } else {
//       const rejectedResponse = {
//         status: 404,
//         body: {
//           errorMessage: "User not found",
//         },
//       };
//       reject(rejectedResponse);
//     }
//   });
// }

// getUser("Tatiana")
//   .then((response) => console.log(`Status: ${response.status}, user: ${JSON.stringify(response.body)}`))
//   .catch((error) => console.log(`Error: ${error}`));

// getUser("Anatoly")
//   .then((response) => console.log(`Status: ${response.status}, user: ${response.body}`))
//   .catch((error) => console.log(`Error: ${JSON.stringify(error)}`));

// console.log(
//   getUser("Anatoly")
//     .then((response) => console.log(`Status: ${response.status}, user: ${response.body}`))
//     .catch((error) => console.log(`Error: ${JSON.stringify(error)}`))
// );

// getUser("Tatiana")
//   .then((response) => console.log(`Status: ${response.status}, user: ${JSON.stringify(response.body)}`))
//   .catch((error) => console.log(`Error: ${error}`))
//   .finally(() => console.log("After searching for Tatiana"));

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 1000);
// setTimeout(() => {
//   console.log(3);
// }, 0);
// console.log(4);
// let p3 = new Promise((resolve, reject) => {
//   resolve();
// });
// p3.then(() => {
//   console.log(5);
// });
// console.log(6);

//TODO: CHeck at home
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 1000);
// setTimeout(() => {
//   console.log(3);
// }, 0);
// console.log(4);
// let p3 = new Promise((resolve, reject) => {
//   resolve();
// });
// p3.then(() => {
//   console.log(5);
// });
// console.log(6);

// let p4 = new Promise((resolve, reject) => {
//   console.log(7);
//   setTimeout(() => {
//     console.log(8);
//     resolve(9), 500;
//   });
// });
// p4.then((num) => console.log(num));

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   Promise.resolve().then(() => console.log(`Promise ${i}`));
// }

function getUser(userName) {
  const db = [
    { name: "Dzmitry", age: 30 },
    { name: "Tatiana", age: 30 },
    { name: "Anastasia", age: 30 },
  ];

  return new Promise((resolve, reject) => {
    const user = db.find((user) => user.name === userName);
    if (user) {
      const response = {
        status: 200,
        body: user,
      };
      resolve(response);
    } else {
      const rejectedResponse = {
        status: 404,
        body: {
          errorMessage: "User not found",
        },
      };
      reject(rejectedResponse);
    }
  });
}

// getUser("Tatiana")
//   .then((response) => response.data)
//   .then((user) => console.log(`Received user ${user.name} with age ${user.age}`))
//   .catch((err) => {
//     throw new Error(err.message);
//   });

// getUser("Volodymir")
//   .then((response) => response.data)
//   .then((user) => console.log(`Received user ${user.name} with age ${user.age}`))
//   .catch((err) => {
//     throw new Error(err.message);
//   });

// Promise.all([getUser("Tatiana"), getUser("Dzmitry"), getUser("Anastasia")]).then((responses) => {
//   for (const resp of responses) {
//     console.log(JSON.stringify(resp));
//   }
// });

// Promise.all([getUser("Tatiana"), getUser("Dzmitry"), getUser("Vyacheslav")])
//   .then((responses) => {
//     for (const resp of responses) {
//       console.log(JSON.stringify(resp));
//     }
//   })
//   .catch((error) => {
//     throw new Error(`Status ${error.status}, data: ${error.body.errorMessage}`);
//   });

// Promise.allSettled([getUser("Tatiana"), getUser("Dzmitry"), getUser("Vyacheslav")]).then((responses) => {
//   for (const res of responses) {
//     console.log(res);
//   }
// });

// async function hello() {
//   return "hello";
// }

// Promise.resolve("Hello");

// async function getUserFromDB(userName) {
//   const response = await getUser(userName);
//   console.log(response);
// }
// getUserFromDB("Tatiana");

// async function getUserFromDB(userName) {
//   try {
//     const response = await getUser(userName);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("After promise");
//   }
// }
// console.log("before async function");
// getUserFromDB("Tatiana");
// console.log("after async function");

// const url = "https://jsonplaceholder.typicode.com/todos";

// //GET

// fetch(url)
//   .then((response) => {
//     console.log(response.status);
//     console.log(response.headers);
//     return response.json();
//   })
//   .then((object) => console.log(object));

// fetch(url, {
//   method: "post",
//   body: {
//     userId: 1,
//     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     completed: false,
//   },
// })
//   .then((response) => {
//     console.log(response.status);
//     console.log(response.ok);
//     return response.json();
//   })
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));

const url = "https://jsonplaceholder.typicode.com/todos";

async function getTodoById(id) {
  try {
    const response = await fetch(url + `/${id}`);
    console.log(response.status);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// const data = getTodoById(1);
// data.then((d) => console.log(d.title));

// async function createTodo(title) {
//   try {
//     const body = {
//       userId: 1,
//       title: title,
//       completed: false,
//     };
//     const response = await fetch(url, {
//       method: "post",
//       body: JSON.stringify(body),
//     });
//     console.log(response.status);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// createTodo("Created todo");

// try {
//   const a = b + c;
// } catch (error) {
//   console.log(error.message);
//   console.log(error.name);
// }

// console.log("After error");

// try {
//   throw new Error("Error triggered in Try");
// } catch (error) {
//   console.log(error.message);
//   console.log(error.name);
//   if (error.name === "Error") {
//     throw new Error(error.message);
//   }
// }

// console.log("After error");

try {
  let b = 1;
  const a = b + c;
  console.log("in try");
} catch (error) {}

console.log("After error");

/*
Создайте конвертер валют, используя Exchange Rates API. 
(зарегистрироваться и получить токен) Данные с сайта брать запросом используя fetch(). 
  Пользователь должен иметь возможность передавать валюту и сумму денег в функцию и 
  получать сумму денег в желаемой валюте на выходе. 
  Например: currencyConvertor(USD, 40, EUR) ⇒ 35 EUR
  Решить с помощью в 2 вариантах: с  .then() и с использованием async/await
  */
// const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${accessKey}&base=EUR&symbols=USD&format=1`;
