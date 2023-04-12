function SumOfNumbersArray(array) {
    //Sum-Without-The-Highest-And-The-Lowest-Number
    if (array == null) return 0;

    return array.sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, cur) => acc + cur, 0);
}

console.log(SumOfNumbersArray([1, 1, 2, 5, 9])); // 8
console.log(SumOfNumbersArray([1, -6, 2, 155, 9])); // 12
