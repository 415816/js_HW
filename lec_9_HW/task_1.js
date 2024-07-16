// 1. Создайте функцию counter с переменной cosnt count = 0. Реализуйте замыкание так, чтобы при вызове функции count увеличиваться на +1
// и выводился в консоль в виде `Function was called ${count} times`

const counter = () => {
    let count = 0;
    return () => {
        count++;
        console.log(`Function was called ${count} times`);
    };
};

const count = counter();
// count();
// count();
// count();

// 2. Создайте класс User с публичной пропертей name и приватным полем surname, а также методом sayHi() возвращающим "Hello from <name> <surname>".

class User {
    #surname;

    constructor(name, surname) {
        this.name = name;
        this.#surname = surname;
    }

    set surname(surname) {
        this.#surname = surname;
    }

    sayHi() {
        return `Hello from ${this.name} ${this.#surname}`;
    }
}

// 3. Создать объект из класса User и вывести результат метода sayHi() в консоль
const ivan = new User("Ivan", "Ivanov");
// console.log(ivan.sayHi());

// 4. Создать объект из класса User и вывести surname в консоль (получить ошибку)
const petr = new User("Petr", "Petrov");
console.log(petr.sayHi());
console.log(petr.surname);
