/**
 * The DoubleChar function takes a string and returns a new string with each character repeated twice.
 * @param str - The input string that needs to be doubled.
 * @returns The function `DoubleChar` is returning a new string where each character in the original
 * string `str` is repeated twice. The `split('')` method is used to convert the string into an array
 * of characters, then the `map` method is used to apply the `repeat(2)` method to each character, and
 * finally the `join('')` method is used to convert the array
 */
function DoubleChar(str) {
    return str.split('')
        .map(e => e.repeat(2))
        .join('');
}

console.log(DoubleChar('1 2 3'));
