function RunLength(str) {
    let count = 1;
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += count + str[i];
            count = 1;
        }
    }

    return result;
}

console.log(RunLength("wwwTTOpVmm")); // output 3w2T1O1p1V2m