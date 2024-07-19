// 1. Создайте функцию, принимающую число n, которая при каждом вызове будет генерировать случайное число [1 - n] включительно.

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
// console.log(randomNumbers());
// console.log(randomNumbers());
// console.log(randomNumbers());
// console.log(randomNumbers());
// console.log(randomNumbers());
// console.log(randomNumbers());

import Task from "./Task.js";
import ITSpecialist from "./ITSpecialist.js";
import QA from "./QA.js";
import Developer from "./Developer.js";
import Manager from "./Manager.js";

// 2.  Вам необходимо команду айтишников для проекта!
class Team {
    name;
    sprint_duration;
    release_date;
    daily_standup_time;
    teammates;
    tasks;

    constructor(name, sprint_duration, release_date, daily_standup_time) {
        this.name = name;
        this.sprint_duration = sprint_duration;
        this.release_date = release_date;
        this.daily_standup_time = daily_standup_time;
        this.teammates = [];
        this.tasks = [];
    }

    get teamName() {
        return this.name;
    }
    set teamName(name) {
        this.name = name;
    }

    get sprintDuration() {
        return this.sprint_duration;
    }
    set sprintDuration(duration) {
        this.sprint_duration = duration;
    }

    get plannedReleaseDate() {
        return this.release_date;
    }

    get daily_standup_time() {
        return this.daily_standup_time;
    }
    set daily_standup_time(time) {
        this.daily_standup_time = time;
    }

    get numberOfTeammates() {
        return this.teammates.length;
    }

    set addTeammate(teammate) {
        this.teammates.push(teammate);
    }
    set removeTeammate(teammate) {
        this.teammates = this.teammates.filter(item => item !== teammate);
    }
    set editTeammate({ oldTeammate, newTeammate }) {
        const index = this.teammates.indexOf(oldTeammate);
        this.teammates[index] = newTeammate;
    }

    set addTask(task) {
        if (!this.tasks.includes(task)) {
            this.tasks.push(task);
        }
    }
    set removeTask(task) {
        this.tasks = this.tasks.filter(item => item !== task);
    }
    set editTask({ oldTask, newTask }) {
        const index = this.tasks.indexOf(oldTask);
        this.tasks[index] = newTask;
    }

    showAllTeammates() {
        console.log(this.teammates);
    }

    showTeammatesBySpecialization(specialization) {
        const teammatesBySpecialization = this.teammates.filter(
            teammate => teammate.specialization === specialization,
        );
        console.log(teammatesBySpecialization);
    }

    showAllTasks() {
        console.log(this.tasks);
    }
}

const randomITSpecialist = new ITSpecialist("John", "Middle", 3, 25, "USA");
const igorQA = new QA("Igor", "Senior", 5, 30, "Canada", true);
const fedorQA = new QA("Inga", "Junior", 0, 20, "Uzbekistan", false);
const ingaDev = new Developer("Inga", "Middle", 3, 25, "USA", "Frontend");
const irinaManager = new Manager("Irina", "Senior", 5, 30, "Kazakstan", true);
const task1 = new Task("Feature 1", 1, 5);

const dreamTeam = new Team("Dream Team", 14, "2023-01-01", "10:00");
dreamTeam.addTeammate = randomITSpecialist;
dreamTeam.addTeammate = igorQA;
dreamTeam.addTeammate = fedorQA;
dreamTeam.addTeammate = ingaDev;
dreamTeam.addTeammate = irinaManager;
dreamTeam.addTask = task1;

document.getElementById("infoAboutTeam").textContent = JSON.stringify(dreamTeam, null, 2);
// document.getElementById("infoAboutTeam").textContent = dreamTeam;
console.log(dreamTeam);