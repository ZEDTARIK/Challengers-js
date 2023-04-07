function SumOfNumbersArray(array) {
    // return Sum of numbers inside array solo Positives Numbers

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