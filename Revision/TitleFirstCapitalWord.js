function TitleFirstCapitalWord(array) {

    // First capital word should be the first word
    let result = array.toLowerCase().split(' ').map(function(word) {
        return word[0].toUpperCase() + word.slice(1);
    });
    
    return result.join(' ');
        
}

console.log(TitleFirstCapitalWord('i love you'));  // I Love You
