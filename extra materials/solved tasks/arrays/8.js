/*
Необходимо написать функцию, генерирующую пиццу:
 - у вас есть массив сыров ['parmesan', 'gauda', 'chedder', 'buratta']
 - массив мясных ингредиентов ['chicken', 'backon', 'pepperoni', 'beef']
 - массив дополнений ['pepper', 'onion', 'olives', 'pineapple']

 Функция на вход принимает (cheese, meat, addition) 3 аргумента и возвращает новую пиццу.
 Если какой-то из аргументов не получен - выбирает рандомное из нужного массива
 
*/
const chees = ["parmesan", "gauda", "chedder", "buratta"];
const meats = ["chicken", "backon", "pepperoni", "beef"];
const additions = ["pepper", "onion", "olives", "pineapple"];

function generatePizza(cheese, meat, addition) {
  console.log(cheese);
  console.log(meat);
  console.log(addition);
  if (!cheese) {
    const index = getRandomInt(0, chees.length - 1);
    cheese = chees[index];
  } else {
    // const index = chees.indexOf(cheese);
    // if (index === -1) throw new Error("No such cheese");
    if (!chees.includes(cheese)) throw new Error("No such cheese");
  }

  if (!meat) {
    const index = getRandomInt(0, meats.length - 1);
    meat = meats[index];
  }
  if (!addition) {
    const index = getRandomInt(0, additions.length - 1);
    addition = additions[index];
  }
  // return [cheese, meat, addition];
  const result = [];
  result.push(cheese);
  result.push(meat);
  result.push(addition);
  return result;
}

console.log(generatePizza("gauda"));

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
