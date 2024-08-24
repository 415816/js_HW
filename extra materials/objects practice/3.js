// У вас есть список неотсортированный массив заказов пицц за неделю.
// Напишите функцию, которая принимает на вход массив заказов,
// поле для сортировки и направление сортировки (ASC или DESC).
// Вернуть массив, отсортированный по данному полю.

const orders = [
  {
    name: "Caprichosa",
    size: "large",
    price: 50,
    date: "2023/02/26",
  },
  {
    name: "Diablo",
    size: "medium",
    price: 35,
    date: "2023/02/23",
  },
  {
    name: "Peperoni",
    size: "small",
    price: 20,
    date: "2023/02/21",
  },
  {
    name: "Hawai",
    size: "large",
    price: 45,
    date: "2023/02/27",
  },
];

function sortArrayOfPizzas(key, direction = "asc") {
  const pizzas = structuredClone(orders);
  if (key === "price") {
    pizzas.sort((a, b) => (direction === "asc" ? a.price - b.price : b.price - a.price));
  } else if (key === "size") {
    const size = {
      small: 0,
      medium: 1,
      large: 2,
    };
    pizzas.sort((prevPizza, nextPizza) => {
      const prevPizzaSize = prevPizza.size;
      const nextPizzaSize = nextPizza.size;
      return direction === "asc" ? size[prevPizzaSize] - size[nextPizzaSize] : size[nextPizzaSize] - size[prevPizzaSize];
    });
  } else if (key === "name") {
    pizzas.sort((a, b) => (direction === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
  }

  return pizzas;
}

// const result = sortArrayOfPizzas("price");
// const result = sortArrayOfPizzas("size", "desc");
const result = sortArrayOfPizzas("name", "desc");
console.log(result);
