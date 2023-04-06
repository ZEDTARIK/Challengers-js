function Factorial(num) {
    return (num ===1 ? 1 : num * Factorial(num -1));
}

console.log(Factorial(8)); // 8*7*6*5*4*3*2*1  output 40320
console.log(Factorial(4)); // 4*3*2*1  output 24