// // const ourPizzas = ["Hawaiian", "Margherita", "Capricciosa", "Seafood"];
// const ourPizzas = ["Pepperoni", "Capricciosa", "Diabola", "4 Cheese", "Hawaiian"];

// const searchSamePizza = pizzas => {
//     const uniquePizzas = [];
//     const competitorPizzas = ["Pepperoni", "Capricciosa", "Diabola", "4 Cheese", "Hawaiian"];

//     pizzas.forEach(pizza => {
//         if (!competitorPizzas.includes(pizza)) {
//             uniquePizzas.push(pizza);
//         }
//     });
//     if (uniquePizzas.length === 0) {
//         uniquePizzas.push(null); // OR uniquePizzas = null; ?
//     }

//     return uniquePizzas;
// };

// console.log(searchSamePizza(ourPizzas));

//========================================================================================================
// const searchBiggestWord = sentence => {
//     const words = sentence.split(" ");
//     const biggestArray = [];
//     let biggestWord = "";
//     words.forEach(word => {
//         if (word.length > biggestWord.length) {
//             biggestWord = word;
//         }
//     });
//     words.forEach(word => {
//         if (word.length === biggestWord.length) {
//             biggestArray.push(word);
//         }
//     });
//     console.log(biggestArray);
// };

// searchBiggestWord("I am the biggestt word in this sentence");

//========================================================================================================
const uniqueNumbers = numArr => {
    const uniqueNums = [];
    numArr.forEach(num => {
        if (!uniqueNums.includes(num)) {
            uniqueNums.push(num);
        }
    });
    return uniqueNums;
};

// console.log(uniqueNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4]));

const checkPolindrom = word => {
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return "This word is not a polindrom";
        }
    }
    return "This word is a polindrom";
};
console.log(checkPolindrom("madam"));
console.log(checkPolindrom("hello"));
