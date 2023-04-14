/**
 * The function returns the longest word from a given sentence.
 * @param sentence - The input sentence from which the longest word needs to be extracted.
 * @returns The function `LongestWord` returns the longest word from the input sentence.
 */
function LongestWord(sentence) {
    let result = sentence.match(/[a-z]+/gi).sort((a, b) => {
        return b.length - a.length;
    });
    return result[0];
}

console.log(LongestWord("fun&!! time")); // output LongestWord