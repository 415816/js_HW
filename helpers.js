function countVowels(word) {
    const vowels = /[aeiou]/g;
    let matches = word.toLowerCase().match(vowels);
    return matches ? matches.length : 0;
}

module.exports = { countVowels };
