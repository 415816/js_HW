let minAge = 18;
let maxAge = 60;

const checkAge = age => {
    if ((isNaN(age))) {
        alert("Please, enter a number");
    } else {
        switch (true) {
            case minAge > +age:
                alert(`You don't have access cause your age is ${age}, it's less than ${minAge}`);
                break;
            case +age >= minAge && +age < maxAge:
                alert(`Welcome     !`);
                break;
            case +age > maxAge:
                alert("Keep calm and look Culture channel");
                break;
            default:
                alert("Technical work");
        }
    }
};

const ageStr = prompt("Please enter your age:");
checkAge(Number(ageStr));
