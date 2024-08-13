"use strict";
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
var OCCUPATION;
(function (OCCUPATION) {
    OCCUPATION["DEVELOPER"] = "Developer";
    OCCUPATION["DESIGNER"] = "Designer";
    OCCUPATION["QA"] = "qa";
    OCCUPATION["PM"] = "pm";
})(OCCUPATION || (OCCUPATION = {}));
// 12. Создайте объект с типом ItEmployee
const employee1 = {
    name: "Jane",
    surname: "Stone",
    salary: 1000,
    grade: "junior",
    occupation: OCCUPATION.QA,
    projectNames: ["project1", "project2"],
};
console.log(employee1);
function isItEmployee(employee) {
    return "grade" in employee;
}
function getEmployeeInfo(employee) {
    if (isItEmployee(employee)) {
        console.log(`ItEmployee: NAME: ${employee.name}, SURNAME: ${employee.surname}, SALARY: ${employee.salary}, GRADE: ${employee.grade}, OCCUPATION: ${employee.occupation}, ADDRESS: ${JSON.stringify(employee.address)}, PROJECTnAMES: ${employee.projectNames}`);
    }
    else {
        console.log(`Just some employee: NAME: ${employee.name}, SURNAME: ${employee.surname}, SALARY: ${employee.salary}, ADDRESS: ${JSON.stringify(employee.address)}`);
    }
}
const employee2 = {
    name: "Jane",
    surname: "Stone",
    salary: 1000,
    grade: "junior",
    occupation: OCCUPATION.QA,
    projectNames: ["project1", "project2"],
};
const employee3 = {
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
function countValues(someObj) {
    const result = {
        string: 0,
        number: 0,
        boolean: 0,
    };
    if (Array.isArray(someObj)) {
        someObj.forEach(object => {
            for (const key in object) {
                if (typeof object[key] === "string") {
                    result.string++;
                }
                else if (typeof object[key] === "number") {
                    result.number++;
                }
                else if (typeof object[key] === "boolean") {
                    result.boolean++;
                }
            }
        });
    }
    else {
        for (const key in someObj) {
            if (typeof someObj[key] === "string") {
                result.string++;
            }
            else if (typeof someObj[key] === "number") {
                result.number++;
            }
            else if (typeof someObj[key] === "boolean") {
                result.boolean++;
            }
        }
    }
    return result;
}
function filter(numbers, predicate) {
    const result = [];
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
