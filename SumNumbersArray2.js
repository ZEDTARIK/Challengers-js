/**
 * The function calculates the sum of all numbers in an array except for the smallest and largest
 * values.
 * @param array - an array of numbers for which we want to find the sum of all numbers except the
 * smallest and largest numbers in the array.
 * @returns The function `SumOfNumbersArray` is returning the sum of all the numbers in the input array
 * except for the smallest and largest numbers. If the input array is null, it returns 0.
 */
function SumOfNumbersArray(array) {
    if (array == null) return 0;

    return array.sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, cur) => acc + cur, 0);
}

console.log(SumOfNumbersArray([1, 1, 2, 5, 9])); // 8
console.log(SumOfNumbersArray([1, -6, 2, 155, 9])); // 12
