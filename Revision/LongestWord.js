function LongestWord(sentence) {
    return  sentence.match(/[a-z]+/gi).sort((a,b) => b.length - a.length)[0];
}

console.log(LongestWord('i Love you?/?')); // Love
console.log(LongestWord('I learn Javascript 123456789')); // Javascript