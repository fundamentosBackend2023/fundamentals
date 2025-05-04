const read = require('node:readline');

const myRl = read.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (message) => {
    return new Promise((resolve, reject) => {
        myRl.question(message, (answer) => {
            answer ? resolve(answer) : reject('There was some issue');
        });
    });
}

(async () => {
    const name = await askQuestion('What\'s your favorite color ');
    console.log(`Hello, ${name}!`);
    const color = await askQuestion('What\'s your favorite color ');
    console.log(`${color} is a nice color`);
    const meal = await askQuestion('What\'s your favorite meal ');
    console.log(`${meal} is really popular`);
    const person = {
        name: name,
        favouriteColor: color,
        favouriteMeal: meal
    }
    console.log(person); // O guardar en DB
    myRl.close();
})();