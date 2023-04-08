function Palindrom(str) {
    var regx = /[\W_]/g;
    var smallStr  = str.toLowerCase().replace(regx, '');
    if(str === smallStr) return true;
    return false;

}

console.log(Palindrom('eye')) // true
console.log(Palindrom('racecar')) // true
console.log(Palindrom('is not palindrom')) // fase
