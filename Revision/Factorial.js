function Factorial(number) {
    if(number > 0 ) return number === 1 ? 1 : number * Factorial(number - 1);
    return 0;
}


console.log(Factorial(4)); // 24
console.log(Factorial(2)); // 2 
console.log(Factorial(8)); //  40320
console.log(Factorial(0)); // 0 
console.log(Factorial(1)); // 1