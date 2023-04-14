/**
 * The function takes an array of two strings, splits them into arrays, finds the common elements
 * between them, and returns them as a string or 'false' if there are no common elements.
 * @param strArray - an array of two strings, each containing a comma-separated list of integers.
 * @returns The function `FindIntersection` returns an array of common elements between the two arrays
 * passed as strings in `strArray`. If there are no common elements, it returns the string 'false'.
 */
function FindIntersection(strArray) {
    let firstArray = strArray[0].split(',');
    let secondArray = strArray[1].split(',');
    var result = firstArray.filter(x => secondArray.find(a => a === x));
    return result.length > 0 ? result.join(',') : 'false' 
}

console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));