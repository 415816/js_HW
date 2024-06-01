// let word = "СЛОВОР";

// const counterVowelsAndConsonants = word => {
//     let vowels = 0;
//     let consonants = 0;

//     for (let i = 0; i < word.length; i++) {
//         vowels = word.toLowerCase().match(/[aeiouаеёиоуыэюя]/gi) || [];
//         consonants = word.length - vowels.length;
//     }
//     return `Word "${word}" contains ${vowels.length} vowels and ${consonants} consonants: `;
// };

// console.log(counterVowelsAndConsonants(word));

const encryptCesar = (str, shift) => {
    let move;
    let newStr = "";
    if (shift === "+1") {
        move = 1;
    } else if (shift === "-1") {
        move = -1;
    }

    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) === 65 && move === -1) {
            newStr += String.fromCharCode(91 + move);
            continue;
        }
        if (str.charCodeAt(i) === 90 && move === 1) {
            newStr += String.fromCharCode(64 + move);
            continue;
        }
        if (str.charCodeAt(i) === 97 && move === -1) {
            newStr += String.fromCharCode(123 + move);
            continue;
        }
        if (str.charCodeAt(i) === 122 && move === 1) {
            newStr += String.fromCharCode(96 + move);
            continue;
        }

        newStr += String.fromCharCode(str.charCodeAt(i) + move);
    }
    return newStr;
};

console.log(encryptCesar("AbC", "-1"));
console.log(encryptCesar("ZzZ", "+1"));
