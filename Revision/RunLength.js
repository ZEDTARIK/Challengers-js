function RunLength(str) {

    str= str.match(/[a-z]+/gi).join('');

    let count = 1;
    let result= '';
    

    for(let i=0; i< str.length; i++) {
        if(str[i] === str[i+1]) {
            
            count++;
        } else {
            result += count+ str[i];
            count = 1;
        }
    }

    return result;
}

console.log(RunLength("wwwZZpO?.74")); // 3w2Z1p1O
console.log(RunLength("TTTyymTTTf")); //3T2y1m3T1f