//1.
// ===========================================================================================================
const currency = value => {
    let result = [value];
    const units = ["B", "Kb", "Mb", "Gb", "Tb"];
    let i = 0;
    while ((result[i] / 1000).toFixed(1) > 1) {
        result.push((result[i] / 1000).toFixed(1));
        i++;
    }
    return `${value} B = ${result[result.length - 1] + " " + units[result.length - 1]}`;
};

console.log(currency(4548));
console.log(currency(454548));
console.log(currency(1454548));

// 2.
// ===========================================================================================================
const star = "*";
const space = " ";

// for (let i = 4, j = 1; i > 0; i--, j += 2) {
//     console.log(space.repeat(i) + star.repeat(j) + space.repeat(i));
// }

// for (let i = 4, j = 1; i > 0; i--, j += 2) {
//     console.log(space.repeat(i) + star.repeat(j) + space.repeat(i));
//     if (i == 1) {
//         for (let k = 0, l = 9; k < 5; k++, l -= 2) {
//             console.log(space.repeat(k) + star.repeat(l) + space.repeat(k));
//         }
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`Число ${i} делится без остатка и на 3, и на 5`);
//     } else if (i % 3 === 0) {
//         console.log(`Число ${i} делится без остатка на 3`);
//     } else if (i % 5 === 0) {
//         console.log(`Число ${i} делится без остатка на 5`);
//     } else {
//         console.log(`Число ${i} НЕ делится без остатка ни на 3, ни на 5`);
//     }
// }

const camelCaser = str => {
    return str
        .split(" ")
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");
};

// console.log(camelCaser("I am super engineer"));
