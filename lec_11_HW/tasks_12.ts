// 1. Создайте interface ItEmployee
// 2. В интерфейсе ItEmployee сделайте поле name которое может быть только string
// 3. В интерфейсе ItEmployee сделайте поле surname которое может быть только string
// 4. В интерфейсе ItEmployee сделайте поле salary которое может быть только number и доступно только для чтения
// 5. Создайте тип данных Grade для стринговой переменной, которая может принимать значения: junior, middle, senior, lead
// 6. В интерфейсе ItEmployee сделайте поле grade типа Grade
// 7. Создайте enum OCCUPATION, который будет представлять професси в айти вида DEVELOPER = "Developer" и так далее
// 8. В интерфейсе ItEmployee сделайте поле occupation типа OCCUPATION
// 9. Создайте интерфейс IAddress, предствляющий объект с полями country, street, house, flat
// 10. В интерфейсе ItEmployee сделайте необязательное поле address типа IAddress
// 11. В интерфейсе ItEmployee сделайте projectNames, типа массив строк (названий проектов)

type Grade = "junior" | "middle" | "senior" | "lead";

enum OCCUPATION {
    DEVELOPER = "Developer",
    DESIGNER = "Designer",
    QA = "qa",
    PM = "pm",
}

interface IAddress {
    country: string;
    street: string;
    house: number;
    flat: number;
}

interface ItEmployee {
    name: string;
    surname: string;
    readonly salary: number;
    grade: Grade;
    occupation: OCCUPATION;
    address?: IAddress;
    projectNames: string[];
}

// 12. Создайте объект с типом ItEmployee
const employee1: ItEmployee = {
    name: "Jane",
    surname: "Stone",
    salary: 1000,
    grade: "junior",
    occupation: OCCUPATION.QA,
    projectNames: ["project1", "project2"],
};

console.log(employee1);

// 1. Создайте интерфейс IEmployee с полями name, surname, salary, address (типы для этих полей такие же как в ItEmployee из таск 1)
//   Создайте функцию getEmployeeInfo(employee), выводящую в консоль всю информацию про employee (формат текста придумать самим)
//   Создайте type guard isItEmployee, принимающий юнион типов IEmployee и ItEmployee. Используйте его в функции getEmployeeInfo.
//   Если на входе itEmployee - выводите в консоль все поля айтишника (а не только те, что в employee)
//   Функция должна принимать union type между IEmployee и ItEmployee, и через тайпгвард определять что за объект и как работать с ним

interface IEmployee {
    name: string;
    surname: string;
    salary: number;
    address?: IAddress;
}

function isItEmployee(employee: IEmployee | ItEmployee): employee is ItEmployee {
    return "grade" in employee;
}

function getEmployeeInfo(employee: IEmployee | ItEmployee): void {
    if (isItEmployee(employee)) {
        console.log(
            `ItEmployee: NAME: ${employee.name}, SURNAME: ${employee.surname}, SALARY: ${employee.salary}, GRADE: ${
                employee.grade
            }, OCCUPATION: ${employee.occupation}, ADDRESS: ${JSON.stringify(employee.address)}, PROJECTnAMES: ${
                employee.projectNames
            }`,
        );
    } else {
        console.log(
            `Just some employee: NAME: ${employee.name}, SURNAME: ${employee.surname}, SALARY: ${
                employee.salary
            }, ADDRESS: ${JSON.stringify(employee.address)}`,
        );
    }
}

const employee2: ItEmployee = {
    name: "Jane",
    surname: "Stone",
    salary: 1000,
    grade: "junior",
    occupation: OCCUPATION.QA,
    projectNames: ["project1", "project2"],
};

const employee3: IEmployee = {
    name: "John",
    surname: "Doe",
    salary: 2000,
    address: {
        country: "USA",
        street: "Wall Street",
        house: 1,
        flat: 1,
    },
};

getEmployeeInfo(employee2);
getEmployeeInfo(employee3);

// 2. Создайте функцию, которая подсчитает, сколько в объекте значений каждого типа.
//   Принимает на вход объект или массив таких же объектов, у которого ключ всегда string, а значение - string, number, boolean.
//   Возвращает же - объект с ключами string, number, boolean и количеством таких значений в объекте или в сумме у всех объектов в массиве.
type Obj = { [key: string]: string | number | boolean };
interface CountValues {
    string: number;
    number: number;
    boolean: number;
}

function countValues(someObj: Obj | Obj[]): CountValues {
    const result: CountValues = {
        string: 0,
        number: 0,
        boolean: 0,
    };

    if (Array.isArray(someObj)) {
        someObj.forEach(object => {
            for (const key in object) {
                if (typeof object[key] === "string") {
                    result.string++;
                } else if (typeof object[key] === "number") {
                    result.number++;
                } else if (typeof object[key] === "boolean") {
                    result.boolean++;
                }
            }
        });
    } else {
        for (const key in someObj) {
            if (typeof someObj[key] === "string") {
                result.string++;
            } else if (typeof someObj[key] === "number") {
                result.number++;
            } else if (typeof someObj[key] === "boolean") {
                result.boolean++;
            }
        }
    }

    return result;
}

// 3. Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат (коллбэк),
//     который будет использоваться для проверки каждого числа на соответствие требованиям.
//     Помимо самой функции следует реализовать алиасы типов для функций и аттрибутов.
//     Пример функции:
//     const numbers = [1, -5, 2, 3, 4, 133];
//     filter(numbers, (n) => n > 3); // [4, 133]
//     filter(numbers, (n) => n % 2 == 0); // [2, 4]
//     Параметры функции: Массив чисел и Анонимная функция, принимающая на вход число и возвращающая логическое значение.

type Predicate = (n: number) => boolean;

function filter(numbers: number[], predicate: Predicate): number[] {
    const result: number[] = [];
    for (const number of numbers) {
        if (predicate(number)) {
            result.push(number);
        }
    }
    return result;
}

const numbers = [1, -5, 2, 3, 4, 133];

console.log(filter(numbers, n => n > 3)); // [4, 133]
console.log(filter(numbers, n => n % 2 == 0)); // [2, 4]
