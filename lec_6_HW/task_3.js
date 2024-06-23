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


function nextChar(c) {
    return c === 'z' ? 'a' : String.fromCharCode(c.charCodeAt(0) + 1);
}

function replaceSimilarLetters(str) {
    let pattern = /(.)\1/;
    while (pattern.test(str)) {
        str = str.replace(pattern, (match, p1) => nextChar(p1));
    }
    return str;
}

console.log(replaceSimilarLetters("aabc"));
