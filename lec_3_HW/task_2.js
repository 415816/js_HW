let x;
let result;
// let D = b^2 - 4*a*c;


const getSolution = (a, b, c) => {
    let D = b^2 - 4*a*c;
if (D > 0) {
    x = (-b + Math.sqrt(D)) / (2 * a);
    result = `x1 = ${x}`;
    x = (-b - Math.sqrt(D)) / (2 * a);
    return result += `, x2 = ${x}`;
} else if (D === 0) {
    x = -b / (2 * a);
    return result = `x = ${x}`;
} else {
    return result = "No roots";
}
}
console.log(`Ответ к уравнению 1: ${getSolution(1, -6, 9)}, Ответ к уравнению 2: ${getSolution(1, -4, -5)}`);