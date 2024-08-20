// 1. Создайте дженерик функцию getFirstElement, которая принимает массив элементов типа T, и возвращает первый элемент (типа T).

function getFirstElement<T>(array: T[]) {
    return array[0];
}

console.log(getFirstElement([4, 5, 3, 1, 2]));

// 2. Создайте интерфейс Person, абстрактный класс Employee, который реализует интерфейс Person, и конкретные классы Manager и Developer.
//   - Интерфейс Person должен содержать:
//       Стринговые поля: name, surname, experienceYears
//       Метод, возвращающий строку: getDetails().
interface Person {
    name: string;
    surname: string;
    experienceYears: string;
    getDetails(): string;
}
//   - Абстрактный класс Employee должен:
//       Реализовывать интерфейс Person.
//       Содержать защищенное поле: salary, не передающееся в конструктор (по дефолту 0)
//       Содержать защищенный абстрактный метод: calculateSalary().,
//         который считает зарплату и вызывается в конструкторе, и будет реализован в наследниках

abstract class Employee implements Person {
    protected salary: number = 0;
    constructor(public name: string, public surname: string, public experienceYears: string) {
        this.calculateSalary();
    }
    abstract getDetails(): string;
    protected abstract calculateSalary(): void;
}
//   - Конкретные классы Manager и Developer должны:
//       Наследоваться от Employee.
//       Класс менеджер должен на конструкторе получать поле prefered, которое может быть только 'scrum' или 'kanban'
//       Класс девелопер должен на конструкторе получать поле programmingLanguage, который может быть 'js', 'ts', 'java', 'python'
//       Метод calculateSalary должен для менеджера устанавливать зарплату по формуле: количество лет опыта * 500
//       Метод calculateSalary должен для девелопера устанавливать зарплату по формуле: количество лет опыта * 1000
//       Реализовывать метод getDetails(), который должен выводить полную информацию об объекте вида:
//         'My name is Elena TSovna, I am software developer with 6 years of experience in TypeScript and 6000$ salary' (пример для девелопера)

class Manager extends Employee {
    constructor(protected prefered: "scrum" | "kanban", name: string, surname: string, experienceYears: string) {
        super(name, surname, experienceYears);
    }
    protected calculateSalary(): void {
        this.salary = +this.experienceYears * 500;
    }
    getDetails(): string {
        return `My name is ${this.name} ${this.surname}, I am manager with ${this.experienceYears} years of experience in ${this.prefered} and ${this.salary}$ salary`;
    }
}

class Developer extends Employee {
    constructor(
        protected programmingLanguage: "js" | "ts" | "java" | "python",
        name: string,
        surname: string,
        experienceYears: string,
    ) {
        super(name, surname, experienceYears);
    }
    protected calculateSalary(): void {
        this.salary = +this.experienceYears * 1000;
    }
    getDetails(): string {
        return `My name is ${this.name} ${this.surname}, I am software developer with ${this.experienceYears} years of experience in ${this.programmingLanguage} and ${this.salary}$ salary`;
    }
}

const manager = new Manager("scrum", "Elena", "Tsovna", "6");
const developer = new Developer("java", "Igor", "JAVAvovich", "24");

console.log(manager.getDetails());
console.log(developer.getDetails());
