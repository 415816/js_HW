const getOnlyNumbers = arrayOnAnyValues => {
    let result = [];
    result.push(...arrayOnAnyValues.filter(value => typeof value === "number" && !isNaN(value)));
    return result;
};
console.log(getOnlyNumbers([NaN, 1, true, 5, "hello", undefined, 15.5, {}, "2", []]));
