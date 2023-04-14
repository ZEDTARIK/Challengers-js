/**
 * The function reverses a given string by splitting it into an array of characters, reversing the
 * order of the array, and then joining the characters back into a string.
 * @param str - a string that needs to be reversed.
 * @returns The function `ReverseString` returns a reversed version of the input string `str`. It
 * achieves this by splitting the string into an array of characters, reversing the order of the array,
 * and then joining the characters back into a string.
 */
function ReverseString(str) {
    return str.split("").reverse().join("");

    /*
    var result= "";
    for(let i= str.length -1; i>=0; i--) {
        result +=str[i];
    }
    return result;
    */
}

console.log(ReverseString("Hello")); // return olleH