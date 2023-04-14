/**
 * The function calculates the sum of multiple numbers, including two required parameters and any
 * number of optional parameters.
 * @param a - The first parameter of the function, which is a number and will be added to the sum.
 * @param b - The parameter "b" is the second parameter of the function "Sum".
 * @param values - The `values` parameter is a rest parameter, indicated by the use of the spread
 * operator (`...`). It allows the function to accept any number of additional arguments after the
 * first two (`a` and `b`), which are then collected into an array called `values`. The function then
 * iterates
 * @returns The function `Sum` is returning the sum of all the input values, including `a`, `b`, and
 * any additional values passed in through the rest parameter `values`.
 */
function Sum(a, b, ...values) {
    let sum = a + b;
    values.forEach(x => sum += x);
    return sum;
}

console.log(Sum(20, 100, 500, 10));