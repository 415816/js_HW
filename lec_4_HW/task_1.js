let minAge = 18;
let maxAge = 60;
let age;

const checkAge = age => {
    if (age < minAge) {
        console.log(`You don't have access cause your age is ${age}, it's less than ${minAge}`);
    } else if (age >= minAge && age < maxAge) {
        console.log(`Welcome     !`);
    } else if (age > maxAge) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
};

age = [10, 17, 18, 19, 59, 60, 61];

age.forEach(item => {
    checkAge(item);
});
