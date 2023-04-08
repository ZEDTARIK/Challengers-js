function FindIntersection(strArray) {
    // find intersection of array of strings

    let firstArray = strArray[0].split(',');
    let secondArray = strArray[1].split(',');
    var result = firstArray.filter(x => secondArray.find(a => a === x));
    return result.length > 0 ? result.join(',') : 'false' 
}

console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));