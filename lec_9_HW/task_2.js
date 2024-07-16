// 1. Создайте функцию, принимающую число n, которая при каждом вызове будет генерировать случайное число [1 - n] включительно.
//    Условие - каждый следующий вызов должен давать новое число (не встречавшееся в прошлых вызовах).
//    И так пока не переберутся все n чисел. На n + 1 вызов и далее функция должна возвращать 'All numbers were received'.
//    Задачу решить через замыкания
//     Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 'All numbers were received'

const generateRandomNumber = n => {
    const numbers = [...Array(n)].map((_, i) => ++i);
    return () => {
        if (numbers.length === 0) {
            return "All numbers were received";
        }
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const randomNumber = numbers[randomIndex];
        numbers.splice(randomIndex, 1);
        return randomNumber;
    };
};
const randomNumbers = generateRandomNumber(5);
console.log(randomNumbers());
console.log(randomNumbers());
console.log(randomNumbers());
console.log(randomNumbers());
console.log(randomNumbers());
console.log(randomNumbers());

// 2.  Вам необходимо команду айтишников для проекта!
class Team {
    #name;
    #sprint_duration;
    #release_date;
    #daily_standup_time;
    #teammates;
    #tasks;

    constructor(name, sprint_duration, release_date, daily_standup_time) {
        this.#name = name;
        this.#sprint_duration = sprint_duration;
        this.#release_date = release_date;
        this.#daily_standup_time = daily_standup_time;
        this.#teammates = [];
        this.#tasks = [];
    }

    get teamName() {
        return this.#name;
    }
    set teamName(name) {
        this.#name = name;
    }

    get sprintDuration() {
        return this.#sprint_duration;
    }
    set sprintDuration(duration) {
        this.#sprint_duration = duration;
    }

    get plannedReleaseDate() {
        return this.#release_date;
    }

    get daily_standup_time() {
        return this.#daily_standup_time;
    }
    set daily_standup_time(time) {
        this.#daily_standup_time = time;
    }

    get numberOfTeammates() {
        return this.#teammates.length;
    }

    set addTeammate(teammate) {
        this.#teammates.push(teammate);
    }
    set removeTeammate(teammate) {
        this.#teammates = this.#teammates.filter(item => item !== teammate);
    }
    set editTeammate({ oldTeammate, newTeammate }) {
        const index = this.#teammates.indexOf(oldTeammate);
        this.#teammates[index] = newTeammate;
    }

    set addTask(task) {
        if (!this.#tasks.includes(task)) {
            this.#tasks.push(task);
        }
    }
    set removeTask(task) {
        this.#tasks = this.#tasks.filter(item => item !== task);
    }
    set editTask({ oldTask, newTask }) {
        const index = this.#tasks.indexOf(oldTask);
        this.#tasks[index] = newTask;
    }

    showAllTeammates() {
        console.log(this.#teammates);
    }

    showTeammatesBySpecialization(specialization) {
        const teammatesBySpecialization = this.#teammates.filter(
            teammate => teammate.specialization === specialization,
        );
        console.log(teammatesBySpecialization);
    }

    showAllTasks() {
        console.log(this.#tasks);
    }
}

//     Создайте класс ITSpecialist. Реализуйте следующие методы:
//       get all info
//       set country
//       get salary
//     Создайте дочерние классы для некоторых айтишников.
//     Реализовать возможность задавать свойства дочерних классов.
//     Каждый класс должен находиться в своем собственном файле.
//     Все данные из обьекта класса Team вывести в HTML

class ITSpecialist {
    #name;
    #grade;
    #experience_in_years;
    #age;
    #country;
    #_salary;

    // 	name
    //     grade
    //     experience_in_years
    //     age
    //     country
    //     _salary

    constructor(name, grade, experience_in_years, age, country) {
        this.#name = name;
        this.#grade = grade;
        this.#experience_in_years = experience_in_years;
        this.#age = age;
        this.#country = country;
        this.#_salary = 0;
    }

    get allInfo() {
        return {
            name: this.#name,
            grade: this.#grade,
            experience_in_years: this.#experience_in_years,
            age: this.#age,
            country: this.#country,
            salary: this.#_salary,
        };
    }

    set country(country) {
        this.#country = country;
    }

    get salary() {
        return this.#_salary;
    }
}

//     Структура:

//     class Team
//     name
//     sprint_duration
//     release_date
//     daily_standup_time
//     teammates: []
//     tasks: [],

//     class ITSpecialist
//     name
//     grade
//     experience_in_years
//     age
//     country
//     _salary

//     class Manager
//     isScrumMaster

//     class QA
//     isAqa

//     class Developer
//     isWritingUnitTests
