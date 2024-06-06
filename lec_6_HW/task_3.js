const sumDigits = num => {
    if (num < 10) {
        return num;
    } else {
        let digitSum = (num % 10) + sumDigits(Math.floor(num / 10));
        if (digitSum >= 10) {
            digitSum = sumDigits(digitSum);
        }
        return digitSum;
    }
};

// console.log(sumDigits(123));
// console.log(sumDigits(19));

const replaceSimilarLetters = str => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            newStr += String.fromCharCode(str.charCodeAt(i) + 1);
            i++;
            console.log(newStr);
        } else {
            newStr += str[i];
        }
    }
    return newStr;
};

// console.log(replaceSimilarLetters("abbcdd"));
console.log(replaceSimilarLetters("aabc"));
