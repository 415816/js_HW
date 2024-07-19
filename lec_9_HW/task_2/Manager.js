import ITSpecialist from './ITSpecialist.js';

export default class Manager extends ITSpecialist {
    isScrumMaster;

    constructor(name, grade, experience_in_years, age, country, isScrumMaster) {
        super(name, grade, experience_in_years, age, country);
        this.isScrumMaster = isScrumMaster;
    }

    get isScrumMaster() {
        return this.isScrumMaster;
    }
}
