function SumWithOutTheHeighestAndLowerNumber(arr) {
    return arr == null ? 0 : arr.sort((a,b) => a-b).slice(1, -1).reduce((acc, cum) => acc + cum, 0);
}

console.log(SumWithOutTheHeighestAndLowerNumber([])); // 0 
console.log(SumWithOutTheHeighestAndLowerNumber([1,1,2,3,4,4])); // 10 
console.log(SumWithOutTheHeighestAndLowerNumber([11, 0, 2,3,4,4])); // 13