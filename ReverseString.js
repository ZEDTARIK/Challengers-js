function ReverseString(str) {
    // return reverse word
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