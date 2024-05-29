// 1.
let minAge = 18;
let maxAge = 60;
let age;

// const checkAge = age => {
//     switch (true) {
//         case minAge > age:
//             console.log(`You don't have access cause your age is ${age}, it's less than ${minAge}`);
//             break;
//         case age >= minAge && age < maxAge:
//             console.log(`Welcome     !`);
//             break;
//         case age > maxAge:
//             console.log("Keep calm and look Culture channel");
//             break;
//         default:
//             console.log("Technical work");
//     }
// };

// age = [10, 17, 18, 19, 59, 60, 61];

// age.forEach(item => {
//     checkAge(item);
// });
// ==========================================================================================================
// 2.
// const checkAge = age => {
//     if (typeof age !== "number") {
//         console.log("Please, enter a number");
//     } else {
//         switch (true) {
//             case minAge > age:
//                 console.log(`You don't have access cause your age is ${age}, it's less than ${minAge}`);
//                 break;
//             case age >= minAge && age < maxAge:
//                 console.log(`Welcome     !`);
//                 break;
//             case age > maxAge:
//                 console.log("Keep calm and look Culture channel");
//                 break;
//             default:
//                 console.log("Technical work");
//         }
//     }
// };

// age = [17, 18, 60, 61, "2", "aaa"];

// age.forEach(item => {
//     checkAge(item);
// });
// ==========================================================================================================
// 3.
const checkAge = age => {
    if ((isNaN(age))) {
        console.log("Please, enter a number");
    } else {
        switch (true) {
            case minAge > +age:
                console.log(`You don't have access cause your age is ${age}, it's less than ${minAge}`);
                break;
            case +age >= minAge && +age < maxAge:
                console.log(`Welcome     !`);
                break;
            case +age > maxAge:
                console.log("Keep calm and look Culture channel");
                break;
            default:
                console.log("Technical work");
        }
    }
};

age = [17, 18, 60, 61, "2", "aaa"];

age.forEach(item => {
    checkAge(item);
});
