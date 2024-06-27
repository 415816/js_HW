const { countVowels } = require("../helpers");

const str = "I am the best AQA ever!";

function replaceLetterToCount(str) {
    let count = {};

    str = str.toLowerCase();

    for (let char of str) {
        if (char.match(/[a-z]/i)) {
            count[char] = count[char] ? count[char] + 1 : 1;
        }
    }

    let result = "";
    for (let char of str) {
        if (char.match(/[a-z]/i)) {
            result += count[char];
        } else {
            result += char;
        }
    }

    return result;
}

let output = replaceLetterToCount(str);
// console.log(output);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const prices = [
    64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 765, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21,
    321, 123,
];

const actionPrices = prices => {
    let sum = 0;
    let average = 0;
    let counter = 0;

    prices.forEach(price => {
        sum += price;
        counter++;
    });
    average = sum / counter;
    return `Итого: ${sum} $, средняя цена товара: ${average} $`;
};
// console.log(actionPrices(prices));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const sortByVowelCount = words => {
    return words.sort((a, b) => countVowels(a) - countVowels(b));
};

let words = ["one", "two", "three", "eleven", "fourteen"];
let sortedWords = sortByVowelCount(words);
console.log(sortedWords);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function countBrackets(arr) {
    let flatArray = arr.flat(Infinity);
    let openCount = flatArray.filter(char => char === "(").length;
    let closeCount = flatArray.filter(char => char === ")").length;

    return openCount === closeCount;
}

let bracketsArrayFalse = ["(", ["("], ")", "(", "(", "(", [[")"], ")"], ")", ")", ")"];
let bracketsArrayTrue = ["(", ["("], ")", "(", "(", "(", [[")"], ")"], ")", ")"];

// console.log(countBrackets(bracketsArrayFalse));
// console.log(countBrackets(bracketsArrayTrue));
