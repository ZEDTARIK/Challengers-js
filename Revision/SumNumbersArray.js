function SumNumbersOfArray(array) {

    // sum of numbers in array
    
    /*
     let result = array.reduce(function(cum, current) {
         return cum + current;
     }, 0);
     return result;
    */

    //  Sum of numbers in array only positive numbers
    let result = array.reduce(function(cum, current) {
         if (current > 0) {
             return cum + current;
         }
         return cum;
     });
     return result;

}

console.log(SumNumbersOfArray([1, -8, 3, 2, -3])); // returns 6
