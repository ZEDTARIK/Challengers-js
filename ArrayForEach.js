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

// console.log(scoreWord);

const numbers = [9.23, 10.58, 41.12];
const integers = numbers.map(number => Math.round(number));
// console.log(integers);


// array filter
const tasks = [
    { task: "Learn JS", done: true },
    { task: "Learn Laravel", done: false },
    { task: "Learn Angular", done: false }
];

const completedTask = tasks.filter(task => task.done);
//console.table(completedTask);


const members = [
    {
        name: "Elon Musk",
        companies: ["Telsa", "SpaceX", "StarLink"]
    },
    {
        name: "Mark Zuckerberg",
        companies: ["facebook", "whatSup", "Instagram"]
    },
    {
        name: "Jack Dorsey",
        companies: ["Twitter", "Square"]
    }
];

const membersWithCompany = members.reduce((acc, curr) => {
    return acc.concat(curr.companies);
}, []);

console.table(membersWithCompany);


const posts  = [
    {
        title: "Post 1",
        lang: ["English", "French", "German"]
    },
    {
        title: "Post 2",
        lang: ["English", "French", "German", "Spanish"]
    }
];
 // eliminate double languages
const translatedLanguages =  [... new Set(posts.map((post) => post.lang).reduce((acc, post) => acc.concat(post)))];

console.table(translatedLanguages);


