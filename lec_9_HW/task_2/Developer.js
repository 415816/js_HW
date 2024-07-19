import ITSpecialist from './ITSpecialist.js';

export default class Developer extends ITSpecialist {
    isWritingUnitTests;

    constructor(name, grade, experience_in_years, age, country, isWritingUnitTests) {
        super(name, grade, experience_in_years, age, country);
        this.isWritingUnitTests = isWritingUnitTests;
    }

    get isWritingUnitTests() {
        return this.isWritingUnitTests;
    }
}
