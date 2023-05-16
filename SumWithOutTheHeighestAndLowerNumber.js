/**
 * The function returns the sum of an array after removing the highest and lowest numbers.
 * @param arr - an array of numbers for which we want to find the sum of all the numbers except the
 * highest and lowest numbers.
 * @returns The function `SumWithOutTheHeighestAndLowerNumber` is returning the sum of all the numbers
 * in the input array `arr` except for the highest and lowest numbers. If the input array is `null`, it
 * returns `0`.
 */
function SumWithOutTheHeighestAndLowerNumber(arr) {
    return arr == null ? 0 : arr.sort((a,b) => a-b).slice(1, -1).reduce((acc, cum) => acc + cum, 0);
}

console.log(SumWithOutTheHeighestAndLowerNumber([])); // 0 
console.log(SumWithOutTheHeighestAndLowerNumber([1,1,2,3,4,4])); // 10 
console.log(SumWithOutTheHeighestAndLowerNumber([11, 0, 2,3,4,4])); // 13