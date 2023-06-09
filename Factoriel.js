/**
 * The function calculates the factorial of a given number using recursion.
 * @param num - The parameter "num" is a number for which the factorial is to be calculated.
 * @returns the factorial of the input number 'num'.
 */
function Factorial(num) {
    return (num ===1 ? 1 : num * Factorial(num -1));
}

console.log(Factorial(8)); // 8*7*6*5*4*3*2*1  output 40320
console.log(Factorial(4)); // 4*3*2*1  output 24