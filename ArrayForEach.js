const score = [90, 15, 14, 74, 62, 47];

for(const point of score) {
    //console.log(`${point > 50 ? "higer than 50" : "Lower than 50"}`);
}

score.forEach(element => {
    console.log(`${element > 50 ? "higer than 50" : "Lower than 50"}`);
});