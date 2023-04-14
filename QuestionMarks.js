/**
 * The function checks if there are exactly three question marks between any two numbers in a string
 * that add up to 10.
 * @param str - The input string that the function is checking for the presence of a specific pattern.
 * @returns a boolean value. It will return true if there are two numbers in the string that add up to
 * 10 and there are at least three question marks between them. Otherwise, it will return false.
 */
function QuestionsMarks(str) {
    result = false;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
           if (Number(str[i]) + Number(str[j]) === 10){
            result = true;
            if(str.slice(i, j).split("?").length -1 < 3 ) {
                return false;
            }
           }
        }
    }

    return result;
}

console.log(QuestionsMarks("100"));