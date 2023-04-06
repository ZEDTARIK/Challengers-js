function LongestWord(sentence) {

    // return longest word from phrase
    let result = sentence.match(/[a-z]+/gi).sort((a, b) => {
        return b.length - a.length;
    });

    return result[0];

}

console.log(LongestWord("fun&!! time")); // output LongestWord