import ITSpecialist from './ITSpecialist.js';

export default class QA extends ITSpecialist {
    isQa;

    constructor(name, grade, experience_in_years, age, country, isQa) {
        super(name, grade, experience_in_years, age, country);
        this.isQa = isQa;
    }

    get isQa() {
        return this.isQa;
    }
}
