const score = [90, 15, 14, 74, 62, 47];

for (const point of score) {
    //console.log(`${point > 50 ? "higer than 50" : "Lower than 50"}`);
}

score.forEach(element => {
    // console.log(`${element > 50 ? "higer than 50" : "Lower than 50"}`);
});

const scoreWord = score.map(point => {

    return point > 50 ? "higer than 50" : "Lower than 50";
});

console.log(scoreWord);

const numbers = [9.23, 10.58, 41.12];
const integers = numbers.map(number => Math.round(number));
console.log(integers);