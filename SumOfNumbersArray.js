/**
 * The function returns the sum of positive numbers in an array.
 * @param array - An array of numbers.
 * @returns The function `SumOfNumbersArray` returns the sum of positive numbers inside the input
 * array. It uses the `filter` method to create a new array with only positive numbers, and then uses
 * the `reduce` method to sum up the values in the filtered array.
 */
function SumOfNumbersArray(array) {
    return array.filter((arr) => arr > 0).reduce((acc, cur) => acc+cur, 0);

/*
    let initValue= 0;
    for(let i=0; i< array.length; i++) {
        if(array[i] > 0) initValue += array[i];        
    }
    return initValue;
    */
}

console.log(SumOfNumbersArray([-1, -6, 7, 2, 3, 0 ])); // 12