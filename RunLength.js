/**
 * The RunLength function compresses a string by counting consecutive characters and outputting the
 * count followed by the character.
 * @param str - The input string that needs to be compressed using run-length encoding.
 * @returns The function `RunLength` is returning a string that represents the run-length encoding of
 * the input string `str`.
 */
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