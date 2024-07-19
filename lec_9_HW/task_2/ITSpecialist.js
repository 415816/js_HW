export default class ITSpecialist {
    name;
    grade;
    experience_in_years;
    age;
    country;
    _salary;

    constructor(name, grade, experience_in_years, age, country) {
        this.name = name;
        this.grade = grade;
        this.experience_in_years = experience_in_years;
        this.age = age;
        this.country = country;
        this._salary = 0;
    }

    get allInfo() {
        return {
            name: this.name,
            grade: this.grade,
            experience_in_years: this.experience_in_years,
            age: this.age,
            country: this.country,
            salary: this._salary,
        };
    }

    set country(country) {
        this.country = country;
    }

    get salary() {
        return this._salary;
    }
}
